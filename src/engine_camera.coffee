Engine.Camera = (I, self) ->
  currentType = "centered"
  currentOptions = {}
  currentObject = null

  followTypes =
    centered: (object, options) ->  
      defaults = 
        x: object.I.x
        y: object.I.y
        width: 0
        height: 0

      options = Object.extend(defaults, currentOptions)

      log App.width
      log App.height

      Matrix.translation(App.width / 2 - options.x, App.height / 2 - options.y)  

  self.bind "afterUpdate", ->
    if currentObject
      I.cameraTransform = followTypes[currentType](currentObject, currentOptions)  

  follow: (object, type, options) ->
    currentObject = object
    currentType = type
    currentOptions = options
