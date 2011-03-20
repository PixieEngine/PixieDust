test "State events should transition properly", ->
  animation = GameObject
    initialState: 'stand'
  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"
  
test "State should transition to a different state after current state finishes", ->
  animation = GameObject
    initialState: 'stand'
    
  animation.transition('run')
  animation.update()
  animation.update()
  animation.update()
  
  equals animation.currentState(), "stand"
    
  
