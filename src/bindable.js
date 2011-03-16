(function($) {
  /**
  * Bindable module
  * @name Bindable
  * @constructor
  */
  function Bindable() {
    
    var eventCallbacks = {};
    
    return {
      /**
      * The bind method adds a function as an event listener.
      *
      * @name bind
      * @methodOf Bindable#
      *
      * @param {String} event The event to listen to.
      * @param {Function} callback The function to be called when the specified event
      * is triggered.
      */
      bind: function(event, callback) {
        eventCallbacks[event] = eventCallbacks[event] || [];
        
        eventCallbacks[event].push(callback);
      },
      
      unbind: function(event, callback) {
        eventCallbacks[event] = eventCallbacks[event] || [];
        
        if(callback) {
          eventCallbacks.remove(callback);
        } else {
          eventCallbacks[event] = [];
        }
      },
      /**
      * The trigger method calls all listeners attached to the specified event.
      *
      * @name trigger
      * @methodOf Bindable#
      *
      * @param {String} event The event to trigger.
      * @param {Array} [extraParameters] Additional parameters to pass to the event listener.
      */
      trigger: function(event, extraParameters) {
        var callbacks = eventCallbacks[event];
        
        if(callbacks && callbacks.length) {
          var self = this;
          $.each(callbacks, function(i, callback) {
            callback.apply(self, [self].concat(extraParameters));
          });
        }
      },
    };
  }
  
  window.Bindable = Bindable;
}(jQuery));
