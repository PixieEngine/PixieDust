###*
The <code>Collision</code> module provides some simple collision detection methods to engine.

@name Collision
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Collision = (I, self) ->
  ###*
  Detects collisions between a bounds and the game objects.

  @name collides
  @methodOf Engine#
  @param bounds The bounds to check collisions with.
  @param [sourceObject] An object to exclude from the results.
  @returns {Boolean} true if the bounds object collides with any of the game objects, false otherwise.
  ###
  collides: (bounds, sourceObject) ->
    I.objects.inject false, (collided, object) ->
      collided || (object.solid() && (object != sourceObject) && object.collides(bounds))

  ###*
  Detects collisions between a bounds and the game objects. 
  Returns an array of objects colliding with the bounds provided.

  @name collidesWith
  @methodOf Engine#
  @param bounds The bounds to check collisions with.
  @param [sourceObject] An object to exclude from the results.
  @returns {Array} An array of objects that collide with the given bounds.
  ###
  collidesWith: (bounds, sourceObject) ->
    collided = []

    I.objects.each (object) ->
      return unless object.solid()
      if object != sourceObject && object.collides(bounds)
        collided.push(object)

    return collided if collided.length

  ###*
  Detects collisions between a ray and the game objects.

  @name rayCollides
  @methodOf Engine#
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
