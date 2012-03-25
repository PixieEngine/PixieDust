###*
The Cooldown module provides a declarative way to manage cooldowns on
GameObject's properties.

<code><pre>
# Health regeneration
player = GameObject
  health: 50

player.cooldown "health",
  target: 100

player.update()
</pre></code>

<code><pre>
# Shoot Timeout
player = GameObject()

player.cooldown "shootTimer"

player.I.shootTimer = 10 # => Pew! Pew!

player.I.update()

player.I.shootTimer # => 9
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
