( ->
  Map = (data, entityCallback) ->
    tileHeight = data.tileHeight
    tileWidth = data.tileWidth

    spriteLookup = {}

    data.tileset.each (tileData, i) ->
      spriteLookup[i] = Sprite.fromURL(tileData.src)

    loadEntities = () ->
      return unless entityCallback

      data.layers.each (layer, layerIndex) ->
        return unless layer.name.match /entities/i

        layer.tiles?.each (row, y) ->
          row.each (tileIndex, x) ->
            if spriteLookup[tileIndex]
              entityData = $.extend(
                layer: layerIndex
                sprite: spriteLookup[tileIndex]
                tileIndex: tileIndex
                x: x * tileWidth
                y: y * tileHeight
              , data.tileset[tileIndex]?.properties)

              entityCallback(entityData)

        if entities = layer.entities
          for entity in entities
            {tileIndex} = entity
            entityData = $.extend(
              layer: layerIndex
              sprite: spriteLookup[tileIndex]
              x: entity.x
              y: entity.y
            , data.tileset[tileIndex]?.properties
            , entity.properties)

            entityCallback(entityData)

    loadEntities()      

    $.extend data,
      draw: (canvas, x, y) ->
        canvas.withTransform Matrix.translation(x, y), () ->
          data.layers.each (layer) ->
            return if layer.name.match /entities/i

            layer.tiles.each (row, y) ->
              row.each (tileIndex, x) ->
                if sprite = spriteLookup[tileIndex]
                  sprite.draw(canvas, x * tileWidth, y * tileHeight)

  window.Tilemap = (name, callback, entityCallback) ->
    fromPixieId(App.Tilemaps[name], callback, entityCallback)

  fromPixieId = (id, callback, entityCallback) ->
    url = "http://pixieengine.com/s3/tilemaps/#{id}/data.json"

    proxy =
      draw: $.noop

    $.getJSON url, (data) ->
      $.extend(proxy, Map(data, entityCallback))

      callback? proxy

    return proxy

  loadByName = (name, callback, entityCallback) ->
    #TODO: Better cachebusting
    url = "#{BASE_URL}/data/#{name}.tilemap?#{new Date().getTime()}"

    proxy =
      draw: $.noop

    $.getJSON url, (data) ->
      $.extend(proxy, Map(data, entityCallback))

      callback? proxy

    return proxy

  window.Tilemap.fromPixieId = fromPixieId

  window.Tilemap.load = (options) ->
    if options.pixieId
      fromPixieId options.pixieId, options.complete, options.entity
    else if options.name
      loadByName options.name, options.complete, options.entity

)()

