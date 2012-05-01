###*
The Sprite class provides a way to load images for use in games.

By default, images are loaded asynchronously. A proxy object is 
returned immediately. Even though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@name Sprite
@constructor
###
Oscillator = (options={}) ->
  {amplitude, period, offset} = options

  amplitude = 1 unless amplitude?
  period = 1 unless period?
  offset = 0 unless offset?

  return (t) ->
    amplitude * Math.cos(Math.TAU * t / period + offset)
