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
  The bind method adds a function as an event listener.
  
  @name bind
  @methodOf Bindable#
  
  @param {String} event The event to listen to.
  @param {Function} callback The function to be called when the specified event
  is triggered.
  ### 
  bounds: (xOffset, yOffset) ->
    x: I.x + (xOffset || 0)
    y: I.y + (yOffset || 0)
    width: I.width
    height: I.height

  centeredBounds: () ->
    x: I.x + I.width/2
    y: I.y + I.height/2
    xw: I.width/2
    yw: I.height/2

  center: () ->
    Point(I.x + I.width/2, I.y + I.height/2)

