###*
The Controllable module adds simple movement
when up, down, left, or right are held.

<code><pre>
  # create a player and include Con
  player = GameObject
    includedModules: ["ClampBounds"]
    width: 5
    height: 17

  # put the player outside the viewport
  player.I.x = -400
  player.I.y = 1000

  # update the player so ClampBounds can set 
  # his position back inside the viewport.
  player.update()

  # x, y position is based on the center point so
  # the position the player is set to is based on
  # half their width and height
  player.I.x
  # => 2.5 # half the player's width

  player.I.y
  # => 311.5 # The default App.height (320) - half the player's height
</pre></code>

@name Cooldown
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
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
