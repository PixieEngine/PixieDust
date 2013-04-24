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
        if instances = layer.instances
          for instance in instances
            {x, y, uuid} = instance

            instanceData = Object.extend(
              layer: layerIndex
              sprite: spriteLookup[uuid]
              x: x + tileWidth/2 # Centered Coordinates
              y: y + tileHeight/2 # Centered Coordinates
            , App.entities[uuid] # Global entity properties
            #TODO: Maybe map specific properties?
            , instance.properties) # Instance properties

            entityCallback(instanceData)

    loadEntities()

    data

  Tilemap = (name, callback, entityCallback) ->
    fromPixieId(App.Tilemaps[name], callback, entityCallback)

  loadByName = (name, callback, entityCallback) ->
    url = ResourceLoader.urlFor("tilemaps", name)

    proxy = {}

    $.getJSON url, (data) ->
      Object.extend(proxy, Map(data, entityCallback))

      callback? proxy

    return proxy

  Tilemap.load = (options) ->
    if options.pixieId
      fromPixieId options.pixieId, options.complete, options.entity
    else if options.name
      loadByName options.name, options.complete, options.entity

  (exports ? this)["Tilemap"] = Tilemap
)()
