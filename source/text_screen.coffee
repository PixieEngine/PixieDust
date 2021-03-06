###*
The Text Screen class is a GameState that provides convenience methods for drawing text to screen. 

@name TextScreen
@constructor
###
TextScreen = (I={}) ->
  Object.reverseMerge I,
    font: 'Helvetica'
    fontSize: 24
    fontColor: 'white'
    yPosition: App.height / 2

  self = GameState(I).extend
    ###*
    Draw center aligned text at the given y position.
  
        screen = TextScreen()
        screen.centerText canvas, 'Centering text is easy'
  
    @name centerText
    @methodOf TextScreen#
    @param {PixieCanvas} canvas The canvas to draw on    
    @param {String} text The text to draw
    @param {Object} options These include font, size, color, and yPosition
    ###   
    centerText: (canvas, text, options={}) ->
      font = options.font || I.font
      size = options.size || I.fontSize
      color = options.color || I.fontColor
      yPosition = options.y || I.yPosition

      canvas.font "#{size}px #{font}"

      canvas.centerText
        y: yPosition
        text: text
        color: color
