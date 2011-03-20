StateMachine = (I, self)
  I ||= {}
  
  $.reverseMerge I,
    currentState: null
    initialState: null
        
  self = GameObject.extend
    currentState = (val) ->
      if val != undefined
        I.currentState = val
        
        return self
      else
        return I.currentState   
  
  self
