###*
The <code>Tween</code> module provides a method to tween object properties. 

@name Tween
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Tween = (I={}, self) ->
  Object.reverseMerge I,
    activeTweens: {}

  # Inherit from game object
  self = GameObject(I)

  # Add events and methods here
  self.bind "update", ->
    for property, data of I.activeTweens
      I[property] = 10

      
  
