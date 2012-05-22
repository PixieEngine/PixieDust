module "TimedEvents"

test "#every", 4, ->
  o = GameObject()

  o.every 1, ->
    ok true

  4.times ->
    o.update(1)
    o.trigger "afterUpdate", 1

test "#delay", 1, ->
  o = GameObject()

  3.times (n) ->
    o.delay n, ->
      ok(true)

  o.update(0.5)

# Clear out the module
module()
