module "TimedEvents"

test "#every", 4, ->
  o = GameObject()

  o.every 1, ->
    ok true

  4.times ->
    o.update(1)
    o.trigger "afterUpdate", 1

# Clear out the module
module()
