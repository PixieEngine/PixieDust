###*
Collision holds many useful class methods for checking geometric overlap of various objects.

@name Collision
@namespace
###
Collision =
  ###*
  Takes two bounds objects and returns true if they collide (overlap), false otherwise.
  Bounds objects have x, y, width and height properties.

  <code><pre>
     player = GameObject
       x: 0
       y: 0
       width: 10
       height: 10

     enemy = GameObject
       x: 5
       y: 5
       width: 10
       height: 10

     Collision.rectangular(player, enemy)
  => true

     Collision.rectangular(player, {x: 50, y: 40, width: 30, height: 30})
  => false
  </pre></code>

  @name rectangular
  @methodOf Collision

  @param a The first rectangle
  @param b The second rectangle

  @returns true if the rectangles overlap, false otherwise
  @type boolean
  ###
  rectangular: (a, b) ->
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y

  ###*
  Takes two circle objects and returns true if they collide (overlap), false otherwise.
  Circle objects have x, y, and radius.

  <code><pre>
     player = GameObject
       x: 5
       y: 5
       radius: 10

     enemy = GameObject
       x: 10
       y: 10
       radius: 10

     farEnemy = GameObject
       x: 500
       y: 500
       radius: 30

     Collision.circular(player, enemy)
  => true

     Collision.circular(player, farEnemy)
  => false
  </pre></code>

  @name circular
  @methodOf Collision

  @param a
  @param b

  @type boolean
  @returns true is the circles overlap, false otherwise
  ###
  circular: (a, b) ->
    r = a.radius + b.radius
    dx = b.x - a.x
    dy = b.y - a.y

    r * r >= dx * dx + dy * dy

  ###*
  Detects whether a line intersects a circle.

  @name rayCircle
  @methodOf Collision

  @param source
  @param direction
  @param target

  @type bool
  @returns true if the line intersects the circle, false otherwise
  ###
  rayCircle: (source, direction, target) ->
    radius = target.radius()
    target = target.position()

    laserToTarget = target.subtract(source)

    projectionLength = direction.dot(laserToTarget)

    if projectionLength < 0
      return false # object is behind

    projection = direction.scale(projectionLength)

    intersection = source.add(projection)
    intersectionToTarget = target.subtract(intersection)
    intersectionToTargetLength = intersectionToTarget.length()

    if intersectionToTargetLength < radius
      hit = true

    if hit
      dt = Math.sqrt(radius * radius - intersectionToTargetLength * intersectionToTargetLength)

      hit = direction.scale(projectionLength - dt).add(source)

  ###*
  Detects whether a line intersects a rectangle.

  @name rayRectangle
  @methodOf Collision

  @param source
  @param direction
  @param target

  @returns {Boolean} true if the line intersects the rectangle, false otherwise
  @type Boolean
  ###
  rayRectangle: (source, direction, target) ->
    xw = target.xw
    yw = target.yw

    if source.x < target.x
      xval = target.x - xw
    else
      xval = target.x + xw

    if source.y < target.y
      yval = target.y - yw
    else
      yval = target.y + yw

    if direction.x == 0
      p0 = Point(target.x - xw, yval)
      p1 = Point(target.x + xw, yval)

      t = (yval - source.y) / direction.y
    else if direction.y == 0
      p0 = Point(xval, target.y - yw)
      p1 = Point(xval, target.y + yw)

      t = (xval - source.x) / direction.x
    else
      tX = (xval - source.x) / direction.x
      tY = (yval - source.y) / direction.y

      # TODO: These special cases are gross!
      if (tX < tY || (-xw < source.x - target.x < xw)) && !(-yw < source.y - target.y < yw)
        p0 = Point(target.x - xw, yval)
        p1 = Point(target.x + xw, yval)

        t = tY
      else
        p0 = Point(xval, target.y - yw)
        p1 = Point(xval, target.y + yw)

        t = tX

    if t > 0
      areaPQ0 = direction.cross(p0.subtract(source))
      areaPQ1 = direction.cross(p1.subtract(source))

      if areaPQ0 * areaPQ1 < 0
        hit = direction.scale(t).add(source)

