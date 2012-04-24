module "Debuggable"

test 'should exist', ->
  obj = GameObject()
  
  obj.include Debuggable
  
  ok obj.debug

test 'should accept x, y for debug position', ->
  obj = GameObject()
  
  obj.include Debuggable
  
  obj.debug
    x: 40
    y: 90
    
  equals obj.I.debug.position.x, 40
  equals obj.I.debug.position.y, 90
  
test 'position should override x, y for debug position', ->
  obj = GameObject()
  
  obj.include Debuggable
  
  obj.debug
    x: 2
    y: 40
    position:
      x: 67
      y: 34
      
  equals obj.I.debug.position.x, 67
  equals obj.I.debug.position.y, 34
  
test '#debug', ->
  obj = GameObject()
  
  obj.include Debuggable
  
  equals obj.I.debug.enabled, false
  
  obj.debug()
  
  equals obj.I.debug.enabled, true
  
test '#toggleDebug', ->
  obj = GameObject()
  
  obj.include Debuggable
  
  equals obj.I.debug.enabled, false
  
  obj.toggleDebug()
  
  equals obj.I.debug.enabled, true 
  
  obj.toggleDebug()
  
  equals obj.I.debug.enabled, false
  
  obj.toggleDebug(false)
  
  equals obj.I.debug.enabled, false
  
  obj.toggleDebug(true)
  
  equals obj.I.debug.enabled, true
  
module()
