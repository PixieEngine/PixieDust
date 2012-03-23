Follow = (I={}, self) ->
  Object.reverseMerge I,
    velocity: Point(0, 0)

  self = GameObject(I)

  self.bind "update", ->


  return self
