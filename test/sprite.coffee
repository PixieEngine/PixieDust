module "Sprite"

test "EMPTY and NONE", ->
  ok Sprite.EMPTY
  ok Sprite.NONE

asyncTest "callback and cache", ->
  callback = (s) ->
    sprite = Sprite.load 
    
  sprite = Sprite.load "http://images.pixie.strd6.com/avatars/1/thumb.png?1316033907"
  
  
module()
