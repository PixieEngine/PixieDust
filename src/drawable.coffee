###
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

@name Drawable
@module
@constructor

@param {Object} I Instance variables
@param {Object} self Reference to including object
###
Drawable = (I, self) ->
  I ||= {}

  $.reverseMerge I,
    color: "#196"
    spriteName: null
    zIndex: 0

  if I.sprite?.isString?()
    I.sprite = Sprite.loadByName(I.sprite, (sprite) ->
      I.width = sprite.width
      I.height = sprite.height
    )
  else if I.spriteName
    I.sprite = Sprite.loadByName(I.spriteName, (sprite) ->
      I.width = sprite.width
      I.height = sprite.height
    )

  self.bind 'draw', (canvas) ->
    #TODO: Not sure if setting the transform here is the best
    # but we want to make sure it's adjusted after *all* the updates
    center = self.center()

    if I.rotation
      I.transform = Matrix.translation(center.x, center.y)
        .concat(Matrix.rotation(I.rotation))
        .concat(Matrix.translation(-I.width/2, -I.height/2))
    else
      # Assumes I.x and I.y are top-left
      I.transform = Matrix.translation(I.x, I.y)

    if I.sprite
      I.sprite.draw(canvas, 0, 0)
    else
      canvas.fillColor(I.color)
      canvas.fillRect(0, 0, I.width, I.height)

  return {}

