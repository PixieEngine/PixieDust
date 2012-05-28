module "GameObject.Effect"

test "fadeOut", ->
  player = GameObject()

  fadedOut = false

  player.fadeOut 30, (player) ->
    fadedOut = true

  30.times ->
    player.update()

  ok fadedOut

module()