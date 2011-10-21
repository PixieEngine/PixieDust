module "Engine"

test "Camera", ->
  engine = Engine
    includedModules: ["Camera"]

  gameObject = GameObject
    x: 50
    y: 100

  engine.I.cameraTransform

  equal engine.I.cameraTransform.a, 1
  equal engine.I.cameraTransform.b, 0
  equal engine.I.cameraTransform.c, 0
  equal engine.I.cameraTransform.d, 1

  engine.follow(gameObject, "centered")

  engine.update()

  log engine.I.cameraTransform

module()