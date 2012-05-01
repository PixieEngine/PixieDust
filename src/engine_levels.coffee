###*
This module provides methods for transitioning between levels.

@name Levels
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Levels = (I, self) ->
  Object.reverseMerge I,
    levels: []
    currentLevel: -1
    currentLevelName: null

  I.transitioning = false

  loadLevel = (level) ->
    unless I.transitioning
      I.transitioning = true

      levelState = LevelState
        level: level

      I.currentLevelName = level
      engine.setState levelState

  ###*
  Load the map for the next level.

  <code><pre>
  engine.nextLevel()
  </pre></code>

  @name ne
  @methodOf Engine#
  @param {Number} steps The number of steps to wait before executing the callback
  @param {Function} callback The callback to be executed.

  @returns {Engine} self
  ###      
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

  reloadLevel: ->
    loadLevel I.currentLevelName
