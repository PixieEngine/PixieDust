module "Controllable"

test "should move player left while key is pressed", ->
  player = GameObject
    x: 10
    y: 20
    width: 10
    height: 20

  player.include(Controllable)

  equals p

module()