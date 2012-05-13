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

  self.bind "update", (elapsedTime) ->
    for event in I.everyEvents
      {fn, period} = event
      while event.lastFired < I.age + elapsedTime
        self.sendOrApply(fn)
        event.lastFired += period

  ###*
  Execute <code>fn</code> every <code>n</code> frames.

  <code><pre>
  player = GameObject()
  
  player.include TimedEvents
  
  # doSomething is called every 4 seconds
  player.every 4, ->
    doSomething()
  </pre></code>

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

  sendOrApply: (fn) ->
    if typeof fn is "function"
      fn.apply(self)
    else
      self.send(fn)
