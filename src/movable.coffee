Movable = (I) ->
  $.reverseMerge I,
    acceleration: Point(0, 0)
    velocity: Point(0, 0)

  before:
    update: () ->
      I.velocity = I.velocity.add(I.acceleration)

      if I.maxSpeed? 
        currentSpeed = I.velocity.magnitude()
        if currentSpeed > I.maxSpeed
          I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed)
      
      I.x += I.velocity.x
      I.y += I.velocity.y

