module "Tweening"

test "should allow for simple linear tweening", ->
  o = GameObject
    x: 0
    
  o.tween 10,
    x: 10
    
  10.times (i) ->
    o.update()

    equals o.I.x, i + 1


# Clear out the module
module()
