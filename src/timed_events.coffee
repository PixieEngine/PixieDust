###*
The TimedEvents module allows arbitrary code to be executed at set intervals. <code>GameObject</code> includes this module by default

TimedEvents module
@name TimedEvents
@module
@constructor
@param {Object} I Instance variables
###
TimedEvents = (I={}) ->
  ###*
  Execute <code>fn</code> every <code>n</code> frames.

  <code><pre>
  player = GameObject()
  
  player.include TimedEvents
  
  # doSomething is called every 4 frames
  player.every 4, ->
    doSomething()
  </pre></code>

  @name every
  @methodOf TimedEvents#
  @param {Number} n The number of frames to wait before executing the callback
  @param {Function} fn The code to execute after the 
  ###  
  every: (n, fn) ->
    if I.age.mod(n) is 0
      fn()
