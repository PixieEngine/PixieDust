module "ClampBounds"

test "should clamp the x-axis", ->
  player = GameObject()
  player.include(ClampBounds)

  # Hack in App.width, App.height 

  player.I.x = - 400
  player.update()

  equals player.I.x, player.I.width / 2

module()