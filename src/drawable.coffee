###*
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

    player = Core
      x: 15
      y: 30
      width: 5
      height: 5
      sprite: "my_cool_sprite"

    engine.bind 'draw', (canvas) ->
      player.draw(canvas)
    # => Uncaught TypeError: Object has no method 'draw'

    player.include(Drawable)

    engine.bind 'draw', (canvas) ->
      player.draw(canvas)
    # => if you have a sprite named "my_cool_sprite" in your images folder
    # then it will be drawn. Otherwise, a rectangle positioned at x: 15 and
    # y: 30 with width and height 5 will be drawn.

@name Drawable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###

###*
Triggered every time the object should be drawn. A canvas is passed as
the first argument.

    player = Core
      x: 0
      y: 10
      width: 5
      height: 5

    player.bind "draw", (canvas) ->
      # Text will be drawn positioned relatively to the object.
      canvas.drawText
        text: "Hey, drawing stuff is pretty easy."
        color: "white"
        x: 5
        y: 5

@name draw
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
###

###*
Triggered before the object should be drawn. A canvas is passed as
the first argument. This does not apply the current transform.

@name beforeTransform
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
###

###*
Triggered after the object should be drawn. A canvas is passed as
the first argument. This applies the current transform.

@name afterTransform
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
###

Drawable = (I={}, self) ->
  Object.reverseMerge I,
    alpha: 1
    color: "#196"
    scale: 1
    scaleX: 1
    scaleY: 1
    zIndex: 0

  if I.sprite?.isString?()
    if I.sprite.indexOf("data:") is 0
      I.sprite = Sprite.fromURL(I.sprite)
    else
      I.sprite = Sprite.loadByName(I.sprite)

  self.bind 'draw.Drawable', (canvas) ->
    if I.alpha? and I.alpha != 1
      previousAlpha = canvas.context().globalAlpha
      canvas.context().globalAlpha = I.alpha

    if sprite = I.sprite
      if sprite.draw?
        sprite.draw(canvas, -sprite.width / 2, -sprite.height / 2)
      else
        warn?("Sprite has no draw method!")
    else
      if I.radius?
        canvas.drawCircle
          x: 0
          y: 0
          radius: I.radius
          color: I.color
      else
        canvas.drawRect
          x: -I.width/2
          y: -I.height/2
          width: I.width
          height: I.height
          color: I.color

    if I.alpha? and I.alpha != 1
      canvas.context().globalAlpha = previousAlpha

  ###*
  Draw does not actually do any drawing itself, instead it triggers all of the draw events.
  Listeners on the events do the actual drawing.

  @name draw
  @methodOf Drawable#
  @returns self
  ###
  draw: (canvas) ->
    self.trigger 'beforeTransform', canvas

    canvas.withTransform self.transform(), (canvas) ->
      self.trigger 'beforeDraw', canvas
      self.trigger 'draw', canvas
      self.trigger 'afterDraw', canvas

    self.trigger 'afterTransform', canvas

    return self

  ###*
  Returns the current transform, with translation, rotation, and flipping applied.

  @name transform
  @methodOf Drawable#
  @returns {Matrix} The current transform
  ###
  transform: ->
    center = self.center()

    transform = Matrix.translation(center.x.floor(), center.y.floor())

    transform = transform.concat(Matrix.scale(I.scale * I.scaleX, I.scale * I.scaleY))
    transform = transform.concat(Matrix.rotation(I.rotation)) if I.rotation

    if I.spriteOffset
      transform = transform.concat(Matrix.translation(I.spriteOffset.x, I.spriteOffset.y))

    return transform
