Approachable = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {target, approachBy} = cooldownOptions
      
      I.cooldowns[name].value = I.cooldowns[name].value.approach(target, approachBy)

  addCooldown: (name, options={target: 0, approachBy: 1, value: 100}) ->
    unless I.cooldowns[name]
      I.cooldowns[name] = options
      