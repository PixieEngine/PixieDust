module "Clampable"

test "#clamp", ->
  o = GameObject
    x: 1500

  max = 100

  o.clamp
    x:
      min: 0
      max: max

  o.trigger "afterUpdate"

  equals o.I.x, max

module()
