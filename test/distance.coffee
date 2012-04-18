module "Distance"

test 'it should be includable', ->
  player = GameObject()
  
  player.include Distance
  
  ok player.distance
  
test 'it should proxy to Point.distanc'

module()
