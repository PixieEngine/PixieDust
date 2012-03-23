Follow = (I={}, self) ->
  Object.reverseMerge I,
    color: "blue"
    height: 32
    width: 32
    velocity: Point(0, 0)

  # Inherit from game object
  self = GameObject(I)

  # Add events and methods here
  self.bind "update", ->
    ; # Add update method behavior

  # We must always return self as the last line
  return self
