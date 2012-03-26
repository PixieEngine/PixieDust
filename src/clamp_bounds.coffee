###*
The ClampBounds module adds a check to make sure
that the including GameObject doesn't move outside
the viewport.

<code><pre>
  # create a player and include ClampBounds
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
ClampBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    width: 32
    height: 32



  self.bind "update", ->
    I.x = I.x.clamp(I.width / 2, App.width - I.width / 2)
    I.y = I.y.clamp(I.height / 2, App.height - I.height / 2)
