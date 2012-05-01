###*
The TimedEvents module allows arbitrary code to be executed at set intervals. <code>GameObject</code> includes this module by default

<code><pre>
player = GameObject()

player.include TimedEvents

# doSomething is called every 4 frames
player.every 4, ->
  doSomething()
</pre></code>

@see GameObject

TimedEvents module
@name TimedEvents
@module
@constructor
@param {Object} I Instance variables
###
TimedEvents = (I={}) ->
  ###*
  Execute <code>fn</code>

  <code><pre>
  player = GameObject
    x: 50
    y: 50
    width: 10
    height: 10
  
  player.include Bounded
  
  enemy = GameObject
    x: 110
    y: 120
    width: 7
    height: 20
    
  player.distance(enemy)
  # => 92.19544457292888
  </pre></code>

  @name distance
  @methodOf Bounded#
  @see Point.distance
  @returns {Number} Distance between the two objects
  ###  
  every: (n, fn) ->
    if I.age.mod(n) is 0
      fn()
