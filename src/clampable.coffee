Clampable = (I={}, self) ->
  Object.reverseMerge I,
    clampData: {}

  self.bind "afterUpdate", ->
    for property, data of I.clampData
      I[property] = I[property].clamp(data.min, data.max)

  ###
  @name 
  ###
  clamp: (data) ->
    Object.extend(I.clampData, data)

  ###*
  @name clampToBounds
  @methodOf Clampable#
  ###
  clampToBounds: (bounds) ->
    bounds ||= Rectangle x: 0, y: 0, width: App.width, height: App.height
    
    self.clamp
      x:
        min: bounds.x + I.width/2
        max: bounds.width - I.width/2
      y:
        min: bounds.y + I.height/2
        max: bounds.height - I.height/2
