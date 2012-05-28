module "Tweening"

test "should allow for simple linear tweening", ->
  o = GameObject
    x: 0
    
  o.tween 10,
    x: 10
    
  11.times (i) ->
    o.update(1)
    o.trigger "afterUpdate", 1

    equals o.I.x, Math.min(i + 1, 10)

# Clear out the module
module()
