module "Engine"
  
test "#play, #pause, and #paused", ->
  engine = Engine()
  
  equal engine.paused(), false
  engine.pause()
  equal engine.paused(), true
  engine.play()
  equal engine.paused(), false

test "#save and #restore", ->
  engine = Engine()
  
  engine.add {}
  engine.add {}
  
  equals(engine.objects().length, 2)
  
  engine.saveState()
  
  engine.add {}
  
  equals(engine.objects().length, 3)
  
  engine.loadState()
  
  equals(engine.objects().length, 2)
  
test "#find", ->
  engine = Engine()
  
  engine.add
    id: "testy"
    
  engine.add
    test: true
    
  engine.add
    solid: true
    opaque: false
    
  equal engine.find("#no_testy").length, 0
  equal engine.find("#testy").length, 1
  equal engine.find(".test").length, 1
  equal engine.find(".solid=true").length, 1
  equal engine.find(".opaque=false").length, 1

test "EngineSelector.parse", ->
  a = EngineSelector.parse("#foo")
  equal a.length, 1
  equal a.first(), "#foo"

  a = EngineSelector.parse("#boo, baz")
  equal a.length, 2
  equal a.first(), "#boo"
  equal a.last(), "baz"

  a = EngineSelector.parse("#boo,Light.flicker,baz")
  equal a.length, 3
  equal a.first(), "#boo"
  equal a[1], "Light.flicker"
  equal a.last(), "baz"

test "EngineSelector.process", ->
  [type, id, attr, value] = EngineSelector.process("Foo#test.cool=1")

  equal type, "Foo"
  equal id, "test"
  equal attr, "cool"
  equal value, 1

  [type, id, attr, value] = EngineSelector.process(".baz=false")

  equal type, undefined
  equal id, undefined
  equal attr, "baz"
  equal value, false

asyncTest "Running Engine", ->
  engine = Engine()
  engine.start()
  
  milliseconds = 2000
  
  setTimeout ->
    engine.pause()
    age = engine.age()
    ok(64 <= age <= 68, "Engine ran #{age} steps in #{milliseconds}ms")

    start()
  , milliseconds
  
module()

