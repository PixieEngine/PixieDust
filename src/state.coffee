StateMachine = (I, self)
  I ||= {}
  
  $.reverseMerge I,
    initialState: null
    
  $.reverseMerge I,
    defaultState: I.initialState
    
  self = GameObject.extend
    currentState    
  
  self
