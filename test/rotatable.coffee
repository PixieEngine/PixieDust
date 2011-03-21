test "Rotatable objects update their rotation", ->
  obj = GameObject
    rotationalVelocity: Math.TAU / 4
  
  obj.include(Durable)
   
  5.times ->
    obj.update()
    
  equals obj.I.active, true, "object is active until duration is exceeded"
  
  6.times ->
    obj.update()

  equals obj.I.active, false, "object is inactive after duration"