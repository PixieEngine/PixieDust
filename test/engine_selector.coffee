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

  equals engine.find('.finable').length, 1

module()