Camera.Rotate = (I, self) ->
  Object.reverseMerge I,
    rotation: 0

  self.transformFilterChain (transform) ->
    transform.rotate(I.rotation)

  self.attrAccessor "rotation"

  rotate: (amount) ->
    self.rotation(I.rotation + amount)

