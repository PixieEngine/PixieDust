###*

@see GameState
@name LevelState
@constructor
@param {Number} duration Amount of time in frames it takes to fade into the level
@param {String} level name of the level to 
###
LevelState = (I={}) ->
  Object.reverseMerge I,
    duration: 10
    level: 'level1'

  self = GameState(I)

  self.bind "enter", ->
    # TODO: Adjustable Fade In
    engine.fadeIn
      duration: I.duration

    engine.loadMap I.level, ->
      engine.I.transitioning = false

  return self
