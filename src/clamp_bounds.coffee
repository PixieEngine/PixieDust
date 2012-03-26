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
  player.update()
</pre></code>

<code><pre>
# Shoot Timeout
player = GameObject()

player.cooldown "shootTimer"

player.I.shootTimer = 10 # => Pew! Pew!

player.I.update()

player.I.shootTimer # => 9
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

  # This is kind of gross, but we need to make sure
  # App.width and App.height are around for the tests.
  App ||= {}
  App.width ||= 480
  App.height ||= 320

  self.bind "update", ->
    I.x = I.x.clamp(I.width / 2, App.width - I.width / 2)
    I.y = I.y.clamp(I.height / 2, App.height - I.height / 2)
