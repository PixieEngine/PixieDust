###*
The TimedEvents module allows arbitrary code to be executed at set intervals. This module is included by default 

<code><pre>
player = GameObject()

player.include TimedEvents

# doSomething is called every 4 frames
player.every 4, ->
  doSomething()
</pre></code>

@see GameObject

Bounded module
@name Bounded
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
TimedEvents = (I={}) ->
  every: (n, fn) ->
    if I.age.mod(n) is 0
      fn()
