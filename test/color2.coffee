module "Color2"

test "r, g, b, a default to 0", ->
  color = Color2()

  equal color.r, 0
  equal color.g, 0
  equal color.b, 0
  equal color.a, 0

module()