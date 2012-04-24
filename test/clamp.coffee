module "Clamp"

test 'it should exist', ->
  obj = GameObject()
    
  obj.include Clamp
  
  ok obj.clamp
  
test 'it should clamp value between its provided min and max', ->
  obj = GameObject
    x: 105
    
  obj.incude Clamp
  
  

module()
