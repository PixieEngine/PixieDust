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
      yPosition = options.y || I.yPosition

      canvas.font "#{size}px #{font}"

      canvas.centerText
        y: yPosition
        text: text
        color: color
