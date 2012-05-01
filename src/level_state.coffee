LevelState = (I={}) ->
  Object.reverseMerge I,
    duration: 1
    level: 'level1'

  self = GameState(I)

  self.bind "enter", ->
    # TODO: Adjustable Fade In
    engine.fadeIn
      duration: 10

    engine.loadMap I.level, ->
      engine.I.transitioning = false

  return self
