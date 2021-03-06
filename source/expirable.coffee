###*
The Expirable module deactivates a <code>GameObject</code> after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

This module is included by default in <code>GameObjects</code>

    enemy = GameObject
      x: 50
      y: 30
      duration: 5
    
    enemy.include Expirable
    
    enemy.I.active
    # => true
    
    5.times ->
      enemy.update(1)
    
    enemy.I.active
    # => false

@name Expirable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Expirable = (I={}, self) ->
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
      
    I.alpha = I.alpha.clamp(0, 1)

  return {}
