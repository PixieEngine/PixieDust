###*
The <code>Tilemap</code> module provides a way to load tilemaps in the engine.

@name Tilemap
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Tilemap = (I, self) ->
  Object.extend I
  
  map = null
  updating = false
  clearObjects = false

  self.bind "update", ->
    updating = true

  self.bind "afterUpdate", ->
    updating = false

    if clearObjects
      #TODO: Clear these out in a more graceful way, triggering unload events
      self.objects().clear()
      clearObjects = false

  ###*
  Loads a new may and unloads any existing map or entities.

  @name loadMap
  @methodOf Engine#
  ###
  loadMap: (name, complete) ->
    clearObjects = updating

    map = Tilemap.load
      name: name
      complete: complete
      entity: self.add
