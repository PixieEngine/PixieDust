###
test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
   
  equals animation.active(), 0      
### 

asyncTest "Active Animation", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 2000
  
  setTimeout ->
    engine.pause()
    age = engine.age()
    ok(64 <= age <= 68, "Engine ran #{age} steps in #{milliseconds}ms")

    start()
  , milliseconds
