###*
The default base class for all objects you can add to the engine.

GameObjects fire events that you may bind listeners to. Event listeners 
may be bound with <code>object.bind(eventName, callback)</code>

@name GameObject
@extends Core
@constructor
@instanceVariables age, active, created, destroyed, solid, includedModules, excludedModules
###

###*
Triggered when the object is created.
@name create
@methodOf GameObject#
@event
###

###*
Triggered when object is destroyed. Use 
the destroy event to add particle effects, play sounds, etc.

@name destroy
@methodOf GameObject#
@event
###

###*
Triggered during every update step.

@name step
@methodOf GameObject#
@event
###

###*
Triggered every update after the `step` event is triggered.

@name update
@methodOf GameObject#
@event
###

###*
Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

@name remove
@methodOf GameObject#
@event
###

GameObject = (I) ->
  I ||= {}

  ###*
  @name I
  @memberOf GameObject#
  ###
  $.reverseMerge I,
    age: 0
    active: true
    created: false
    destroyed: false
    solid: false
    includedModules: []
    excludedModules: []

  self = Core(I).extend
    ###*
    Update the game object. This is generally called by the engine.

    @name update
    @methodOf GameObject#
    ###
    update: ->
      if I.active
        self.trigger('step')
        self.trigger('update')
        I.age += 1

      I.active

    draw: (canvas) ->
      if I.transform
        canvas.withTransform I.transform, (canvas) ->
          self.trigger 'draw', canvas
      else
        canvas.withTransform Matrix.translation(I.x, I.y), (canvas) ->
          self.trigger 'draw', canvas

    ###*
    Destroys the object and triggers the destroyed callback.

    @name destroy
    @methodOf GameObject#
    ###
    destroy: ->
      self.trigger('destroy') unless I.destroyed

      I.destroyed = true
      I.active = false

  defaultModules = [Bindable, Bounded, Drawable, Durable]
  modules = defaultModules.concat(I.includedModules.invoke('constantize'))
  modules = modules.without(I.excludedModules.invoke('constantize'))

  modules.each (Module) ->
    self.include Module

  self.attrAccessor "solid"

  autobindEvents = ['create', 'destroy', 'step']
  autobindEvents.each (eventName) ->
    if event = I[eventName]
      if typeof event == "function"
        self.bind(eventName, event)
      else
        self.bind(eventName, eval( "(function() {#{event}})" ))

  self.trigger('create') unless I.created
  I.created = true

  self

###*
Construct an object instance from the given entity data.
@name construct
@memberOf GameObject
@param {Object} entityData
###
GameObject.construct = (entityData) ->
  if entityData.class
    entityData.class.constantize()(entityData)
  else
    GameObject(entityData)

