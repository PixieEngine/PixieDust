###*
The Animated module, when included in a GameObject, gives the object 
methods to transition from one animation state to another

@name Animated
@module
@constructor

@param {Object} I Instance variables
@param {Object} self Reference to including object
###

Animated = (I, self) ->  
  I ||= {}

  $.reverseMerge I,
    animationName: I.class?.underscore()
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
        transform: [{
          hflip: false
          vflip: false
        }]
        triggers: {
          "0": ["a trigger"]
        }
        frames: [0]
        transform: [undefined]
      }]      
    activeAnimation:
      name: ""
      complete: ""
      interruptible: false
      speed: ""
      transform: [{
        hflip: false
        vflip: false
      }]
      triggers: {
        "0": [""]
      }
      frames: [0]
    currentFrameIndex: 0
    debugAnimation: false
    hflip: false
    vflip: false
    lastUpdate: new Date().getTime()
    useTimer: false

  loadByName = (name, callback) ->
    url = "#{BASE_URL}/animations/#{name}.animation?#{new Date().getTime()}"

    $.getJSON url, (data) ->
      I.data = data

      callback? data

    return I.data

  initializeState = ->
    I.activeAnimation = I.data.animations.first()

    I.spriteLookup = I.data.tileset.map (spriteData) -> Sprite.fromURL(spriteData.src)     

  window["#{I.animationName}SpriteLookup"] ||= []

  unless window["#{I.animationName}SpriteLookup"].length
    window["#{I.animationName}SpriteLookup"] = I.data.tileset.map (spriteData) -> Sprite.fromURL(spriteData.src)

  I.spriteLookup = window["#{I.animationName}SpriteLookup"]

  if I.data.animations.first().name != "" 
    initializeState()
  else if I.animationName
    loadByName I.animationName, ->
      initializeState() 
  else
    throw "No animation data provided. Use animationName to specify an animation to load from the project or pass in raw JSON to the data key."

  advanceFrame = ->
    frames = I.activeAnimation.frames

    if I.currentFrameIndex == frames.indexOf(frames.last())
      self.trigger("Complete") 

      if nextState = I.activeAnimation.complete
        I.activeAnimation = find(nextState) || I.activeAnimation
        I.currentFrameIndex = 0        
    else
      I.currentFrameIndex = (I.currentFrameIndex + 1) % frames.length

    sprite = I.spriteLookup[frames[I.currentFrameIndex]]

    updateSprite(sprite)

  find = (name) ->
    result = null
    nameLower = name.toLowerCase()

    I.data.animations.each (animation) ->
      result = animation if animation.name.toLowerCase() == nameLower

    return result  

  updateSprite = (spriteData) ->
    I.sprite = spriteData
    I.width = spriteData.width
    I.height = spriteData.height

  ###*
  Transitions to a new active animation. Will not transition if the new state
  has the same name as the current one or if the active animation is marked as locked.

  @param {String} newState The name of the target state you wish to transition to.
  ###

  transition: (newState, force) ->
    return if newState == I.activeAnimation.name

    toNextState = (state) ->
      if nextState = find(state)   
        I.activeAnimation = nextState
        firstFrame = I.activeAnimation.frames.first()
        firstSprite = I.spriteLookup[firstFrame]

        I.currentFrameIndex = 0
        updateSprite(firstSprite)
      else
        warn "Could not find animation state '#{newState}'. The current transition will be ignored" if I.debugAnimation        

    if force
      toNextState(newState)  
    else
      unless I.activeAnimation.interruptible
        warn "Cannot transition to '#{newState}' because '#{I.activeAnimation.name}' is locked" if I.debugAnimation
        return

      toNextState(newState)     

  before:  
    update: ->       
      if I.useTimer
        time = new Date().getTime()

        if updateFrame = (time - I.lastUpdate) >= I.activeAnimation.speed
          I.lastUpdate = time
          if triggers = I.activeAnimation.triggers?[I.currentFrameIndex]
            triggers.each (event) ->
              self.trigger(event)

          advanceFrame()
      else
        if triggers = I.activeAnimation.triggers?[I.currentFrameIndex]
          triggers.each (event) ->
            self.trigger(event)

        advanceFrame()