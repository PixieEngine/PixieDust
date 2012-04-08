module 'Metered'

test 'should exist', ->
  obj = GameObject()
  obj.include(Metered)
  
  ok obj.meter
  
test 'should set max<Attribute> ', ->

module()