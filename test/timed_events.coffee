module "TimedEvents"

test "#every", 4, ->
  gameObject = GameObject()
  
  gameObject.every 1, ->
    ok true
    
  4.times ->
    gameObject.trigger "update", 1
    gameObject.trigger "afterUpate", 1

# Clear out the module
module()
