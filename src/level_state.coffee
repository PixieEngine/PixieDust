LevelState = (I={}) ->
  Object.reverseMerge I,
    level: 'level1'

  self = GameState(I)

  self.bind "enter", ->
    # TODO: Adjustable Fade In
    engine.camera().fadeIn 10

    engine.loadMap I.level, ->
      engine.I.transitioning = false

  return self
