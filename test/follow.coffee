module "Follow"

test "should set the correct direction", ->
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

  ok enemy.I.direction.equal(Point(1, 0)), 'enemy should head toward player with velocity Point(1, 0)'

  rightEnemy = GameObject
    x: 100
    y: 50
    width: 10
    height: 10

  rightEnemy.include(Follow)
  rightEnemy.follow(player)

  ok rightEnemy.I.velocity.equal(Point(-1, 0)), 'rightEnemy should head toward player with velocity Point(-1, 0)'

module()