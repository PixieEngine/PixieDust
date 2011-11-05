module "Fadeable"

test "fadeOut", ->
  player = GameObject()

  player.include(Fadeable)

  fadedOut = false

  player.fadeOut 30, (player) ->
    fadedOut = true

  30.times ->
    player.update()

  ok fadedOut

module()