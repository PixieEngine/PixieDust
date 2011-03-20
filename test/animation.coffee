###
test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
   
  equals animation.active(), 0      
### 

asyncTest "Active Animation", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 20
  
  setTimeout ->
    ok(animation.active(), "")

    start()
  , milliseconds
