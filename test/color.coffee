equalEnough = (actual, expected, tolerance=3, message) ->
  message ||= "" + expected + " within " + tolerance + " of " + actual
  ok(expected + tolerance >= actual && expected - tolerance <= actual, message)

module "Color"

test "r, g, b default to 0, a defaults to 1", ->
  color = Color()

  equalEnough color.r, 0
  equalEnough color.g, 0
  equalEnough color.b, 0
  equalEnough color.a, 1

test "accepts a single array of length 3", ->
  color = Color([255, 1, 2])

  equalEnough color.r, 255
  equalEnough color.g, 1
  equalEnough color.b, 2

test "accepts a single array of length 4", ->
  color = Color([255, 4, 3, 0.8])

  equalEnough color.r, 255
  equalEnough color.g, 4
  equalEnough color.b, 3
  equalEnough color.a, 0.8

test "accepts an array of length 3 as the first argument and an alpha value as the second", ->
  color = Color([100, 5, 3], 0.4)

  equalEnough color.r, 100
  equalEnough color.g, 5
  equalEnough color.b, 3
  equalEnough color.a, 0.4

test "accepts an array of length 4 as the first argument and an alpha value. The alpha value passed as the second argument overrides the alpha in the array", ->
  color = Color([4, 20, 90, 0.1], 0.6)

  equalEnough color.r, 4
  equalEnough color.g, 20
  equalEnough color.b, 90
  equalEnough color.a, 0.6

test "accepts an rgb string as the first argument and an alpha value as the second", ->
  color = Color('rgb(255, 40, 30)', 0.4)

  equalEnough color.r, 255
  equalEnough color.g, 40
  equalEnough color.b, 30
  equalEnough color.a, 0.4

test "accepts an rgba string as the first argument and an alpha value as the second. The alpha value takes precedence over the alpha from the rgba string", ->
  color = Color('rgba(30, 20, 15, 0.8)', 0.35)

  equalEnough color.r, 30
  equalEnough color.g, 20
  equalEnough color.b, 15
  equalEnough color.a, 0.35

test "accepts an hsl string as the first argument and an alpha value as the second", ->
  color = Color('hsl(63, 0.4, 0.3)', 0.21)

  equalEnough color.r, 104
  equalEnough color.g, 107
  equalEnough color.b, 46
  equalEnough color.a, 0.21

test "accepts an hsla string as the first argument and an alpha value as the second. The alpha value takes precedence over the hsla string alpha value", ->
  color = Color('hsla(45, 0.3, 0.5, 0.1)', 0.47)

  equalEnough color.r, 166
  equalEnough color.g, 147
  equalEnough color.b, 89
  equalEnough color.a, 0.47

test "accepts hex value of length 3 as first argument and alpha value as second argument", ->
  color = Color('#ff0', 0.5)

  equalEnough color.r, 255
  equalEnough color.g, 255
  equalEnough color.b, 0
  equalEnough color.a, 0.5 

test "accepts hex value of length 4 as first argument and alpha value as second argument. The alpha value takes precedence over the alpha from the hex string.", ->
  color = Color('#ef3c', 0.3)

  equalEnough color.r, 238
  equalEnough color.g, 255
  equalEnough color.b, 51
  equalEnough color.a, 0.3

test "accepts hex value of length 6 as first argument and alpha value as second argument", ->
  color = Color('#de34ab', 0.27)

  equalEnough color.r, 222
  equalEnough color.g, 52
  equalEnough color.b, 171
  equalEnough color.a, 0.27 

test "accepts hex value of length 8 as first argument and alpha value as second argument. Alpha value takes precedence over hex alpha.", ->
  color = Color('#ab45cd', 0.59)

  equalEnough color.r, 171
  equalEnough color.g, 69
  equalEnough color.b, 205
  equalEnough color.a, 0.59

test "accepts hex string of length 3", ->
  color = Color('#df2')

  equalEnough color.r, 221
  equalEnough color.g, 255
  equalEnough color.b, 34
  equalEnough color.a, 1.0

test "accepts hex string of length 4", ->
  color = Color('#c987')

  equalEnough color.r, 204
  equalEnough color.g, 153
  equalEnough color.b, 136
  equalEnough color.a.toFixed(2), 0.47

