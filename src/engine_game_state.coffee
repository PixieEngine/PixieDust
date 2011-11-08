# TODO: This is a work in progress
Engine.GameState = (I, self) ->
  # Set some default properties
  Object.reverseMerge I,
    color: "blue"
    height: 32
    sprite: "placeholder"
    width: 32

  # Default Game State
  currentState = GameState()

  # Inherit from game object
  self = GameObject(I)

  # The idea is that all the engine#beforeUpdate triggers happen
  # before the state beforeUpdate triggers, then the state update
  # then the state after update, then the engine after update
  # like a layered cake with states in the middle.
  self.bind "update", ->
    currentState.trigger "beforeUpdate"
    currentState.trigger "update"
    currentState.trigger "afterUpdate"

  # TODO: Drawing, cameras??

  # We must always return self as the last line
  return {
    # Just passs through to the current state
    add: (entityData) ->
      currentState.add(entityData)
    objects: ->
      currentState.objects()
  }

