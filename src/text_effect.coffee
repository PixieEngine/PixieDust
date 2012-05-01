###*
The Text Effect class provides a method to display moving text onscreen, fading out the text over the effect duration.

By default, images are loaded asynchronously. A proxy object is 
returned immediately. Even though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@name TextEffect
@constructor
###

###*
updates the position of the text based on the effect velocity.
Observe or configure a <code>gameObject</code> that has been added 
to the engine.
@name update
@methodOf TextEffect#
@event
###
TextEffect = (I={}) ->
  Object.reverseMerge I,
    color: Color('green')
    duration: 40
    font: '20px Helvetica'
    text: '100'
    textShadow: Color('black')
    alpha: 1
    rotation: 0
    rotationalVelocity: 0
    velocity: Point(0, -1)
    
  self = GameObject(I)

  self.bind "update", ->    
    I.rotation += I.rotationalVelocity
  
    I.x += I.velocity.x
    I.y += I.velocity.y
    
    I.alpha = 1 - (I.age / I.duration)

  self.unbind "draw"
  self.bind "draw", (canvas) ->    
    unless I.color.channels
      I.color = Color(I.color)
    
    unless I.textShadow.channels
      I.textShadow = Color(I.textShadow)
      
    I.color.a = I.alpha
    I.textShadow.a = I.alpha
        
    canvas.font I.font
    canvas.drawText
      color: I.textShadow
      x: 1
      y: 1
      text: I.text    

    canvas.drawText
      color: I.color
      x: 0
      y: 0
      text: I.text

  return self
