module "Oscillator"

test "various values", ->
  o = Oscillator
    period: 30
    amplitude: 10

  equals o(0), 10 # => 10
  equals o(30), 10 # => 10
  equals o(15), -10 # => -10
  equals o(7.5), 10 #=> 10
  equals o(22.5), -10 #=> -10


# Clear out the module
module()