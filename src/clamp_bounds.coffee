ClampBounds = (I={}, self) ->
  self.bind "update", ->
    I.x = I.x.clamp()
