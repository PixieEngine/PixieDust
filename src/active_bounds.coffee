###*
The ActiveBounds module automatically destroys objects that
are outside of the specified bounds. The default bounds are
the dimensions of your game. Useful for bull

    player = Core
      x: 10
      y: 50
      width: 20
      height: 20
      other: "stuff"
      more: "properties"
    
    player.position()
    # => Uncaught TypeError: Object has no method 'position'
    
    player.include(Bounded)
    
    # now player has all the methods provided by this module
    player.position()
    # => {x: 10, y: 50}

@see GameObject

Bounded module
@name Bounded
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
