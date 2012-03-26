ClampBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    width: 32
    height:

  self.bind "update", ->
    I.x = I.x.clamp()
