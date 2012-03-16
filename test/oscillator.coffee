module "Oscillator"

test "various values", ->
  o = Oscillator
    period: 30
    amplitude: 10

  equals o(0), 10 # => 0
  equals o(30), 10 # => 0
  o(15) # => 0
  o(7.5) #=> 10
  o(22.5) #=> -10


# Clear out the module
module()