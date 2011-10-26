###*
The <code>Delay</code> module provides methods to trigger events after a number of steps have passed.

@name Delay
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Delay = (I, self) ->
  delayedEvents = []

  self.bind 'afterUpdate', ->
    [delayedEvents, firingEvents] = delayedEvents.partition (event) ->
      (event.delay -= 1) >= 0

    firingEvents.each (event) ->
      event.callback()

    return

  ###*
  Execute a callback after a number of steps have passed.

  <code><pre>
  engine.delay 5, ->
    engine.add
      class: "Ghost"
  </pre></code>

  @name delay
  @methodOf Engine#
  @param {Number} steps The number of steps to wait before executing the callback
  @param {Function} callback The callback to be executed.

  @returns {Engine} self
  ###
  delay: (steps, callback) ->
    delayedEvents.push
      delay: steps
      callback: callback

    return self

