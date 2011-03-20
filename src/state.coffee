StateMachine = (I, self) ->
  I ||= {}
  
  $.reverseMerge I,
    currentState: null
    initialState: null
        
  currentState: (val) ->
    if val != undefined
      I.currentState = val
      
      return self
    else
      return I.currentState 
    
  defaultState: () ->
    return I.initialState    
      
  transition: (toState) ->
    return currentState = toState
