TiledBackground = (I={}) ->
  # Set some default properties
  Object.reverseMerge I,
    color: "blue"
    height: 32
    width: 32
    sprite: Sprite.EMPTY
    # spriteName: "block" # Use the name of a sprite in the images folder

  # Inherit from game object
  self = GameObject(I)

  self.unbind 'draw'
  self.bind 'draw', (canvas) ->
    I.sprite.fill(canvas, -16, -16, App.width, App.height)
  
  return self