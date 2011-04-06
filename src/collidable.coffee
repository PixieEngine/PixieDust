Collidable = (I) ->
  I ||= {}
  
  solid_collision: (other) ->
    if (other.solid && other.bounds)
      if (Collision.rectangular(self, other))
        self.trigger('collision')
        other.trigger('collision')
        
        #TODO directional collisions

  collides_with: (other) ->
    if other.solid && other.bounds
      if Object.isArray(other)
        #TODO check for existing quad tree and clear it instead of making a new one
      
        quadTree = QuadTree()
        
        other.each (collidable) ->
          quadTree.insert(collidable)
          
        nearby = quadTree.retrieve(self)
        
        nearby.each (close_collider) ->
          self.solid_collision(close_collider)        
      else
        solid_collision(other)
