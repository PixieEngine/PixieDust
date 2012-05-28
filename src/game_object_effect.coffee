###*
The <code>Fadeable</code> module provides a method to fade a sprite to transparent. 
You may also provide a callback function that is executed when the sprite has finished fading out.

@name Ef
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
GameObject.Effect = (I={}, self) ->

  ###*
  A convenient way to fade out this object over time.

      player = GameObject()

      # Fade the player object out over the next 2 seconds. 
      player.fadeOut 2

      # Fade out and then destroy
      player.fadeOut, 0.25, ->
        self.destroy()

  @name fadeOut
  @methodOf GameObject#
  @param {Number} [duration=1] Time to fade out in seconds
  @param {Function} [complete=null] The function to execute when fade out completes.
  ###
  fadeOut: (duration=1, complete) ->
    self.tween duration,
      alpha: 0
      complete: complete
