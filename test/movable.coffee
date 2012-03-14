module "Movable"

test "should update velocity", ->
  particle = GameObject
    velocity: Point(1, 2)
    x: 50
    y: 50

  particle.include(Movable)

  particle.update()

  equals particle.I.x, 51, "x position updated according to velocity"
  equals particle.I.y, 52, "y position updated according to velocity"

module()