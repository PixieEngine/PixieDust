SpeechBox = (I) ->
  I ||= {}
  
  $.reverseMerge I,
    backgroundColor: 'rgb(175, 175, 175)'
    strokeColor: '#000'
    strokeWidth: 5
    textColor: 'rgb(0, 0, 0)'
    textDelay: 1
    gradient: true
    height: 50
    padding: 15
    width: 400
    text: "This is a test blah blah blh blah This is a test blah blah blah blah This is a test blah blah blah blah This is a test blah blah blah blah"
    x: 50
    y: 40
  
  chars = I.text.split("")
  text = [[]]
  line = 1
  
  addLine = ->
    line++
    text[line - 1] = []
  
  stringLine = (line) ->
    text[line - 1].join("")  
  
  counter = 0
  
  if (I.gradient)
    grad = Game.canvas.createLinearGradient(0, 0, 0, 3*I.height)
    grad.addColorStop(0, I.backgroundColor)
    grad.addColorStop(1, 'rgb(0, 0, 0)')  
          
  self =
    draw: (canvas) ->
      if (I.gradient)
        canvas.context().fillStyle = grad
      else
        canvas.fillColor I.backgroundColor
     
      canvas.strokeColor I.strokeColor 
      canvas.fillRoundRect(I.x + I.strokeWidth / 2, I.y + I.strokeWidth / 2 , I.width - I.strokeWidth, I.height, 20, I.strokeWidth)
     
      canvas.fillColor I.textColor
      (line).times (i) ->
        canvas.fillText(stringLine(i + 1), I.x + I.padding, I.y + (15 * (i + 1))) 
      
    update: ->
      counter = (counter + 1) % I.textDelay
      
      if(counter <= 0)
        currentChar = chars.shift()
        
        text[line - 1].push(currentChar)
                
        if Game.canvas.measureText(stringLine(line)) > I.width - I.padding*2
          addLine()
          
