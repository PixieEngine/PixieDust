module "Clampable"

test "testing for equality", ->
  o = GameObject()
  
  o.clamp
    x:
      min: 0
      

  # Test for equality of two objects
  equals one, 1

# Clear out the module
module()
