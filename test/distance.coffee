module "Distance"

test 'it should be includable', ->
  player = GameObject()
  
  player.include Distance
  
  ok player.distance

module()
