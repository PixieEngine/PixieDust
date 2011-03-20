test "States transition method should change the current state", ->
  animation = GameObject
    initialState: 'stand'
  
  animation.include(StateMachine)
    
  animation.transition('run')
    
  equals animation.currentState(), "run"
  
test "State should transition to a different state after current state finishes", ->
  animation = GameObject
    initialState: 'run'
    
  animation.include(StateMachine)
      
  animation.update()
  animation.update()
  animation.update()
  
  equals animation.currentState(), "stand"
  
test "State should repeat default state", ->
  animation = GameObject
    defaultState: 'stand'
    
  animation.include(StateMachine)
  
  equals animation.currentState(), animation.defaultState()
  
  100.times ->  
    animation.update()
    
  equals animation.currentState(), animation.defaultState() 
  
