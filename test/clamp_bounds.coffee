module "ClampBounds"

test "should clamp the x-axis", ->
  # Mock the App dimensions
    # This is kind of gross, but we need to make sure
  # App.width and App.height are around for the tests.
  App ||= {}
  App.width ||= 480
  App.height ||= 320

  player = GameObject
    includedModules: ["ClampBounds"]
    width: 5
    height: 17

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

  player.I.y = 800
  player.update()

  equals player.I.y, App.height - player.I.height / 2  

module()