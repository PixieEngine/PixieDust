test "State events should transition properly", ->
  animation = GameObject
    initialState: 'stand'
  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"
  
test "", ->
  animation = GameObject
    initialState: 'stand'
    
  animation.transition('run')
  animation.update()
  animation.update()
  animation.update()
  
  equals animation.currentState(), "stand"
    
  
