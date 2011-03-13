Durable = (I) ->
  $.reverseMerge I,
    duration: -1
    
  before:
    update: () ->
      if I.duration != -1 && I.age >= I.duration
        I.active = false

