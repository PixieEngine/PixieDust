module "TextEffect"

test "text moves up vertically", ->
  text = TextEffect
    velocity: Point

  text.update(1)

  equals text.I.x, 0
  equals text.I.y, -1

  4.times ->
    text.update(1)

  equals text.I.x, 0
  equals text.I.y, -5

test "text fades out", ->
  text = TextEffect()

  text.update()

  equals text.I.alpha, 1

  text.update()

  equals text.I.alpha, 1 - 1/40

module()