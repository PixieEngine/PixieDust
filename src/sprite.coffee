###*
The Sprite class provides a way to load images for use in games.

By default, images are loaded asynchronously. A proxy object is 
returned immediately but though it has a draw method it will not
draw anything to the screen until the image has been loaded.

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

    ###*
    Draw this sprite on the given canvas at the given position.

    @name draw
    @methodOf Sprite#

    @param canvas
    @param x
    @param y
    ###
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

  Sprite.loadSheet = (name, tileWidth, tileHeight) ->
    directory = App?.directories?.images || "images"

    url = "#{BASE_URL}/#{directory}/#{name}.png?#{MTIME}"

    console.log url

    sprites = []
    image = new Image()

    image.onload = ->
      imgElement = this
      (image.height / tileHeight).times (row) ->
        (image.width / tileWidth).times (col) ->
          sprites.push(Sprite(imgElement, col * tileWidth, row * tileHeight, tileWidth, tileHeight))

    image.src = url

    return sprites

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
  A sprite that draws nothing.

  @name EMPTY
  @fieldOf Sprite
  @constant
  @type Sprite
  ###
  ###*
  A sprite that draws nothing.

  @name NONE
  @fieldOf Sprite
  @constant
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

  ###*
  Loads a sprite with the given name.

  @name loadByName
  @methodOf Sprite

  @param {String} name
  @param [callback]

  @type Sprite
  ###
  window.Sprite.loadByName = (name, callback) ->
    directory = App?.directories?.images || "images"
    url = "#{BASE_URL}/#{directory}/#{name}.png#{MTIME}"
    Sprite.load(url, callback)

  window.Sprite.create = Sprite

)()

