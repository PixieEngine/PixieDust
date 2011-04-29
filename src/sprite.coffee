###*
@name Sprite
@constructor
###

( ->
  LoaderProxy = ->
    draw: $.noop
    fill: $.noop
    frame: $.noop
    update: $.noop
    width: null
    height: null

  Sprite = (image, sourceX, sourceY, width, height) ->
    sourceX ||= 0
    sourceY ||= 0
    width ||= image.width
    height ||= image.height

    draw: (canvas, x, y) ->
      canvas.drawImage(
        image,
        sourceX,
        sourceY,
        width,
        height,
        x,
        y,
        width,
        height
      )

    fill: (canvas, x, y, width, height, repeat) ->
      repeat ||= "repeat"
      pattern = canvas.createPattern(image, repeat)
      canvas.fillColor(pattern)
      canvas.fillRect(x, y, width, height)

    width: width
    height: height

  Sprite.load = (url, loadedCallback) ->
    img = new Image()
    proxy = LoaderProxy()

    img.onload = ->
      tile = Sprite(this)

      $.extend(proxy, tile)

      if loadedCallback
        loadedCallback(proxy)

    img.src = url

    return proxy

  pixieSpriteImagePath = "http://pixieengine.com/s3/sprites/"

  fromPixieId = (id, callback) ->
    Sprite.load(pixieSpriteImagePath + id + "/original.png", callback)

  window.Sprite = (name, callback) ->
    if App.Sprites
      id = App.Sprites[name]
      if id
        fromPixieId(id, callback)
      else
        warn("Could not find sprite named: '" + name + "' in App.")

    else
      # Treat name as URL
      return window.Sprite.fromURL(name, callback)

  ###*
  A constant sprite that draws nothing.

  @name EMPTY
  @fieldOf Sprite
  @type Sprite
  ###
  window.Sprite.EMPTY = window.Sprite.NONE = LoaderProxy()

  ###*
  Loads a sprite with the given pixie id.

  @name fromPixieId
  @methodOf Sprite

  @param id
  @param [callback]

  @type Sprite
  ###
  window.Sprite.fromPixieId = fromPixieId

  ###*
  Loads a sprite from a given url.

  @name fromURL
  @methodOf Sprite

  @param {String} url
  @param [callback]

  @type Sprite
  ###
  window.Sprite.fromURL = Sprite.load

)()

