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
      
    destroy: () ->
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

