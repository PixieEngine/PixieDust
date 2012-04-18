###*
The Controllable module adds simple movement
when up, down, left, or right are held.

<code><pre>
  # create a player and include Controllable
  player = GameObject
    width: 5
    height: 17
    x: 15
    y: 30
    speed:  2

  player.include Controllable

  # hold the left arrow key, then
  # update the player
  player.update()

  # the player is moved left according to his speed
  player.I.x
  # => 13

  # We keep track of the direction the object is
  # facing in case you need that (eg. for attack direction)
  player.I.facing
  #
</pre></code>

@name Controllable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Controllable = (I={}, self) ->
  Object.reverseMerge I,
    facing: Point(1, 0)
    speed: 1
    velocity: Point(0, 0)

  self.bind "update", ->
    self.movement()

  movement: ->
    I.velocity.x = 0
    I.velocity.y = 0

    if keydown.left
      I.velocity.x = -1

    if keydown.right
      I.velocity.x = 1

    if keydown.up
      I.velocity.y = -1

    if keydown.down
      I.velocity.y = 1

    I.velocity = I.velocity.norm()

    unless I.velocity.equal(Point.ZERO)
      I.facing = I.velocity    
    
    I.velocity = I.velocity.scale(I.speed)
    