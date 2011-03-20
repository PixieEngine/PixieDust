###
test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
   
  equals animation.active(), 0      
### 

asyncTest "Animation has active property", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 300
  
  setTimeout ->
    ok(animation.active, "Animation has active property")

    start()
  , milliseconds
