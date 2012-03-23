module "Follow"

test "testing for equality", ->
  player = GameObject
    x: 50
    y: 50
    width: 10
    height: 10

  enemy = GameObject
    x: 0
    y: 50
    widht: 10
    height: 10

  enemy.include(Follow)

  enemy.follow(player)

  equals

module()