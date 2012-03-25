GameOver = (I={}) ->
  self = Text(I)

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
