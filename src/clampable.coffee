Clampable = (I={}, self) ->
  # Set some default properties
  Object.reverseMerge I,
    

  # Inherit from game object
  self = GameObject(I)

  # Add events and methods here
  self.bind "afterUpdate", ->

  # We must always return self as the last line
  return self
