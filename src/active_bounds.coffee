###*
The ActiveBounds module automatically destroys objects that
are outside of the specified bounds. The default bounds are
the dimensions of your game. Useful for bullet type objects.

    bullet = GameObject
      x: 10
      y: 50
      width: 20
      height: 20
      velocity: Point(120, 0)

    bullet.include ActiveBounds

    # => bullet will be removed when it
         goes outside of the game bounds.
    
    bullet2 = GameObject
      x: 50
      y: 50
      width: 30
      height: 20
      activeBounds: Rectangle
        x: 30
        y: 20
        width: 100
        height 100

        

ActiveBounds module
@name ActiveBounds
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
ActiveBounds = (I={}, self) ->
  Object.reverseMerge I,
    activeBounds: Rectangle
      x: 0
      y: 0
      width: App.width
      height: App.height

  self.bind 'update', ->
    self.destroy() unless I.activeBounds.left <= I.x <= I.activeBounds.right
    self.destroy() unless I.activeBounds.top <= I.y <= I.activeBounds.bottom
