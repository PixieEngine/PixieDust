module "Flickerable"

window.flicker = {}

# sets up player object before each test
QUnit.testStart = ->
  window.flicker.player = GameObject
    alpha: 0.9

  flicker.player.include Flickerable   

test 'it should change the alpha value when the flicker duration has elapsed', ->
  equals flicker.player.I.alpha, 0.9 
  
  
module()
