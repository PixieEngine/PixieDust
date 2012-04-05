module "Camera"

test "create", ->
  ok Camera()

test "overlay", 1, ->
  object = GameObject()


# Clear out the module
module()
