Clampable = (I={}, self) ->
  Object.reverseMerge I,
    clampData: {}

  self.bind "afterUpdate", ->
    for property, data of I.clampData
      I[property] = I[property].clamp(data.min, data.max)

  clamp: (data) ->
    Object.extend(I.clampData, data)

  clampToBounds: (bounds) ->
    bounds ||= Rectangle x: 0, y: 0, width: App.width, height: App.height
    
    self.clamp
      x:
        min: bounds.x + I.width/2
        max: bounds.width - I.width/2
      
      