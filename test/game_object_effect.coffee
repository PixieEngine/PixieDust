module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 1, ->
    fadedOut = true

  player.update(1)
  player.update(1)
  player.update(1)

  ok fadedOut

module()