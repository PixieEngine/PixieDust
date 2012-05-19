GameState = (I={}) ->
  Object.reverseMerge I,
    objects: []

  queuedObjects = []

  self = Core(I).extend {
    ###*
    The add method creates and adds an object to the game world. Two
    other events are triggered around this one: beforeAdd and afterAdd.

        # you can add arbitrary entityData and
        # the engine will make it into a GameObject
        engine.add 
          x: 50
          y: 30
          color: "red"
    
        player = engine.add
          class: "Player"

    @name add
    @methodOf Engine#
    @param {Object} entityData The data used to create the game object.
    @returns {GameObject}
    ###
    add: (entityData) ->
      self.trigger "beforeAdd", entityData

      object = GameObject.construct entityData
      object.create()

      self.trigger "afterAdd", object

      if I.updating
        queuedObjects.push object
      else
        I.objects.push object

      return object

    objects: ->
      I.objects.copy()
  }

  self.include Bindable

  # Add events and methods here
  self.bind "update", (elapsedTime) ->
    I.updating = true

    I.objects.invoke "trigger", "beforeUpdate", elapsedTime

    [toKeep, toRemove] = I.objects.partition (object) ->
      object.update(elapsedTime)

    I.objects.invoke "trigger", "afterUpdate", elapsedTime

    toRemove.invoke "trigger", "remove"

    I.objects = toKeep.concat(queuedObjects)
    queuedObjects = []

    I.updating = false

  self.include GameState.Cameras
  self.include GameState.SaveState

  return self
