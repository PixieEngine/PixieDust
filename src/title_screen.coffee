###*
The Title Screen class sets up a simple game title screen using <code>App.name</code>

@see TextScreen
@name TitleScreen
@constructor
###

###*
Goes to the next level on any user input.

@name update
@methodOf TitleScreen#
@event
###

###*
Overlays the title text in the middle of the screen. Uses <code>App.name</code> 

@name overlay
@methodOf TitleScreen#
@event
###
TitleScreen = (I={}) ->
  self = TextScreen(I)

  self.bind 'update', ->
    engine.nextLevel() if justPressed.any

  self.bind "overlay", (canvas) ->
    self.centerText canvas, App.name

    self.centerText canvas, "Press any key to start",
      size: 12
      y: App.height / 2 + 30

  return self
