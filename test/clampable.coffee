module "Clampable"

test "testing for equality", ->
  o = GameObject()
  
  max = 100
  
  o.clamp
    x:
      min: 0
      max: max

  o.update()
  
  equals o.I.x, max

# Clear out the module
module()
