module "Sprite"

test "EMPTY and NONE", ->
  ok Sprite.EMPTY
  ok Sprite.NONE

asyncTest "callback and cache", ->
  spriteUrl = "http://images.pixie.strd6.com/avatars/1/thumb.png"
  
  callback = ->
    sprite2 = Sprite.load spriteUrl, (s) ->
      ok s.width isnt null
      ok s.width is sprite2.width

      start()

  sprite = Sprite.load spriteUrl, callback

  ok sprite.width is null

module()
