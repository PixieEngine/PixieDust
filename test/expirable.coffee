module "Expirable"

test "objects become inactive after their duration", ->
  obj = GameObject
    duration: 5

  obj.include Expirable

  5.times ->
    obj.update()

  equals obj.I.active, true, "object is active until duration is exceeded"

  6.times ->
    obj.update()

  equals obj.I.active, false, "object is inactive after duration"
  
test "should fade out if that option is set", ->
  obj = Ga

module()
