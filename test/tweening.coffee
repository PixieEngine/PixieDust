module "Tweening"

test "should allow for simple linear tweening", ->
  o = GameObject
    x: 0
    
  o.tween 10,
    x: 10
    
  11.times (i) ->
    o.update()

    equals o.I.x, i

# Clear out the module
module()
