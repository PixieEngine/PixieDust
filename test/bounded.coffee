module "Bounds"

test 'it should have #distance', ->
  player = GameObject()
  
  player.include Bounded
  
  ok player.distance
  
test 'it should proxy #distance to Point.distance', ->
  player = GameObject
    x: 50
    y: 50
    width: 10
    height: 10
  
  player.include Bounded
  
  enemy = GameObject
    x: 110
    y: 120
    width: 7
    height: 20
    
  equals player.distance(enemy), Point.distance(player.position(), enemy.position())

test "#bounds returns correct x, y, width, height", ->
  x = 5
  y = 10
  width = 50
  height = 75

  obj = GameObject
    x: x
    y: y
    width: width
    height: height

  obj.include(Bounded)

  equals obj.bounds().x, x - width/2
  equals obj.bounds().y, y - height/2
  equals obj.bounds().width, width
  equals obj.bounds().height, height

test "#centeredBounds returns correct x, y, xw, yx", ->
  x = -5
  y = 20

  obj = GameObject
    x: x
    y: y
    width: 100,
    height: 200

  obj.include(Bounded)
  bounds = obj.centeredBounds()

  equals bounds.x, x
  equals bounds.y, y
  equals bounds.xw, 100 / 2
  equals bounds.yw, 200 / 2

test "#bounds(width, height) returns correct x, y", ->
  x = 20
  y = 10
  width = 15
  height = 25

  offsetX = 7.5
  offsetY = 12

  obj = GameObject
    x: x
    y: y
    width: width
    height: height

  obj.include(Bounded)
  bounds = obj.bounds(offsetX, offsetY)

  equals bounds.x, obj.center().x + offsetX - width/2
  equals bounds.y, obj.center().y + offsetY - height/2

test "#center returns correct center point", ->
  obj = GameObject
    x: -5
    y: 20
    width: 10
    height: 60

  obj.include(Bounded)
  center = obj.center()

  ok center.equal(Point(-5, 20))

module()

