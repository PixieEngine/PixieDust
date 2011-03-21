(() ->
  Animation = (data) ->  
    spriteLookup = {}
    activeAnimation = data.animations[0]
    currentSprite = data.animations[0].frames[0]
    
    advanceFrame = (animation) ->
      frames = animation.frames
      currentSprite = frames[(frames.indexOf(currentSprite) + 1) % frames.length]
 
    data.tileset.each (spriteData, i) ->
      spriteLookup[i] = Sprite.fromURL(spriteData.src)
    
    $.extend data,
      currentSprite: -> return currentSprite
      draw: (canvas, x, y) ->
        canvas.withTransform Matrix.translation(x, y), () ->
          spriteLookup[currentSprite].draw(canvas, 0, 0)
          
      frames: -> return activeAnimation.frames
                    
      update: -> return advanceFrame(activeAnimation)
            
      active: (name) ->
        if (name != undefined)
          if data.animations[name]
            currentSprite = data.animations[name].frames[0] 
        else
          return activeAnimation

  window.Animation = (name, callback) ->
    fromPixieId(App.Animations[name], callback)
 
  fromPixieId = (id, callback) ->
    url = "http://pixie.strd6.com/s3/animations/#{id}/data.json"
  
    proxy =
      active: $.noop
      draw: $.noop
      
    $.getJSON url, (data) ->
      $.extend(proxy, Animation(data))
      
      callback proxy
      
    return proxy
    
  window.Animation.fromPixieId = fromPixieId
)()