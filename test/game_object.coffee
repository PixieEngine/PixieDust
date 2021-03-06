module "GameObject"

test "()", ->
  gameObject = GameObject()
  ok gameObject

test ".construct", ->
  gameObject = GameObject.construct
    x: 20
    y: 20

  equals(gameObject.position().x, 20)

test "construct invalid object", ->
  raises ->
    GameObject.construct
      class: "aaaaa"
        
test "#closest", ->
  o = GameObject
    x: 0
    y: 0

  other = GameObject
    x: 1
    y: 1

  other2 = GameObject
    x: 10
    y: 10

  equals o.closest([]), null

  equals o.closest([other, other2]), other

test "#sendOrApply", ->
  o = GameObject()

  p = o.sendOrApply "position"

  equals p.x, o.I.x

test "[event] create", 1, ->
  o = GameObject()
  o.bind "create", ->
      ok true, "created event is fired on create"

  o.create()
  o.create() # Make sure only fired once

test "[event] update", 1, ->
  gameObject = GameObject()

  gameObject.bind "update", ->
    equals(gameObject.I.age, 0, 'Age should be 0 on first update')

  gameObject.trigger "update", 1

test "elapsedTime", 1, ->
  gameObject = GameObject()

  timeStep = 33

  gameObject.bind "update", (t) ->
    equals t, timeStep

  gameObject.update(timeStep)

test "[event] destroy", 1, ->
  o = GameObject()
  
  o.bind "destroy", ->
    ok true, "destroyed event is fired on destroy"

  o.destroy()
  o.destroy() # Make sure it's not called twice

module()
