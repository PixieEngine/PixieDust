ClampBounds = (I={}, self) ->
  Object.reverseMerge I,


  self.bind "update", ->
    I.x = I.x.clamp()
