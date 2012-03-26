module "ClampBounds"

test "should clamp the x-axis", ->
  player = GameObject()
  player.include(ClampBounds)

  # Mock App.width, App.height
  App = {}
  App.width = 480
  App.height = 320

  player.I.x = - 400
  player.update()

  equals player.I.x, player.I.width / 2

module()