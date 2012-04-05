module "Camera"

test "create", ->
  ok Camera()

test "overlay", 1, ->
  object = GameObject()

  c = Came
# Clear out the module
module()
