###*
The <code>Tilemap</code> module provides a way to load tilemaps in the engine.

@name Tilemap
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
###
Engine.Tilemap = (I, self) ->
  map = null

  self.bind "preDraw", (canvas) ->
    map?.draw canvas

  loadMap: (name, complete) ->
    map = Tilemap.load
      name: name
      complete: complete
      entity: self.add

