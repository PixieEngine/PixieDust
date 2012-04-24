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

        
      f = Easing[data.easing](data.start, data.end)
      I[property] = f()

  tween: (duration, properties) ->
    for property, target of properties
      activeTweens[property] =
        end: target
        start: I[property]
        easing: "linear"
        startTime: I.age
        endTime: I.age + duration
