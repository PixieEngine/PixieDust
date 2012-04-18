module "Flickerable"

test 'it should set up defaults', ->
  player = GameObject()

  player.include Flickerable
  
  player.flicker()
  
  equals player.I.flickerAlpha, 0.5
  equals player.I.flickerFrequency, 3
  equals player.I.flickerDuration, 30

test 'it should change the alpha value when the flicker duration has elapsed', ->
  player = GameObject
    alpha: 0.9

  player.include Flickerable   
  
  equals player.I.alpha, 0.9 
  
  player.flicker
    duration: 20
    frequency: 5
    alpha: 0.2
    
  5.  
    
  player.update()
  equals player.I.alpha, 0.2
  
  player.update()
  equals player.I.alpha, 0.2
  
  player.update()
  equals player.I.alpha, 0.2
  
  player.update()
  equals player.I.alpha, 0.2
  
  player.update()
  equals player.I.alpha, 0.2
  
  player.update()
  equals player.I.alpha, 0.8
    
  
module()
