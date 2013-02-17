DustParticle = (I={}, self) ->
  Object.extend I,
    color: 'rgb(100, 100, 100)'
    duration: 0.2
    fadeOut: true
    maxSpeed: 90
    
  I.velocity = [
    Point(-60, -30)
    Point(40, -15)
    Point(-20, -7)
    Point(60, -30)
    Point(40, -15)
    Point(20, -7)
  ].rand()
  
  I.acceleration = Point(0, 60)
         
  return {}

DustEmitter = (I={}) ->
  Object.reverseMerge I,
    duration: 3
    particleCount: 20
    batchSize: 5
    x: 0
    y: 0
    zIndex: 50
    generator:
      includedModules: ["DustParticle"]
      radius: (n) ->
        [2, 3, 1].wrap(n)

  self = Emitter(I)

  return self
