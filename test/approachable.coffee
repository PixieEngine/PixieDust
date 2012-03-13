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

  equals obj.I.cooldowns.bullet.value, 95, "bullet cooldown should decrease by 5"

module()