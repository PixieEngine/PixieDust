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
        delete activeTweens[]
      else
        f = Easing[data.easing](data.start, data.end)
        t = (I.age - data.startTime) / data.duration
        I[property] = f(t)

  tween: (duration, properties) ->
    for property, target of properties
      I.activeTweens[property] =
        end: target
        start: I[property]
        easing: "linear"
        duration: duration
        startTime: I.age
        endTime: I.age + duration
