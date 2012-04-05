module "Text"

test "text moves up vertically", ->
  text = Text()

  #text.update()

  equals text.I.x, 0
  equals text.I.y, 0

test "text fades out", ->
  ;

module()