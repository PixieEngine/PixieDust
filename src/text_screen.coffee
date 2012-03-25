GameOver = (I={}) ->
  Object.reverseMerge I,
    font: '24px Helvetica'
    fontColor: 

  self = GameState(I).extend
    drawTitleText: (canvas, titleText, subtitleText) ->
      canvas.fillColor 
      canvas.font ''

      canvas.centerText
        y: App.height / 2 - 20
        text: titleText

      canvas.font '14px Helvetica' 

      canvas.centerText
        y: App.height / 2
        text: subtitleText
