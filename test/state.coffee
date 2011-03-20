test "State events should transition properly", ->
  animation = Core
    initialState: 'stand'
    
  animation.include(Bindable)  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"
  
  
