test "Rotatable objects update their rotation", ->
  obj = GameObject
    rotationalVelocity: Math.TAU / 4
  
  obj.include(Durable)
   
  2.times ->
    obj.update()
    
  equals obj.I.rotation, Math.TAU / 2
  
  4.times ->
    obj.update()

  equals obj.I.rotation, (3 / 2) * Math.TAU