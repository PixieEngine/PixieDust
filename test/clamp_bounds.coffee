module "ClampBounds"

test "should clamp the x-axis", ->
  player = GameObject
    includedModules: ["ClampBounds"]

  player.I.x = -400
  player.update()

  equals player.I.x, player.I.width / 2

  player.I.x = 800
  player.update()

  equals player.I.x, App.width - player.I.width / 2

test "should clamp the y-axis", ->
  player = GameObject
    includedModules: ["ClampBounds"]

  player.I.y = -400
  player.update()

  equals player.I.y, player.I.height / 2

  player.I.x = 800
  player.update()

  equals player.I.x, App.width - player.I.width / 2  

module()