###*
The Rotatable module rotates the object
based on its rotational velocity.

<code><pre>
player = GameObject()

player.update(1)

player.I.age == 1

</pre></code>

@name Ageable
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
