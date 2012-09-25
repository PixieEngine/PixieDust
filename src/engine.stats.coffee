###*
The <code>Stats</code> module provides methods to query the engine to find game objects.

@name Stats
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Stats = (I, self) ->
  measure: (objects, field, frequency=30) ->
    ; #TODO

  gatherData: ->
    self.find()

