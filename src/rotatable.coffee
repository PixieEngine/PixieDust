Rotatable = (I) ->
  I ||= {}
  
  $.reverseMerge I,
    rotation: 0
    rotationalVelocity: 0
    
  before:
    update: () ->
      I.rotation += I.rotationalVelocity

