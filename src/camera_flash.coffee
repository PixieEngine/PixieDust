###*
The <code>Flash</code> module allows you to flash a color onscreen and then fade to transparent over a time period. 
This is nice for lightning type effects or to accentuate major game events.

@name Flash
@fieldOf Camera
@module
@param {Object} I Instance variables
@param {Object} self Reference to the camera
###
Camera.Flash = (I, self) ->
  Object.reverseMerge I,
    flashColor: Color(0, 0, 0, 0)
    flashDuration: 12
    flashCooldown: 0
    flashTargetAlpha: 0

  defaultParams =
    color: 'white'
    duration: 12
    targetAlpha: 0

  self.bind 'afterUpdate', ->
    if I.flashCooldown > 0
      I.flashColor.a = I.flashColor.a.approach(I.flashTargetAlpha, 1 / I.flashDuration).clamp(0, 1)      
      I.flashColor.a = 0 if I.flashColor.a < 0.00001
      I.flashColor.a = 1 if I.flashColor.a > 0.9999

      I.flashCooldown = I.flashCooldown.approach(0, 1)

  self.bind 'flash', (canvas) ->
    canvas.fill I.flashColor      

  ###*
  A convenient way to set the flash effect instance variables. Alternatively, you can modify them by hand, but
  using Camera#flash is the suggested approach.

  <code><pre>
  camera.flash()
  # => Sets the flash effect variables to their default state. This will cause a white flash that will turn transparent in the next 12 frames.

  camera.flash
    color: 'green'
    duration: 30
  # => This flash effect will start off green and fade to transparent over 30 frames.

  camera.flash
    color: Color(255, 0, 0, 0)
    duration: 20
    targetAlpha: 1
  # => This flash effect will start off transparent and move toward red over 20 frames 
  </pre></code>  

  @name flash
  @methodOf Camera#
  @param {Color} [color="white"] The flash color
  @param {Number} [duration=12] How long the effect lasts
  @param {Number} [targetAlpha=0] The alpha value to fade to. By default, this is set to 0, which fades the color to transparent.
  ###
  flash: (options={}) ->
    Object.reverseMerge(options, defaultParams)

    {color, duration, targetAlpha} = options

    I.flashColor = Color(color) 
    I.flashTargetAlpha = targetAlpha
    I.flashCooldown = duration
    I.flashDuration = duration

    self

