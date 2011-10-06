module "Engine"

test "#delay", 1, ->
  engine = Engine
    backgroundColor: false

  3.times (n) ->
    engine.delay n, ->
      ok(true)

  engine.frameAdvance()

module()

