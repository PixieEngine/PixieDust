module "ActiveBounds"

test "should remove objects outside of activeBounds", ->
  obj = GameObject
    x: 50
    y: 50
    width: 32
    height: 32

  obj.include(ActiveBounds)

  destroySpy = false

  obj.bind 'destroy', ->
    destroySpy = true

  obj.I.x = 10000
  obj.I.y = 50

  obj.update()

  obj2 = GameObject
    x: 100
    y: 250
    width: 16
    height: 26

  obj2.include(ActiveBounds)

  destroySpy = false

  obj.bind 'destroy', ->
    destroySpy = true

  obj.I.x = 10000
  obj.I.y = 50

  obj.update()

  ok destroySpy, 'obj should be destroyed when it goes outside the x bounds'

module()
