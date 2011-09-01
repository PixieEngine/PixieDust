( ->
  rgbParser = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(\d?\.?\d*)?\)$/
  hslParser = /^hsla?\((\d{1,3}),\s*(\d?\.?\d*),\s*(\d?\.?\d*),?\s*(\d?\.?\d*)?\)$/

  parseRGB = (colorString) ->
    return undefined unless channels = rgbParser.exec(colorString)

    parsedColor = (parseFloat channel for channel in channels[1..3])
    parsedColor[3] ||= 1.0

    return parsedColor

  parseHex = (hexString) ->
    hexString = hexString.replace(/#/, '')

    switch hexString.length
      when 3, 4
        if hexString.length == 4
          alpha = ((parseInt(hexString.substr(3, 1), 16) * 0x11) / 255.0)
        else
          alpha = 1.0  

        rgb = (parseInt(hexString.substr(i, 1), 16) * 0x11 for i in [0..2])      
        rgb.push(alpha)    

        return rgb

      when 6, 8
        if hexString.length == 8
          alpha = (parseInt(hexString.substr(6, 2), 16) / 255.0)
        else
          alpha = 1.0

        rgb = (parseInt(hexString.substr(2 * i, 2), 16) for i in [0..2])          
        rgb.push(alpha)

        return rgb

      else
        return undefined

  parseHSL = (colorString) ->
    return undefined unless channels = hslParser.exec(colorString)

    parsedColor = (parseFloat channel for channel in channels[1..3])
    parsedColor[3] ||= 1.0

    return hslToRgb(parsedColor)

  hslToRgb = (hsl) ->    
    [h, s, l, a] = (parseFloat(channel) for channel in hsl)
    h /= 360.0
    a ||= 1.0

    r = g = b = null

    hueToRgb = (p, q, t) ->
      t += 1 if t < 0
      t -= 1 if t > 1

      return p + (q - p) * 6 * t if t < 1/6
      return q if t < 1/2
      return p + (q - p) * (2/3 - t) * 6 if t < 2/3
      return p

    if s == 0
      r = g = b = l
    else
      q = (if l < 0.5 then l * (1 + s) else l + s - l * s)
      p = 2 * l - q
      r = hueToRgb(p, q, h + 1/3)
      g = hueToRgb(p, q, h)
      b = hueToRgb(p, q, h - 1/3)

      rgbMap = (channel * 0xFF for channel in [r, g, b])

    return rgbMap.concat(a)

  Color2 = (args...) ->
    switch args.length
      when 0
        parsedColor = [0, 0, 0, 1]
      when 1
        if Object.isArray(color = args.first())
          parsedColor = (parseFloat(channel) for channel in color)
          parsedColor[3] ||= 1.0
        else
          parsedColor = parseHex(color) || parseRGB(color) || parseHSL(color)
          #parsedColor = lookup[normalizeKey(color)] || parseHex(color) || parseRGB(color) || parseHSL(color)
      when 2
        alpha = parseFloat(args[1])

        if Object.isArray(color = args.first())
          parsedColor = (parseFloat(channel) for channel in color)
          parsedColor[3] = alpha
        else
          parsedColor = parseHex(color) || parseRGB(color) || parseHSL(color)
          #parsedColor = lookup[normalizeKey(color)] || parseHex(color) || parseRGB(color) || parseHSL(color)
          parsedColor[3] = alpha
      else     
        parsedColor = (parseFloat(channel) for channel in args)
        parsedColor[3] ||= 1.0   

    throw "#{args.join(',')} is an unknown color" unless parsedColor   

    __proto__: Color2::
    r: parsedColor[0]
    g: parsedColor[1] 
    b: parsedColor[2] 
    a: parsedColor[3] 

  Color2:: =
    complement: ->
      hsl = @toHsl()
      @hue(180)

    equal: (other) ->
      other.r == @r &&
      other.g == @g &&
      other.b == @b &&
      other.a == @a

    hue: (degrees) ->
      hsl = @toHsl()

      hsl[0] = (hsl[0] + degrees) % 360

      return Color2(hslToRgb(hsl))      

    toHex: ->
      padString = (hexString) ->        
        if hexString.length == 1 then pad = "0" else pad = "" 

        return pad + hexString

      hexFromNumber = (number) ->
        return padString(number.toString(16))

      "##{hexFromNumber(@r)}#{hexFromNumber(@g)}#{hexFromNumber(@b)}"  

    toHsl: ->
      min = Math.min(@r, @g, @b)
      max = Math.max(@r, @g, @b)

      hue = saturation = lightness = (max + min) / 2.0

      if max == min
        hue = saturation = 0
      else
        delta = max - min
        saturation = (if lightness > 0.5 then delta / (2 - max - min) else delta / (max + min))  

        switch max
          when @r then hue = (@g - @b) / delta + (if @g < @b then 6 else 0)
          when @g then hue = (@b - @r) / delta + 2
          when @b then hue = (@r - @g) / delta + 4

        hue *= 60

      return [hue, saturation, lightness, @a]      

    toString: ->
      "rgba(#{@r}, #{@g}, #{@b}, #{@a})"

  (exports ? this)["Color2"] = Color2
)()

