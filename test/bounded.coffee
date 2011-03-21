test "Bounds returns correct x, y, width, height", ->
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

test "Bounds returns correct x, y when called with offset", ->
  obj = GameObject
    x: -5
    y: 20
  
  obj.include(Bounded)

  equals obj.bounds(2, 5).x, 5
  equals obj.bounds().y, 10

