###*
The <code>FPSCounter</code> module tracks and displays the framerate.

<code><pre>
window.engine = Engine
  ...
  includedModules: ["FPSCounter"]
  FPSColor: "#080"
</pre></code>

@name FPSCounter
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.FPSCounter = (I, self) ->
  Object.reverseMerge I,
    showFPS: true
    FPSColor: "#FFF"

  framerate = Framerate()

  self.bind "overlay", (canvas) ->
    if I.showFPS
      canvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace")

      canvas.drawText
        color: I.FPSColor
        position: Point(6, 18)
        text: "fps: #{framerate.fps}"

    framerate.rendered()
