Engine.Box2D = (I, self) ->
  $.reverseMerge I,
    scale: 0.1
    gravity: new Box2D.Common.Math.b2Vec2(0, 40)

  world = new Box2D.Dynamics.b2World(I.gravity, true)

  self.bind "update", ->
    world.Step(1 / I.FPS, 10, 10)
    world.ClearForces()

  self.bind "beforeAdd", (entityData) ->
    entityData.world = world

  return {}

