test "Animation should default to first frame", ->
  data = 
    "animations": [
      "name": "first animation"
      "speed": "110"
      "frames": [5,1,2]
    ]

  animation = Animation(data)
  
  equals animation.active(), 5