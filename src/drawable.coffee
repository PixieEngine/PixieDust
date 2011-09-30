###*
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

<code><pre>
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
</pre></code>

@name Drawable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###

###*
Triggered every time the object should be drawn. A canvas is passed as
the first argument. 

<code><pre>
player = Core
  x: 0
  y: 10
  width: 5
  height: 5

player.bind "draw", (canvas) ->
  canvas.fillColor("white")

  # Text will be drawn positioned relatively to the object.
  canvas.fillText("Hey, drawing stuff is pretty easy.", 5, 5)
</pre></code>

@name draw
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
###

Drawable = (I, self) ->
  I ||= {}

  Object.reverseMerge I,
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
      canvas.drawRect
        x: 0
        y: 0
        width: I.width
        height: I.height
        color: I.color

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
      self.trigger 'draw', canvas

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

    transform = Matrix.translation(center.x, center.y)

    transform = transform.concat(Matrix.rotation(I.rotation)) if I.rotation
    transform = transform.concat(Matrix.HORIZONTAL_FLIP) if I.hflip
    transform = transform.concat(Matrix.VERTICAL_FLIP) if I.vflip

    transform = transform.concat(Matrix.translation(-I.width/2, -I.height/2))

    if I.spriteOffset
      transform = transform.concat(Matrix.translation(I.spriteOffset.x, I.spriteOffset.y))

    return transform

