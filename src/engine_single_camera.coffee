Engine.SingleCamera = (I, self) ->
  # Set some default properties
  Object.reverseMerge I,
    cameraTransform: Matrix.IDENTITY

  self.attrAccessor "cameraTransform"

  # Add events and methods here
  self.bind "draw", ->
    I.canvas.withTransform I.cameraTransform, (canvas) ->
      # TODO Turn this zSort into a per camera object stream filter
      drawObjects = self.objects()

      if I.zSort
        drawObjects.sort (a, b) ->
          a.I.zIndex - b.I.zIndex

      drawObjects.invoke("draw", canvas)

      # TODO This should be triggering a camera draw
      # camera.trigger "draw", I.canvas

  # No public methods
  return {}

