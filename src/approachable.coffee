Approachable = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {approachBy, target} = cooldownOptions
      
      newValue = I[name].approach(target, approachBy)
      
      I[name] = newValue

  addCooldown: (name, value=100, options={target: 0, approachBy: 1}) ->
    unless I.cooldowns[name]
      I.cooldowns[name] = options
      I[name] = value
      