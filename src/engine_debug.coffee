Engine.Debug = (I, self) ->
  COL_HEIGHT = 175
  ROW_HEIGHT = 9
  FONT_SIZE = 9

  debugX = 0
  debugY = 0

  Object.reverseMerge I,
    debuggedObjects: []
    debugEnabled: false
    debugColor: 'white'  

  drawDebugLine = (text, canvas, x, y) ->    
    canvas.drawText
      color: I.debugColor
      x: x
      y: y
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
      I.debugEnabled = not I.debugEnabled

  self.bind "draw", (canvas) ->
    if I.debugEnabled
      for obj in I.debuggedObjects
        canvas.drawRect
          color: 'rgba(255, 0, 255, 0.4)'
          x: obj.I.x - obj.I.width / 2
          y: obj.I.y - obj.I.height / 2
          width: obj.I.width
          height: obj.I.height

  self.bind "overlay", (canvas) -> 
    if I.debugEnabled
      canvas.font "#{FONT_SIZE}px Monaco"

      debugX = 0
      debugY = ROW_HEIGHT

      for obj in I.debuggedObjects
        for key, value of obj.I
          getPropertyRow(key, value, canvas)

        debugX += COL_HEIGHT
        debugY = ROW_HEIGHT 

  addDebug: (obj) ->
    I.debuggedObjects.push obj

  debugBySelector: (selector) ->
    I.debuggedObjects.clear()

    I.debuggedObjects = engine.find(selector)

  removeDebug: (obj) ->
    I.debuggedObjects.remove obj