Engine.Camera = (I, self) ->
  currentType = "centered"
  currentOptions = {}
  currentObject = null

  followTypes =
    centered: (object, options) ->  
      Matrix.translation(App.width / 2 - object.I.x, App.height / 2 - object.I.y)  

  self.bind "afterUpdate", ->
    if currentObject
      I.cameraTransform = followTypes[currentType](currentObject, currentOptions)  

  follow: (object, type, options) ->
    currentObject = object
    currentType = type
    currentOptions = options
