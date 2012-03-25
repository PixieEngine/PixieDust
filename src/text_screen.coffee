GameOver = (I={}) ->
  Object.reverseMerge I,
    font: '24px Helvetica'
    fontColor: 'white'

  self = GameState(I).extend
    drawTitleText: (canvas, titleText, subtitleText) ->
      canvas.fillColor 
      canvas.font I.font

      canvas.centerText
        y: App.height / 2 - 20
        text: titleText
        color: I.fontColor

      canvas.font '14px Helvetica' 

      canvas.centerText
        y: App.height / 2
        text: subtitleText
