module "Sprite"

test "EMPTY and NONE", ->
  ok Sprite.EMPTY
  ok Sprite.NONE

asyncTest "callback and cache", ->
  spriteUrl = "http://images.pixie.strd6.com/avatars/1/thumb.png"
  
  callback = (s) ->
    sprite = Sprite.load 
    
  sprite = Sprite.load 
  
  
module()
