module "Emitter"

test "Particles should move", ->
  e = Emitter()

  xVelocity = e.I.particleData.velocity.x

  e.update(1)

  ok e.I.particles.length

  equals e.I.particles.first().I.x, xVelocity

module()

