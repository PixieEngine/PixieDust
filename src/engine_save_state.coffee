###*
The <code>SaveState</code> module provides methods to save and restore the current engine state.

@name SaveState
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.SaveState = (I, self) ->
  savedState = null

  #TODO      
  rewind: ->

  ###*
  Save the current game state and returns a JSON object representing that state.

  <code><pre>
  engine.bind 'step', ->
    if justPressed.s
      engine.saveState()
  </pre></code>

  @name saveState
  @methodOf Engine.SaveState#
  @returns {Array} An array of the instance data of all objects in the game
  ###
  saveState: ->
    savedState = I.objects.map (object) ->
      Object.extend({}, object.I)

  ###*
  Loads the game state passed in, or the last saved state, if any.

  <code><pre>
  engine.bind 'step', ->
    if justPressed.l
      # loads the last saved state
      engine.loadState()

    if justPressed.o
      # removes all game objects, then reinstantiates 
      # them with the entityData passed in
      engine.loadState([{x: 40, y: 50, class: "Player"}, {x: 0, y: 0, class: "Enemy"}, {x: 500, y: 400, class: "Boss"}])
  </pre></code>

  @name loadState
  @methodOf Engine.SaveState#
  @param [newState] The game state to load.
  ###
  loadState: (newState) ->
    if newState ||= savedState
      I.objects.invoke "trigger", "remove"
      I.objects = []

      newState.each (objectData) ->
        self.add Object.extend({}, objectData)

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

