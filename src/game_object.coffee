GameObject = (I) ->
  I ||= {}
  
  $.reverseMerge I,
    age: 0
    active: true
    color: "#880"
    created: false
    destroyed: false
    spriteName: null
    x: 0
    y: 0
    width: 8
    height: 8
    solid: false
    includedModules: []
    excludedModules: []
    
    
  if I.spriteName
    I.sprite = Sprite(I.spriteName, (sprite) ->
      I.width = sprite.width
      I.height = sprite.height
    )
    
  self = Core(I).extend
    update: ->
      I.age += 1
      
      self.trigger('step')
      
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
        self.bind(eventName, eval( "(function(self) {#{event}})" ))
  
  self.trigger('create') unless I.created
  I.created = true
  
  #TODO: Move this
  $(document).bind 'mousedown', (event) ->    
    if (I.x <= event.offsetX <= I.x + I.width) && 
    (I.y <= event.offsetY <= I.y + I.height)
      self.trigger('click')
  
  self

