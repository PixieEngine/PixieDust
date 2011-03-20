asyncTest "Animation should set proper frame", ->
  animation = Animation.fromPixieId 45
  
  milliseconds = 300
  
  setTimeout ->
    equals animation.currentSprite(), 0, "Animation should default to initial sprite"
    
    animation.update()
    
    equals animation.currentSprite(), 1, "After an update the currentSprite has advanced"

    start()
  , milliseconds

