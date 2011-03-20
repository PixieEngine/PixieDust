test "State events should check if event can be fired", ->
  animation = Core
    initialState: 'stand'
    
  animation.include(Bindable)  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"
