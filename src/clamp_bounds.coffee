ClampBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    width: 32
    height: 32

  App ||= {}
  App.width ||= 480

  self.bind "update", ->
    I.x = I.x.clamp(I.width / 2, App.width - I.width / 2)
    I.y = I.y.clamp(I.height / 2, App.height - I.height / 2)
