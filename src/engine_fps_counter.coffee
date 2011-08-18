###*
The <code>FPSCounter</code> module tracks and displays the framerate.

@name FPSCounter
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.FPSCounter = (I, self) ->
  Object.reverseMerge I,
    showFPS: false

  framerate = Framerate
    noDOM: true

  self.bind "draw", (canvas) ->
    if I.showFPS
      canvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace")
      canvas.fillColor("#FFF")
      canvas.fillText("fps: " + framerate.fps, 6, 18)

    framerate.rendered()

