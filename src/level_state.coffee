###*
A Game State that loads up 

@see GameState
@name LevelState
@constructor
@param {Number} duration Amount of time in frames it takes to fade into the level
@param {String} level name of the map to load
###

###*
Goes to the next level on any user input.

@name update
@methodOf TitleScreen#
@event
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
