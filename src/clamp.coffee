Clamp = (I={}, self) ->
  Object.reverseMerge I,
    clamps: []
    
  self.bind "update", ->
    for property in I.clamps
      property.value = property.value.clamp(property.min, property.max)

  clamp: (property) ->
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