TimedEvents = (I={}) ->
  every: (n, fn) ->
    if I.age.mod(n) is 0
      doSomething()
