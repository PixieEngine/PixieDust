###*
The Follow module provides a simple method to set an object's
velocity so that it will approach another object. This method
relies on the objects having `bounds` methods. GameObject prov

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

# Make an enemy follow the player
enemy.follow(player)

# now the enemy's velocity will point toward the player
enemy.I.velocity
# => Point(-1, 0)

enemy.update()

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
    followSpeed: 1
    velocity: Point(0, 0) 

  follow: (obj) ->
    I.velocity = obj.position().subtract(self.position()).norm().scale(I.followSpeed)
