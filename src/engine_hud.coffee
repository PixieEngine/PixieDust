Engine.HUD = (I, self) ->
  hudCanvas = $("<canvas width=640 height=480 />").powerCanvas()
  hudCanvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace")
  
  self.bind "draw", (canvas) ->
    I.objects.each (object) ->
      object.drawHUD? hudCanvas
  
    hud = hudCanvas.element()
    canvas.drawImage hud, 0, 0, hud.width, hud.height, 0, 0, hud.width, hud.height

  return {}

