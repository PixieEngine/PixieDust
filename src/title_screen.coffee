###*
The Ttit class provides a method to display moving text onscreen, fading out the text over the effect duration.

By default, images are loaded asynchronously. A proxy object is 
returned immediately. Even though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@see TextScreen
@name TextEffect
@constructor
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
