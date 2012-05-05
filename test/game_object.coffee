module "GameObject"

test "()", ->
  gameObject = GameObject()
  ok gameObject

test "construct", ->
  gameObject = GameObject.construct
    x: 20
    y: 20

  equals(gameObject.position().x, 20)

test "construct invalid object", ->
  raises ->
    GameObject.construct
      class: "aaaaa"
        
test "#closest", ->
  o = GameObject()

  other = GameObject
    x: 1
    y: 1
    
  other2 = GameObject
    x: 10
    y: 10

  equals o.closest([]), null

  equals o.closest([other, other2]), other

test "[event] create", 2, ->
  GameObject
    create: ->
      ok true, "created event is fired on create"
  .create()

  GameObject
    create: 'ok(true, "created event is fired on create")'
  .create()

test "[event] step", 2, ->
  gameObject = GameObject
    step: "equals(I.age, 0, 'Age should be 0 on first step')"

  gameObject.update()

  gameObject = GameObject
    step: ->
      ok true, 'Step event is called'

  gameObject.update()

test "elapsedTime", 1, ->
  gameObject = GameObject()

  timeStep = 33

  gameObject.bind "update", (t) ->
    equals t, timeStep

  gameObject.update(timeStep)

test "[event] destroy", 2, ->
  GameObject
    destroy: ->
      ok true, "destroyed event is fired on destroy"
  .destroy()

  GameObject
    destroy: 'ok(true, "destroyed event is fired on destroy")'
  .destroy()

module()

