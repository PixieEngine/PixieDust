module "Text"

test "text moves up vertically", ->
  text = Text()

  text.update()

  equals text.I.x, 0
  equals text.I.y, -1

  4.times ->
    text.update()

  equals text.I.x, 0
  equals text.I.y, -5

test "text fades out", ->
  text = Text()

  text.update()

  equals text.I.alpha, 1

  text.update()

  equals text.I.alpha, 1 - 1/

module()