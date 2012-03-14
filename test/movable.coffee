module "Movable"

test "should update velocity", ->
  particle = GameObject
    velocity: Point(1, 2)
    x: 50
    y: 50

  player.include(Movable)

  player.update()

  equals player.I.x, 51, "x position updated according to velocity"
  equals player.I.y, 52, "y position updated according to velocity"

module()