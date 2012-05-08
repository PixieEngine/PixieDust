module "Tweening"

test "should allow for simple linear tweening", ->
  o = GameObject
    x: 0
    
  o.tween 10,
    x: 10
    
  11.times (i) ->
    o.update(1)

    equals o.I.x, i + 1

# Clear out the module
module()
