module 'Metered'

test "should exist", ->
  obj = GameObject()
  
  obj.include Metered
  
  ok obj.meter
  
test "should set max<Attribute> if it isn't present in the including object", ->
  obj = GameObject
    health: 150
  
  obj.include Metered

  obj.meter 
    name: 'health'
  
  equals obj.I.maxHealth, 150

test "should set both <attribute> and max<attribute> if they aren't present in the including object", ->
  obj = GameObject()
  
  obj.include Metered
  
  
  
module()