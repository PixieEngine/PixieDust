module "Flickerable"

test 'it should set up defaults', ->
  player = GameObject()

  player.include Flickerable
  
  player.flicker()
  
  equals player.I.flickerAlpha, 0.5
  equals player.I.flickerFrequency, 3
  equals player.I.flickerDuration, 30
  
test 'it should be able to set one param at a time', ->
  player = GameObject()
  
  player.include Flickerable

  player.flicker
    frequency: 20
    
  equals player.I.flickerAlpha, 0.5
  equals player.I.flickerFrequency, 20
  equals player.I.flickerDuration, 30
  
  enemy = GameObject()
  
  enemy.include Flickerable
  
  enemy.flicker
    alpha: 0.4
    
  equals enemy.I.flickerAlpha, 0.4
  equals enemy.I.flickerFrequency, 3
  equals enemy.I.flickerDuration, 30  
  
  boss = GameObject()
  
  boss.include Flickerable
  
  boss.flicker
    duration: 2
 
  equals boss.I.flickerAlpha, 0.5
  equals boss.I.flickerFrequency, 3
  equals boss.I.flickerDuration, 2    
 
test 'it should change the alpha value when the flicker duration has elapsed', ->
  player = GameObject
    alpha: 0.9

  player.include Flickerable   
  
  equals player.I.alpha, 0.9 
  
  player.flicker
    duration: 12
    frequency: 5
    alpha: 0.2
    
  5.times ->
    player.update()
    equals player.I.alpha, 0.2
    
  5.times ->
    player.update()
    equals player.I.alpha, 0.9
    
  player.update()
  equals player.I.alpha, 0.2
  
  # returns to original alpha when flicker duration hits 0
  player.update()
  equals player.I.alpha, 0.9
    
module()
