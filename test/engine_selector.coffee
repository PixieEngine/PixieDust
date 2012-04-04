module "Engine"

test "#find", ->
  engine = Engine()

  engine.add
    findable: true
    x: 0
    y: 50

  equals engine.find('.findable').length, 1

  engine.add
    findable: true
    x: 50
    y: 30

  equals engine.find('.findable').length, 2

test "#first", ->
  obj1 = engine.add
    type: 'testObj'
    x: 4
    y: 20

  equals engine.first

module()