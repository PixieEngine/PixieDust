###*
The <code>Data</code> module provides methods to store global and persistent data in the engine.

@name Data
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
