test "Durable objects become inactive after their duration", ->
  obj = GameObject
    duration: 5
  
  obj.include(Durable)
  
  active = null
  
  5.times ->
    active = obj.update()
    
  equals active, true
  
  6.times ->
    active = obj.update()

  equals active, false
