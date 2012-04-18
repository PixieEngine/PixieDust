###*
The <code>Flickerable</code> module provides a method to flicker a sprite between solid and 50% opacity. 

@name Flickerable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Flickerable = (I, self) ->
  Object.reverseMerge I,
    flickerAlpha: 0.5
    flickerDuration: 0
    flickerFrequency: 3

  originalAlpha = I.alpha

  self.bind 'update', ->
    I.flickerDuration = I.flickerDuration.approach(0, 1)

    if I.flickerDuration && (I.age / I.flickerFrequency).floor() % 2
      I.alpha = I.flickerAlpha
    else
      I.alpha = originalAlpha

  ###*
  A convenient way to set the flicker instance variables on a sprite. You can modify the
  instance variables by hand but the suggested way to do it is through this method.

  <code><pre>
  player = GameObject()

  player.include(Flickerable)

  player.flicker()
  # => This causes the sprite to flicker between full opacity 
  # => and 50% opacity every 3 frames for 30 frames

  player.flicker(90, 5, 0.3)
  # => This causes the sprite to flicker between full opacity
  # => and 30% opacity every 5 frames for 90 frames
  </pre></code>

  @name flicker
  @methodOf Flickerable#
  @param {Number} [duration=30] How long the effect lasts
  @param {Number} [frequency=3] The number of frames in between opacity changes
  @param {Number} [alpha=0.5] The alpha value to flicker to
  ###
  flicker: (duration = 30, frequency = 3, alpha = 0.5) ->
    I.flickerDuration = duration
    I.flickerFrequency = frequency
    I.flickerAlpha = alpha

