ActiveBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    width: 8
    height: 8
    activeBounds: {
      x: 0
      y: 0
      width: App.width
      height: App.height
    }

  self.bind 'update', ->
    self.destroy() unless I.activeBounds.x <= I.x <= I.activeBounds.x + I.activeBounds.width
    self.destroy() unless I.activeBounds.y <= I.y <= I.activeBounds.y + I.activeBounds.height