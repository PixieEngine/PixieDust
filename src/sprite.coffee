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
    draw: ->
    fill: ->
    frame: ->
    update: ->
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

    fill: (canvas, x, y, width, height, repeat="repeat") ->
      pattern = canvas.createPattern(image, repeat)
      canvas.fillColor(pattern)
      canvas.fillRect(x, y, width, height)

    width: width
    height: height

  Sprite.loadSheet = (name, tileWidth, tileHeight) ->
    url = ResourceLoader.urlFor("images", name)

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

      Object.extend(proxy, tile)

      if loadedCallback
        loadedCallback(proxy)

    img.src = url

    return proxy

  ###*
  Loads a sprite with the given pixie id.

  @name fromPixieId
  @methodOf Sprite

  @param id
  @param [callback]

  @type Sprite
  ###
  Sprite.fromPixieId = (id, callback) ->
    Sprite.load("http://pixieengine.com/s3/sprites/#{id}/original.png", callback)


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
  Sprite.EMPTY = Sprite.NONE = LoaderProxy()

  ###*
  Loads a sprite from a given url.

  @name fromURL
  @methodOf Sprite

  @param {String} url
  @param [callback]

  @type Sprite
  ###
  Sprite.fromURL = Sprite.load

  ###*
  Loads a sprite with the given name.

  @name loadByName
  @methodOf Sprite

  @param {String} name
  @param [callback]

  @type Sprite
  ###
  Sprite.loadByName = (name, callback) ->
    Sprite.load(ResourceLoader.urlFor("images", name), callback)

  (exports ? this)["Sprite"] = Sprite
)()

