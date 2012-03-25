TitleScreen = (I={}) ->
  self = Tex(I)

  self.bind 'update', ->
    engine.nextLevel() if justPressed.any

  self.bind "overlay", (canvas) ->
    drawTitleText canvas, window.title, "Press any key to start"

  return self
