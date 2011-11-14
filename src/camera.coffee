Camera = (I={}) -> 
  Object.reverseMerge I,
    cameraBounds: Rectangle
      x: 0
      y: 0
      width: App.width
      height: App.height
    screen: Rectangle
      x: 0
      y: 0 
      width: App.width / 2
      height: App.height
    deadzone: Point(0, 0)
    zoom: 1
    cameraRotation: 0
    transform: Matrix()
    scroll: Point(0, 0)
    zSort: true

  currentType = "centered"
  currentObject = null

  transformCamera = (object) ->
    objectCenter = object.center()

    centerOffset = objectCenter.subtract(I.screen.width / 2, I.screen.height / 2)

    deadzone = I.deadzone.scale(1 / (2 * I.zoom))

    centerRect = Rectangle
      x: centerOffset.x - deadzone.x
      y: centerOffset.y - deadzone.y
      width: 2 * deadzone.x
      height: 2 * deadzone.y

    I.scroll = Point(
      I.scroll.x.clamp(centerRect.left, centerRect.right).clamp(I.cameraBounds.left, I.cameraBounds.right - I.screen.width)
      I.scroll.y.clamp(centerRect.top, centerRect.bottom).clamp(I.cameraBounds.top, I.cameraBounds.bottom - I.screen.height)
    )    

    I.transform = Matrix.translate(-I.scroll.x, -I.scroll.y)
      .scale(I.zoom, I.zoom, objectCenter)
      .rotate(I.cameraRotation, objectCenter)

  followTypes =
    centered: (object) ->              
      I.deadzone = Point(0, 0)

      transformCamera(object)

    topdown: (object) ->
      helper = Math.max(I.cameraBounds.width, I.cameraBounds.height) / 4

      I.deadzone = Point(helper, helper) 

      transformCamera(object)

    platformer: (object) ->
      width = I.cameraBounds.width / 8
      height = I.cameraBounds.height / 3

      I.deadzone = Point(width, height)

      transformCamera(object)

  self = Core(I).extend
    follow: (object, type) ->
      currentObject = object
      currentType = type

      # TODO: Easing
      I.scroll = object.center()

  self.attrAccessor "transform" 

  self.include(Bindable)

  self.bind "afterUpdate", ->
    if currentObject
      followTypes[currentType](currentObject)

      if I.shakeCooldown > 0
        I.shakeCooldown = I.shakeCooldown.approach(0, 1)

        I.transform.tx += signedRand(I.shakeIntensity)
        I.transform.ty += signedRand(I.shakeIntensity)
      else
        followTypes[currentType](currentObject)  

  self.bind "draw", (canvas, objects) ->
    canvas.withTransform Matrix.translate(I.screen.x, I.screen.y), (canvas) ->  
      canvas.context().beginPath()
      canvas.context().rect(0, 0, I.screen.width, I.screen.height);
      canvas.context().clip()

      # TODO Turn this zSort into a per camera object stream filter
      # This will also enable filters like clipping region tests
      if I.zSort
        objects.sort (a, b) ->
          a.I.zIndex - b.I.zIndex

      canvas.withTransform self.transform(), (canvas) ->
        self.trigger "beforeDraw", canvas
        objects.invoke "draw", canvas

      self.trigger 'flash', canvas

  self.include(Camera.Rotate)
  self.include(Camera.Zoom)
  self.include(Camera.Shake)
  self.include(Camera.Flash)
  self.include(Camera.Fade)

  return self
