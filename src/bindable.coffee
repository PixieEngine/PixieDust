###*
Bindable module
@name Bindable
@module
@constructor
###
Bindable = -> 
  eventCallbacks = {}

  ###*
  The bind method adds a function as an event listener.

  @name bind
  @methodOf Bindable#

  @param {String} event The event to listen to.
  @param {Function} callback The function to be called when the specified event
  is triggered.
  ###
  bind: (event, callback) ->
    eventCallbacks[event] = eventCallbacks[event] || []

    eventCallbacks[event].push(callback)

  ###*
  The unbind method removes a specific event listener, or all event listeners if
  no specific listener is given.

  @name unbind
  @methodOf Bindable#

  @param {String} event The event to remove the listener from.
  @param {Function} [callback] The listener to remove.
  ###
  unbind: (event, callback) ->
    eventCallbacks[event] = eventCallbacks[event] || []

    if callback
      eventCallbacks[event].remove(callback)
    else
      eventCallbacks[event] = []

  ###*
  The trigger method calls all listeners attached to the specified event.

  @name trigger
  @methodOf Bindable#

  @param {String} event The event to trigger.
  @param {Array} [parameters] Additional parameters to pass to the event listener.
  ###
  trigger: (event, parameters...) ->
    callbacks = eventCallbacks[event]

    if callbacks && callbacks.length
      self = this

      callbacks.each (callback) ->
        callback.apply(self, parameters)

(exports ? this)["Bindable"] = Bindable
