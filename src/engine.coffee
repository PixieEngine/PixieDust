( ($) ->
  defaults =
    FPS: 33.3333
    ambientLight: 1
    backgroundColor: "#FFFFFF"
    cameraTransform: Matrix.IDENTITY

  shadowCanvas = $("<canvas width=640 height=480 />").powerCanvas()
  hudCanvas = $("<canvas width=640 height=480 />").powerCanvas()

  hudCanvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace")

  ###*
  The engine holds a bunch of game objects and fires off cool events.
  
  @name Engine
  @constructor
  ###
  window.Engine = (I) ->
    I ||= {}

    $.reverseMerge I, defaults

    intervalId = null
    savedState = null
    age = 0
    paused = false

    queuedObjects = []
    objects = []
  
    update = ->
      objects = objects.select (object) ->
        object.update()
        
      objects = objects.concat(queuedObjects)
      queuedObjects = []
      
      self.trigger "update"
      
    drawDeveloperOverlay = (canvas) ->
      #TODO: Move this into the debug draw method of the objects themselves
      canvas.withTransform I.cameraTransform, (canvas) ->
        objects.each (object) ->
          canvas.fillColor 'rgba(255, 0, 0, 0.5)'
          canvas.fillRect(object.bounds().x, object.bounds().y, object.bounds().width, object.bounds().height)
          
      canvas.fillColor 'rgba(0, 0, 0, 0.5)'
      canvas.fillRect(430, 10, 200, 60)
      canvas.fillColor '#fff'
      canvas.fillText("Developer Mode. Press Esc to resume", 440, 25)
      canvas.fillText("Left click to add boxes", 440, 43)
      canvas.fillText("Right click red boxes to edit properties", 440, 60)

    draw = ->
      if I.ambientLight < 1
        shadowContext = shadowCanvas.context()
        shadowContext.globalCompositeOperation = "source-over"
        shadowCanvas.clear()
        # Fill with shadows
        shadowCanvas.fill("rgba(0, 0, 0, #{1 - I.ambientLight})")
  
        # Etch out the light
        shadowContext.globalCompositeOperation = "destination-out"
        shadowCanvas.withTransform I.cameraTransform, (shadowCanvas) ->
          objects.each (object, i) ->
            if object.illuminate
              shadowContext.globalAlpha = 1
              object.illuminate(shadowCanvas)

      canvas.withTransform I.cameraTransform, (canvas) ->
        if I.backgroundColor
          canvas.fill(I.backgroundColor)

        objects.invoke("draw", canvas, hudCanvas)
           
      if I.ambientLight < 1
        shadows = shadowCanvas.element()
        canvas.drawImage(shadows, 0, 0, shadows.width, shadows.height, 0, 0, shadows.width, shadows.height)

      hud = hudCanvas.element()
      canvas.drawImage hud, 0, 0, hud.width, hud.height, 0, 0, hud.width, hud.height

      drawDeveloperOverlay(canvas) if paused

    step = ->
      unless paused
        update()
        age += 1

      draw()
   
    canvas = I.canvas || $("<canvas />").powerCanvas()
    
    construct = (entityData) ->
      if entityData.class
        entityData.class.constantize()(entityData)
      else
        GameObject(entityData)
  
    self = Core(I).extend
      add: (entityData) ->
        obj = construct entityData
        
        if intervalId && !paused
          queuedObjects.push obj
        else
          objects.push obj
          
      construct: construct
  
      #TODO: This is only used in testing and should be removed when possible
      age: ->
        age
  
      #TODO: This is a bad idea in case access is attempted during update
      objects: ->
        objects
        
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
        objects.each iterator

      find: (selector) ->
        results = []

        matcher = EngineSelector.generate(selector)

        objects.each (object) ->
          results.push object if matcher.match object

        $.extend results, EngineSelector.instanceMethods

      collides: (bounds, sourceObject) ->
        objects.inject false, (collided, object) ->
          collided || (object.solid() && (object != sourceObject) && object.collides(bounds))
          
      rayCollides: (source, direction, sourceObject) ->
        hits = objects.map (object) ->
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
        
      rewind: () ->
        
        
      saveState: () ->
        savedState = objects.map (object) ->
          $.extend({}, object.I)
  
      loadState: (newState) ->
        if newState ||= savedState
          objects = newState.map (objectData) ->
            construct $.extend({}, objectData)
  
      reload: () ->
        objects = objects.map (object) ->
          construct object.I
  
      start: () ->
        unless intervalId
          intervalId = setInterval(() ->
            step()
          , 1000 / I.FPS)
        
      stop: () ->
        clearInterval(intervalId)
        intervalId = null
        
      play: ->
        paused = false
        
      pause: ->
        paused = true
        
      paused: ->
        paused
        
      setFramerate: (newFPS) ->
        I.FPS = newFPS
        self.stop()
        self.start()
    
    self.attrAccessor "ambientLight"
    self.attrAccessor "backgroundColor"
    self.attrAccessor "cameraTransform"
    self.include Bindable
    
    return self
)(jQuery)
