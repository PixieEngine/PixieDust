module "TimedEvents"

test "#every", ->
  gameObject = GameObject()
  
  gameObject.every 1, ->
    ok true
    
  gameObject

# Clear out the module
module()
