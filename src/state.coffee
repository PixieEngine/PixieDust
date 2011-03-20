StateMachine = (I, self) ->
  I ||= {}
      
  transition: (state) ->
     
   
  return Machine(name, object, options, block)
 
Callback = (options, machine, block) ->
  self =   
    match: (from_state, to_state, event) ->
      if options.to && options.from
        return true if options.to == to_state && options.from == from_state
         
        return false
      
      if (options.to == to_state) || (options.from == from_state) || (options.on == event.name)
        return true 
       
    run: (params) ->
      block?.apply(machine.object, params)
      
      if options.run
        options.run.apply(machine.object, params)
      
  self
    
Event = (name, machine) ->
  guards = GuardsCollection()

  transition_for = (params) ->
    if can_fire(params)
      from = machine.state()
      to = guards.find_to_state(name, from, params)
      
      return Transition(machine, self, from, to, params)
    else
      return false
 
  self = 
    transition: (options) ->
      guards.add(name, machine.object, options)
      machine.states.push(options.from)
      machine.states.push(options.to)
      
      return self
      
    can_fire: (params) ->
      return true if guards.match(name, machine.state(), params)
      
      return false
     
    fire: (params) ->
      transition = transition_for(params)

      return transition.perform() if transition 
      
      return false
       
  self
    
Guard = (name, object, options) ->
  I = 
    from: options.from
    to: options.to
    except: options.except
    options: options
    name: name
    object: object   
    
  self =
    match: (name, from, params) ->
      if name == I.name && match_from_state(I.from)
        if run_callbacks(params)
          return true

      return false
        
    match_from_state: (from) ->
      if typeof I.from == 'string'
        if I.from == 'any'
          return check_exceptions(from)
        else
          return from == I.from
      else
        I.from.each (from_item) ->
          return true if from == from_item
          
          return false  
        
    check_exceptions: (from) ->
      return from != I.except
      
    run_callbacks: (params) ->
      success = true
      if I.options.when
        success = I.options.when.apply(I.object, params)
      if I.options.unless && success
        success = !I.options.unless.apply(I.object, params)
        
      return success
  
  self
  
GuardsCollection = ->
  guards = []
  last_match = null
  
  self =
    add: (name, object, options) ->
      guard = Guard(name, object, options)
      guards.push(guard)
      return guard
    
    all: -> guards
      
    match: (name, from, params) ->
      guards.each (guard) ->
        match = guard.match(name, from, params)
        if match
          last_match = match
          return guard
      
      return false
      
    find_to_state: (name, from, params) ->
      local_match = match(name, from, params)
      
      return match.to if local_match
  
  self
  
Machine = (name, object, options, block) ->
  events = []
  states = []
  callbacks =
    before: []
    after: []
      
  machine_name = name
    
  internal_state = options && (if options.initial then options.initial else '')
  add_methods_to_object(name, object)
    
  if block
    block(self)
    
  return self

  add_methods_to_object = (name, object) ->
    object[name] = self.state()
    object[name+'_events'] = events
    object[name+'_states'] = states
    
  add_event_methods = (name, object, event) ->
    object[name] = -> event.fire(arguments)     
    object['can_' + name] = -> event.can_fire()
      
  set_state = (state) ->
    internal_state = state
    object[machine_name] = state
  
  self =  
    event: (name, block) ->
      event = Event(name, self)
     
      events.push(event)
      add_event_methods(name, object, event)
      if block 
        block(event)
      
      return event
      
    before_transition: (options, block) ->
      callback = Callback(options, self, block)
      callbacks["before"].push(callback)
      
      return callback
      
    after_transition: (options, block) ->
      callback = Callback(options, self, block)
      callbacks["after"].push(callback)
      
      return callback
      
    state: -> internal_state
      
Transition = (machine, event, from, to, params) ->
  self =
    perform: ->
      self.before()
      machine.set_state(to)
      self.after()
      return true

    before: ->     
      machine.callbacks['before'].each (callback) ->
        if callback.match(from, to, event)
          callback.run(params)
    
    after: -> 
      machine.callbacks['after'].each (callback) ->
        if callback.match(from, to, event)
          callback.run(params)

    rollback: -> machine.set_state(from)
