module "Tweening"

test "should allow for simple tweening", ->
  o = GameObject
    x: 0
    
  o.tween 10,
    x: 10
    
  10.times (i) ->
    o.update()

    equals o.I.x, i


test "testing boolean values", ->
  someFunction = ->
    return true

  # Test if someFunction returns true
  ok someFunction()

# Clear out the module
module()
