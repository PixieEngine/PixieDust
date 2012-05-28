module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 1, (player) ->
    fadedOut = true

  player.update(2)

  ok fadedOut

module()