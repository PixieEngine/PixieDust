Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1

  self.bind "afterUpdate", ->
    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}
