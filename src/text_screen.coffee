GameOver = (I={}) ->
  Object.reverseMerge I,
    font: 'Helvetica'
    fontSize: 24
    fontColor: 'white'

  self = GameState(I).extend
    centerText: (canvas, options={}) ->
      font = options.font || I.font
      size = options.size || I.fontSize
      color
      canvas.font "#{size}px #{font}"

      canvas.centerText
        y: App.height / 2 - 20
        text: titleText
        color: I.fontColor

      canvas.font '14px Helvetica'

      canvas.centerText
        y: App.height / 2
        text: subtitleText
