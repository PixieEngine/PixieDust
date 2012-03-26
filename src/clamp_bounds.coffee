ClampBounds = (I={}, self) ->
  Object.reverseMerg

  self.bind "update", ->
    I.x = I.x.clamp()
