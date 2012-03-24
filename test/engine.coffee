module "Engine"

MockCanvas = ->
  clear: ->
  context: ->
    beginPath: ->
    clip: ->
    rect: ->
  drawRect: ->
  fill: ->
  withTransform: (t, fn) ->
    fn(@)
  clip: ->

test "#play, #pause, and #paused", ->
  engine = Engine()

  equal engine.paused(), false
  engine.pause()
  equal engine.paused(), true
  engine.play()
  equal engine.paused(), false

  engine.pause()
  equal engine.paused(), true
  engine.pause()
  equal engine.paused(), false

  engine.pause(false)
  equal engine.paused(), false

  engine.pause(true)
  equal engine.paused(), true

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

test "before add event", 1, ->
  engine = Engine()

  engine.bind "beforeAdd", (data) ->
    equals data.test, "test"

  engine.add
    test: "test"

test "zSort", ->
  engine = Engine
    canvas: MockCanvas()
    zSort: true

  n = 0
  bindDraw = (o) ->
    o.bind 'draw', ->
      n += 1
      o.I.drawnAt = n

  o2 = engine.add
    zIndex: 2
  o1 = engine.add
    zIndex: 1

  bindDraw(o1)
  bindDraw(o2)

  engine.frameAdvance()

  equals o1.I.drawnAt, 1, "Object with zIndex #{o1.I.zIndex} should be drawn first"
  equals o2.I.drawnAt, 2, "Object with zIndex #{o2.I.zIndex} should be drawn second"

test "invalid module throws error", ->
  raises ->
    engine = Engine
      includedModules: ["HellaInvalidModule"]

test "excluded modules", ->
  engine = Engine
    excludedModules: "Developer"

  engine = Engine
    excludedModules: ["Developer"]

test "draw events", 2, ->
  engine = Engine
    canvas: MockCanvas()
    backgroundColor: false

  engine.bind "beforeDraw", ->
    ok true

  engine.bind "draw", ->
    ok true

  engine.frameAdvance()

test "Remove event", 1, ->
  engine = Engine
    backgroundColor: false

  object = engine.add
    active: false

  object.bind "remove", ->
    ok true, "remove called"

  engine.frameAdvance()

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

test "Selector.parse", ->
  a = Engine.Selector.parse("#foo")
  equal a.length, 1
  equal a.first(), "#foo"

  a = Engine.Selector.parse("#boo, baz")
  equal a.length, 2
  equal a.first(), "#boo"
  equal a.last(), "baz"

  a = Engine.Selector.parse("#boo,Light.flicker,baz")
  equal a.length, 3
  equal a.first(), "#boo"
  equal a[1], "Light.flicker"
  equal a.last(), "baz"

test "Selector.process", ->
  [type, id, attr, value] = Engine.Selector.process("Foo#test.cool=1")

  equal type, "Foo"
  equal id, "test"
  equal attr, "cool"
  equal value, 1

  [type, id, attr, value] = Engine.Selector.process(".baz=false")

  equal type, undefined
  equal id, undefined
  equal attr, "baz"
  equal value, false

test "#camera", ->
  engine = Engine()

  equal engine.camera(), engine.cameras().first()

test "#collides", ->
  engine = Engine()

  engine.collides(Rectangle(0, 0, 10, 10), null)

test "#setState", ->
  engine = Engine()

module()
