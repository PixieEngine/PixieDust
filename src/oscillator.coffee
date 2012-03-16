Oscillator = (options={}) ->
  {amplitude, period, offset} = options

  amplitude = 1 unless amplitude?
  period = 1 unless period?
  offset = 0 unless

  return (t) ->
    amplitude * Math.cos(Math.TAU * t / period)
