test "Rotatable objects update their rotation", ->
  obj = GameObject
    rotationalVelocity: Math.PI / 4
  
  obj.include(Rotatable)
   
  2.times ->
    obj.update()
    
  equals obj.I.rotation, Math.PI / 2
  
  4.times ->
    obj.update()

  equals obj.I.rotation, (3 / 2) * Math.PI