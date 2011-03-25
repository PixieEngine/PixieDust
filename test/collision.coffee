module "Collision"

test "circular", ->
  c1 = {x: 0, y: 0, radius: 2}
  c2 = {x: 4, y: 3, radius: 4}
  c3 = {x: 5, y: 6, radius: 1}

  equal Collision.circular(c1, c2), true
  equal Collision.circular(c1, c3), false
  equal Collision.circular(c2, c3), true
  
module()

