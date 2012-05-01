CollisionResponse = (I={}, self) ->
  self.bind 'update', ->   
    I.velocity.x.abs().times ->
      if self.collide(I.velocity.x.sign(), 0, ".solid")
        I.velocity.x = 0
      else
        I.x += I.velocity.x.sign()
  
    I.velocity.y.abs().times ->   
      if self.collide(0, I.velocity.y.sign(), ".solid")          
        I.velocity.y = 0
      else
        I.y += I.velocity.y.sign()  
                          
  self.extend
    collide: (xOffset, yOffset, className) ->
      engine.find(className).inject false, (hit, block) ->
        hit || Collision.rectangular(self.bounds(xOffset, yOffset), block.bounds())
