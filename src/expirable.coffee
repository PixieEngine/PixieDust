Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1
    alpha: 1
    fadeOut: false
    
  startingAlpha = I.alpha

  self.bind "update", ->
    if I.fadeOut
      
      I.alpha = 1 - ((I.age + 1) / I.duration)  
      
    if I.duration != -1 && I.age + 1 >= I.duration
      I.active = false

  return {}
