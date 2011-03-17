(function() {
  function LoaderProxy() {
    return {
      draw: $.noop,
      fill: $.noop,
      frame: $.noop,
      update: $.noop,
      width: null,
      height: null
    };
  }
  
  function Sprite(image, sourceX, sourceY, width, height) {
    sourceX = sourceX || 0;
    sourceY = sourceY || 0;
    width = width || image.width;
    height = height || image.height;
    
    return {
      draw: function(canvas, x, y) {
        canvas.drawImage(
          image,
          sourceX,
          sourceY,
          width,
          height,
          x,
          y,
          width,
          height
        );
      },
      
      fill: function(canvas, x, y, width, height, repeat) {
        repeat = repeat || "repeat";
        var pattern = canvas.createPattern(image, repeat);
        canvas.fillColor(pattern);
        canvas.fillRect(x, y, width, height);
      },
      
      width: width,
      height: height
    };
  };
  
  Sprite.load = function(url, loadedCallback) {
    var img = new Image();
    var proxy = LoaderProxy();
    
    img.onload = function() {
      var tile = Sprite(this);
      
      $.extend(proxy, tile);
      
      if(loadedCallback) {
        loadedCallback(proxy);
      }
    };
    
    img.src = url;
    
    return proxy;
  };
 
  var pixieSpriteImagePath = "http://s3.amazonaws.com/images.pixie.strd6.com/sprites/";
  
  function fromPixieId(id, callback) {
    return Sprite.load(pixieSpriteImagePath + id + "/original.png", callback);
  };
  
  window.Sprite = function(name, callback) {
    if(App.Sprites) {
      var id = App.Sprites[name];
      if(id) {
        return fromPixieId(id, callback);
      } else {
        warn("Could not find sprite named: '" + name + "' in App.");
      }
    } else {
      // Treat name as URL
      return Sprite.load(name, callback);
    }
  };
  window.Sprite.EMPTY = window.Sprite.NONE = LoaderProxy();
  window.Sprite.fromPixieId = fromPixieId;
  window.Sprite.fromURL = Sprite.load;
}());