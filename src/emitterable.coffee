# TODO: LOL at name
Emitterable = (I, self) ->
  I ||= {}

  Object.reverseMerge I,
    batchSize: 1
    emissionRate: 1
    color: "blue"
    width: 0
    height: 0
    generator: {}
    particleCount: Infinity
    particleData:
      acceleration: Point(0, 0.1)
      age: 0
      color: "blue"
      duration: 30
      includedModules: ["Movable"]
      height: 2
      maxSpeed: 2
      offset: Point(0, 0)
      sprite: false
      spriteName: false
      velocity: Point(-0.25, 1)
      width: 2

  particles = []
  n = 0

  self.bind 'draw', (canvas) ->
    particles.invoke "draw", canvas

  self.bind 'update', ->
    I.batchSize.times ->
      if n < I.particleCount && rand() < I.emissionRate
        center = self.center()

        particleProperties = Object.reverseMerge {
          x: center.x
          y: center.y
        }, I.particleData

        for key, value of I.generator
          if I.generator[key].call
            particleProperties[key] = I.generator[key](n, I)
          else
            particleProperties[key] = I.generator[key]

        particleProperties.x += particleProperties.offset.x
        particleProperties.y += particleProperties.offset.y

        particles.push(GameObject(particleProperties))

        n += 1

    particles = particles.select (particle) ->
      particle.update()

    if n == I.particleCount && !particles.length
      I.active = false

