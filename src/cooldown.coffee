###*
The Cooldown module provides a declarative way to manage cooldowns on
GameObject's properties.

<code><pre>
# Health regeneration
player = GameObject
  health: 50

player.cooldown "health",
  target: 100

player.update()
</pre></code>

<code><pre>
# Shoot Timeout
player = GameObject()

player.cooldown "shootTimer"

player.I.shootTimer = 10
</pre></code>

@name Cooldown
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Cooldown = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {approachBy, target} = cooldownOptions

      I[name] = I[name].approach(target, approachBy)

  cooldown: (name, options={}) ->
    {target, approachBy, value} = options

    target ||= 0
    approachBy = 1 unless approachBy?

    # Set the cooldown data
    I.cooldowns[name] = {
      target
      approachBy
    }

    if value?
      # Use the value given if any
      I[name] = options.value
    else
      # Initialize field if it doesn't exist
      I[name] = 0 unless I[name]
