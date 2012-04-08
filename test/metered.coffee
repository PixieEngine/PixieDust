module 'Metered'

test "should exist", ->
  obj = GameObject()
  
  obj.include Metered
  
  ok obj.meter
  
test "should set max<Attribute> if one doesn't exist", ->
  obj = GameObject
    health: 150
  
  obj.include Metered

  obj.meter 'health'
  
  equals obj.I.maxHealth, 15
  
module()