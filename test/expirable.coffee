module "Expirable"

test "objects become inactive after their duration", ->
  obj = GameObject
    duration: 5

  obj.include Expirable

  4.times ->
    obj.trigger "afterUpdate", 1

  equals obj.I.active, true, "object is active until duration is exceeded"

  5.times ->
    obj.trigger "afterUpdate", 1

  equals obj.I.active, false, "object is inactive after duration"
  
test "should fade out if that option is set", ->
  obj = GameObject
    duration: 10
    alpha: 0.8
    fadeOut: true
    
  obj.include Expirable
  
  5.times ->
    obj.update(1)
    obj.trigger "afterUpdate", 1
    
  equals obj.I.alpha, 0.8 * (1 - (obj.I.age / obj.I.duration))

module()
