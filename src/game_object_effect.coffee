GameObject.Effect = (I={}, self) ->
  
  ###*
  A convenient way to set the fade instance variables on a sprite. You can modify the
  instance variables by hand but the suggested way to do it is through this method.

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

  @name fadeOut
  @methodOf Fadeable#
  @param {Number} [duration=30] How long the effect lasts
  @param {Function} [callback=null] The function to execute when the sprite has finished fading.
  ###
  fadeOut: (duration, callback) ->
    