test "accepts hex string of length 6", ->
  color = Color('#cdef12')

  equalEnough color.r, 205
  equalEnough color.g, 239
  equalEnough color.b, 18
  equalEnough color.a, 1.0

test "accepts hex string of length 8", ->  
  color = Color('#ef1234af')

  equalEnough color.r, 239
  equalEnough color.g, 18
  equalEnough color.b, 52
  equalEnough color.a.toFixed(2), 0.69

test "accepts 3 numeric values", ->
  color = Color(34, 54, 39)

  equalEnough color.r, 34
  equalEnough color.g, 54
  equalEnough color.b, 39
  equalEnough color.a, 1.0

test "accepts 4 numeric values", ->
  color = Color(23, 43, 100, 0.32)

  equalEnough color.r, 23
  equalEnough color.g, 43
  equalEnough color.b, 100
  equalEnough color.a, 0.32

test "invalid color throws error", ->
  raises ->
    Color("A Fake Color")

test "#copy", ->
  color = Color(123, 231, 2)
  copiedColor = color.copy()

  ok color.equal(copiedColor)
  ok color != copiedColor

test "#equal", ->
  color1 = Color(255, 255, 255, 1)
  color2 = Color([255, 255, 255])

  ok color1.equal(color2)

test "#toString", ->
  noAlpha = Color(30, 40, 23)
  withAlpha = Color(29, 49, 50, 0.45)
  decimalValues = Color(34.7, 52.2, 50.1, 0.45)

  equal noAlpha.toString(), "rgba(30, 40, 23, 1)"
  equal withAlpha.toString(), "rgba(29, 49, 50, 0.45)"
  equal decimalValues.toString(), "rgba(35, 52, 50, 0.45)"

test "#toHex", ->
  color = Color(23, 45, 100)

  equal color.toHex(), "#172d64"

test "#toHsl", ->
  color = Color(45, 29, 20)

  hsl = color.toHsl()

  equalEnough hsl[0].round(), 22
  equalEnough hsl[1].toFixed(2), 0.38
  equalEnough hsl[2].toFixed(2), 0.13
  equalEnough hsl[3], 1.0

test "#hue", ->
  color = Color(34, 54, 239).hue(20)

  equalEnough color.r, 84
  equalEnough color.g, 37
  equalEnough color.b, 239
  equalEnough color.a, 1.0

test "#hue$", ->
  color = Color(34, 54, 239)

  color.hue$(60)

  equalEnough color.r, 218
  equalEnough color.g, 37
  equalEnough color.b, 239
  equalEnough color.a, 1.0

test "#complement", ->
  color = Color(10, 30, 50).complement()

  equalEnough color.r, 51
  equalEnough color.g, 31
  equalEnough color.b, 10
  equalEnough color.a, 1.0

test "#complement$", ->
  color = Color(10, 30, 50)

  color.complement$()

  equalEnough color.r, 51
  equalEnough color.g, 31
  equalEnough color.b, 10
  equalEnough color.a, 1.0

test "#grayscale", ->
  color = Color(30, 40, 29).grayscale()

  equalEnough color.r, 35
  equalEnough color.g, 35
  equalEnough color.b, 35
  equalEnough color.a, 1.0

test "#grayscale$", ->
  color = Color(30, 40, 29)

  color.grayscale$()

  equalEnough color.r, 35
  equalEnough color.g, 35
  equalEnough color.b, 35
  equalEnough color.a, 1.0

test "#saturate", ->
  color = Color(100, 200, 150).saturate(0.3)

  equalEnough color.r, 69
  equalEnough color.g, 232
  equalEnough color.b, 150
  equalEnough color.a, 1.0

test "#saturate$", ->
  color = Color(100, 200, 150)

  color.saturate$(0.3)

  equalEnough color.r, 69
  equalEnough color.g, 232
  equalEnough color.b, 150
  equalEnough color.a, 1.0

test "#desaturate", ->
  color = Color(69, 232, 150).desaturate(0.3)

  equalEnough color.r, 100
  equalEnough color.g, 200
  equalEnough color.b, 150
  equalEnough color.a, 1.0

