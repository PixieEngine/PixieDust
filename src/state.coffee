StateMachine = () ->
  currentState = null
  initialState = null
        
  self = GameObject().extend      
            
  defaultState: () ->
    return I.initialState    
      
  transition: (toState) ->
    return currentState = toState
    
  self.attrAccessor('currentState') 
    
  return self
