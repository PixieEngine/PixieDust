###*
The Controllable module adds simple movement
when up, down, left, or right are held.

<code><pre>
  # create a player and include Controllable
  player = GameObject
    includedModules: ["Controllable"]
    width: 5
    height: 17
    x: 15
    y: 30
  s

  # hold the left arrow key, then
  # update the player
  player.update()

  # 
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
