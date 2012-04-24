module "Clampable"

test "testing for equality", ->
  o = GameObject()
  
  o.clamp
    x:
      min: 0
      max: 100

  o.update()
  
  equals o.I.x

# Clear out the module
module()
