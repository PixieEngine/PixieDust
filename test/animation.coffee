test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
  
  log animation.active()
  
  equals animation.active(), 0