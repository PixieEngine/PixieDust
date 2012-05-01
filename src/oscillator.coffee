###*
Creates an oscillator function with the given parameters.

@name Oscillator
@constructor
@param {Number} amplitude How much to scale the oscillator function value
@param {Number} period How fast the osciallator function repeats
@param {Number} offset How much to offset the cr
###
Oscillator = (options={}) ->
  {amplitude, period, offset} = options

  amplitude = 1 unless amplitude?
  period = 1 unless period?
  offset = 0 unless offset?

  return (t) ->
    amplitude * Math.cos(Math.TAU * t / period + offset)
