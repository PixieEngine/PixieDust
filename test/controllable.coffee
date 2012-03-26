module "Controllable"

test "should move player left while key is pressed", ->
  one = 1

  # Test for equality of two objects
  equals one, 1

test "testing boolean values", ->
  someFunction = ->
    return true

  # Test if someFunction returns true
  ok someFunction()

# Clear out the module
module()