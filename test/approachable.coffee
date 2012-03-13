module "Approachable"

test "objects count down each of their cooldowns", ->
  obj = GameObject
    cooldowns:
      bullet:
        target: 0
        approachBy: 1
        value: 83

  obj.include(Approachable)

  5.times ->
    obj.update()

  equals obj.I.cooldowns.bullet.value, 78, "bullet cooldown should decrease by 5"

  100.times ->
    obj.update()

  equals obj.I.cooldowns.bullet.value, 0, "bullet should not cool down part target value"

test "should handle negative value", ->
  obj = GameObject
    cooldowns:
      bullet:
        target: 0
        approachBy: 1
        value: -70

  obj.include(Approachable)

  11.times ->
    obj.update()

  equals obj.I.cooldowns.bullet.value, -59, "bullet cooldown should increase by 5"

  70.times ->
    obj.update()

  equals obj.I.cooldowns.bullet.value, 0, "bullet should not cooldown past target value"

test "#addCooldown", ->
  obj = GameObject()

  obj.include(Approachable)

  obj.addCooldown 'health'

  3.times ->
    obj.update()

  equals obj.I.cooldowns.health.value, 97, "health cooldown should exist and equal 97"  

module()