###*
The collision module provides some simple collision detection methods to engine.

@name Collision
@fieldOf Engine
###
Engine.Collision = (I, self) ->
  ###*
  Detects collisions between a bounds and the game objects.

  @name collides
  @methodOf Engine.Collision#
  @param bounds The bounds to check collisions with.
  @param [sourceObject] An object to exclude from the results.
  ###
  collides: (bounds, sourceObject) ->
    I.objects.inject false, (collided, object) ->
      collided || (object.solid() && (object != sourceObject) && object.collides(bounds))

  ###*
  Detects collisions between a ray and the game objects.

  @name rayCollides
  @methodOf Engine.Collision#
  @param source The origin point
  @param direction A point representing the direction of the ray
  @param [sourceObject] An object to exclude from the results.
  ###
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

