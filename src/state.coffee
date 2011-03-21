###
StateMachine = () ->
  currentState = null
  initialState = null
        
  self = GameObject().extend  
    defaultState: () ->
      return initialState    
        
    transition: (toState) ->
      currentState.trigger(toState)
    
  self.attrAccessor('currentState') 
    
  return self
###