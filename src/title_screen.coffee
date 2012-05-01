###*
The Title Screen class sets up a simple game title screen using <code>App.name</code>

@see TextScreen
@name TitleScreen
@constructor
###

###*
Updates the position of the text based on the effect velocity. Updates the 
alpha based on the elapsed time since the effect creation. If <code>rotationalVelocity</code>
is provided then the text rotation is updated as well.

@name update
@methodOf TextEffect#
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
