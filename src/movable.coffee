Movable = (I) ->
  $.reverseMerge I,
    acceleration: Point(0, 0)
    velocity: Point(0, 0)

  # Force acceleration and velocity to be Points
  # Useful when reloading data from JSON
  I.acceleration = Point(I.acceleration.x, I.acceleration.y)
  I.velocity = Point(I.acceleration.x, I.acceleration.y)

  before:
    update: () ->
      I.velocity = I.velocity.add(I.acceleration)

      if I.maxSpeed? 
        currentSpeed = I.velocity.magnitude()
        if currentSpeed > I.maxSpeed
          I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed)
      
      I.x += I.velocity.x
      I.y += I.velocity.y

