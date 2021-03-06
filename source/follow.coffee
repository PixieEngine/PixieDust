###*
The Follow module provides a simple method to set an object's
direction so that it is pointed at another object.

The calculated direction is based on the center point of 
each object.

This method relies on both objects having <code>position</code> methods. 

Include this module by calling <code>self.include Follow</code>

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
      speed: 2
    
    enemy.include Follow
    
    # Make an enemy follow the player
    enemy.follow(player)
    
    # now the enemy's direction will point toward the player
    enemy.I.direction
    # => Point(-1, 0)
    
    # you can use this direction to set a velocity for your object.
    enemy.I.velocity = enemy.I.direction.scale(I.speed)
    

@name Follow
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Follow = (I={}, self) ->
  Object.reverseMerge I,
    velocity: Point(0, 0)
    speed: 1

  ###*
  Set your velocity to follow another object.

      enemy.follow(player)
    
      # => The enemy now has it's velocity attribute set in
      # the direction of the player, with magnitude equal to
      # the enemy's speed

  @name follow
  @methodOf Follow#
  @param {GameObject} obj The object you want to follow
  ###    
  follow: (obj) ->
    if obj
      I.velocity = obj.position().subtract(self.position()).norm(I.speed)
