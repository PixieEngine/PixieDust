ClampBounds = (I={}, self) ->
  Object.reverseMerge I,
    x: 0
    y: 0
    width: 32
    height: 32

  # This is kind of gross, but we need to ma
  App ||= {}
  App.width ||= 480
  App.height ||= 320

  self.bind "update", ->
    I.x = I.x.clamp(I.width / 2, App.width - I.width / 2)
    I.y = I.y.clamp(I.height / 2, App.height - I.height / 2)
