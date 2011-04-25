###
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

@name Drawable
@module
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

    if I.rotation
      I.transform = Matrix.translation(center.x, center.y)
        .concat(Matrix.rotation(I.rotation))
        .concat(Matrix.translation(-I.width/2, -I.height/2))
    else
      # Assumes I.x and I.y are top-left
      I.transform = Matrix.translation(I.x, I.y)

  self.bind 'draw', (canvas) ->
    if I.sprite
      I.sprite.draw(canvas, 0, 0)
    else
      canvas.fillColor(I.color)
      canvas.fillRect(0, 0, I.width, I.height)

  return {}

