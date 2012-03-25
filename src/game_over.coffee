GameOver = (I={}) ->
  self = GameState(I)

  self.bind 'update', ->
    if justPressed.any
      engine.delay 15, ->
        engine.setState TitleScreen()

  self.bind "overlay", (canvas) ->
    titleText = "Game Over"
    titleText = "You Win!" if I.won

    drawTitleText canvas, titleText, "Press any key to start over"

  return self