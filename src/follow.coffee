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
enemy.I.velocity = enemy.I.direction.scale(I.speed)

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

  ###*
  Set your direction to face another object.

  <code><pre>
  enemy.follow(player)

  # => The enemy now has it's direction attribute set to face
  # the player object. From here you can use the direction and
  # calculate a velocity.

  enemy.I.velocity = enemy.I.direction.scale(4)
  # now the enemy has a velocity, pointing toward player, 
  # with 4 times the magnitude of its direction
  
  </pre></code>

  @name follow
  @methodOf Follow#
  @param {GameObject} obj The object you want to follow
  ###    
  follow: (obj) ->
    I.direction = obj.position().subtract(self.position()).norm()
