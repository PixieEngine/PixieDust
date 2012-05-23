( ->
  defaults =
    FPS: 30
    age: 0
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
  @param {Object} I Instance variables of the engine 
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
  @param {Number} elapsedTime The time in seconds that has elapsed since the last update.
  ###

  ###*
  Called after the engine completes an update. Here it is 
  safe to modify the game objects array.

  @name afterUpdate
  @methodOf Engine#
  @event
  ###

  ###*
  Called before the engine draws the game objects on the canvas. The current camera transform is applied.

  @name beforeDraw
  @methodOf Engine#
  @event
  @params {PixieCanvas} canvas A reference to the canvas to draw on.
  ###

  ###*
  Called after the engine draws on the canvas. The current camera transform is applied.

      engine.bind "draw", (canvas) ->
        # print some directions for the player
        canvas.drawText
          text: "Go this way =>"
          x: 200
          y: 200 

  @name draw
  @methodOf Engine#
  @event
  @params {PixieCanvas} canvas A reference to the canvas to draw on.
  ###

  ###*
  Called after the engine draws.

  The current camera transform is not applied. This is great for
  adding overlays.

      engine.bind "overlay", (canvas) ->
        # print the player's health. This will be
        # positioned absolutely according to the viewport.
        canvas.drawText
          text: "HEALTH:"
          position: Point(20, 20)
    
        canvas.drawText
          text: player.health()
          position: Point(50, 20)

  @name overlay
  @methodOf Engine#
  @event
  @params {PixieCanvas} canvas A reference to the canvas to draw on. 
  ###

  Engine = (I={}) ->
    Object.reverseMerge I, defaults

    frameAdvance = false

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

    update = (elapsedTime) ->
      self.trigger "beforeUpdate", elapsedTime
      self.trigger "update", elapsedTime
      self.trigger "afterUpdate", elapsedTime

    draw = ->
      return unless canvas = I.canvas

      self.trigger "beforeDraw", canvas
      self.trigger "draw", canvas
      self.trigger "overlay", I.canvas

    step = ->
      if !I.paused || frameAdvance
        secondsPerFrame = (1 / I.FPS)
        update(secondsPerFrame)
        I.age += 1

      draw()

    self = Core(I).extend {
      ###*
      Start the game simulation.

          engine.start()

      @methodOf Engine#
      @name start
      ###
      start: ->
        unless running
          running = true
          window.requestAnimationFrame(animLoop)

      ###*
      Stop the simulation.

          engine.stop()

      @methodOf Engine#
      @name stop
      ###
      stop: ->
        running = false

      ###*
      Pause the game and step through 1 update of the engine.

          engine.frameAdvance()

      @methodOf Engine#
      @name frameAdvance
      ###
      frameAdvance: ->
        I.paused = true
        frameAdvance = true
        step()
        frameAdvance = false

      ###*
      Resume the game.

          engine.play()

      @methodOf Engine#
      @name play
      ###
      play: ->
        I.paused = false

      ###*
      Toggle the paused state of the simulation.

          engine.pause()

      @methodOf Engine#
      @name pause
      @param {Boolean} [setTo] Force to pause by passing true or unpause by passing false.
      ###
      pause: (setTo) ->
        if setTo?
          I.paused = setTo
        else
          I.paused = !I.paused

      ###*
      Query the engine to see if it is paused.

          engine.pause()
    
          engine.paused()
          # true
    
          engine.play()
    
          engine.paused()
          # false

      @methodOf Engine#
      @name paused
      ###
      paused: ->
        I.paused

      ###*
      Change the framerate of the game. The default framerate is 30 fps.

          engine.setFramerate(60)

      @methodOf Engine#
      @name setFramerate
      ###
      setFramerate: (newFPS) ->
        I.FPS = newFPS
        self.stop()
        self.start()

      update: update
      draw: draw
    }

    self.include Bindable

    modules = Engine.defaultModules.concat(I.includedModules)
    modules = modules.without([].concat(I.excludedModules))

    Engine.defaultModules.each (moduleName) ->
      moduleName = "#{}"
      throw "#Engine.#{moduleName} is not a valid engine module" unless Engine[moduleName]

      self.include Engine[moduleName]

    self.trigger "init"

    return self

  Engine.defaultModules = [
    "Data"
    "Keyboard"
    "Mouse"
    "Background"
    "Delay"
    "GameState"
    "Selector"
    "Collision"
    "Tilemap"
    "Levels"
  ]

  (exports ? this)["Engine"] = Engine
)()
