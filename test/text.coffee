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
  
module "FloatingTe"

module()