test "#desaturate$", ->
  color = Color(69, 232, 150)

  color.desaturate$(0.3)

  equalEnough color.r, 100
  equalEnough color.g, 200
  equalEnough color.b, 150
  equalEnough color.a, 1.0

test "#darken", ->
  color = Color(45, 64, 39).darken(0.1)

  equalEnough color.r, 22
  equalEnough color.g, 32
  equalEnough color.b, 19
  equalEnough color.a, 1.0

test "#darken$", ->
  color = Color(45, 64, 39)

  color.darken$(0.1)

  equalEnough color.r, 22
  equalEnough color.g, 32
  equalEnough color.b, 19
  equalEnough color.a, 1.0

test "#lighten", ->
  color = Color(22, 32, 19).lighten(0.1)

  equalEnough color.r, 45
  equalEnough color.g, 64
  equalEnough color.b, 39
  equalEnough color.a, 1.0

test "#lighten$", ->
  color = Color(22, 32, 19)

  color.lighten$(0.1)

  equalEnough color.r, 45
  equalEnough color.g, 64
  equalEnough color.b, 39
  equalEnough color.a, 1.0

test "#mixWith", ->
  color1 = Color(50, 40, 60, 0.3)
  color2 = Color(10, 5, 16, 0.2)

  mixedColor = color1.mixWith(color2)

  equalEnough mixedColor.r, 30
  equalEnough mixedColor.g, (45 / 2).round()
  equalEnough mixedColor.b, (76 / 2).round()
  equalEnough mixedColor.a, 0.5 / 2

  weightedMixedColor = color1.mixWith(color2, 0.1)

  equalEnough weightedMixedColor.r, ((50 * 0.1) + (10 * 0.9)).round()
  equalEnough weightedMixedColor.g, ((40 * 0.1) + (5 * 0.9)).round()
  equalEnough weightedMixedColor.b, ((60 * 0.1) + (16 * 0.9)).round()
  equalEnough weightedMixedColor.a, (0.3 * 0.1) + (0.2 * 0.9) 

test "#mixWith$", ->
  color1 = Color(50, 40, 60, 0.3)
  color2 = Color(10, 5, 16, 0.2)

  color3 = Color(50, 40, 60, 0.3)

  color1.mixWith$(color2)

  equalEnough color1.r, 30
  equalEnough color1.g, (45 / 2).round()
  equalEnough color1.b, (76 / 2).round()
  equalEnough color1.a, 0.5 / 2

  color3.mixWith$(color2, 0.1)

  equalEnough color3.r, ((50 * 0.1) + (10 * 0.9)).round()
  equalEnough color3.g, ((40 * 0.1) + (5 * 0.9)).round()
  equalEnough color3.b, ((60 * 0.1) + (16 * 0.9)).round()
  equalEnough color3.a, (0.3 * 0.1) + (0.2 * 0.9) 

test "Color.random", ->
  color = Color.random()

  ok 0 <= color.r <= 255
  ok 0 <= color.g <= 255
  ok 0 <= color.b <= 255
  equalEnough color.a, 1.0

test "Color.mix", ->
  mixedColor = Color.mix(
    Color("red"),
    Color("sky blue")
  )

  equalEnough mixedColor.r, 173
  equalEnough mixedColor.g, 94
  equalEnough mixedColor.b, 127
  equalEnough mixedColor.a, 1

  weightedMixedColor = Color.mix(Color(0, 255, 0, 1), Color(255, 0, 255, 0.6), 0.1)

  equalEnough weightedMixedColor.r, ((0 * 0.1) + (255 * 0.9)).round()
  equalEnough weightedMixedColor.g, ((255 * 0.1) + (0 * 0.9)).round()
  equalEnough weightedMixedColor.b, ((0 * 0.1) + (255 * 0.9)).round()
  equalEnough weightedMixedColor.a, (1 * 0.1) + (0.6 * 0.9)  

test "accepts named colors", ->
  white = Color("white")

  equalEnough white.r, 255
  equalEnough white.g, 255
  equalEnough white.b, 255
  equalEnough white.a, 1.0

  piPink = Color("Paul Irish Pink")

  equalEnough piPink.r, 255
  equalEnough piPink.g, 94
  equalEnough piPink.b, 153
  equalEnough piPink.a, 1.0

module()

