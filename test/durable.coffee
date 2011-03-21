test "Durable objects become inactive after their duration", ->
  obj = GameObject
    duration: 5
  
  obj.include(Durable)
  
  5.times ->
    obj.update()

  equals obj.active(), false
