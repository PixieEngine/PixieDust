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

  fadeOut: (duration, callback) ->
    I.fadeDuration = duration || 30
    I.fadeCooldown = duration || 30
    I.fadeCallback = callback
