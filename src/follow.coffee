###*
The Follow module provides a simple method to set an object's
direction so that it is pointed at another object.

The calculated direction is based on the center point of 
each object.

This method relies on both objects having <code>position</code> methods. 

Include this module by calling <code>self.include Follow</code>

<code><pre>
player = GameObject
  x: 50
  y: 50
  width: 10
  height: 10

enemy = GameObject
  x: 100
  y: 50
  width: 10
  height: 10
  velocity: Point(0, 0)

enemy.include Follow

# Make an enemy follow the player
enemy.follow(player)

# now the enemy's direction will point toward the player
enemy.I.direction
# => Point(-1, 0)

# you can use this direction to set a velocity for your object.
enemy.I.velocity = enemy.I.directio

enemy.I.x
# => 99
</pre></code>

@name Follow
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Follow = (I={}, self) ->
  Object.reverseMerge I,
    direction: Point(0, 0) 

  follow: (obj) ->
    I.direction = obj.position().subtract(self.position()).norm()
