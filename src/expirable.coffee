Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1
    alpha: 1
    
  startingAlpha = I.alpha

  self.bind "update", ->
    if I.fadeOut
      I.alpha = 
      
    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}
