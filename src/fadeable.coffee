###*
The <code>Fadeable</code> module provides a method to fade a sprite to transparent. 
You may also provide a callback function that is executed when the sprite has finished fading out.

@name Fadeable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Fadeable = (I, self) ->
  Object.reverseMerge I,
    fadeDuration: 30
    fadeCooldown: null
    fadeCallback: null

  self.bind "update", ->
    if I.fadeCooldown?
      I.fadeCooldown = I.fadeCooldown.approach(0, 1)
      I.alpha = I.fadeCooldown / I.fadeDuration

    if I.fadeCooldown == 0
      I.fadeCooldown = null
      I.fadeCallback?(self)

  ###*
  A convenient way to set the fade instance variables on a sprite. You can modify the
  instance variables by hand but the suggested way to do it is through this method.

  <code><pre>
  player = GameObject()

  player.include(Fadeable)

  fadedOut = false

  # this will fade the player object out over the next 30 frames. 
  # once the player is faded out the fadedOut variable will be set to true.
  player.fadeOut 30, (player) ->
    fadedOut = true

  30.times ->
    player.update()

  fadedOut
  # => true
  </pre></code>

  @name fadeOut
  @methodOf GameObject#
  @param {Number} [duration=30] How long the effect lasts
  @param {Function} [callback=null] The function to execute when the sprite has finished fading.
  ###
  fadeOut: (duration = 30, callback) ->
    I.fadeDuration = duration
    I.fadeCooldown = duration
    I.fadeCallback = callback

