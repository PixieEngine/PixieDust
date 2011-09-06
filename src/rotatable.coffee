###*
The Rotatable module rotates the object
based on its rotational velocity.

<code><pre>
   player = GameObject
     x: 0
     y: 0
     rotationalVelocity: Math.PI / 64

   player.include(Rotatable)

   player.I.rotation
=> 0

   player.update()

   player.I.rotation
=> 0.04908738521234052 # Math.PI / 64

   player.update()

   player.I.rotation
=> 0.09817477042468103 # 2 * (Math.PI / 64)
</pre></code>

@name Movable
@module
@constructor

@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Rotatable = (I) ->
  I ||= {}

  Object.reverseMerge I,
    rotation: 0
    rotationalVelocity: 0

  before:
    update: () ->
      I.rotation += I.rotationalVelocity

