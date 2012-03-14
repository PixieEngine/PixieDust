###*
The Movable module automatically updates the position and velocity of
GameObjects based on the velocity and acceleration. It does not check
collisions so is probably best suited to particle effect like things.

<code><pre>
player = GameObject
  x: 0
  y: 0
  velocity: Point(0, 0)
  acceleration: Point(1, 0)
  maxSpeed: 2

player.include(Movable)

# => `velocity is {x: 0, y: 0} and position is {x: 0, y: 0}`

player.update()
# => `velocity is {x: 1, y: 0} and position is {x: 1, y: 0}` 

player.update()
# => `velocity is {x: 2, y: 0} and position is {x: 3, y: 0}`   

# we've hit our maxSpeed so our velocity won't increase
player.update()
# => `velocity is {x: 2, y: 0} and position is {x: 5, y: 0}`
</pre></code>

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

  self.bind 'update', ->
    I.velocity = I.velocity.add(I.acceleration)

    if I.maxSpeed? 
      currentSpeed = I.velocity.magnitude()
      if currentSpeed > I.maxSpeed
        I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed)

    I.x += I.velocity.x
    I.y += I.velocity.y

