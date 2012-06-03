module "Drawable"

test "alpha", ->
  object = GameObject()

  equal object.I.alpha, 1

  object2 = GameObject
    alpha: 0.5

  equal object2.I.alpha, 0.5

test "scale", ->
  object = GameObject()

  transform = object.transform()
  
  equal transform.a, 1
  equal transform.d, 1

  object = GameObject
    scale: 2
    scaleX: -1
    scaleY: 0.5

  transform = object.transform()
  
  equal transform.a, -2
  equal transform.d, 1

module()
