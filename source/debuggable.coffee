###*
The Debuggable Module provides a simple API to easily display
an object's properties onscreen. This mixin comes with predefined
attribute filters so that you can exclude irrelevant data.

    player = GameObject
      x: 40
      y: 14
      spriteName: null
      numericErrorProperty: NaN
    
    player.include Debuggable
    
    # sets up debug output for all player's properties
    # at the starting position (0, 0)
    player.debug
      filter: 'all'

@name Debuggable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Debuggable = (I={}, self) ->
  COL_HEIGHT = 175
  ROW_HEIGHT = 9
  FONT_SIZE = 9

  debugX = 0
  debugY = 0

  Object.reverseMerge I,
    debug:
      enabled: false
      color: 'black'
      filter: 'all'
      bounds: true
      velocity: true
      position:
        x: 0
        y: 0
  
  initialI = Object.extend({}, I)
  
  debugBounds = (canvas) ->
    canvas.drawRect
      color: 'rgba(255, 0, 255, 0.4)'
      bounds: self.bounds()  
  
  debugVelocity = (canvas) ->
    if I.velocity?
      canvas.withTransform Matrix.translation(I.x, I.y), (canvas) ->  
        thickness = 4
        
        color = 'rgba(255, 0, 0, 0.5)'
        
        canvas.drawRect
          x: 0
          y: -thickness / 2
          width: I.velocity.x
          height: thickness
          color: color

        canvas.drawRect
          x: -thickness / 2
          y: 0
          width: thickness
          height: I.velocity.y
          color: color

  filterProperties = (properties) ->
    results = {}
    
    switch I.debug.filter
      when 'all'
        results = properties
      when 'undefined'
        for key, value of properties
          results[key] = value if not value? or nan(value)
      when 'changed'
        for key, value of properties
          results[key] = value if initialI[key] isnt value
      
    return results          
          
  sortedKeys = ->
    keys = []
      
    for key, value of filterProperties(I)
      keys.push key
        
    keys.sort()
  
  nan = (value) ->
    typeof value is 'number' and isNaN(value)
    
  drawDebugLine = (text, canvas, x, y) ->    
    canvas.drawText
      color: I.debug.color
      x: x + I.debug.position.x
      y: y + I.debug.position.y
      text: text

    debugY += ROW_HEIGHT

  getPropertyRow = (key, value, canvas) ->
    # exclude functions returned by iterating over 
    # objects like Color, Point, etc.
    if typeof value is 'function'
      return
    else if Object.isObject(value)
      drawDebugLine(key, canvas, debugX, debugY)

      debugX += 8

      for k, v of value
        getPropertyRow(k, v, canvas)

      debugX -= 8
    else if Object.isArray(value)
      toStringArray = (for v in value
        if Object.isObject(v) 
          v.I.class || v.toString()
        else
          v
      )

      drawDebugLine("#{key}(#{value.length}): #{toStringArray}", canvas, debugX, debugY)
    else
      value = processValue(value)

      drawDebugLine("#{key}: #{value}", canvas, debugX, debugY)

  processValue = (value) ->
    output = value

    try 
      parsedNumber = parseFloat(value)      

    if parsedNumber
      if typeof value isnt 'string' and parsedNumber isnt parseInt(value)
        output = value.toFixed(3)   

    return output
  
  self.bind "update", ->
    if justPressed['0']
      self.toggleDebug()

  self.bind "overlay", (canvas) ->   
    if I.debug.enabled
      canvas.font "#{FONT_SIZE}px Monaco"

      debugX = 0
      debugY = ROW_HEIGHT
      
      for key in sortedKeys()
        getPropertyRow(key, I[key], canvas) 

      debugX += COL_HEIGHT
      debugY = ROW_HEIGHT 
      
      debugBounds(canvas) if I.debug.bounds
      debugVelocity(canvas) if I.debug.velocity

  ###*
  Enable debugging display for the calling GameObject.

      player = GameObject
        x: 40
        y: 14
        spriteName: null
        numericErrorProperty: NaN
      
      player.include Debuggable
    
      # sets up debug output for all player's properties
      # at the starting position (0, 0)
      player.debug
        filter: 'all'
      
      player.I.y = 45
      
      # sets up debug output for only properties that have
      # changed since initialization. In this case only y
      # would be displayed.
      player.debug
        filter: 'changed'
      
      # sets up debug output for properties that are <code>undefined</code>, 
      # <code>null</code>, or <code>NaN</code>. In this case spriteName and
      # numericErrorProperty would be displayed.
      player.debug
        filter: 'undefined'
      
      # sets up debug output using all possible configuration options
      player.debug
        bounds: true # set this to false to disable visual debugging of the object's bounding box
        color: 'red' # color of debug text
        filter: 'all'
        x: 30 # x position to start printing debug information
        y: 50 # y position to start printing debug information
        velocity: true # set this to false to disable visual debugging of the object's velocity

  @name debug
  @methodOf Debuggable#
  @param {Object} Options to configure debug output
  @param {Boolean} bounds Whether or not to visually debug the object's bounds
  @param {Color|String} color The color of the debug text
  @param {String} filter Choices include 'all', 'changed', and 'undefined'
  @param {Number} x The x position to start drawing the debug information
  @param {Number} y The y position to start drawing the debug information
  @param {Boolean} velocity Whether or not to visually debug the object's velocity
  ###         
  debug: (options={}) ->
    {x, y} = options
    
    I.debug.position.x = x if x?
    I.debug.position.y = y if y?
      
    Object.extend I.debug, options

    I.debug.enabled = true

  ###*
  Toggle display of debug information.

      player = GameObject()
    
      player.include Debuggable
    
      # enables debug display
      player.debug()
      
      # disables debug display
      player.toggleDisable()
      
      # if false is passed to toggleDisplay, then debugging is disabled.  
      player.toggleDisplay(false)
    
      # if true is passed to toggleDisplay, then debugging is enabled.
      player.toggleDisplay(true)

  @name toggleDebug
  @methodOf Debuggable#
  @param {Boolean} newVal If true is passed then debugging is enabled, if false is passed then debugging is disabled, if nothing is passed, then debug state is toggled.
  ###    
  toggleDebug: (newVal) ->
    if newVal?
      I.debug.enabled = newVal
    else
      I.debug.enabled = not I.debug.enabled