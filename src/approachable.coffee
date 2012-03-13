Approachable = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {approachBy, target, value} = cooldownOptions
      
      newValue = value.approach(target, approachBy)
      
      I.cooldowns[name].value = newValue
      
      self.trigger "cooldown:#{name}", (newValue)

  addCooldown: (name, options={target: 0, approachBy: 1, value: 100}) ->
    unless I.cooldowns[name]
      I.cooldowns[name] = options
      