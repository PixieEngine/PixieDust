module "Movable"

test "should update velocity", ->
  particle = GameObject
    velocity: Point(1, 2)
    x: 50
    y: 50

  particle.update(1)

  equals particle.I.x, 51, "x position updated according to velocity"
  equals particle.I.y, 52, "y position updated according to velocity"

test "should not exceed max speed", ->
  particle = GameObject
    velocity: Point(5, 5)
    acceleration: Point(1, 1)
    maxSpeed: 10

  20.times ->
    particle.update(1)

  ok particle.I.velocity.magnitude() <= particle.I.maxSpeed, "magnitude of the velocity should not exceed maxSpeed"

test "should be able to get velocity", ->
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


# TODO fix me
#test "should increase velocity according to acceleration", ->
#  particle = GameObject
#    velocity: Point(7, 4)
#    acceleration: Point(1, -0.3)
#
#  4.times ->
#    particle.update()
#
#  equals particle.I.velocity.x, 11
#  equals particle.I.velocity.y, 2.8

module()