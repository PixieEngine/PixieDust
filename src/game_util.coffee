GameUtil = 
  readImageData: (data, callback) ->
    getPixelColor = (imageData, x, y) ->
      index = (x + y * imageData.width) * 4
      return [
        imageData.data[index+0]
        imageData.data[index+1]
        imageData.data[index+2]
      ].invoke("toColorPart").join('')

    ctx = document.createElement('canvas').getContext('2d')
    img = new Image()
    img.onload = ->
      ctx.drawImage(img, 0, 0)
      imageData = ctx.getImageData(0, 0, img.width, img.height)

      colors = []
      img.height.times (y) ->
        img.width.times (x) ->
          colors.push getPixelColor(imageData, x, y)
          
      callback
        colors: colors
        width: img.width
        height: img.height

    img.src = data