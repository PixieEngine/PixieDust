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

  self.extend  
    draw: (canvas) ->
      if (transform = self.getTransform?())
        canvas.withTransform transform, (canvas) ->
          self.trigger 'draw', canvas
      else
        canvas.withTransform Matrix.translation(I.x, I.y), (canvas) ->
          self.trigger 'draw', canvas

    getTransform: ->
      center = self.center().floor()

      if I.rotation
        I.transform = Matrix.translation(center.x, center.y)
        I.transform = I.transform.concat(Matrix.rotation(I.rotation))
        I.transform = I.transform.concat(Matrix.HORIZONTAL_FLIP) if I.hflip
        I.transform = I.transform.concat(Matrix.VERTICAL_FLIP) if I.vflip
        I.transform = I.transform.concat(Matrix.translation(-I.width/2, -I.height/2))
      else
        # Assumes I.x and I.y are top-left      
        I.transform = Matrix.translation(I.x.floor(), I.y.floor())

        if I.hflip || I.vflip
          I.transform = Matrix.translation(center.x, center.y)
          I.transform = I.transform.concat(Matrix.HORIZONTAL_FLIP) if I.hflip
          I.transform = I.transform.concat(Matrix.VERTICAL_FLIP) if I.vflip
          I.transform = I.transform.concat(Matrix.translation(-I.width/2, -I.height/2))

        if I.spriteOffset
          I.transform = I.transform.concat(Matrix.translation(I.spriteOffset.x, I.spriteOffset.y))

  self.bind 'draw', (canvas) ->
    if I.sprite
      if I.sprite.draw? 
        I.sprite.draw(canvas, 0, 0)
      else
        warn?("Sprite has no draw method!")
    else
      canvas.fillColor(I.color)
      canvas.fillRect(0, 0, I.width, I.height)

  return {}
