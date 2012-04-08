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
@name Module
@module
@constructor
@param {Object} I Instance variables
@param {GameObject} self Reference to including object
###

Metered = (I={}, self) ->
  Object.reverseMerge I,
    meters: []
    
  self.bind 'overlay', (canvas) ->
    I.meters.each (meterData) ->
      {
        borderColor,
        color,
        font, 
        height, 
        nameColor, 
        name,
        position: {x, y}
        radius,
        showName,
        text,
        width
      } = meterData
      
      if not I[name]
        I[name] = 100
      
      if not I["max#{name.capitalize()}"]
        if I[name]
          I["max#{name.capitalize()}"] = I[name]
        else
          I["max#{name.capitalize()}"] = 100
          
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
          width: 1.5  

  ###*
  Configures a meter to be drawn each overlay event.

  <code><pre>
  player = GameObject

  player.include Metered      

  player.meter 'health',
    
    showName: true
    name: "health"
    position: 
      x: 5
      y: 5

  # => 
  </pre></code>

  @name position
  @methodOf Bounded#
  @returns {Point} The position of this object
  ###          
  meter: (options={}) ->
    Object.reverseMerge options,
      borderColor: 'white'
      showName: false
      color: 'green'
      nameColor: 'white'
      font: '14px Helvetica'
      height: 10
      position: 
        x: 0
        y: 0
      radius: 2
      text: null
      width: 100 
    
    I.meters.push options