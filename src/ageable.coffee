###*
The Ageable module handles keeping track of an object's age.

    player = GameObject()
    
    player.update(1)
    
    #=> player.I.age == 1   

@name Ageable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Ageable = (I={}, self) ->
  Object.reverseMerge I,
    age: 0

  self.bind 'afterUpdate', (dt) ->
    I.age += dt

  return {}


Bounded module
@name Bounded
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object