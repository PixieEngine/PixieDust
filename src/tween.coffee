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
  self.bind "update", (elapsedTime) ->
    t = I.age + elapsedTime
    for property, data of I.activeTweens
      if t >= data.endTime
        I[property] = data.end
        I.activeTweens[property].complete?()
        delete I.activeTweens[property]
      else
        if data.easing.isString?()
          easingFunction = Easing[data.easing](data.start, data.end)
        else
          easingFunction

        I[property] = f((t - data.startTime) / data.duration)

  ###*
  Modify the object's properties over time.

      player = GameObject()
    
      player.tween 30,
        x: 50
        y: 50
        easing: "quadratic"

      player = GameObject()
    
      player.tween 30,
        x: 150
        y: 150
        complete: ->
          player.dance()

  @name tween
  @methodOf Tween#
  @param {Number} duration How long (in frames) until the object's properties reach their final values.
  @param {Object} properties Which properties to tween. Set the `easing` property to specify the easing function.
  ###
  tween: (duration, properties) ->
    properties = Object.extend({}, properties) # Make a local copy

    easing = properties.easing || "linear"
    complete = properties.complete

    delete properties.easing
    delete properties.complete

    for property, target of properties
      I.activeTweens[property] =
        complete: complete
        end: target
        start: I[property]
        easing: easing
        duration: duration
        startTime: I.age
        endTime: I.age + duration
