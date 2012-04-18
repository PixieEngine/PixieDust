module "Flickerable"

test 'it should change the alpha value when the flicker duration has elapsed', ->
  window.flicker.player = GameObject
    alpha: 0.9

  flicker.player.include Flickerable   
  
  equals flicker.player.I.alpha, 0.9 
  
  
module()
