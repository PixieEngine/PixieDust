( ->
  Color2 = (args...) ->
    __proto__: Color::

    switch args.length
      when 0
        parsedColor = [0, 0, 0, 1]
      when 1
        if Object.isArray(colorArray = args.first())

          rgbMap = (parseFloat(channel) for channel in colorArray)

          alpha = if args[1]? then parseFloat args[1] else 1.0

          parsedColor = rgbMap.concat(alpha)        


    r: parsedColor[0]
    g: parsedColor[1] 
    b: parsedColor[2] 
    a: parsedColor[3] 

  Color:: =
    aMethod: ->
      true

  (exports ? this)["Color2"] = Color2
)()