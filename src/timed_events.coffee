###*
The TimedEvents module allows arbitrary code to be executed at set intervals. <code>GameObject</code> includes this module by default

TimedEvents module
@name TimedEvents
@module
@constructor
@param {Object} I Instance variables
###
TimedEvents = (I={}, self) ->
  Object.reverseMerge I,
    everyEvents: []
    delayEvents: []

  self.bind "update", (elapsedTime) ->
    for event in I.everyEvents
      {fn, period} = event
      while event.lastFired < I.age + elapsedTime
        self.sendOrApply(fn)
        event.lastFired += period

    [I.delayedEvents, firingEvents] = I.delayedEvents.partition (event) ->
      (event.delay -= elapsedTime) >= 0

    firingEvents.each (event) ->
      self.sendOrApplyevent.callback()

  ###*
  Execute <code>fn</code> every <code>n</code> frames.

      player = GameObject()
      
      player.include TimedEvents
      
      # doSomething is called every 4 seconds
      player.every 4, ->
        doSomething()

  @name every
  @methodOf TimedEvents#
  @param {Number} n Number of frames to wait before executing the callback
  @param {Function} fn Code to execute after <code>n</code> frames has passed
  ###
  every: (period, fn) ->
    return unless period > 0

    I.everyEvents.push
      fn: fn
      period: period
      lastFired: I.age
      
    ###*
  Execute a callback after a number of seconds have passed.

      self.delay 5, ->
        engine.add
          class: "Ghost"

  @name delay
  @methodOf TimedEvents#
  @param {Number} steps The number of steps to wait before executing the callback
  @param {Function} callback The callback to be executed.

  @returns {Engine} self
  ###
  delay: (seconds, fn) ->
    delayedEvents.push
      delay: seconds
      fn: fn

    return self

  # TODO: Move this into a more core module
  sendOrApply: (fn, args...) ->
    if typeof fn is "function"
      fn.apply(self, args)
    else
      self.send(fn, args...)
