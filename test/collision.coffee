module "Collision"

test "circular", ->
  c1 = {x: 0, y: 0, radius: 2}
  c2 = {x: 4, y: 3, radius: 4}
  c3 = {x: 5, y: 6, radius: 1}

  equal Collision.circular(c1, c2), true
  equal Collision.circular(c1, c3), false
  equal Collision.circular(c2, c3), true

test "collides (single objects)", 1, ->
  player = GameObject
    x: 0
    y: 0
    width: 10
    height: 10

  enemy = GameObject
    x: 5
    y: 5
    width: 10
    height: 10

  Collision.collide player, enemy, (p, e) ->
    ok(true)

test "collides (single and array)", 2, ->
  player = GameObject
    x: 0
    y: 0
    width: 10
    height: 10

  enemy = GameObject
    x: 5
    y: 5
    width: 10
    height: 10

  enemy2 = GameObject
    x: -5
    y: -5
    width: 10
    height: 10

  Collision.collide player, [enemy, enemy2], (p, e) ->
    ok(true)

test "Collision.rayRectangle", ->
  rect = GameObject
    x: 25
    y: 0
    width: 10
module()

