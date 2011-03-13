###
The Drawable module is used to provide a simple draw method to the including
object.

@name Drawable
@constructor
@param {Object} I Instance variables
###
Drawable = (I) ->
  I ||= {}

  ###
  Draw this object on the canvas. It uses the x and y instance attributes to position
  and the sprite instance attribute to determine what to draw.
  
  @name draw
  @methodOf Drawable#
  
  @param canvas
  ###
  draw: (canvas) ->
    if I.transform
      canvas.withTransform Matrix.translation(I.x + I.width/2, I.y + I.height/2).concat(I.transform).concat(Matrix.translation(-I.width/2, -I.height/2)), (canvas) ->
        if I.sprite
          I.sprite.draw(canvas, 0, 0)
        else if I.color
          canvas.fillColor I.color
          canvas.fillRect(0, 0, I.width, I.height)
    else
      if I.sprite
        I.sprite.draw(canvas, I.x, I.y)
      else if I.color
        canvas.fillColor I.color
        canvas.fillRect(I.x, I.y, I.width, I.height)

