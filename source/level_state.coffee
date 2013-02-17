###*
A Game State that loads the map for a given level and transitions into the level.

@see GameState
@name LevelState
@constructor
@param {Number} duration Amount of time in frames it takes to fade into the level
@param {String} level name of the map to load
###

###*
Fades in the current level and loads the map.

@name enter
@methodOf LevelState#
@event
###
window.LevelState = (I={}) ->
  Object.reverseMerge I,
    duration: 10
    level: 'level1'

  self = GameState(I)

  self.bind "enter", ->
    engine.fadeIn
      duration: I.duration

    engine.loadMap I.level, ->
      engine.I.transitioning = false

  return self
