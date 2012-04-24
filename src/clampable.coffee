Clampable = (I={}, self) ->
  # Set some default properties
  Object.reverseMerge I,
    clampData: {}

  # Add events and methods here
  self.bind "afterUpdate", ->
    for property, data of I.clampData
      I[property] = I[property].clamp(data.min, data.max)

  clamp: ->
    
