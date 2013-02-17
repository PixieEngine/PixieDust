###*
The Rotatable module rotates the object
based on its rotational velocity.

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

@name Rotatable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
window.Rotatable = (I={}, self) ->
  Object.reverseMerge I,
    rotation: 0
    rotationalVelocity: 0

  self.bind 'update', (dt) ->
    I.rotation += I.rotationalVelocity * dt

  return {}

