test "Durable objects become inactive after their duration", ->
  obj = GameObject
    duration: 5
  
  obj.include(Durable)
  
  active = null
  
  5.times ->
    active = obj.update()
    
  equals obj.I.active, true, "object is active until duration is exceeded"
  
  6.times ->
    active = obj.update()

  equals obj.I.active, false, "object is inactive after duration"
