module "Distance"

test 'it should be includable', ->
  player = GameObject()
  
  player.include Distance
  
  ok player.distance
  
test 'it should proxy to Point.distance', ->
  player = GameObject
    x: 50
    y: 50
    width: 10
    height: 10
    
  enemy = GameObject
    x: 110
    y: 

module()
