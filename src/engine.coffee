( ->
  defaults =
    FPS: 30
    age: 0
    ambientLight: 1
    backgroundColor: "#00010D"
    cameraTransform: Matrix.IDENTITY
    clear: false
    excludedModules: []
    includedModules: []
    paused: false
    showFPS: false
    zSort: false

  ###*
  The Engine controls the game world and manages game state. Once you 
  set it up and let it run it pretty much takes care of itself.

  You can use the engine to add or remove objects from the game world.

  There are several modules that can include to add additional capabilities 
  to the engine.

  The engine fires events that you  may bind listeners to. Event listeners 
  may be bound with <code>engine.bind(eventName, callback)</code>

  @name Engine
  @constructor
  @param I
  ###

  ###*
  Observe or modify the 
  entity data before it is added to the engine.
  @name beforeAdd
  @methodOf Engine#
  @event

  @param {Object} entityData
  ###

  ###*
  Observe or configure a <code>gameObject</code> that has been added 
  to the engine.
  @name afterAdd
  @methodOf Engine#
  @event

  @param {GameObject} object The object that has just been added to the
  engine.
  ###

  ###*
  Called when the engine updates all the game objects.

  @name update
  @methodOf Engine#
  @event
  ###

  ###*
  Called after the engine completes an update. Here it is 
  safe to modify the game objects array.

  @name afterUpdate
  @methodOf Engine#
  @event
  ###

  ###*
  Called before the engine draws the game objects on the canvas.

  The current camera transform <b>is</b> applied.

  @name beforeDraw
  @methodOf Engine#
  @event
  ###

  ###*
  Called after the engine draws on the canvas.

  The current camera transform <b>is not</b> applied, you may
  choose to apply it yourself using <code>I.cameraTransform</code>.

  @name draw
  @methodOf Engine#
  @event
  ###

  Engine = (I) ->
    I ||= {}

    Object.reverseMerge I, {
      objects: []
    }, defaults

    frameAdvance = false

    queuedObjects = []

    running = false
    startTime = +new Date()
    lastStepTime = -Infinity
    animLoop = (timestamp) ->
      timestamp ||= +new Date()
      msPerFrame = (1000 / I.FPS)

      delta = timestamp - lastStepTime
      remainder = delta - msPerFrame

      if remainder > 0
        lastStepTime = timestamp - Math.min(remainder, msPerFrame)
        step()

      if running
        window.requestAnimationFrame(animLoop)

    update = ->
      window.updateKeys()

      self.trigger "update"

      [I.objects, toRemove] = I.objects.partition (object) ->
        object.update()

      toRemove.invoke "trigger", "remove"

      I.objects = I.objects.concat(queuedObjects)
      queuedObjects = []

      self.trigger "afterUpdate"

    draw = ->
      I.canvas.withTransform I.cameraTransform, (canvas) ->
        if I.clear
          canvas.clear()
        else if I.backgroundColor
          canvas.fill(I.backgroundColor)

        self.trigger "beforeDraw", canvas

        if I.zSort
          drawObjects = I.objects.copy().sort (a, b) ->
            a.I.zIndex - b.I.zIndex
        else
          drawObjects = I.objects

        drawObjects.invoke("draw", canvas)

      self.trigger "draw", I.canvas

    step = ->
      if !I.paused || frameAdvance
        update()
        I.age += 1

      draw()

    self = Core(I).extend {
      ###*
      The add method creates and adds an object to the game world.

      Events triggered:
      <code>beforeAdd(entityData)</code>
      <code>afterAdd(gameObject)</code>

      @name add
      @methodOf Engine#
      @param entityData The data used to create the game object.
      @type GameObject
      ###
      add: (entityData) ->
        self.trigger "beforeAdd", entityData

        obj = GameObject.construct entityData

        self.trigger "afterAdd", obj

        if running && !I.paused
          queuedObjects.push obj
        else
          I.objects.push obj

        return obj

      ###*
      Returns a reference to the canvas.

      @name canvas
      @methodOf Engine#
      ###
      canvas: ->
        canvas

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

      ###*
      Start the game simulation.
      @methodOf Engine#
      @name start
      ###
      start: () ->
        unless running
          running = true
          window.requestAnimationFrame(animLoop)

      ###*
      Stop the simulation.
      @methodOf Engine#
      @name stop
      ###
      stop: ->
        running = false

      frameAdvance: ->
        I.paused = true
        frameAdvance = true
        step()
        frameAdvance = false

      play: ->
        I.paused = false

      ###*
      Pause the simulation
      @methodOf Engine#
      @name pause
      ###
      pause: ->
        I.paused = true

      paused: ->
        I.paused

      setFramerate: (newFPS) ->
        I.FPS = newFPS
        self.stop()
        self.start()
    }

    self.attrAccessor "ambientLight", "backgroundColor", "cameraTransform", "clear"
    self.include Bindable

    defaultModules = ["Shadows", "HUD", "Developer", "SaveState", "Selector", "Collision", "Tilemap", "FPSCounter"]
    modules = defaultModules.concat(I.includedModules)
    modules = modules.without([].concat(I.excludedModules))

    modules.each (moduleName) ->
      throw "#Engine.#{moduleName} is not a valid engine module" unless Engine[moduleName]

      self.include Engine[moduleName]

    self.trigger "init"

    return self

  (exports ? this)["Engine"] = Engine
)(jQuery)
