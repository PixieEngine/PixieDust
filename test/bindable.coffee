module "Bindable"

test "#bind and #trigger", 1, ->
  o = $.extend({}, Bindable())

  o.bind("test", ok)
  
  o.trigger("test")

test "Multiple bindings", 2, ->
  o = $.extend({}, Bindable())

  o.bind("test", ok)
  o.bind("test", ok)
  
  o.trigger("test")
 
test "#trigger arguments", ->
  o = $.extend({}, Bindable())
  
  param = 3

  o.bind "test", (p1, p2, p3) ->
    equal(p1, o)
    equal(p2, "the message")
    equal(p3, param)
    
  o.trigger "test", ["the message", 3]

module()

