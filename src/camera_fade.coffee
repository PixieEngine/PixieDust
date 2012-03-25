###*
The <code>Fade</code> module provides convenience methods for accessing common Engine.Flash presets.

@name Fade
@fieldOf Camera
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
@see Camera.Flash
###
Camera.Fade = (I, self) ->  
  fadeInDefaults =
    color: 'black'
    duration: 30

  fadeOutDefaults =
    alpha: 1
    color: 'transparent'
    duration: 30

  configureFade = (duration, color, alpha) ->
    I.flashDuration = duration
    I.flashCooldown = duration
    I.flashColor = Color(color)
    I.flashTargetAlpha = alpha

  ###*
  A convenient way to set the flash effect instance variables. This provides a shorthand for fading the screen in 
  from a given color over a specified duration.

  <code><pre>
  engine.fadeIn()
  # => Sets the effect variables to their default state. This will the screen to go from black to transparent over the next 30 frames.

  engine.fadeIn('blue', 50)
  # => This effect will start off blue and fade to transparent over 50 frames.
  </pre></code>  

  @name fadeIn
  @methodOf Camera#
  @param {Number} [duration=30] How long the effect lasts
  @param {Color} [color="black"] The color to fade from
  ###
  fadeIn: (options={}) ->
    {alpha, color, duration} = Object.reverseMerge(options, fadeInDefaults)

    configureFade(duration, color, alpha)

  ###*
  A convenient way to set the flash effect instance variables. This provides a shorthand for fading 
  the screen to a given color over a specified duration.

  <code><pre>
  camera.fadeOut()
  # => Sets the effect variables to their default state. This will the screen to fade from ransparent to black over the next 30 frames.

  camera.fadeOut('blue', 50)
  # => This effect will start off transparent and change to blue over 50 frames.
  </pre></code>  

  @name fadeOut
  @methodOf Camera#
  @param {Number} [duration=30] How long the effect lasts
  @param {Color} [color="transparent"] The color to fade to
  ###
  fadeOut: (duration = 30, color = 'transparent') ->
    configureFade(duration, color, 1)

