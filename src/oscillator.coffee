Oscillator = (options={}) ->
  {amplitude, period, offset} = options

  amplitude = 1 unless amplitude?
  period = 1 unless period?

  return (t) ->
    amplitude * Math.cos(Math.TAU * t / period)
