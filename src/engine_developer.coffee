Engine.Developer = (I, self) ->
  self.bind "draw", (canvas) ->
    if I.paused
      #TODO: Move this into the debug draw method of the objects themselves
      canvas.withTransform I.cameraTransform, (canvas) ->
        I.objects.each (object) ->
          canvas.fillColor 'rgba(255, 0, 0, 0.5)'
          canvas.fillRect(object.bounds().x, object.bounds().y, object.bounds().width, object.bounds().height)
          
      canvas.fillColor 'rgba(0, 0, 0, 0.5)'
      canvas.fillRect(430, 10, 200, 60)
      canvas.fillColor '#fff'
      canvas.fillText("Developer Mode. Press Esc to resume", 440, 25)
      canvas.fillText("Shift+Left click to add boxes", 440, 43)
      canvas.fillText("Right click red boxes to edit properties", 440, 60)
    
  return {}

