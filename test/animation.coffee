test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
  
  log animation
  
  equals animation.active(), 0