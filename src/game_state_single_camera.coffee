###*
The <code>SingleCamera</code> module provides provides a single camera view of the game.
Its transform can be adjusted to view different areas and provide various camera effects.

@name SingleCamera
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.SingleCamera = (I, self) ->
  # Set some default properties
  Object.reverseMerge I,
    cameraTransform: Matrix.IDENTITY

  self.attrAccessor "cameraTransform"

  # Add events and methods here
  self.bind "draw", ->
    I.canvas.withTransform I.cameraTransform, (canvas) ->
      drawObjects = self.objects()

      # TODO Turn this zSort into a per camera object stream filter
      # This will also enable filters like clipping region tests
      if I.zSort
        drawObjects.sort (a, b) ->
          a.I.zIndex - b.I.zIndex

      drawObjects.invoke("draw", canvas)

      # TODO This should be triggering a camera draw
      # camera.trigger "draw", I.canvas
      # possibly even with before and after.
      # This is where per camera effects like shake, 
      # flash and fade will come in.

  # No public methods
  return {}

