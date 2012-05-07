Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1

  self.bind "update", ->
    if I.fadeO
    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}
