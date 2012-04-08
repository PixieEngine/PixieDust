###*
The <code>Joysticks</code> module gives the engine access to joysticks.

<code><pre>
# First you need to add the joysticks module to the engine
window.engine = Engine
  ...
  includedModules: ["Joysticks"]
# Then you need to get a controller reference
# id = 0 for player 1, etc.
controller = engine.controller(id)

# Point indicating direction primary axis is held
direction = controller.position()

# Check if buttons are held
controller.actionDown("A")
controller.actionDown("B")
controller.actionDown("X")
controller.actionDown("Y")
</pre></code>

@name Joysticks
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Joysticks = (I, self) ->
  Joysticks.init()

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
