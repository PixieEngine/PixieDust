DebugVelocity = (I={}, self) ->
  Object.reverseMerge I,
    velocity: Point(0, 0)

  self.bind 'afterTransform', (canvas) ->
    if engine.I.debugEnabled
      canvas.withTransform Matrix.translation(I.x, I.y), (canvas) ->            
        canvas.drawRect
          x: 0
          y: -2
          width: I.velocity.x * 10
          height: 4
          color: 'rgba(255, 255, 255, 0.75)'

        canvas.drawRect
          x: -2
          y: 0
          width: 4
          height: I.velocity.y * 10
          color: 'rgba(255, 255, 255, 0.75)'