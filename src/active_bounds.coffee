ActiveBounds = (I={}, self) ->
  Object.reverseMerge I,
    activeBounds: Rectangle
      x: 0
      y: 0
      width: App.width
      height: App.height

  self.bind 'update', ->
    self.destroy() unless I.activeBounds.left <= I.x <= I.activeBounds.right
    self.destroy() unless I.activeBounds.top <= I.y <= I.activeBounds.bottom
