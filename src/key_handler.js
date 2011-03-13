function KeyHandler(I) {
  I = I || {};
  
  $.reverseMerge(I, {
    keydown: {},
    keyheld: {},
    keyup: {},
  });
  
  return {
    /**
    * @returns true if event should be passed on to other handlers.
    */
    keydown: function(key) {
      if(I.keydown[key]) {
        return I.keydown[key]();
      } else {
        return true;
      }
    },
    
    keyheld: function(key) {
      if(I.keyheld[key]) {
        return I.keyheld[key]();
      } else {
        return true;
      }
    },
    
    keyup: function(key) {
      if(I.keyup[key]) {
        return I.keyup[key]();
      } else {
        return true;
      }
    }
  };
}