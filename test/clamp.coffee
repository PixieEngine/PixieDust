module "Clamp"

test 'it should exist', ->
  obj = GameObject
    x: 30
    y: 20
    
  obj.include Clamp
  
  ok obj.clamp
  
test 'it should clamp value between', ->

module()
