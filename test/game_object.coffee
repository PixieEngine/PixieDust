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

test "[event] destroy", 2, ->
  GameObject
    destroy: ->
      ok true, "destroyed event is fired on destroy"
  .destroy()

  GameObject
    destroy: 'ok(true, "destroyed event is fired on destroy")'
  .destroy()

module()

