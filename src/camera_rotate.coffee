Camera.Rotate = (I, self) ->      
  rotate: (amount) ->
    self.rotation(I.cameraRotation + amount)

  rotation: (value) ->
    if value?
      I.cameraRotation = value
      return self
    else
      return I.cameraRotation
