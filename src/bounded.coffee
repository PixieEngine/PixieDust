###*
The Bounded module is used to provide basic data about the
location and dimensions of the including object. This module is included
by default in <code>GameObject</code>.

<code><pre>
   player = Core
     x: 10
     y: 50
     width: 20
     height: 20
     other: "stuff"
     more: "properties"

   player.position()
=> Uncaught TypeError: Object has no method 'position'

   player.include(Bounded)

   # now player has all the methods provided by this module
   player.position()
=> {x: 10, y: 50}
</pre></code>

@see GameObject

Bounded module
@name Bounded
@module
@constructor

@param {Object} I Instance variables
@param {Core} self Reference to including object
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

  @name position
  @returns The position of this object
  @type Point
  ###
  position: ->
    Point(I.x, I.y)

  ###*
  Does a check to see if this object is overlapping
  with the bounds passed in.

  <code><pre>
    player = Core
      x: 4
      y: 6
      width: 20
      height: 20

    player.collides({x: 5, y: 7, width: 20, height: 20})
    => true
  </pre></code>

  @name collides
  @returns The position of this object
  @type Point
  ###
  collides: (bounds) ->
    Collision.rectangular(I, bounds)

  ###*
  This returns a modified bounds based on the collision margin.
  The area of the bounds is reduced if collision margin is positive
  and increased if collision margin is negative.

  <code><pre>
    player = Core
      collisionMargin: 
        x: -2
        y: -4
      x: 50
      y: 50
      width: 20
      height: 20

    player.collisionBounds()
    => {x: 38, y: 36 height: 28, width: 24}

    player.collisionBounds(10, 10)
    => {x: 48, y: 46 height: 28, width: 24}
  </pre></code>  

  @name collisionBounds
  @methodOf Bounded#

  @param {Number} xOffset the amount to shift the x position 
  @param {Number} yOffset the amount to shift the y position
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

  <code><pre>
    player = Core
      x: 3
      y: 6
      width: 2
      height: 2

    player.include(Bounded)

    player.bounds()
    => {x: 3, y: 6, width: 2, height: 2}

    player.bounds(7, 4)
    => {x: 10, y: 10, width: 2, height: 2}   
  </pre></code>

  @name bounds
  @methodOf Bounded#

  @param {Number} xOffset the amount to shift the x position 
  @param {Number} yOffset the amount to shift the y position
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

  <code><pre>
    player = Core
      x: 3
      y: 6
      width: 2
      height: 2

    player.include(Bounded)

    player.centeredBounds()
    => {x: 4, y: 7, xw: 1, yw: 1}
  </pre></code>  

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

  <code><pre>  
  player = Core
    radius: 5
    x: 50
    y: 50
    other: "stuff"

  player.include(Bounded)

  player.circle()
  => {radius: 5, x: 50, y: 50}
  </pre></code>

  @name circle
  @methodOf Bounded#
  ###
  circle: () ->
    circle = self.center()
    circle.radius = I.radius || I.width/2 || I.height/2

    return circle

