( ($) ->
  defaults =
    FPS: 33.3333
    age: 0
    ambientLight: 1
    backgroundColor: "#FFFFFF"
    cameraTransform: Matrix.IDENTITY
    excludedModules: []
    includedModules: []
    paused: false

  window.Engine = (I) ->
    I ||= {}

    $.reverseMerge I, {
      objects: []
    }, defaults

    intervalId = null
    frameAdvance = false

    queuedObjects = []

    update = ->
      [I.objects, toRemove] = I.objects.partition (object) ->
        object.update()

      toRemove.invoke "trigger", "remove"

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
      if !I.paused || frameAdvance
        update()
        I.age += 1

      draw()

    canvas = I.canvas || $("<canvas />").powerCanvas()

    self = Core(I).extend
      add: (entityData) ->
        self.trigger "beforeAdd", entityData

        obj = GameObject.construct entityData

        self.trigger "afterAdd", obj

        if intervalId && !I.paused
          queuedObjects.push obj
        else
          I.objects.push obj

        return obj

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

      start: () ->
        unless intervalId
          intervalId = setInterval(() ->
            step()
          , 1000 / I.FPS)

      stop: ->
        clearInterval(intervalId)
        intervalId = null

      frameAdvance: ->
        I.paused = true
        frameAdvance = true
        step()
        frameAdvance = false

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

    defaultModules = ["Shadows", "HUD", "Developer", "SaveState", "Selector", "Collision"]
    modules = defaultModules.concat(I.includedModules)
    modules = modules.without(I.excludedModules)

    modules.each (moduleName) ->
      self.include Engine[moduleName]

    return self
)(jQuery)

