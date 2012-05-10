module "TimedEvents"

test "#every", ->
  gameObject = GameObject()
  
  gameObject.every 1, ->
    ok true
    
  4.times ->

# Clear out the module
module()
