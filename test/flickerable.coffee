module "Flickerable"

# sets up player object before each test
QUnit.testStart = ->
  window.player = GameObject
    alpha: 1

  player.include Flickerable   

test 'it should change the alpha value when the flicker duration has elapsed', ->
  player.
  
  
module()