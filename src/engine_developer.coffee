( ($) ->
  ###*
  The <code>Developer</code> module provides a debug overlay and methods for debugging and live coding.

  @name Developer
  @fieldOf Engine
  @module

  @param {Object} I Instance variables
  @param {Object} self Reference to the engine
  ###
  Engine.Developer = (I, self) ->
    screenWidth = App?.width or 480
    screenHeight = App?.height or 320
    margin = 10
    boxWidth = 240
    boxHeight = 60
    textStart = screenWidth - boxWidth + margin
    font = "bold 9pt arial"
    lineHeight = 16

    self.bind "draw", (canvas) ->
      if I.paused
        #TODO: Move this into the debug draw method of the objects themselves
        canvas.withTransform I.cameraTransform, (canvas) ->
          I.objects.each (object) ->
            canvas.fillColor 'rgba(255, 0, 0, 0.5)'
            canvas.fillRect(object.bounds().x, object.bounds().y, object.bounds().width, object.bounds().height)

        #TODO Displaying text shouldn't be such a damn ordeal
        canvas.font(font)
        canvas.fillColor 'rgba(0, 0, 0, 0.5)'
        canvas.fillRect(screenWidth - boxWidth, 0, boxWidth, boxHeight)
        canvas.fillColor '#fff'
        canvas.fillText("Developer Mode. Press Esc to resume", textStart, margin + 5)
        canvas.fillText("Shift+Left click to add boxes", textStart, margin + 5 + lineHeight)
        canvas.fillText("Right click red boxes to edit properties", textStart, margin + 5 + 2 * lineHeight)

    self.bind "init", ->
      window.updateObjectProperties = (newProperties) ->
        if objectToUpdate
          $.extend objectToUpdate, GameObject.construct(newProperties)

      $(document).unbind ".#{namespace}"

      $(document).bind "mousedown.#{namespace}", developerModeMousedown

      for key, fn of developerHotkeys
        do (key, fn) ->
          $(document).bind "keydown.#{namespace}", key, (event) ->
            event.preventDefault()
            fn()

    return {}

  namespace = "engine_developer"
  developerMode = false
  objectToUpdate = null

  developerModeMousedown = (event) ->
    if developerMode
      console.log event.which

      if event.which == 3
        if object = engine.objectAt(event.pageX, event.pageY)
          parent.editProperties(object.I)

          objectToUpdate = object

        console.log object
      else if event.which == 2 || keydown.shift
        window.developerAddObject?(event)

  developerHotkeys =
    esc: ->
      developerMode = !developerMode

      if developerMode
        engine.pause()
      else
        engine.play()
    f3: ->
      Local.set("level", engine.saveState())
    f4: ->
      engine.loadState(Local.get("level"))
    f5: ->
      engine.reload()

)(jQuery)

