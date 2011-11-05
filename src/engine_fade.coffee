Engine.Fade = (I, self) ->      
  fadeIn: (duration = 30, color = 'black') ->
    I.flashColor = Color(color) 
    I.flashCooldown = (duration)
    I.flashDuration = (duration)
    I.flashTargetAlpha = 0

  fadeOut: (duration = 30, color = 'transparent') ->
    I.flashColor = Color(color)
    I.flashCooldown = (duration)
    I.flashDuration = (duration)
    I.flashTargetAlpha = 1
