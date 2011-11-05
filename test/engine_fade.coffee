module "Engine"

test "#fadeIn", ->
  engine = Engine 
    backgroundColor: 'black'
    includedModules: ["Flash", "Fade"]

  engine.fadeIn()  

  ok engine.I.flashColor.equal(Color('black')) 
  equal engine.I.flashDuration, 30
  equal engine.I.flashCooldown, 30
  equal engine.I.flashTargetAlpha, 0

  engine.update()

  ok engine.I.flashColor.a < 1
  equal engine.I.flashCooldown, 29

test "#fadeOut", ->
  engine = Engine 
    backgroundColor: 'black'
    includedModules: ["Flash", "Fade"]

  engine.fadeOut()

  ok engine.I.flashColor.equal(Color(0, 0, 0, 0))
  equal engine.I.flashDuration, 30
  equal engine.I.flashCooldown, 30
  equal engine.I.flashTargetAlpha, 1  

  engine.update()

  ok engine.I.flashColor.a > 0
  equal engine.I.flashCooldown, 29

module()