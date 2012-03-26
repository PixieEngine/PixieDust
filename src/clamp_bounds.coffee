ClampBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    widt

  self.bind "update", ->
    I.x = I.x.clamp()
