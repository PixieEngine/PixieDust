###*
The Durable module deactives a <code>GameObject</code> after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

<code><pre>
   enemy = GameObject
     x: 50
     y: 30
     duration: 5

   enemy.include(Durable)

   enemy.I.active
=> true

   6.times ->
     enemy.update()

   enemy.I.active
=> false
</pre></code>

@name Durable
@module
@constructor

@param {Object} I Instance variables
###
Durable = (I) ->
  Object.reverseMerge I,
    duration: -1

  before:
    update: () ->
      if I.duration != -1 && I.age >= I.duration
        I.active = false

