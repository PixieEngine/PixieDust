GameOver = (I={}) ->
  Object.reverseMerge I,
    font: 'Helvetica'
    fontSize: 24
    fontColor: 'white'

  self = GameState(I).extend
    centerText: (canvas, text, subtitleText) ->
      canvas.font I.font

      canvas.centerText
        y: App.height / 2 - 20
        text: titleText
        color: I.fontColor

      canvas.font '14px Helvetica' 

      canvas.centerText
        y: App.height / 2
        text: subtitleText
