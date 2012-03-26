Controllable = (I={}, self) ->
  Object.reverseMerge I,
    speed: 1

  self.bind "update", ->
    if keydown.left
      I.x -= I.speed

    if keydown.right
      I.x += I.speed

    if keydown.up
      I.y -= I.speed

    if keydown.down
      I.y += I.speed
