###*
The <code>Data</code> module provides methods to store global and persistent data in the engine.

    engine.data.score = 0
    engine.data.score += 10
    
    

@name Data
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Data = (I={}, self) ->
  Object.reverseMerge I,
    data: {}

  Object.defineProperty self, 'data',
    get: ->
      I.data

  {}
