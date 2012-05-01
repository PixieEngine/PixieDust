###*
The score module overlays a 

@name Oscillator
@constructor
@param {Number} amplitude How much to scale the oscillator function value
@param {Number} period How fast the osciallator function repeats
@param {Number} offset How much to offset the created osciallator function. Useful for translating between sin and cosine functions.
###
Score = (I={}, self) ->
  Object.reverseMerge I,
    score: 0
    scoreColor: 'black'
    scorePosition:
      x: App.width - 100
      y: 20

  self.bind 'overlay', (canvas) ->
    canvas.font('14px Helvetica')

    canvas.drawText
      color: I.scoreColor
      x: I.scorePosition.x
      y: I.scorePosition.y
      text: "Score: #{I.score}"
