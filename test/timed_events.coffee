module "TimedEvents"

test "#every", ->
  gameObject = GameObject()
  
  gameObject.every ->
    ok true

# Clear out the module
module()
