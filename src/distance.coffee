Flickerable = (I={}, self) ->
  originalAlpha = I.alpha

  self.bind 'update', ->
    I.flickerDuration = I.flickerDuration.approach(0, 1)

    if I.flickerDuration > 0
      if I.age.mod(I.flickerFrequency) is 0
        if I.alpha is I.flickerAlpha
          I.alpha = originalAlpha
        else
          I.alpha = I.flickerAlpha
    else
      I.alpha = originalAlpha