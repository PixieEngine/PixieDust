###*
This module clears or fills the canvas before drawing the scene.

@name Clear
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###

Engine.Clear = (I, self) ->
  Object.reverseMerge I,
    backgroundColor: "#00010D"
    clear: false

  self.bind "beforeDraw", ->
    if I.clear
      I.canvas.clear()
    else if I.backgroundColor
      I.canvas.fill(I.backgroundColor)

  # No public methods
  return {}

