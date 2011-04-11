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
@constructor
@param I
###

###*
@name I
@memberOf GameObject#
###

GameObject = (I) ->
  I ||= {}

  $.reverseMerge I,
    age: 0
    active: true
    created: false
    destroyed: false
    x: 0
    y: 0
    width: 8
    height: 8
    solid: false
    includedModules: []
    excludedModules: []

  self = Core(I).extend
    ###*
    Destroys the object and triggers the destroyed callback.

    @name update
    @methodOf GameObject#
    ###
    update: ->
      if I.active
        self.trigger('step')
        I.age += 1

      I.active

    draw: $.noop

    position: ->
      Point(I.x, I.y)

    collides: (bounds) ->
      Collision.rectangular(I, bounds)

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

GameObject.construct = (entityData) ->
  if entityData.class
    entityData.class.constantize()(entityData)
  else
    GameObject(entityData)

