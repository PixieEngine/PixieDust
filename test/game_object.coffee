test "GameObject()", ->
  gameObject = GameObject()

test "GameObject.construct", ->
  gameObject = GameObject.construct
    x: 20
    y: 20
    
  equals(gameObject.position().x, 20)

