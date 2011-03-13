Collidable = (I) ->
  I ||= {}
  
  solid_collision: (other) ->
    if (other.solid && other.bounds)
      if (Collision.rectangular(self, other))
        self.trigger('collision')
        other.trigger('collision')

