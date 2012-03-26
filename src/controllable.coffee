Controllable = (I={}) ->
  Object.reverseMerge I,
    speed: 1

  self.bind "update", ->
    ; # Add update method behavior

  # We must always return self as the last line
  return self


  self.bind "update", ->
    # Handle player movement in response to arrow keys
    if keydown.left
      I.x -= I.speed

    if keydown.right
      I.x += I.speed

    if keydown.up
      I.y -= I.speed

    if keydown.down
      I.y += I.speed

    # Clamp the player's position to be within the screen
    I.x = I.x.clamp(I.width/2, App.width - I.width/2)
    I.y = I.y.clamp(I.height/2, App.height - I.height/2)

  # We must return a reference to self from the constructor
  return self