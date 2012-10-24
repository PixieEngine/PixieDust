###*
The Cooldown module provides a declarative way to manage cooldowns on
GameObject's properties.

    # Health regeneration
    player = GameObject
      health: 50
    
    # health will approach 
    # 100 by 1 each update
    player.cooldown "health",
      target: 100
    
    player.update(1)
    
    player.I.health
    # => 51

    # Shoot Timeout
    player = GameObject()
    
    # by default the cooldown approached
    player.cooldown "shootTimer"
    
    player.I.shootTimer = 10 # => Pew! Pew!
    
    player.update(1)
    
    player.I.shootTimer # => 9

@name Cooldown
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
###
Cooldown = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", (dt) ->
    for name, cooldownOptions of I.cooldowns
      {approachBy, target} = cooldownOptions

      I[name] = I[name].approach(target, approachBy * dt)

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
