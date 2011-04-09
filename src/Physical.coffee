( ($) ->
  SCALE = 0.1

  {b2Vec} = Box2D.Common.Math
  {b2BodyDef, b2Body, b2FixtureDef, b2Fixture, b2World} = Box2D.Dynamics
  {b2PolygonShape, b2CircleShape, b2MassData} = Box2D.Collision.Shapes

  window.Physical = (I, self) ->
    $.reverseMerge I
      dynamic: false

    fixDef = new b2FixtureDef()
    fixDef.density = 1.0
    fixDef.friction = 0.3
    fixDef.restitution = 0.2
    fixDef.shape = new b2PolygonShape()
    fixDef.shape.SetAsBox(I.width / 2 * SCALE, I.height / 2 * SCALE)

    bodyDef = new b2BodyDef()

    if I.dynamic
      bodyDef.type = b2Body.b2_dynamicBody
      bodyDef.fixedRotation = true
    else
      bodyDef.type = b2Body.b2_staticBody

    bodyDef.position = new b2Vec(
      (entityData.x + (entityData.width / 2)) * SCALE, 
      (entityData.y + (entityData.height / 2)) * SCALE
    )

    body = I.world.CreateBody(bodyDef)        
    body.CreateFixture(fixDef)

    self.bind "step", ->
      I.x = (I.bodyData.GetPosition().x / SCALE) - (I.width / 2)
      I.y = (I.bodyData.GetPosition().y / SCALE) - (I.height / 2)

    return {}

)(jQuery)

