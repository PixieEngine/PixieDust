EngineSelector = 
  parse: (selector) ->
    selector.split(",").map (result) ->
      result.trim()

  process: (item) ->
    result = /^(\w+)?#?([\w\-]+)?\.?([\w\-]+)?=?([\w\-]+)?/.exec(item)

    if result
      result[4] = result[4].parse() if result[4]

      result.splice(1)
    else
      []
      
  instanceMethods:
    set: (attr, value) ->
      this.each (item) ->
        item.I[attr] = value

  generate: (selector) ->
    components = EngineSelector.parse(selector).map (piece) ->
      EngineSelector.process(piece)

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

