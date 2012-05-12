###*
The <code>Delay</code> module provides methods to trigger events after a number of steps have passed.

@name Delay
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Data = (I, self) ->
  Object.reverseMerge I,
    data: {}
  
  get: ->
  set: ->
