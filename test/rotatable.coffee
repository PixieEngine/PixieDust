test "Rotatable objects update their rotation", ->
  obj = GameObject
    rotationalVelocity: Math.PI / 4
  
  obj.include(Rotatable)
  
  equals obj.I.rotation, 0, "Default rotation value is 0"
   
  2.times ->
    obj.update()
    
  equals obj.I.rotation, Math.PI / 2
  
  4.times ->
    obj.update()

  equals obj.I.rotation, (3 / 2) * Math.PI