module "Color2"

test "r, g, b default to 0, a defaults to 1", ->
  color = Color2()

  equal color.r, 0
  equal color.g, 0
  equal color.b, 0
  equal color.a, 1

test "accepts a single array of length 3 in the constructor", ->
  color = Color2([255, 1, 2])

  equal color.r, 255
  equal color.g, 1
  equal color.b, 2

test "accepts a single array of length 4 in the constructor", ->
  color = Color2([255, 4, 3, 0.8])

  equal color.r, 255
  equal color.g, 4
  equal color.b, 3
  equal color.a, 0.8

module()