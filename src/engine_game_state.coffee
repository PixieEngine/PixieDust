# TODO: This is a work in progress
Engine.GameState = (I, self) ->
  Object.reverseMerge I,
    currentState: GameState()

  requestedState = null

  # The idea is that all the engine#beforeUpdate triggers happen
  # before the state beforeUpdate triggers, then the state update
  # then the state after update, then the engine after update
  # like a layered cake with states in the middle.
  self.bind "update", ->
    I.currentState.trigger "beforeUpdate"
    I.currentState.trigger "update"
    I.currentState.trigger "afterUpdate"

  self.bind "afterUpdate", ->
    if requestedState?
      I.currentState.trigger "exit", requestedState

      previousState = I.currentState
      I.currentState = requestedState

      I.currentState.trigger "enter", previousState

      requestedState = null

  # TODO: Drawing, cameras??

  # We must always return self as the last line
  return {
    # Just passs through to the current state
    add: (entityData) ->
      I.currentState.add(entityData)
    objects: ->
      I.currentState.objects()
    setState: (newState) ->
      requestedState = newState
  }

