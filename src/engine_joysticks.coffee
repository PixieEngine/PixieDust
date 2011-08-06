( ($) ->
  ###*
  The <code>Joysticks</code> module gives the engine access to joysticks.

  @name Joysticks
  @fieldOf Engine
  @module

  @param {Object} I Instance variables
  @param {Object} self Reference to the engine
  ###
  Engine.Joysticks = (I, self) ->
    Joysticks.init()
    log Joysticks.status()

    self.bind "update", ->
      # Handle hotswapping, does nothing if already initialized
      Joysticks.init()

      # Update the joysticks, this also fires joystick events to listeners
      Joysticks.update()

    ###*
    Get a controller for a given joystick id.

    @name controller
    @methodOf Engine.Joysticks#

    @param {Number} i The joystick id to get the controller of.
    ###
    controller: (i) ->
      Joysticks.getController(i)
)()

