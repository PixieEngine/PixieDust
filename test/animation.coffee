test "Animation should default to first frame", ->
  data = 
    "animations": [
      "name": "first animation"
      "speed": "110"
      "frames": [0,1,2]
    ]

  animation = Animation
    initialState: 'stand'
  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"