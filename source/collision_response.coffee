CollisionResponse = (I={}, self) ->
    # Handle multi-include
  self.unbind ".Movable"
    
  self.bind 'update.Movable', (elapsedTime) ->
    t = (elapsedTime * I.velocity.x).abs()
    unit = I.velocity.x.sign()

    # x dimension
    t.times ->
      if self.collide(unit, 0, ".solid")
        I.velocity.x = 0
      else
        I.x += unit

    t = (elapsedTime * I.velocity.y).abs()
    unit = I.velocity.y.sign()
    # y dimension
    t.times ->
      if self.collide(0, unit, ".solid")
        I.velocity.y = 0
      else
        I.y += unit

  self.extend
    collide: (xOffset, yOffset, className) ->
      engine.find(className).inject false, (hit, block) ->
        hit || Collision.rectangular(self.bounds(xOffset, yOffset), block.bounds())
