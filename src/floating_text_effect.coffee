###*
FloatingTextEffect is a simple subclass of `TextEffect`. It provides some defaults
to move the text upward and fade it out over 0.5 seconds.

    # adds a FloatingTextEffect to the engine
    # at (50, 50). This effect will float upward
    # at 90 pixels/sec and will fadeOut over 0.5 seconds
    engine.add 'FloatingTextEffect'
      x: 50
      y: 50

@see TextEffect
@name Floating
@fieldOf 
@constructor
###
TextEffect.Floating = (I={}) ->
  Object.reverseMerge I,
    duration: 0.5
    velocity: Point(0, -90)

  return TextEffect(I)
