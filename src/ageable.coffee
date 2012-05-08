###*
The Rotatable module rotates the object
based on its rotational velocity.

<code><pre>
player = GameObject
  x: 0
  y: 0
  rotationalVelocity: Math.PI / 64

player.I.rotation
# => 0

player.update(1)

player.I.rotation
# => 0.04908738521234052 # Math.PI / 64

player.update(1)

player.I.rotation
# => 0.09817477042468103 # 2 * (Math.PI / 64)
</pre></code>

@name Rotatable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Ageable = (I={}, self) ->
  Object.reverseMerge I,
    age: 0

  self.bind 'update', (dt) ->
    I.age += dt

  return {}
