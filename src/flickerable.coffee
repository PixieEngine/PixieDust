###*
The `Flickerable` module provides a method to flicker a sprite between solid and a given opacity (alpha value). 

    player = GameObject
      alpha: 0.9

    player.include 'Flickerable'

    # called with no arguments, flicker will toggle the player's alpha 
    # value between 0.9 (value provided above) and 0.5 (flickerable default) 
    # every 0.1 second, for a total of 2 seconds
    player.flicker()

@name Flickerable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Flickerable = (I={}, self) ->
  Object.reverseMerge I,
    flickerAlpha: 0.5
    flickerDuration: 0
    flickerFrequency: 0.1

  originalAlpha = I.alpha
  frequencyLength = 0

  self.bind 'update', (elapsedTime) ->
    I.flickerDuration = I.flickerDuration.approach(0, elapsedTime)

    frequencyLength += elapsedTime
    
    if I.flickerDuration > 0
      if frequencyLength >= I.flickerFrequency
        frequencyLength = 0
        
        if I.alpha is I.flickerAlpha
          I.alpha = originalAlpha
        else
          I.alpha = I.flickerAlpha
    else
      I.alpha = originalAlpha

  ###*
  A convenient way to set the flicker instance variables on a sprite. You can modify the
  instance variables by hand but the suggested way to do it is through this method.

      player = GameObject()
    
      player.include(Flickerable)
        
      player.flicker
        duration: 5 5, 0.3)
      # => This causes the sprite to flicker between full opacity
      # => and 30% opacity every 5 frames for 90 frames

  @name flicker
  @methodOf Flickerable#
  @param {Number} [duration=30] How long the effect lasts
  @param {Number} [frequency=3] The number of frames in between opacity changes
  @param {Number} [alpha=0.5] The alpha value to flicker to
  ###
  flicker: (options={}) ->
    Object.reverseMerge options, 
      duration: 2
      frequency:0.1
      alpha: 0.5
    
    I.flickerDuration = options.duration
    I.flickerFrequency = options.frequency
    I.flickerAlpha = options.alpha
