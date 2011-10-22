module "Collidable"

test "#separate", ->
  leftObject = GameObject
    includedModules: ["Collidable"]
    x: 50
    y: 50
    width: 20
    height: 20
    velocity: Point(1, 0)

  rightObject = GameObject
    includedModules: ["Collidable"]
    x: 60
    y: 50
    width: 20
    height: 20  
    velocity: Point(0, 0)

  Collidable.separate(leftObject, rightObject)

  equal leftObject.I.x, 45
  equal rightObject.I.x, 65 
  #ok leftObject.I.velocity.equal(Point(0, 0))
  #ok rightObject.I.velocity.equal(Point(1, 0))

test "conservation of momentum", ->
  leftObject = GameObject
    includedModules: ["Collidable"]
    x: 50
    y: 50
    width: 20
    height: 20
    mass: 5
    velocity: Point(1, 0)

  rightObject = GameObject
    includedModules: ["Collidable"]
    x: 60
    y: 50
    width: 20
    height: 20  
    mass: 1
    velocity: Point(0, 0)

  Collidable.separate(leftObject, rightObject)

  #equal leftObject.I.velocity.x, 0
  #equal rightObject.I.velocity.x, 5

module()