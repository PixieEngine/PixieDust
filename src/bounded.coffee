###*
The Bounded module is used to provide basic data about the
location and dimensions of the including object. This module is included
by default in <code>GameObject</code>.

Bounded module
@name Bounded
@module
@constructor
@see GameObject

@param {Object} I Instance variables
@param {Object} self Reference to including object
###

Bounded = (I, self) ->
  I ||= {}

  Object.reverseMerge I,
    x: 0
    y: 0
    width: 8
    height: 8
    collisionMargin: Point(0, 0)

  ###*
  The position of this game object. By default it is the top left point.
  Redefining the center method will change the relative position.

  @returns The position of this object
  @type Point
  ###
  position: ->
    Point(I.x, I.y)

  collides: (bounds) ->
    Collision.rectangular(I, bounds)

  ###*
  This returns a modified bounds based on the collision margin.
  The area of the bounds is reduced if collision margin is positive
  and increased if collision margin is negative.

  @name collisionBounds
  @methodOf Bounded#

  @param {number} xOffset the amount to shift the x position 
  @param {number} yOffset the amount to shift the y position
  ###
  collisionBounds: (xOffset, yOffset) ->
    bounds = self.bounds(xOffset, yOffset)

    bounds.x += I.collisionMargin.x
    bounds.y += I.collisionMargin.y
    bounds.width -= 2 * I.collisionMargin.x
    bounds.height -= 2 * I.collisionMargin.y

    return bounds

  ###*
  The bounds method returns infomation about the location 
  of the object and its dimensions with optional offsets.

  @name bounds
  @methodOf Bounded#

  @param {number} xOffset the amount to shift the x position 
  @param {number} yOffset the amount to shift the y position
  ### 
  bounds: (xOffset, yOffset) ->
    center = self.center()

    x: center.x - I.width/2 + (xOffset || 0)
    y: center.y - I.height/2 + (yOffset || 0)
    width: I.width
    height: I.height

  ###*
  The centeredBounds method returns infomation about the center
  of the object along with the midpoint of the width and height.

  @name centeredBounds
  @methodOf Bounded#
  ###  
  centeredBounds: () ->
    center = self.center()

    x: center.x
    y: center.y
    xw: I.width/2
    yw: I.height/2

  ###*
  The center method returns the {@link Point} that is
  the center of the object.

  @name center
  @methodOf Bounded#
  ###  
  center: () ->
    self.position()

  ###*
  Return the circular bounds of the object. The circle is
  centered at the midpoint of the object.

  @name circle
  @methodOf Bounded#
  ###
  circle: () ->
    circle = self.center()
    circle.radius = I.radius || I.width/2 || I.height/2

    return circle

