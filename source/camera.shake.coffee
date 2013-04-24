Camera.Shake = (I, self) ->
  Object.reverseMerge I,
    shakeIntensity: 20
    shakeCooldown: 0

  defaultParams =
    duration: 10
    intensity: 20

  self.bind "afterUpdate", ->
    I.shakeCooldown = I.shakeCooldown.approach(0, 1)

  self.transformFilterChain (transform) ->
    if I.shakeCooldown > 0
      transform.tx += signedRand(I.shakeIntensity)
      transform.ty += signedRand(I.shakeIntensity)

    return transform

  shake: (options={}) ->
    {duration, intensity} = Object.reverseMerge(options, defaultParams)

    I.shakeCooldown = duration * I.zoom
    I.shakeIntensity = intensity * I.zoom

    self

