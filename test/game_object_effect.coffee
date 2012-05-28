module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 1, ->
    fadedOut = true

  player.trigger "update", 0.5
  player.trigger "afterUpdate", 0.5
  player.trigger "update", 0.5
  player.trigger "afterUpdate", 0.5

  equals player.I.alpha, 0, "Player has faded out"
  ok fadedOut, "callback was called"

module()