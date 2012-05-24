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

  loadLevel = (level, offset) ->
    unless I.transitioning
      I.transitioning = true

      levelState = LevelState
        level: level
        offset: offset

      I.currentLevelName = level
      engine.setState levelState

  ###*
  Load map for the next level.

      engine.nextLevel()

  @name nextLevel
  @methodOf Engine#
  ###      
  nextLevel: (offset) ->
    unless I.transitioning
      I.currentLevel += 1

      if level = I.levels[I.currentLevel]
        loadLevel level, offset
      else
        engine.setState GameOver()

  ###*
  Load map named <code>level</code>

      engine.goToLevel 'bossFight'

  @name goToLevel
  @methodOf Engine#
  ###          
  goToLevel: (level) ->
    #TODO Handle integer levels?
    loadLevel level

  ###*
  Reload the current level. Useful for retrying after a player dies.

      engine.reloadLevel()

  @name reloadLevel
  @methodOf Engine#
  ###     
  restartLevel: ->
    loadLevel I.currentLevelName

  reloadLevel: ->
    self.restartLevel()
