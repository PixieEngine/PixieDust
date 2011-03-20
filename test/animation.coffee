test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45, -> equals animation.active(), 0