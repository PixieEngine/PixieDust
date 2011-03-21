test "Durable objects become inactive after their duration", ->
  obj = GameObject
    duration: 5
  
  obj.include(Durable)
  bounds = obj.bounds(5, 10)

  equals bounds.x, 0
  equals bounds.y, 30
