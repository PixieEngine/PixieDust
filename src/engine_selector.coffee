###*
The <code>Selector</code> module provides methods to query the engine to find game objects.

@name Selector
@fieldOf Engine
@module
###
Engine.Selector = (I, self) ->

  instanceMethods =
    set: (attr, value) ->
      this.each (item) ->
        item.I[attr] = value

  ###*
  Get a selection of GameObjects that match the specified selector criteria. The selector language
  can select objects by id, class, or attributes.

  To select an object by id use "#anId"

  To select objects by class use "MyClass"

  To select objects by properties use ".someProperty" or ".someProperty=someValue"

  You may mix and match selectors. "Wall.x=0" to select all objects of class Wall with an x property of 0.

  @name find
  @methodOf Engine#
  @param {String} selector
  @type Array
  ###
  find: (selector) ->
    results = []

    matcher = Engine.Selector.generate(selector)

    I.objects.each (object) ->
      results.push object if matcher.match object

    $.extend results, instanceMethods

$.extend Engine.Selector,
  parse: (selector) ->
    selector.split(",").invoke("trim")

  process: (item) ->
    result = /^(\w+)?#?([\w\-]+)?\.?([\w\-]+)?=?([\w\-]+)?/.exec(item)

    if result
      result[4] = result[4].parse() if result[4]

      result.splice(1)
    else
      []

  generate: (selector) ->
    components = Engine.Selector.parse(selector).map (piece) ->
      Engine.Selector.process(piece)

    TYPE = 0
    ID = 1
    ATTR = 2
    ATTR_VALUE = 3

    match: (object) ->
      for component in components
        idMatch = (component[ID] == object.I.id) || !component[ID]
        typeMatch = (component[TYPE] == object.I.class) || !component[TYPE]

        if attr = component[ATTR]
          if (value = component[ATTR_VALUE])? 
            attrMatch = (object.I[attr] == value)
          else
            attrMatch = object.I[attr]
        else
          attrMatch = true

        return true if idMatch && typeMatch && attrMatch

      return false

