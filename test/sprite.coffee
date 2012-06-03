module "Sprite"

test "EMPTY and NONE", ->
  ok Sprite.EMPTY
  ok Sprite.NONE

asyncTest "callback and cache", ->
  sprite = Sprite.load 
  
module()

