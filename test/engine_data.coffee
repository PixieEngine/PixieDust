module "Engine"

test "#data", 1, ->
  engine = Engine
    backgroundColor: false

  3.times (n) ->
    engine.delay n, ->
      ok(true)

  engine.frameAdvance()

module()
