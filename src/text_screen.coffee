GameOver = (I={}) ->
  Object.reverseMerge I,
    font: 'Helvetica'
    fontSize: 24
    fontColor: 'white'
    yPosition: App.height / 2

  self = GameState(I).extend
    centerText: (canvas, options={}) ->
      font = options.font || I.font
      size = options.size || I.fontSize
      color = options.color || I.fontColor

      canvas.font "#{size}px #{font}"

      canvas.centerText
        y: 
        text: text
        color: color

      canvas.font '14px Helvetica'

      canvas.centerText
        y: App.height / 2
        text: subtitleText
