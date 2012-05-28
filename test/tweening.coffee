module "Tweening"

test "should allow for simple linear tweening", ->
  o = GameObject
    x: 0
    
  targetValue = 10
  o.tween 10,
    x: targetValue

  11.times (i) ->
    o.update(1)
    o.trigger "afterUpdate", 1

    equals o.I.x, Math.min(i + 1, targetValue)

# Clear out the module
module()
