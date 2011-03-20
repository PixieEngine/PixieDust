asyncTest "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 300
  
  setTimeout ->
    equals animation.active(), 0

    start()
  , milliseconds
