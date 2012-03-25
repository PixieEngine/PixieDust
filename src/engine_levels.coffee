Engine.Levels = (I, self) ->
  Object.reverseMerge I,
    levels: []
    currentLevel: -1

  I.transitioning = false

  loadLevel = (level) ->
    unless I.transitioning
      I.transitioning = true

      levelState = LevelState
        level: level

      engine.setState levelState

  # We must always return self as the last line
  nextLevel: ->
    unless I.transitioning
      I.currentLevel += 1

      if level = I.levels[I.currentLevel]
        loadLevel level
      else
        engine.setState GameOver()

  goToLevel: (level) ->
    #TODO Handle integer levels?
    loadLevel level

