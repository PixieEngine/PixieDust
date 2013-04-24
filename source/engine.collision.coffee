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
  collides: (bounds, sourceObject, selector=".solid") ->
    self.find(selector).inject false, (collided, object) ->
      collided or (object != sourceObject) and object.collides(bounds)

  ###*
  Detects collisions between a bounds and the game objects.
  Returns an array of objects colliding with the bounds provided.

  @name collidesWith
  @methodOf Engine#
  @param bounds The bounds to check collisions with.
  @param [sourceObject] An object to exclude from the results.
  @returns {Array} An array of objects that collide with the given bounds.
  ###
  collidesWith: (bounds, sourceObject, selector=".solid") ->
    self.find(selector).select (object) ->
      object != sourceObject and object.collides(bounds)

  ###*
  Detects collisions between a ray and the game objects.

  @name rayCollides
  @methodOf Engine#
  @param source The origin point
  @param direction A point representing the direction of the ray
  @param [sourceObject] An object to exclude from the results.
  @param [selector] A selector to choos which objects in the engine to collide with
  ###
  rayCollides: ({source, direction, sourceObject, selector}) ->
    selector ?= ""

    hits = self.find(selector).map (object) ->
      hit = (object != sourceObject) and Collision.rayRectangle(source, direction, object.centeredBounds())
      hit.object = object if hit

      hit

    nearestDistance = Infinity
    nearestHit = null

    hits.each (hit) ->
      if hit && (d = hit.distance(source)) < nearestDistance
        nearestDistance = d
        nearestHit = hit

    nearestHit

  # TODO Allow specification of collision type (i.e. circular)
  objectsUnderPoint: (point, selector="") ->
    bounds = {
      x: point.x
      y: point.y
      width: 0
      height: 0
    }

    self.find(selector).select (object) ->
      object.collides(bounds)
