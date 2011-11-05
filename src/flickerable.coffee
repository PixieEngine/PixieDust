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

  before:
    draw: (canvas) ->
      I.flickerDuration = I.flickerDuration.approach(0, 1)

      if (I.age % I.flickerFrequency == 0) && I.flickerDuration > 0
        I.alpha = I.flickerAlpha

  after:
    draw: (canvas) ->
      I.alpha = originalAlpha

  flicker: (duration = 30, frequency = 3, alpha = 0.5) ->
    I.flickerDuration = duration
    I.flickerFrequency = frequency
    I.flickerAlpha = alpha
