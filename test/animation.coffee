###
asyncTest "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 300
  
  setTimeout ->
    equals animation.active().frames[0], 0

    start()
  , milliseconds
###
 
asyncTest "Animation should increment frame on update", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 300
  
  setTimeout ->
    equals animation.frames[0], 1

    start()
  , milliseconds
