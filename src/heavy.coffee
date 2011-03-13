Heavy = (I) ->
  I ||= {}

  $.reverseMerge I,
    gravity: 0.2
    maxSpeed: 5
    
  before:
    update: ->
      I.velocity = I.velocity.add(Point(0, I.gravity))

