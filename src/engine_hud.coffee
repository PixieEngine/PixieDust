###*
The <code>HUD</code> module provides an extra canvas to draw to. GameObjects that respond to the
<code>drawHUD</code> method will draw to the HUD canvas. The HUD canvas is not cleared each frame, it is
the responsibility of the objects drawing on it to manage that themselves.

@name HUD
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.HUD = (I, self) ->
  hudCanvas = $("<canvas width=#{App.width} height=#{App.height} />").powerCanvas()
  hudCanvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace")

  self.bind "draw", (canvas) ->
    I.objects.each (object) ->
      object.drawHUD? hudCanvas

    hud = hudCanvas.element()
    canvas.drawImage hud, 0, 0, hud.width, hud.height, 0, 0, hud.width, hud.height

  return {}

