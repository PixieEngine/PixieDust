module "TimedEvents"

test "#every", ->
  gameObject = GameObject()
  
  gameObject.every 1, ->
    ok true
    
  4.times ->
    gameObject.trigger "update", 1
    gameObject.trigger ""

# Clear out the module
module()
