( ($) ->
  defaults =
    FPS: 33.3333
    age: 0
    ambientLight: 1
    backgroundColor: "#FFFFFF"
    cameraTransform: Matrix.IDENTITY
    excludedModules: []
    includedModules: []
    objects: []
    paused: false

  window.Engine = (I) ->
    I ||= {}

    $.reverseMerge I, defaults

    intervalId = null

    queuedObjects = []
  
    update = ->
      I.objects = I.objects.select (object) ->
        object.update()
        
      I.objects = I.objects.concat(queuedObjects)
      queuedObjects = []
      
      self.trigger "update"

    draw = ->
      canvas.withTransform I.cameraTransform, (canvas) ->
        if I.backgroundColor
          canvas.fill(I.backgroundColor)

        I.objects.invoke("draw", canvas)

      self.trigger "draw", canvas

    step = ->
      unless I.paused
        update()
        I.age += 1

      draw()
   
    canvas = I.canvas || $("<canvas />").powerCanvas()
  
    self = Core(I).extend
      add: (entityData) ->
        obj = GameObject.construct entityData
        
        if intervalId && !I.paused
          queuedObjects.push obj
        else
          I.objects.push obj

      #TODO: This is a bad idea in case access is attempted during update
      objects: ->
        I.objects
        
      objectAt: (x, y) ->
        targetObject = null
        bounds =
          x: x
          y: y
          width: 1
          height: 1

        self.eachObject (object) ->
          targetObject = object if object.collides(bounds)

        return targetObject
        
      eachObject: (iterator) ->
        I.objects.each iterator

      find: (selector) ->
        results = []

        matcher = EngineSelector.generate(selector)

        I.objects.each (object) ->
          results.push object if matcher.match object

        $.extend results, EngineSelector.instanceMethods

      collides: (bounds, sourceObject) ->
        I.objects.inject false, (collided, object) ->
          collided || (object.solid() && (object != sourceObject) && object.collides(bounds))
          
      rayCollides: (source, direction, sourceObject) ->
        hits = I.objects.map (object) ->
          hit = object.solid() && (object != sourceObject) && Collision.rayRectangle(source, direction, object.centeredBounds())
          hit.object = object if hit
          
          hit
          
        nearestDistance = Infinity
        nearestHit = null
    
        hits.each (hit) ->
          if hit && (d = hit.distance(source)) < nearestDistance
            nearestDistance = d
            nearestHit = hit
            
        nearestHit
  
      start: () ->
        unless intervalId
          intervalId = setInterval(() ->
            step()
          , 1000 / I.FPS)
        
      stop: () ->
        clearInterval(intervalId)
        intervalId = null
        
      play: ->
        I.paused = false
        
      pause: ->
        I.paused = true
        
      paused: ->
        I.paused
        
      setFramerate: (newFPS) ->
        I.FPS = newFPS
        self.stop()
        self.start()
    
    self.attrAccessor "ambientLight"
    self.attrAccessor "backgroundColor"
    self.attrAccessor "cameraTransform"
    self.include Bindable

    defaultModules = ["Shadows", "HUD", "Developer", "SaveState"]
    modules = defaultModules.concat(I.includedModules)
    modules = modules.without(I.excludedModules)

    modules.each (moduleName) ->
      self.include Engine[moduleName]

    return self
)(jQuery)

