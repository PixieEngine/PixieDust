Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1
    alpha: 1
    fadeOut: false
    
  startingAlpha = I.alpha

  self.bind "update", ->
    if I.fadeOut
      log I.age
      log I.duration
      I.alpha = 1 - (I.age + 1 / I.duration)  
      
    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}