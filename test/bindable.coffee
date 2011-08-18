module "Bindable"

test "#bind and #trigger", 1, ->
  o = Object.extend({}, Bindable())

  o.bind("test", -> ok true)

  o.trigger("test")

test "Multiple bindings", 2, ->
  o = Object.extend({}, Bindable())

  o.bind("test", -> ok true)
  o.bind("test", -> ok true)

  o.trigger("test")

test "#trigger arguments", ->
  o = Object.extend({}, Bindable())

  param1 = "the message"
  param2 = 3

  o.bind "test", (p1, p2) ->
    equal(p1, param1)
    equal(p2, param2)

  o.trigger "test", param1, param2

test "#unbind", ->
  o = Object.extend({}, Bindable())

  callback = ->
    ok false

  o.bind "test", callback
  o.unbind "test", callback
  o.trigger "test"

  o.bind "test", callback
  o.unbind "test"
  o.trigger "test"

module()

