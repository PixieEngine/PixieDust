module "Clampable"

test "testing for equality", ->
  o = GameObject()
  
  o.clamp
    x:
      min: 0
      max: max

  o.update()
  
  equals o.I.x, max

# Clear out the module
module()
