module "Engine"

test "#data", 1, ->
  engine = Engine
    backgroundColor: false

  engine.data

module()
