Collision =
  rectangular: (a, b) ->
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y

  circular: (a, b) ->
    r = a.radius + b.radius
    dx = b.x - a.x
    dy = b.y - a.y

    r * r >= dx * dx + dy * dy
    
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

