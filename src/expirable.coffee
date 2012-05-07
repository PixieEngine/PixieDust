Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1
    alpha: 1
    fadeOut: false
    
  startingAlpha = I.alpha

  self.bind "update", ->
    log I.age
    log I.duration
    if I.fadeOut
      I.alpha = (startingAlpha * (1 - (I.age / I.duration))).clamp(0, 1)      
      
    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}
