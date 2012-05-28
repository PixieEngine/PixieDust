module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 1, (player) ->
    fadedOut = true

  player.update(1)

  ok fadedOut

module()