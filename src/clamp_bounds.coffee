ClampBounds = (I={}) ->
  Object.reverseMerge I,
    color: "blue"
    height: 32
    width: 32
    # spriteName: "block" # Use the name of a sprite in the images folder

  # Inherit from game object
  self = GameObject(I)

  # Add events and methods here
  self.bind "update", ->
    ; # Add update method behavior

  # We must always return self as the last line
  return self


Movable = (I={}, self) ->
  Object.reverseMerge I,
    acceleration: Point(0, 0)
    velocity: Point(0, 0)

  # Force acceleration and velocity to be Points
  # Useful when reloading data from JSON
  I.acceleration = Point(I.acceleration.x, I.acceleration.y)
  I.velocity = Point(I.velocity.x, I.velocity.y)

  self.bind 'update', ->
    I.velocity = I.velocity.add(I.acceleration)

    if I.maxSpeed? 
      currentSpeed = I.velocity.magnitude()
      if currentSpeed > I.maxSpeed
        I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed)

    I.x += I.velocity.x
    I.y += I.velocity.y
