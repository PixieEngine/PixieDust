###*
The `Flickerable` module provides a method to flicker a sprite between solid and a given opacity (alpha value). 

    player = GameObject
      x: 40
      y: 60
      alpha: 0.9

    player

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
    
      player.flicker()
      # => This causes the sprite to flicker between full opacity 
      # => and 50% opacity every 3 frames for 30 frames
    
      player.flicker(90, 5, 0.3)
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
