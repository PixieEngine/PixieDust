###
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Autoloads the sprite specified in I.spriteName, if any.

@name Drawable
@constructor
@param {Object} I Instance variables
###
Drawable = (I, self) ->
  I ||= {}

  $.reverseMerge I,
    color: "#196"
    spriteName: null

  if I.spriteName
    I.sprite = Sprite(I.spriteName, (sprite) ->
      I.width = sprite.width
      I.height = sprite.height
    )

  self.bind 'step', ->
    center = self.center()
    I.transform = Matrix.translation(center.x, center.y)
      .concat(Matrix.rotation(I.rotation))
      .concat(Matrix.translation(-I.width/2, -I.height/2)) 

  self.bind 'draw', (canvas) ->
    if I.sprite
      I.sprite.draw(canvas, 0, 0)
    else
      canvas.fillColor(I.color)
      canvas.fillRect(0, 0, I.width, I.height)

