( ($) ->
  SCALE = 0.1

  {b2Vec2} = Box2D.Common.Math
  {b2BodyDef, b2Body, b2FixtureDef, b2Fixture, b2World} = Box2D.Dynamics
  {b2PolygonShape, b2CircleShape, b2MassData} = Box2D.Collision.Shapes

  window.Physical = (I, self) ->
    $.reverseMerge I,
      density: 1.0
      dynamic: false
      friction: 0.1
      restitution: 0.5
      rotatable: false

    fixDef = new b2FixtureDef()
    fixDef.density = I.density
    fixDef.friction = I.friction
    fixDef.restitution = I.restitution
    fixDef.shape = new b2PolygonShape()
    fixDef.shape.SetAsBox(I.width / 2 * SCALE, I.height / 2 * SCALE)

    bodyDef = new b2BodyDef()

    if I.dynamic
      bodyDef.type = b2Body.b2_dynamicBody
      bodyDef.fixedRotation = !I.rotatable
    else
      bodyDef.type = b2Body.b2_staticBody

    center = self.center().scale(SCALE)

    bodyDef.position = new b2Vec2(
      center.x, 
      center.y
    )

    body = I.world.CreateBody(bodyDef)        
    body.CreateFixture(fixDef)

    body.SetUserData(self)

    self.bind "step", ->
      I.x = (body.GetPosition().x / SCALE) - (I.width / 2)
      I.y = (body.GetPosition().y / SCALE) - (I.height / 2)
      I.rotation = body.GetAngle()

    applyImpulse: (vector) ->
      body.ApplyImpulse(new b2Vec2(vector.x, vector.y), body.GetPosition())

)(jQuery)

