###*
The Metered module provides a simple drop-in
meter ui to track arbitrary numeric attributes.

    player = GameObject
      health: 100
      heathMax: 100
    
    enemy = GameObject
      health: 500
    
    someOtherObject = GameObject
    
    player.meter 'health'
    # => Sets up a health meter that will be drawn during the player overlay event
    
    enemy.meter 'health'
    # => Sets up a health meter that will be drawn during the enemy overlay event. 
    # Since healthMax wasn't provided, it is set to the value of I.health (500)
    
    someOtherObject.meter 'turbo'
    # => Sets up a turbo meter that will be drawn during the someOtherObject overlay event. 
    # Since neither turbo or turboMax were provided, they are both set to 100.
    

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
        
  self.bind 'overlay', (canvas) ->
    for name, meterData of I.meters
      {
        backgroundColor,
        border: {color:borderColor, radius:borderRadius, width:borderWidth}
        color,
        height, 
        show,
        width,
        x,
        y
      } = meterData
      
      {x, y} = meterData.position if meterData.position?

      return unless show

      ratio = (I[name] / I["#{name}Max"]).clamp(0, 1)

      canvas.drawRoundRect
        color: backgroundColor
        radius: borderRadius
        x: x
        y: y
        width: width
        height: height
      
      canvas.drawRoundRect
        color: color
        x: x
        y: y
        radius: borderRadius
        width: width * ratio
        height: height
        
      canvas.drawRoundRect
        x: x
        y: y
        width: width
        height: height
        radius: borderRadius
        stroke:
          color: borderColor
          width: borderWidth
  ###*
  Configures a meter to be drawn each overlay event.

      player = GameObject
    
      player.include Metered      
    
      player.meter 'health',
        border
          color: 'brown'
          radius: 3
        color: 'pink'
        height: 20
        x: 5
        y: 5
        show: true
        width: 150
    
      # => Sets up a health meter, using all the configuration options

  @name meter
  @methodOf Metered#
  @param {String} name The name of the property to meter
  @param {Object} options The meter configuration options
  @param {String} border: color Color of the meter's border
  @param {Number} border: width Width of the meter's border
  @param {String} color Color of the meter's inner rectangle
  @param {Number} height Height of the meter
  @param {Object} position An x, y object representing the position of the meter
  @param {Number} x x position of the meter
  @param {Number} y y position of the meter
  @param {Number} border: radius Border radius of the meter
  @param {Boolean} show Boolean to toggle whether of not to display the meter
  @param {Number} width How wide the meter is
  ###          
  meter: (name, options={}) ->
    Object.reverseMerge options,
      backgroundColor: 'black'
      border:
        color: 'white'
        radius: 2
        width: 1.5
      color: 'green'
      height: 10
      x: 0
      y: 0
      show: true
      width: 100 
        
    I[name] ?= 100
    
    if not I["#{name}Max"]
      if I[name]
        I["#{name}Max"] = I[name]
      else
        I["#{name}Max"] = 100
    
    I.meters[name] = options
    
  ###*
  Shows the named meter

      player = GameObject
    
      player.include Metered      
    
      # creates a health meter but disables visibility
      player.meter 'health'
        show: false
    
      # enables visibility for the meter named 'health'
      player.showMeter 'health'

  @name showMeter
  @methodOf Metered#
  @param {String} name The name of the meter to show
  ###      
  showMeter: (name) ->
    I.meters[name].show = true
 
  ###*
  Hides the named meter

      player = GameObject
    
      player.include Metered      
    
      # creates a health meter
      player.meter 'health'
    
      # disables visibility for the meter named 'health'
      player.hideMeter 'health'

  @name hideMeter
  @methodOf Metered#
  @param {String} name The name of the meter to hide
  ###          
  hideMeter: (name) ->
    I.meters[name].show = false

  ###*
  Toggles visibility of the named meter

      player = GameObject
    
      player.include Metered      
    
      # creates a health meter
      player.meter 'health'
    
      # toggles visibility for the meter named 'health'
      player.toggleMeter 'health'

  @name toggleMeter
  @methodOf Metered#
  @param {String} name The name of the meter to toggle
  ###    
  toggleMeter: (name) ->
    I.meters[name].show = not I.meters[name].show
    