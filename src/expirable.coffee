Expirable = (I, self) ->
  Object.reverseMerge I,
    duration: -1

  self.bind "afterUpdate", ->
    # this check occurs before I.age is updated
    # TODO: fix off by 1 error
    if I.duration != -1 && I.age >= I.duration
      I.active = false

  return {}
