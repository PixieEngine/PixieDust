( ->
  Map = (data, entityCallback) ->
    tileHeight = data.tileHeight
    tileWidth = data.tileWidth

    spriteLookup = {}

    for uuid, entity of App.entities
      spriteLookup[uuid] = Sprite.fromURL(entity.tileSrc)

    loadEntities = () ->
      return unless entityCallback

      data.layers.each (layer, layerIndex) ->
        if layer.name.match /entities/i
          if entities = layer.entities
            for entity in entities
              {x, y, uuid} = entity

              entityData = Object.extend(
                layer: layerIndex
                sprite: spriteLookup[uuid]
                x: x
                y: y
              , App.entities[uuid] # Global entity properties
              #TODO: Maybe map specific properties?
              , entity.properties) # Instance properties

              entityCallback(entityData)

    loadEntities()

    Object.extend data,
      draw: (canvas, x, y) ->
        canvas.withTransform Matrix.translation(x, y), () ->
          data.layers.each (layer) ->
            return if layer.name.match /entities/i

            layer.tiles.each (row, y) ->
              row.each (uuid, x) ->
                if sprite = spriteLookup[uuid]
                  sprite.draw(canvas, x * tileWidth, y * tileHeight)

  Tilemap = (name, callback, entityCallback) ->
    fromPixieId(App.Tilemaps[name], callback, entityCallback)

  fromPixieId = (id, callback, entityCallback) ->
    url = "http://pixieengine.com/s3/tilemaps/#{id}/data.json"

    proxy =
      draw: ->

    $.getJSON url, (data) ->
      Object.extend(proxy, Map(data, entityCallback))

      callback? proxy

    return proxy

  loadByName = (name, callback, entityCallback) ->
    #TODO: Better cachebusting
    directory = App?.directories?.tilemaps || "data"
    url = "#{BASE_URL}/#{directory}/#{name}.tilemap?#{new Date().getTime()}"

    proxy =
      draw: ->

    $.getJSON url, (data) ->
      Object.extend(proxy, Map(data, entityCallback))

      callback? proxy

    return proxy

  Tilemap.fromPixieId = fromPixieId

  Tilemap.load = (options) ->
    if options.pixieId
      fromPixieId options.pixieId, options.complete, options.entity
    else if options.name
      loadByName options.name, options.complete, options.entity

  (exports ? this)["Tilemap"] = Tilemap
)()
