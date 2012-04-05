Text = (I={}) ->
  Object.reverseMerge I,
    duration: 40
    font: 'VT323'
    points: 500
    alpha: 1

  self = GameObject(I)

  self.bind "afterUpdate", ->
    I.y -= 1
    I.alpha = 1 - (I.age / I.duration)

  self.unbind "draw"
  self.bind "afterTransform", (canvas) ->
    canvas.font "20px #{I.font}"
    canvas.drawText
      color: "rgba(0, 0, 0, #{I.alpha})"
      x: I.x + 1
      y: I.y + 1
      text: I.points    

    canvas.drawText
      color: "rgba(255, 255, 255, #{I.alpha})"
      x: I.x
      y: I.y
      text: I.points

  return self
