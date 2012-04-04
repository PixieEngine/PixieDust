###*
The <code>Selector</code> module provides methods to query the engine to find game objects.

@name Selector
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Selector = (I, self) ->

  instanceMethods =
    set: (attr, value) ->
      this.each (item) ->
        item.I[attr] = value

  ###*
  Get a selection of GameObjects that match the specified selector criteria. The selector language
  can select objects by id, class, or attributes. Note that this method always returns an Array,
  so if you are trying to find only one object you will need something like <code>engine.find("Enemy").first()</code>.

  <code><pre>
  player = engine.add
    class: "Player"

  enemy = engine.add
    class: "Enemy"
    speed: 5
    x: 0

  distantEnemy = engine.add
    class "Enemy"
    x: 500

  boss = engine.add
    class: "Enemy"
    id: "Boss"
    x: 0

  # to select an object by id use "#anId"
  engine.find "#Boss"
  # => [boss]

  # to select an object by class use "MyClass"
  engine.find "Enemy"
  # => [enemy, distantEnemy, boss]

  # to select an object by properties use ".someProperty" or ".someProperty=someValue"
  engine.find ".speed=5"
  # => [enemy]

  # You may mix and match selectors.
  engine.find "Enemy.x=0"
  # => [enemy, boss] # doesn't return distantEnemy
  </pre></code>

  @name find
  @methodOf Engine#
  @param {String} selector
  @returns {Array} An array of the objects found
  ###


  find: (selector) ->
    results = []

    matcher = Engine.Selector.generate(selector)

    self.objects().each (object) ->
      results.push object if matcher.match object

    Object.extend results, instanceMethods

  first: (selector) ->
    self.find(selector).first()

Object.extend Engine.Selector,
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

