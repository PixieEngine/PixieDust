Follow = (I={}) ->
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
