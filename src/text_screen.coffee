GameOver = (I={}) ->
  Object.reverseMerge I,
    font: 'level1'

  self = GameState(I).extend
    drawTitleText: (canvas, titleText, subtitleText) ->
      canvas.fillColor 'white'
      canvas.font ''

      canvas.centerText
        y: App.height / 2 - 20
        text: titleText

      canvas.font '14px Helvetica' 

      canvas.centerText
        y: App.height / 2
        text: subtitleText
