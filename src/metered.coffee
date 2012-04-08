Metered = (I={}, self) ->
  Object.reverseMerge I,
    meters: []
    
  self.bind 'overlay', (canvas) ->
    I.meters.each (meterData) ->
      {
        borderColor,
        color,
        font, 
        height, 
        nameColor, 
        name,
        position: {x, y}
        radius,
        showName,
        text,
        width
      } = meterData
      
      if not I[name]
        I[name] = 100
      
      if not 
      
      ratio = I[name] / I["max#{name.capitalize()}"]
      
      if showName || text
        canvas.font(font)    
        canvas.drawText
          color: nameColor
          x: x
          y: y + 10
          text: text || name.capitalize()     
      
      canvas.drawRect
        color: color
        x: x
        y: y + 15
        width: width * ratio
        height: height      
          
      canvas.drawRoundRect
        x: x
        y: y + 15
        width: width
        height: height
        radius: radius
        stroke:
          color: borderColor
          width: 1.5  
    
  addMeter: (options={}) ->
    Object.reverseMerge options,
      borderColor: 'white'
      showName: false
      color: 'green'
      nameColor: 'white'
      font: '14px Helvetica'
      height: 10
      position: 
        x: 0
        y: 0
      radius: 2
      text: null
      width: 100 
    
    I.meters.push options