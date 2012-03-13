Approachable = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {approachBy, target, value} = cooldownOptions
      
      newValue = value.approach(target, approachBy)
      
      I.cooldowns[name].value = newValue
      
      if (newValue isnt value) and (newValue is target)
        self.trigger "cooldown:#{name}"

  addCooldown: (name, options={target: 0, approachBy: 1, value: 100}) ->
    unless I.cooldowns[name]
      I.cooldowns[name] = options
      