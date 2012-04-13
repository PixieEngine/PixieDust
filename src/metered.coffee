###*
The Metered module provides a simple drop-in
meter ui to track arbitrary numeric attributes.

<code><pre>
player = GameObject
  health: 100
  maxHealth: 100

player.include Metered

enemy = GameObject
  health: 500

enemy.include Metered

someOtherObject = GameObject

someOtherObject.include Metered

player.meter 'health'
# => Sets up a health meter that will be drawn during the player overlay event

enemy.meter 'health'
# => Sets up a health meter that will be drawn during the enemy overlay event. 
# Since maxHealth wasn't provided, it is set to the value of I.health (500)

someOtherObject.meter 'turbo'
# => Sets up a turbo meter that will be drawn during the someOtherObject overlay event. 
# Since neither turbo maxTurbo were provided, they are both set to 100.

</pre></code>

Metered module
@name Metered
@module
@constructor
@param {Object} I Instance variables
@param {GameObject} self Reference to including object
###

Metered = (I={}, self) ->
  Object.reverseMerge I,
    meters: {}
    
  setMeter = (name, value) ->
    for meterName, meterData of I.meters
      if meterName is name
        meterData.show = value    
    
  self.bind 'overlay', (canvas) ->
    for name, meterData of I.meters
      {
        borderColor,
        borderWidth,
        color,
        font, 
        height, 
        nameColor, 
        position: {x, y}
        radius,
        show,
        showName,
        text,
        width
      } = meterData
      
      return unless show
          
      ratio = I[name] / I["max#{name.capitalize()}"]
      
      if showName || text
        canvas.font(font)    
        canvas.drawText
          color: nameColor
          x: x
          y: y + 10
          text: text || name.capitalize()     
      
      canvas.drawRect
        color: color
        x: x
        y: y + 15
        width: width * ratio
        height: height      
          
      canvas.drawRoundRect
        x: x
        y: y + 15
        width: width
        height: height
        radius: radius
        stroke:
          color: borderColor
          width: borderWidth 

  ###*
  Configures a meter to be drawn each overlay event.

  <code><pre>
  player = GameObject

  player.include Metered      

  player.meter 'health',
    borderColor: 'brown'
    color: 'pink'
    font: '30px Comic Sans'
    height: 20
    position: 
      x: 5
      y: 5
    radius: 3
    show: true
    showName: true
    text: 'Boss Health'
    width: 150

  # => Sets up a health meter, using all the configuration options
  </pre></code>

  @name meter
  @methodOf Metered#
  @param {String} name The name of the property to meter
  @param {Object} options The meter configuration options
  @param {String} borderColor Color of the meter's border
  @param {Number} borderWidth Width of the meter's border
  @param {String} color Color of the meter's inner rectangle
  @param {String} nameColor Color of the property name displayed above the meter
  @param {String} font Size and style of the meter's font
  @param {Number} height Height of the meter
  @param {Object} position An x, y object representing the position of the meter
  @param {Number} radius Border radius of the meter
  @param {Boolean} show Boolean to toggle whether of not to display the meter
  @param {Boolean} showName Boolean to toggle whether or not to show the attribute associated with the meter
  @param {String} text A String to display over the meter. Overrides default name attribute
  @param {Number} width How wide the meter is
  ###          
  meter: (name, options={}) ->
    Object.reverseMerge options,
      borderColor: 'white'
      borderWidth: 1.5
      color: 'green'
      nameColor: 'white'
      font: '14px Helvetica'
      height: 10
      position: 
        x: 0
        y: 0
      radius: 2
      show: true
      showName: false
      text: null
      width: 100 
        
    if not I[name]
      I[name] = 100
    
    if not I["max#{name.capitalize()}"]
      if I[name]
        I["max#{name.capitalize()}"] = I[name]
      else
        I["max#{name.capitalize()}"] = 100
    
    I.meters[name] = options
    
  ###*
  Shows the named meter

  <code><pre>
  player = GameObject

  player.include Metered      

  # creates a health meter but disables visibility
  player.meter 'health'
    show: false

  # enables visibility for the meter named 'health'
  player.showMeter 'health'
  </pre></code>

  @name meter
  @methodOf Metered#
  @param {String} name The name of the meter to toggle
  ###      
  showMeter: (name) ->
    setMeter(name, true)
    
  hideMeter: (name) ->
    setMeter(name, false)  
    