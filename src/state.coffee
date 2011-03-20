StateMachine = () ->
  currentState = null
  initialState = null
        
  self = GameObject().extend      
            
    defaultState: () ->
      return initialState    
        
    transition: (toState) ->
      return currentState = toState
    
  self.attrAccessor('currentState') 
    
  return self
