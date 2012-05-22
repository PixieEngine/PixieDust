module "TimedEvents"

test "#every", 4, ->
  o = GameObject()

  o.every 1, ->
    ok true

  4.times ->
    o.update(1)
    o.trigger "afterUpdate", 1

test "#delay", 1, ->

  3.times (n) ->
    engine.delay n, ->
      ok(true)

  engine.frameAdvance()

# Clear out the module
module()
