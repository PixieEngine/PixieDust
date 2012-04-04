module "EngineSelector"

test "engine#find", ->
  engine = Engine()

  engine.add
    findable: true
    x: 0
    y: 50

  equals engine.find('.findable')leng,


module()