###*
The <code>Fade</code> module provides convenience methods for accessing common Engine.Flash presets.

@name Fade
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
@see Engine.Flash
###
Engine.Fade = (I, self) ->      
  ###*
  A convenient way to set the flash effect instance variables. This provides a shorthand for fading the screen in 
  from a given color over a specified duration.

  <code><pre>
  engine.fadeIn()
  # => Sets the effect variables to their default state. This will the screen to fade to black over the next 30 frames.

  engine.fadeIn('blue', 50)
  # => This effect will start off blue and fade to transparent over 50 frames.
  </pre></code>  

  @name fadeIn
  @methodOf Engine#
  @param {Number} [duration=30] How long the effect lasts
  @param {Color} [color="black"] The color to fade from
  ###
  fadeIn: (duration = 30, color = 'black') ->
    I.flashColor = Color(color) 
    I.flashCooldown = (duration)
    I.flashDuration = (duration)
    I.flashTargetAlpha = 0

  ###*
  A convenient way to set the flash effect instance variables. This provides a shorthand for fading 
  the screen to a given color over a specified duration.

  <code><pre>
  engine.fadeOut()
  # => Sets the effect variables to their default state. This will the screen to fade from black to transparent over the next 30 frames.

  engine.fadeOut('blue', 50)
  # => This effect will start off transparent and change to blue over 50 frames.
  </pre></code>  

  @name fadeOut
  @methodOf Engine#
  @param {Number} [duration=30] How long the effect lasts
  @param {Color} [color="black"] The color to fade to
  ###
  fadeOut: (duration = 30, color = 'transparent') ->
    I.flashColor = Color(color)
    I.flashCooldown = (duration)
    I.flashDuration = (duration)
    I.flashTargetAlpha = 1
