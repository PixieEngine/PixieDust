Score = (I={}, self) ->
  Object.reverseMerge I,
    score: 0
    scoreColor: 'black'
    scorePosition:
      x: App.width - 100
      y: 20

  self.bind 'overlay', (canvas) ->
    canvas.font('14px Helvetica')

    canvas.drawText
      color: I.scoreColor
      x: I.scorePosition.x
      y: I.scorePosition.y
      text: "Score: #{I.score}"
