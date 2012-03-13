module "Approachable"

test "objects count down each of their cooldowns", ->
  obj = GameObject
    cooldowns:
      bullet:
        target: 3
        approachBy: 1
        value: 83

  obj.include(Approachable)

  5.times ->
    obj.update()

  equals obj.I.cooldowns.bullet.value, 78, "bullet cooldown should decrease by 5"

  100.times ->
    obj.update()

  equals obj.I.cooldowns.bullet.value, 3, "bullet should not cool down part target value"

test "should handle negative value", ->
  obj = GameObject
    cooldowns:
      powerup:
        target: 0
        approachBy: 1
        value: -70

  obj.include(Approachable)

  11.times ->
    obj.update()

  equals obj.I.cooldowns.powerup.value, -59, "powerup cooldown should increase by 5"

  70.times ->
    obj.update()

  equals obj.I.cooldowns.powerup.value, 0, "powerup should not cooldown past target value"

test "#addCooldown", 6, ->
  obj = GameObject()

  obj.include(Approachable)

  obj.addCooldown 'health'

  3.times ->
    obj.update()

  equals obj.I.cooldowns.health.value, 97, "health cooldown should exist and equal 97"  

  obj.addCooldown 'turbo'
    target: 5
    approachBy: 3
    value: 50

  4.times ->
    obj.update()

  equals obj.I.cooldowns.health.value, 93, "health should continue of cool down when new cooldowns are added"

  equals obj.I.cooldowns.turbo.value, 38, "turbo should cool down normally"

module()