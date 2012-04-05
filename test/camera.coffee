module "Camera"

test "create", ->
  ok Camera()

test "overlay", ->
  object = GameObject

# Clear out the module
module()
