ClampBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0


  self.bind "update", ->
    I.x = I.x.clamp()
