Engine.Collision = (I, self) ->
  collides: (bounds, sourceObject) ->
    I.objects.inject false, (collided, object) ->
      collided || (object.solid() && (object != sourceObject) && object.collides(bounds))
      
  rayCollides: (source, direction, sourceObject) ->
    hits = I.objects.map (object) ->
      hit = object.solid() && (object != sourceObject) && Collision.rayRectangle(source, direction, object.centeredBounds())
      hit.object = object if hit
      
      hit
      
    nearestDistance = Infinity
    nearestHit = null

    hits.each (hit) ->
      if hit && (d = hit.distance(source)) < nearestDistance
        nearestDistance = d
        nearestHit = hit
        
    nearestHit

