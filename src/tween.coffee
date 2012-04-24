###*
The <code>Tween</code> module provides a method to tween objec. 

@name Flickerable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Tween = (I={}, self) ->
  # Set some default properties
  Object.reverseMerge I,
    color: "blue"
    height: 32
    width: 32
    # spriteName: "block" # Use the name of a sprite in the images folder

  # Inherit from game object
  self = GameObject(I)

  # Add events and methods here
  self.bind "update", ->
    ; # Add update method behavior

  # We must always return self as the last line
  return self
