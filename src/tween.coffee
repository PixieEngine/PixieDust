###*
The <code>Tween</code> module provides a method to tween object properties. 

@name Tween
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Tween = (I={}, self) ->
  Object.reverseMerge I,
    activeTweens: {}

  # Add events and methods here
  self.bind "update", ->
    for property, data of I.activeTweens
      if I.age >= data.endTime
        I[property] = data.end
        delete I.activeTweens[property]
      else
        f = Easing[data.easing](data.start, data.end)
        t = (I.age - data.startTime) / data.duration
        I[property] = f(t)

  ###*
  Modify the objects properties over time.

  <code><pre>
  player = GameObject()

  player.tween 30,
    x: 50
    y: 50
    easing: "quadratic"
  </pre></code>

  @name tween
  @methodOf Tween#
  @param {Number} duration How long (in frames) until the object's properties reach their final values.
  @param {Object} properties Which properties to tween, plun 
  ###
  tween: (duration, properties) ->
    properties = Object.extend({}, properties) # Make a local copy

    easing = properties.easing || "linear"
    delete properties.easing

    for property, target of properties
      I.activeTweens[property] =
        end: target
        start: I[property]
        easing: easing
        duration: duration
        startTime: I.age
        endTime: I.age + duration
