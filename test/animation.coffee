test "Animation should default to first frame", ->
  animation = GameObject
    initialState: 'stand'
  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"