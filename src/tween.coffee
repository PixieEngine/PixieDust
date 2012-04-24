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
  A convenient way to set the flicker instance variables on a sprite. You can modify the
  instance variables by hand but the suggested way to do it is through this method.

  <code><pre>
  player = GameObject()

  player.include(Flickerable)

  player.flicker()
  # => This causes the sprite to flicker between full opacity 
  # => and 50% opacity every 3 frames for 30 frames

  player.flicker(90, 5, 0.3)
  # => This causes the sprite to flicker between full opacity
  # => and 30% opacity every 5 frames for 90 frames
  </pre></code>

  @name flicker
  @methodOf Flickerable#
  @param {Number} [duration=30] How long the effect lasts
  @param {Number} [frequency=3] The number of frames in between opacity changes
  @param {Number} [alpha=0.5] The alpha value to flicker to
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
