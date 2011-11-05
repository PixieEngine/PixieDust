###*
The <code>Fadeable</code> module provides a method to fade a sprite to transparent. 
You may also provide a callback function that is executed when the sprite has finished fading out.

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

@name Movable
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

  fadeOut: (duration = 30, callback) ->
    I.fadeDuration = duration
    I.fadeCooldown = duration
    I.fadeCallback = callback
