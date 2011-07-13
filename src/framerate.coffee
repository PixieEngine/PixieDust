###*
This object keeps track of framerate and displays it by creating and appending an
html element to the DOM.

Once created you call snapshot at the end of every rendering cycle.

@name Framerate
@constructor
###
Framerate = (options) ->
  options ||= {}

  unless options.noDOM
    element = $("<div>",
      css:
        color: "#FFF"
        fontFamily: "consolas, 'Courier New', 'andale mono', 'lucida console', monospace"
        fontWeight: "bold"
        paddingLeft: 4
        position: "fixed"
        top: 0
        left: 0
    ).appendTo('body').get(0)

  numFramerates = 15
  framerateUpdateInterval = 250

  renderTime = -1
  framerates = [ ]

  updateFramerate = ->
    tot = 0
    for rate in framerates
      tot += rate

    framerate = (tot / framerates.length).round()

    self.fps = framerate
    element.innerHTML = "fps: " + framerate if element

  setInterval(updateFramerate, framerateUpdateInterval)

  ###*
  Call this method everytime you render.

  @name rendered
  @methodOf Framerate#
  ###
  self =
    rendered: ->
      if renderTime < 0
        renderTime = new Date().getTime()
      else
        newTime = new Date().getTime()
        t = newTime - renderTime

        framerate = 1000 / t
        framerates.push(framerate)

        while (framerates.length > numFramerates)
            framerates.shift()

        renderTime = newTime

