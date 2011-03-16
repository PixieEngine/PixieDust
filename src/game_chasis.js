(function($) {
  var specialKeys = {
    8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 
    19: "pause", 20: "capslock", 27: "esc", 32: "space", 
    33: "pageup", 34: "pagedown", 35: "end", 36: "home", 
    37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
    96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
    104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
    112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 
    118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 
    144: "numlock", 145: "scroll", 188: ",", 191: "/", 224: "meta"
  };
  
  $(function() {
    /**
    * @name Game
    */
    window.Game = (function () {
      var keydownListeners = {};
      var keyheldListeners = {};
      var keyupListeners = {};
      
      var prevKeysDown = {};
      var keysDown = {};
      var keysUp = {};
      
      var step = 0;
      var score = 0;
      
      var drawCallback = $.noop;
      
      var self = {
        draw: function(fn) {
          drawCallback = fn;
        },
        
        exec: function(command) {
          var result = '';

          try {
            result = eval(command);
          } catch(e) {
            result = e.message;
          }
          
          return result;
        },
        
        keydown: function(key, fn) {
          if(fn) {
            keydownListeners[key] = keydownListeners[key] || [];
            
            keydownListeners[key].push(fn);
          } else {
            return prevKeysDown[key];
          }
        },
        
        keyheld: function(key, fn) {
          keyheldListeners[key] = keyheldListeners[key] || [];
          
          keyheldListeners[key].push(fn);
        },
        
        keyup: function(key, fn) {
          keyupListeners[key] = keyupListeners[key] || [];
          
          keyupListeners[key].push(fn);
        },
        
        score: function(val) {
          if (val !== undefined) {
            score += val;      
            return self;
          } else {
            return score;
          }    
        },
        
        setFramerate: function(newValue) {
          self.stop();
          
          setInterval(function() {
            checkInputs();
            self.trigger('update');
          
            drawCallback(canvas);
          
            step += 1;
          }, 1000 / newValue);
        },        
        
        step: function() {
          return step;
        },
        
        stop: function() {
          clearInterval(loopInterval);
        },
        
        update: function(fn) {
          self.unbind('update');
          self.bind('update', fn);
        },
        
        width: App.width,
        height: App.height
      };
      
      $.extend(self, Bindable());
      
      function triggerListener(listener) {
        listener();
      }
      
      function checkInputs() {
        var listeners;
        
        $.each(keysDown, function(key, down) {
          listeners = null;
          if(prevKeysDown[key] && !keysUp[key]) {
            listeners = keyheldListeners[key];
          } else if(down || (keysUp[key] && !prevKeysDown[key])) {
            listeners = keydownListeners[key];
          }
          
          if(listeners) {
            listeners.each(triggerListener);
          }
        });
        
        $.each(keysUp, function(key, up) {
          listeners = null;
          listeners = keyupListeners[key];
          
          if(listeners) {
            listeners.each(triggerListener);
          }
        });
        
        prevKeysDown = {};
        $.each(keysDown, function(key, down) {
          if(down) {
            prevKeysDown[key] = true;
          }
        });
        keysUp = {};
      }
      
      var loopInterval = setInterval(function() {
        checkInputs();
        self.trigger('update');
        
        drawCallback(canvas);
        
        step += 1;
      }, 33.3333);
      
      function keyName(event) {
        return specialKeys[event.which] ||
          String.fromCharCode(event.which).toLowerCase();
      }
      
      $(document).bind("keydown", function(event) {
        keysDown[keyName(event)] = true;
        if(/textarea|select/i.test( event.target.nodeName ) || event.target.type === "text" || event.target.type === "password") {
          // Don't prevent default
        } else {
          event.preventDefault();
        }
      });
      
      $(document).bind("keyup", function(event) {
        keysDown[keyName(event)] = false;
        keysUp[keyName(event)] = true;
        if(/textarea|select/i.test( event.target.nodeName ) || event.target.type === "text" || event.target.type === "password") {
          // Don't prevent default
        } else {
          event.preventDefault();
        }
      });
      
      return self;
    }());
    
    var canvas = $("canvas").powerCanvas();
    
    Game.canvas = canvas;
  });
}(jQuery));


