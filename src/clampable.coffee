Clampable = (I={}, self) ->
  # Set some default properties
  Object.reverseMerge I,
    clampP

  # Add events and methods here
  self.bind "afterUpdate", ->

  clamp: ->
    
