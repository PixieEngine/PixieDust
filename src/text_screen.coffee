GameOver = (I={}) ->
  self = GameState(I).extend
    drawTitleText: (canvas, titleText, subtitleText) ->
      canvas.fillColor 'white'
      canvas.font '24px Helvetica'

      canvas.centerText
        y: App.height / 2 - 20
        text: titleText

      canvas.font '14px Helvetica' 

      canvas.centerText
        y: App.height / 2
        text: subtitleText