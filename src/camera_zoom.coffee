Camera.Zoom = (I, self) ->
  Object.reverseMerge I,
    maxZoom: 10
    minZoom: 0.1
    zoom: 1

  clampZoom = (value) ->
    value.clamp(I.minZoom, I.maxZoom) 

  zoomIn: (percentage) ->
    self.zoom clampZoom(I.zoom * (1 + percentage)) 

  zoomOut: (percentage) ->
    self.zoom clampZoom(I.zoom * (1 - percentage))

  zoom: (value) ->
    if value?
      I.zoom = clampZoom(value)

      return self
    else
      return I.zoom

