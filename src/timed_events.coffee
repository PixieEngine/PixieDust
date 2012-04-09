TimedEvents = (I={}) ->
  every: (n) ->
    if I.age.mod(5) is 0
      doSomething()
