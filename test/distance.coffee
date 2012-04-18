module "Distance"

test 'it should be includable', ->
  player = GameObject()
  
  player.include Distance
  
  ok player.distance
  
test 'it should proxy to Point.distance', ->
  player = GameObject
    x: 50
    y: 

module()
