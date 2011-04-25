###*
The Durable module deactives GameObjects after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

@name Durable
@module

@param {Object} I Instance variables
###
Durable = (I) ->
  $.reverseMerge I,
    duration: -1

  before:
    update: () ->
      if I.duration != -1 && I.age >= I.duration
        I.active = false

