###*
The Bounded module is used to provide basic data about the
location and dimensions of the including object

Bounded module
@name Bounded
@constructor
###

Bounded = (I) ->
  I ||= {}

  ###*
  The bounds method returns infomation about the location 
  of the object and its dimensions with optional offsets

  @name bounds
  @methodOf Bounded#

  @param {number} xOffset the amount to shift the x position 
  @param {number} yOffset the amount to shift the y position
  ### 
  bounds: (xOffset, yOffset) ->
    x: I.x + (xOffset || 0)
    y: I.y + (yOffset || 0)
    width: I.width
    height: I.height

  ###*
  The centeredBounds method returns infomation about the center
  of the object along with the midpoint of the width and height

  @name centeredBounds
  @methodOf Bounded#
  ###  
  centeredBounds: () ->
    x: I.x + I.width/2
    y: I.y + I.height/2
    xw: I.width/2
    yw: I.height/2

  ###*
  The center method returns the {@link Point} that is
  the center of the object

  @name center
  @methodOf Bounded#
  ###  
  center: () ->
    Point(I.x + I.width/2, I.y + I.height/2)

