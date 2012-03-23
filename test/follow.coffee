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

  ok enemy.I.velocity.equal(Point(1, 0))

  fastEnemy = GameObject
    x: 50
    y: 100
    width: 10
    height: 10

  fastEnemy.include(Follow)
  fastEnemy.follow(player)

  ok fastEnemy.I.velocity()

module()