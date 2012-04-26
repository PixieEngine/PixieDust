Clampable = (I={}, self) ->
  Object.reverseMerge I,
    clampData: {}

  self.bind "afterUpdate", ->
    for property, data of I.clampData
      I[property] = I[property].clamp(data.min, data.max)

  clamp: (data) ->
    Object.extend(I.clampData, data)

  clampToBounds: (bounds) ->
    bounds ||= Rectangle 0, 0, 