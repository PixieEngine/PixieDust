Follow = (I={}, self) ->
  Object.reverseMerge I,
    velocity: Point(0, 0)

  self = GameObject(I)

  self.bind "update", ->
    ; # Add update method behavior

  # We must always return self as the last line
  return self
