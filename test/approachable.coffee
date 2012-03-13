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

  equals obj.I.bullet, 78, "bullet cooldown should decrease by 5"

  100.times ->
    obj.update()

  equals obj.I.bullet, 3, "bullet should not cool down part target value"

test "should handle negative value", ->
  obj = GameObject
    powerup: -70
    cooldowns:
      powerup:
        target: 0
        approachBy: 1

  obj.include(Approachable)

  11.times ->
    obj.update()

  equals obj.I.powerup, -59, "powerup cooldown should increase by 5"

  70.times ->
    obj.update()

  equals obj.I.powerup, 0, "powerup should not cooldown past target value"

test "adding many cooldowns to defaults", 3, ->
  obj = GameObject
    cool: 20
    rad: 0
    tubular: 0
    cooldowns:
      cool:
        approachBy: 5
        target: -5
      rad:
        approachBy: 0.5
        target: 2
      tubular:
        approachBy: 1
        target: 1000

  obj.include(Approachable)

  4.times ->
    obj.update()

  equals obj.I.cool, 0
  equals obj.I.rad, 2
  equals obj.I.tubular, 4

test "#addCooldown", 3, ->
  obj = GameObject()

  obj.include(Approachable)

  obj.addCooldown 'health'

  3.times ->
    obj.update()

  equals obj.I.health, 97, "health cooldown should exist and equal 97"  

  obj.addCooldown 'turbo', 50,
    target: 5
    approachBy: 3

  4.times ->
    obj.update()

  equals obj.I.health, 93, "health should continue of cool down when new cooldowns are added"
  equals obj.I.turbo, 38, "turbo should cool down normally"

module()