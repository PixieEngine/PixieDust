###*
The Game Over class sets up a simple game state with restart instructions.

@see TextScreen
@name GameOver
@constructor
###

###*
Transitions to the title state on user input.

@name update
@methodOf GameOver#
@event
###

###*
Draws Game Over screen and reset instructions.

@name overlay
@methodOf GameOver#
@param {PixieCanvas} canvas
@event
###
GameOver = (I={}) ->
  self = TextScreen(I)

  self.bind 'update', ->
    if justPressed.any
      engine.delay 15, ->
        engine.setState TitleScreen()

  self.bind "overlay", (canvas) ->
    self.centerText canvas, "Game Over"

    self.centerText canvas, "Press any key to restart",
      size: 12
      y: App.height / 2 + 30

  return self
