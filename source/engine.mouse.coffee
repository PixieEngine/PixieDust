###*
This module sets up the mouse inputs for each engine update.

@name Mouse
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Mouse = (I, self) ->
  self.bind "beforeUpdate", ->
    # TODO: Make a Gamepad/Keyboard/Mouse input module that has web and XNA
    # implementations
    updateMouse?()

  return {}
