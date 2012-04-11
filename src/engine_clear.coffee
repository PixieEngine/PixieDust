###*
This module clears or fills the canvas before drawing the scene.
It 

@name Background
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###

Engine.Background = (I, self) ->
  Object.reverseMerge I,
    background: null
    backgroundColor: "#00010D"
    clear: false

  self.attrAccessor "clear", "backgroundColor"

  self.bind "init", ->
    if I.background?.isString?()
      I.background = Sprite.loadByName I.background

  self.bind "beforeDraw", ->
    if I.clear
      I.canvas.clear()
    else if I.background
      I.background.fill(canvas, 0, 0, App.width, App.height)
    else if I.backgroundColor
      I.canvas.fill(I.backgroundColor)

  # No public methods
  return {}
