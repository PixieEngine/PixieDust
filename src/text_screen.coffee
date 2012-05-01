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
    Set your velocity to follow another object.
  
    <code><pre>
    enemy.follow(player)
  
    # => The enemy now has it's velocity attribute set in
    # the direction of the player, with magnitude equal to
    # the enemy's speed
    </pre></code>
  
    @name centerText
    @methodOf TextScreen#
    @param {PixieCanvas} canvas The canvas to draw on

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
