module "Controllable"

# sets up player object before each test
QUnit.testStart = ->


test "should move player left while key is pressed", ->  
  player.include(Controllable)

  # Mock the keydown object
  window.keydown = {}
  window.keydown.left = true

  player.update()

  equals player.I.x, 9

  player.update()

  equals player.I.x, 8

test "should move player right while key is pressed", ->
  player = GameObject
    x: 10
    y: 20
    width: 10
    height: 20

  player.include(Controllable)

  # Mock the keydown object
  window.keydown = {}
  window.keydown.left = true

  player.update()

  equals player.I.x, 9

  player.update()

  equals player.I.x, 8

test "should move player up while key is pressed", ->
  ;

test "should move player down while key is pressed", ->
  ;  

test "should move player back and forth when keys are changed", ->
  ;

test "should move player according to their speed", ->
  ;

module()