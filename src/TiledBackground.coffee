TiledBackground = (I={}) ->
  # Set some default properties
  Object.reverseMerge I,
    sprite: Sprite.EMPTY
   
  # Inherit from game object
  self = GameObject(I)

  self.unbind 'draw'
  self.bind 'draw', (canvas) ->
    I.sprite.fill(canvas, -16, -16, App.width, App.height)
  
  return self