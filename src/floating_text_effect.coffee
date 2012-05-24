###*
FloatingTextEffect is a simple subclass of `TextEffect`. It provides some defaults
to move the text upward and fade it out over 0.5 seconds.

    # adds a FloatingTextEffect to the engine
    # at 
    engine.add 'FloatingTextEffect'
      x: 50
      y: 50

@see TextEffect
@name FloatingTextEffect
@constructor
###
FloatingTextEffect = (I={}) ->
  Object.reverseMerge I,
    duration: 0.5
    velocity: Point(0, -90)
    
  self = TextEffect(I)
  
  return self