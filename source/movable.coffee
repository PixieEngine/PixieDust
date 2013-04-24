###*
The Movable module automatically updates the position and velocity of
GameObjects based on the velocity and acceleration. It does not check
collisions so is probably best suited to particle effect like things.

    player = GameObject
      x: 0
      y: 0
      velocity: Point(0, 0)
      acceleration: Point(1, 0)
      maxSpeed: 2

    player.include(Movable)

    # => `velocity is {x: 0, y: 0} and position is {x: 0, y: 0}`

    player.update(1)
    # => `velocity is {x: 1, y: 0} and position is {x: 1, y: 0}`

    player.update(1)
    # => `velocity is {x: 2, y: 0} and position is {x: 3, y: 0}`

    # we've hit our maxSpeed so our velocity won't increase
    player.update(1)
    # => `velocity is {x: 2, y: 0} and position is {x: 5, y: 0}`

@name Movable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Movable = (I={}, self) ->
  Object.reverseMerge I,
    acceleration: Point(0, 0)
    velocity: Point(0, 0)

  # Force acceleration and velocity to be Points
  # Useful when reloading data from JSON
  I.acceleration = Point(I.acceleration.x, I.acceleration.y)
  I.velocity = Point(I.velocity.x, I.velocity.y)

  self.attrReader "velocity", "acceleration"

  # Handle multi-include
  self.unbind ".Movable"

  self.bind 'update.Movable', (dt) ->
    I.velocity = I.velocity.add(I.acceleration.scale(dt))

    if I.maxSpeed?
      currentSpeed = I.velocity.magnitude()
      if currentSpeed > I.maxSpeed
        I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed)

    I.x += I.velocity.x * dt
    I.y += I.velocity.y * dt
