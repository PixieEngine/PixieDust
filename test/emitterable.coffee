module "Emitter"

test "Particles should move", ->
  e = Emitter()

  e.update()

  ok e.I.particles.length

module()

