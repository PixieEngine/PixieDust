module "Controllable"

# sets up player object before each test
QUnit.testStart = ->
  window.player = GameObject
    x: 10
    y: 20
    width: 10
    height: 20

  player.include(Controllable)    

  # Mock the keydown object
  window.keydown = {}

test "should move player left while key is pressed", ->  
  window.keydown.left = true

  player.update()

  equals player.I.x, 9

  player.update()

  equals player.I.x, 8

  window.keydown.left = false

  equals player.I.x, 8

test "should move player right while key is pressed", ->
  window.keydown.right = true

  player.update()

  equals player.I.x, 11

  player.update()

  equals player.I.x, 12

  window.keydown.right = false

  equals player.I.x, 12

test "should move player up while key is pressed", ->
  window.keydown.up = true

  player.update()

  equals player.I.y, 19

  player.update()

  equals player.I.y, 18

  window.keydown.up = false

  equals player.I.y, 18

test "should move player down while key is pressed", ->
  window.keydown.down = true

  player.update()

  equals player.I.y, 21

  player.update()

  equals player.I.y, 22

  window.keydown.down = false

  equals player.I.y, 22 

test "should move player back and forth when keys are changed", ->
  window.keydown.down = true

  player.update()

  equals player.I.y, 21

  window.keydown.down = false
  window.keydown.up = true

  player.update()

  equals player.I.y, 20

test "should move player according to their speed", ->
  player.I.speed = 3

  window.keydown.down = true

  player.update()

  equals player.I.y, 23

test "should stay in place if two different directions are held", ->
  window.keydown.left = true
  window.keydown.right = true

  p

module()