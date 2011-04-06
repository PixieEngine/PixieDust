module "Bindable"

test "#bind and #trigger", 1, ->
  o = $.extend({}, Bindable())

  o.bind("test", -> ok true)
  
  o.trigger("test")

test "Multiple bindings", 2, ->
  o = $.extend({}, Bindable())

  o.bind("test", -> ok true)
  o.bind("test", -> ok true)
  
  o.trigger("test")
 
test "#trigger arguments", ->
  o = $.extend({}, Bindable())
  
  param = 3

  o.bind "test", (p1, p2) ->
    equal(p1, "the message")
    equal(p2, param)
    
  o.trigger "test", ["the message", 3]

module()

