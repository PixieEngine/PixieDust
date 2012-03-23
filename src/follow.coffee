Follow = (I={}, self) ->
  Object.reverseMerge I,
    followSpeed: 1
    velocity: Point(0, 0) 

  follow: (obj) ->
    I.velocity = obj.I.position().subtract(self.position()).norm()

  self.bind "update", ->
    I.velocity = player.position().subtract(self.position()).norm().scale(5)

  return self
