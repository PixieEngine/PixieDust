module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 1, ->
    fadedOut = true

  player.update(1)
  player.update(1)
  player.update(1)

  ok player.I.a
  ok fadedOut, "callback was called"

module()