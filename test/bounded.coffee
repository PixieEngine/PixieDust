test "Bounds should give correct offset position", ->
  obj = GameObject
    x: 5
    y: 10
    width: 50
    height: 100
  
  obj.include(Bounded)

  equals obj.bounds().x, 5

