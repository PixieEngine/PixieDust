Hittable = (I, self) ->
  I ||= {}
  
  $.reverseMerge I,
    health: 25
    
  hit: ->
    I.health--
    
    self.destroy() if I.health < 0
    
