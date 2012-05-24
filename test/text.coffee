module "TextEffect"

test "text moves up vertically", ->
  text = TextEffect
    velocity: Point(0, -1)

  text.update(1)

  equals text.I.x, 0
  equals text.I.y, -1

  4.times ->
    text.update(1)

  equals text.I.x, 0
  equals text.I.y, -5
  
module "FloatingTextEffect"

test "text fades out", ->
  text = FloatingTextEffect()

  text.update(1)
  text.trigger "afterUpdate", 1

  equals text.I.alpha, 1

  text.update(0.5)
  text.trigger "afterUpdate", 1

  equals text.I.alpha, 1 - 1/40

module()