GameOver = (I={}) ->
  self = GameState(I)

  self.bind 'update', ->
    if justPressed.any
      engine.delay 15, ->
        engine.setState TitleScreen()

  self.bind "overlay", (canvas) ->

    titleText = "You Win!" if I.won

    self.centerText canvas, "Game Over"

    self.centerText canvas, "Press any key to start",
      size: 12
      y: App.height / 2 + 30

    drawTitleText canvas, titleText, "Press any key to start over"

  return self
