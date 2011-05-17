Animated = (I, self) ->  
  I ||= {}

  $.reverseMerge I,
    animationName: "Animation1"
    data: {}
    spriteLookup: {}
    activeAnimation: []
    currentFrameIndex: 0
    lastUpdate: new Date().getTime()
    useTimer: false
    transform: Matrix.IDENTITY

  loadByName = (name, callback, entityCallback) ->
    url = "#{BASE_URL}/data/#{name}.animation?#{new Date().getTime()}"

    $.getJSON url, (data) ->
      I.data = data

      callback? I.data

    return I.data

  loadByName(I.animationName)

  I.activeAnimation = I.data.animations.first()
  I.currentFrameIndex = I.activeAnimation.frames.first()

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

  I.data.tileset.each (spriteData, i) ->
    I.spriteLookup[i] = Sprite.fromURL(spriteData.src)

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