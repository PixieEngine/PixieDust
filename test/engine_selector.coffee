module "Engine"

test "#each", ->
  engine = Engine()

  obj1 = engine.add
    class: "Awesome"
    x: 0
    y: 5

  obj2 = engine.add
    class: "Awesome"
    x: 5
    y: 10

  obj3 = engine.add
    class: "Awesome"
    x: 5
    y: 10

  indexSum = 0

  engine.each (obj, index) ->
    if index is 0
      equal obj, obj1
    else if index is 1
      equal obj, obj2


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
  engine = Engine()

  obj1 = engine.add
    type: 'testObj'
    x: 4
    y: 20

  equals engine.first('.type=testObj'), obj1, "should find obj1"

  obj2 = engine.add
    type: 'testObj'
    x: 9
    y: 10

  equals engine.first('.type=testObj'), obj1, "should only find the first object"

module()