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
