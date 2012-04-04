ActiveBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    width: 8
    height: 8
    activeBounds: Rectangle(0, 0, App.width, App.height)

  self.bind 'update', ->
    self.destroy() unless I.activeBounds.left <= I.x <= I.activeBounds.right
      