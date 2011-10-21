module "Collidable"

test "#separate", ->
  leftObject = GameObject
    includedModules: ["Collidable"]
    x: 50
    y: 50
    width: 20
    height: 20

  rightObject = GameObject
    includedModules: ["Collidable"]
    x: 60
    y: 50
    width: 20
    height: 20  

  Collidable.separate(leftObject, rightObject)

  equal leftObject.I.x, 40
  equal rightObject.I.x, 70 


module()