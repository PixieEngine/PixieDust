Follow = (I={}, self) ->
  Object.reverseMerge I,
    followSpeed: 1
    velocity: Point(0, 0) 

  follow: (obj) ->
    I.velocity = obj.position().subtract(self.position()).norm().scale(I.followSpeed)
