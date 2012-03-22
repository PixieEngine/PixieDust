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

<code><pre>
enemyCount = 0

enemy = engine.add
  class: "Enemy"

enemy.bind 'create', ->
  enemyCount++
</pre></code>

@name create
@methodOf GameObject#
@event
###

###*
Triggered when object is destroyed. Use 
the destroy event to add particle effects, play sounds, etc.

<code><pre>
bomb = GameObject()

bomb.bind 'destroy', ->
  bomb.explode()
  Sound.play "Kaboom"
</pre></code>

@name destroy
@methodOf GameObject#
@event
###

###*
Triggered during every update step.

<code><pre>
player = GameObject()

player.bind 'step', ->
  # check to see if keys are being pressed and 
  # change the player's velocity
  if keydown.left
    player.velocity(Point(-1, 0))
  else if keydown.right
    player.velocity(Point(1, 0))
  else
    player.velocity(Point(0, 0))
</pre></code>

@name step
@methodOf GameObject#
@event
###

###*
Triggered every update after the <code>step</code> event is triggered.

<code><pre>
player = GameObject()

# we can really use the update and 
# step events almost interchangebly
player.bind 'update', ->
  # check to see if keys are being pressed and 
  # change the player's velocity
  if keydown.left
    player.velocity(Point(-1, 0))
  else if keydown.right
    player.velocity(Point(1, 0))
  else
    player.velocity(Point(0, 0))
</pre></code>

@name update
@methodOf GameObject#
@event
###

###*
Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

<code><pre>
boss = GameObject()

boss.bind 'remove', ->
  unlockDoorToLevel2()
</pre></code>

@name remove
@methodOf GameObject#
@event
###

GameObject = (I) ->
  I ||= {}

  ###*
  @name {Object} I Instance variables 
  @memberOf GameObject#
  ###
  Object.reverseMerge I,
    age: 0
    active: true
    created: false
    destroyed: false
    solid: false
    includedModules: []
    excludedModules: []

  self = Core(I).extend {
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

    ###*
    Triggers the create event if the object has not already been created.

    @name create
    @methodOf GameObject#
    ###
    create: ->
      self.trigger('create') unless I.created
      I.created = true

    ###*
    Destroys the object and triggers the destroyed event.

    @name destroy
    @methodOf GameObject#
    ###
    destroy: ->
      self.trigger('destroy') unless I.destroyed

      I.destroyed = true
      I.active = false
  }

  defaultModules = [Bindable, Bounded, Cooldown, Drawable, Durable]
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

