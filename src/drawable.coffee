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
    hflip: false
    vflip: false
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
    if I.sprite
      if I.sprite.draw? 
        I.sprite.draw(canvas, 0, 0)
      else
        warn?("Sprite has no draw method!")
    else
      canvas.fillColor(I.color)
      canvas.fillRect(0, 0, I.width, I.height)


  draw: (canvas) ->
    canvas.withTransform self.getTransform(), (canvas) ->
      self.trigger 'draw', canvas

  ###*
  Returns the current transform, with translation, rotation, and flipping applied.

  @name getTransform
  @methodOf Drawable#
  @type Matrix
  ###
  getTransform: ->
    center = self.center().floor()

    transform = Matrix.translation(center.x, center.y)

    transform = transform.concat(Matrix.rotation(I.rotation)) if I.rotation
    transform = transform.concat(Matrix.HORIZONTAL_FLIP) if I.hflip
    transform = transform.concat(Matrix.VERTICAL_FLIP) if I.vflip

    transform = transform.concat(Matrix.translation(-I.width/2, -I.height/2))

    if I.spriteOffset
      transform = transform.concat(Matrix.translation(I.spriteOffset.x, I.spriteOffset.y))

    return transform

