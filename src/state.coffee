StateMachine = (I, self)
  I ||= {}
  
  $.reverseMerge I,
    currentState: null
    initialState: null
    
  $.reverseMerge I,
    defaultState: I.initialState
    
  self = GameObject.extend
    currentState =    
  
  self
