module "Flickerable"

test 'it should change the alpha value when the flicker duration has elapsed', ->
  player = GameObject
    alpha: 0.9

  player.include Flickerable   
  
  equals player.I.alpha, 0.9 
  
  player.flicker
    duration: 20
    frequency: 5
    alpha: 0.2
    
  player.update()
  
  equals player.I.alpha, 0.2
  
module()
