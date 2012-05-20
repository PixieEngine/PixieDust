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

    enemyCount = 0
    
    enemy = engine.add
      class: "Enemy"
    
    enemy.bind 'create', ->
      enemyCount++

@name create
@methodOf GameObject#
@event
###

###*
Triggered when object is destroyed. Use 
the destroy event to add particle effects, play sounds, etc.

    bomb = GameObject()
    
    bomb.bind 'destroy', ->
      bomb.explode()
      Sound.play "Kaboom"

@name destroy
@methodOf GameObject#
@event
###

###*
Triggered during every update step.

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

@name step
@methodOf GameObject#
@event
###

###*
Triggered every update after the <code>step</code> event is triggered.

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

@name update
@methodOf GameObject#
@event
###

###*
Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

    boss = GameObject()
    
    boss.bind 'remove', ->
      unlockDoorToLevel2()

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
    active: true
    created: false
    destroyed: false
    includedModules: []
    excludedModules: []

  self = Core(I).extend {
    ###*
    Update the game object. This is generally called by the engine.

    @name update
    @methodOf GameObject#
    ###
    update: (elapsedTime) ->
      #TODO Extract this I.active check out into an engine gameObject remove processor or something
      if I.active
        self.trigger 'update', elapsedTime

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

  modules = defaultModules.concat(I.includedModules.invoke('constantize'))
  modules = modules.without(I.excludedModules.invoke('constantize'))

  modules.each (Module) ->
    self.include Module

  self
  
GameObject.defaultModules = [
  "Bindable"
  "Ageable"
  "Bounded"
  "Clampable"
  "Cooldown"
  "Drawable"
  "Expirable"
  "Follow, Metered, Movable, Rotatable, TimedEvents, Tween]

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

