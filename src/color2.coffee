( ->
  Color2 = (args...) ->
    __proto__: Color::

    switch args.length
      when 0
        parsedColor = [0, 0, 0, 1]
      when 1
        if Object.isArray(channels = args.first())
          parsedColor = (parseFloat(channel) for channel in channels)
      when 2
        alpha = parseFloat(args[1])

        if Object.isArray(channels = args.first())
          parsedColor = (parseFloat(channel) for channel in channels)
          parsedColor[3] = alpha
        #else
        #  parsedColor = lookup[normalizeKey(color)] || parseHex(color) || parseRGB(color) || parseHSL(color)
        #  parsedColor[3] = alpha

    r: parsedColor[0]
    g: parsedColor[1] 
    b: parsedColor[2] 
    a: parsedColor[3] 

  Color:: =
    aMethod: ->
      true

  (exports ? this)["Color2"] = Color2
)()