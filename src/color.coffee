( ->
  rgbParser = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(\d?\.?\d*)?\)$/
  hslParser = /^hsla?\((\d{1,3}),\s*(\d?\.?\d*),\s*(\d?\.?\d*),?\s*(\d?\.?\d*)?\)$/

  parseRGB = (colorString) ->
    return undefined unless channels = rgbParser.exec(colorString)

    parsedColor = (parseFloat channel for channel in channels[1..4])

    parsedColor[3] = 1 if isNaN(parsedColor[3])

    return parsedColor

  parseHSL = (colorString) ->
    return undefined unless channels = hslParser.exec(colorString)

    parsedColor = (parseFloat channel for channel in channels[1..4])

    parsedColor[3] = 1 if isNaN(parsedColor[3])

    return hslToRgb(parsedColor)

  hsvToRgb = (hsv) ->
    r = g = b = null

    [h, s, v, a] = hsv

    a = 1 unless a?

    i = (h / 60).floor()
    f = h / 60 - i
    p = v * (1 - s)
    q = v * (1 - f * s)
    t = v * (1 - (1 - f) * s)

    switch (i % 6)
      when 0
        r = v
        g = t
        b = p
      when 1
        r = q
        g = v
        b = p
      when 2
        r = p
        g = v
        b = t
      when 3
        r = p
        g = q
        b = v
      when 4
        r = t
        g = p
        b = v
      when 5
        r = v
        g = p
        b = q

    rgb = [(r * 255).round(), (g * 255).round(), (b * 255).round()]

    return rgb.concat(a)

  hslToRgb = (hsl) ->    
    [h, s, l, a] = hsl

    h = h % 360
    a = 1 unless a?

    r = g = b = null

    hueToRgb = (p, q, hue) ->
      hue = hue.mod(360)      

      return p + (q - p) * (hue / 60) if hue < 60
      return q if hue < 180
      return p + (q - p) * ((240 - hue) / 60) if hue < 240
      return p

    if s == 0
      r = g = b = l
    else
      q = (if l < 0.5 then l * (1 + s) else l + s - l * s)
      p = 2 * l - q
      r = hueToRgb(p, q, h + 120)
      g = hueToRgb(p, q, h)
      b = hueToRgb(p, q, h - 120)

    rgbMap = ((channel * 255).round() for channel in [r, g, b])

    return rgbMap.concat(a)
    
  channelize = (color, alpha) ->
    return color.channels() if color.channels?
    if Object.isArray color
      if alpha?
        alpha = parseFloat(alpha)
      else if color[3]?
        alpha = parseFloat(color[3])
      else
        alpha = 1

      result = (parseFloat(channel) for channel in color[0..2]).concat(alpha)
    else
      result = Color.lookup?(color) || color.parseHex() || parseRGB(color) || parseHSL(color)

      if alpha?
        result[3] = parseFloat(alpha)

    return result

  ###*
  Create a new color. The constructor is very flexible. It accepts individual r, g, b, a values,
  arrays of r, g, b values, hex strings, rgb strings, hsl strings, other Color objects, 
  and even the named colors from the xkcd survey: http://blog.xkcd.com/2010/05/03/color-survey-results/. 
  If no arguments are given, defaults to transparent.

  <code class="run"><pre>
  individualRgb = Color(23, 56, 49, 0.4)

  arrayRgb = Color([59, 100, 230])

  hex = Color('#ff0000')

  rgb = Color('rgb(0, 255, 0)')

  hsl = Color('hsl(180, 1, 0.5)')

  anotherColor = Color('blue')

  Color(anotherColor)
  # => a new color with the same r, g, b, and alpha values as `anotherColor`

  # You have access to all sorts of weird colors.
  # We give you all the named colors the browser recognizes
  # and the ones from this survey 
  # http://blog.xkcd.com/2010/05/03/color-survey-results/
  namedBrown = Color('Fuzzy Wuzzy Brown')

  # Uutput color in Hex format 
  namedBrown.toHex()
  # => '#c45655'

  # Default behavior
  transparent = Color()

  transparent.toString()
  # => 'rgba(0, 0, 0, 0)' 

  # let's print out the colors on a canvas to see what they look like
  canvas.font('14px Helvetica')
  for color, index in ['individualRgb', 'arrayRgb', 'hex', 'rgb', 'hsl', 'anotherColor', 'namedBrown']
    canvas.centerText
      color: eval(color)
      text: color
      y: 20 * (index + 1)  
  </pre></code>

  @name Color
  @param {Array|Number|String|Color} args... An Array, r, g, b values, 
  a sequence of numbers defining r, g, b values, a hex or hsl string, another Color object, or a named color
  @constructor
  ###
  Color = (args...) ->
    parsedColor = 
      switch args.length
        when 0
          [0, 0, 0, 0]
        when 1
          channelize(args.first())
        when 2
          channelize(args.first(), args.last())
        else     
          channelize(args)

    throw "#{args.join(',')} is an unknown color" unless parsedColor   

    __proto__: Color::
    r: parsedColor[0].round()
    g: parsedColor[1].round()
    b: parsedColor[2].round()
    a: parsedColor[3] 

  Color:: =
    ###*
    Returns the rgba color channels in an array.

    <code><pre>
    transparent =  Color()

    transparent.channels()
    # => [0, 0, 0, 0]

    red = Color("#FF0000")

    red.channels()
    # => [255, 0, 0, 1]

    rgb = Color(200, 34, 2)

    rgb.channels()
    # => [200, 34, 2, 1]
    </pre></code>

    @name channels
    @methodOf Color#

    @returns {Array} Array of r, g, b, and alpha values of the color
    ###  
    channels: ->
      [@r, @g, @b, @a]

    ###*
    A copy of the calling color that is its complementary color on the color wheel.

    <code class="run"><pre>
    red = Color(255, 0, 0)

    cyan = red.complement()

    # to see what they look like
    for color, index in [red, cyan]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60         
    </pre></code>

    @name complement
    @methodOf Color#

    @returns {Color} new color that is a copy of the calling color with its hue shifted by 180 degrees on the color wheel
    ### 
    complement: ->
      @copy().complement$() 

    ###*
    Modifies the calling color to make it the complement of its previous value.

    <code><pre>
    red = Color(255, 0, 0)

    # modifies red in place to make it into cyan
    red.complement$()

    red.toString()
    # => 'rgba(0, 255, 255, 1)'
    </pre></code>

    @name complement$
    @methodOf Color#

    @returns {Color} the color hue shifted by 180 degrees on the color wheel. Modifies the existing color.
    ### 
    complement$: ->
      @shiftHue$(180)

    ###*
    A copy of the calling color.

    <code><pre>
    color = Color(0, 100, 200)

    copy = color.copy()

    color == copy
    # => false

    color.equal(copy)
    # => true
    </pre></code>

    @name copy
    @methodOf Color#

    @returns {Color} A new color. A copy of the calling color
    ### 
    copy: ->
      Color(@r, @g, @b, @a)

    ###*
    Returns a copy of the calling color darkened by `amount` (Lightness of the color ranges from 0 to 1).

    <code class="run"><pre>
    green = Color(0, 255, 0)

    darkGreen = green.darken(0.3)

    # to see what they look like
    for color, index in [green, darkGreen]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60         
    </pre></code>

    @name darken
    @methodOf Color#
    @param {Number} amount Amount to darken color by (between 0 - 1)

    @returns {Color} A new color. The lightness value is reduced by `amount` from the original.
    ###
    darken: (amount) ->
      @copy().darken$(amount)

    ###*
    Modifies the color so that it is darkened by `amount` (Lightness of the color ranges from 0 to 1).

    <code><pre>
    green = Color(0, 255, 0)

    # Modifies green to be darkGreen
    green.darken$(0.3)

    green.toString()
    # => 'rgba(0, 102, 0, 1)'
    </pre></code>

    @name darken$
    @methodOf Color#
    @param {Number} amount Amount to darken color by (between 0 - 1)

    @returns {Color} the color with the lightness value reduced by `amount`
    ###
    darken$: (amount) ->
      hsl = @toHsl()
      hsl[2] -= amount

      [@r, @g, @b, @a] = hslToRgb(hsl) 

      return this      

    ###*
    A copy of the calling color with its saturation reduced by `amount`.

    <code class="run"><pre>
    blue = Color(0, 0, 255)

    desaturatedBlue = blue.desaturate(0.4)

    # to see what they look like
    for color, index in [blue, desaturatedBlue]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60  
    </pre></code>

    @name desaturate
    @methodOf Color#
    @param {Number} amount Amount to reduce color saturation by (between 0 and 1)

    @returns {Color} A copy of the color with the saturation value reduced by `amount`
    ###
    desaturate: (amount) ->
      @copy().desaturate$(amount) 

    ###*
    The modified color with its saturation reduced by `amount`.

    <code><pre>
    blue = Color(0, 0, 255)

    # modifies blue to be desaturatedBlue
    blue.desaturate$(0.4)

    blue.toString()
    # => 'rgba(38, 38, 217, 1)'
    </pre></code>

    @name desaturate$
    @methodOf Color#
    @param {Number} amount Amount to reduce color saturation by (between 0 and 1)

    @returns {Color} the color with the saturation value reduced by `amount`
    ###
    desaturate$: (amount) ->
      hsl = @toHsl()
      hsl[1] -= amount

      [@r, @g, @b, @a] = hslToRgb(hsl)

      return this    

    ###*
    Determine whether two colors are equal. Compares their r, g, b, and alpha values.

    <code><pre>
    hex = Color('#ffff00')
    rgb = Color(255, 255, 0)

    hex == rgb
    # => false

    hex.equal(rgb)
    # => true
    </pre></code>

    @name equal
    @methodOf Color#
    @param {Color} other the color to compare to the calling color

    @returns {Boolean} true if the r, g, b, a values of the colors agree, false otherwise
    ###
    equal: (other) ->
      other.r == @r &&
      other.g == @g &&
      other.b == @b &&
      other.a == @a

    ###*
    A copy of the calling color converted to grayscale.

    <code class="run"><pre>
    yellow = Color(255, 255, 0)

    gray = yellow.grayscale()

    # to see what they look like
    for color, index in [yellow, gray]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>    

    @name grayscale
    @methodOf Color#

    @returns {Color} A copy of the calling color converted to grayscale.
    ###
    grayscale: ->
      @copy().grayscale$()

    ###*
    The calling color converted to grayscale.

    <code><pre>
    color = Color(255, 255, 0)

    # modifies color into gray
    color.grayscale$()

    color.toString()
    # => 'rgba(128, 128, 128, 1)'
    </pre></code>  

    @name grayscale$
    @methodOf Color#

    @returns {Color} The calling color converted to grayscale.
    ###
    grayscale$: ->
      hsl = @toHsl()

      g = (hsl[2] * 255).round()

      @r = @g = @b = g

      return this 

    ###*
    A getter / setter for the hue value of the color. Passing no argument returns the 
    current hue value. Passing a value will set the hue to that value and return the color.

    <code class="run"><pre>
    magenta = Color(255, 0, 255)

    magenta.hue()
    # => 300

    # modifies the color to be yellow
    magenta.hue(60)

    # to see what it looks like
    canvas.drawRect
      color: magenta
      x: 50 
      y: 30 
      width: 80
      height: 80 
    </pre></code>  

    @name hue
    @methodOf Color#
    @param {Number} [newVal] the new hue value

    @returns {Color|Number} returns the color object if you pass a new hue value and returns the hue otherwise 
    ###
    hue: (newVal) ->
      hsl = @toHsl()
      if newVal?
        hsl[0] = newVal

        [@r, @g, @b, @a] = hslToRgb(hsl)

        return this
      else
        return hsl[0]

    ###*
    A getter / setter for the lightness value of the color. Passing no argument returns the 
    current lightness value. Passing a value will set the lightness to that value and return the color.

    <code class="run"><pre>
    magenta = Color(255, 0, 255)

    magenta.lightness()
    # => 0.9

    # modifies magenta in place to be lighter
    magenta.lightness(0.75)

    # to see what it looks like
    canvas.drawRect
      color: magenta
      x: 50 
      y: 30 
      width: 80
      height: 80 
    </pre></code>  

    @name lightness
    @methodOf Color#
    @param {Number} [newVal] the new lightness value

    @returns {Color|Number} returns the color object if you pass a new lightness value and returns the lightness otherwise 
    ###
    lightness: (newVal) ->
      hsl = @toHsl()
      if newVal?
        hsl[2] = newVal

        [@r, @g, @b, @a] = hslToRgb(hsl)

        return this
      else
        return hsl[2]

    value: (newVal) ->
      hsv = @toHsv()

      if newVal?
        hsv[2] = newVal

        [@r, @g, @b, @a] = hsvToRgb(hsv)

        return this
      else
        return hsv[2]

    ###*
    A copy of the calling color with its hue shifted by `degrees`. This differs from the hue setter in that it adds to the existing hue value and will wrap around 0 and 360.

    <code class="run"><pre>
    magenta = Color(255, 0, 255)

    magenta.hue()
    # => 300

    yellow = magenta.shiftHue(120)

    # since magenta's hue is 300 we have wrapped
    # around 360 to end up at 60
    yellow.hue()
    # => 60

    # to see what they look like
    for color, index in [magenta, yellow]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>

    @name shiftHue
    @methodOf Color#
    @param {Number} degrees number of degrees to shift the hue on the color wheel.

    @returns {Color} A copy of the color with its hue shifted by `degrees`
    ###
    shiftHue: (degrees) ->
      @copy().shiftHue$(degrees)

    ###*
    The calling color with its hue shifted by `degrees`. This differs from the hue setter in that it adds to the existing hue value and will wrap around 0 and 360.

    <code><pre>
    magenta = Color(255, 0, 255)

    magenta.hue()
    # => 300

    magenta.shiftHue$(120)

    # since magenta's hue is 300 we have wrapped
    # around 360 to end up at 60. Also we have 
    # modified magenta in place to become yellow
    magenta.hue()
    # => 60

    magenta.toString()
    # => 'rgba(255, 255, 0, 1)'
    </pre></code>

    @name shiftHue$
    @methodOf Color#
    @param {Number} degrees number of degrees to shift the hue on the color wheel.

    @returns {Color} The color with its hue shifted by `degrees`
    ###      
    shiftHue$: (degrees) ->
      hsl = @toHsl()

      hsl[0] = (hsl[0] + degrees.round()).mod 360

      [@r, @g, @b, @a] = hslToRgb(hsl)

      return this

    ###*
    Returns a copy of the calling color lightened by `amount` (Lightness of the color ranges from 0 to 1).

    <code class="run"><pre>
    green = Color(0, 255, 0)

    lightGreen = green.lighten(0.3)

    # to see what they look like
    for color, index in [green, lightGreen]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>

    @name lighten
    @methodOf Color#
    @param {Number} amount Amount to lighten color by (between 0 to 1)

    @returns {Color} A new color. The lightness value is increased by `amount` from the original.
    ###
    lighten: (amount) ->
      @copy().lighten$(amount)

    ###*
    The calling color lightened by `amount` (Lightness of the color ranges from 0 to 1).

    <code><pre>
    green = Color(0, 255, 0)

    green.lighten$(0.2)

    # we have modified green in place
    # to become lightGreen
    green.toString()
    # => 'rgba(102, 255, 102, 1)'
    </pre></code>

    @name lighten$
    @methodOf Color#
    @param {Number} amount Amount to lighten color by (between 0 - 1)

    @returns {Color} The calling color with its lightness value increased by `amount`.
    ###
    lighten$: (amount) ->
      hsl = @toHsl()
      hsl[2] += amount

      [@r, @g, @b, @a] = hslToRgb(hsl)

      return this 

    ###*
    A copy of the calling color mixed with `other` using `amount` as the 
    mixing ratio. If amount is not passed, then the colors are mixed evenly.

    <code class="run"><pre>
    red = Color(255, 0, 0)
    yellow = Color(255, 255, 0)

    # With no amount argument the colors are mixed evenly
    orange = red.mixWith(yellow)

    # With an amount of 0.3 we are mixing the color 30% red and 70% yellow
    somethingCloseToOrange = red.mixWith(yellow, 0.3)

    # to see what they look like
    for color, index in [red, yellow, orange, somethingCloseToOrange]
      canvas.drawRect
        color: color
        x: 20 + (60 * (index % 2))
        y: 20 + (60 * (if index > 1 then 1 else 0))
        width: 60
        height: 60 
    </pre></code>

    @name mixWith
    @methodOf Color#
    @param {Color} other the other color to mix
    @param {Number} [amount] the mixing ratio of the calling color to `other`

    @returns {Color} A new color that is a mix of the calling color and `other`
    ###
    mixWith: (other, amount) ->
      @copy().mixWith$(other, amount) 

    ###*
    A copy of the calling color mixed with `other` using `amount` as the 
    mixing ratio. If amount is not passed, then the colors are mixed evenly.

    <code><pre>
    red = Color(255, 0, 0)
    yellow = Color(255, 255, 0)
    anotherRed = Color(255, 0, 0)

    # With no amount argument the colors are mixed evenly
    red.mixWith$(yellow)

    # We have modified red in place to be orange 
    red.toString()
    # => 'rgba(255, 128, 0, 1)'    

    # With an amount of 0.3 we are mixing the color 30% red and 70% yellow
    anotherRed.mixWith$(yellow, 0.3)

    # We have modified `anotherRed` in place to be somethingCloseToOrange 
    anotherRed.toString()
    # => rgba(255, 179, 0, 1)
    </pre></code>

    @name mixWith$
    @methodOf Color#
    @param {Color} other the other color to mix
    @param {Number} [amount] the mixing ratio of the calling color to `other`

    @returns {Color} The modified calling color after mixing it with `other`
    ###
    mixWith$: (other, amount) ->
      amount ||= 0.5

      [@r, @g, @b, @a] = [@r, @g, @b, @a].zip([other.r, other.g, other.b, other.a]).map (array) ->
        (array[0] * amount) + (array[1] * (1 - amount))

      [@r, @g, @b] = [@r, @g, @b].map (color) ->
        color.round()

      return this 

    ###*
    A copy of the calling color with its saturation increased by `amount`.

    <code class="run"><pre>
    color = Color(50, 50, 200)

    color.saturation()
    # => 0.6

    saturatedColor = color.saturate(0.2)

    saturatedColor.saturation()
    # => 0.8

    # to see what they look like
    for color, index in [color, saturatedColor]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>

    @name saturate
    @methodOf Color#
    @param {Number} amount the amount to increase saturation by

    @returns {Color} A copy of the calling color with its saturation increased by `amount`
    ###
    saturate: (amount) ->
      @copy().saturate$(amount) 

    ###*
    The calling color with its saturation increased by `amount`.

    <code><pre>
    color = Color(50, 50, 200)

    color.saturation()
    # => 0.6

    color.saturate$(0.2)

    # We have modified color in place and increased its saturation to 0.8
    color.saturation()
    # => 0.8

    color.toString()
    # => rgba(25, 25, 225, 1)
    </pre></code>

    @name saturate$
    @methodOf Color#
    @param {Number} amount the amount to increase saturation by

    @returns {Color} The calling color with its saturation increased by `amount`
    ###
    saturate$: (amount) ->
      hsl = @toHsl()
      hsl[1] += amount

      [@r, @g, @b, @a] = hslToRgb(hsl) 

      return this    

    ###*
    A getter / setter for the saturation value of the color. Passing no argument returns the 
    current saturation value. Passing a value will set the saturation to that value and return the color.

    <code class="run"><pre>
    yellow = Color('hsl(60, 0.5, 0.5)')

    yellow.saturation()
    # => 0.5

    yellow.saturation(0.8)

    # to see what it looks like
    canvas.drawRect
      color: yellow
      x: 50 
      y: 30 
      width: 80
      height: 80     
    </pre></code>

    @name saturation
    @methodOf Color#
    @param {Number} [newVal] the new saturation value

    @returns {Color|Number} returns the color object if you pass a new saturation value and returns the saturation otherwise 
    ###
    saturation: (newVal, mode) ->
      if mode == 'hsv'
        hsv = @toHsv()
        if newVal?
          hsv[1] = newVal

          [@r, @g, @b, @a] = hsvToRgb(hsv)

          return this
        else
          return hsv[1]

      else
        hsl = @toHsl()
        if newVal?
          hsl[1] = newVal

          [@r, @g, @b, @a] = hslToRgb(hsl)

          return this
        else
          return hsl[1]

    ###*
    returns the Hex representation of the color. Exclude the leading `#` by passing false. 

    <code><pre>
    color = Color('hsl(60, 1, 0.5)')

    # passing nothing will leave the `#` intact
    color.toHex()
    # => '#ffff00'

    # passing false will remove the `#`
    color.toHex(false)
    # => 'ffff00'
    </pre></code>

    @name toHex
    @methodOf Color#
    @param {Boolean} [leadingHash] if passed as false excludes the leading `#` from the string

    @returns {String} returns the Hex representation of the color 
    ###
    toHex: (leadingHash) ->
      padString = (hexString) ->        
        if hexString.length == 1 then pad = "0" else pad = "" 

        return pad + hexString

      hexFromNumber = (number) ->
        return padString(number.toString(16))

      if leadingHash == false
        "#{hexFromNumber(@r)}#{hexFromNumber(@g)}#{hexFromNumber(@b)}"
      else
        "##{hexFromNumber(@r)}#{hexFromNumber(@g)}#{hexFromNumber(@b)}"  

    ###*
    returns an array of the hue, saturation, lightness, and alpha values of the color. 

    <code><pre>
    magenta = Color(255, 0, 255)

    magenta.toHsl()
    # => [300, 1, 0.5, 1]
    </pre></code>  

    @name toHsl
    @methodOf Color#

    @returns {Array} An array of the hue, saturation, lightness, and alpha values of the color. 
    ###
    toHsl: ->
      [r, g, b] = (channel / 255 for channel in [@r, @g, @b])

      {min, max} = [r, g, b].extremes()

      hue = saturation = lightness = (max + min) / 2
      chroma = max - min

      if chroma.abs() < 0.00001
        hue = saturation = 0
      else
        saturation =
          if lightness > 0.5
            chroma / (1 - lightness)
          else 
            chroma / lightness

        saturation /= 2

        switch max
          when r then hue = ((g - b) / chroma) + 0
          when g then hue = ((b - r) / chroma) + 2
          when b then hue = ((r - g) / chroma) + 4

        hue = (hue * 60).mod(360)

      return [hue, saturation, lightness, @a] 

    toHsv: ->
      r = @r / 255
      g = @g / 255
      b = @b / 255

      {min, max} = [r, g, b].extremes()

      h = s = v = max

      d = max - min
      s = (if max == 0 then 0 else d / max)

      if max == min
        h = 0
      else
        switch max
          when r
            h = (g - b) / d + (if g < b then 6 else 0)
          when g
            h = (b - r) / d + 2
          when b
            h = (r - g) / d + 4

        h *= 60

      return [h, s, v]

    ###*
    returns string rgba representation of the color. 

    <code><pre>
    red = Color('#ff0000')

    red.toString()
    # => 'rgba(255, 0, 0, 1)'
    </pre></code>

    @name toString
    @methodOf Color#

    @returns {String} The rgba string representation of the color 
    ###
    toString: ->
      "rgba(#{@r}, #{@g}, #{@b}, #{@a})"

    ###*
    A copy of the calling color with its alpha reduced by `amount`.

    <code class="run"><pre>
    color = Color(0, 0, 0, 1)

    color.a
    # => 1

    transparentColor = color.transparentize(0.5)

    transparentColor.a
    # => 0.5

    # to see what they look like
    for color, index in [color, transparentColor]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60     
    </pre></code>

    @name transparentize
    @methodOf Color#

    @returns {Color} A copy of the calling color with its alpha reduced by `amount`   
    ###
    transparentize: (amount) ->
      @copy().transparentize$(amount) 

    ###*
    The calling color with its alpha reduced by `amount`.

    <code><pre>
    color = Color(0, 0, 0, 1)

    color.a
    # => 1

    # We modify color in place
    color.transparentize$(0.5)

    color.a
    # => 0.5
    </pre></code>

    @name transparentize$
    @methodOf Color#

    @returns {Color} The calling color with its alpha reduced by `amount`   
    ###
    transparentize$: (amount) ->
      @a = (@a - amount).clamp(0, 1) 

      return this  

    ###*
    A copy of the calling color with its alpha increased by `amount`.

    <code class="run"><pre>
    color = Color(0, 0, 0, 0.25)

    color.a
    # => 0.25

    opaqueColor = color.opacify(0.5)

    opaqueColor.a
    # => 0.75

    # to see what they look like
    for color, index in [color, opaqueColor]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60     
    </pre></code>

    @name opacify
    @methodOf Color#

    @returns {Color} A copy of the calling color with its alpha increased by `amount`   
    ###
    opacify: (amount) ->
      @copy().opacify$(amount)   

    ###*
    The calling color with its alpha increased by `amount`.

    <code><pre>
    color = Color(0, 0, 0, 0)

    color.a
    # => 0

    # We modify color in place
    color.opacify$(0.25)

    color.a
    # => 0.25
    </pre></code>

    @name opacify$
    @methodOf Color#

    @returns {Color} The calling color with its alpha increased by `amount`   
    ###
    opacify$: (amount) ->
      @a = (@a + amount).clamp(0, 1) 

      return this    

  ###*
  returns a random color.

  <code><pre>
  Color.random().toString()
  # => 'rgba(213, 144, 202, 1)'

  Color.random().toString()
  # => 'rgba(1, 211, 24, 1)'
  </pre></code>

  @name random
  @methodOf Color

  @returns {Color} A random color. 
  ###
  Color.random = ->
    Color(rand(256), rand(256), rand(256)) 

  ###*
  Mix two colors. Behaves just like `#mixWith` except that you are passing two colors.

  <code><pre>
  red = Color(255, 0, 0)
  yellow = Color(255, 255, 0)

  # With no amount argument the colors are mixed evenly
  orange = Color.mix(red, yellow)

  orange.toString()
  # => 'rgba(255, 128, 0, 1)'    

  # With an amount of 0.3 we are mixing the color 30% red and 70% yellow
  somethingCloseToOrange = Color.mix(red, yellow, 0.3)

  somethingCloseToOrange.toString()
  # => rgba(255, 179, 0, 1)
  </pre></code>

  @name mix
  @methodOf Color
  @see Color#mixWith
  @param {Color} color1 the first color to mix
  @param {Color} color2 the second color to mix
  @param {Number} amount the ratio to mix the colors 

  @returns {Color} A new color that is the two colors mixed at the ratio defined by `amount` 
  ###
  Color.mix = (color1, color2, amount) ->
    amount ||= 0.5

    newColors = [color1.r, color1.g, color1.b, color1.a].zip([color2.r, color2.g, color2.b, color2.a]).map (array) ->
      (array[0] * amount) + (array[1] * (1 - amount))

    return Color(newColors)     

  (exports ? this)["Color"] = Color
)()

