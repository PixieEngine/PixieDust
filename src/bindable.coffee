(($) ->
  ###*
  * Bindable module
  * @name Bindable
  * @constructor
  ###
  Bindable = -> 
    eventCallbacks = {}
    
    ###*
    * The bind method adds a function as an event listener.
    *
    * @name bind
    * @methodOf Bindable#
    *
    * @param {String} event The event to listen to.
    * @param {Function} callback The function to be called when the specified event
    * is triggered.
    ###
    bind: (event, callback) ->
      eventCallbacks[event] = eventCallbacks[event] || []
      
      eventCallbacks[event].push(callback)

    unbind: (event, callback) ->
      eventCallbacks[event] = eventCallbacks[event] || []
      
      if callback
        eventCallbacks.remove(callback)
      else
        eventCallbacks[event] = []

    ###*
    * The trigger method calls all listeners attached to the specified event.
    *
    * @name trigger
    * @methodOf Bindable#
    *
    * @param {String} event The event to trigger.
    * @param {Array} [extraParameters] Additional parameters to pass to the event listener.
    ###
    trigger: (event, extraParameters) ->
      callbacks = eventCallbacks[event]

      if callbacks && callbacks.length
        self = this

        callbacks.each (callback) ->
          callback.apply(self, [self].concat(extraParameters))

  window.Bindable = Bindable
)(jQuery)

