Engine.Flash = (I, self) ->
  Object.reverseMerge I,
    flashColor: Color(0, 0, 0, 0)
    flashDuration: 12
    flashCooldown: 0
    flashTargetAlpha: 0

  self.bind 'update', ->
    if I.flashCooldown > 0
      I.flashColor.a = I.flashColor.a.approach(I.flashTargetAlpha, 1 / I.flashDuration).clamp(0, 1)      
      I.flashColor.a = 0 if I.flashColor.a < 0.00001
      I.flashColor.a = 1 if I.flashColor.a > 0.9999

      I.flashCooldown = I.flashCooldown.approach(0, 1)

  self.bind 'overlay', (canvas) ->
    canvas.fill(I.flashColor)

  flash: (color, targetAlpha, duration) ->
    I.flashColor = Color(color || 'white') 
    I.flashTargetAlpha = (targetAlpha || 0)
    I.flashCooldown = (duration || 12)
    I.flashDuration = (duration || 12)
