###*
The default base class for all objects you can add to the engine.

Events:

<code>create</code> When object is created for the first time.

<code>step</code> Triggered every update step.

<code>destroy</code> Triggered when object is destroyed. Use 
the destroy event to add particle effects, play sounds, etc.

<code>remove</code> Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

@name GameObject
@extends Core
@constructor
@param I
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

  defaultModules = [Bindable, Bounded, Drawable, Durable, Movable]
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

