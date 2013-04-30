Camera.Transition = (I, self) ->
  Object.reverseMerge I,
    transitionActive: null
    transitionStart: null
    transitionEnd: null

  defaultOptions =
    color: "white"

  transitionProgress = ->
    ((I.age - I.transitionStart) / (I.transitionEnd - I.transitionStart)).clamp(0, 1)

  transitions =
    angle: ({canvas, t, screenSize, color}) ->
      # Leading point at the center
      p0 = Point(t * (screenSize.x * 2), screenSize.y / 2)

      p1 = p0.subtract(Point(screenSize.x, screenSize.y / 2))
      p2 = p1.subtract(Point(screenSize.x, 0))
      p3 = p2.add(Point(0, screenSize.y))
      p4 = p3.add(Point(screenSize.x, 0))

      canvas.drawPoly
        points: [p0, p1, p2, p3, p4]
        color: color

    square: ({canvas, t, screenSize, color}) ->
      width = 50
      height = 50

      (screenSize.y / height).ceil().times (y) ->
        (screenSize.x / width).ceil().times (x) ->
          cellProgress = (2 * t - (x + y).mod(2)).clamp(0, 1)

          canvas.drawRect
            x: x * width
            y: y * height
            width: width
            height: height * cellProgress
            color: color

    line: ({canvas, t, screenSize, color}) ->
      height = 50

      (screenSize.y / height).ceil().times (y) ->
        canvas.drawRect
          x: 0
          y: y * height
          width: screenSize.x
          height: height * t
          color: color

  # TODO Use transition options for color
  # TODO default transition options

  self.on "overlay", (canvas) ->
    if transitionName = I.transitionActive
      transitions[transitionName] Object.extend(
        canvas: canvas
        screenSize: Point(I.screen.width, I.screen.height)
        t: transitionProgress()
      , I.transitionOptions)

  transition: ({name, duration, options}={}) ->
    name ?= "angle"
    duration ?= 1

    I.transitionActive = name
    I.transitionStart = I.age
    I.transitionEnd = I.age + duration
    I.transitionOptions = Object.extend({}, defaultOptions, options)
