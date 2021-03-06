module "Oscillator"

test "various values", ->
  # Cosine Oscillator
  o = Oscillator
    period: 30
    amplitude: 10

  equals o(0), 10
  equals o(30), 10
  equals o(15), -10
  equals o(7.5).toFixed(6), 0
  equals o(22.5).toFixed(6), 0

  # Sine Oscillator
  o = Oscillator
    period: 30
    amplitude: 10
    offset: -(Math.TAU / 4)

  equals o(0).toFixed(6), 0
  equals o(30).toFixed(6), 0
  equals o(15).toFixed(6), 0
  equals o(7.5).toFixed(6), 10
  equals o(22.5).toFixed(6), -10

# Clear out the module
module()