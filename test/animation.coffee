test "Animation should default to first frame", ->
  animation = Animation.fromPixieId 45
  
  timeoutId = setTimeout(checkActiveProperty, 5)
  
  checkActiveProperty = (animation) ->
    clearTimeout(timeoutId) if animation.active
  
  equals animation.active(), 0