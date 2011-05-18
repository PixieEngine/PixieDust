Animated = (I, self) ->  
  I ||= {}

  $.reverseMerge I,
    animationName: null
    data:
      version: ""
      tileset: [
        id: 0
        src: ""
        title: ""
        circles: [{
          x: 0
          y: 0
          radius: 0
        }]
      ]
      animations: [{
         name: ""
         complete: ""
         interruptible: false
         speed: ""
         triggers: {
           "0": [""]
         }
         frames: [0]
      }]      
    spriteLookup: {}
    activeAnimation:
      name: ""
      complete: ""
      interruptible: false
      speed: ""
      triggers: {
        "0": [""]
      }
      frames: [0]
    currentFrameIndex: 0
    lastUpdate: new Date().getTime()
    useTimer: false
    transform: Matrix.IDENTITY

  loadByName = (name, callback) ->
    url = "#{BASE_URL}/data/#{name}.animation?#{new Date().getTime()}"

    $.getJSON url, (data) ->
      I.data = data

      callback? data

    return I.data

  I.data.tileset.each (spriteData, i) ->
    I.spriteLookup[i] = Sprite.fromURL(spriteData.src) 

  if I.data.animations.first().name != "" 
    I.activeAnimation = I.data.animations.first()
    I.currentFrameIndex = I.activeAnimation.frames.first()

    I.data.tileset.each (spriteData, i) ->
      I.spriteLookup[i] = Sprite.fromURL(spriteData.src) 
  else if I.animationName
    loadByName I.animationName, ->
      I.activeAnimation = I.data.animations.first()
      I.currentFrameIndex = I.activeAnimation.frames.first()

      I.data.tileset.each (spriteData, i) ->
        I.spriteLookup[i] = Sprite.fromURL(spriteData.src)  
  else
    throw "No animation data provided. Either use animationName to specify an animation to load from the project or pass in raw JSON to the data key."

  advanceFrame = ->
    frames = I.activeAnimation.frames

    if I.currentFrameIndex == frames.last() 
      self.trigger("Complete") 

      nextState = I.activeAnimation.complete

      if nextState
        I.activeAnimation = find(nextState) || I.activeAnimation
        I.width = I.spriteLookup[I.activeAnimation.frames.first()].width
        I.height = I.spriteLookup[I.activeAnimation.frames.first()].height

    I.currentFrameIndex = I.activeAnimation.frames[(frames.indexOf(I.currentFrameIndex) + 1) % frames.length]

  find = (name) ->
    result = null

    I.data.animations.each (animation) ->
      result = animation if animation.name.toLowerCase() == name.toLowerCase()

    return result  

  draw: (canvas) ->
    canvas.withTransform self.transform(), ->
      I.spriteLookup[I.currentFrameIndex].draw(canvas, I.x, I.y)

  transition: (newState) ->
    return if newState == I.activeAnimation.name
    return unless I.activeAnimation.interruptible

    nextState = find(newState)

    if nextState    
      I.activeAnimation = nextState
      firstFrame = I.activeAnimation.frames.first()
      firstSprite = I.spriteLookup[firstFrame]

      I.currentFrameIndex = firstFrame
      I.width = firstSprite.width
      I.height = firstSprite.height 

  transform: ->
    I.transform

  before:  
    update: () ->       
      if I.useTimer
        time = new Date().getTime()

        updateFrame = (time - I.lastUpdate) >= I.activeAnimation.speed

        if updateFrame
          I.lastUpdate = time
          if I.activeAnimation.triggers && I.activeAnimation.triggers[I.currentFrameIndex]
            I.activeAnimation.triggers[I.currentFrameIndex].each (event) ->
              self.trigger(event)

          advanceFrame()
      else
        if I.activeAnimation.triggers && I.activeAnimation.triggers[I.currentFrameIndex]
          I.activeAnimation.triggers[I.currentFrameIndex].each (event) ->
            self.trigger(event)

        advanceFrame()