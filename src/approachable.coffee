Approachable = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {target, appraochBy} = cooldownOptions
      
      I.cooldowns[name] = I.cooldowns.approach(target, approachBy)

  addCooldown: (name, options={target: 0, approachBy: 1}) ->
    unless I.cooldowns[name]
      I.cooldowns[name] = options
      