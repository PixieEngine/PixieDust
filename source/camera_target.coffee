CameraTarget = (I={}) ->
  Object.reverseMerge I,
    target: "Player.controller=0"
    lead: 1.25

  self = GameObject(I).extend
    draw: -> # NOP

  self.on "update", (canvas) ->
    if target = engine.first(I.target)
      targetPosition = target.position()
      targetVelocity = target.velocity()

      # Camera should lead target's position by a multiple of the targets velocity
      position = targetPosition.add(targetVelocity.scale(I.lead))

      I.x = position.x
      I.y = position.y

  return self
