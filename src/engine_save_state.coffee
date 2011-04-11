###*
(Module) The <code>SaveState</code> module provides methods to save and restore the current engine state.

@name SaveState
@fieldOf Engine
###
Engine.SaveState = (I, self) ->
  savedState = null

  #TODO      
  rewind: ->

  ###*
  Save the current game state and returns a JSON object representing that state.

  @name saveState
  @methodOf Engine.SaveState#
  ###
  saveState: ->
    savedState = I.objects.map (object) ->
      $.extend({}, object.I)

  ###*
  Loads the game state passed in, or the last saved state, if any.

  @name loadState
  @methodOf Engine.SaveState#
  @param [newState] The game state to load.
  ###
  loadState: (newState) ->
    if newState ||= savedState
      I.objects.invoke "trigger", "remove"
      I.objects = []

      newState.each (objectData) ->
        self.add $.extend({}, objectData)

  ###*
  Reloads the current engine state, useful for hotswapping code.

  @name reload
  @methodOf Engine.SaveState#
  ###
  reload: ->
    oldObjects = I.objects
    I.objects = []

    oldObjects.each (object) ->
      object.trigger "remove"

      self.add object.I

