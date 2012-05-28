module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 1, ->
    fadedOut = true

  player.trigger ""
  player.update(1)
  player.update(1)
  player.update(1)

  equals player.I.alpha, 0, "Player has faded out"
  ok fadedOut, "callback was called"

module()