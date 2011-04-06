Engine.Shadows = (I, self) ->
  shadowCanvas = $("<canvas width=640 height=480 />").powerCanvas()

  self.bind "draw", (canvas) ->
    if I.ambientLight < 1
      shadowCanvas.compositeOperation "source-over"
      shadowCanvas.clear()
      # Fill with shadows
      shadowCanvas.fill("rgba(0, 0, 0, #{1 - I.ambientLight})")

      # Etch out the light from each light source
      shadowCanvas.compositeOperation "destination-out"
      shadowCanvas.withTransform I.cameraTransform, (shadowCanvas) ->
        I.objects.each (object, i) ->
          if object.illuminate
            shadowCanvas.globalAlpha 1
            object.illuminate(shadowCanvas)

      shadows = shadowCanvas.element()
      canvas.drawImage(shadows, 0, 0, shadows.width, shadows.height, 0, 0, shadows.width, shadows.height)
  
  return {}

