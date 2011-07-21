;
;
;
;
;
;
;
;
;
;
var Emitterable;
Emitterable = function(I, self) {
  var n, particles;
  I || (I = {});
  $.reverseMerge(I, {
    batchSize: 1,
    emissionRate: 1,
    color: "blue",
    width: 0,
    height: 0,
    generator: {},
    particleCount: Infinity,
    particleData: {
      acceleration: Point(0, 0.1),
      age: 0,
      color: "blue",
      duration: 30,
      includedModules: ["Movable"],
      height: 2,
      maxSpeed: 2,
      offset: Point(0, 0),
      sprite: false,
      spriteName: false,
      velocity: Point(-0.25, 1),
      width: 2
    }
  });
  particles = [];
  n = 0;
  return {
    before: {
      draw: function(canvas) {
        return particles.invoke("draw", canvas);
      },
      update: function() {
        I.batchSize.times(function() {
          var center, particleProperties;
          if (n < I.particleCount && rand() < I.emissionRate) {
            center = self.center();
            particleProperties = $.reverseMerge({
              x: center.x,
              y: center.y
            }, I.particleData);
            $.each(I.generator, function(key, value) {
              if (I.generator[key].call) {
                return particleProperties[key] = I.generator[key](n, I);
              } else {
                return particleProperties[key] = I.generator[key];
              }
            });
            particleProperties.x += particleProperties.offset.x;
            particleProperties.y += particleProperties.offset.y;
            particles.push(GameObject(particleProperties));
            return n += 1;
          }
        });
        particles = particles.select(function(particle) {
          return particle.update();
        });
        if (n === I.particleCount && !particles.length) {
          return I.active = false;
        }
      }
    }
  };
};;
(function($) {
  var defaults;
  defaults = {
    FPS: 30,
    age: 0,
    ambientLight: 1,
    backgroundColor: "#00010D",
    cameraTransform: Matrix.IDENTITY,
    excludedModules: [],
    includedModules: [],
    paused: false,
    showFPS: false,
    zSort: false
  };
  document.oncontextmenu = function() {
    return false;
  };
  $(document).bind("keydown", function(event) {
    return event.preventDefault();
  });
  /**
  The Engine controls the game world and manages game state. Once you 
  set it up and let it run it pretty much takes care of itself.

  You can use the engine to add or remove objects from the game world.

  There are several modules that can include to add additional capabilities 
  to the engine.

  The engine fires events that you  may bind listeners to. Event listeners 
  may be bound with <code>engine.bind(eventName, callback)</code>

  @name Engine
  @constructor
  @param I
  */
  /**
  Observe or modify the 
  entity data before it is added to the engine.
  @name beforeAdd
  @methodOf Engine#
  @event

  @param {Object} entityData
  */
  /**
  Observe or configure a <code>gameObject</code> that has been added 
  to the engine.
  @name afterAdd
  @methodOf Engine#
  @event

  @param {GameObject} object The object that has just been added to the
  engine.
  */
  /**
  Called when the engine updates all the game objects.

  @name update
  @methodOf Engine#
  @event
  */
  /**
  Called after the engine completes an update. Here it is 
  safe to modify the game objects array.

  @name afterUpdate
  @methodOf Engine#
  @event
  */
  /**
  Called before the engine draws the game objects on the canvas.

  The current camera transform <b>is</b> applied.

  @name beforeDraw
  @methodOf Engine#
  @event
  */
  /**
  Called after the engine draws on the canvas.

  The current camera transform <b>is not</b> applied, you may
  choose to apply it yourself using <code>I.cameraTransform</code>.

  @name draw
  @methodOf Engine#
  @event
  */
  return window.Engine = function(I) {
    var animLoop, canvas, defaultModules, draw, frameAdvance, lastStepTime, modules, queuedObjects, running, self, startTime, step, update;
    I || (I = {});
    $.reverseMerge(I, {
      objects: []
    }, defaults);
    frameAdvance = false;
    queuedObjects = [];
    running = false;
    startTime = +new Date();
    lastStepTime = -Infinity;
    animLoop = function(timestamp) {
      var delta, msPerFrame, remainder;
      timestamp || (timestamp = +new Date());
      msPerFrame = 1000 / I.FPS;
      delta = timestamp - lastStepTime;
      remainder = delta - msPerFrame;
      if (remainder > 0) {
        lastStepTime = timestamp - Math.min(remainder, msPerFrame);
        step();
      }
      if (running) {
        return window.requestAnimationFrame(animLoop);
      }
    };
    update = function() {
      var toRemove, _ref;
      window.updateKeys();
      self.trigger("update");
      _ref = I.objects.partition(function(object) {
        return object.update();
      }), I.objects = _ref[0], toRemove = _ref[1];
      toRemove.invoke("trigger", "remove");
      I.objects = I.objects.concat(queuedObjects);
      queuedObjects = [];
      return self.trigger("afterUpdate");
    };
    draw = function() {
      canvas.withTransform(I.cameraTransform, function(canvas) {
        var drawObjects;
        if (I.clear) {
          canvas.clear();
        } else if (I.backgroundColor) {
          canvas.fill(I.backgroundColor);
        }
        self.trigger("beforeDraw", canvas);
        if (I.zSort) {
          drawObjects = I.objects.copy().sort(function(a, b) {
            return a.I.zIndex - b.I.zIndex;
          });
        } else {
          drawObjects = I.objects;
        }
        return drawObjects.invoke("draw", canvas);
      });
      return self.trigger("draw", canvas);
    };
    step = function() {
      if (!I.paused || frameAdvance) {
        update();
        I.age += 1;
      }
      return draw();
    };
    canvas = I.canvas || $("<canvas />").powerCanvas();
    self = Core(I).extend({
      /**
      The add method creates and adds an object to the game world.

      Events triggered:
      <code>beforeAdd(entityData)</code>
      <code>afterAdd(gameObject)</code>

      @name add
      @methodOf Engine#
      @param entityData The data used to create the game object.
      @type GameObject
      */
      add: function(entityData) {
        var obj;
        self.trigger("beforeAdd", entityData);
        obj = GameObject.construct(entityData);
        self.trigger("afterAdd", obj);
        if (running && !I.paused) {
          queuedObjects.push(obj);
        } else {
          I.objects.push(obj);
        }
        return obj;
      },
      /**
      Returns a reference to the canvas.

      @name canvas
      @methodOf Engine#
      */
      canvas: function() {
        return canvas;
      },
      objects: function() {
        return I.objects;
      },
      objectAt: function(x, y) {
        var bounds, targetObject;
        targetObject = null;
        bounds = {
          x: x,
          y: y,
          width: 1,
          height: 1
        };
        self.eachObject(function(object) {
          if (object.collides(bounds)) {
            return targetObject = object;
          }
        });
        return targetObject;
      },
      eachObject: function(iterator) {
        return I.objects.each(iterator);
      },
      /**
      Start the game simulation.
      @methodOf Engine#
      @name start
      */
      start: function() {
        if (!running) {
          running = true;
          return window.requestAnimationFrame(animLoop);
        }
      },
      /**
      Stop the simulation.
      @methodOf Engine#
      @name stop
      */
      stop: function() {
        return running = false;
      },
      frameAdvance: function() {
        I.paused = true;
        frameAdvance = true;
        step();
        return frameAdvance = false;
      },
      play: function() {
        return I.paused = false;
      },
      /**
      Pause the simulation
      @methodOf Engine#
      @name pause
      */
      pause: function() {
        return I.paused = true;
      },
      paused: function() {
        return I.paused;
      },
      setFramerate: function(newFPS) {
        I.FPS = newFPS;
        self.stop();
        return self.start();
      }
    });
    self.attrAccessor("ambientLight");
    self.attrAccessor("backgroundColor");
    self.attrAccessor("cameraTransform");
    self.include(Bindable);
    defaultModules = ["Shadows", "HUD", "Developer", "SaveState", "Selector", "Collision", "Tilemap", "FPSCounter"];
    modules = defaultModules.concat(I.includedModules);
    modules = modules.without([].concat(I.excludedModules));
    modules.each(function(moduleName) {
      if (!Engine[moduleName]) {
        throw "#Engine." + moduleName + " is not a valid engine module";
      }
      return self.include(Engine[moduleName]);
    });
    self.trigger("init");
    return self;
  };
})(jQuery);;
/**
The <code>Collision</code> module provides some simple collision detection methods to engine.

@name Collision
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.Collision = function(I, self) {
  return {
    /**
    Detects collisions between a bounds and the game objects.

    @name collides
    @methodOf Engine.Collision#
    @param bounds The bounds to check collisions with.
    @param [sourceObject] An object to exclude from the results.
    */
    collides: function(bounds, sourceObject) {
      return I.objects.inject(false, function(collided, object) {
        return collided || (object.solid() && (object !== sourceObject) && object.collides(bounds));
      });
    },
    /**
    Detects collisions between a bounds and the game objects. 
    Returns an array of objects colliding with the bounds provided.

    @name collidesWith
    @methodOf Engine.Collision#
    @param bounds The bounds to check collisions with.
    @param [sourceObject] An object to exclude from the results.
    */
    collidesWith: function(bounds, sourceObject) {
      var collided;
      collided = [];
      I.objects.each(function(object) {
        if (!object.solid()) {
          return;
        }
        if (object !== sourceObject && object.collides(bounds)) {
          return collided.push(object);
        }
      });
      if (collided.length) {
        return collided;
      }
    },
    /**
    Detects collisions between a ray and the game objects.

    @name rayCollides
    @methodOf Engine.Collision#
    @param source The origin point
    @param direction A point representing the direction of the ray
    @param [sourceObject] An object to exclude from the results.
    */
    rayCollides: function(source, direction, sourceObject) {
      var hits, nearestDistance, nearestHit;
      hits = I.objects.map(function(object) {
        var hit;
        hit = object.solid() && (object !== sourceObject) && Collision.rayRectangle(source, direction, object.centeredBounds());
        if (hit) {
          hit.object = object;
        }
        return hit;
      });
      nearestDistance = Infinity;
      nearestHit = null;
      hits.each(function(hit) {
        var d;
        if (hit && (d = hit.distance(source)) < nearestDistance) {
          nearestDistance = d;
          return nearestHit = hit;
        }
      });
      return nearestHit;
    }
  };
};;
(function($) {
  /**
  The <code>Developer</code> module provides a debug overlay and methods for debugging and live coding.

  @name Developer
  @fieldOf Engine
  @module

  @param {Object} I Instance variables
  @param {Object} self Reference to the engine
  */  var developerHotkeys, developerMode, developerModeMousedown, namespace, objectToUpdate;
  Engine.Developer = function(I, self) {
    var boxHeight, boxWidth, font, lineHeight, margin, screenHeight, screenWidth, textStart;
    screenWidth = (typeof App !== "undefined" && App !== null ? App.width : void 0) || 480;
    screenHeight = (typeof App !== "undefined" && App !== null ? App.height : void 0) || 320;
    margin = 10;
    boxWidth = 240;
    boxHeight = 60;
    textStart = screenWidth - boxWidth + margin;
    font = "bold 9pt arial";
    lineHeight = 16;
    self.bind("draw", function(canvas) {
      if (I.paused) {
        canvas.withTransform(I.cameraTransform, function(canvas) {
          return I.objects.each(function(object) {
            canvas.fillColor('rgba(255, 0, 0, 0.5)');
            return canvas.fillRect(object.bounds().x, object.bounds().y, object.bounds().width, object.bounds().height);
          });
        });
        canvas.font(font);
        canvas.fillColor('rgba(0, 0, 0, 0.5)');
        canvas.fillRect(screenWidth - boxWidth, 0, boxWidth, boxHeight);
        canvas.fillColor('#fff');
        canvas.fillText("Developer Mode. Press Esc to resume", textStart, margin + 5);
        canvas.fillText("Shift+Left click to add boxes", textStart, margin + 5 + lineHeight);
        return canvas.fillText("Right click red boxes to edit properties", textStart, margin + 5 + 2 * lineHeight);
      }
    });
    self.bind("init", function() {
      var fn, key, _results;
      window.updateObjectProperties = function(newProperties) {
        if (objectToUpdate) {
          return $.extend(objectToUpdate, GameObject.construct(newProperties));
        }
      };
      $(document).unbind("." + namespace);
      $(document).bind("mousedown." + namespace, developerModeMousedown);
      _results = [];
      for (key in developerHotkeys) {
        fn = developerHotkeys[key];
        _results.push((function(key, fn) {
          return $(document).bind("keydown." + namespace, key, function(event) {
            event.preventDefault();
            return fn();
          });
        })(key, fn));
      }
      return _results;
    });
    return {};
  };
  namespace = "engine_developer";
  developerMode = false;
  objectToUpdate = null;
  developerModeMousedown = function(event) {
    var object;
    if (developerMode) {
      console.log(event.which);
      if (event.which === 3) {
        if (object = engine.objectAt(event.pageX, event.pageY)) {
          parent.editProperties(object.I);
          objectToUpdate = object;
        }
        return console.log(object);
      } else if (event.which === 2 || keydown.shift) {
        return typeof window.developerAddObject === "function" ? window.developerAddObject(event) : void 0;
      }
    }
  };
  return developerHotkeys = {
    esc: function() {
      developerMode = !developerMode;
      if (developerMode) {
        return engine.pause();
      } else {
        return engine.play();
      }
    },
    f3: function() {
      return Local.set("level", engine.saveState());
    },
    f4: function() {
      return engine.loadState(Local.get("level"));
    },
    f5: function() {
      return engine.reload();
    }
  };
})(jQuery);;
/**
The <code>FPSCounter</code> module tracks and displays the framerate.

@name FPSCounter
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.FPSCounter = function(I, self) {
  var framerate;
  $.reverseMerge(I, {
    showFPS: false
  });
  framerate = Framerate({
    noDOM: true
  });
  return self.bind("draw", function(canvas) {
    if (I.showFPS) {
      canvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace");
      canvas.fillColor("#FFF");
      canvas.fillText("fps: " + framerate.fps, 6, 18);
    }
    return framerate.rendered();
  });
};;
/**
The <code>HUD</code> module provides an extra canvas to draw to. GameObjects that respond to the
<code>drawHUD</code> method will draw to the HUD canvas. The HUD canvas is not cleared each frame, it is
the responsibility of the objects drawing on it to manage that themselves.

@name HUD
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.HUD = function(I, self) {
  var hudCanvas;
  hudCanvas = $("<canvas width=" + App.width + " height=" + App.height + " />").powerCanvas();
  hudCanvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace");
  self.bind("draw", function(canvas) {
    var hud;
    I.objects.each(function(object) {
      return typeof object.drawHUD === "function" ? object.drawHUD(hudCanvas) : void 0;
    });
    hud = hudCanvas.element();
    return canvas.drawImage(hud, 0, 0, hud.width, hud.height, 0, 0, hud.width, hud.height);
  });
  return {};
};;
/**
The <code>SaveState</code> module provides methods to save and restore the current engine state.

@name SaveState
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.SaveState = function(I, self) {
  var savedState;
  savedState = null;
  return {
    rewind: function() {},
    /**
    Save the current game state and returns a JSON object representing that state.

    @name saveState
    @methodOf Engine.SaveState#
    */
    saveState: function() {
      return savedState = I.objects.map(function(object) {
        return $.extend({}, object.I);
      });
    },
    /**
    Loads the game state passed in, or the last saved state, if any.

    @name loadState
    @methodOf Engine.SaveState#
    @param [newState] The game state to load.
    */
    loadState: function(newState) {
      if (newState || (newState = savedState)) {
        I.objects.invoke("trigger", "remove");
        I.objects = [];
        return newState.each(function(objectData) {
          return self.add($.extend({}, objectData));
        });
      }
    },
    /**
    Reloads the current engine state, useful for hotswapping code.

    @name reload
    @methodOf Engine.SaveState#
    */
    reload: function() {
      var oldObjects;
      oldObjects = I.objects;
      I.objects = [];
      return oldObjects.each(function(object) {
        object.trigger("remove");
        return self.add(object.I);
      });
    }
  };
};;
/**
The <code>Selector</code> module provides methods to query the engine to find game objects.

@name Selector
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.Selector = function(I, self) {
  var instanceMethods;
  instanceMethods = {
    set: function(attr, value) {
      return this.each(function(item) {
        return item.I[attr] = value;
      });
    }
  };
  return {
    /**
    Get a selection of GameObjects that match the specified selector criteria. The selector language
    can select objects by id, class, or attributes.

    To select an object by id use "#anId"

    To select objects by class use "MyClass"

    To select objects by properties use ".someProperty" or ".someProperty=someValue"

    You may mix and match selectors. "Wall.x=0" to select all objects of class Wall with an x property of 0.

    @name find
    @methodOf Engine#
    @param {String} selector
    @type Array
    */
    find: function(selector) {
      var matcher, results;
      results = [];
      matcher = Engine.Selector.generate(selector);
      I.objects.each(function(object) {
        if (matcher.match(object)) {
          return results.push(object);
        }
      });
      return $.extend(results, instanceMethods);
    }
  };
};
$.extend(Engine.Selector, {
  parse: function(selector) {
    return selector.split(",").invoke("trim");
  },
  process: function(item) {
    var result;
    result = /^(\w+)?#?([\w\-]+)?\.?([\w\-]+)?=?([\w\-]+)?/.exec(item);
    if (result) {
      if (result[4]) {
        result[4] = result[4].parse();
      }
      return result.splice(1);
    } else {
      return [];
    }
  },
  generate: function(selector) {
    var ATTR, ATTR_VALUE, ID, TYPE, components;
    components = Engine.Selector.parse(selector).map(function(piece) {
      return Engine.Selector.process(piece);
    });
    TYPE = 0;
    ID = 1;
    ATTR = 2;
    ATTR_VALUE = 3;
    return {
      match: function(object) {
        var attr, attrMatch, component, idMatch, typeMatch, value, _i, _len;
        for (_i = 0, _len = components.length; _i < _len; _i++) {
          component = components[_i];
          idMatch = (component[ID] === object.I.id) || !component[ID];
          typeMatch = (component[TYPE] === object.I["class"]) || !component[TYPE];
          if (attr = component[ATTR]) {
            if ((value = component[ATTR_VALUE]) != null) {
              attrMatch = object.I[attr] === value;
            } else {
              attrMatch = object.I[attr];
            }
          } else {
            attrMatch = true;
          }
          if (idMatch && typeMatch && attrMatch) {
            return true;
          }
        }
        return false;
      }
    };
  }
});;
/**
The <code>Shadows</code> module provides a lighting extension to the Engine. Objects that have
an illuminate method will add light to the scene. Objects that have an true opaque attribute will cast
shadows.

@name Shadows
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.Shadows = function(I, self) {
  var shadowCanvas;
  shadowCanvas = $("<canvas width=640 height=480 />").powerCanvas();
  self.bind("draw", function(canvas) {
    var shadows;
    if (I.ambientLight < 1) {
      shadowCanvas.compositeOperation("source-over");
      shadowCanvas.clear();
      shadowCanvas.fill("rgba(0, 0, 0, " + (1 - I.ambientLight) + ")");
      shadowCanvas.compositeOperation("destination-out");
      shadowCanvas.withTransform(I.cameraTransform, function(shadowCanvas) {
        return I.objects.each(function(object, i) {
          if (object.illuminate) {
            shadowCanvas.globalAlpha(1);
            return object.illuminate(shadowCanvas);
          }
        });
      });
      shadows = shadowCanvas.element();
      return canvas.drawImage(shadows, 0, 0, shadows.width, shadows.height, 0, 0, shadows.width, shadows.height);
    }
  });
  return {};
};;
/**
The <code>Tilemap</code> module provides a way to load tilemaps in the engine.

@name Tilemap
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/Engine.Tilemap = function(I, self) {
  var clearObjects, map, updating;
  map = null;
  updating = false;
  clearObjects = false;
  self.bind("preDraw", function(canvas) {
    return map != null ? map.draw(canvas) : void 0;
  });
  self.bind("update", function() {
    return updating = true;
  });
  self.bind("afterUpdate", function() {
    updating = false;
    if (clearObjects) {
      I.objects.clear();
      return clearObjects = false;
    }
  });
  return {
    /**
    Loads a new may and unloads any existing map or entities.

    @name loadMap
    @methodOf Engine#
    */
    loadMap: function(name, complete) {
      clearObjects = updating;
      return map = Tilemap.load({
        name: name,
        complete: complete,
        entity: self.add
      });
    }
  };
};;
/**
This object keeps track of framerate and displays it by creating and appending an
html element to the DOM.

Once created you call snapshot at the end of every rendering cycle.

@name Framerate
@constructor
*/var Framerate;
Framerate = function(options) {
  var element, framerateUpdateInterval, framerates, numFramerates, renderTime, self, updateFramerate;
  options || (options = {});
  if (!options.noDOM) {
    element = $("<div>", {
      css: {
        color: "#FFF",
        fontFamily: "consolas, 'Courier New', 'andale mono', 'lucida console', monospace",
        fontWeight: "bold",
        paddingLeft: 4,
        position: "fixed",
        top: 0,
        left: 0
      }
    }).appendTo('body').get(0);
  }
  numFramerates = 15;
  framerateUpdateInterval = 250;
  renderTime = -1;
  framerates = [];
  updateFramerate = function() {
    var framerate, rate, tot, _i, _len;
    tot = 0;
    for (_i = 0, _len = framerates.length; _i < _len; _i++) {
      rate = framerates[_i];
      tot += rate;
    }
    framerate = (tot / framerates.length).round();
    self.fps = framerate;
    if (element) {
      return element.innerHTML = "fps: " + framerate;
    }
  };
  setInterval(updateFramerate, framerateUpdateInterval);
  /**
  Call this method everytime you render.

  @name rendered
  @methodOf Framerate#
  */
  return self = {
    rendered: function() {
      var framerate, newTime, t;
      if (renderTime < 0) {
        return renderTime = new Date().getTime();
      } else {
        newTime = new Date().getTime();
        t = newTime - renderTime;
        framerate = 1000 / t;
        framerates.push(framerate);
        while (framerates.length > numFramerates) {
          framerates.shift();
        }
        return renderTime = newTime;
      }
    }
  };
};;
/**
The default base class for all objects you can add to the engine.

GameObjects fire events that you may bind listeners to. Event listeners 
may be bound with <code>object.bind(eventName, callback)</code>

@name GameObject
@extends Core
@constructor
@instanceVariables age, active, created, destroyed, solid, includedModules, excludedModules
*/
/**
Triggered when the object is created.
@name create
@methodOf GameObject#
@event
*/
/**
Triggered when object is destroyed. Use 
the destroy event to add particle effects, play sounds, etc.

@name destroy
@methodOf GameObject#
@event
*/
/**
Triggered during every update step.

@name step
@methodOf GameObject#
@event
*/
/**
Triggered every update after the `step` event is triggered.

@name update
@methodOf GameObject#
@event
*/
/**
Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

@name remove
@methodOf GameObject#
@event
*/var GameObject;
GameObject = function(I) {
  var autobindEvents, defaultModules, modules, self;
  I || (I = {});
  /**
  @name I
  @memberOf GameObject#
  */
  $.reverseMerge(I, {
    age: 0,
    active: true,
    created: false,
    destroyed: false,
    solid: false,
    includedModules: [],
    excludedModules: []
  });
  self = Core(I).extend({
    /**
    Update the game object. This is generally called by the engine.

    @name update
    @methodOf GameObject#
    */
    update: function() {
      if (I.active) {
        self.trigger('step');
        self.trigger('update');
        I.age += 1;
      }
      return I.active;
    },
    /**
    Destroys the object and triggers the destroyed callback.

    @name destroy
    @methodOf GameObject#
    */
    destroy: function() {
      if (!I.destroyed) {
        self.trigger('destroy');
      }
      I.destroyed = true;
      return I.active = false;
    }
  });
  defaultModules = [Bindable, Bounded, Drawable, Durable];
  modules = defaultModules.concat(I.includedModules.invoke('constantize'));
  modules = modules.without(I.excludedModules.invoke('constantize'));
  modules.each(function(Module) {
    return self.include(Module);
  });
  self.attrAccessor("solid");
  autobindEvents = ['create', 'destroy', 'step'];
  autobindEvents.each(function(eventName) {
    var event;
    if (event = I[eventName]) {
      if (typeof event === "function") {
        return self.bind(eventName, event);
      } else {
        return self.bind(eventName, eval("(function() {" + event + "})"));
      }
    }
  });
  if (!I.created) {
    self.trigger('create');
  }
  I.created = true;
  return self;
};
/**
Construct an object instance from the given entity data.
@name construct
@memberOf GameObject
@param {Object} entityData
*/
GameObject.construct = function(entityData) {
  if (entityData["class"]) {
    return entityData["class"].constantize()(entityData);
  } else {
    return GameObject(entityData);
  }
};;
var GameUtil;
GameUtil = {
  readImageData: function(data, callback) {
    var ctx, getPixelColor, img;
    getPixelColor = function(imageData, x, y) {
      var index;
      index = (x + y * imageData.width) * 4;
      return [imageData.data[index + 0], imageData.data[index + 1], imageData.data[index + 2]].invoke("toColorPart").join('');
    };
    ctx = document.createElement('canvas').getContext('2d');
    img = new Image();
    img.onload = function() {
      var colors, imageData;
      ctx.drawImage(img, 0, 0);
      imageData = ctx.getImageData(0, 0, img.width, img.height);
      colors = [];
      img.height.times(function(y) {
        return img.width.times(function(x) {
          return colors.push(getPixelColor(imageData, x, y));
        });
      });
      return callback({
        colors: colors,
        width: img.width,
        height: img.height
      });
    };
    return img.src = data;
  }
};;
var Joysticks;
var __slice = Array.prototype.slice;
Joysticks = (function() {
  var AXIS_MAX, DEAD_ZONE, buttonMapping, displayInstallPrompt, joysticks, plugin, type;
  type = "application/x-boomstickjavascriptjoysticksupport";
  plugin = null;
  AXIS_MAX = 32767;
  DEAD_ZONE = AXIS_MAX * 0.125;
  joysticks = [];
  buttonMapping = {
    "A": 1,
    "B": 2,
    "C": 4,
    "D": 8,
    "X": 4,
    "Y": 8,
    "R": 32,
    "RB": 32,
    "R1": 32,
    "L": 16,
    "LB": 16,
    "L1": 16,
    "SELECT": 64,
    "BACK": 64,
    "START": 128,
    "HOME": 256,
    "GUIDE": 256,
    "ANY": 0xFFFFFF
  };
  displayInstallPrompt = function(text, url) {
    return $("<a />", {
      css: {
        backgroundColor: "yellow",
        color: "#000",
        display: "block",
        fontWeight: "bold",
        left: 0,
        padding: "1em",
        position: "absolute",
        textDecoration: "none",
        top: 0,
        width: "100%",
        zIndex: 2000
      },
      href: url,
      target: "_blank",
      text: text
    }).appendTo("body");
  };
  return {
    getController: function(i) {
      return {
        actionDown: function() {
          var buttons, stick;
          buttons = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if (stick = joysticks != null ? joysticks[i] : void 0) {
            return buttons.inject(false, function(down, button) {
              return down || stick.buttons & buttonMapping[button];
            });
          } else {
            return false;
          }
        },
        position: function(stick) {
          var joystick;
          if (stick == null) {
            stick = 0;
          }
          if (joystick = joysticks != null ? joysticks[i] : void 0) {
            return Joysticks.position(joystick, stick);
          } else {
            return Point(0, 0);
          }
        },
        axis: function(n) {
          var stick;
          if (stick = joysticks != null ? joysticks[i] : void 0) {
            return stick.axes[n];
          }
        },
        axes: function() {
          var stick;
          if (stick = joysticks != null ? joysticks[i] : void 0) {
            return stick.axes;
          }
        },
        buttons: function() {
          var stick;
          if (stick = joysticks != null ? joysticks[i] : void 0) {
            return stick.buttons;
          }
        }
      };
    },
    init: function() {
      if (!plugin) {
        plugin = document.createElement("object");
        plugin.type = type;
        plugin.width = 0;
        plugin.height = 0;
        $("body").append(plugin);
        plugin.maxAxes = 6;
        if (!plugin.status) {
          return displayInstallPrompt("Your browser does not yet handle joysticks, please click here to install the Boomstick plugin!", "https://github.com/STRd6/Boomstick/wiki");
        }
      }
    },
    position: function(joystick, stick) {
      var magnitude, p, ratio;
      if (stick == null) {
        stick = 0;
      }
      p = Point(joystick.axes[2 * stick], joystick.axes[2 * stick + 1]);
      magnitude = p.magnitude();
      if (magnitude > AXIS_MAX) {
        return p.norm();
      } else if (magnitude < DEAD_ZONE) {
        return Point(0, 0);
      } else {
        ratio = magnitude / AXIS_MAX;
        return p.scale(ratio / AXIS_MAX);
      }
    },
    states: function() {
      return plugin != null ? plugin.joysticks : void 0;
    },
    status: function() {
      return plugin != null ? plugin.status : void 0;
    },
    update: function() {
      return joysticks = JSON.parse(plugin.joysticksJSON());
    },
    joysticks: function() {
      return joysticks;
    }
  };
})();;
$(function() {
  /**
  The global keydown property lets your query the status of keys.

  <pre>
  # Examples:

  if keydown.left
    moveLeft()

  if keydown.a or keydown.space
    attack()

  if keydown.return
    confirm()

  if keydown.esc
    cancel()

  </pre>

  @name keydown
  @namespace
  */  var keyName, prevKeysDown;
  window.keydown = {};
  window.justPressed = {};
  prevKeysDown = {};
  keyName = function(event) {
    return jQuery.hotkeys.specialKeys[event.which] || String.fromCharCode(event.which).toLowerCase();
  };
  $(document).bind("keydown", function(event) {
    var key;
    key = keyName(event);
    return keydown[key] = true;
  });
  $(document).bind("keyup", function(event) {
    var key;
    key = keyName(event);
    return keydown[key] = false;
  });
  return window.updateKeys = function() {
    var key, value, _results;
    window.justPressed = {};
    for (key in keydown) {
      value = keydown[key];
      if (!prevKeysDown[key]) {
        justPressed[key] = value;
      }
    }
    prevKeysDown = {};
    _results = [];
    for (key in keydown) {
      value = keydown[key];
      _results.push(prevKeysDown[key] = value);
    }
    return _results;
  };
});;
/**
The Movable module automatically updates the position and velocity of
GameObjects based on the velocity and acceleration. It does not check
collisions so is probably best suited to particle effect like things.

@name Movable
@module
@constructor

@param {Object} I Instance variables
*/var Movable;
Movable = function(I) {
  $.reverseMerge(I, {
    acceleration: Point(0, 0),
    velocity: Point(0, 0)
  });
  I.acceleration = Point(I.acceleration.x, I.acceleration.y);
  I.velocity = Point(I.velocity.x, I.velocity.y);
  return {
    before: {
      update: function() {
        var currentSpeed;
        I.velocity = I.velocity.add(I.acceleration);
        if (I.maxSpeed != null) {
          currentSpeed = I.velocity.magnitude();
          if (currentSpeed > I.maxSpeed) {
            I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed);
          }
        }
        I.x += I.velocity.x;
        return I.y += I.velocity.y;
      }
    }
  };
};;
(function() {
  var ResourceLoader, typeTable;
  typeTable = {
    images: "png"
  };
  ResourceLoader = {
    urlFor: function(directory, name) {
      var type, _ref;
      directory = (typeof App !== "undefined" && App !== null ? (_ref = App.directories) != null ? _ref[directory] : void 0 : void 0) || directory;
      type = typeTable[directory];
      return "" + BASE_URL + "/" + directory + "/" + name + "." + type + "?" + MTIME;
    }
  };
  return window["ResourceLoader"] = ResourceLoader;
})();;
var Rotatable;
Rotatable = function(I) {
  I || (I = {});
  $.reverseMerge(I, {
    rotation: 0,
    rotationalVelocity: 0
  });
  return {
    before: {
      update: function() {
        return I.rotation += I.rotationalVelocity;
      }
    }
  };
};;
(function($) {
  var Sound, directory, format, loadSoundChannel, sounds, _ref;
  directory = (typeof App !== "undefined" && App !== null ? (_ref = App.directories) != null ? _ref.sounds : void 0 : void 0) || "sounds";
  format = "wav";
  sounds = {};
  loadSoundChannel = function(name) {
    var sound, url;
    url = "" + BASE_URL + "/" + directory + "/" + name + "." + format;
    return sound = $('<audio />', {
      autobuffer: true,
      preload: 'auto',
      src: url
    }).get(0);
  };
  Sound = function(id, maxChannels) {
    return {
      play: function() {
        return Sound.play(id, maxChannels);
      },
      stop: function() {
        return Sound.stop(id);
      }
    };
  };
  return $.extend(Sound, {
    play: function(id, maxChannels) {
      var channel, channels, freeChannels, sound;
      maxChannels || (maxChannels = 4);
      if (!sounds[id]) {
        sounds[id] = [loadSoundChannel(id)];
      }
      channels = sounds[id];
      freeChannels = $.grep(channels, function(sound) {
        return sound.currentTime === sound.duration || sound.currentTime === 0;
      });
      if (channel = freeChannels.first()) {
        try {
          channel.currentTime = 0;
        } catch (_e) {}
        return channel.play();
      } else {
        if (!maxChannels || channels.length < maxChannels) {
          sound = loadSoundChannel(id);
          channels.push(sound);
          return sound.play();
        }
      }
    },
    playFromUrl: function(url) {
      var sound;
      sound = $('<audio />').get(0);
      sound.src = url;
      sound.play();
      return sound;
    },
    stop: function(id) {
      var _ref2;
      return (_ref2 = sounds[id]) != null ? _ref2.stop() : void 0;
    }
  }, window.Sound = Sound);
})(jQuery);;
/**
The Sprite class provides a way to load images for use in games.

By default, images are loaded asynchronously. A proxy object is 
returned immediately but though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@name Sprite
@constructor
*/(function() {
  var LoaderProxy, Sprite, fromPixieId, pixieSpriteImagePath;
  LoaderProxy = function() {
    return {
      draw: $.noop,
      fill: $.noop,
      frame: $.noop,
      update: $.noop,
      width: null,
      height: null
    };
  };
  Sprite = function(image, sourceX, sourceY, width, height) {
    sourceX || (sourceX = 0);
    sourceY || (sourceY = 0);
    width || (width = image.width);
    height || (height = image.height);
    return {
      /**
      Draw this sprite on the given canvas at the given position.

      @name draw
      @methodOf Sprite#

      @param canvas
      @param x
      @param y
      */
      draw: function(canvas, x, y) {
        return canvas.drawImage(image, sourceX, sourceY, width, height, x, y, width, height);
      },
      fill: function(canvas, x, y, width, height, repeat) {
        var pattern;
        repeat || (repeat = "repeat");
        pattern = canvas.createPattern(image, repeat);
        canvas.fillColor(pattern);
        return canvas.fillRect(x, y, width, height);
      },
      width: width,
      height: height
    };
  };
  Sprite.loadSheet = function(name, tileWidth, tileHeight) {
    var directory, image, sprites, url, _ref;
    directory = (typeof App !== "undefined" && App !== null ? (_ref = App.directories) != null ? _ref.images : void 0 : void 0) || "images";
    url = "" + BASE_URL + "/" + directory + "/" + name + ".png?" + MTIME;
    console.log(url);
    sprites = [];
    image = new Image();
    image.onload = function() {
      var imgElement;
      imgElement = this;
      return (image.height / tileHeight).times(function(row) {
        return (image.width / tileWidth).times(function(col) {
          return sprites.push(Sprite(imgElement, col * tileWidth, row * tileHeight, tileWidth, tileHeight));
        });
      });
    };
    image.src = url;
    return sprites;
  };
  Sprite.load = function(url, loadedCallback) {
    var img, proxy;
    img = new Image();
    proxy = LoaderProxy();
    img.onload = function() {
      var tile;
      tile = Sprite(this);
      $.extend(proxy, tile);
      if (loadedCallback) {
        return loadedCallback(proxy);
      }
    };
    img.src = url;
    return proxy;
  };
  pixieSpriteImagePath = "http://pixieengine.com/s3/sprites/";
  fromPixieId = function(id, callback) {
    return Sprite.load(pixieSpriteImagePath + id + "/original.png", callback);
  };
  window.Sprite = function(name, callback) {
    var id;
    if (App.Sprites) {
      id = App.Sprites[name];
      if (id) {
        return fromPixieId(id, callback);
      } else {
        return warn("Could not find sprite named: '" + name + "' in App.");
      }
    } else {
      return window.Sprite.fromURL(name, callback);
    }
  };
  /**
  A sprite that draws nothing.

  @name EMPTY
  @fieldOf Sprite
  @constant
  @type Sprite
  */
  /**
  A sprite that draws nothing.

  @name NONE
  @fieldOf Sprite
  @constant
  @type Sprite
  */
  window.Sprite.EMPTY = window.Sprite.NONE = LoaderProxy();
  /**
  Loads a sprite with the given pixie id.

  @name fromPixieId
  @methodOf Sprite

  @param id
  @param [callback]

  @type Sprite
  */
  window.Sprite.fromPixieId = fromPixieId;
  /**
  Loads a sprite from a given url.

  @name fromURL
  @methodOf Sprite

  @param {String} url
  @param [callback]

  @type Sprite
  */
  window.Sprite.fromURL = Sprite.load;
  /**
  Loads a sprite with the given name.

  @name loadByName
  @methodOf Sprite

  @param {String} name
  @param [callback]

  @type Sprite
  */
  window.Sprite.loadByName = function(name, callback) {
    var directory, url, _ref;
    directory = (typeof App !== "undefined" && App !== null ? (_ref = App.directories) != null ? _ref.images : void 0 : void 0) || "images";
    url = "" + BASE_URL + "/" + directory + "/" + name + ".png?" + MTIME;
    return Sprite.load(url, callback);
  };
  return window.Sprite.create = Sprite;
})();;
(function() {
  var Map, fromPixieId, loadByName;
  Map = function(data, entityCallback) {
    var entity, loadEntities, spriteLookup, tileHeight, tileWidth, uuid, _ref;
    tileHeight = data.tileHeight;
    tileWidth = data.tileWidth;
    spriteLookup = {};
    _ref = App.entities;
    for (uuid in _ref) {
      entity = _ref[uuid];
      spriteLookup[uuid] = Sprite.fromURL(entity.tileSrc);
    }
    loadEntities = function() {
      if (!entityCallback) {
        return;
      }
      return data.layers.each(function(layer, layerIndex) {
        var entities, entity, entityData, x, y, _i, _len, _results;
        if (layer.name.match(/entities/i)) {
          if (entities = layer.entities) {
            _results = [];
            for (_i = 0, _len = entities.length; _i < _len; _i++) {
              entity = entities[_i];
              x = entity.x, y = entity.y, uuid = entity.uuid;
              entityData = $.extend({
                layer: layerIndex,
                sprite: spriteLookup[uuid],
                x: x,
                y: y
              }, App.entities[uuid], entity.properties);
              _results.push(entityCallback(entityData));
            }
            return _results;
          }
        }
      });
    };
    loadEntities();
    return $.extend(data, {
      draw: function(canvas, x, y) {
        return canvas.withTransform(Matrix.translation(x, y), function() {
          return data.layers.each(function(layer) {
            if (layer.name.match(/entities/i)) {
              return;
            }
            return layer.tiles.each(function(row, y) {
              return row.each(function(uuid, x) {
                var sprite;
                if (sprite = spriteLookup[uuid]) {
                  return sprite.draw(canvas, x * tileWidth, y * tileHeight);
                }
              });
            });
          });
        });
      }
    });
  };
  window.Tilemap = function(name, callback, entityCallback) {
    return fromPixieId(App.Tilemaps[name], callback, entityCallback);
  };
  fromPixieId = function(id, callback, entityCallback) {
    var proxy, url;
    url = "http://pixieengine.com/s3/tilemaps/" + id + "/data.json";
    proxy = {
      draw: $.noop
    };
    $.getJSON(url, function(data) {
      $.extend(proxy, Map(data, entityCallback));
      return typeof callback === "function" ? callback(proxy) : void 0;
    });
    return proxy;
  };
  loadByName = function(name, callback, entityCallback) {
    var directory, proxy, url, _ref;
    directory = (typeof App !== "undefined" && App !== null ? (_ref = App.directories) != null ? _ref.tilemaps : void 0 : void 0) || "data";
    url = "" + BASE_URL + "/" + directory + "/" + name + ".tilemap?" + (new Date().getTime());
    proxy = {
      draw: $.noop
    };
    $.getJSON(url, function(data) {
      $.extend(proxy, Map(data, entityCallback));
      return typeof callback === "function" ? callback(proxy) : void 0;
    });
    return proxy;
  };
  window.Tilemap.fromPixieId = fromPixieId;
  return window.Tilemap.load = function(options) {
    if (options.pixieId) {
      return fromPixieId(options.pixieId, options.complete, options.entity);
    } else if (options.name) {
      return loadByName(options.name, options.complete, options.entity);
    }
  };
})();;
;
;$(function(){ undefined });