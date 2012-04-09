TimedEvents = (I={}) ->
  every: (n) ->
    if I.age.mod(n) is 0
      doSomething()
