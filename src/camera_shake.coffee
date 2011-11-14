Camera.Shake = (I, self) ->
  Object.reverseMerge I,
    shakeIntensity: 20
    shakeCooldown: 0

  self.bind "afterUpdate", ->
    I.shakeCooldown = I.shakeCooldown.approach(0, 1)

  self.transformFilterChain (transform) ->
    if I.shakeCooldown > 0
      transform.tx += signedRand(I.shakeIntensity)
      transform.ty += signedRand(I.shakeIntensity)

    return transform

  shake: (duration = 10, intensity = 20) ->
    I.shakeCooldown = duration * I.zoom
    I.shakeIntensity = intensity * I.zoom

