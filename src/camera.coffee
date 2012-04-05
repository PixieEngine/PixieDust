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
      width: App.width
      height: App.height
    deadzone: Point(0, 0)
    zoom: 1
    transform: Matrix()
    scroll: Point(0, 0)

  currentType = "centered"
  currentObject = null

  objectFilters = []
  transformFilters = []

  focusOn = (object) ->
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

  followTypes =
    centered: (object) ->              
      I.deadzone = Point(0, 0)

      focusOn(object)

    topdown: (object) ->
      helper = Math.max(I.screen.width, I.screen.height) / 4

      I.deadzone = Point(helper, helper) 

      focusOn(object)

    platformer: (object) ->
      width = I.screen.width / 8
      height = I.screen.height / 3

      I.deadzone = Point(width, height)

      focusOn(object)

  self = Core(I).extend
    follow: (object, type="centered") ->
      currentObject = object
      currentType = type

      # TODO: Easing
      I.scroll = object.center()

    objectFilterChain: (fn) ->
      objectFilters.push fn

    transformFilterChain: (fn) ->
      transformFilters.push fn

  self.attrAccessor "transform", "scroll"

  self.include(Bindable)

  self.bind "afterUpdate", ->
    if currentObject
      followTypes[currentType](currentObject)

    I.transform = Matrix.translate(-I.scroll.x, -I.scroll.y)

  self.bind "draw", (canvas, objects) ->
    canvas.withTransform Matrix.translate(I.screen.x, I.screen.y), (canvas) ->
      canvas.clip(0, 0, I.screen.width, I.screen.height)

      objects = objectFilters.pipeline(objects)
      transform = transformFilters.pipeline(self.transform().copy())

      canvas.withTransform transform, (canvas) ->
        self.trigger "beforeDraw", canvas
        objects.invoke "draw", canvas

      self.trigger 'flash', canvas

  self.bind "overlay", (canvas, objects) ->
    canvas.withTransform Matrix.translate(I.screen.x, I.screen.y), (canvas) ->
      canvas.clip(0, 0, I.screen.width, I.screen.height)
        objects = objectFilters.pipeline(objects)

        objects.invoke "o"

  self.include(Camera.ZSort)
  self.include(Camera.Zoom)
  self.include(Camera.Rotate)
  self.include(Camera.Shake)
  self.include(Camera.Flash)
  self.include(Camera.Fade)

  return self

