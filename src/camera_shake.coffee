Camera.Shake = (I, self) ->
  Object.reverseMerge I,
    shakeIntensity: 20
    shakeCooldown: 0

  shake: (duration = 10, intensity = 20) ->
    I.shakeCooldown = duration * I.zoom
    I.shakeIntensity = intensity * I.zoom
