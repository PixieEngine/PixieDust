module "GameObject"

test "()", ->
  gameObject = GameObject()

test "construct", ->
  gameObject = GameObject.construct
    x: 20
    y: 20
    
  equals(gameObject.position().x, 20)

test "[event] step ", ->
  gameObject = GameObject
    step: "equals(I.age, 0, 'Age should be 0 on first step')"
    
  gameObject.update()

module()

