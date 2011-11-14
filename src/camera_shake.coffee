Camera.Shake = (I, self) ->
  Object.reverseMerge I,
    shakeIntensity: 20
    shakeCooldown: 0

  self.bind "afterUpdate", ->
    if I.shakeCooldown > 0
      I.shakeCooldown = I.shakeCooldown.approach(0, 1)

      I.transform.tx += signedRand(I.shakeIntensity)
      I.transform.ty += signedRand(I.shakeIntensity)

  shake: (duration = 10, intensity = 20) ->
    I.shakeCooldown = duration * I.zoom
    I.shakeIntensity = intensity * I.zoom

