module "Flickerable"

test 'it should change the alpha value when the flicker duration has elapsed', ->
  player = GameObject
    alpha: 0.9

  player.include Flickerable   
  
  equals player.I.alpha, 0.9 
  
  player.flicker 20, 5, 0.2
    
  player.update()
  
  equals player.I.alpha, 0.2
  
  4.times ->
    
  
module()
