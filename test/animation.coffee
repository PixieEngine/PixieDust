asyncTest "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 300
  
  setTimeout ->
    equals animation.currentSprite(), 0
    animation.update()
    
    equals animation.currentSprite(), 1

    start()
  , milliseconds

