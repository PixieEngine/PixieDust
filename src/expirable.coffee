###*
The Expirable module deactivates a <code>GameObject</code> after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

This module is included by default in <code>GameObjects</code>

<code><pre>
enemy = GameObject
  x: 50
  y: 30
  duration: 5

enemy.include Expirable

enemy.I.active
# => true

5.times ->
  enemy.update()

enemy.I.active
# => false
</pre></code>

@name Expirable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1
    alpha: 1
    fadeOut: false

  startingAlpha = I.alpha

  self.bind "update", (dt) ->
    if I.fadeOut
      I.alpha = startingAlpha * (1 - (I.age / I.duration))

    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}
