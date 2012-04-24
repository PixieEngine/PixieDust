Clamp = (I={}, self) ->
  Object.reverseMerge I,
    clamps: []
    
  self.bind "update", ->
    for property in I.clamps
      property.name = property.value.clamp(property.min, property.max)

  clamp: (properties) ->
    