module "Engine"

test "#data", 1, ->
  engine = Engine
    backgroundColor: false

  engine.data.score = 0
  engine.data.score += 50
  
  equals engine.data.score, 

module()
