###*
The <code>Stats</code> module provides methods to query the engine to find game objects.

@name Stats
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Stats = (I, self) ->
  measure: (field, filter="", frequency=30) ->
    ; #TODO

  gatherData: ->
    self.find()

