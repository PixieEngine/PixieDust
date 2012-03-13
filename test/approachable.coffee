module "Approachable"

test "objects count down each of their cooldowns", ->
  obj = GameObject
    cooldowns:
      bullet:
        target: 0
        approachBy: 1
        value: 100

  obj.include(Approachable)

  5.times ->
    obj.update()

  equals obj.I.active, true, "object is active until duration is exceeded"

  6.times ->
    obj.update()

  equals obj.I.active, false, "object is inactive after duration"

module()