###*
This module sets up the keyboard inputs for each engine update.

@name Keyboard
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Keyboard = (I, self) ->
  self.bind "beforeUpdate", ->
    # TODO: Make a Gamepad/Keyboard input module that has web and XNA
    # implementations
    updateKeys?()

  return {}

