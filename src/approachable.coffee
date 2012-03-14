Approachable = (I, self) ->
  Object.reverseMerge I,
    cooldowns: {}

  self.bind "update", ->
    for name, cooldownOptions of I.cooldowns
      {approachBy, target} = cooldownOptions
            
      I[name] = I[name].approach(target, approachBy)

  cooldown: (name, options={target: 0, approachBy: 1}) ->
    unless I.cooldowns[name]
      I.cooldowns[name] = options
      I[name] = value if options.value?
      