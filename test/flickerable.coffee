module "Flickerable"

# sets up player object before each test
QUnit.testStart = ->
  window.player = GameObject
    x: 10
    y: 20
    width: 10
    height: 20
    speed: 3

  player.include Flickerable   

test 'it should change the alpha value when the flicker ', ->
  
  
module()
