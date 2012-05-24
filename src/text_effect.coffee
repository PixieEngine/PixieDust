###*
The Text Effect class provides a method to display moving text onscreen, fading out the text over the effect duration.

    TextEffect

@name TextEffect
@constructor
###

###*
Updates the position of the text based on the effect velocity. Updates the 
alpha based on the elapsed time since the effect creation.

@name update
@methodOf TextEffect#
@event
###

###*
Draws text from `I.textShadow` `I.text`.

@name draw
@methodOf TextEffect#
@param {PixieCanvas} canvas
@event
###
TextEffect = (I={}) ->
  Object.reverseMerge I,
    color: Color('green')
    duration: -1
    font: '20px Helvetica'
    text: '100'
    textShadow: Color('black')
    alpha: 1
    rotation: 0
    velocity: Point(0, 0)
    
  self = GameObject(I)

  self.bind "update", ->    
    I.alpha = (1 - (I.age / I.duration)).clamp(0, 1)
        
  self.unbind "draw"
  self.bind "draw", (canvas) ->      
    unless I.color.channels
      I.color = Color(I.color)
    
    unless I.textShadow.channels
      I.textShadow = Color(I.textShadow)
      
    I.color.a = I.alpha
    I.textShadow.a = I.alpha
    
    width = canvas.measureText()
        
    canvas.font I.font
    canvas.drawText
      color: I.textShadow
      x: 1 - width / 2
      y: 1
      text: I.text    

    canvas.drawText
      color: I.color
      x: 0 - width / 2
      y: 0
      text: I.text

  return self
