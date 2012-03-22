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

    unless I.cooldowns[name]
      I.cooldowns[name] = {
        options.target
        options.approachBy
      }

      if value?
        I[name] = options.value
      else
        I[name] = 0 unless I[name]
