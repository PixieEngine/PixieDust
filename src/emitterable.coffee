# TODO: LOL at name
Emitterable = (I={}, self) ->
  Object.reverseMerge I,
    batchSize: 1
    emissionRate: 1
    width: 0
    height: 0
    sprite: Sprite.EMPTY
    generator: {}
    particles: []
    particleCount: Infinity
    x: I.x
    y: I.y
    particleData:
      acceleration: Point(0, 0.1)
      age: 0
      color: "blue"
      duration: 1.5
      includedModules: ["Movable"]
      height: 2
      maxSpeed: 120
      offset: Point(0, 0)
      sprite: false
      spriteName: false
      velocity: Point(-0.25, 1)
      width: 2
      x: 0
      y: 0

  n = 0

  self.bind 'draw', (canvas) ->
    I.particles.invoke "draw", canvas
    
  self.bind 'overlay', 

  self.bind 'update', (dt) ->
    I.batchSize.times ->
      if n < I.particleCount && rand() < I.emissionRate
        particleProperties = Object.extend {}, I.particleData

        for key, value of I.generator
          if I.generator[key].call
            particleProperties[key] = I.generator[key](n, I)
          else
            particleProperties[key] = I.generator[key]

        particleProperties.x += particleProperties.offset.x
        particleProperties.y += particleProperties.offset.y

        I.particles.push(GameObject(particleProperties))

        n += 1

    I.particles = I.particles.select (particle) ->
      particle.update(dt)

    if n == I.particleCount && !I.particles.length
      I.active = false

  return {}

