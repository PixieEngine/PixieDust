module "Engine"

test "Camera", ->
  App.width = 800
  App.height = 640

  engine = Engine
    includedModules: ["Camera"]

  gameObject = GameObject
    x: 50
    y: 100

  equal engine.I.cameraTransform.a, 1
  equal engine.I.cameraTransform.b, 0
  equal engine.I.cameraTransform.c, 0
  equal engine.I.cameraTransform.d, 1
  equal engine.I.cameraTransform.tx, 0
  equal engine.I.cameraTransform.ty, 0

  engine.follow(gameObject, "centered")

  engine.update()

  equal engine.I.cameraTransform.a, 1
  equal engine.I.cameraTransform.b, 0
  equal engine.I.cameraTransform.c, 0
  equal engine.I.cameraTransform.d, 1
  equal engine.I.cameraTransform.tx, (App.width / 2) - gameObject.I.x
  equal engine.I.cameraTransform.ty, (App.height / 2) - gameObject.I.y

module()