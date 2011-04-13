module "Bounds"

test "#bounds returns correct x, y, width, height", ->
  obj = GameObject
    x: 5
    y: 10
    width: 50
    height: 100

  obj.include(Bounded)

  equals obj.bounds().x, 5
  equals obj.bounds().y, 10
  equals obj.bounds().width, 50
  equals obj.bounds().height, 100

test "#centeredBounds returns correct x, y, xw, yx", ->
  obj = GameObject
    x: -5
    y: 20
    width: 100,
    height: 200

  obj.include(Bounded)
  bounds = obj.centeredBounds()

  equals bounds.x, -5 + (100 / 2)
  equals bounds.y, 20 + (200 / 2)
  equals bounds.xw, 100 / 2
  equals bounds.yw, 200 / 2

test "#bounds(width, height) returns correct x, y", ->
  obj = GameObject
    x: -5
    y: 20

  obj.include(Bounded)
  bounds = obj.bounds(5, 10)

  equals bounds.x, 0
  equals bounds.y, 30

test "#center returns correct center point", ->
  obj = GameObject
    x: -5
    y: 20
    width: 10
    height: 60

  obj.include(Bounded)
  bounds = obj.center()

  ok bounds.equal(Point(-5 + (10 / 2), 20 + (60 / 2)))

module()

