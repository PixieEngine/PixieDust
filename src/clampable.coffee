###*
The <code>Clampable</code> module provides helper methods to clamp object properties. 

@name Clampable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Clampable = (I={}, self) ->
  Object.reverseMerge I,
    clampData: {}

  self.bind "afterUpdate", ->
    for property, data of I.clampData
      I[property] = I[property].clamp(data.min, data.max)

  ###
  @name clamp
  @methodOf Clampable#
  @param {Object} data
  ###
  clamp: (data) ->
    Object.extend(I.clampData, data)

  ###*
  @name clampToBounds
  @methodOf Clampable#
  @param {Rectangle} bounds
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
