;
;
;
/**
Calculate the average value of an array. Returns undefined if some elements
are not numbers.

<code><pre>
[1, 3, 5, 7].average()
# => 4
</pre></code>

@name average
@methodOf Array#
@returns {Number} The average (arithmetic mean) of the list of numbers.
*/
var _base,
  __slice = Array.prototype.slice;

Array.prototype.average = function() {
  return this.sum() / this.length;
};

/**
Returns a copy of the array without null and undefined values.

<code><pre>
[null, undefined, 3, 3, undefined, 5].compact()
# => [3, 3, 5]
</pre></code>

@name compact
@methodOf Array#
@returns {Array} A new array that contains only the non-null values.
*/

Array.prototype.compact = function() {
  return this.select(function(element) {
    return element != null;
  });
};

/**
Creates and returns a copy of the array. The copy contains
the same objects.

<code><pre>
a = ["a", "b", "c"]
b = a.copy()

# their elements are equal
a[0] == b[0] && a[1] == b[1] && a[2] == b[2]
# => true

# but they aren't the same object in memory
a === b
# => false
</pre></code>

@name copy
@methodOf Array#
@returns {Array} A new array that is a copy of the array
*/

Array.prototype.copy = function() {
  return this.concat();
};

/**
Empties the array of its contents. It is modified in place.

<code><pre>
fullArray = [1, 2, 3]
fullArray.clear()
fullArray
# => []
</pre></code>

@name clear
@methodOf Array#
@returns {Array} this, now emptied.
*/

Array.prototype.clear = function() {
  this.length = 0;
  return this;
};

/**
Flatten out an array of arrays into a single array of elements.

<code><pre>
[[1, 2], [3, 4], 5].flatten()
# => [1, 2, 3, 4, 5]

# won't flatten twice nested arrays. call
# flatten twice if that is what you want
[[1, 2], [3, [4, 5]], 6].flatten()
# => [1, 2, 3, [4, 5], 6]
</pre></code>

@name flatten
@methodOf Array#
@returns {Array} A new array with all the sub-arrays flattened to the top.
*/

Array.prototype.flatten = function() {
  return this.inject([], function(a, b) {
    return a.concat(b);
  });
};

/**
Invoke the named method on each element in the array
and return a new array containing the results of the invocation.

<code><pre>
[1.1, 2.2, 3.3, 4.4].invoke("floor")
# => [1, 2, 3, 4]

['hello', 'world', 'cool!'].invoke('substring', 0, 3)
# => ['hel', 'wor', 'coo']
</pre></code>

@param {String} method The name of the method to invoke.
@param [arg...] Optional arguments to pass to the method being invoked.
@name invoke
@methodOf Array#
@returns {Array} A new array containing the results of invoking the named method on each element.
*/

Array.prototype.invoke = function() {
  var args, method;
  method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  return this.map(function(element) {
    return element[method].apply(element, args);
  });
};

/**
Randomly select an element from the array.

<code><pre>
[1, 2, 3].rand()
# => 2
</pre></code>

@name rand
@methodOf Array#
@returns {Object} A random element from an array
*/

Array.prototype.rand = function() {
  return this[rand(this.length)];
};

/**
Remove the first occurrence of the given object from the array if it is
present. The array is modified in place.

<code><pre>
a = [1, 1, "a", "b"]
a.remove(1)
# => 1

a
# => [1, "a", "b"]
</pre></code>

@name remove
@methodOf Array#
@param {Object} object The object to remove from the array if present.
@returns {Object} The removed object if present otherwise undefined.
*/

Array.prototype.remove = function(object) {
  var index;
  index = this.indexOf(object);
  if (index >= 0) {
    return this.splice(index, 1)[0];
  } else {
    return;
  }
};

/**
Returns true if the element is present in the array.

<code><pre>
["a", "b", "c"].include("c")
# => true

[40, "a"].include(700)
# => false
</pre></code>

@name include
@methodOf Array#
@param {Object} element The element to check if present.
@returns {Boolean} true if the element is in the array, false otherwise.
*/

Array.prototype.include = function(element) {
  return this.indexOf(element) !== -1;
};

/**
Call the given iterator once for each element in the array,
passing in the element as the first argument, the index of 
the element as the second argument, and <code>this</code> array as the
third argument.

<code><pre>
word = ""
indices = []
["r", "a", "d"].each (letter, index) ->
  word += letter
  indices.push(index)

# => ["r", "a", "d"]

word
# => "rad"

indices
# => [0, 1, 2]
</pre></code>

@name each
@methodOf Array#
@param {Function} iterator Function to be called once for each element in the array.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} this to enable method chaining.
*/

Array.prototype.each = function(iterator, context) {
  var element, i, _len;
  if (this.forEach) {
    this.forEach(iterator, context);
  } else {
    for (i = 0, _len = this.length; i < _len; i++) {
      element = this[i];
      iterator.call(context, element, i, this);
    }
  }
  return this;
};

/**
Call the given iterator once for each element in the array, 
passing in the element as the first argument, the index of 
the element as the second argument, and `this` array as the
third argument.

<code><pre>
[1, 2, 3].map (number) ->
  number * number
# => [1, 4, 9]
</pre></code>

@name map
@methodOf Array#
@param {Function} iterator Function to be called once for each element in the array.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} An array of the results of the iterator function being called on the original array elements.
*/

(_base = Array.prototype).map || (_base.map = function(iterator, context) {
  var element, i, results, _len;
  results = [];
  for (i = 0, _len = this.length; i < _len; i++) {
    element = this[i];
    results.push(iterator.call(context, element, i, this));
  }
  return results;
});

/**
Call the given iterator once for each pair of objects in the array.

<code><pre>
[1, 2, 3, 4].eachPair (a, b) ->
  # 1, 2
  # 1, 3
  # 1, 4
  # 2, 3
  # 2, 4
  # 3, 4
</pre></code>

@name eachPair
@methodOf Array#
@param {Function} iterator Function to be called once for each pair of elements in the array.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
*/

Array.prototype.eachPair = function(iterator, context) {
  var a, b, i, j, length, _results;
  length = this.length;
  i = 0;
  _results = [];
  while (i < length) {
    a = this[i];
    j = i + 1;
    i += 1;
    _results.push((function() {
      var _results2;
      _results2 = [];
      while (j < length) {
        b = this[j];
        j += 1;
        _results2.push(iterator.call(context, a, b));
      }
      return _results2;
    }).call(this));
  }
  return _results;
};

/**
Call the given iterator once for each element in the array,
passing in the element as the first argument and the given object
as the second argument. Additional arguments are passed similar to
<code>each</code>.

@see Array#each
@name eachWithObject
@methodOf Array#
@param {Object} object The object to pass to the iterator on each visit.
@param {Function} iterator Function to be called once for each element in the array.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} this
*/

Array.prototype.eachWithObject = function(object, iterator, context) {
  this.each(function(element, i, self) {
    return iterator.call(context, element, object, i, self);
  });
  return object;
};

/**
Call the given iterator once for each group of elements in the array,
passing in the elements in groups of n. Additional argumens are
passed as in each.

<code><pre>
results = []
[1, 2, 3, 4].eachSlice 2, (slice) ->
  results.push(slice)
# => [1, 2, 3, 4]

results
# => [[1, 2], [3, 4]]
</pre></code>

@see Array#each
@name eachSlice
@methodOf Array#
@param {Number} n The number of elements in each group.
@param {Function} iterator Function to be called once for each group of elements in the array.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} this
*/

Array.prototype.eachSlice = function(n, iterator, context) {
  var i, len;
  if (n > 0) {
    len = (this.length / n).floor();
    i = -1;
    while (++i < len) {
      iterator.call(context, this.slice(i * n, (i + 1) * n), i * n, this);
    }
  }
  return this;
};

/**
Pipe the input through each function in the array in turn. For example, if you have a
list of objects you can perform a series of selection, sorting, and other processing
methods and then receive the processed list. This array must contain functions that
accept a single input and return the processed input. The output of the first function
is fed to the input of the second and so on until the final processed output is returned.

@name pipeline
@methodOf Array#

@param {Object} input The initial input to pass to the first function in the pipeline.
@returns {Object} The result of processing the input by each function in the array.
*/

Array.prototype.pipeline = function(input) {
  var fn, _i, _len;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    fn = this[_i];
    input = fn(input);
  }
  return input;
};

/**
Returns a new array with the elements all shuffled up.

<code><pre>
a = [1, 2, 3]

a.shuffle()
# => [2, 3, 1]

a # => [1, 2, 3]
</pre></code>

@name shuffle
@methodOf Array#
@returns {Array} A new array that is randomly shuffled.
*/

Array.prototype.shuffle = function() {
  var shuffledArray;
  shuffledArray = [];
  this.each(function(element) {
    return shuffledArray.splice(rand(shuffledArray.length + 1), 0, element);
  });
  return shuffledArray;
};

/**
Returns the first element of the array, undefined if the array is empty.

<code><pre>
["first", "second", "third"].first()
# => "first"
</pre></code>

@name first
@methodOf Array#
@returns {Object} The first element, or undefined if the array is empty.
*/

Array.prototype.first = function() {
  return this[0];
};

/**
Returns the last element of the array, undefined if the array is empty.

<code><pre>
["first", "second", "third"].last()
# => "third"
</pre></code>

@name last
@methodOf Array#
@returns {Object} The last element, or undefined if the array is empty.
*/

Array.prototype.last = function() {
  return this[this.length - 1];
};

/**
Returns an object containing the extremes of this array.

<code><pre>
[-1, 3, 0].extremes()
# => {min: -1, max: 3}
</pre></code>

@name extremes
@methodOf Array#
@param {Function} [fn] An optional funtion used to evaluate each element to calculate its value for determining extremes.
@returns {Object} {min: minElement, max: maxElement}
*/

Array.prototype.extremes = function(fn) {
  var max, maxResult, min, minResult;
  fn || (fn = function(n) {
    return n;
  });
  min = max = void 0;
  minResult = maxResult = void 0;
  this.each(function(object) {
    var result;
    result = fn(object);
    if (min != null) {
      if (result < minResult) {
        min = object;
        minResult = result;
      }
    } else {
      min = object;
      minResult = result;
    }
    if (max != null) {
      if (result > maxResult) {
        max = object;
        return maxResult = result;
      }
    } else {
      max = object;
      return maxResult = result;
    }
  });
  return {
    min: min,
    max: max
  };
};

/**
Pretend the array is a circle and grab a new array containing length elements. 
If length is not given return the element at start, again assuming the array 
is a circle.

<code><pre>
[1, 2, 3].wrap(-1)
# => 3

[1, 2, 3].wrap(6)
# => 1

["l", "o", "o", "p"].wrap(0, 16)
# => ["l", "o", "o", "p", "l", "o", "o", "p", "l", "o", "o", "p", "l", "o", "o", "p"]
</pre></code>

@name wrap
@methodOf Array#
@param {Number} start The index to start wrapping at, or the index of the sole element to return if no length is given.
@param {Number} [length] Optional length determines how long result array should be.
@returns {Object} or {Array} The element at start mod array.length, or an array of length elements, starting from start and wrapping.
*/

Array.prototype.wrap = function(start, length) {
  var end, i, result;
  if (length != null) {
    end = start + length;
    i = start;
    result = [];
    while (i++ < end) {
      result.push(this[i.mod(this.length)]);
    }
    return result;
  } else {
    return this[start.mod(this.length)];
  }
};

/**
Partitions the elements into two groups: those for which the iterator returns
true, and those for which it returns false.

<code><pre>
[evens, odds] = [1, 2, 3, 4].partition (n) ->
  n.even()

evens
# => [2, 4]

odds
# => [1, 3]
</pre></code>

@name partition
@methodOf Array#
@param {Function} iterator
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} An array in the form of [trueCollection, falseCollection]
*/

Array.prototype.partition = function(iterator, context) {
  var falseCollection, trueCollection;
  trueCollection = [];
  falseCollection = [];
  this.each(function(element) {
    if (iterator.call(context, element)) {
      return trueCollection.push(element);
    } else {
      return falseCollection.push(element);
    }
  });
  return [trueCollection, falseCollection];
};

/**
Return the group of elements for which the return value of the iterator is true.

@name select
@methodOf Array#
@param {Function} iterator The iterator receives each element in turn as the first agument.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} An array containing the elements for which the iterator returned true.
*/

Array.prototype.select = function(iterator, context) {
  return this.partition(iterator, context)[0];
};

/**
Return the group of elements that are not in the passed in set.

<code><pre>
[1, 2, 3, 4].without ([2, 3])
# => [1, 4]
</pre></code>

@name without
@methodOf Array#
@param {Array} values List of elements to exclude.
@returns {Array} An array containing the elements that are not passed in.
*/

Array.prototype.without = function(values) {
  return this.reject(function(element) {
    return values.include(element);
  });
};

/**
Return the group of elements for which the return value of the iterator is false.

@name reject
@methodOf Array#
@param {Function} iterator The iterator receives each element in turn as the first agument.
@param {Object} [context] Optional context parameter to be used as `this` when calling the iterator function.
@returns {Array} An array containing the elements for which the iterator returned false.
*/

Array.prototype.reject = function(iterator, context) {
  return this.partition(iterator, context)[1];
};

/**
Combines all elements of the array by applying a binary operation.
for each element in the arra the iterator is passed an accumulator 
value (memo) and the element.

@name inject
@methodOf Array#
@returns {Object} The result of a
*/

Array.prototype.inject = function(initial, iterator) {
  this.each(function(element) {
    return initial = iterator(initial, element);
  });
  return initial;
};

/**
Add all the elements in the array.

<code><pre>
[1, 2, 3, 4].sum()
# => 10
</pre></code>

@name sum
@methodOf Array#
@returns {Number} The sum of the elements in the array.
*/

Array.prototype.sum = function() {
  return this.inject(0, function(sum, n) {
    return sum + n;
  });
};

/**
Multiply all the elements in the array.

<code><pre>
[1, 2, 3, 4].product()
# => 24
</pre></code>

@name product
@methodOf Array#
@returns {Number} The product of the elements in the array.
*/

Array.prototype.product = function() {
  return this.inject(1, function(product, n) {
    return product * n;
  });
};

/**
Merges together the values of each of the arrays with the values at the corresponding position.

<code><pre>
['a', 'b', 'c'].zip([1, 2, 3])
# => [['a', 1], ['b', 2], ['c', 3]]
</pre></code>

@name zip
@methodOf Array#
@returns {Array} Array groupings whose values are arranged by their positions in the original input arrays.
*/

Array.prototype.zip = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return this.map(function(element, index) {
    var output;
    output = args.map(function(arr) {
      return arr[index];
    });
    output.unshift(element);
    return output;
  });
};
;
/**
Bindable module.

<code><pre>
player = Core
  x: 5
  y: 10

player.bind "update", ->
  updatePlayer()
# => Uncaught TypeError: Object has no method 'bind'

player.include(Bindable)

player.bind "update", ->
  updatePlayer()
# => this will call updatePlayer each time through the main loop
</pre></code>

@name Bindable
@module
@constructor
*/
var Bindable,
  __slice = Array.prototype.slice;

Bindable = function() {
  var eventCallbacks;
  eventCallbacks = {};
  return {
    /**
    Adds a function as an event listener.
    
    <code><pre>
    # this will call coolEventHandler after
    # yourObject.trigger "someCustomEvent" is called.
    yourObject.bind "someCustomEvent", coolEventHandler
    
    #or
    yourObject.bind "anotherCustomEvent", ->
      doSomething()
    </pre></code>
    
    @name bind
    @methodOf Bindable#
    @param {String} event The event to listen to.
    @param {Function} callback The function to be called when the specified event
    is triggered.
    */
    bind: function(namespacedEvent, callback) {
      var event, namespace, _ref;
      _ref = namespacedEvent.split("."), event = _ref[0], namespace = _ref[1];
      if (namespace) {
        callback.__PIXIE || (callback.__PIXIE = {});
        callback.__PIXIE[namespace] = true;
      }
      eventCallbacks[event] || (eventCallbacks[event] = []);
      eventCallbacks[event].push(callback);
      return this;
    },
    /**
    Removes a specific event listener, or all event listeners if
    no specific listener is given.
    
    <code><pre>
    #  removes the handler coolEventHandler from the event
    # "someCustomEvent" while leaving the other events intact.
    yourObject.unbind "someCustomEvent", coolEventHandler
    
    # removes all handlers attached to "anotherCustomEvent" 
    yourObject.unbind "anotherCustomEvent"
    </pre></code>
    
    @name unbind
    @methodOf Bindable#
    @param {String} event The event to remove the listener from.
    @param {Function} [callback] The listener to remove.
    */
    unbind: function(namespacedEvent, callback) {
      var callbacks, event, key, namespace, _ref;
      _ref = namespacedEvent.split("."), event = _ref[0], namespace = _ref[1];
      if (event) {
        eventCallbacks[event] || (eventCallbacks[event] = []);
        if (namespace) {
          eventCallbacks[event] = eventCallbacks.select(function(callback) {
            var _ref2;
            return !(((_ref2 = callback.__PIXIE) != null ? _ref2[namespace] : void 0) != null);
          });
        } else {
          if (callback) {
            eventCallbacks[event].remove(callback);
          } else {
            eventCallbacks[event] = [];
          }
        }
      } else if (namespace) {
        for (key in eventCallbacks) {
          callbacks = eventCallbacks[key];
          eventCallbacks[key] = callbacks.select(function(callback) {
            var _ref2;
            return !(((_ref2 = callback.__PIXIE) != null ? _ref2[namespace] : void 0) != null);
          });
        }
      }
      return this;
    },
    /**
    Calls all listeners attached to the specified event.
    
    <code><pre>
    # calls each event handler bound to "someCustomEvent"
    yourObject.trigger "someCustomEvent"
    </pre></code>
    
    @name trigger
    @methodOf Bindable#
    @param {String} event The event to trigger.
    @param {Array} [parameters] Additional parameters to pass to the event listener.
    */
    trigger: function() {
      var callbacks, event, parameters, self;
      event = arguments[0], parameters = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      callbacks = eventCallbacks[event];
      if (callbacks && callbacks.length) {
        self = this;
        return callbacks.each(function(callback) {
          return callback.apply(self, parameters);
        });
      }
    }
  };
};

(typeof exports !== "undefined" && exports !== null ? exports : this)["Bindable"] = Bindable;
;
var CommandStack;

CommandStack = function() {
  var index, stack;
  stack = [];
  index = 0;
  return {
    execute: function(command) {
      stack[index] = command;
      command.execute();
      return stack.length = index += 1;
    },
    undo: function() {
      var command;
      if (this.canUndo()) {
        index -= 1;
        command = stack[index];
        command.undo();
        return command;
      }
    },
    redo: function() {
      var command;
      if (this.canRedo()) {
        command = stack[index];
        command.execute();
        index += 1;
        return command;
      }
    },
    canUndo: function() {
      return index > 0;
    },
    canRedo: function() {
      return stack[index] != null;
    }
  };
};
;
/**
The Core class is used to add extended functionality to objects without
extending the object class directly. Inherit from Core to gain its utility
methods.

@name Core
@constructor

@param {Object} I Instance variables
*/
var Core,
  __slice = Array.prototype.slice;

Core = function(I) {
  var self;
  if (I == null) I = {};
  return self = {
    /**
    External access to instance variables. Use of this property should be avoided
    in general, but can come in handy from time to time.
    
    <code><pre>
    I =
      r: 255
      g: 0
      b: 100
    
    myObject = Core(I)
    
    # a bad idea most of the time, but it's 
    # pretty convenient to have available.
    myObject.I.r
    # => 255
    
    myObject.I.g
    # => 0
    
    myObject.I.b
    # => 100
    </pre></code>
    
    @name I
    @fieldOf Core#
    */
    I: I,
    /**
    Generates a public jQuery style getter / setter method for each 
    String argument.
    
    <code><pre>
    myObject = Core
      r: 255
      g: 0
      b: 100
    
    myObject.attrAccessor "r", "g", "b"
    
    myObject.r(254)
    myObject.r()
    
    => 254
    </pre></code>
    
    @name attrAccessor
    @methodOf Core#
    */
    attrAccessor: function() {
      var attrNames;
      attrNames = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return attrNames.each(function(attrName) {
        return self[attrName] = function(newValue) {
          if (newValue != null) {
            I[attrName] = newValue;
            return self;
          } else {
            return I[attrName];
          }
        };
      });
    },
    /**
    Generates a public jQuery style getter method for each String argument.
    
    <code><pre>
    myObject = Core
      r: 255
      g: 0
      b: 100
    
    myObject.attrReader "r", "g", "b"
    
    myObject.r()
    => 255
    
    myObject.g()
    => 0
    
    myObject.b()
    => 100
    </pre></code>
    
    @name attrReader
    @methodOf Core#
    */
    attrReader: function() {
      var attrNames;
      attrNames = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return attrNames.each(function(attrName) {
        return self[attrName] = function() {
          return I[attrName];
        };
      });
    },
    /**
    Extends this object with methods from the passed in object. A shortcut for Object.extend(self, methods)
    
    <code><pre>
    I =
      x: 30
      y: 40
      maxSpeed: 5
    
    # we are using extend to give player
    # additional methods that Core doesn't have
    player = Core(I).extend
      increaseSpeed: ->
        I.maxSpeed += 1
    
    player.I.maxSpeed
    => 5
    
    player.increaseSpeed()
    
    player.I.maxSpeed
    => 6
    </pre></code>
    
    @name extend
    @methodOf Core#
    @see Object.extend
    @returns self
    */
    extend: function(options) {
      Object.extend(self, options);
      return self;
    },
    /**
    Includes a module in this object.
    
    <code><pre>
    myObject = Core()
    myObject.include(Bindable)
    
    # now you can bind handlers to functions
    myObject.bind "someEvent", ->
      alert("wow. that was easy.")
    </pre></code>
    
    @name include
    @methodOf Core#
    @param {Module} Module the module to include. A module is a constructor that takes two parameters, I and self, and returns an object containing the public methods to extend the including object with.
    */
    include: function() {
      var Module, modules, _i, _len;
      modules = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = modules.length; _i < _len; _i++) {
        Module = modules[_i];
        if (typeof Module.isString === "function" ? Module.isString() : void 0) {
          Module = Module.constantize();
        }
        self.extend(Module(I, self));
      }
      return self;
    },
    send: function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return self[name].apply(self, args);
    }
  };
};
;
var __slice = Array.prototype.slice;

Function.prototype.once = function() {
  var func, memo, ran;
  func = this;
  ran = false;
  memo = void 0;
  return function() {
    if (ran) return memo;
    ran = true;
    return memo = func.apply(this, arguments);
  };
};

Function.prototype.withBefore = function(interception) {
  var method;
  method = this;
  return function() {
    interception.apply(this, arguments);
    return method.apply(this, arguments);
  };
};

Function.prototype.withAfter = function(interception) {
  var method;
  method = this;
  return function() {
    var result;
    result = method.apply(this, arguments);
    interception.apply(this, arguments);
    return result;
  };
};

/**
Calling a debounced function will postpone its execution until after 
wait milliseconds have elapsed since the last time the function was 
invoked. Useful for implementing behavior that should only happen after 
the input has stopped arriving. For example: rendering a preview of a 
Markdown comment, recalculating a layout after the window has stopped 
being resized...

<code><pre>
lazyLayout = calculateLayout.debounce(300)
$(window).resize(lazyLayout)
</pre></code>

@name debounce
@methodOf Function#
@returns {Function} The debounced version of this function.
*/

Function.prototype.debounce = function(wait) {
  var func, timeout;
  timeout = null;
  func = this;
  return function() {
    var args, context, later;
    context = this;
    args = arguments;
    later = function() {
      timeout = null;
      return func.apply(context, args);
    };
    clearTimeout(timeout);
    return timeout = setTimeout(later, wait);
  };
};

Function.prototype.returning = function(x) {
  var func;
  func = this;
  return function() {
    func.apply(this, arguments);
    return x;
  };
};

Function.prototype.delay = function() {
  var args, func, wait;
  wait = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  func = this;
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
};

Function.prototype.defer = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return this.delay.apply(this, [1].concat(args));
};
;
/**
@name Logging
@namespace

Gives you some convenience methods for outputting data while developing. 

<code><pre>
  log "Testing123"
  info "Hey, this is happening"
  warn "Be careful, this might be a problem"
  error "Kaboom!"
</pre></code>
*/
["log", "info", "warn", "error"].each(function(name) {
  if (typeof console !== "undefined") {
    return (typeof exports !== "undefined" && exports !== null ? exports : this)[name] = function(message) {
      if (console[name]) return console[name](message);
    };
  } else {
    return (typeof exports !== "undefined" && exports !== null ? exports : this)[name] = function() {};
  }
});
;
/**
* Matrix.js v1.3.0pre
* 
* Copyright (c) 2010 STRd6
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
* Loosely based on flash:
* http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/flash/geom/Matrix.html
*/
(function() {
  /**
  <pre>
     _        _
    | a  c tx  |
    | b  d ty  |
    |_0  0  1 _|
  </pre>
  Creates a matrix for 2d affine transformations.
  
  concat, inverse, rotate, scale and translate return new matrices with the
  transformations applied. The matrix is not modified in place.
  
  Returns the identity matrix when called with no arguments.
  
  @name Matrix
  @param {Number} [a]
  @param {Number} [b]
  @param {Number} [c]
  @param {Number} [d]
  @param {Number} [tx]
  @param {Number} [ty]
  @constructor
  */
  var Matrix;
  Matrix = function(a, b, c, d, tx, ty) {
    return {
      __proto__: Matrix.prototype,
      /**
      @name a
      @fieldOf Matrix#
      */
      a: a != null ? a : 1,
      /**
      @name b
      @fieldOf Matrix#
      */
      b: b || 0,
      /**
      @name c
      @fieldOf Matrix#
      */
      c: c || 0,
      /**
      @name d
      @fieldOf Matrix#
      */
      d: d != null ? d : 1,
      /**
      @name tx
      @fieldOf Matrix#
      */
      tx: tx || 0,
      /**
      @name ty
      @fieldOf Matrix#
      */
      ty: ty || 0
    };
  };
  Matrix.prototype = {
    /**
    Returns the result of this matrix multiplied by another matrix
    combining the geometric effects of the two. In mathematical terms, 
    concatenating two matrixes is the same as combining them using matrix multiplication.
    If this matrix is A and the matrix passed in is B, the resulting matrix is A x B
    http://mathworld.wolfram.com/MatrixMultiplication.html
    @name concat
    @methodOf Matrix#
    @param {Matrix} matrix The matrix to multiply this matrix by.
    @returns {Matrix} The result of the matrix multiplication, a new matrix.
    */
    concat: function(matrix) {
      return Matrix(this.a * matrix.a + this.c * matrix.b, this.b * matrix.a + this.d * matrix.b, this.a * matrix.c + this.c * matrix.d, this.b * matrix.c + this.d * matrix.d, this.a * matrix.tx + this.c * matrix.ty + this.tx, this.b * matrix.tx + this.d * matrix.ty + this.ty);
    },
    /**
    Copy this matrix.
    @name copy
    @methodOf Matrix#
    @returns {Matrix} A copy of this matrix.
    */
    copy: function() {
      return Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
    },
    /**
    Given a point in the pretransform coordinate space, returns the coordinates of 
    that point after the transformation occurs. Unlike the standard transformation 
    applied using the transformPoint() method, the deltaTransformPoint() method 
    does not consider the translation parameters tx and ty.
    @name deltaTransformPoint
    @methodOf Matrix#
    @see #transformPoint
    @return {Point} A new point transformed by this matrix ignoring tx and ty.
    */
    deltaTransformPoint: function(point) {
      return Point(this.a * point.x + this.c * point.y, this.b * point.x + this.d * point.y);
    },
    /**
    Returns the inverse of the matrix.
    http://mathworld.wolfram.com/MatrixInverse.html
    @name inverse
    @methodOf Matrix#
    @returns {Matrix} A new matrix that is the inverse of this matrix.
    */
    inverse: function() {
      var determinant;
      determinant = this.a * this.d - this.b * this.c;
      return Matrix(this.d / determinant, -this.b / determinant, -this.c / determinant, this.a / determinant, (this.c * this.ty - this.d * this.tx) / determinant, (this.b * this.tx - this.a * this.ty) / determinant);
    },
    /**
    Returns a new matrix that corresponds this matrix multiplied by a
    a rotation matrix.
    @name rotate
    @methodOf Matrix#
    @see Matrix.rotation
    @param {Number} theta Amount to rotate in radians.
    @param {Point} [aboutPoint] The point about which this rotation occurs. Defaults to (0,0).
    @returns {Matrix} A new matrix, rotated by the specified amount.
    */
    rotate: function(theta, aboutPoint) {
      return this.concat(Matrix.rotation(theta, aboutPoint));
    },
    /**
    Returns a new matrix that corresponds this matrix multiplied by a
    a scaling matrix.
    @name scale
    @methodOf Matrix#
    @see Matrix.scale
    @param {Number} sx
    @param {Number} [sy]
    @param {Point} [aboutPoint] The point that remains fixed during the scaling
    @returns {Matrix} A new Matrix. The original multiplied by a scaling matrix.
    */
    scale: function(sx, sy, aboutPoint) {
      return this.concat(Matrix.scale(sx, sy, aboutPoint));
    },
    /**
    Returns a new matrix that corresponds this matrix multiplied by a
    a skewing matrix.
    
    @name skew
    @methodOf Matrix#
    @see Matrix.skew
    @param {Number} skewX The angle of skew in the x dimension.
    @param {Number} skewY The angle of skew in the y dimension.
    */
    skew: function(skewX, skewY) {
      return this.concat(Matrix.skew(skewX, skewY));
    },
    /**
    Returns a string representation of this matrix.
    
    @name toString
    @methodOf Matrix#
    @returns {String} A string reperesentation of this matrix.
    */
    toString: function() {
      return "Matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
    },
    /**
    Returns the result of applying the geometric transformation represented by the 
    Matrix object to the specified point.
    @name transformPoint
    @methodOf Matrix#
    @see #deltaTransformPoint
    @returns {Point} A new point with the transformation applied.
    */
    transformPoint: function(point) {
      return Point(this.a * point.x + this.c * point.y + this.tx, this.b * point.x + this.d * point.y + this.ty);
    },
    /**
    Translates the matrix along the x and y axes, as specified by the tx and ty parameters.
    @name translate
    @methodOf Matrix#
    @see Matrix.translation
    @param {Number} tx The translation along the x axis.
    @param {Number} ty The translation along the y axis.
    @returns {Matrix} A new matrix with the translation applied.
    */
    translate: function(tx, ty) {
      return this.concat(Matrix.translation(tx, ty));
    }
  };
  /**
  Creates a matrix transformation that corresponds to the given rotation,
  around (0,0) or the specified point.
  @see Matrix#rotate
  @param {Number} theta Rotation in radians.
  @param {Point} [aboutPoint] The point about which this rotation occurs. Defaults to (0,0).
  @returns {Matrix} A new matrix rotated by the given amount.
  */
  Matrix.rotate = Matrix.rotation = function(theta, aboutPoint) {
    var rotationMatrix;
    rotationMatrix = Matrix(Math.cos(theta), Math.sin(theta), -Math.sin(theta), Math.cos(theta));
    if (aboutPoint != null) {
      rotationMatrix = Matrix.translation(aboutPoint.x, aboutPoint.y).concat(rotationMatrix).concat(Matrix.translation(-aboutPoint.x, -aboutPoint.y));
    }
    return rotationMatrix;
  };
  /**
  Returns a matrix that corresponds to scaling by factors of sx, sy along
  the x and y axis respectively.
  If only one parameter is given the matrix is scaled uniformly along both axis.
  If the optional aboutPoint parameter is given the scaling takes place
  about the given point.
  @see Matrix#scale
  @param {Number} sx The amount to scale by along the x axis or uniformly if no sy is given.
  @param {Number} [sy] The amount to scale by along the y axis.
  @param {Point} [aboutPoint] The point about which the scaling occurs. Defaults to (0,0).
  @returns {Matrix} A matrix transformation representing scaling by sx and sy.
  */
  Matrix.scale = function(sx, sy, aboutPoint) {
    var scaleMatrix;
    sy = sy || sx;
    scaleMatrix = Matrix(sx, 0, 0, sy);
    if (aboutPoint) {
      scaleMatrix = Matrix.translation(aboutPoint.x, aboutPoint.y).concat(scaleMatrix).concat(Matrix.translation(-aboutPoint.x, -aboutPoint.y));
    }
    return scaleMatrix;
  };
  /**
  Returns a matrix that corresponds to a skew of skewX, skewY.
  
  @see Matrix#skew
  @param {Number} skewX The angle of skew in the x dimension.
  @param {Number} skewY The angle of skew in the y dimension.
  @return {Matrix} A matrix transformation representing a skew by skewX and skewY.
  */
  Matrix.skew = function(skewX, skewY) {
    return Matrix(0, Math.tan(skewY), Math.tan(skewX), 0);
  };
  /**
  Returns a matrix that corresponds to a translation of tx, ty.
  @see Matrix#translate
  @param {Number} tx The amount to translate in the x direction.
  @param {Number} ty The amount to translate in the y direction.
  @return {Matrix} A matrix transformation representing a translation by tx and ty.
  */
  Matrix.translate = Matrix.translation = function(tx, ty) {
    return Matrix(1, 0, 0, 1, tx, ty);
  };
  /**
  A constant representing the identity matrix.
  @name IDENTITY
  @fieldOf Matrix
  */
  Matrix.IDENTITY = Matrix();
  /**
  A constant representing the horizontal flip transformation matrix.
  @name HORIZONTAL_FLIP
  @fieldOf Matrix
  */
  Matrix.HORIZONTAL_FLIP = Matrix(-1, 0, 0, 1);
  /**
  A constant representing the vertical flip transformation matrix.
  @name VERTICAL_FLIP
  @fieldOf Matrix
  */
  Matrix.VERTICAL_FLIP = Matrix(1, 0, 0, -1);
  if (Object.freeze) {
    Object.freeze(Matrix.IDENTITY);
    Object.freeze(Matrix.HORIZONTAL_FLIP);
    Object.freeze(Matrix.VERTICAL_FLIP);
  }
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Matrix"] = Matrix;
})();
;
/** 
Returns the absolute value of this number.

<code><pre>
(-4).abs()
# => 4
</pre></code>

@name abs
@methodOf Number#
@returns {Number} The absolute value of the number.
*/
Number.prototype.abs = function() {
  return Math.abs(this);
};

/**
Returns the mathematical ceiling of this number.

<code><pre>
4.9.ceil() 
# => 5

4.2.ceil()
# => 5

(-1.2).ceil()
# => -1
</pre></code>

@name ceil
@methodOf Number#
@returns {Number} The number truncated to the nearest integer of greater than or equal value.
*/

Number.prototype.ceil = function() {
  return Math.ceil(this);
};

/**
Returns the mathematical floor of this number.

<code><pre>
4.9.floor()
# => 4

4.2.floor()
# => 4

(-1.2).floor()
# => -2
</pre></code>

@name floor
@methodOf Number#
@returns {Number} The number truncated to the nearest integer of less than or equal value.
*/

Number.prototype.floor = function() {
  return Math.floor(this);
};

/**
Returns this number rounded to the nearest integer.

<code><pre>
4.5.round()
# => 5

4.4.round()
# => 4
</pre></code>

@name round
@methodOf Number#
@returns {Number} The number rounded to the nearest integer.
*/

Number.prototype.round = function() {
  return Math.round(this);
};

/**
Get a bunch of points equally spaced around the unit circle.

<code><pre>
4.circularPoints (p) ->

# p gets Point(1, 0), Point(0, 1), Point(-1, 0), Point(0, -1)
</pre></code>

@name circularPoint
@methodOf Number#
*/

Number.prototype.circularPoints = function(block) {
  var n;
  n = this;
  return n.times(function(i) {
    return block(Point.fromAngle((i / n).turns), i);
  });
};

/**
Returns a number whose value is limited to the given range.

<code><pre>
# limit the output of this computation to between 0 and 255
(2 * 255).clamp(0, 255)
# => 255
</pre></code>

@name clamp
@methodOf Number#
@param {Number} min The lower boundary of the output range
@param {Number} max The upper boundary of the output range
@returns {Number} A number in the range [min, max]
*/

Number.prototype.clamp = function(min, max) {
  if ((min != null) && (max != null)) {
    return Math.min(Math.max(this, min), max);
  } else if (min != null) {
    return Math.max(this, min);
  } else if (max != null) {
    return Math.min(this, max);
  } else {
    return this;
  }
};

/**
A mod method useful for array wrapping. The range of the function is
constrained to remain in bounds of array indices.

<code><pre>
(-1).mod(5)
# => 4
</pre></code>

@name mod
@methodOf Number#
@param {Number} base
@returns {Number} An integer between 0 and (base - 1) if base is positive.
*/

Number.prototype.mod = function(base) {
  var result;
  result = this % base;
  if (result < 0 && base > 0) result += base;
  return result;
};

/**
Get the sign of this number as an integer (1, -1, or 0).

<code><pre>
(-5).sign()
# => -1

0.sign()
# => 0

5.sign()
# => 1
</pre></code>

@name sign
@methodOf Number#
@returns {Number} The sign of this number, 0 if the number is 0.
*/

Number.prototype.sign = function() {
  if (this > 0) {
    return 1;
  } else if (this < 0) {
    return -1;
  } else {
    return 0;
  }
};

/**
Returns true if this number is even (evenly divisible by 2).

<code><pre>
2.even()
# => true

3.even()
# => false

0.even()
# => true      
</pre></code>

@name even
@methodOf Number#
@returns {Boolean} true if this number is an even integer, false otherwise.
*/

Number.prototype.even = function() {
  return this % 2 === 0;
};

/**
Returns true if this number is odd (has remainder of 1 when divided by 2).

<code><pre>
2.odd()
# => false

3.odd()
# => true

0.odd()
# => false     
</pre></code>

@name odd
@methodOf Number#
@returns {Boolean} true if this number is an odd integer, false otherwise.
*/

Number.prototype.odd = function() {
  if (this > 0) {
    return this % 2 === 1;
  } else {
    return this % 2 === -1;
  }
};

/**
Calls iterator the specified number of times, passing in the number of the 
current iteration as a parameter: 0 on first call, 1 on the second call, etc. 

<code><pre>
output = []

5.times (n) ->
  output.push(n)

output
# => [0, 1, 2, 3, 4]
</pre></code>

@name times
@methodOf Number#
@param {Function} iterator The iterator takes a single parameter, the number of the current iteration.
@param {Object} [context] The optional context parameter specifies an object to treat as <code>this</code> in the iterator block.
@returns {Number} The number of times the iterator was called.
*/

Number.prototype.times = function(iterator, context) {
  var i;
  i = -1;
  while (++i < this) {
    iterator.call(context, i);
  }
  return i;
};

/**
Returns the the nearest grid resolution less than or equal to the number. 

<code><pre>
7.snap(8) 
# => 0

4.snap(8) 
# => 0

12.snap(8) 
# => 8
</pre></code>

@name snap
@methodOf Number#
@param {Number} resolution The grid resolution to snap to.
@returns {Number} The nearest multiple of resolution lower than the number.
*/

Number.prototype.snap = function(resolution) {
  var n;
  n = this / resolution;
  1 / 1;
  return n.floor() * resolution;
};

/**
In number theory, integer factorization or prime factorization is the
breaking down of a composite number into smaller non-trivial divisors,
which when multiplied together equal the original integer.

Floors the number for purposes of factorization.

<code><pre>
60.primeFactors()
# => [2, 2, 3, 5]

37.primeFactors()
# => [37]
</pre></code>

@name primeFactors
@methodOf Number#
@returns {Array} An array containing the factorization of this number.
*/

Number.prototype.primeFactors = function() {
  var factors, i, iSquared, n;
  factors = [];
  n = Math.floor(this);
  if (n === 0) return;
  if (n < 0) {
    factors.push(-1);
    n /= -1;
  }
  i = 2;
  iSquared = i * i;
  while (iSquared < n) {
    while ((n % i) === 0) {
      factors.push(i);
      n /= i;
    }
    i += 1;
    iSquared = i * i;
  }
  if (n !== 1) factors.push(n);
  return factors;
};

/**
Returns the two character hexidecimal 
representation of numbers 0 through 255.

<code><pre>
255.toColorPart()
# => "ff"

0.toColorPart()
# => "00"

200.toColorPart()
# => "c8"
</pre></code>

@name toColorPart
@methodOf Number#
@returns {String} Hexidecimal representation of the number
*/

Number.prototype.toColorPart = function() {
  var s;
  s = parseInt(this.clamp(0, 255), 10).toString(16);
  if (s.length === 1) s = '0' + s;
  return s;
};

/**
Returns a number that is maxDelta closer to target.

<code><pre>
255.approach(0, 5)
# => 250

5.approach(0, 10)
# => 0
</pre></code>

@name approach
@methodOf Number#
@returns {Number} A number maxDelta toward target
*/

Number.prototype.approach = function(target, maxDelta) {
  return (target - this).clamp(-maxDelta, maxDelta) + this;
};

/**
Returns a number that is closer to the target by the ratio.

<code><pre>
255.approachByRatio(0, 0.1)
# => 229.5
</pre></code>

@name approachByRatio
@methodOf Number#
@returns {Number} A number toward target by the ratio
*/

Number.prototype.approachByRatio = function(target, ratio) {
  return this.approach(target, this * ratio);
};

/**
Returns a number that is closer to the target angle by the delta.

<code><pre>
Math.PI.approachRotation(0, Math.PI/4)
# => 2.356194490192345 # this is (3/4) * Math.PI, which is (1/4) * Math.PI closer to 0 from Math.PI
</pre></code>

@name approachRotation
@methodOf Number#
@returns {Number} A number toward the target angle by maxDelta
*/

Number.prototype.approachRotation = function(target, maxDelta) {
  while (target > this + Math.PI) {
    target -= Math.TAU;
  }
  while (target < this - Math.PI) {
    target += Math.TAU;
  }
  return (target - this).clamp(-maxDelta, maxDelta) + this;
};

/**
Constrains a rotation to between -PI and PI.

<code><pre>
(9/4 * Math.PI).constrainRotation() 
# => 0.7853981633974483 # this is (1/4) * Math.PI
</pre></code>

@name constrainRotation
@methodOf Number#
@returns {Number} This number constrained between -PI and PI.
*/

Number.prototype.constrainRotation = function() {
  var target;
  target = this;
  while (target > Math.PI) {
    target -= Math.TAU;
  }
  while (target < -Math.PI) {
    target += Math.TAU;
  }
  return target;
};

/**
The mathematical d operator. Useful for simulating dice rolls.

@name d
@methodOf Number#
@returns {Number} The sum of rolling <code>this</code> many <code>sides</code>-sided dice
*/

Number.prototype.d = function(sides) {
  var sum;
  sum = 0;
  this.times(function() {
    return sum += rand(sides) + 1;
  });
  return sum;
};

/**
Utility method to convert a number to a duration of seconds.

<code><pre>
3.seconds
# => 3000

setTimout doSometing, 3.seconds
</pre></code>

@name seconds
@propertyOf Number#
@returns {Number} This number as a duration of seconds
*/

if (!5..seconds) {
  Object.defineProperty(Number.prototype, 'seconds', {
    get: function() {
      return this * 1000;
    }
  });
}

if (!1..second) {
  Object.defineProperty(Number.prototype, 'second', {
    get: function() {
      return this * 1000;
    }
  });
}

/**
Utility method to convert a number to an amount of rotations.

<code><pre>
0.5.rotations
# => 3.141592653589793

I.rotation = 0.25.rotations
</pre></code>

@name rotations
@propertyOf Number#
@returns {Number} This number as an amount of rotations
*/

if (!5..rotations) {
  Object.defineProperty(Number.prototype, 'rotations', {
    get: function() {
      return this * Math.TAU;
    }
  });
}

if (!1..rotation) {
  Object.defineProperty(Number.prototype, 'rotation', {
    get: function() {
      return this * Math.TAU;
    }
  });
}

/**
Utility method to convert a number to an amount of rotations.

<code><pre>
0.5.turns
# => 3.141592653589793

I.rotation = 0.25.turns

1.turn # => Math.TAU (aka 2 * Math.PI)
</pre></code>

@name turns
@propertyOf Number#
@returns {Number} This number as an amount of rotation.
1 turn is one complete rotation.
*/

if (!5..turns) {
  Object.defineProperty(Number.prototype, 'turns', {
    get: function() {
      return this * Math.TAU;
    }
  });
}

if (!1..turn) {
  Object.defineProperty(Number.prototype, 'turn', {
    get: function() {
      return this * Math.TAU;
    }
  });
}

/**
Utility method to convert a number to an amount of degrees.

<code><pre>
180.degrees
# => 3.141592653589793

I.rotation = 90.degrees
</pre></code>

@name degrees
@propertyOf Number#
@returns {Number} This number as an amount of degrees
*/

if (!2..degrees) {
  Object.defineProperty(Number.prototype, 'degrees', {
    get: function() {
      return this * Math.TAU / 360;
    }
  });
}

if (!1..degree) {
  Object.defineProperty(Number.prototype, 'degree', {
    get: function() {
      return this * Math.TAU / 360;
    }
  });
}

/** 
The mathematical circle constant of 1 turn.

@name TAU
@fieldOf Math
*/

Math.TAU = 2 * Math.PI;
;
/**
Checks whether an object is an array.

<code><pre>
Object.isArray([1, 2, 4])
# => true

Object.isArray({key: "value"})
# => false
</pre></code>

@name isArray
@methodOf Object
@param {Object} object The object to check for array-ness.
@returns {Boolean} A boolean expressing whether the object is an instance of Array
*/
var __slice = Array.prototype.slice;

Object.isArray = function(object) {
  return Object.prototype.toString.call(object) === "[object Array]";
};

/**
Checks whether an object is a string.

<code><pre>
Object.isString("a string")
# => true

Object.isString([1, 2, 4])
# => false

Object.isString({key: "value"})
# => false
</pre></code>

@name isString
@methodOf Object
@param {Object} object The object to check for string-ness.
@returns {Boolean} A boolean expressing whether the object is an instance of String
*/

Object.isString = function(object) {
  return Object.prototype.toString.call(object) === "[object String]";
};

/**
Merges properties from objects into target without overiding.
First come, first served.

<code><pre>
  I =
    a: 1
    b: 2
    c: 3

  Object.reverseMerge I,
    c: 6
    d: 4   

  I # => {a: 1, b:2, c:3, d: 4}
</pre></code>

@name reverseMerge
@methodOf Object
@param {Object} target The object to merge the properties into.
@returns {Object} target
*/

Object.reverseMerge = function() {
  var name, object, objects, target, _i, _len;
  target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  for (_i = 0, _len = objects.length; _i < _len; _i++) {
    object = objects[_i];
    for (name in object) {
      if (!target.hasOwnProperty(name)) target[name] = object[name];
    }
  }
  return target;
};

/**
Merges properties from sources into target with overiding.
Last in covers earlier properties.

<code><pre>
  I =
    a: 1
    b: 2
    c: 3

  Object.extend I,
    c: 6
    d: 4

  I # => {a: 1, b:2, c:6, d: 4}
</pre></code>

@name extend
@methodOf Object
@param {Object} target The object to merge the properties into.
@returns {Object} target
*/

Object.extend = function() {
  var name, source, sources, target, _i, _len;
  target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  for (_i = 0, _len = sources.length; _i < _len; _i++) {
    source = sources[_i];
    for (name in source) {
      target[name] = source[name];
    }
  }
  return target;
};

/**
Helper method that tells you if something is an object.

<code><pre>
object = {a: 1}

Object.isObject(object)
# => true
</pre></code>

@name isObject
@methodOf Object
@param {Object} object Maybe this guy is an object.
@returns {Boolean} true if this guy is an object.
*/

Object.isObject = function(object) {
  return Object.prototype.toString.call(object) === '[object Object]';
};
;
var __slice = Array.prototype.slice;

(function() {
  /**
  Create a new point with given x and y coordinates. If no arguments are given
  defaults to (0, 0).
  
  <code><pre>
  point = Point()
  
  p.x
  # => 0
  
  p.y
  # => 0
  
  point = Point(-2, 5)
  
  p.x
  # => -2
  
  p.y
  # => 5
  </pre></code>
  
  @name Point
  @param {Number} [x]
  @param {Number} [y]
  @constructor
  */
  var Point;
  Point = function(x, y) {
    return {
      __proto__: Point.prototype,
      /**
      The x coordinate of this point.
      @name x
      @fieldOf Point#
      */
      x: x || 0,
      /**
      The y coordinate of this point.
      @name y
      @fieldOf Point#
      */
      y: y || 0
    };
  };
  Point.prototype = {
    /**
    Constrain the magnitude of a vector.
    
    @name clamp
    @methodOf Point#
    @param {Number} n Maximum value for magnitude.
    @returns {Point} A new point whose magnitude has been clamped to the given value.
    */
    clamp: function(n) {
      return this.copy().clamp$(n);
    },
    clamp$: function(n) {
      if (this.magnitude() > n) {
        return this.norm$(n);
      } else {
        return this;
      }
    },
    /**
    Creates a copy of this point.
    
    @name copy
    @methodOf Point#
    @returns {Point} A new point with the same x and y value as this point.
    
    <code><pre>
    point = Point(1, 1)
    pointCopy = point.copy()
    
    point.equal(pointCopy)
    # => true
    
    point == pointCopy
    # => false     
    </pre></code>
    */
    copy: function() {
      return Point(this.x, this.y);
    },
    /**
    Adds a point to this one and returns the new point. You may
    also use a two argument call like <code>point.add(x, y)</code>
    to add x and y values without a second point object.
    
    <code><pre>
    point = Point(2, 3).add(Point(3, 4))
    
    point.x
    # => 5
    
    point.y
    # => 7
    
    anotherPoint = Point(2, 3).add(3, 4)
    
    anotherPoint.x
    # => 5
    
    anotherPoint.y
    # => 7
    </pre></code>
    
    @name add
    @methodOf Point#
    @param {Point} other The point to add this point to.
    @returns {Point} A new point, the sum of both.
    */
    add: function(first, second) {
      return this.copy().add$(first, second);
    },
    /**
    Adds a point to this one, returning a modified point. You may
    also use a two argument call like <code>point.add(x, y)</code>
    to add x and y values without a second point object.
    
    <code><pre>
    point = Point(2, 3)
    
    point.x
    # => 2
    
    point.y
    # => 3
    
    point.add$(Point(3, 4))
    
    point.x
    # => 5
    
    point.y
    # => 7
    
    anotherPoint = Point(2, 3)
    anotherPoint.add$(3, 4)
    
    anotherPoint.x
    # => 5
    
    anotherPoint.y
    # => 7
    </pre></code>
    
    @name add$
    @methodOf Point#
    @param {Point} other The point to add this point to.
    @returns {Point} The sum of both points.
    */
    add$: function(first, second) {
      if (second != null) {
        this.x += first;
        this.y += second;
      } else {
        this.x += first.x;
        this.y += first.y;
      }
      return this;
    },
    /**
    Subtracts a point to this one and returns the new point.
    
    <code><pre>
    point = Point(1, 2).subtract(Point(2, 0))
    
    point.x
    # => -1
    
    point.y
    # => 2
    
    anotherPoint = Point(1, 2).subtract(2, 0)
    
    anotherPoint.x
    # => -1
    
    anotherPoint.y
    # => 2
    </pre></code>
    
    @name subtract
    @methodOf Point#
    @param {Point} other The point to subtract from this point.
    @returns {Point} A new point, this - other.
    */
    subtract: function(first, second) {
      return this.copy().subtract$(first, second);
    },
    /**
    Subtracts a point to this one and returns the new point.
    
    <code><pre>
    point = Point(1, 2)
    
    point.x
    # => 1
    
    point.y
    # => 2
    
    point.subtract$(Point(2, 0))
    
    point.x
    # => -1
    
    point.y
    # => 2
    
    anotherPoint = Point(1, 2)
    anotherPoint.subtract$(2, 0)
    
    anotherPoint.x
    # => -1
    
    anotherPoint.y
    # => 2
    </pre></code>
    
    @name subtract$
    @methodOf Point#
    @param {Point} other The point to subtract from this point.
    @returns {Point} The difference of the two points.
    */
    subtract$: function(first, second) {
      if (second != null) {
        this.x -= first;
        this.y -= second;
      } else {
        this.x -= first.x;
        this.y -= first.y;
      }
      return this;
    },
    /**
    Scale this Point (Vector) by a constant amount.
    
    <code><pre>
    point = Point(5, 6).scale(2)
    
    point.x
    # => 10
    
    point.y
    # => 12
    </pre></code>
    
    @name scale
    @methodOf Point#
    @param {Number} scalar The amount to scale this point by.
    @returns {Point} A new point, this * scalar.
    */
    scale: function(scalar) {
      return this.copy().scale$(scalar);
    },
    /**
    Scale this Point (Vector) by a constant amount. Modifies the point in place.
    
    <code><pre>
    point = Point(5, 6)
    
    point.x
    # => 5
    
    point.y
    # => 6
    
    point.scale$(2)
    
    point.x
    # => 10
    
    point.y
    # => 12
    </pre></code>
    
    @name scale$
    @methodOf Point#
    @param {Number} scalar The amount to scale this point by.
    @returns {Point} this * scalar.
    */
    scale$: function(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },
    /**
    The norm of a vector is the unit vector pointing in the same direction. This method
    treats the point as though it is a vector from the origin to (x, y).
    
    <code><pre>
    point = Point(2, 3).norm()
    
    point.x
    # => 0.5547001962252291
    
    point.y  
    # => 0.8320502943378437
    
    anotherPoint = Point(2, 3).norm(2)
    
    anotherPoint.x
    # => 1.1094003924504583
    
    anotherPoint.y   
    # => 1.6641005886756874    
    </pre></code>
    
    @name norm
    @methodOf Point#
    @returns {Point} The unit vector pointing in the same direction as this vector.
    */
    norm: function(length) {
      if (length == null) length = 1.0;
      return this.copy().norm$(length);
    },
    /**
    The norm of a vector is the unit vector pointing in the same direction. This method
    treats the point as though it is a vector from the origin to (x, y). Modifies the point in place.
    
    <code><pre>
    point = Point(2, 3).norm$()
    
    point.x
    # => 0.5547001962252291
    
    point.y  
    # => 0.8320502943378437
    
    anotherPoint = Point(2, 3).norm$(2)
    
    anotherPoint.x
    # => 1.1094003924504583
    
    anotherPoint.y   
    # => 1.6641005886756874    
    </pre></code>
    
    @name norm$
    @methodOf Point#
    @returns {Point} The unit vector pointing in the same direction as this vector.
    */
    norm$: function(length) {
      var m;
      if (length == null) length = 1.0;
      if (m = this.length()) {
        return this.scale$(length / m);
      } else {
        return this;
      }
    },
    /**
    Floor the x and y values, returning a new point.
    
    <code><pre>
    point = Point(3.4, 5.8).floor()
    
    point.x
    # => 3
    
    point.y
    # => 5
    </pre></code>
    
    @name floor
    @methodOf Point#
    @returns {Point} A new point, with x and y values each floored to the largest previous integer.
    */
    floor: function() {
      return this.copy().floor$();
    },
    /**
    Floor the x and y values, returning a modified point.
    
    <code><pre>
    point = Point(3.4, 5.8)
    point.floor$()
    
    point.x
    # => 3
    
    point.y
    # => 5
    </pre></code>
    
    @name floor$
    @methodOf Point#
    @returns {Point} A modified point, with x and y values each floored to the largest previous integer.
    */
    floor$: function() {
      this.x = this.x.floor();
      this.y = this.y.floor();
      return this;
    },
    /**
    Determine whether this point is equal to another point.
    
    <code><pre>
    pointA = Point(2, 3)
    pointB = Point(2, 3)
    pointC = Point(4, 5)
    
    pointA.equal(pointB)
    # => true
    
    pointA.equal(pointC)
    # => false
    </pre></code>
    
    @name equal
    @methodOf Point#
    @param {Point} other The point to check for equality.
    @returns {Boolean} true if the other point has the same x, y coordinates, false otherwise.
    */
    equal: function(other) {
      return this.x === other.x && this.y === other.y;
    },
    /**
    Computed the length of this point as though it were a vector from (0,0) to (x,y).
    
    <code><pre>
    point = Point(5, 7)
    
    point.length()
    # => 8.602325267042627
    </pre></code>
    
    @name length
    @methodOf Point#
    @returns {Number} The length of the vector from the origin to this point.
    */
    length: function() {
      return Math.sqrt(this.dot(this));
    },
    /**
    Calculate the magnitude of this Point (Vector).
    
    <code><pre>
    point = Point(5, 7)
    
    point.magnitude()
    # => 8.602325267042627
    </pre></code>
    
    @name magnitude
    @methodOf Point#
    @returns {Number} The magnitude of this point as if it were a vector from (0, 0) -> (x, y).
    */
    magnitude: function() {
      return this.length();
    },
    /**
    Returns the direction in radians of this point from the origin.
    
    <code><pre>
    point = Point(0, 1)
    
    point.direction()
    # => 1.5707963267948966 # Math.PI / 2
    </pre></code>
    
    @name direction
    @methodOf Point#
    @returns {Number} The direction in radians of this point from the origin
    */
    direction: function() {
      return Math.atan2(this.y, this.x);
    },
    /**
    Calculate the dot product of this point and another point (Vector).
    @name dot
    @methodOf Point#
    @param {Point} other The point to dot with this point.
    @returns {Number} The dot product of this point dot other as a scalar value.
    */
    dot: function(other) {
      return this.x * other.x + this.y * other.y;
    },
    /**
    Calculate the cross product of this point and another point (Vector). 
    Usually cross products are thought of as only applying to three dimensional vectors,
    but z can be treated as zero. The result of this method is interpreted as the magnitude 
    of the vector result of the cross product between [x1, y1, 0] x [x2, y2, 0]
    perpendicular to the xy plane.
    
    @name cross
    @methodOf Point#
    @param {Point} other The point to cross with this point.
    @returns {Number} The cross product of this point with the other point as scalar value.
    */
    cross: function(other) {
      return this.x * other.y - other.x * this.y;
    },
    /**
    Compute the Euclidean distance between this point and another point.
    
    <code><pre>
    pointA = Point(2, 3)
    pointB = Point(9, 2)
    
    pointA.distance(pointB)
    # => 7.0710678118654755 # Math.sqrt(50)
    </pre></code>
    
    @name distance
    @methodOf Point#
    @param {Point} other The point to compute the distance to.
    @returns {Number} The distance between this point and another point.
    */
    distance: function(other) {
      return Point.distance(this, other);
    },
    /**
    @name toString
    @methodOf Point#
    @returns {String} A string representation of this point.
    */
    toString: function() {
      return "Point(" + this.x + ", " + this.y + ")";
    }
  };
  /**
  Compute the Euclidean distance between two points.
  
  <code><pre>
  pointA = Point(2, 3)
  pointB = Point(9, 2)
  
  Point.distance(pointA, pointB)
  # => 7.0710678118654755 # Math.sqrt(50)
  </pre></code>
  
  @name distance
  @fieldOf Point
  @param {Point} p1
  @param {Point} p2
  @returns {Number} The Euclidean distance between two points.
  */
  Point.distance = function(p1, p2) {
    return Math.sqrt(Point.distanceSquared(p1, p2));
  };
  /**
  <code><pre>
  pointA = Point(2, 3)
  pointB = Point(9, 2)
  
  Point.distanceSquared(pointA, pointB)
  # => 50
  </pre></code>
  
  @name distanceSquared
  @fieldOf Point
  @param {Point} p1
  @param {Point} p2
  @returns {Number} The square of the Euclidean distance between two points.
  */
  Point.distanceSquared = function(p1, p2) {
    return Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);
  };
  /**
  @name interpolate
  @fieldOf Point
  
  @param {Point} p1
  @param {Point} p2
  @param {Number} t
  @returns {Point} A point along the path from p1 to p2
  */
  Point.interpolate = function(p1, p2, t) {
    return p2.subtract(p1).scale(t).add(p1);
  };
  /**
  Construct a point on the unit circle for the given angle.
  
  <code><pre>
  point = Point.fromAngle(Math.PI / 2)
  
  point.x
  # => 0
  
  point.y
  # => 1
  </pre></code>
  
  @name fromAngle
  @fieldOf Point
  @param {Number} angle The angle in radians
  @returns {Point} The point on the unit circle.
  */
  Point.fromAngle = function(angle) {
    return Point(Math.cos(angle), Math.sin(angle));
  };
  /**
  If you have two dudes, one standing at point p1, and the other
  standing at point p2, then this method will return the direction
  that the dude standing at p1 will need to face to look at p2.
  
  <code><pre>
  p1 = Point(0, 0)
  p2 = Point(7, 3)
  
  Point.direction(p1, p2)
  # => 0.40489178628508343
  </pre></code>
  
  @name direction
  @fieldOf Point
  @param {Point} p1 The starting point.
  @param {Point} p2 The ending point.
  @returns {Number} The direction from p1 to p2 in radians.
  */
  Point.direction = function(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  };
  /**
  The centroid of a set of points is their arithmetic mean.
  
  @name centroid
  @methodOf Point
  @param points... The points to find the centroid of.
  */
  Point.centroid = function() {
    var points;
    points = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return points.inject(Point(0, 0), function(sumPoint, point) {
      return sumPoint.add(point);
    }).scale(1 / points.length);
  };
  /**
  Generate a random point on the unit circle.
  
  @returns {Point} A random point on the unit circle.
  */
  Point.random = function() {
    return Point.fromAngle(Random.angle());
  };
  /**
  @name ZERO
  @fieldOf Point
  @returns {Point} The point (0, 0)
  */
  Point.ZERO = Point(0, 0);
  /**
  @name LEFT
  @fieldOf Point
  @returns {Point} The point (-1, 0)
  */
  Point.LEFT = Point(-1, 0);
  /**
  @name RIGHT
  @fieldOf Point
  @returns {Point} The point (1, 0)
  */
  Point.RIGHT = Point(1, 0);
  /**
  @name UP
  @fieldOf Point
  @returns {Point} The point (0, -1)
  */
  Point.UP = Point(0, -1);
  /**
  @name DOWN
  @fieldOf Point
  @returns {Point} The point (0, 1)
  */
  Point.DOWN = Point(0, 1);
  if (Object.freeze) {
    Object.freeze(Point.ZERO);
    Object.freeze(Point.LEFT);
    Object.freeze(Point.RIGHT);
    Object.freeze(Point.UP);
    Object.freeze(Point.DOWN);
  }
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Point"] = Point;
})();
;

(function() {
  /**
  @name Random
  @namespace Some useful methods for generating random things.
  */  (typeof exports !== "undefined" && exports !== null ? exports : this)["Random"] = {
    /**
    Returns a random angle, uniformly distributed, between 0 and 2pi.
    
    @name angle
    @methodOf Random
    @returns {Number} A random angle between 0 and 2pi
    */
    angle: function() {
      return rand() * Math.TAU;
    },
    /**
    Returns a random angle between the given angles.
    
    @name angleBetween
    @methodOf Random
    @returns {Number} A random angle between the angles given.
    */
    angleBetween: function(min, max) {
      return rand() * (max - min) + min;
    },
    /**
    Returns a random color.
    
    @name color
    @methodOf Random
    @returns {Color} A random color
    */
    color: function() {
      return Color.random();
    },
    /**
    Happens often.
    
    @name often
    @methodOf Random
    */
    often: function() {
      return rand(3);
    },
    /**
    Happens sometimes.
    
    @name sometimes
    @methodOf Random
    */
    sometimes: function() {
      return !rand(3);
    }
  };
  /**
  Returns random integers from [0, n) if n is given.
  Otherwise returns random float between 0 and 1.
  
  @name rand
  @methodOf window
  @param {Number} n
  @returns {Number} A random integer from 0 to n - 1 if n is given. If n is not given, a random float between 0 and 1.
  */
  (typeof exports !== "undefined" && exports !== null ? exports : this)["rand"] = function(n) {
    if (n) {
      return Math.floor(n * Math.random());
    } else {
      return Math.random();
    }
  };
  /**
  Returns random float from [-n / 2, n / 2] if n is given.
  Otherwise returns random float between -0.5 and 0.5.
  
  @name signedRand
  @methodOf window
  @param {Number} n
  @returns {Number} A random float from -n / 2 to n / 2 if n is given. If n is not given, a random float between -0.5 and 0.5.
  */
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["signedRand"] = function(n) {
    if (n) {
      return (n * Math.random()) - (n / 2);
    } else {
      return Math.random() - 0.5;
    }
  };
})();
;

(function() {
  var Rectangle;
  Rectangle = function(_arg) {
    var height, width, x, y;
    x = _arg.x, y = _arg.y, width = _arg.width, height = _arg.height;
    return {
      __proto__: Rectangle.prototype,
      x: x || 0,
      y: y || 0,
      width: width || 0,
      height: height || 0
    };
  };
  Rectangle.prototype = {
    center: function() {
      return Point(this.x + this.width / 2, this.y + this.height / 2);
    },
    equal: function(other) {
      return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
    }
  };
  Rectangle.prototype.__defineGetter__('left', function() {
    return this.x;
  });
  Rectangle.prototype.__defineGetter__('right', function() {
    return this.x + this.width;
  });
  Rectangle.prototype.__defineGetter__('top', function() {
    return this.y;
  });
  Rectangle.prototype.__defineGetter__('bottom', function() {
    return this.y + this.height;
  });
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Rectangle"] = Rectangle;
})();
;
/**
Returns true if this string only contains whitespace characters.

<code><pre>
"".blank()
# => true

"hello".blank()
# => false

"   ".blank()
# => true
</pre></code>

@name blank
@methodOf String#
@returns {Boolean} Whether or not this string is blank.
*/
String.prototype.blank = function() {
  return /^\s*$/.test(this);
};

/**
Returns a new string that is a camelCase version.

<code><pre>
"camel_case".camelize()
"camel-case".camelize()
"camel case".camelize()

# => "camelCase"
</pre></code>

@name camelize
@methodOf String#
@returns {String} A new string. camelCase version of `this`.
*/

String.prototype.camelize = function() {
  return this.trim().replace(/(\-|_|\s)+(.)?/g, function(match, separator, chr) {
    if (chr) {
      return chr.toUpperCase();
    } else {
      return '';
    }
  });
};

/**
Returns a new string with the first letter capitalized and the rest lower cased.

<code><pre>
"capital".capitalize()
"cAPITAL".capitalize()
"cApItAl".capitalize()
"CAPITAL".capitalize()

# => "Capital"
</pre></code>

@name capitalize
@methodOf String#
@returns {String} A new string. Capitalized version of `this`
*/

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
};

/**
Return the class or constant named in this string.

<code><pre>

"Constant".constantize()
# => Constant
# notice this isn't a string. Useful for calling methods on class with the same name as `this`.
</pre></code>

@name constantize
@methodOf String#
@returns {Object} The class or constant named in this string.
*/

String.prototype.constantize = function() {
  var item, target, _i, _len, _ref;
  target = typeof exports !== "undefined" && exports !== null ? exports : window;
  _ref = this.split('.');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    target = target[item];
  }
  return target;
};

/**
Returns a new string that is a more human readable version.

<code><pre>
"player_id".humanize()
# => "Player"

"player_ammo".humanize()
# => "Player ammo"
</pre></code>

@name humanize
@methodOf String#
@returns {String} A new string. Replaces _id and _ with "" and capitalizes the word.
*/

String.prototype.humanize = function() {
  return this.replace(/_id$/, "").replace(/_/g, " ").capitalize();
};

/**
Returns true.

@name isString
@methodOf String#
@returns {Boolean} true
*/

String.prototype.isString = function() {
  return true;
};

/**
Parse this string as though it is JSON and return the object it represents. If it
is not valid JSON returns the string itself.

<code><pre>
# this is valid json, so an object is returned
'{"a": 3}'.parse()
# => {a: 3}

# double quoting instead isn't valid JSON so a string is returned
"{'a': 3}".parse()
# => "{'a': 3}"

</pre></code>

@name parse
@methodOf String#
@returns {Object} Returns an object from the JSON this string contains. If it is not valid JSON returns the string itself.
*/

String.prototype.parse = function() {
  try {
    return JSON.parse(this.toString());
  } catch (e) {
    return this.toString();
  }
};

/**
Returns true if this string starts with the given string.

@name startsWith
@methodOf String#
@param {String} str The string to check.

@returns {Boolean} True if this string starts with the given string, false otherwise.
*/

String.prototype.startsWith = function(str) {
  return this.lastIndexOf(str, 0) === 0;
};

/**
Returns a new string in Title Case.

<code><pre>
"title-case".titleize()
# => "Title Case"

"title case".titleize()
# => "Title Case"
</pre></code>

@name titleize
@methodOf String#
@returns {String} A new string. Title Cased.
*/

String.prototype.titleize = function() {
  return this.split(/[- ]/).map(function(word) {
    return word.capitalize();
  }).join(' ');
};

/**
Underscore a word, changing camelCased with under_scored.

<code><pre>
"UNDERScore".underscore()
# => "under_score"

"UNDER-SCORE".underscore()
# => "under_score"

"UnDEr-SCorE".underscore()
# => "un_d_er_s_cor_e"
</pre></code>

@name underscore
@methodOf String#
@returns {String} A new string. Separated by _.
*/

String.prototype.underscore = function() {
  return this.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
};

/**
Assumes the string is something like a file name and returns the 
contents of the string without the extension.

<code><pre>
"neat.png".witouthExtension() 
# => "neat"
</pre></code>

@name withoutExtension
@methodOf String#
@returns {String} A new string without the extension name.
*/

String.prototype.withoutExtension = function() {
  return this.replace(/\.[^\.]*$/, '');
};

String.prototype.parseHex = function() {
  var alpha, hexString, i, rgb;
  hexString = this.replace(/#/, '');
  switch (hexString.length) {
    case 3:
    case 4:
      if (hexString.length === 4) {
        alpha = (parseInt(hexString.substr(3, 1), 16) * 0x11) / 255;
      } else {
        alpha = 1;
      }
      rgb = (function() {
        var _results;
        _results = [];
        for (i = 0; i <= 2; i++) {
          _results.push(parseInt(hexString.substr(i, 1), 16) * 0x11);
        }
        return _results;
      })();
      rgb.push(alpha);
      return rgb;
    case 6:
    case 8:
      if (hexString.length === 8) {
        alpha = parseInt(hexString.substr(6, 2), 16) / 255;
      } else {
        alpha = 1;
      }
      rgb = (function() {
        var _results;
        _results = [];
        for (i = 0; i <= 2; i++) {
          _results.push(parseInt(hexString.substr(2 * i, 2), 16));
        }
        return _results;
      })();
      rgb.push(alpha);
      return rgb;
  }
};
;
/**
Returns a string representing the specified Boolean object.

<code><em>bool</em>.toString()</code>

@name toString
@methodOf Boolean#
*/
/**
Returns the primitive value of a Boolean object.

<code><em>bool</em>.valueOf()</code>

@name valueOf
@methodOf Boolean#
*/
/**
Returns a string representing the Number object in exponential notation

<code><i>number</i>.toExponential( [<em>fractionDigits</em>] )</code>
@param  fractionDigits
An integer specifying the number of digits after the decimal point. Defaults
to as many digits as necessary to specify the number.
@name toExponential
@methodOf Number#
*/
/**
Formats a number using fixed-point notation

<code><i>number</i>.toFixed( [<em>digits</em>] )</code>
@param  digits   The number of digits to appear after the decimal point; this
may be a value between 0 and 20, inclusive, and implementations may optionally
support a larger range of values. If this argument is omitted, it is treated as
0.
@name toFixed
@methodOf Number#
*/
/**
number.toLocaleString();

@name toLocaleString
@methodOf Number#
*/
/**
Returns a string representing the Number object to the specified precision. 

<code><em>number</em>.toPrecision( [ <em>precision</em> ] )</code>
@param precision An integer specifying the number of significant digits.
@name toPrecision
@methodOf Number#
*/
/**
Returns a string representing the specified Number object

<code><i>number</i>.toString( [<em>radix</em>] )</code>
@param  radix
An integer between 2 and 36 specifying the base to use for representing
numeric values.
@name toString
@methodOf Number#
*/
/**
Returns the primitive value of a Number object.

@name valueOf
@methodOf Number#
*/
/**
Returns the specified character from a string.

<code><em>string</em>.charAt(<em>index</em>)</code>
@param index  An integer between 0 and 1 less than the length of the string.
@name charAt
@methodOf String#
*/
/**
Returns the numeric Unicode value of the character at the given index (except
for unicode codepoints > 0x10000).


@param index  An integer greater than 0 and less than the length of the string;
if it is not a number, it defaults to 0.
@name charCodeAt
@methodOf String#
*/
/**
Combines the text of two or more strings and returns a new string.

<code><em>string</em>.concat(<em>string2</em>, <em>string3</em>[, ..., <em>stringN</em>])</code>
@param string2...stringN  Strings to concatenate to this string.
@name concat
@methodOf String#
*/
/**
Returns the index within the calling String object of the first occurrence of
the specified value, starting the search at fromIndex,
returns -1 if the value is not found.

<code><em>string</em>.indexOf(<em>searchValue</em>[, <em>fromIndex</em>]</code>
@param searchValue  A string representing the value to search for.
@param fromIndex  The location within the calling string to start the search
from. It can be any integer between 0 and the length of the string. The default
value is 0.
@name indexOf
@methodOf String#
*/
/**
Returns the index within the calling String object of the last occurrence of the
specified value, or -1 if not found. The calling string is searched backward,
starting at fromIndex.

<code><em>string</em>.lastIndexOf(<em>searchValue</em>[, <em>fromIndex</em>])</code>
@param searchValue  A string representing the value to search for.
@param fromIndex  The location within the calling string to start the search
from, indexed from left to right. It can be any integer between 0 and the length
of the string. The default value is the length of the string.
@name lastIndexOf
@methodOf String#
*/
/**
Returns a number indicating whether a reference string comes before or after or
is the same as the given string in sort order.

<code> localeCompare(compareString) </code>

@name localeCompare
@methodOf String#
*/
/**
Used to retrieve the matches when matching a string against a regular
expression.

<code><em>string</em>.match(<em>regexp</em>)</code>
@param regexp A regular expression object. If a non-RegExp object obj is passed,
it is implicitly converted to a RegExp by using new RegExp(obj).
@name match
@methodOf String#
*/
/**
Returns a new string with some or all matches of a pattern replaced by a
replacement.  The pattern can be a string or a RegExp, and the replacement can
be a string or a function to be called for each match.

<code><em>str</em>.replace(<em>regexp|substr</em>, <em>newSubStr|function[</em>, </code><code><em>flags]</em>);</code>
@param regexp  A RegExp object. The match is replaced by the return value of
parameter #2.
@param substr  A String that is to be replaced by newSubStr.
@param newSubStr  The String that replaces the substring received from parameter
#1. A number of special replacement patterns are supported; see the "Specifying
a string as a parameter" section below.
@param function  A function to be invoked to create the new substring (to put in
place of the substring received from parameter #1). The arguments supplied to
this function are described in the "Specifying a function as a parameter"
section below.
@param flags gimy 

Non-standardThe use of the flags parameter in the String.replace method is
non-standard. For cross-browser compatibility, use a RegExp object with
corresponding flags.A string containing any combination of the RegExp flags: g
global match i ignore case m match over multiple lines y Non-standard     
sticky global matchignore casematch over multiple linesNon-standard     sticky
@name replace
@methodOf String#
*/
/**
Executes the search for a match between a regular expression and this String
object.

<code><em>string</em>.search(<em>regexp</em>)</code>
@param regexp  A  regular expression object. If a non-RegExp object obj is
passed, it is implicitly converted to a RegExp by using new RegExp(obj).
@name search
@methodOf String#
*/
/**
Extracts a section of a string and returns a new string.

<code><em>string</em>.slice(<em>beginslice</em>[, <em>endSlice</em>])</code>
@param beginSlice  The zero-based index at which to begin extraction.
@param endSlice  The zero-based index at which to end extraction. If omitted,
slice extracts to the end of the string.
@name slice
@methodOf String#
*/
/**
Splits a String object into an array of strings by separating the string into
substrings.

<code><em>string</em>.split([<em>separator</em>][, <em>limit</em>])</code>
@param separator  Specifies the character to use for separating the string. The
separator is treated as a string or a regular expression. If separator is
omitted, the array returned contains one element consisting of the entire
string.
@param limit  Integer specifying a limit on the number of splits to be found.
@name split
@methodOf String#
*/
/**
Returns the characters in a string beginning at the specified location through
the specified number of characters.

<code><em>string</em>.substr(<em>start</em>[, <em>length</em>])</code>
@param start  Location at which to begin extracting characters.
@param length  The number of characters to extract.
@name substr
@methodOf String#
*/
/**
Returns a subset of a string between one index and another, or through the end
of the string.

<code><em>string</em>.substring(<em>indexA</em>[, <em>indexB</em>])</code>
@param indexA  An integer between 0 and one less than the length of the string.
@param indexB  (optional) An integer between 0 and the length of the string.
@name substring
@methodOf String#
*/
/**
Returns the calling string value converted to lower case, according to any
locale-specific case mappings.

<code> toLocaleLowerCase() </code>

@name toLocaleLowerCase
@methodOf String#
*/
/**
Returns the calling string value converted to upper case, according to any
locale-specific case mappings.

<code> toLocaleUpperCase() </code>

@name toLocaleUpperCase
@methodOf String#
*/
/**
Returns the calling string value converted to lowercase.

<code><em>string</em>.toLowerCase()</code>

@name toLowerCase
@methodOf String#
*/
/**
Returns a string representing the specified object.

<code><em>string</em>.toString()</code>

@name toString
@methodOf String#
*/
/**
Returns the calling string value converted to uppercase.

<code><em>string</em>.toUpperCase()</code>

@name toUpperCase
@methodOf String#
*/
/**
Removes whitespace from both ends of the string.

<code><em>string</em>.trim()</code>

@name trim
@methodOf String#
*/
/**
Returns the primitive value of a String object.

<code><em>string</em>.valueOf()</code>

@name valueOf
@methodOf String#
*/
/**
Removes the last element from an array and returns that element.

<code>
<i>array</i>.pop()
</code>

@name pop
@methodOf Array#
*/
/**
Mutates an array by appending the given elements and returning the new length of
the array.

<code><em>array</em>.push(<em>element1</em>, ..., <em>elementN</em>)</code>
@param element1, ..., elementN The elements to add to the end of the array.
@name push
@methodOf Array#
*/
/**
Reverses an array in place.  The first array element becomes the last and the
last becomes the first.

<code><em>array</em>.reverse()</code>

@name reverse
@methodOf Array#
*/
/**
Removes the first element from an array and returns that element. This method
changes the length of the array.

<code><em>array</em>.shift()</code>

@name shift
@methodOf Array#
*/
/**
Sorts the elements of an array in place.

<code><em>array</em>.sort([<em>compareFunction</em>])</code>
@param compareFunction  Specifies a function that defines the sort order. If
omitted, the array is sorted lexicographically (in dictionary order) according
to the string conversion of each element.
@name sort
@methodOf Array#
*/
/**
Changes the content of an array, adding new elements while removing old
elements.

<code><em>array</em>.splice(<em>index</em>, <em>howMany</em>[, <em>element1</em>[, ...[, <em>elementN</em>]]])</code>
@param index  Index at which to start changing the array. If negative, will
begin that many elements from the end.
@param howMany  An integer indicating the number of old array elements to
remove. If howMany is 0, no elements are removed. In this case, you should
specify at least one new element. If no howMany parameter is specified (second
syntax above, which is a SpiderMonkey extension), all elements after index are
removed.
@param element1, ..., elementN  The elements to add to the array. If you don't
specify any elements, splice simply removes elements from the array.
@name splice
@methodOf Array#
*/
/**
Adds one or more elements to the beginning of an array and returns the new
length of the array.

<code><em>arrayName</em>.unshift(<em>element1</em>, ..., <em>elementN</em>) </code>
@param element1, ..., elementN The elements to add to the front of the array.
@name unshift
@methodOf Array#
*/
/**
Returns a new array comprised of this array joined with other array(s) and/or
value(s).

<code><em>array</em>.concat(<em>value1</em>, <em>value2</em>, ..., <em>valueN</em>)</code>
@param valueN  Arrays and/or values to concatenate to the resulting array.
@name concat
@methodOf Array#
*/
/**
Joins all elements of an array into a string.

<code><em>array</em>.join(<em>separator</em>)</code>
@param separator  Specifies a string to separate each element of the array. The
separator is converted to a string if necessary. If omitted, the array elements
are separated with a comma.
@name join
@methodOf Array#
*/
/**
Returns a one-level deep copy of a portion of an array.

<code><em>array</em>.slice(<em>begin</em>[, <em>end</em>])</code>
@param begin  Zero-based index at which to begin extraction.As a negative index,
start indicates an offset from the end of the sequence. slice(-2) extracts the
second-to-last element and the last element in the sequence.
@param end  Zero-based index at which to end extraction. slice extracts up to
but not including end.slice(1,4) extracts the second element through the fourth
element (elements indexed 1, 2, and 3).As a negative index, end indicates an
offset from the end of the sequence. slice(2,-1) extracts the third element
through the second-to-last element in the sequence.If end is omitted, slice
extracts to the end of the sequence.
@name slice
@methodOf Array#
*/
/**
Returns a string representing the specified array and its elements.

<code><em>array</em>.toString()</code>

@name toString
@methodOf Array#
*/
/**
Returns the first index at which a given element can be found in the array, or
-1 if it is not present.

<code><em>array</em>.indexOf(<em>searchElement</em>[, <em>fromIndex</em>])</code>
@param searchElement fromIndex  Element to locate in the array.The index at
which to begin the search. Defaults to 0, i.e. the whole array will be searched.
If the index is greater than or equal to the length of the array, -1 is
returned, i.e. the array will not be searched. If negative, it is taken as the
offset from the end of the array. Note that even when the index is negative, the
array is still searched from front to back. If the calculated index is less than
0, the whole array will be searched.
@name indexOf
@methodOf Array#
*/
/**
Returns the last index at which a given element can be found in the array, or -1
if it is not present. The array is searched backwards, starting at fromIndex.

<code><em>array</em>.lastIndexOf(<em>searchElement</em>[, <em>fromIndex</em>])</code>
@param searchElement fromIndex  Element to locate in the array.The index at
which to start searching backwards. Defaults to the array's length, i.e. the
whole array will be searched. If the index is greater than or equal to the
length of the array, the whole array will be searched. If negative, it is taken
as the offset from the end of the array. Note that even when the index is
negative, the array is still searched from back to front. If the calculated
index is less than 0, -1 is returned, i.e. the array will not be searched.
@name lastIndexOf
@methodOf Array#
*/
/**
Creates a new array with all elements that pass the test implemented by the
provided function.

<code><em>array</em>.filter(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to test each element of the array.Object to
use as this when executing callback.
@name filter
@methodOf Array#
*/
/**
Executes a provided function once per array element.

<code><em>array</em>.forEach(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to execute for each element.Object to use
as this when executing callback.
@name forEach
@methodOf Array#
*/
/**
Tests whether all elements in the array pass the test implemented by the
provided function.

<code><em>array</em>.every(<em>callback</em>[, <em>thisObject</em>])</code>
@param callbackthisObject Function to test for each element.Object to use as
this when executing callback.
@name every
@methodOf Array#
*/
/**
Creates a new array with the results of calling a provided function on every
element in this array.

<code><em>array</em>.map(<em>callback</em>[, <em>thisObject</em>])</code>
@param callbackthisObject Function that produces an element of the new Array
from an element of the current one.Object to use as this when executing
callback.
@name map
@methodOf Array#
*/
/**
Tests whether some element in the array passes the test implemented by the
provided function.

<code><em>array</em>.some(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to test for each element.Object to use as
this when executing callback.
@name some
@methodOf Array#
*/
/**
Apply a function against an accumulator and each value of the array (from
left-to-right) as to reduce it to a single value.

<code><em>array</em>.reduce(<em>callback</em>[, <em>initialValue</em>])</code>
@param callbackinitialValue Function to execute on each value in the
array.Object to use as the first argument to the first call of the callback.
@name reduce
@methodOf Array#
*/
/**
Apply a function simultaneously against two values of the array (from
right-to-left) as to reduce it to a single value.

<code><em>array</em>.reduceRight(<em>callback</em>[, <em>initialValue</em>])</code>
@param callback initialValue  Function to execute on each value in the
array.Object to use as the first argument to the first call of the callback.
@name reduceRight
@methodOf Array#
*/
/**
Returns a boolean indicating whether the object has the specified property.

<code><em>obj</em>.hasOwnProperty(<em>prop</em>)</code>
@param prop The name of the property to test.
@name hasOwnProperty
@methodOf Object#
*/
/**
Calls a function with a given this value and arguments provided as an array.

<code><em>fun</em>.apply(<em>thisArg</em>[, <em>argsArray</em>])</code>
@param thisArg  Determines the value of this inside fun. If thisArg is null or
undefined, this will be the global object. Otherwise, this will be equal to
Object(thisArg) (which is thisArg if thisArg is already an object, or a String,
Boolean, or Number if thisArg is a primitive value of the corresponding type).
Therefore, it is always true that typeof this == "object" when the function
executes.
@param argsArray  An argument array for the object, specifying the arguments
with which fun should be called, or null or undefined if no arguments should be
provided to the function.
@name apply
@methodOf Function#
*/
/**
Creates a new function that, when called, itself calls this function in the
context of the provided this value, with a given sequence of arguments preceding
any provided when the new function was called.

<code><em>fun</em>.bind(<em>thisArg</em>[, <em>arg1</em>[, <em>arg2</em>[, ...]]])</code>
@param thisValuearg1, arg2, ... The value to be passed as the this parameter to
the target function when the bound function is called.  The value is ignored if
the bound function is constructed using the new operator.Arguments to prepend to
arguments provided to the bound function when invoking the target function.
@name bind
@methodOf Function#
*/
/**
Calls a function with a given this value and arguments provided individually.

<code><em>fun</em>.call(<em>thisArg</em>[, <em>arg1</em>[, <em>arg2</em>[, ...]]])</code>
@param thisArg  Determines the value of this inside fun. If thisArg is null or
undefined, this will be the global object. Otherwise, this will be equal to
Object(thisArg) (which is thisArg if thisArg is already an object, or a String,
Boolean, or Number if thisArg is a primitive value of the corresponding type).
Therefore, it is always true that typeof this == "object" when the function
executes.
@param arg1, arg2, ...  Arguments for the object.
@name call
@methodOf Function#
*/
/**
Returns a string representing the source code of the function.

<code><em>function</em>.toString(<em>indentation</em>)</code>
@param indentation Non-standard     The amount of spaces to indent the string
representation of the source code. If indentation is less than or equal to -1,
most unnecessary spaces are removed.
@name toString
@methodOf Function#
*/
/**
Executes a search for a match in a specified string. Returns a result array, or
null.


@param regexp  The name of the regular expression. It can be a variable name or
a literal.
@param str  The string against which to match the regular expression.
@name exec
@methodOf RegExp#
*/
/**
Executes the search for a match between a regular expression and a specified
string. Returns true or false.

<code> <em>regexp</em>.test([<em>str</em>]) </code>
@param regexp  The name of the regular expression. It can be a variable name or
a literal.
@param str  The string against which to match the regular expression.
@name test
@methodOf RegExp#
*/
/**
Returns a string representing the specified object.

<code><i>regexp</i>.toString()</code>

@name toString
@methodOf RegExp#
*/
/**
Returns a reference to the Date function that created the instance's prototype.
Note that the value of this property is a reference to the function itself, not
a string containing the function's name.



@name constructor
@methodOf Date#
*/
/**
Returns the day of the month for the specified date according to local time.

<code>
getDate()
</code>

@name getDate
@methodOf Date#
*/
/**
Returns the day of the week for the specified date according to local time.

<code>
getDay()
</code>

@name getDay
@methodOf Date#
*/
/**
Returns the year of the specified date according to local time.

<code>
getFullYear()
</code>

@name getFullYear
@methodOf Date#
*/
/**
Returns the hour for the specified date according to local time.

<code>
getHours()
</code>

@name getHours
@methodOf Date#
*/
/**
Returns the milliseconds in the specified date according to local time.

<code>
getMilliseconds()
</code>

@name getMilliseconds
@methodOf Date#
*/
/**
Returns the minutes in the specified date according to local time.

<code>
getMinutes()
</code>

@name getMinutes
@methodOf Date#
*/
/**
Returns the month in the specified date according to local time.

<code>
getMonth()
</code>

@name getMonth
@methodOf Date#
*/
/**
Returns the seconds in the specified date according to local time.

<code>
getSeconds()
</code>

@name getSeconds
@methodOf Date#
*/
/**
Returns the numeric value corresponding to the time for the specified date
according to universal time.

<code> getTime() </code>

@name getTime
@methodOf Date#
*/
/**
Returns the time-zone offset from UTC, in minutes, for the current locale.

<code> getTimezoneOffset() </code>

@name getTimezoneOffset
@methodOf Date#
*/
/**
Returns the day (date) of the month in the specified date according to universal
time.

<code>
getUTCDate()
</code>

@name getUTCDate
@methodOf Date#
*/
/**
Returns the day of the week in the specified date according to universal time.

<code>
getUTCDay()
</code>

@name getUTCDay
@methodOf Date#
*/
/**
Returns the year in the specified date according to universal time.

<code>
getUTCFullYear()
</code>

@name getUTCFullYear
@methodOf Date#
*/
/**
Returns the hours in the specified date according to universal time.

<code>
getUTCHours
</code>

@name getUTCHours
@methodOf Date#
*/
/**
Returns the milliseconds in the specified date according to universal time.

<code>
getUTCMilliseconds()
</code>

@name getUTCMilliseconds
@methodOf Date#
*/
/**
Returns the minutes in the specified date according to universal time.

<code>
getUTCMinutes()
</code>

@name getUTCMinutes
@methodOf Date#
*/
/**
Returns the month of the specified date according to universal time.

<code>
getUTCMonth()
</code>

@name getUTCMonth
@methodOf Date#
*/
/**
Returns the seconds in the specified date according to universal time.

<code>
getUTCSeconds()
</code>

@name getUTCSeconds
@methodOf Date#
*/
/**
Sets the day of the month for a specified date according to local time.

<code> setDate(<em>dayValue</em>) </code>
@param dayValue  An integer from 1 to 31, representing the day of the month.
@name setDate
@methodOf Date#
*/
/**
Sets the full year for a specified date according to local time.

<code>
setFullYear(<i>yearValue</i>[, <i>monthValue</i>[, <em>dayValue</em>]])
</code>
@param  yearValue   An integer specifying the numeric value of the year, for
example, 1995.
@param  monthValue   An integer between 0 and 11 representing the months January
through December.
@param  dayValue   An integer between 1 and 31 representing the day of the
month. If you specify the dayValue parameter, you must also specify the
monthValue.
@name setFullYear
@methodOf Date#
*/
/**
Sets the hours for a specified date according to local time.

<code>
setHours(<i>hoursValue</i>[, <i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]]])
</code>
@param  hoursValue   An integer between 0 and 23, representing the hour. 
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setHours
@methodOf Date#
*/
/**
Sets the milliseconds for a specified date according to local time.

<code>
setMilliseconds(<i>millisecondsValue</i>)
</code>
@param  millisecondsValue   A number between 0 and 999, representing the
milliseconds.
@name setMilliseconds
@methodOf Date#
*/
/**
Sets the minutes for a specified date according to local time.

<code>
setMinutes(<i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]])
</code>
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setMinutes
@methodOf Date#
*/
/**
Set the month for a specified date according to local time.

<code>
setMonth(<i>monthValue</i>[, <em>dayValue</em>])
</code>
@param  monthValue   An integer between 0 and 11 (representing the months
January through December).
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setMonth
@methodOf Date#
*/
/**
Sets the seconds for a specified date according to local time.

<code>
setSeconds(<i>secondsValue</i>[, <em>msValue</em>])
</code>
@param  secondsValue   An integer between 0 and 59. 
@param  msValue   A number between 0 and 999, representing the milliseconds.
@name setSeconds
@methodOf Date#
*/
/**
Sets the Date object to the time represented by a number of milliseconds since
January 1, 1970, 00:00:00 UTC.

<code>
setTime(<i>timeValue</i>)
</code>
@param  timeValue   An integer representing the number of milliseconds since 1
January 1970, 00:00:00 UTC.
@name setTime
@methodOf Date#
*/
/**
Sets the day of the month for a specified date according to universal time.

<code>
setUTCDate(<i>dayValue</i>)
</code>
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setUTCDate
@methodOf Date#
*/
/**
Sets the full year for a specified date according to universal time.

<code>
setUTCFullYear(<i>yearValue</i>[, <i>monthValue</i>[, <em>dayValue</em>]])
</code>
@param  yearValue   An integer specifying the numeric value of the year, for
example, 1995.
@param  monthValue   An integer between 0 and 11 representing the months January
through December.
@param  dayValue   An integer between 1 and 31 representing the day of the
month. If you specify the dayValue parameter, you must also specify the
monthValue.
@name setUTCFullYear
@methodOf Date#
*/
/**
Sets the hour for a specified date according to universal time.

<code>
setUTCHours(<i>hoursValue</i>[, <i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]]])
</code>
@param  hoursValue   An integer between 0 and 23, representing the hour. 
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setUTCHours
@methodOf Date#
*/
/**
Sets the milliseconds for a specified date according to universal time.

<code>
setUTCMilliseconds(<i>millisecondsValue</i>)
</code>
@param  millisecondsValue   A number between 0 and 999, representing the
milliseconds.
@name setUTCMilliseconds
@methodOf Date#
*/
/**
Sets the minutes for a specified date according to universal time.

<code>
setUTCMinutes(<i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]])
</code>
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setUTCMinutes
@methodOf Date#
*/
/**
Sets the month for a specified date according to universal time.

<code>
setUTCMonth(<i>monthValue</i>[, <em>dayValue</em>])
</code>
@param  monthValue   An integer between 0 and 11, representing the months
January through December.
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setUTCMonth
@methodOf Date#
*/
/**
Sets the seconds for a specified date according to universal time.

<code>
setUTCSeconds(<i>secondsValue</i>[, <em>msValue</em>])
</code>
@param  secondsValue   An integer between 0 and 59. 
@param  msValue   A number between 0 and 999, representing the milliseconds.
@name setUTCSeconds
@methodOf Date#
*/
/**
Returns the date portion of a Date object in human readable form in American
English.

<code><em>date</em>.toDateString()</code>

@name toDateString
@methodOf Date#
*/
/**
Returns a JSON representation of the Date object.

<code><em>date</em>.prototype.toJSON()</code>

@name toJSON
@methodOf Date#
*/
/**
Converts a date to a string, returning the "date" portion using the operating
system's locale's conventions.

<code>
toLocaleDateString()
</code>

@name toLocaleDateString
@methodOf Date#
*/
/**
Converts a date to a string, using the operating system's locale's conventions.

<code>
toLocaleString()
</code>

@name toLocaleString
@methodOf Date#
*/
/**
Converts a date to a string, returning the "time" portion using the current
locale's conventions.

<code> toLocaleTimeString() </code>

@name toLocaleTimeString
@methodOf Date#
*/
/**
Returns a string representing the specified Date object.

<code> toString() </code>

@name toString
@methodOf Date#
*/
/**
Returns the time portion of a Date object in human readable form in American
English.

<code><em>date</em>.toTimeString()</code>

@name toTimeString
@methodOf Date#
*/
/**
Converts a date to a string, using the universal time convention.

<code> toUTCString() </code>

@name toUTCString
@methodOf Date#
*/

;
/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/**
Generate a random uuid.

<code><pre>
   // No arguments  - returns RFC4122, version 4 ID
   Math.uuid()
=> "92329D39-6F5C-4520-ABFC-AAB64544E172"

   // One argument - returns ID of the specified length
   Math.uuid(15)     // 15 character ID (default base=62)
=> "VcydxgltxrVZSTV"

   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
   Math.uuid(8, 2)  // 8 character ID (base=2)
=> "01001010"

   Math.uuid(8, 10) // 8 character ID (base=10)
=> "47473046"

   Math.uuid(8, 16) // 8 character ID (base=16)
=> "098F4D35"
</pre></code>

@name uuid
@methodOf Math
@param length The desired number of characters
@param radix  The number of allowable values for each character.
 */
(function() {
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); 

  Math.uuid = function (len, radix) {
    var chars = CHARS, uuid = [];
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (var i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (var i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };

  // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
  // by minimizing calls to random()
  Math.uuidFast = function() {
    var chars = CHARS, uuid = new Array(36), rnd=0, r;
    for (var i = 0; i < 36; i++) {
      if (i==8 || i==13 ||  i==18 || i==23) {
        uuid[i] = '-';
      } else if (i==14) {
        uuid[i] = '4';
      } else {
        if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
        r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
    return uuid.join('');
  };

  // A more compact, but less performant, RFC4122v4 solution:
  Math.uuidCompact = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }).toUpperCase();
  };
})();;
;
;
var ActiveBounds;

ActiveBounds = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    x: 0,
    y: 0,
    width: 8,
    height: 8,
    activeBounds: Rectangle({
      x: 0,
      y: 0,
      width: App.width,
      height: App.height
    })
  });
  return self.bind('update', function() {
    var _ref, _ref2;
    if (!((I.activeBounds.left <= (_ref = I.x) && _ref <= I.activeBounds.right))) {
      self.destroy();
    }
    if (!((I.activeBounds.top <= (_ref2 = I.y) && _ref2 <= I.activeBounds.bottom))) {
      return self.destroy();
    }
  });
};
;
/**
The Ageable module handles keeping track of an object's age.

<code><pre>
player = GameObject()

player.update(1)

#=> player.I.age == 1

</pre></code>

@name Ageable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Ageable;

Ageable = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    age: 0
  });
  self.bind('afterUpdate', function(dt) {
    return I.age += dt;
  });
  return {};
};
;
/**
The Bounded module is used to provide basic data about the
location and dimensions of the including object. This module is included
by default in <code>GameObject</code>.

<code><pre>
player = Core
  x: 10
  y: 50
  width: 20
  height: 20
  other: "stuff"
  more: "properties"

player.position()
# => Uncaught TypeError: Object has no method 'position'

player.include(Bounded)

# now player has all the methods provided by this module
player.position()
# => {x: 10, y: 50}
</pre></code>

@see GameObject

Bounded module
@name Bounded
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Bounded;

Bounded = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    x: 0,
    y: 0,
    width: 8,
    height: 8,
    collisionMargin: Point(0, 0)
  });
  return {
    /**
    Get the object closest to this one.
    
    @name closest
    @methodOf Bounded#
    @param {Object|Array|String} selector An object or set of objects to find the closest from.
    */
    closest: function(selector) {
      var position;
      if (Object.isString(selector)) {
        selector = engine.find(selector);
      } else {
        selector = [].concat(selector);
      }
      position = self.position();
      return selector.sort(function(a, b) {
        return Point.distanceSquared(position, a.position()) - Point.distanceSquared(position, b.position());
      }).first();
    },
    /**
    Distance between two objects. Proxies to Point.distance.
    In order for this to work, `otherObj` must have a 
    position method.
    
    <code><pre>
    player = GameObject
      x: 50
      y: 50
      width: 10
      height: 10
    
    player.include Bounded
    
    enemy = GameObject
      x: 110
      y: 120
      width: 7
      height: 20
      
    player.distance(enemy)
    # => 92.19544457292888
    </pre></code>
    
    @name distance
    @methodOf Bounded#
    @see Point.distance
    @returns {Number} Distance between the two objects
    */
    distance: function(otherObj) {
      return Point.distance(self.position(), otherObj.position());
    },
    /**
    The position of this game object. By default it is the top left point.
    Redefining the center method will change the relative position.
    
    <code><pre>
    player = Core
      x: 50
      y: 40
    
    player.include(Bounded)      
    
    player.position()
    # => {x: 50, y: 40}
    </pre></code>
    
    @name position
    @methodOf Bounded#
    @returns {Point} The position of this object
    */
    position: function(newPosition) {
      if (newPosition != null) {
        I.x = newPosition.x;
        return I.y = newPosition.y;
      } else {
        return Point(I.x, I.y);
      }
    },
    changePosition: function(delta) {
      I.x += delta.x;
      I.y += delta.y;
      return self;
    },
    /**
    Does a check to see if this object is overlapping
    with the bounds passed in.
    
    <code><pre>
    player = Core
      x: 4
      y: 6
      width: 20
      height: 20
    
    player.include(Bounded)  
    
    player.collides({x: 5, y: 7, width: 20, height: 20})
    # => true
    </pre></code>
    
    @name collides
    @methodOf Bounded#
    @returns {Point} The position of this object
    */
    collides: function(bounds) {
      return Collision.rectangular(self.bounds(), bounds);
    },
    /**
    This returns a modified bounds based on the collision margin.
    The area of the bounds is reduced if collision margin is positive
    and increased if collision margin is negative.
    
    <code><pre>
    player = Core
      collisionMargin: 
        x: -2
        y: -4
      x: 50
      y: 50
      width: 20
      height: 20
    
    player.include(Bounded)
    
    player.collisionBounds()
    # => {x: 38, y: 36, height: 28, width: 24}
    
    player.collisionBounds(10, 10)
    # => {x: 48, y: 46, height: 28, width: 24}
    </pre></code>
    
    @name collisionBounds
    @methodOf Bounded#
    @param {Number} xOffset the amount to shift the x position 
    @param {Number} yOffset the amount to shift the y position
    @returns {Object} The collision bounds
    */
    collisionBounds: function(xOffset, yOffset) {
      var bounds;
      bounds = self.bounds(xOffset, yOffset);
      bounds.x += I.collisionMargin.x;
      bounds.y += I.collisionMargin.y;
      bounds.width -= 2 * I.collisionMargin.x;
      bounds.height -= 2 * I.collisionMargin.y;
      return bounds;
    },
    /**
    Returns infomation about the location of the object and its dimensions with optional offsets.
    
    <code><pre>
    player = Core
      x: 3
      y: 6
      width: 2
      height: 2
    
    player.include(Bounded)
    
    player.bounds()
    # => {x: 3, y: 6, width: 2, height: 2}
    
    player.bounds(7, 4)
    # => {x: 10, y: 10, width: 2, height: 2}   
    </pre></code>
    
    @name bounds
    @methodOf Bounded#
    @param {Number} xOffset the amount to shift the x position 
    @param {Number} yOffset the amount to shift the y position
    */
    bounds: function(xOffset, yOffset) {
      var center;
      center = self.center();
      return {
        x: center.x - I.width / 2 + (xOffset || 0),
        y: center.y - I.height / 2 + (yOffset || 0),
        width: I.width,
        height: I.height
      };
    },
    /**
    The centeredBounds method returns infomation about the center
    of the object along with the midpoint of the width and height.
    
    <code><pre>
    player = Core
      x: 3
      y: 6
      width: 2
      height: 2
    
    player.include(Bounded)
    
    player.centeredBounds()
    # => {x: 4, y: 7, xw: 1, yw: 1}
    </pre></code>
    
    @name centeredBounds
    @methodOf Bounded#
    */
    centeredBounds: function() {
      var center;
      center = self.center();
      return {
        x: center.x,
        y: center.y,
        xw: I.width / 2,
        yw: I.height / 2
      };
    },
    /**
    The center method returns the {@link Point} that is
    the center of the object.
    
    <code><pre>
    player = Core
      x: 50
      y: 40
      width: 10
      height: 30
    
    player.include(Bounded)  
    
    player.center()
    # => {x: 30, y: 35}
    </pre></code>
    
    @name center
    @methodOf Bounded#
    @returns {Point} The middle of the calling object
    */
    center: function(newCenter) {
      return self.position(newCenter);
    },
    /**
    Return the circular bounds of the object. The circle is
    centered at the midpoint of the object.
    
    <code><pre>
    player = Core
      radius: 5
      x: 50
      y: 50
      other: "stuff"
    
    player.include(Bounded)
    
    player.circle()
    # => {radius: 5, x: 50, y: 50}
    </pre></code>
    
    @name circle
    @methodOf Bounded#
    @returns {Object} An object with a position and a radius
    */
    circle: function() {
      var circle;
      circle = self.center();
      circle.radius = I.radius || I.width / 2 || I.height / 2;
      return circle;
    }
  };
};
;
var Camera;

Camera = function(I) {
  var currentObject, currentType, focusOn, followTypes, objectFilters, self, transformFilters;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    cameraBounds: Rectangle({
      x: 0,
      y: 0,
      width: App.width,
      height: App.height
    }),
    screen: Rectangle({
      x: 0,
      y: 0,
      width: App.width,
      height: App.height
    }),
    deadzone: Point(0, 0),
    zoom: 1,
    transform: Matrix(),
    x: App.width / 2,
    y: App.height / 2,
    velocity: Point.ZERO,
    maxSpeed: 25,
    t90: 2
  });
  currentType = "centered";
  currentObject = null;
  objectFilters = [];
  transformFilters = [];
  focusOn = function(object) {
    var c, dampingFactor, delta, dt, force, objectCenter, objectVelocity, target;
    dt = 1 / 30;
    dampingFactor = 2;
    c = dt * 3.75 / I.t90;
    if (c >= 1) {
      self.position(target);
      return I.velocity = Point.ZERO;
    } else {
      objectCenter = object.center();
      objectVelocity = object.I.velocity;
      if (objectVelocity) {
        target = objectCenter.add(objectVelocity.scale(5));
      } else {
        target = objectCenter;
      }
      delta = target.subtract(self.position());
      force = delta.subtract(I.velocity.scale(dampingFactor));
      self.changePosition(I.velocity.scale(c).clamp(I.maxSpeed));
      return I.velocity = I.velocity.add(force.scale(c));
    }
  };
  followTypes = {
    centered: function(object) {
      I.deadzone = Point(0, 0);
      return focusOn(object);
    },
    topdown: function(object) {
      var helper;
      helper = Math.max(I.screen.width, I.screen.height) / 4;
      I.deadzone = Point(helper, helper);
      return focusOn(object);
    },
    platformer: function(object) {
      var height, width;
      width = I.screen.width / 8;
      height = I.screen.height / 3;
      I.deadzone = Point(width, height);
      return focusOn(object);
    }
  };
  self = Core(I).extend({
    follow: function(object, type) {
      if (type == null) type = "centered";
      currentObject = object;
      return currentType = type;
    },
    objectFilterChain: function(fn) {
      return objectFilters.push(fn);
    },
    transformFilterChain: function(fn) {
      return transformFilters.push(fn);
    }
  });
  self.include(Bindable);
  self.attrAccessor("transform");
  self.bind("afterUpdate", function() {
    if (currentObject) followTypes[currentType](currentObject);
    I.x = I.x.clamp(I.cameraBounds.left + I.screen.width / 2, I.cameraBounds.right - I.screen.width / 2);
    I.y = I.y.clamp(I.cameraBounds.top + I.screen.height / 2, I.cameraBounds.bottom - I.screen.height / 2);
    return I.transform = Matrix.translate(-I.x, -I.y);
  });
  self.bind("draw", function(canvas, objects) {
    return canvas.withTransform(Matrix.translate(I.screen.x, I.screen.y), function(canvas) {
      var transform;
      canvas.clip(0, 0, I.screen.width, I.screen.height);
      objects = objectFilters.pipeline(objects);
      transform = transformFilters.pipeline(self.transform().copy());
      canvas.withTransform(Matrix.translation(I.screen.width / 2, I.screen.height / 2), function(canvas) {
        return canvas.withTransform(transform, function(canvas) {
          self.trigger("beforeDraw", canvas);
          return objects.invoke("draw", canvas);
        });
      });
      return self.trigger('flash', canvas);
    });
  });
  self.bind("overlay", function(canvas, objects) {
    return canvas.withTransform(Matrix.translate(I.screen.x, I.screen.y), function(canvas) {
      canvas.clip(0, 0, I.screen.width, I.screen.height);
      objects = objectFilters.pipeline(objects);
      return objects.invoke("trigger", "overlay", canvas);
    });
  });
  self.include(Bounded);
  self.include(Camera.ZSort);
  self.include(Camera.Zoom);
  self.include(Camera.Rotate);
  self.include(Camera.Shake);
  self.include(Camera.Flash);
  self.include(Camera.Fade);
  return self;
};
;
/**
The <code>Fade</code> module provides convenience methods for accessing common Engine.Flash presets.

@name Fade
@fieldOf Camera
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
@see Camera.Flash
*/
Camera.Fade = function(I, self) {
  var configureFade, fadeInDefaults, fadeOutDefaults;
  fadeInDefaults = {
    alpha: 0,
    color: 'black',
    duration: 30
  };
  fadeOutDefaults = {
    alpha: 1,
    color: 'transparent',
    duration: 30
  };
  configureFade = function(duration, color, alpha) {
    I.flashDuration = duration;
    I.flashCooldown = duration;
    I.flashColor = Color(color);
    return I.flashTargetAlpha = alpha;
  };
  return {
    /**
    A convenient way to set the flash effect instance variables. This provides a shorthand for fading the screen in 
    from a given color over a specified duration.
    
    <code><pre>
    engine.fadeIn()
    # => Sets the effect variables to their default state. This will the screen to go from black to transparent over the next 30 frames.
    
    engine.fadeIn('blue', 50)
    # => This effect will start off blue and fade to transparent over 50 frames.
    </pre></code>  
    
    @name fadeIn
    @methodOf Camera#
    @param {Number} [duration=30] How long the effect lasts
    @param {Color} [color="black"] The color to fade from
    */
    fadeIn: function(options) {
      var alpha, color, duration, _ref;
      if (options == null) options = {};
      _ref = Object.reverseMerge(options, fadeInDefaults), alpha = _ref.alpha, color = _ref.color, duration = _ref.duration;
      return configureFade(duration, color, alpha);
    },
    /**
    A convenient way to set the flash effect instance variables. This provides a shorthand for fading 
    the screen to a given color over a specified duration.
    
    <code><pre>
    camera.fadeOut()
    # => Sets the effect variables to their default state. This will the screen to fade from ransparent to black over the next 30 frames.
    
    camera.fadeOut('blue', 50)
    # => This effect will start off transparent and change to blue over 50 frames.
    </pre></code>  
    
    @name fadeOut
    @methodOf Camera#
    @param {Number} [duration=30] How long the effect lasts
    @param {Color} [color="transparent"] The color to fade to
    */
    fadeOut: function(options) {
      var alpha, color, duration, _ref;
      if (options == null) options = {};
      _ref = Object.reverseMerge(options, fadeOutDefaults), alpha = _ref.alpha, color = _ref.color, duration = _ref.duration;
      return configureFade(duration, color, alpha);
    }
  };
};
;
/**
The <code>Flash</code> module allows you to flash a color onscreen and then fade to transparent over a time period. 
This is nice for lightning type effects or to accentuate major game events.

@name Flash
@fieldOf Camera
@module
@param {Object} I Instance variables
@param {Object} self Reference to the camera
*/
Camera.Flash = function(I, self) {
  var defaultParams;
  Object.reverseMerge(I, {
    flashColor: Color(0, 0, 0, 0),
    flashDuration: 12,
    flashCooldown: 0,
    flashTargetAlpha: 0
  });
  defaultParams = {
    color: 'white',
    duration: 12,
    targetAlpha: 0
  };
  self.bind('afterUpdate', function() {
    if (I.flashCooldown > 0) {
      I.flashColor.a = I.flashColor.a.approach(I.flashTargetAlpha, 1 / I.flashDuration).clamp(0, 1);
      if (I.flashColor.a < 0.00001) I.flashColor.a = 0;
      if (I.flashColor.a > 0.9999) I.flashColor.a = 1;
      return I.flashCooldown = I.flashCooldown.approach(0, 1);
    }
  });
  self.bind('flash', function(canvas) {
    return canvas.fill(I.flashColor);
  });
  return {
    /**
    A convenient way to set the flash effect instance variables. Alternatively, you can modify them by hand, but
    using Camera#flash is the suggested approach.
    
    <code><pre>
    camera.flash()
    # => Sets the flash effect variables to their default state. This will cause a white flash that will turn transparent in the next 12 frames.
    
    camera.flash
      color: 'green'
      duration: 30
    # => This flash effect will start off green and fade to transparent over 30 frames.
    
    camera.flash
      color: Color(255, 0, 0, 0)
      duration: 20
      targetAlpha: 1
    # => This flash effect will start off transparent and move toward red over 20 frames 
    </pre></code>  
    
    @name flash
    @methodOf Camera#
    @param {Color} [color="white"] The flash color
    @param {Number} [duration=12] How long the effect lasts
    @param {Number} [targetAlpha=0] The alpha value to fade to. By default, this is set to 0, which fades the color to transparent.
    */
    flash: function(options) {
      var color, duration, targetAlpha;
      if (options == null) options = {};
      Object.reverseMerge(options, defaultParams);
      color = options.color, duration = options.duration, targetAlpha = options.targetAlpha;
      I.flashColor = Color(color);
      I.flashTargetAlpha = targetAlpha;
      I.flashCooldown = duration;
      I.flashDuration = duration;
      return self;
    }
  };
};
;

Camera.Rotate = function(I, self) {
  Object.reverseMerge(I, {
    rotation: 0
  });
  self.transformFilterChain(function(transform) {
    return transform.rotate(I.rotation, self.position());
  });
  self.attrAccessor("rotation");
  return {
    rotate: function(amount) {
      return self.rotation(I.rotation + amount);
    }
  };
};
;

Camera.Shake = function(I, self) {
  var defaultParams;
  Object.reverseMerge(I, {
    shakeIntensity: 20,
    shakeCooldown: 0
  });
  defaultParams = {
    duration: 10,
    intensity: 20
  };
  self.bind("afterUpdate", function() {
    return I.shakeCooldown = I.shakeCooldown.approach(0, 1);
  });
  self.transformFilterChain(function(transform) {
    if (I.shakeCooldown > 0) {
      transform.tx += signedRand(I.shakeIntensity);
      transform.ty += signedRand(I.shakeIntensity);
    }
    return transform;
  });
  return {
    shake: function(options) {
      var duration, intensity, _ref;
      if (options == null) options = {};
      _ref = Object.reverseMerge(options, defaultParams), duration = _ref.duration, intensity = _ref.intensity;
      I.shakeCooldown = duration * I.zoom;
      I.shakeIntensity = intensity * I.zoom;
      return self;
    }
  };
};
;

Camera.Zoom = function(I, self) {
  var clampZoom;
  Object.reverseMerge(I, {
    maxZoom: 10,
    minZoom: 0.1,
    zoom: 1
  });
  self.transformFilterChain(function(transform) {
    return transform.scale(I.zoom, I.zoom, self.position());
  });
  clampZoom = function(value) {
    return value.clamp(I.minZoom, I.maxZoom);
  };
  return {
    zoomIn: function(percentage) {
      return self.zoom(clampZoom(I.zoom * (1 + percentage)));
    },
    zoomOut: function(percentage) {
      return self.zoom(clampZoom(I.zoom * (1 - percentage)));
    },
    zoom: function(value) {
      if (value != null) {
        I.zoom = clampZoom(value);
        return self;
      } else {
        return I.zoom;
      }
    }
  };
};
;

Camera.ZSort = function(I, self) {
  Object.reverseMerge(I, {
    zSort: true
  });
  self.objectFilterChain(function(objects) {
    if (I.zSort) {
      objects.sort(function(a, b) {
        return a.I.zIndex - b.I.zIndex;
      });
    }
    return objects;
  });
  return {};
};
;
/**
The <code>Clampable</code> module provides helper methods to clamp object properties. 

@name Clampable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Clampable;

Clampable = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    clampData: {}
  });
  self.bind("afterUpdate", function() {
    var data, property, _ref, _results;
    _ref = I.clampData;
    _results = [];
    for (property in _ref) {
      data = _ref[property];
      _results.push(I[property] = I[property].clamp(data.min, data.max));
    }
    return _results;
  });
  return {
    /**
    Keep an objects attributes within a given range.
    
    <code><pre>
    # Player's health will be within [0, 100] at the end of every update
    player.clamp
      health:
        min: 0
        max: 100
    
    # Score can only be positive
    player.clamp
      score:
        min: 0
    </pre></code>
    
    @name clamp
    @methodOf Clampable#
    @param {Object} data
    */
    clamp: function(data) {
      return Object.extend(I.clampData, data);
    },
    /**
    Helper to clamp the `x` and `y` properties of the object to be within a given bounds.
    
    @name clampToBounds
    @methodOf Clampable#
    @param {Rectangle} [bounds] The bounds to clamp the object's position within. Defaults to the app size if none given.
    */
    clampToBounds: function(bounds) {
      bounds || (bounds = Rectangle({
        x: 0,
        y: 0,
        width: App.width,
        height: App.height
      }));
      return self.clamp({
        x: {
          min: bounds.x + I.width / 2,
          max: bounds.width - I.width / 2
        },
        y: {
          min: bounds.y + I.height / 2,
          max: bounds.height - I.height / 2
        }
      });
    }
  };
};
;

(function() {
  /**
  Use this to handle generic rectangular collisions among game object a-la Flixel.
  
  @name Collidable
  @module
  @constructor
  */
  var ANY, CEILING, Collidable, DOWN, FLOOR, LEFT, NONE, RIGHT, UP, WALL, _ref, _ref2;
  Collidable = function(I, self) {
    Object.reverseMerge(I, {
      allowCollisions: ANY,
      immovable: false,
      touching: NONE,
      velocity: Point(0, 0),
      mass: 1,
      elasticity: 0
    });
    self.attrAccessor("immovable", "velocity", "mass", "elasticity");
    return {
      solid: function(newSolid) {
        if (newSolid != null) {
          if (newSolid) {
            return I.allowCollisions = ANY;
          } else {
            return I.allowCollisions = NONE;
          }
        } else {
          return I.allowCollisions;
        }
      }
    };
  };
  (typeof exports !== "undefined" && exports !== null ? exports : this)["Collidable"] = Collidable;
  /**
  */
  _ref = Object.extend(Collidable, {
    NONE: 0x0000,
    LEFT: 0x0001,
    RIGHT: 0x0010,
    UP: 0x0100,
    DOWN: 0x1000
  }), NONE = _ref.NONE, LEFT = _ref.LEFT, RIGHT = _ref.RIGHT, UP = _ref.UP, DOWN = _ref.DOWN;
  _ref2 = Object.extend(Collidable, {
    FLOOR: DOWN,
    WALL: LEFT | RIGHT,
    CEILING: UP,
    ANY: LEFT | RIGHT | UP | DOWN
  }), ANY = _ref2.ANY, FLOOR = _ref2.FLOOR, WALL = _ref2.WALL, CEILING = _ref2.CEILING;
  return Object.extend(Collidable, {
    separate: function(a, b) {
      var aBounds, aMass, aVelocity, average, bBounds, bMass, bVelocity, deltaVelocity, normal, overlap, pushA, pushB, relativeVelocity, totalMass;
      if (a.immovable() && b.immovable()) return;
      aBounds = a.bounds();
      bBounds = b.bounds();
      aVelocity = a.velocity();
      bVelocity = b.velocity();
      deltaVelocity = aVelocity.subtract(bVelocity);
      overlap = Point(0, 0);
      if (Collision.rectangular(aBounds, bBounds)) {
        if (deltaVelocity.x > 0) {
          overlap.x = aBounds.x + aBounds.width - bBounds.x;
          if (!(a.I.allowCollisions & RIGHT) || !(b.I.allowCollisions & LEFT)) {
            overlap.x = 0;
          } else {
            a.I.touching |= RIGHT;
            b.I.touching |= LEFT;
          }
        } else if (deltaVelocity.x < 0) {
          overlap.x = aBounds.x - bBounds.width - bBounds.x;
          if (!(a.I.allowCollisions & LEFT) || !(b.I.allowCollisions & RIGHT)) {
            overlap.x = 0;
          } else {
            a.I.touching |= LEFT;
            b.I.touching |= RIGHT;
          }
        }
        if (deltaVelocity.y > 0) {
          overlap.y = aBounds.y + aBounds.height - bBounds.y;
          if (!(a.I.allowCollisions & DOWN) || !(b.I.allowCollisions & UP)) {
            overlap.y = 0;
          } else {
            a.I.touching |= DOWN;
            b.I.touching |= UP;
          }
        } else if (deltaVelocity.y < 0) {
          overlap.y = aBounds.y - bBounds.height - bBounds.y;
          if (!(a.I.allowCollisions & UP) || !(b.I.allowCollisions & DOWN)) {
            overlap.y = 0;
          } else {
            a.I.touching |= UP;
            b.I.touching |= DOWN;
          }
        }
      }
      if (!overlap.equal(Point.ZERO)) {
        if (!a.immovable() && !b.immovable()) {
          a.changePosition(overlap.scale(-0.5));
          b.changePosition(overlap.scale(+0.5));
          relativeVelocity = aVelocity.subtract(bVelocity);
          aMass = a.mass();
          bMass = b.mass();
          totalMass = bMass + aMass;
          normal = overlap.norm();
          pushA = normal.scale(-2 * (relativeVelocity.dot(normal) * (bMass / totalMass)));
          pushB = normal.scale(+2 * (relativeVelocity.dot(normal) * (aMass / totalMass)));
          average = pushA.add(pushB).scale(0.5);
          pushA.subtract$(average).scale(a.elasticity());
          pushB.subtract$(average).scale(b.elasticity());
          a.I.velocity = average.add(pushA);
          b.I.velocity = average.add(pushB);
        } else if (!a.immovable()) {
          a.changePosition(overlap.scale(-1));
          a.I.velocity = bVelocity.subtract(aVelocity.scale(a.elasticity()));
        } else if (!b.immovable()) {
          b.changePosition(overlap);
          b.I.velocity = aVelocity.subtract(bVelocity.scale(b.elasticity()));
        }
        return true;
      }
    }
  });
})();
;

(function() {
  var Collision, collides;
  collides = function(a, b) {
    return Collision.rectangular(a.bounds(), b.bounds());
  };
  /**
  Collision holds many useful class methods for checking geometric overlap of various objects.
  
  @name Collision
  @namespace
  */
  Collision = {
    /**
    Collision holds many useful class methods for checking geometric overlap of various objects.
    
    <code><pre>
    player = engine.add
      class: "Player"
      x: 0
      y: 0
      width: 10
      height: 10
    
    enemy = engine.add
      class: "Enemy"
      x: 5
      y: 5
      width: 10
      height: 10
    
    enemy2 = engine.add
      class: "Enemy"
      x: -5
      y: -5
      width: 10
      height: 10
    
    Collision.collide(player, enemy, (p, e) -> ...)
    # => callback is called once
    
    Collision.collide(player, [enemy, enemy2], (p, e) -> ...)
    # => callback is called twice
    
    Collision.collide("Player", "Enemy", (p, e) -> ...)
    # => callback is also called twice
    </pre></code>
    
    @name collide
    @methodOf Collision
    @param {Object|Array|String} groupA An object or set of objects to check collisions with
    @param {Object|Array|String} groupB An object or set of objects to check collisions with
    @param {Function} callback The callback to call when an object of groupA collides
    with an object of groupB: (a, b) ->
    @param {Function} [detectionMethod] An optional detection method to determine when two 
    objects are colliding.
    */
    collide: function(groupA, groupB, callback, detectionMethod) {
      if (detectionMethod == null) detectionMethod = collides;
      if (Object.isString(groupA)) {
        groupA = engine.find(groupA);
      } else {
        groupA = [].concat(groupA);
      }
      if (Object.isString(groupB)) {
        groupB = engine.find(groupB);
      } else {
        groupB = [].concat(groupB);
      }
      return groupA.each(function(a) {
        return groupB.each(function(b) {
          if (detectionMethod(a, b)) return callback(a, b);
        });
      });
    },
    /**
    Takes two bounds objects and returns true if they collide (overlap), false otherwise.
    Bounds objects have x, y, width and height properties.
    
    <code><pre>
    player = GameObject
      x: 0
      y: 0
      width: 10
      height: 10
    
    enemy = GameObject
      x: 5
      y: 5
      width: 10
      height: 10
    
    Collision.rectangular(player, enemy)
    # => true
    
    Collision.rectangular(player, {x: 50, y: 40, width: 30, height: 30})
    # => false
    </pre></code>
    
    @name rectangular
    @methodOf Collision
    @param {Object} a The first rectangle
    @param {Object} b The second rectangle
    @returns {Boolean} true if the rectangles overlap, false otherwise
    */
    rectangular: function(a, b) {
      return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
    },
    /**
    Takes two circle objects and returns true if they collide (overlap), false otherwise.
    Circle objects have x, y, and radius.
    
    <code><pre>
    player = GameObject
      x: 5
      y: 5
      radius: 10
    
    enemy = GameObject
      x: 10
      y: 10
      radius: 10
    
    farEnemy = GameObject
      x: 500
      y: 500
      radius: 30
    
    Collision.circular(player, enemy)
    # => true
    
    Collision.circular(player, farEnemy)
    # => false
    </pre></code>
    
    @name circular
    @methodOf Collision
    @param {Object} a The first circle
    @param {Object} b The second circle
    @returns {Boolean} true is the circles overlap, false otherwise
    */
    circular: function(a, b) {
      var dx, dy, r;
      r = a.radius + b.radius;
      dx = b.x - a.x;
      dy = b.y - a.y;
      return r * r >= dx * dx + dy * dy;
    },
    /**
    Detects whether a line intersects a circle.
    
    <code><pre>
    circle = engine.add
      class: "circle"
      x: 50
      y: 50
      radius: 10
    
    Collision.rayCircle(Point(0, 0), Point(1, 0), circle)
    # => true
    </pre></code>
    
    @name rayCircle
    @methodOf Collision
    @param {Point} source The starting position
    @param {Point} direction A vector from the point
    @param {Object} target The circle 
    @returns {Boolean} true if the line intersects the circle, false otherwise
    */
    rayCircle: function(source, direction, target) {
      var dt, hit, intersection, intersectionToTarget, intersectionToTargetLength, laserToTarget, projection, projectionLength, radius;
      radius = target.radius();
      target = target.position();
      laserToTarget = target.subtract(source);
      projectionLength = direction.dot(laserToTarget);
      if (projectionLength < 0) return false;
      projection = direction.scale(projectionLength);
      intersection = source.add(projection);
      intersectionToTarget = target.subtract(intersection);
      intersectionToTargetLength = intersectionToTarget.length();
      if (intersectionToTargetLength < radius) hit = true;
      if (hit) {
        dt = Math.sqrt(radius * radius - intersectionToTargetLength * intersectionToTargetLength);
        return hit = direction.scale(projectionLength - dt).add(source);
      }
    },
    /**
    Detects whether a line intersects a rectangle.
    
    <code><pre>
    rect = engine.add
      class: "circle"
      x: 50
      y: 50
      width: 20
      height: 20
    
    Collision.rayRectangle(Point(0, 0), Point(1, 0), rect)
    # => true
    </pre></code>
    
    @name rayRectangle
    @methodOf Collision
    @param {Point} source The starting position
    @param {Point} direction A vector from the point
    @param {Object} target The rectangle
    @returns {Boolean} true if the line intersects the rectangle, false otherwise
    */
    rayRectangle: function(source, direction, target) {
      var areaPQ0, areaPQ1, hit, p0, p1, t, tX, tY, xval, xw, yval, yw, _ref, _ref2;
      if (!((target.xw != null) && (target.yw != null))) {
        if ((target.width != null) && (target.height != null)) {
          xw = target.width / 2;
          yw = target.height / 2;
          return Collision.rayRectangle(source, direction, {
            x: target.x + xw,
            y: target.y + yw,
            xw: xw,
            yw: yw
          });
        } else {
          error("Bounds object isn't a rectangle");
          return;
        }
      }
      xw = target.xw;
      yw = target.yw;
      if (source.x < target.x) {
        xval = target.x - xw;
      } else {
        xval = target.x + xw;
      }
      if (source.y < target.y) {
        yval = target.y - yw;
      } else {
        yval = target.y + yw;
      }
      if (direction.x === 0) {
        p0 = Point(target.x - xw, yval);
        p1 = Point(target.x + xw, yval);
        t = (yval - source.y) / direction.y;
      } else if (direction.y === 0) {
        p0 = Point(xval, target.y - yw);
        p1 = Point(xval, target.y + yw);
        t = (xval - source.x) / direction.x;
      } else {
        tX = (xval - source.x) / direction.x;
        tY = (yval - source.y) / direction.y;
        if ((tX < tY || ((-xw < (_ref = source.x - target.x) && _ref < xw))) && !((-yw < (_ref2 = source.y - target.y) && _ref2 < yw))) {
          p0 = Point(target.x - xw, yval);
          p1 = Point(target.x + xw, yval);
          t = tY;
        } else {
          p0 = Point(xval, target.y - yw);
          p1 = Point(xval, target.y + yw);
          t = tX;
        }
      }
      if (t > 0) {
        areaPQ0 = direction.cross(p0.subtract(source));
        areaPQ1 = direction.cross(p1.subtract(source));
        if (areaPQ0 * areaPQ1 < 0) return hit = direction.scale(t).add(source);
      }
    }
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Collision"] = Collision;
})();
;
var CollisionResponse;

CollisionResponse = function(I, self) {
  if (I == null) I = {};
  self.bind('update', function(elapsedTime) {
    var t, unit;
    t = (elapsedTime * I.velocity.x).abs();
    unit = I.velocity.x.sign();
    t.times(function() {
      if (self.collide(unit, 0, ".solid")) {
        return I.velocity.x = 0;
      } else {
        return I.x += unit;
      }
    });
    t = (elapsedTime * I.velocity.y).abs();
    unit = I.velocity.y.sign();
    return t.times(function() {
      if (self.collide(0, unit, ".solid")) {
        return I.velocity.y = 0;
      } else {
        return I.y += unit;
      }
    });
  });
  return self.extend({
    collide: function(xOffset, yOffset, className) {
      return engine.find(className).inject(false, function(hit, block) {
        return hit || Collision.rectangular(self.bounds(xOffset, yOffset), block.bounds());
      });
    }
  });
};
;
var __slice = Array.prototype.slice;

(function() {
  var Color, channelize, hslParser, hslToRgb, hsvToRgb, parseHSL, parseRGB, rgbParser;
  rgbParser = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(\d?\.?\d*)?\)$/;
  hslParser = /^hsla?\((\d{1,3}),\s*(\d?\.?\d*),\s*(\d?\.?\d*),?\s*(\d?\.?\d*)?\)$/;
  parseRGB = function(colorString) {
    var channel, channels, parsedColor;
    if (!(channels = rgbParser.exec(colorString))) return;
    parsedColor = (function() {
      var _i, _len, _ref, _results;
      _ref = channels.slice(1, 5);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        channel = _ref[_i];
        _results.push(parseFloat(channel));
      }
      return _results;
    })();
    if (isNaN(parsedColor[3])) parsedColor[3] = 1;
    return parsedColor;
  };
  parseHSL = function(colorString) {
    var channel, channels, parsedColor;
    if (!(channels = hslParser.exec(colorString))) return;
    parsedColor = (function() {
      var _i, _len, _ref, _results;
      _ref = channels.slice(1, 5);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        channel = _ref[_i];
        _results.push(parseFloat(channel));
      }
      return _results;
    })();
    if (isNaN(parsedColor[3])) parsedColor[3] = 1;
    return hslToRgb(parsedColor);
  };
  hsvToRgb = function(hsv) {
    var a, b, f, g, h, i, p, q, r, rgb, s, t, v;
    r = g = b = null;
    h = hsv[0], s = hsv[1], v = hsv[2], a = hsv[3];
    if (a == null) a = 1;
    i = (h / 60).floor();
    f = h / 60 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
    }
    rgb = [(r * 255).round(), (g * 255).round(), (b * 255).round()];
    return rgb.concat(a);
  };
  hslToRgb = function(hsl) {
    var a, b, channel, g, h, hueToRgb, l, p, q, r, rgbMap, s;
    h = hsl[0], s = hsl[1], l = hsl[2], a = hsl[3];
    h = h % 360;
    if (a == null) a = 1;
    r = g = b = null;
    hueToRgb = function(p, q, hue) {
      hue = hue.mod(360);
      if (hue < 60) return p + (q - p) * (hue / 60);
      if (hue < 180) return q;
      if (hue < 240) return p + (q - p) * ((240 - hue) / 60);
      return p;
    };
    if (s === 0) {
      r = g = b = l;
    } else {
      q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
      p = 2 * l - q;
      r = hueToRgb(p, q, h + 120);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 120);
    }
    rgbMap = (function() {
      var _i, _len, _ref, _results;
      _ref = [r, g, b];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        channel = _ref[_i];
        _results.push((channel * 255).round());
      }
      return _results;
    })();
    return rgbMap.concat(a);
  };
  channelize = function(color, alpha) {
    var channel, result;
    if (color.channels != null) return color.channels();
    if (Object.isArray(color)) {
      if (alpha != null) {
        alpha = parseFloat(alpha);
      } else if (color[3] != null) {
        alpha = parseFloat(color[3]);
      } else {
        alpha = 1;
      }
      result = ((function() {
        var _i, _len, _ref, _results;
        _ref = color.slice(0, 3);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          channel = _ref[_i];
          _results.push(parseFloat(channel));
        }
        return _results;
      })()).concat(alpha);
    } else {
      result = (typeof Color.lookup === "function" ? Color.lookup(color) : void 0) || color.parseHex() || parseRGB(color) || parseHSL(color);
      if (alpha != null) result[3] = parseFloat(alpha);
    }
    return result;
  };
  /**
  Create a new color. The constructor is very flexible. It accepts individual r, g, b, a values,
  arrays of r, g, b values, hex strings, rgb strings, hsl strings, other Color objects, 
  and even the named colors from the xkcd survey: http://blog.xkcd.com/2010/05/03/color-survey-results/. 
  If no arguments are given, defaults to transparent.
  
  <code class="run"><pre>
  individualRgb = Color(23, 56, 49, 0.4)
  
  arrayRgb = Color([59, 100, 230])
  
  hex = Color('#ff0000')
  
  rgb = Color('rgb(0, 255, 0)')
  
  hsl = Color('hsl(180, 1, 0.5)')
  
  anotherColor = Color('blue')
  
  Color(anotherColor)
  # => a new color with the same r, g, b, and alpha values as `anotherColor`
  
  # You have access to all sorts of weird colors.
  # We give you all the named colors the browser recognizes
  # and the ones from this survey 
  # http://blog.xkcd.com/2010/05/03/color-survey-results/
  namedBrown = Color('Fuzzy Wuzzy Brown')
  
  # Uutput color in Hex format 
  namedBrown.toHex()
  # => '#c45655'
  
  # Default behavior
  transparent = Color()
  
  transparent.toString()
  # => 'rgba(0, 0, 0, 0)' 
  
  # let's print out the colors on a canvas to see what they look like
  canvas.font('14px Helvetica')
  for color, index in ['individualRgb', 'arrayRgb', 'hex', 'rgb', 'hsl', 'anotherColor', 'namedBrown']
    canvas.centerText
      color: eval(color)
      text: color
      y: 20 * (index + 1)  
  </pre></code>
  
  @name Color
  @param {Array|Number|String|Color} args... An Array, r, g, b values, 
  a sequence of numbers defining r, g, b values, a hex or hsl string, another Color object, or a named color
  @constructor
  */
  Color = function() {
    var args, parsedColor;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    parsedColor = (function() {
      switch (args.length) {
        case 0:
          return [0, 0, 0, 0];
        case 1:
          return channelize(args.first());
        case 2:
          return channelize(args.first(), args.last());
        default:
          return channelize(args);
      }
    })();
    if (!parsedColor) throw "" + (args.join(',')) + " is an unknown color";
    return {
      __proto__: Color.prototype,
      r: parsedColor[0].round(),
      g: parsedColor[1].round(),
      b: parsedColor[2].round(),
      a: parsedColor[3]
    };
  };
  Color.prototype = {
    /**
    Returns the rgba color channels in an array.
    
    <code><pre>
    transparent =  Color()
    
    transparent.channels()
    # => [0, 0, 0, 0]
    
    red = Color("#FF0000")
    
    red.channels()
    # => [255, 0, 0, 1]
    
    rgb = Color(200, 34, 2)
    
    rgb.channels()
    # => [200, 34, 2, 1]
    </pre></code>
    
    @name channels
    @methodOf Color#
    
    @returns {Array} Array of r, g, b, and alpha values of the color
    */
    channels: function() {
      return [this.r, this.g, this.b, this.a];
    },
    /**
    A copy of the calling color that is its complementary color on the color wheel.
    
    <code class="run"><pre>
    red = Color(255, 0, 0)
    
    cyan = red.complement()
    
    # to see what they look like
    for color, index in [red, cyan]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60         
    </pre></code>
    
    @name complement
    @methodOf Color#
    
    @returns {Color} new color that is a copy of the calling color with its hue shifted by 180 degrees on the color wheel
    */
    complement: function() {
      return this.copy().complement$();
    },
    /**
    Modifies the calling color to make it the complement of its previous value.
    
    <code><pre>
    red = Color(255, 0, 0)
    
    # modifies red in place to make it into cyan
    red.complement$()
    
    red.toString()
    # => 'rgba(0, 255, 255, 1)'
    </pre></code>
    
    @name complement$
    @methodOf Color#
    
    @returns {Color} the color hue shifted by 180 degrees on the color wheel. Modifies the existing color.
    */
    complement$: function() {
      return this.shiftHue$(180);
    },
    /**
    A copy of the calling color.
    
    <code><pre>
    color = Color(0, 100, 200)
    
    copy = color.copy()
    
    color == copy
    # => false
    
    color.equal(copy)
    # => true
    </pre></code>
    
    @name copy
    @methodOf Color#
    
    @returns {Color} A new color. A copy of the calling color
    */
    copy: function() {
      return Color(this.r, this.g, this.b, this.a);
    },
    /**
    Returns a copy of the calling color darkened by `amount` (Lightness of the color ranges from 0 to 1).
    
    <code class="run"><pre>
    green = Color(0, 255, 0)
    
    darkGreen = green.darken(0.3)
    
    # to see what they look like
    for color, index in [green, darkGreen]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60         
    </pre></code>
    
    @name darken
    @methodOf Color#
    @param {Number} amount Amount to darken color by (between 0 - 1)
    
    @returns {Color} A new color. The lightness value is reduced by `amount` from the original.
    */
    darken: function(amount) {
      return this.copy().darken$(amount);
    },
    /**
    Modifies the color so that it is darkened by `amount` (Lightness of the color ranges from 0 to 1).
    
    <code><pre>
    green = Color(0, 255, 0)
    
    # Modifies green to be darkGreen
    green.darken$(0.3)
    
    green.toString()
    # => 'rgba(0, 102, 0, 1)'
    </pre></code>
    
    @name darken$
    @methodOf Color#
    @param {Number} amount Amount to darken color by (between 0 - 1)
    
    @returns {Color} the color with the lightness value reduced by `amount`
    */
    darken$: function(amount) {
      var hsl, _ref;
      hsl = this.toHsl();
      hsl[2] -= amount;
      _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
      return this;
    },
    /**
    A copy of the calling color with its saturation reduced by `amount`.
    
    <code class="run"><pre>
    blue = Color(0, 0, 255)
    
    desaturatedBlue = blue.desaturate(0.4)
    
    # to see what they look like
    for color, index in [blue, desaturatedBlue]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60  
    </pre></code>
    
    @name desaturate
    @methodOf Color#
    @param {Number} amount Amount to reduce color saturation by (between 0 and 1)
    
    @returns {Color} A copy of the color with the saturation value reduced by `amount`
    */
    desaturate: function(amount) {
      return this.copy().desaturate$(amount);
    },
    /**
    The modified color with its saturation reduced by `amount`.
    
    <code><pre>
    blue = Color(0, 0, 255)
    
    # modifies blue to be desaturatedBlue
    blue.desaturate$(0.4)
    
    blue.toString()
    # => 'rgba(38, 38, 217, 1)'
    </pre></code>
    
    @name desaturate$
    @methodOf Color#
    @param {Number} amount Amount to reduce color saturation by (between 0 and 1)
    
    @returns {Color} the color with the saturation value reduced by `amount`
    */
    desaturate$: function(amount) {
      var hsl, _ref;
      hsl = this.toHsl();
      hsl[1] -= amount;
      _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
      return this;
    },
    /**
    Determine whether two colors are equal. Compares their r, g, b, and alpha values.
    
    <code><pre>
    hex = Color('#ffff00')
    rgb = Color(255, 255, 0)
    
    hex == rgb
    # => false
    
    hex.equal(rgb)
    # => true
    </pre></code>
    
    @name equal
    @methodOf Color#
    @param {Color} other the color to compare to the calling color
    
    @returns {Boolean} true if the r, g, b, a values of the colors agree, false otherwise
    */
    equal: function(other) {
      return other.r === this.r && other.g === this.g && other.b === this.b && other.a === this.a;
    },
    /**
    A copy of the calling color converted to grayscale.
    
    <code class="run"><pre>
    yellow = Color(255, 255, 0)
    
    gray = yellow.grayscale()
    
    # to see what they look like
    for color, index in [yellow, gray]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>    
    
    @name grayscale
    @methodOf Color#
    
    @returns {Color} A copy of the calling color converted to grayscale.
    */
    grayscale: function() {
      return this.copy().grayscale$();
    },
    /**
    The calling color converted to grayscale.
    
    <code><pre>
    color = Color(255, 255, 0)
    
    # modifies color into gray
    color.grayscale$()
    
    color.toString()
    # => 'rgba(128, 128, 128, 1)'
    </pre></code>  
    
    @name grayscale$
    @methodOf Color#
    
    @returns {Color} The calling color converted to grayscale.
    */
    grayscale$: function() {
      var g, hsl;
      hsl = this.toHsl();
      g = (hsl[2] * 255).round();
      this.r = this.g = this.b = g;
      return this;
    },
    /**
    A getter / setter for the hue value of the color. Passing no argument returns the 
    current hue value. Passing a value will set the hue to that value and return the color.
    
    <code class="run"><pre>
    magenta = Color(255, 0, 255)
    
    magenta.hue()
    # => 300
    
    # modifies the color to be yellow
    magenta.hue(60)
    
    # to see what it looks like
    canvas.drawRect
      color: magenta
      x: 50 
      y: 30 
      width: 80
      height: 80 
    </pre></code>  
    
    @name hue
    @methodOf Color#
    @param {Number} [newVal] the new hue value
    
    @returns {Color|Number} returns the color object if you pass a new hue value and returns the hue otherwise
    */
    hue: function(newVal) {
      var hsl, _ref;
      hsl = this.toHsl();
      if (newVal != null) {
        hsl[0] = newVal;
        _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
        return this;
      } else {
        return hsl[0];
      }
    },
    /**
    A getter / setter for the lightness value of the color. Passing no argument returns the 
    current lightness value. Passing a value will set the lightness to that value and return the color.
    
    <code class="run"><pre>
    magenta = Color(255, 0, 255)
    
    magenta.lightness()
    # => 0.9
    
    # modifies magenta in place to be lighter
    magenta.lightness(0.75)
    
    # to see what it looks like
    canvas.drawRect
      color: magenta
      x: 50 
      y: 30 
      width: 80
      height: 80 
    </pre></code>  
    
    @name lightness
    @methodOf Color#
    @param {Number} [newVal] the new lightness value
    
    @returns {Color|Number} returns the color object if you pass a new lightness value and returns the lightness otherwise
    */
    lightness: function(newVal) {
      var hsl, _ref;
      hsl = this.toHsl();
      if (newVal != null) {
        hsl[2] = newVal;
        _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
        return this;
      } else {
        return hsl[2];
      }
    },
    value: function(newVal) {
      var hsv, _ref;
      hsv = this.toHsv();
      if (newVal != null) {
        hsv[2] = newVal;
        _ref = hsvToRgb(hsv), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
        return this;
      } else {
        return hsv[2];
      }
    },
    /**
    A copy of the calling color with its hue shifted by `degrees`. This differs from the hue setter in that it adds to the existing hue value and will wrap around 0 and 360.
    
    <code class="run"><pre>
    magenta = Color(255, 0, 255)
    
    magenta.hue()
    # => 300
    
    yellow = magenta.shiftHue(120)
    
    # since magenta's hue is 300 we have wrapped
    # around 360 to end up at 60
    yellow.hue()
    # => 60
    
    # to see what they look like
    for color, index in [magenta, yellow]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>
    
    @name shiftHue
    @methodOf Color#
    @param {Number} degrees number of degrees to shift the hue on the color wheel.
    
    @returns {Color} A copy of the color with its hue shifted by `degrees`
    */
    shiftHue: function(degrees) {
      return this.copy().shiftHue$(degrees);
    },
    /**
    The calling color with its hue shifted by `degrees`. This differs from the hue setter in that it adds to the existing hue value and will wrap around 0 and 360.
    
    <code><pre>
    magenta = Color(255, 0, 255)
    
    magenta.hue()
    # => 300
    
    magenta.shiftHue$(120)
    
    # since magenta's hue is 300 we have wrapped
    # around 360 to end up at 60. Also we have 
    # modified magenta in place to become yellow
    magenta.hue()
    # => 60
    
    magenta.toString()
    # => 'rgba(255, 255, 0, 1)'
    </pre></code>
    
    @name shiftHue$
    @methodOf Color#
    @param {Number} degrees number of degrees to shift the hue on the color wheel.
    
    @returns {Color} The color with its hue shifted by `degrees`
    */
    shiftHue$: function(degrees) {
      var hsl, _ref;
      hsl = this.toHsl();
      hsl[0] = (hsl[0] + degrees.round()).mod(360);
      _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
      return this;
    },
    /**
    Returns a copy of the calling color lightened by `amount` (Lightness of the color ranges from 0 to 1).
    
    <code class="run"><pre>
    green = Color(0, 255, 0)
    
    lightGreen = green.lighten(0.3)
    
    # to see what they look like
    for color, index in [green, lightGreen]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>
    
    @name lighten
    @methodOf Color#
    @param {Number} amount Amount to lighten color by (between 0 to 1)
    
    @returns {Color} A new color. The lightness value is increased by `amount` from the original.
    */
    lighten: function(amount) {
      return this.copy().lighten$(amount);
    },
    /**
    The calling color lightened by `amount` (Lightness of the color ranges from 0 to 1).
    
    <code><pre>
    green = Color(0, 255, 0)
    
    green.lighten$(0.2)
    
    # we have modified green in place
    # to become lightGreen
    green.toString()
    # => 'rgba(102, 255, 102, 1)'
    </pre></code>
    
    @name lighten$
    @methodOf Color#
    @param {Number} amount Amount to lighten color by (between 0 - 1)
    
    @returns {Color} The calling color with its lightness value increased by `amount`.
    */
    lighten$: function(amount) {
      var hsl, _ref;
      hsl = this.toHsl();
      hsl[2] += amount;
      _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
      return this;
    },
    /**
    A copy of the calling color mixed with `other` using `amount` as the 
    mixing ratio. If amount is not passed, then the colors are mixed evenly.
    
    <code class="run"><pre>
    red = Color(255, 0, 0)
    yellow = Color(255, 255, 0)
    
    # With no amount argument the colors are mixed evenly
    orange = red.mixWith(yellow)
    
    # With an amount of 0.3 we are mixing the color 30% red and 70% yellow
    somethingCloseToOrange = red.mixWith(yellow, 0.3)
    
    # to see what they look like
    for color, index in [red, yellow, orange, somethingCloseToOrange]
      canvas.drawRect
        color: color
        x: 20 + (60 * (index % 2))
        y: 20 + (60 * (if index > 1 then 1 else 0))
        width: 60
        height: 60 
    </pre></code>
    
    @name mixWith
    @methodOf Color#
    @param {Color} other the other color to mix
    @param {Number} [amount] the mixing ratio of the calling color to `other`
    
    @returns {Color} A new color that is a mix of the calling color and `other`
    */
    mixWith: function(other, amount) {
      return this.copy().mixWith$(other, amount);
    },
    /**
    A copy of the calling color mixed with `other` using `amount` as the 
    mixing ratio. If amount is not passed, then the colors are mixed evenly.
    
    <code><pre>
    red = Color(255, 0, 0)
    yellow = Color(255, 255, 0)
    anotherRed = Color(255, 0, 0)
    
    # With no amount argument the colors are mixed evenly
    red.mixWith$(yellow)
    
    # We have modified red in place to be orange 
    red.toString()
    # => 'rgba(255, 128, 0, 1)'    
    
    # With an amount of 0.3 we are mixing the color 30% red and 70% yellow
    anotherRed.mixWith$(yellow, 0.3)
    
    # We have modified `anotherRed` in place to be somethingCloseToOrange 
    anotherRed.toString()
    # => rgba(255, 179, 0, 1)
    </pre></code>
    
    @name mixWith$
    @methodOf Color#
    @param {Color} other the other color to mix
    @param {Number} [amount] the mixing ratio of the calling color to `other`
    
    @returns {Color} The modified calling color after mixing it with `other`
    */
    mixWith$: function(other, amount) {
      var _ref, _ref2;
      amount || (amount = 0.5);
      _ref = [this.r, this.g, this.b, this.a].zip([other.r, other.g, other.b, other.a]).map(function(array) {
        return (array[0] * amount) + (array[1] * (1 - amount));
      }), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
      _ref2 = [this.r, this.g, this.b].map(function(color) {
        return color.round();
      }), this.r = _ref2[0], this.g = _ref2[1], this.b = _ref2[2];
      return this;
    },
    /**
    A copy of the calling color with its saturation increased by `amount`.
    
    <code class="run"><pre>
    color = Color(50, 50, 200)
    
    color.saturation()
    # => 0.6
    
    saturatedColor = color.saturate(0.2)
    
    saturatedColor.saturation()
    # => 0.8
    
    # to see what they look like
    for color, index in [color, saturatedColor]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60 
    </pre></code>
    
    @name saturate
    @methodOf Color#
    @param {Number} amount the amount to increase saturation by
    
    @returns {Color} A copy of the calling color with its saturation increased by `amount`
    */
    saturate: function(amount) {
      return this.copy().saturate$(amount);
    },
    /**
    The calling color with its saturation increased by `amount`.
    
    <code><pre>
    color = Color(50, 50, 200)
    
    color.saturation()
    # => 0.6
    
    color.saturate$(0.2)
    
    # We have modified color in place and increased its saturation to 0.8
    color.saturation()
    # => 0.8
    
    color.toString()
    # => rgba(25, 25, 225, 1)
    </pre></code>
    
    @name saturate$
    @methodOf Color#
    @param {Number} amount the amount to increase saturation by
    
    @returns {Color} The calling color with its saturation increased by `amount`
    */
    saturate$: function(amount) {
      var hsl, _ref;
      hsl = this.toHsl();
      hsl[1] += amount;
      _ref = hslToRgb(hsl), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
      return this;
    },
    /**
    A getter / setter for the saturation value of the color. Passing no argument returns the 
    current saturation value. Passing a value will set the saturation to that value and return the color.
    
    <code class="run"><pre>
    yellow = Color('hsl(60, 0.5, 0.5)')
    
    yellow.saturation()
    # => 0.5
    
    yellow.saturation(0.8)
    
    # to see what it looks like
    canvas.drawRect
      color: yellow
      x: 50 
      y: 30 
      width: 80
      height: 80     
    </pre></code>
    
    @name saturation
    @methodOf Color#
    @param {Number} [newVal] the new saturation value
    
    @returns {Color|Number} returns the color object if you pass a new saturation value and returns the saturation otherwise
    */
    saturation: function(newVal, mode) {
      var hsl, hsv, _ref, _ref2;
      if (mode === 'hsv') {
        hsv = this.toHsv();
        if (newVal != null) {
          hsv[1] = newVal;
          _ref = hsvToRgb(hsv), this.r = _ref[0], this.g = _ref[1], this.b = _ref[2], this.a = _ref[3];
          return this;
        } else {
          return hsv[1];
        }
      } else {
        hsl = this.toHsl();
        if (newVal != null) {
          hsl[1] = newVal;
          _ref2 = hslToRgb(hsl), this.r = _ref2[0], this.g = _ref2[1], this.b = _ref2[2], this.a = _ref2[3];
          return this;
        } else {
          return hsl[1];
        }
      }
    },
    /**
    returns the Hex representation of the color. Exclude the leading `#` by passing false. 
    
    <code><pre>
    color = Color('hsl(60, 1, 0.5)')
    
    # passing nothing will leave the `#` intact
    color.toHex()
    # => '#ffff00'
    
    # passing false will remove the `#`
    color.toHex(false)
    # => 'ffff00'
    </pre></code>
    
    @name toHex
    @methodOf Color#
    @param {Boolean} [leadingHash] if passed as false excludes the leading `#` from the string
    
    @returns {String} returns the Hex representation of the color
    */
    toHex: function(leadingHash) {
      var hexFromNumber, padString;
      padString = function(hexString) {
        var pad;
        if (hexString.length === 1) {
          pad = "0";
        } else {
          pad = "";
        }
        return pad + hexString;
      };
      hexFromNumber = function(number) {
        return padString(number.toString(16));
      };
      if (leadingHash === false) {
        return "" + (hexFromNumber(this.r)) + (hexFromNumber(this.g)) + (hexFromNumber(this.b));
      } else {
        return "#" + (hexFromNumber(this.r)) + (hexFromNumber(this.g)) + (hexFromNumber(this.b));
      }
    },
    /**
    returns an array of the hue, saturation, lightness, and alpha values of the color. 
    
    <code><pre>
    magenta = Color(255, 0, 255)
    
    magenta.toHsl()
    # => [300, 1, 0.5, 1]
    </pre></code>  
    
    @name toHsl
    @methodOf Color#
    
    @returns {Array} An array of the hue, saturation, lightness, and alpha values of the color.
    */
    toHsl: function() {
      var b, channel, chroma, g, hue, lightness, max, min, r, saturation, _ref, _ref2;
      _ref = (function() {
        var _i, _len, _ref, _results;
        _ref = [this.r, this.g, this.b];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          channel = _ref[_i];
          _results.push(channel / 255);
        }
        return _results;
      }).call(this), r = _ref[0], g = _ref[1], b = _ref[2];
      _ref2 = [r, g, b].extremes(), min = _ref2.min, max = _ref2.max;
      hue = saturation = lightness = (max + min) / 2;
      chroma = max - min;
      if (chroma.abs() < 0.00001) {
        hue = saturation = 0;
      } else {
        saturation = lightness > 0.5 ? chroma / (1 - lightness) : chroma / lightness;
        saturation /= 2;
        switch (max) {
          case r:
            hue = ((g - b) / chroma) + 0;
            break;
          case g:
            hue = ((b - r) / chroma) + 2;
            break;
          case b:
            hue = ((r - g) / chroma) + 4;
        }
        hue = (hue * 60).mod(360);
      }
      return [hue, saturation, lightness, this.a];
    },
    toHsv: function() {
      var b, d, g, h, max, min, r, s, v, _ref;
      r = this.r / 255;
      g = this.g / 255;
      b = this.b / 255;
      _ref = [r, g, b].extremes(), min = _ref.min, max = _ref.max;
      h = s = v = max;
      d = max - min;
      s = (max === 0 ? 0 : d / max);
      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h *= 60;
      }
      return [h, s, v];
    },
    /**
    returns string rgba representation of the color. 
    
    <code><pre>
    red = Color('#ff0000')
    
    red.toString()
    # => 'rgba(255, 0, 0, 1)'
    </pre></code>
    
    @name toString
    @methodOf Color#
    
    @returns {String} The rgba string representation of the color
    */
    toString: function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    },
    /**
    A copy of the calling color with its alpha reduced by `amount`.
    
    <code class="run"><pre>
    color = Color(0, 0, 0, 1)
    
    color.a
    # => 1
    
    transparentColor = color.transparentize(0.5)
    
    transparentColor.a
    # => 0.5
    
    # to see what they look like
    for color, index in [color, transparentColor]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60     
    </pre></code>
    
    @name transparentize
    @methodOf Color#
    
    @returns {Color} A copy of the calling color with its alpha reduced by `amount`
    */
    transparentize: function(amount) {
      return this.copy().transparentize$(amount);
    },
    /**
    The calling color with its alpha reduced by `amount`.
    
    <code><pre>
    color = Color(0, 0, 0, 1)
    
    color.a
    # => 1
    
    # We modify color in place
    color.transparentize$(0.5)
    
    color.a
    # => 0.5
    </pre></code>
    
    @name transparentize$
    @methodOf Color#
    
    @returns {Color} The calling color with its alpha reduced by `amount`
    */
    transparentize$: function(amount) {
      this.a = (this.a - amount).clamp(0, 1);
      return this;
    },
    /**
    A copy of the calling color with its alpha increased by `amount`.
    
    <code class="run"><pre>
    color = Color(0, 0, 0, 0.25)
    
    color.a
    # => 0.25
    
    opaqueColor = color.opacify(0.5)
    
    opaqueColor.a
    # => 0.75
    
    # to see what they look like
    for color, index in [color, opaqueColor]
      canvas.drawRect
        color: color
        x: 20 + (60 * index)
        y: 20 + (60 * index)
        width: 60
        height: 60     
    </pre></code>
    
    @name opacify
    @methodOf Color#
    
    @returns {Color} A copy of the calling color with its alpha increased by `amount`
    */
    opacify: function(amount) {
      return this.copy().opacify$(amount);
    },
    /**
    The calling color with its alpha increased by `amount`.
    
    <code><pre>
    color = Color(0, 0, 0, 0)
    
    color.a
    # => 0
    
    # We modify color in place
    color.opacify$(0.25)
    
    color.a
    # => 0.25
    </pre></code>
    
    @name opacify$
    @methodOf Color#
    
    @returns {Color} The calling color with its alpha increased by `amount`
    */
    opacify$: function(amount) {
      this.a = (this.a + amount).clamp(0, 1);
      return this;
    }
  };
  /**
  returns a random color.
  
  <code><pre>
  Color.random().toString()
  # => 'rgba(213, 144, 202, 1)'
  
  Color.random().toString()
  # => 'rgba(1, 211, 24, 1)'
  </pre></code>
  
  @name random
  @methodOf Color
  
  @returns {Color} A random color.
  */
  Color.random = function() {
    return Color(rand(256), rand(256), rand(256));
  };
  /**
  Mix two colors. Behaves just like `#mixWith` except that you are passing two colors.
  
  <code><pre>
  red = Color(255, 0, 0)
  yellow = Color(255, 255, 0)
  
  # With no amount argument the colors are mixed evenly
  orange = Color.mix(red, yellow)
  
  orange.toString()
  # => 'rgba(255, 128, 0, 1)'    
  
  # With an amount of 0.3 we are mixing the color 30% red and 70% yellow
  somethingCloseToOrange = Color.mix(red, yellow, 0.3)
  
  somethingCloseToOrange.toString()
  # => rgba(255, 179, 0, 1)
  </pre></code>
  
  @name mix
  @methodOf Color
  @see Color#mixWith
  @param {Color} color1 the first color to mix
  @param {Color} color2 the second color to mix
  @param {Number} amount the ratio to mix the colors 
  
  @returns {Color} A new color that is the two colors mixed at the ratio defined by `amount`
  */
  Color.mix = function(color1, color2, amount) {
    var newColors;
    amount || (amount = 0.5);
    newColors = [color1.r, color1.g, color1.b, color1.a].zip([color2.r, color2.g, color2.b, color2.a]).map(function(array) {
      return (array[0] * amount) + (array[1] * (1 - amount));
    });
    return Color(newColors);
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Color"] = Color;
})();
;

(function() {
  var lookup, names, normalizeKey;
  names = [["000000", "Black"], ["000080", "Navy Blue"], ["0000C8", "Dark Blue"], ["0000FF", "Blue"], ["000741", "Stratos"], ["001B1C", "Swamp"], ["002387", "Resolution Blue"], ["002900", "Deep Fir"], ["002E20", "Burnham"], ["002FA7", "International Klein Blue"], ["003153", "Prussian Blue"], ["003366", "Midnight Blue"], ["003399", "Smalt"], ["003532", "Deep Teal"], ["003E40", "Cyprus"], ["004620", "Kaitoke Green"], ["0047AB", "Cobalt"], ["004816", "Crusoe"], ["004950", "Sherpa Blue"], ["0056A7", "Endeavour"], ["00581A", "Camarone"], ["0066CC", "Science Blue"], ["0066FF", "Blue Ribbon"], ["00755E", "Tropical Rain Forest"], ["0076A3", "Allports"], ["007BA7", "Deep Cerulean"], ["007EC7", "Lochmara"], ["007FFF", "Azure Radiance"], ["008080", "Teal"], ["0095B6", "Bondi Blue"], ["009DC4", "Pacific Blue"], ["00A693", "Persian Green"], ["00A86B", "Jade"], ["00CC99", "Caribbean Green"], ["00CCCC", "Robin's Egg Blue"], ["00FF00", "Green"], ["00FF7F", "Spring Green"], ["00FFFF", "Cyan / Aqua"], ["010D1A", "Blue Charcoal"], ["011635", "Midnight"], ["011D13", "Holly"], ["012731", "Daintree"], ["01361C", "Cardin Green"], ["01371A", "County Green"], ["013E62", "Astronaut Blue"], ["013F6A", "Regal Blue"], ["014B43", "Aqua Deep"], ["015E85", "Orient"], ["016162", "Blue Stone"], ["016D39", "Fun Green"], ["01796F", "Pine Green"], ["017987", "Blue Lagoon"], ["01826B", "Deep Sea"], ["01A368", "Green Haze"], ["022D15", "English Holly"], ["02402C", "Sherwood Green"], ["02478E", "Congress Blue"], ["024E46", "Evening Sea"], ["026395", "Bahama Blue"], ["02866F", "Observatory"], ["02A4D3", "Cerulean"], ["03163C", "Tangaroa"], ["032B52", "Green Vogue"], ["036A6E", "Mosque"], ["041004", "Midnight Moss"], ["041322", "Black Pearl"], ["042E4C", "Blue Whale"], ["044022", "Zuccini"], ["044259", "Teal Blue"], ["051040", "Deep Cove"], ["051657", "Gulf Blue"], ["055989", "Venice Blue"], ["056F57", "Watercourse"], ["062A78", "Catalina Blue"], ["063537", "Tiber"], ["069B81", "Gossamer"], ["06A189", "Niagara"], ["073A50", "Tarawera"], ["080110", "Jaguar"], ["081910", "Black Bean"], ["082567", "Deep Sapphire"], ["088370", "Elf Green"], ["08E8DE", "Bright Turquoise"], ["092256", "Downriver"], ["09230F", "Palm Green"], ["09255D", "Madison"], ["093624", "Bottle Green"], ["095859", "Deep Sea Green"], ["097F4B", "Salem"], ["0A001C", "Black Russian"], ["0A480D", "Dark Fern"], ["0A6906", "Japanese Laurel"], ["0A6F75", "Atoll"], ["0B0B0B", "Cod Gray"], ["0B0F08", "Marshland"], ["0B1107", "Gordons Green"], ["0B1304", "Black Forest"], ["0B6207", "San Felix"], ["0BDA51", "Malachite"], ["0C0B1D", "Ebony"], ["0C0D0F", "Woodsmoke"], ["0C1911", "Racing Green"], ["0C7A79", "Surfie Green"], ["0C8990", "Blue Chill"], ["0D0332", "Black Rock"], ["0D1117", "Bunker"], ["0D1C19", "Aztec"], ["0D2E1C", "Bush"], ["0E0E18", "Cinder"], ["0E2A30", "Firefly"], ["0F2D9E", "Torea Bay"], ["10121D", "Vulcan"], ["101405", "Green Waterloo"], ["105852", "Eden"], ["110C6C", "Arapawa"], ["120A8F", "Ultramarine"], ["123447", "Elephant"], ["126B40", "Jewel"], ["130000", "Diesel"], ["130A06", "Asphalt"], ["13264D", "Blue Zodiac"], ["134F19", "Parsley"], ["140600", "Nero"], ["1450AA", "Tory Blue"], ["151F4C", "Bunting"], ["1560BD", "Denim"], ["15736B", "Genoa"], ["161928", "Mirage"], ["161D10", "Hunter Green"], ["162A40", "Big Stone"], ["163222", "Celtic"], ["16322C", "Timber Green"], ["163531", "Gable Green"], ["171F04", "Pine Tree"], ["175579", "Chathams Blue"], ["182D09", "Deep Forest Green"], ["18587A", "Blumine"], ["19330E", "Palm Leaf"], ["193751", "Nile Blue"], ["1959A8", "Fun Blue"], ["1A1A68", "Lucky Point"], ["1AB385", "Mountain Meadow"], ["1B0245", "Tolopea"], ["1B1035", "Haiti"], ["1B127B", "Deep Koamaru"], ["1B1404", "Acadia"], ["1B2F11", "Seaweed"], ["1B3162", "Biscay"], ["1B659D", "Matisse"], ["1C1208", "Crowshead"], ["1C1E13", "Rangoon Green"], ["1C39BB", "Persian Blue"], ["1C402E", "Everglade"], ["1C7C7D", "Elm"], ["1D6142", "Green Pea"], ["1E0F04", "Creole"], ["1E1609", "Karaka"], ["1E1708", "El Paso"], ["1E385B", "Cello"], ["1E433C", "Te Papa Green"], ["1E90FF", "Dodger Blue"], ["1E9AB0", "Eastern Blue"], ["1F120F", "Night Rider"], ["1FC2C2", "Java"], ["20208D", "Jacksons Purple"], ["202E54", "Cloud Burst"], ["204852", "Blue Dianne"], ["211A0E", "Eternity"], ["220878", "Deep Blue"], ["228B22", "Forest Green"], ["233418", "Mallard"], ["240A40", "Violet"], ["240C02", "Kilamanjaro"], ["242A1D", "Log Cabin"], ["242E16", "Black Olive"], ["24500F", "Green House"], ["251607", "Graphite"], ["251706", "Cannon Black"], ["251F4F", "Port Gore"], ["25272C", "Shark"], ["25311C", "Green Kelp"], ["2596D1", "Curious Blue"], ["260368", "Paua"], ["26056A", "Paris M"], ["261105", "Wood Bark"], ["261414", "Gondola"], ["262335", "Steel Gray"], ["26283B", "Ebony Clay"], ["273A81", "Bay of Many"], ["27504B", "Plantation"], ["278A5B", "Eucalyptus"], ["281E15", "Oil"], ["283A77", "Astronaut"], ["286ACD", "Mariner"], ["290C5E", "Violent Violet"], ["292130", "Bastille"], ["292319", "Zeus"], ["292937", "Charade"], ["297B9A", "Jelly Bean"], ["29AB87", "Jungle Green"], ["2A0359", "Cherry Pie"], ["2A140E", "Coffee Bean"], ["2A2630", "Baltic Sea"], ["2A380B", "Turtle Green"], ["2A52BE", "Cerulean Blue"], ["2B0202", "Sepia Black"], ["2B194F", "Valhalla"], ["2B3228", "Heavy Metal"], ["2C0E8C", "Blue Gem"], ["2C1632", "Revolver"], ["2C2133", "Bleached Cedar"], ["2C8C84", "Lochinvar"], ["2D2510", "Mikado"], ["2D383A", "Outer Space"], ["2D569B", "St Tropaz"], ["2E0329", "Jacaranda"], ["2E1905", "Jacko Bean"], ["2E3222", "Rangitoto"], ["2E3F62", "Rhino"], ["2E8B57", "Sea Green"], ["2EBFD4", "Scooter"], ["2F270E", "Onion"], ["2F3CB3", "Governor Bay"], ["2F519E", "Sapphire"], ["2F5A57", "Spectra"], ["2F6168", "Casal"], ["300529", "Melanzane"], ["301F1E", "Cocoa Brown"], ["302A0F", "Woodrush"], ["304B6A", "San Juan"], ["30D5C8", "Turquoise"], ["311C17", "Eclipse"], ["314459", "Pickled Bluewood"], ["315BA1", "Azure"], ["31728D", "Calypso"], ["317D82", "Paradiso"], ["32127A", "Persian Indigo"], ["32293A", "Blackcurrant"], ["323232", "Mine Shaft"], ["325D52", "Stromboli"], ["327C14", "Bilbao"], ["327DA0", "Astral"], ["33036B", "Christalle"], ["33292F", "Thunder"], ["33CC99", "Shamrock"], ["341515", "Tamarind"], ["350036", "Mardi Gras"], ["350E42", "Valentino"], ["350E57", "Jagger"], ["353542", "Tuna"], ["354E8C", "Chambray"], ["363050", "Martinique"], ["363534", "Tuatara"], ["363C0D", "Waiouru"], ["36747D", "Ming"], ["368716", "La Palma"], ["370202", "Chocolate"], ["371D09", "Clinker"], ["37290E", "Brown Tumbleweed"], ["373021", "Birch"], ["377475", "Oracle"], ["380474", "Blue Diamond"], ["381A51", "Grape"], ["383533", "Dune"], ["384555", "Oxford Blue"], ["384910", "Clover"], ["394851", "Limed Spruce"], ["396413", "Dell"], ["3A0020", "Toledo"], ["3A2010", "Sambuca"], ["3A2A6A", "Jacarta"], ["3A686C", "William"], ["3A6A47", "Killarney"], ["3AB09E", "Keppel"], ["3B000B", "Temptress"], ["3B0910", "Aubergine"], ["3B1F1F", "Jon"], ["3B2820", "Treehouse"], ["3B7A57", "Amazon"], ["3B91B4", "Boston Blue"], ["3C0878", "Windsor"], ["3C1206", "Rebel"], ["3C1F76", "Meteorite"], ["3C2005", "Dark Ebony"], ["3C3910", "Camouflage"], ["3C4151", "Bright Gray"], ["3C4443", "Cape Cod"], ["3C493A", "Lunar Green"], ["3D0C02", "Bean  "], ["3D2B1F", "Bistre"], ["3D7D52", "Goblin"], ["3E0480", "Kingfisher Daisy"], ["3E1C14", "Cedar"], ["3E2B23", "English Walnut"], ["3E2C1C", "Black Marlin"], ["3E3A44", "Ship Gray"], ["3EABBF", "Pelorous"], ["3F2109", "Bronze"], ["3F2500", "Cola"], ["3F3002", "Madras"], ["3F307F", "Minsk"], ["3F4C3A", "Cabbage Pont"], ["3F583B", "Tom Thumb"], ["3F5D53", "Mineral Green"], ["3FC1AA", "Puerto Rico"], ["3FFF00", "Harlequin"], ["401801", "Brown Pod"], ["40291D", "Cork"], ["403B38", "Masala"], ["403D19", "Thatch Green"], ["405169", "Fiord"], ["40826D", "Viridian"], ["40A860", "Chateau Green"], ["410056", "Ripe Plum"], ["411F10", "Paco"], ["412010", "Deep Oak"], ["413C37", "Merlin"], ["414257", "Gun Powder"], ["414C7D", "East Bay"], ["4169E1", "Royal Blue"], ["41AA78", "Ocean Green"], ["420303", "Burnt Maroon"], ["423921", "Lisbon Brown"], ["427977", "Faded Jade"], ["431560", "Scarlet Gum"], ["433120", "Iroko"], ["433E37", "Armadillo"], ["434C59", "River Bed"], ["436A0D", "Green Leaf"], ["44012D", "Barossa"], ["441D00", "Morocco Brown"], ["444954", "Mako"], ["454936", "Kelp"], ["456CAC", "San Marino"], ["45B1E8", "Picton Blue"], ["460B41", "Loulou"], ["462425", "Crater Brown"], ["465945", "Gray Asparagus"], ["4682B4", "Steel Blue"], ["480404", "Rustic Red"], ["480607", "Bulgarian Rose"], ["480656", "Clairvoyant"], ["481C1C", "Cocoa Bean"], ["483131", "Woody Brown"], ["483C32", "Taupe"], ["49170C", "Van Cleef"], ["492615", "Brown Derby"], ["49371B", "Metallic Bronze"], ["495400", "Verdun Green"], ["496679", "Blue Bayoux"], ["497183", "Bismark"], ["4A2A04", "Bracken"], ["4A3004", "Deep Bronze"], ["4A3C30", "Mondo"], ["4A4244", "Tundora"], ["4A444B", "Gravel"], ["4A4E5A", "Trout"], ["4B0082", "Pigment Indigo"], ["4B5D52", "Nandor"], ["4C3024", "Saddle"], ["4C4F56", "Abbey"], ["4D0135", "Blackberry"], ["4D0A18", "Cab Sav"], ["4D1E01", "Indian Tan"], ["4D282D", "Cowboy"], ["4D282E", "Livid Brown"], ["4D3833", "Rock"], ["4D3D14", "Punga"], ["4D400F", "Bronzetone"], ["4D5328", "Woodland"], ["4E0606", "Mahogany"], ["4E2A5A", "Bossanova"], ["4E3B41", "Matterhorn"], ["4E420C", "Bronze Olive"], ["4E4562", "Mulled Wine"], ["4E6649", "Axolotl"], ["4E7F9E", "Wedgewood"], ["4EABD1", "Shakespeare"], ["4F1C70", "Honey Flower"], ["4F2398", "Daisy Bush"], ["4F69C6", "Indigo"], ["4F7942", "Fern Green"], ["4F9D5D", "Fruit Salad"], ["4FA83D", "Apple"], ["504351", "Mortar"], ["507096", "Kashmir Blue"], ["507672", "Cutty Sark"], ["50C878", "Emerald"], ["514649", "Emperor"], ["516E3D", "Chalet Green"], ["517C66", "Como"], ["51808F", "Smalt Blue"], ["52001F", "Castro"], ["520C17", "Maroon Oak"], ["523C94", "Gigas"], ["533455", "Voodoo"], ["534491", "Victoria"], ["53824B", "Hippie Green"], ["541012", "Heath"], ["544333", "Judge Gray"], ["54534D", "Fuscous Gray"], ["549019", "Vida Loca"], ["55280C", "Cioccolato"], ["555B10", "Saratoga"], ["556D56", "Finlandia"], ["5590D9", "Havelock Blue"], ["56B4BE", "Fountain Blue"], ["578363", "Spring Leaves"], ["583401", "Saddle Brown"], ["585562", "Scarpa Flow"], ["587156", "Cactus"], ["589AAF", "Hippie Blue"], ["591D35", "Wine Berry"], ["592804", "Brown Bramble"], ["593737", "Congo Brown"], ["594433", "Millbrook"], ["5A6E9C", "Waikawa Gray"], ["5A87A0", "Horizon"], ["5B3013", "Jambalaya"], ["5C0120", "Bordeaux"], ["5C0536", "Mulberry Wood"], ["5C2E01", "Carnaby Tan"], ["5C5D75", "Comet"], ["5D1E0F", "Redwood"], ["5D4C51", "Don Juan"], ["5D5C58", "Chicago"], ["5D5E37", "Verdigris"], ["5D7747", "Dingley"], ["5DA19F", "Breaker Bay"], ["5E483E", "Kabul"], ["5E5D3B", "Hemlock"], ["5F3D26", "Irish Coffee"], ["5F5F6E", "Mid Gray"], ["5F6672", "Shuttle Gray"], ["5FA777", "Aqua Forest"], ["5FB3AC", "Tradewind"], ["604913", "Horses Neck"], ["605B73", "Smoky"], ["606E68", "Corduroy"], ["6093D1", "Danube"], ["612718", "Espresso"], ["614051", "Eggplant"], ["615D30", "Costa Del Sol"], ["61845F", "Glade Green"], ["622F30", "Buccaneer"], ["623F2D", "Quincy"], ["624E9A", "Butterfly Bush"], ["625119", "West Coast"], ["626649", "Finch"], ["639A8F", "Patina"], ["63B76C", "Fern"], ["6456B7", "Blue Violet"], ["646077", "Dolphin"], ["646463", "Storm Dust"], ["646A54", "Siam"], ["646E75", "Nevada"], ["6495ED", "Cornflower Blue"], ["64CCDB", "Viking"], ["65000B", "Rosewood"], ["651A14", "Cherrywood"], ["652DC1", "Purple Heart"], ["657220", "Fern Frond"], ["65745D", "Willow Grove"], ["65869F", "Hoki"], ["660045", "Pompadour"], ["660099", "Purple"], ["66023C", "Tyrian Purple"], ["661010", "Dark Tan"], ["66B58F", "Silver Tree"], ["66FF00", "Bright Green"], ["66FF66", "Screamin' Green"], ["67032D", "Black Rose"], ["675FA6", "Scampi"], ["676662", "Ironside Gray"], ["678975", "Viridian Green"], ["67A712", "Christi"], ["683600", "Nutmeg Wood Finish"], ["685558", "Zambezi"], ["685E6E", "Salt Box"], ["692545", "Tawny Port"], ["692D54", "Finn"], ["695F62", "Scorpion"], ["697E9A", "Lynch"], ["6A442E", "Spice"], ["6A5D1B", "Himalaya"], ["6A6051", "Soya Bean"], ["6B2A14", "Hairy Heath"], ["6B3FA0", "Royal Purple"], ["6B4E31", "Shingle Fawn"], ["6B5755", "Dorado"], ["6B8BA2", "Bermuda Gray"], ["6B8E23", "Olive Drab"], ["6C3082", "Eminence"], ["6CDAE7", "Turquoise Blue"], ["6D0101", "Lonestar"], ["6D5E54", "Pine Cone"], ["6D6C6C", "Dove Gray"], ["6D9292", "Juniper"], ["6D92A1", "Gothic"], ["6E0902", "Red Oxide"], ["6E1D14", "Moccaccino"], ["6E4826", "Pickled Bean"], ["6E4B26", "Dallas"], ["6E6D57", "Kokoda"], ["6E7783", "Pale Sky"], ["6F440C", "Cafe Royale"], ["6F6A61", "Flint"], ["6F8E63", "Highland"], ["6F9D02", "Limeade"], ["6FD0C5", "Downy"], ["701C1C", "Persian Plum"], ["704214", "Sepia"], ["704A07", "Antique Bronze"], ["704F50", "Ferra"], ["706555", "Coffee"], ["708090", "Slate Gray"], ["711A00", "Cedar Wood Finish"], ["71291D", "Metallic Copper"], ["714693", "Affair"], ["714AB2", "Studio"], ["715D47", "Tobacco Brown"], ["716338", "Yellow Metal"], ["716B56", "Peat"], ["716E10", "Olivetone"], ["717486", "Storm Gray"], ["718080", "Sirocco"], ["71D9E2", "Aquamarine Blue"], ["72010F", "Venetian Red"], ["724A2F", "Old Copper"], ["726D4E", "Go Ben"], ["727B89", "Raven"], ["731E8F", "Seance"], ["734A12", "Raw Umber"], ["736C9F", "Kimberly"], ["736D58", "Crocodile"], ["737829", "Crete"], ["738678", "Xanadu"], ["74640D", "Spicy Mustard"], ["747D63", "Limed Ash"], ["747D83", "Rolling Stone"], ["748881", "Blue Smoke"], ["749378", "Laurel"], ["74C365", "Mantis"], ["755A57", "Russett"], ["7563A8", "Deluge"], ["76395D", "Cosmic"], ["7666C6", "Blue Marguerite"], ["76BD17", "Lima"], ["76D7EA", "Sky Blue"], ["770F05", "Dark Burgundy"], ["771F1F", "Crown of Thorns"], ["773F1A", "Walnut"], ["776F61", "Pablo"], ["778120", "Pacifika"], ["779E86", "Oxley"], ["77DD77", "Pastel Green"], ["780109", "Japanese Maple"], ["782D19", "Mocha"], ["782F16", "Peanut"], ["78866B", "Camouflage Green"], ["788A25", "Wasabi"], ["788BBA", "Ship Cove"], ["78A39C", "Sea Nymph"], ["795D4C", "Roman Coffee"], ["796878", "Old Lavender"], ["796989", "Rum"], ["796A78", "Fedora"], ["796D62", "Sandstone"], ["79DEEC", "Spray"], ["7A013A", "Siren"], ["7A58C1", "Fuchsia Blue"], ["7A7A7A", "Boulder"], ["7A89B8", "Wild Blue Yonder"], ["7AC488", "De York"], ["7B3801", "Red Beech"], ["7B3F00", "Cinnamon"], ["7B6608", "Yukon Gold"], ["7B7874", "Tapa"], ["7B7C94", "Waterloo "], ["7B8265", "Flax Smoke"], ["7B9F80", "Amulet"], ["7BA05B", "Asparagus"], ["7C1C05", "Kenyan Copper"], ["7C7631", "Pesto"], ["7C778A", "Topaz"], ["7C7B7A", "Concord"], ["7C7B82", "Jumbo"], ["7C881A", "Trendy Green"], ["7CA1A6", "Gumbo"], ["7CB0A1", "Acapulco"], ["7CB7BB", "Neptune"], ["7D2C14", "Pueblo"], ["7DA98D", "Bay Leaf"], ["7DC8F7", "Malibu"], ["7DD8C6", "Bermuda"], ["7E3A15", "Copper Canyon"], ["7F1734", "Claret"], ["7F3A02", "Peru Tan"], ["7F626D", "Falcon"], ["7F7589", "Mobster"], ["7F76D3", "Moody Blue"], ["7FFF00", "Chartreuse"], ["7FFFD4", "Aquamarine"], ["800000", "Maroon"], ["800B47", "Rose Bud Cherry"], ["801818", "Falu Red"], ["80341F", "Red Robin"], ["803790", "Vivid Violet"], ["80461B", "Russet"], ["807E79", "Friar Gray"], ["808000", "Olive"], ["808080", "Gray"], ["80B3AE", "Gulf Stream"], ["80B3C4", "Glacier"], ["80CCEA", "Seagull"], ["81422C", "Nutmeg"], ["816E71", "Spicy Pink"], ["817377", "Empress"], ["819885", "Spanish Green"], ["826F65", "Sand Dune"], ["828685", "Gunsmoke"], ["828F72", "Battleship Gray"], ["831923", "Merlot"], ["837050", "Shadow"], ["83AA5D", "Chelsea Cucumber"], ["83D0C6", "Monte Carlo"], ["843179", "Plum"], ["84A0A0", "Granny Smith"], ["8581D9", "Chetwode Blue"], ["858470", "Bandicoot"], ["859FAF", "Bali Hai"], ["85C4CC", "Half Baked"], ["860111", "Red Devil"], ["863C3C", "Lotus"], ["86483C", "Ironstone"], ["864D1E", "Bull Shot"], ["86560A", "Rusty Nail"], ["868974", "Bitter"], ["86949F", "Regent Gray"], ["871550", "Disco"], ["87756E", "Americano"], ["877C7B", "Hurricane"], ["878D91", "Oslo Gray"], ["87AB39", "Sushi"], ["885342", "Spicy Mix"], ["886221", "Kumera"], ["888387", "Suva Gray"], ["888D65", "Avocado"], ["893456", "Camelot"], ["893843", "Solid Pink"], ["894367", "Cannon Pink"], ["897D6D", "Makara"], ["8A3324", "Burnt Umber"], ["8A73D6", "True V"], ["8A8360", "Clay Creek"], ["8A8389", "Monsoon"], ["8A8F8A", "Stack"], ["8AB9F1", "Jordy Blue"], ["8B00FF", "Electric Violet"], ["8B0723", "Monarch"], ["8B6B0B", "Corn Harvest"], ["8B8470", "Olive Haze"], ["8B847E", "Schooner"], ["8B8680", "Natural Gray"], ["8B9C90", "Mantle"], ["8B9FEE", "Portage"], ["8BA690", "Envy"], ["8BA9A5", "Cascade"], ["8BE6D8", "Riptide"], ["8C055E", "Cardinal Pink"], ["8C472F", "Mule Fawn"], ["8C5738", "Potters Clay"], ["8C6495", "Trendy Pink"], ["8D0226", "Paprika"], ["8D3D38", "Sanguine Brown"], ["8D3F3F", "Tosca"], ["8D7662", "Cement"], ["8D8974", "Granite Green"], ["8D90A1", "Manatee"], ["8DA8CC", "Polo Blue"], ["8E0000", "Red Berry"], ["8E4D1E", "Rope"], ["8E6F70", "Opium"], ["8E775E", "Domino"], ["8E8190", "Mamba"], ["8EABC1", "Nepal"], ["8F021C", "Pohutukawa"], ["8F3E33", "El Salva"], ["8F4B0E", "Korma"], ["8F8176", "Squirrel"], ["8FD6B4", "Vista Blue"], ["900020", "Burgundy"], ["901E1E", "Old Brick"], ["907874", "Hemp"], ["907B71", "Almond Frost"], ["908D39", "Sycamore"], ["92000A", "Sangria"], ["924321", "Cumin"], ["926F5B", "Beaver"], ["928573", "Stonewall"], ["928590", "Venus"], ["9370DB", "Medium Purple"], ["93CCEA", "Cornflower"], ["93DFB8", "Algae Green"], ["944747", "Copper Rust"], ["948771", "Arrowtown"], ["950015", "Scarlett"], ["956387", "Strikemaster"], ["959396", "Mountain Mist"], ["960018", "Carmine"], ["964B00", "Brown"], ["967059", "Leather"], ["9678B6", "Purple Mountain's Majesty"], ["967BB6", "Lavender Purple"], ["96A8A1", "Pewter"], ["96BBAB", "Summer Green"], ["97605D", "Au Chico"], ["9771B5", "Wisteria"], ["97CD2D", "Atlantis"], ["983D61", "Vin Rouge"], ["9874D3", "Lilac Bush"], ["98777B", "Bazaar"], ["98811B", "Hacienda"], ["988D77", "Pale Oyster"], ["98FF98", "Mint Green"], ["990066", "Fresh Eggplant"], ["991199", "Violet Eggplant"], ["991613", "Tamarillo"], ["991B07", "Totem Pole"], ["996666", "Copper Rose"], ["9966CC", "Amethyst"], ["997A8D", "Mountbatten Pink"], ["9999CC", "Blue Bell"], ["9A3820", "Prairie Sand"], ["9A6E61", "Toast"], ["9A9577", "Gurkha"], ["9AB973", "Olivine"], ["9AC2B8", "Shadow Green"], ["9B4703", "Oregon"], ["9B9E8F", "Lemon Grass"], ["9C3336", "Stiletto"], ["9D5616", "Hawaiian Tan"], ["9DACB7", "Gull Gray"], ["9DC209", "Pistachio"], ["9DE093", "Granny Smith Apple"], ["9DE5FF", "Anakiwa"], ["9E5302", "Chelsea Gem"], ["9E5B40", "Sepia Skin"], ["9EA587", "Sage"], ["9EA91F", "Citron"], ["9EB1CD", "Rock Blue"], ["9EDEE0", "Morning Glory"], ["9F381D", "Cognac"], ["9F821C", "Reef Gold"], ["9F9F9C", "Star Dust"], ["9FA0B1", "Santas Gray"], ["9FD7D3", "Sinbad"], ["9FDD8C", "Feijoa"], ["A02712", "Tabasco"], ["A1750D", "Buttered Rum"], ["A1ADB5", "Hit Gray"], ["A1C50A", "Citrus"], ["A1DAD7", "Aqua Island"], ["A1E9DE", "Water Leaf"], ["A2006D", "Flirt"], ["A23B6C", "Rouge"], ["A26645", "Cape Palliser"], ["A2AAB3", "Gray Chateau"], ["A2AEAB", "Edward"], ["A3807B", "Pharlap"], ["A397B4", "Amethyst Smoke"], ["A3E3ED", "Blizzard Blue"], ["A4A49D", "Delta"], ["A4A6D3", "Wistful"], ["A4AF6E", "Green Smoke"], ["A50B5E", "Jazzberry Jam"], ["A59B91", "Zorba"], ["A5CB0C", "Bahia"], ["A62F20", "Roof Terracotta"], ["A65529", "Paarl"], ["A68B5B", "Barley Corn"], ["A69279", "Donkey Brown"], ["A6A29A", "Dawn"], ["A72525", "Mexican Red"], ["A7882C", "Luxor Gold"], ["A85307", "Rich Gold"], ["A86515", "Reno Sand"], ["A86B6B", "Coral Tree"], ["A8989B", "Dusty Gray"], ["A899E6", "Dull Lavender"], ["A8A589", "Tallow"], ["A8AE9C", "Bud"], ["A8AF8E", "Locust"], ["A8BD9F", "Norway"], ["A8E3BD", "Chinook"], ["A9A491", "Gray Olive"], ["A9ACB6", "Aluminium"], ["A9B2C3", "Cadet Blue"], ["A9B497", "Schist"], ["A9BDBF", "Tower Gray"], ["A9BEF2", "Perano"], ["A9C6C2", "Opal"], ["AA375A", "Night Shadz"], ["AA4203", "Fire"], ["AA8B5B", "Muesli"], ["AA8D6F", "Sandal"], ["AAA5A9", "Shady Lady"], ["AAA9CD", "Logan"], ["AAABB7", "Spun Pearl"], ["AAD6E6", "Regent St Blue"], ["AAF0D1", "Magic Mint"], ["AB0563", "Lipstick"], ["AB3472", "Royal Heath"], ["AB917A", "Sandrift"], ["ABA0D9", "Cold Purple"], ["ABA196", "Bronco"], ["AC8A56", "Limed Oak"], ["AC91CE", "East Side"], ["AC9E22", "Lemon Ginger"], ["ACA494", "Napa"], ["ACA586", "Hillary"], ["ACA59F", "Cloudy"], ["ACACAC", "Silver Chalice"], ["ACB78E", "Swamp Green"], ["ACCBB1", "Spring Rain"], ["ACDD4D", "Conifer"], ["ACE1AF", "Celadon"], ["AD781B", "Mandalay"], ["ADBED1", "Casper"], ["ADDFAD", "Moss Green"], ["ADE6C4", "Padua"], ["ADFF2F", "Green Yellow"], ["AE4560", "Hippie Pink"], ["AE6020", "Desert"], ["AE809E", "Bouquet"], ["AF4035", "Medium Carmine"], ["AF4D43", "Apple Blossom"], ["AF593E", "Brown Rust"], ["AF8751", "Driftwood"], ["AF8F2C", "Alpine"], ["AF9F1C", "Lucky"], ["AFA09E", "Martini"], ["AFB1B8", "Bombay"], ["AFBDD9", "Pigeon Post"], ["B04C6A", "Cadillac"], ["B05D54", "Matrix"], ["B05E81", "Tapestry"], ["B06608", "Mai Tai"], ["B09A95", "Del Rio"], ["B0E0E6", "Powder Blue"], ["B0E313", "Inch Worm"], ["B10000", "Bright Red"], ["B14A0B", "Vesuvius"], ["B1610B", "Pumpkin Skin"], ["B16D52", "Santa Fe"], ["B19461", "Teak"], ["B1E2C1", "Fringy Flower"], ["B1F4E7", "Ice Cold"], ["B20931", "Shiraz"], ["B2A1EA", "Biloba Flower"], ["B32D29", "Tall Poppy"], ["B35213", "Fiery Orange"], ["B38007", "Hot Toddy"], ["B3AF95", "Taupe Gray"], ["B3C110", "La Rioja"], ["B43332", "Well Read"], ["B44668", "Blush"], ["B4CFD3", "Jungle Mist"], ["B57281", "Turkish Rose"], ["B57EDC", "Lavender"], ["B5A27F", "Mongoose"], ["B5B35C", "Olive Green"], ["B5D2CE", "Jet Stream"], ["B5ECDF", "Cruise"], ["B6316C", "Hibiscus"], ["B69D98", "Thatch"], ["B6B095", "Heathered Gray"], ["B6BAA4", "Eagle"], ["B6D1EA", "Spindle"], ["B6D3BF", "Gum Leaf"], ["B7410E", "Rust"], ["B78E5C", "Muddy Waters"], ["B7A214", "Sahara"], ["B7A458", "Husk"], ["B7B1B1", "Nobel"], ["B7C3D0", "Heather"], ["B7F0BE", "Madang"], ["B81104", "Milano Red"], ["B87333", "Copper"], ["B8B56A", "Gimblet"], ["B8C1B1", "Green Spring"], ["B8C25D", "Celery"], ["B8E0F9", "Sail"], ["B94E48", "Chestnut"], ["B95140", "Crail"], ["B98D28", "Marigold"], ["B9C46A", "Wild Willow"], ["B9C8AC", "Rainee"], ["BA0101", "Guardsman Red"], ["BA450C", "Rock Spray"], ["BA6F1E", "Bourbon"], ["BA7F03", "Pirate Gold"], ["BAB1A2", "Nomad"], ["BAC7C9", "Submarine"], ["BAEEF9", "Charlotte"], ["BB3385", "Medium Red Violet"], ["BB8983", "Brandy Rose"], ["BBD009", "Rio Grande"], ["BBD7C1", "Surf"], ["BCC9C2", "Powder Ash"], ["BD5E2E", "Tuscany"], ["BD978E", "Quicksand"], ["BDB1A8", "Silk"], ["BDB2A1", "Malta"], ["BDB3C7", "Chatelle"], ["BDBBD7", "Lavender Gray"], ["BDBDC6", "French Gray"], ["BDC8B3", "Clay Ash"], ["BDC9CE", "Loblolly"], ["BDEDFD", "French Pass"], ["BEA6C3", "London Hue"], ["BEB5B7", "Pink Swan"], ["BEDE0D", "Fuego"], ["BF5500", "Rose of Sharon"], ["BFB8B0", "Tide"], ["BFBED8", "Blue Haze"], ["BFC1C2", "Silver Sand"], ["BFC921", "Key Lime Pie"], ["BFDBE2", "Ziggurat"], ["BFFF00", "Lime"], ["C02B18", "Thunderbird"], ["C04737", "Mojo"], ["C08081", "Old Rose"], ["C0C0C0", "Silver"], ["C0D3B9", "Pale Leaf"], ["C0D8B6", "Pixie Green"], ["C1440E", "Tia Maria"], ["C154C1", "Fuchsia Pink"], ["C1A004", "Buddha Gold"], ["C1B7A4", "Bison Hide"], ["C1BAB0", "Tea"], ["C1BECD", "Gray Suit"], ["C1D7B0", "Sprout"], ["C1F07C", "Sulu"], ["C26B03", "Indochine"], ["C2955D", "Twine"], ["C2BDB6", "Cotton Seed"], ["C2CAC4", "Pumice"], ["C2E8E5", "Jagged Ice"], ["C32148", "Maroon Flush"], ["C3B091", "Indian Khaki"], ["C3BFC1", "Pale Slate"], ["C3C3BD", "Gray Nickel"], ["C3CDE6", "Periwinkle Gray"], ["C3D1D1", "Tiara"], ["C3DDF9", "Tropical Blue"], ["C41E3A", "Cardinal"], ["C45655", "Fuzzy Wuzzy Brown"], ["C45719", "Orange Roughy"], ["C4C4BC", "Mist Gray"], ["C4D0B0", "Coriander"], ["C4F4EB", "Mint Tulip"], ["C54B8C", "Mulberry"], ["C59922", "Nugget"], ["C5994B", "Tussock"], ["C5DBCA", "Sea Mist"], ["C5E17A", "Yellow Green"], ["C62D42", "Brick Red"], ["C6726B", "Contessa"], ["C69191", "Oriental Pink"], ["C6A84B", "Roti"], ["C6C3B5", "Ash"], ["C6C8BD", "Kangaroo"], ["C6E610", "Las Palmas"], ["C7031E", "Monza"], ["C71585", "Red Violet"], ["C7BCA2", "Coral Reef"], ["C7C1FF", "Melrose"], ["C7C4BF", "Cloud"], ["C7C9D5", "Ghost"], ["C7CD90", "Pine Glade"], ["C7DDE5", "Botticelli"], ["C88A65", "Antique Brass"], ["C8A2C8", "Lilac"], ["C8A528", "Hokey Pokey"], ["C8AABF", "Lily"], ["C8B568", "Laser"], ["C8E3D7", "Edgewater"], ["C96323", "Piper"], ["C99415", "Pizza"], ["C9A0DC", "Light Wisteria"], ["C9B29B", "Rodeo Dust"], ["C9B35B", "Sundance"], ["C9B93B", "Earls Green"], ["C9C0BB", "Silver Rust"], ["C9D9D2", "Conch"], ["C9FFA2", "Reef"], ["C9FFE5", "Aero Blue"], ["CA3435", "Flush Mahogany"], ["CABB48", "Turmeric"], ["CADCD4", "Paris White"], ["CAE00D", "Bitter Lemon"], ["CAE6DA", "Skeptic"], ["CB8FA9", "Viola"], ["CBCAB6", "Foggy Gray"], ["CBD3B0", "Green Mist"], ["CBDBD6", "Nebula"], ["CC3333", "Persian Red"], ["CC5500", "Burnt Orange"], ["CC7722", "Ochre"], ["CC8899", "Puce"], ["CCCAA8", "Thistle Green"], ["CCCCFF", "Periwinkle"], ["CCFF00", "Electric Lime"], ["CD5700", "Tenn"], ["CD5C5C", "Chestnut Rose"], ["CD8429", "Brandy Punch"], ["CDF4FF", "Onahau"], ["CEB98F", "Sorrell Brown"], ["CEBABA", "Cold Turkey"], ["CEC291", "Yuma"], ["CEC7A7", "Chino"], ["CFA39D", "Eunry"], ["CFB53B", "Old Gold"], ["CFDCCF", "Tasman"], ["CFE5D2", "Surf Crest"], ["CFF9F3", "Humming Bird"], ["CFFAF4", "Scandal"], ["D05F04", "Red Stage"], ["D06DA1", "Hopbush"], ["D07D12", "Meteor"], ["D0BEF8", "Perfume"], ["D0C0E5", "Prelude"], ["D0F0C0", "Tea Green"], ["D18F1B", "Geebung"], ["D1BEA8", "Vanilla"], ["D1C6B4", "Soft Amber"], ["D1D2CA", "Celeste"], ["D1D2DD", "Mischka"], ["D1E231", "Pear"], ["D2691E", "Hot Cinnamon"], ["D27D46", "Raw Sienna"], ["D29EAA", "Careys Pink"], ["D2B48C", "Tan"], ["D2DA97", "Deco"], ["D2F6DE", "Blue Romance"], ["D2F8B0", "Gossip"], ["D3CBBA", "Sisal"], ["D3CDC5", "Swirl"], ["D47494", "Charm"], ["D4B6AF", "Clam Shell"], ["D4BF8D", "Straw"], ["D4C4A8", "Akaroa"], ["D4CD16", "Bird Flower"], ["D4D7D9", "Iron"], ["D4DFE2", "Geyser"], ["D4E2FC", "Hawkes Blue"], ["D54600", "Grenadier"], ["D591A4", "Can Can"], ["D59A6F", "Whiskey"], ["D5D195", "Winter Hazel"], ["D5F6E3", "Granny Apple"], ["D69188", "My Pink"], ["D6C562", "Tacha"], ["D6CEF6", "Moon Raker"], ["D6D6D1", "Quill Gray"], ["D6FFDB", "Snowy Mint"], ["D7837F", "New York Pink"], ["D7C498", "Pavlova"], ["D7D0FF", "Fog"], ["D84437", "Valencia"], ["D87C63", "Japonica"], ["D8BFD8", "Thistle"], ["D8C2D5", "Maverick"], ["D8FCFA", "Foam"], ["D94972", "Cabaret"], ["D99376", "Burning Sand"], ["D9B99B", "Cameo"], ["D9D6CF", "Timberwolf"], ["D9DCC1", "Tana"], ["D9E4F5", "Link Water"], ["D9F7FF", "Mabel"], ["DA3287", "Cerise"], ["DA5B38", "Flame Pea"], ["DA6304", "Bamboo"], ["DA6A41", "Red Damask"], ["DA70D6", "Orchid"], ["DA8A67", "Copperfield"], ["DAA520", "Golden Grass"], ["DAECD6", "Zanah"], ["DAF4F0", "Iceberg"], ["DAFAFF", "Oyster Bay"], ["DB5079", "Cranberry"], ["DB9690", "Petite Orchid"], ["DB995E", "Di Serria"], ["DBDBDB", "Alto"], ["DBFFF8", "Frosted Mint"], ["DC143C", "Crimson"], ["DC4333", "Punch"], ["DCB20C", "Galliano"], ["DCB4BC", "Blossom"], ["DCD747", "Wattle"], ["DCD9D2", "Westar"], ["DCDDCC", "Moon Mist"], ["DCEDB4", "Caper"], ["DCF0EA", "Swans Down"], ["DDD6D5", "Swiss Coffee"], ["DDF9F1", "White Ice"], ["DE3163", "Cerise Red"], ["DE6360", "Roman"], ["DEA681", "Tumbleweed"], ["DEBA13", "Gold Tips"], ["DEC196", "Brandy"], ["DECBC6", "Wafer"], ["DED4A4", "Sapling"], ["DED717", "Barberry"], ["DEE5C0", "Beryl Green"], ["DEF5FF", "Pattens Blue"], ["DF73FF", "Heliotrope"], ["DFBE6F", "Apache"], ["DFCD6F", "Chenin"], ["DFCFDB", "Lola"], ["DFECDA", "Willow Brook"], ["DFFF00", "Chartreuse Yellow"], ["E0B0FF", "Mauve"], ["E0B646", "Anzac"], ["E0B974", "Harvest Gold"], ["E0C095", "Calico"], ["E0FFFF", "Baby Blue"], ["E16865", "Sunglo"], ["E1BC64", "Equator"], ["E1C0C8", "Pink Flare"], ["E1E6D6", "Periglacial Blue"], ["E1EAD4", "Kidnapper"], ["E1F6E8", "Tara"], ["E25465", "Mandy"], ["E2725B", "Terracotta"], ["E28913", "Golden Bell"], ["E292C0", "Shocking"], ["E29418", "Dixie"], ["E29CD2", "Light Orchid"], ["E2D8ED", "Snuff"], ["E2EBED", "Mystic"], ["E2F3EC", "Apple Green"], ["E30B5C", "Razzmatazz"], ["E32636", "Alizarin Crimson"], ["E34234", "Cinnabar"], ["E3BEBE", "Cavern Pink"], ["E3F5E1", "Peppermint"], ["E3F988", "Mindaro"], ["E47698", "Deep Blush"], ["E49B0F", "Gamboge"], ["E4C2D5", "Melanie"], ["E4CFDE", "Twilight"], ["E4D1C0", "Bone"], ["E4D422", "Sunflower"], ["E4D5B7", "Grain Brown"], ["E4D69B", "Zombie"], ["E4F6E7", "Frostee"], ["E4FFD1", "Snow Flurry"], ["E52B50", "Amaranth"], ["E5841B", "Zest"], ["E5CCC9", "Dust Storm"], ["E5D7BD", "Stark White"], ["E5D8AF", "Hampton"], ["E5E0E1", "Bon Jour"], ["E5E5E5", "Mercury"], ["E5F9F6", "Polar"], ["E64E03", "Trinidad"], ["E6BE8A", "Gold Sand"], ["E6BEA5", "Cashmere"], ["E6D7B9", "Double Spanish White"], ["E6E4D4", "Satin Linen"], ["E6F2EA", "Harp"], ["E6F8F3", "Off Green"], ["E6FFE9", "Hint of Green"], ["E6FFFF", "Tranquil"], ["E77200", "Mango Tango"], ["E7730A", "Christine"], ["E79F8C", "Tonys Pink"], ["E79FC4", "Kobi"], ["E7BCB4", "Rose Fog"], ["E7BF05", "Corn"], ["E7CD8C", "Putty"], ["E7ECE6", "Gray Nurse"], ["E7F8FF", "Lily White"], ["E7FEFF", "Bubbles"], ["E89928", "Fire Bush"], ["E8B9B3", "Shilo"], ["E8E0D5", "Pearl Bush"], ["E8EBE0", "Green White"], ["E8F1D4", "Chrome White"], ["E8F2EB", "Gin"], ["E8F5F2", "Aqua Squeeze"], ["E96E00", "Clementine"], ["E97451", "Burnt Sienna"], ["E97C07", "Tahiti Gold"], ["E9CECD", "Oyster Pink"], ["E9D75A", "Confetti"], ["E9E3E3", "Ebb"], ["E9F8ED", "Ottoman"], ["E9FFFD", "Clear Day"], ["EA88A8", "Carissma"], ["EAAE69", "Porsche"], ["EAB33B", "Tulip Tree"], ["EAC674", "Rob Roy"], ["EADAB8", "Raffia"], ["EAE8D4", "White Rock"], ["EAF6EE", "Panache"], ["EAF6FF", "Solitude"], ["EAF9F5", "Aqua Spring"], ["EAFFFE", "Dew"], ["EB9373", "Apricot"], ["EBC2AF", "Zinnwaldite"], ["ECA927", "Fuel Yellow"], ["ECC54E", "Ronchi"], ["ECC7EE", "French Lilac"], ["ECCDB9", "Just Right"], ["ECE090", "Wild Rice"], ["ECEBBD", "Fall Green"], ["ECEBCE", "Aths Special"], ["ECF245", "Starship"], ["ED0A3F", "Red Ribbon"], ["ED7A1C", "Tango"], ["ED9121", "Carrot Orange"], ["ED989E", "Sea Pink"], ["EDB381", "Tacao"], ["EDC9AF", "Desert Sand"], ["EDCDAB", "Pancho"], ["EDDCB1", "Chamois"], ["EDEA99", "Primrose"], ["EDF5DD", "Frost"], ["EDF5F5", "Aqua Haze"], ["EDF6FF", "Zumthor"], ["EDF9F1", "Narvik"], ["EDFC84", "Honeysuckle"], ["EE82EE", "Lavender Magenta"], ["EEC1BE", "Beauty Bush"], ["EED794", "Chalky"], ["EED9C4", "Almond"], ["EEDC82", "Flax"], ["EEDEDA", "Bizarre"], ["EEE3AD", "Double Colonial White"], ["EEEEE8", "Cararra"], ["EEEF78", "Manz"], ["EEF0C8", "Tahuna Sands"], ["EEF0F3", "Athens Gray"], ["EEF3C3", "Tusk"], ["EEF4DE", "Loafer"], ["EEF6F7", "Catskill White"], ["EEFDFF", "Twilight Blue"], ["EEFF9A", "Jonquil"], ["EEFFE2", "Rice Flower"], ["EF863F", "Jaffa"], ["EFEFEF", "Gallery"], ["EFF2F3", "Porcelain"], ["F091A9", "Mauvelous"], ["F0D52D", "Golden Dream"], ["F0DB7D", "Golden Sand"], ["F0DC82", "Buff"], ["F0E2EC", "Prim"], ["F0E68C", "Khaki"], ["F0EEFD", "Selago"], ["F0EEFF", "Titan White"], ["F0F8FF", "Alice Blue"], ["F0FCEA", "Feta"], ["F18200", "Gold Drop"], ["F19BAB", "Wewak"], ["F1E788", "Sahara Sand"], ["F1E9D2", "Parchment"], ["F1E9FF", "Blue Chalk"], ["F1EEC1", "Mint Julep"], ["F1F1F1", "Seashell"], ["F1F7F2", "Saltpan"], ["F1FFAD", "Tidal"], ["F1FFC8", "Chiffon"], ["F2552A", "Flamingo"], ["F28500", "Tangerine"], ["F2C3B2", "Mandys Pink"], ["F2F2F2", "Concrete"], ["F2FAFA", "Black Squeeze"], ["F34723", "Pomegranate"], ["F3AD16", "Buttercup"], ["F3D69D", "New Orleans"], ["F3D9DF", "Vanilla Ice"], ["F3E7BB", "Sidecar"], ["F3E9E5", "Dawn Pink"], ["F3EDCF", "Wheatfield"], ["F3FB62", "Canary"], ["F3FBD4", "Orinoco"], ["F3FFD8", "Carla"], ["F400A1", "Hollywood Cerise"], ["F4A460", "Sandy brown"], ["F4C430", "Saffron"], ["F4D81C", "Ripe Lemon"], ["F4EBD3", "Janna"], ["F4F2EE", "Pampas"], ["F4F4F4", "Wild Sand"], ["F4F8FF", "Zircon"], ["F57584", "Froly"], ["F5C85C", "Cream Can"], ["F5C999", "Manhattan"], ["F5D5A0", "Maize"], ["F5DEB3", "Wheat"], ["F5E7A2", "Sandwisp"], ["F5E7E2", "Pot Pourri"], ["F5E9D3", "Albescent White"], ["F5EDEF", "Soft Peach"], ["F5F3E5", "Ecru White"], ["F5F5DC", "Beige"], ["F5FB3D", "Golden Fizz"], ["F5FFBE", "Australian Mint"], ["F64A8A", "French Rose"], ["F653A6", "Brilliant Rose"], ["F6A4C9", "Illusion"], ["F6F0E6", "Merino"], ["F6F7F7", "Black Haze"], ["F6FFDC", "Spring Sun"], ["F7468A", "Violet Red"], ["F77703", "Chilean Fire"], ["F77FBE", "Persian Pink"], ["F7B668", "Rajah"], ["F7C8DA", "Azalea"], ["F7DBE6", "We Peep"], ["F7F2E1", "Quarter Spanish White"], ["F7F5FA", "Whisper"], ["F7FAF7", "Snow Drift"], ["F8B853", "Casablanca"], ["F8C3DF", "Chantilly"], ["F8D9E9", "Cherub"], ["F8DB9D", "Marzipan"], ["F8DD5C", "Energy Yellow"], ["F8E4BF", "Givry"], ["F8F0E8", "White Linen"], ["F8F4FF", "Magnolia"], ["F8F6F1", "Spring Wood"], ["F8F7DC", "Coconut Cream"], ["F8F7FC", "White Lilac"], ["F8F8F7", "Desert Storm"], ["F8F99C", "Texas"], ["F8FACD", "Corn Field"], ["F8FDD3", "Mimosa"], ["F95A61", "Carnation"], ["F9BF58", "Saffron Mango"], ["F9E0ED", "Carousel Pink"], ["F9E4BC", "Dairy Cream"], ["F9E663", "Portica"], ["F9E6F4", "Underage Pink"], ["F9EAF3", "Amour"], ["F9F8E4", "Rum Swizzle"], ["F9FF8B", "Dolly"], ["F9FFF6", "Sugar Cane"], ["FA7814", "Ecstasy"], ["FA9D5A", "Tan Hide"], ["FAD3A2", "Corvette"], ["FADFAD", "Peach Yellow"], ["FAE600", "Turbo"], ["FAEAB9", "Astra"], ["FAECCC", "Champagne"], ["FAF0E6", "Linen"], ["FAF3F0", "Fantasy"], ["FAF7D6", "Citrine White"], ["FAFAFA", "Alabaster"], ["FAFDE4", "Hint of Yellow"], ["FAFFA4", "Milan"], ["FB607F", "Brink Pink"], ["FB8989", "Geraldine"], ["FBA0E3", "Lavender Rose"], ["FBA129", "Sea Buckthorn"], ["FBAC13", "Sun"], ["FBAED2", "Lavender Pink"], ["FBB2A3", "Rose Bud"], ["FBBEDA", "Cupid"], ["FBCCE7", "Classic Rose"], ["FBCEB1", "Apricot Peach"], ["FBE7B2", "Banana Mania"], ["FBE870", "Marigold Yellow"], ["FBE96C", "Festival"], ["FBEA8C", "Sweet Corn"], ["FBEC5D", "Candy Corn"], ["FBF9F9", "Hint of Red"], ["FBFFBA", "Shalimar"], ["FC0FC0", "Shocking Pink"], ["FC80A5", "Tickle Me Pink"], ["FC9C1D", "Tree Poppy"], ["FCC01E", "Lightning Yellow"], ["FCD667", "Goldenrod"], ["FCD917", "Candlelight"], ["FCDA98", "Cherokee"], ["FCF4D0", "Double Pearl Lusta"], ["FCF4DC", "Pearl Lusta"], ["FCF8F7", "Vista White"], ["FCFBF3", "Bianca"], ["FCFEDA", "Moon Glow"], ["FCFFE7", "China Ivory"], ["FCFFF9", "Ceramic"], ["FD0E35", "Torch Red"], ["FD5B78", "Wild Watermelon"], ["FD7B33", "Crusta"], ["FD7C07", "Sorbus"], ["FD9FA2", "Sweet Pink"], ["FDD5B1", "Light Apricot"], ["FDD7E4", "Pig Pink"], ["FDE1DC", "Cinderella"], ["FDE295", "Golden Glow"], ["FDE910", "Lemon"], ["FDF5E6", "Old Lace"], ["FDF6D3", "Half Colonial White"], ["FDF7AD", "Drover"], ["FDFEB8", "Pale Prim"], ["FDFFD5", "Cumulus"], ["FE28A2", "Persian Rose"], ["FE4C40", "Sunset Orange"], ["FE6F5E", "Bittersweet"], ["FE9D04", "California"], ["FEA904", "Yellow Sea"], ["FEBAAD", "Melon"], ["FED33C", "Bright Sun"], ["FED85D", "Dandelion"], ["FEDB8D", "Salomie"], ["FEE5AC", "Cape Honey"], ["FEEBF3", "Remy"], ["FEEFCE", "Oasis"], ["FEF0EC", "Bridesmaid"], ["FEF2C7", "Beeswax"], ["FEF3D8", "Bleach White"], ["FEF4CC", "Pipi"], ["FEF4DB", "Half Spanish White"], ["FEF4F8", "Wisp Pink"], ["FEF5F1", "Provincial Pink"], ["FEF7DE", "Half Dutch White"], ["FEF8E2", "Solitaire"], ["FEF8FF", "White Pointer"], ["FEF9E3", "Off Yellow"], ["FEFCED", "Orange White"], ["FF0000", "Red"], ["FF007F", "Rose"], ["FF00CC", "Purple Pizzazz"], ["FF00FF", "Magenta / Fuchsia"], ["FF2400", "Scarlet"], ["FF3399", "Wild Strawberry"], ["FF33CC", "Razzle Dazzle Rose"], ["FF355E", "Radical Red"], ["FF3F34", "Red Orange"], ["FF4040", "Coral Red"], ["FF4D00", "Vermilion"], ["FF4F00", "International Orange"], ["FF6037", "Outrageous Orange"], ["FF6600", "Blaze Orange"], ["FF66FF", "Pink Flamingo"], ["FF681F", "Orange"], ["FF69B4", "Hot Pink"], ["FF6B53", "Persimmon"], ["FF6FFF", "Blush Pink"], ["FF7034", "Burning Orange"], ["FF7518", "Pumpkin"], ["FF7D07", "Flamenco"], ["FF7F00", "Flush Orange"], ["FF7F50", "Coral"], ["FF8C69", "Salmon"], ["FF9000", "Pizazz"], ["FF910F", "West Side"], ["FF91A4", "Pink Salmon"], ["FF9933", "Neon Carrot"], ["FF9966", "Atomic Tangerine"], ["FF9980", "Vivid Tangerine"], ["FF9E2C", "Sunshade"], ["FFA000", "Orange Peel"], ["FFA194", "Mona Lisa"], ["FFA500", "Web Orange"], ["FFA6C9", "Carnation Pink"], ["FFAB81", "Hit Pink"], ["FFAE42", "Yellow Orange"], ["FFB0AC", "Cornflower Lilac"], ["FFB1B3", "Sundown"], ["FFB31F", "My Sin"], ["FFB555", "Texas Rose"], ["FFB7D5", "Cotton Candy"], ["FFB97B", "Macaroni and Cheese"], ["FFBA00", "Selective Yellow"], ["FFBD5F", "Koromiko"], ["FFBF00", "Amber"], ["FFC0A8", "Wax Flower"], ["FFC0CB", "Pink"], ["FFC3C0", "Your Pink"], ["FFC901", "Supernova"], ["FFCBA4", "Flesh"], ["FFCC33", "Sunglow"], ["FFCC5C", "Golden Tainoi"], ["FFCC99", "Peach Orange"], ["FFCD8C", "Chardonnay"], ["FFD1DC", "Pastel Pink"], ["FFD2B7", "Romantic"], ["FFD38C", "Grandis"], ["FFD700", "Gold"], ["FFD800", "School bus Yellow"], ["FFD8D9", "Cosmos"], ["FFDB58", "Mustard"], ["FFDCD6", "Peach Schnapps"], ["FFDDAF", "Caramel"], ["FFDDCD", "Tuft Bush"], ["FFDDCF", "Watusi"], ["FFDDF4", "Pink Lace"], ["FFDEAD", "Navajo White"], ["FFDEB3", "Frangipani"], ["FFE1DF", "Pippin"], ["FFE1F2", "Pale Rose"], ["FFE2C5", "Negroni"], ["FFE5A0", "Cream Brulee"], ["FFE5B4", "Peach"], ["FFE6C7", "Tequila"], ["FFE772", "Kournikova"], ["FFEAC8", "Sandy Beach"], ["FFEAD4", "Karry"], ["FFEC13", "Broom"], ["FFEDBC", "Colonial White"], ["FFEED8", "Derby"], ["FFEFA1", "Vis Vis"], ["FFEFC1", "Egg White"], ["FFEFD5", "Papaya Whip"], ["FFEFEC", "Fair Pink"], ["FFF0DB", "Peach Cream"], ["FFF0F5", "Lavender blush"], ["FFF14F", "Gorse"], ["FFF1B5", "Buttermilk"], ["FFF1D8", "Pink Lady"], ["FFF1EE", "Forget Me Not"], ["FFF1F9", "Tutu"], ["FFF39D", "Picasso"], ["FFF3F1", "Chardon"], ["FFF46E", "Paris Daisy"], ["FFF4CE", "Barley White"], ["FFF4DD", "Egg Sour"], ["FFF4E0", "Sazerac"], ["FFF4E8", "Serenade"], ["FFF4F3", "Chablis"], ["FFF5EE", "Seashell Peach"], ["FFF5F3", "Sauvignon"], ["FFF6D4", "Milk Punch"], ["FFF6DF", "Varden"], ["FFF6F5", "Rose White"], ["FFF8D1", "Baja White"], ["FFF9E2", "Gin Fizz"], ["FFF9E6", "Early Dawn"], ["FFFACD", "Lemon Chiffon"], ["FFFAF4", "Bridal Heath"], ["FFFBDC", "Scotch Mist"], ["FFFBF9", "Soapstone"], ["FFFC99", "Witch Haze"], ["FFFCEA", "Buttery White"], ["FFFCEE", "Island Spice"], ["FFFDD0", "Cream"], ["FFFDE6", "Chilean Heath"], ["FFFDE8", "Travertine"], ["FFFDF3", "Orchid White"], ["FFFDF4", "Quarter Pearl Lusta"], ["FFFEE1", "Half and Half"], ["FFFEEC", "Apricot White"], ["FFFEF0", "Rice Cake"], ["FFFEF6", "Black White"], ["FFFEFD", "Romance"], ["FFFF00", "Yellow"], ["FFFF66", "Laser Lemon"], ["FFFF99", "Pale Canary"], ["FFFFB4", "Portafino"], ["FFFFF0", "Ivory"], ["FFFFFF", "White"], ["acc2d9", "cloudy blue"], ["56ae57", "dark pastel green"], ["b2996e", "dust"], ["a8ff04", "electric lime"], ["69d84f", "fresh green"], ["894585", "light eggplant"], ["70b23f", "nasty green"], ["d4ffff", "really light blue"], ["65ab7c", "tea"], ["952e8f", "warm purple"], ["fcfc81", "yellowish tan"], ["a5a391", "cement"], ["388004", "dark grass green"], ["4c9085", "dusty teal"], ["5e9b8a", "grey teal"], ["efb435", "macaroni and cheese"], ["d99b82", "pinkish tan"], ["0a5f38", "spruce"], ["0c06f7", "strong blue"], ["61de2a", "toxic green"], ["3778bf", "windows blue"], ["2242c7", "blue blue"], ["533cc6", "blue with a hint of purple"], ["9bb53c", "booger"], ["05ffa6", "bright sea green"], ["1f6357", "dark green blue"], ["017374", "deep turquoise"], ["0cb577", "green teal"], ["ff0789", "strong pink"], ["afa88b", "bland"], ["08787f", "deep aqua"], ["dd85d7", "lavender pink"], ["a6c875", "light moss green"], ["a7ffb5", "light seafoam green"], ["c2b709", "olive yellow"], ["e78ea5", "pig pink"], ["966ebd", "deep lilac"], ["ccad60", "desert"], ["ac86a8", "dusty lavender"], ["947e94", "purpley grey"], ["983fb2", "purply"], ["ff63e9", "candy pink"], ["b2fba5", "light pastel green"], ["63b365", "boring green"], ["8ee53f", "kiwi green"], ["b7e1a1", "light grey green"], ["ff6f52", "orange pink"], ["bdf8a3", "tea green"], ["d3b683", "very light brown"], ["fffcc4", "egg shell"], ["430541", "eggplant purple"], ["ffb2d0", "powder pink"], ["997570", "reddish grey"], ["ad900d", "baby shit brown"], ["c48efd", "liliac"], ["507b9c", "stormy blue"], ["7d7103", "ugly brown"], ["fffd78", "custard"], ["da467d", "darkish pink"], ["410200", "deep brown"], ["c9d179", "greenish beige"], ["fffa86", "manilla"], ["5684ae", "off blue"], ["6b7c85", "battleship grey"], ["6f6c0a", "browny green"], ["7e4071", "bruise"], ["009337", "kelley green"], ["d0e429", "sickly yellow"], ["fff917", "sunny yellow"], ["1d5dec", "azul"], ["054907", "darkgreen"], ["b5ce08", "green/yellow"], ["8fb67b", "lichen"], ["c8ffb0", "light light green"], ["fdde6c", "pale gold"], ["ffdf22", "sun yellow"], ["a9be70", "tan green"], ["6832e3", "burple"], ["fdb147", "butterscotch"], ["c7ac7d", "toupe"], ["fff39a", "dark cream"], ["850e04", "indian red"], ["efc0fe", "light lavendar"], ["40fd14", "poison green"], ["b6c406", "baby puke green"], ["9dff00", "bright yellow green"], ["3c4142", "charcoal grey"], ["f2ab15", "squash"], ["ac4f06", "cinnamon"], ["c4fe82", "light pea green"], ["2cfa1f", "radioactive green"], ["9a6200", "raw sienna"], ["ca9bf7", "baby purple"], ["875f42", "cocoa"], ["3a2efe", "light royal blue"], ["fd8d49", "orangeish"], ["8b3103", "rust brown"], ["cba560", "sand brown"], ["698339", "swamp"], ["0cdc73", "tealish green"], ["b75203", "burnt siena"], ["7f8f4e", "camo"], ["26538d", "dusk blue"], ["63a950", "fern"], ["c87f89", "old rose"], ["b1fc99", "pale light green"], ["ff9a8a", "peachy pink"], ["f6688e", "rosy pink"], ["76fda8", "light bluish green"], ["53fe5c", "light bright green"], ["4efd54", "light neon green"], ["a0febf", "light seafoam"], ["7bf2da", "tiffany blue"], ["bcf5a6", "washed out green"], ["ca6b02", "browny orange"], ["107ab0", "nice blue"], ["2138ab", "sapphire"], ["719f91", "greyish teal"], ["fdb915", "orangey yellow"], ["fefcaf", "parchment"], ["fcf679", "straw"], ["1d0200", "very dark brown"], ["cb6843", "terracota"], ["31668a", "ugly blue"], ["247afd", "clear blue"], ["ffffb6", "creme"], ["90fda9", "foam green"], ["86a17d", "grey/green"], ["fddc5c", "light gold"], ["78d1b6", "seafoam blue"], ["13bbaf", "topaz"], ["fb5ffc", "violet pink"], ["20f986", "wintergreen"], ["ffe36e", "yellow tan"], ["9d0759", "dark fuchsia"], ["3a18b1", "indigo blue"], ["c2ff89", "light yellowish green"], ["d767ad", "pale magenta"], ["720058", "rich purple"], ["ffda03", "sunflower yellow"], ["01c08d", "green/blue"], ["ac7434", "leather"], ["014600", "racing green"], ["9900fa", "vivid purple"], ["02066f", "dark royal blue"], ["8e7618", "hazel"], ["d1768f", "muted pink"], ["96b403", "booger green"], ["fdff63", "canary"], ["95a3a6", "cool grey"], ["7f684e", "dark taupe"], ["751973", "darkish purple"], ["089404", "true green"], ["ff6163", "coral pink"], ["598556", "dark sage"], ["214761", "dark slate blue"], ["3c73a8", "flat blue"], ["ba9e88", "mushroom"], ["021bf9", "rich blue"], ["734a65", "dirty purple"], ["23c48b", "greenblue"], ["8fae22", "icky green"], ["e6f2a2", "light khaki"], ["4b57db", "warm blue"], ["d90166", "dark hot pink"], ["015482", "deep sea blue"], ["9d0216", "carmine"], ["728f02", "dark yellow green"], ["ffe5ad", "pale peach"], ["4e0550", "plum purple"], ["f9bc08", "golden rod"], ["ff073a", "neon red"], ["c77986", "old pink"], ["d6fffe", "very pale blue"], ["fe4b03", "blood orange"], ["fd5956", "grapefruit"], ["fce166", "sand yellow"], ["b2713d", "clay brown"], ["1f3b4d", "dark blue grey"], ["699d4c", "flat green"], ["56fca2", "light green blue"], ["fb5581", "warm pink"], ["3e82fc", "dodger blue"], ["a0bf16", "gross green"], ["d6fffa", "ice"], ["4f738e", "metallic blue"], ["ffb19a", "pale salmon"], ["5c8b15", "sap green"], ["54ac68", "algae"], ["89a0b0", "bluey grey"], ["7ea07a", "greeny grey"], ["1bfc06", "highlighter green"], ["cafffb", "light light blue"], ["b6ffbb", "light mint"], ["a75e09", "raw umber"], ["152eff", "vivid blue"], ["8d5eb7", "deep lavender"], ["5f9e8f", "dull teal"], ["63f7b4", "light greenish blue"], ["606602", "mud green"], ["fc86aa", "pinky"], ["8c0034", "red wine"], ["758000", "shit green"], ["ab7e4c", "tan brown"], ["030764", "darkblue"], ["fe86a4", "rosa"], ["d5174e", "lipstick"], ["fed0fc", "pale mauve"], ["680018", "claret"], ["fedf08", "dandelion"], ["fe420f", "orangered"], ["6f7c00", "poop green"], ["ca0147", "ruby"], ["1b2431", "dark"], ["00fbb0", "greenish turquoise"], ["db5856", "pastel red"], ["ddd618", "piss yellow"], ["41fdfe", "bright cyan"], ["cf524e", "dark coral"], ["21c36f", "algae green"], ["a90308", "darkish red"], ["6e1005", "reddy brown"], ["fe828c", "blush pink"], ["4b6113", "camouflage green"], ["4da409", "lawn green"], ["beae8a", "putty"], ["0339f8", "vibrant blue"], ["a88f59", "dark sand"], ["5d21d0", "purple/blue"], ["feb209", "saffron"], ["4e518b", "twilight"], ["964e02", "warm brown"], ["85a3b2", "bluegrey"], ["ff69af", "bubble gum pink"], ["c3fbf4", "duck egg blue"], ["2afeb7", "greenish cyan"], ["005f6a", "petrol"], ["0c1793", "royal"], ["ffff81", "butter"], ["f0833a", "dusty orange"], ["f1f33f", "off yellow"], ["b1d27b", "pale olive green"], ["fc824a", "orangish"], ["71aa34", "leaf"], ["b7c9e2", "light blue grey"], ["4b0101", "dried blood"], ["a552e6", "lightish purple"], ["af2f0d", "rusty red"], ["8b88f8", "lavender blue"], ["9af764", "light grass green"], ["a6fbb2", "light mint green"], ["ffc512", "sunflower"], ["750851", "velvet"], ["c14a09", "brick orange"], ["fe2f4a", "lightish red"], ["0203e2", "pure blue"], ["0a437a", "twilight blue"], ["a50055", "violet red"], ["ae8b0c", "yellowy brown"], ["fd798f", "carnation"], ["bfac05", "muddy yellow"], ["3eaf76", "dark seafoam green"], ["c74767", "deep rose"], ["b9484e", "dusty red"], ["647d8e", "grey/blue"], ["bffe28", "lemon lime"], ["d725de", "purple/pink"], ["b29705", "brown yellow"], ["673a3f", "purple brown"], ["a87dc2", "wisteria"], ["fafe4b", "banana yellow"], ["c0022f", "lipstick red"], ["0e87cc", "water blue"], ["8d8468", "brown grey"], ["ad03de", "vibrant purple"], ["8cff9e", "baby green"], ["94ac02", "barf green"], ["c4fff7", "eggshell blue"], ["fdee73", "sandy yellow"], ["33b864", "cool green"], ["fff9d0", "pale"], ["758da3", "blue/grey"], ["f504c9", "hot magenta"], ["77a1b5", "greyblue"], ["8756e4", "purpley"], ["889717", "baby shit green"], ["c27e79", "brownish pink"], ["017371", "dark aquamarine"], ["9f8303", "diarrhea"], ["f7d560", "light mustard"], ["bdf6fe", "pale sky blue"], ["75b84f", "turtle green"], ["9cbb04", "bright olive"], ["29465b", "dark grey blue"], ["696006", "greeny brown"], ["adf802", "lemon green"], ["c1c6fc", "light periwinkle"], ["35ad6b", "seaweed green"], ["fffd37", "sunshine yellow"], ["a442a0", "ugly purple"], ["f36196", "medium pink"], ["947706", "puke brown"], ["fff4f2", "very light pink"], ["1e9167", "viridian"], ["b5c306", "bile"], ["feff7f", "faded yellow"], ["cffdbc", "very pale green"], ["0add08", "vibrant green"], ["87fd05", "bright lime"], ["1ef876", "spearmint"], ["7bfdc7", "light aquamarine"], ["bcecac", "light sage"], ["bbf90f", "yellowgreen"], ["ab9004", "baby poo"], ["1fb57a", "dark seafoam"], ["00555a", "deep teal"], ["a484ac", "heather"], ["c45508", "rust orange"], ["3f829d", "dirty blue"], ["548d44", "fern green"], ["c95efb", "bright lilac"], ["3ae57f", "weird green"], ["016795", "peacock blue"], ["87a922", "avocado green"], ["f0944d", "faded orange"], ["5d1451", "grape purple"], ["25ff29", "hot green"], ["d0fe1d", "lime yellow"], ["ffa62b", "mango"], ["01b44c", "shamrock"], ["ff6cb5", "bubblegum"], ["6b4247", "purplish brown"], ["c7c10c", "vomit yellow"], ["b7fffa", "pale cyan"], ["aeff6e", "key lime"], ["ec2d01", "tomato red"], ["76ff7b", "lightgreen"], ["730039", "merlot"], ["040348", "night blue"], ["df4ec8", "purpleish pink"], ["6ecb3c", "apple"], ["8f9805", "baby poop green"], ["5edc1f", "green apple"], ["d94ff5", "heliotrope"], ["c8fd3d", "yellow/green"], ["070d0d", "almost black"], ["4984b8", "cool blue"], ["51b73b", "leafy green"], ["ac7e04", "mustard brown"], ["4e5481", "dusk"], ["876e4b", "dull brown"], ["58bc08", "frog green"], ["2fef10", "vivid green"], ["2dfe54", "bright light green"], ["0aff02", "fluro green"], ["9cef43", "kiwi"], ["18d17b", "seaweed"], ["35530a", "navy green"], ["1805db", "ultramarine blue"], ["6258c4", "iris"], ["ff964f", "pastel orange"], ["ffab0f", "yellowish orange"], ["8f8ce7", "perrywinkle"], ["24bca8", "tealish"], ["3f012c", "dark plum"], ["cbf85f", "pear"], ["ff724c", "pinkish orange"], ["280137", "midnight purple"], ["b36ff6", "light urple"], ["48c072", "dark mint"], ["bccb7a", "greenish tan"], ["a8415b", "light burgundy"], ["06b1c4", "turquoise blue"], ["cd7584", "ugly pink"], ["f1da7a", "sandy"], ["ff0490", "electric pink"], ["805b87", "muted purple"], ["50a747", "mid green"], ["a8a495", "greyish"], ["cfff04", "neon yellow"], ["ffff7e", "banana"], ["ff7fa7", "carnation pink"], ["ef4026", "tomato"], ["3c9992", "sea"], ["886806", "muddy brown"], ["04f489", "turquoise green"], ["fef69e", "buff"], ["cfaf7b", "fawn"], ["3b719f", "muted blue"], ["fdc1c5", "pale rose"], ["20c073", "dark mint green"], ["9b5fc0", "amethyst"], ["0f9b8e", "blue/green"], ["742802", "chestnut"], ["9db92c", "sick green"], ["a4bf20", "pea"], ["cd5909", "rusty orange"], ["ada587", "stone"], ["be013c", "rose red"], ["b8ffeb", "pale aqua"], ["dc4d01", "deep orange"], ["a2653e", "earth"], ["638b27", "mossy green"], ["419c03", "grassy green"], ["b1ff65", "pale lime green"], ["9dbcd4", "light grey blue"], ["fdfdfe", "pale grey"], ["77ab56", "asparagus"], ["464196", "blueberry"], ["990147", "purple red"], ["befd73", "pale lime"], ["32bf84", "greenish teal"], ["af6f09", "caramel"], ["a0025c", "deep magenta"], ["ffd8b1", "light peach"], ["7f4e1e", "milk chocolate"], ["bf9b0c", "ocher"], ["6ba353", "off green"], ["f075e6", "purply pink"], ["7bc8f6", "lightblue"], ["475f94", "dusky blue"], ["f5bf03", "golden"], ["fffeb6", "light beige"], ["fffd74", "butter yellow"], ["895b7b", "dusky purple"], ["436bad", "french blue"], ["d0c101", "ugly yellow"], ["c6f808", "greeny yellow"], ["f43605", "orangish red"], ["02c14d", "shamrock green"], ["b25f03", "orangish brown"], ["2a7e19", "tree green"], ["490648", "deep violet"], ["536267", "gunmetal"], ["5a06ef", "blue/purple"], ["cf0234", "cherry"], ["c4a661", "sandy brown"], ["978a84", "warm grey"], ["1f0954", "dark indigo"], ["03012d", "midnight"], ["2bb179", "bluey green"], ["c3909b", "grey pink"], ["a66fb5", "soft purple"], ["770001", "blood"], ["922b05", "brown red"], ["7d7f7c", "medium grey"], ["990f4b", "berry"], ["8f7303", "poo"], ["c83cb9", "purpley pink"], ["fea993", "light salmon"], ["acbb0d", "snot"], ["c071fe", "easter purple"], ["ccfd7f", "light yellow green"], ["00022e", "dark navy blue"], ["828344", "drab"], ["ffc5cb", "light rose"], ["ab1239", "rouge"], ["b0054b", "purplish red"], ["99cc04", "slime green"], ["937c00", "baby poop"], ["019529", "irish green"], ["ef1de7", "pink/purple"], ["000435", "dark navy"], ["42b395", "greeny blue"], ["9d5783", "light plum"], ["c8aca9", "pinkish grey"], ["c87606", "dirty orange"], ["aa2704", "rust red"], ["e4cbff", "pale lilac"], ["fa4224", "orangey red"], ["0804f9", "primary blue"], ["5cb200", "kermit green"], ["76424e", "brownish purple"], ["6c7a0e", "murky green"], ["fbdd7e", "wheat"], ["2a0134", "very dark purple"], ["044a05", "bottle green"], ["fd4659", "watermelon"], ["0d75f8", "deep sky blue"], ["fe0002", "fire engine red"], ["cb9d06", "yellow ochre"], ["fb7d07", "pumpkin orange"], ["b9cc81", "pale olive"], ["edc8ff", "light lilac"], ["61e160", "lightish green"], ["8ab8fe", "carolina blue"], ["920a4e", "mulberry"], ["fe02a2", "shocking pink"], ["9a3001", "auburn"], ["65fe08", "bright lime green"], ["befdb7", "celadon"], ["b17261", "pinkish brown"], ["885f01", "poo brown"], ["02ccfe", "bright sky blue"], ["c1fd95", "celery"], ["836539", "dirt brown"], ["fb2943", "strawberry"], ["84b701", "dark lime"], ["b66325", "copper"], ["7f5112", "medium brown"], ["5fa052", "muted green"], ["6dedfd", "robin's egg"], ["0bf9ea", "bright aqua"], ["c760ff", "bright lavender"], ["ffffcb", "ivory"], ["f6cefc", "very light purple"], ["155084", "light navy"], ["f5054f", "pink red"], ["645403", "olive brown"], ["7a5901", "poop brown"], ["a8b504", "mustard green"], ["3d9973", "ocean green"], ["000133", "very dark blue"], ["76a973", "dusty green"], ["2e5a88", "light navy blue"], ["0bf77d", "minty green"], ["bd6c48", "adobe"], ["ac1db8", "barney"], ["2baf6a", "jade green"], ["26f7fd", "bright light blue"], ["aefd6c", "light lime"], ["9b8f55", "dark khaki"], ["ffad01", "orange yellow"], ["c69c04", "ocre"], ["f4d054", "maize"], ["de9dac", "faded pink"], ["05480d", "british racing green"], ["c9ae74", "sandstone"], ["60460f", "mud brown"], ["98f6b0", "light sea green"], ["8af1fe", "robin egg blue"], ["2ee8bb", "aqua marine"], ["11875d", "dark sea green"], ["fdb0c0", "soft pink"], ["b16002", "orangey brown"], ["f7022a", "cherry red"], ["d5ab09", "burnt yellow"], ["86775f", "brownish grey"], ["c69f59", "camel"], ["7a687f", "purplish grey"], ["042e60", "marine"], ["c88d94", "greyish pink"], ["a5fbd5", "pale turquoise"], ["fffe71", "pastel yellow"], ["6241c7", "bluey purple"], ["fffe40", "canary yellow"], ["d3494e", "faded red"], ["985e2b", "sepia"], ["a6814c", "coffee"], ["ff08e8", "bright magenta"], ["9d7651", "mocha"], ["feffca", "ecru"], ["98568d", "purpleish"], ["9e003a", "cranberry"], ["287c37", "darkish green"], ["b96902", "brown orange"], ["ba6873", "dusky rose"], ["ff7855", "melon"], ["94b21c", "sickly green"], ["c5c9c7", "silver"], ["661aee", "purply blue"], ["6140ef", "purpleish blue"], ["9be5aa", "hospital green"], ["7b5804", "shit brown"], ["276ab3", "mid blue"], ["feb308", "amber"], ["8cfd7e", "easter green"], ["6488ea", "soft blue"], ["056eee", "cerulean blue"], ["b27a01", "golden brown"], ["0ffef9", "bright turquoise"], ["fa2a55", "red pink"], ["820747", "red purple"], ["7a6a4f", "greyish brown"], ["f4320c", "vermillion"], ["a13905", "russet"], ["6f828a", "steel grey"], ["a55af4", "lighter purple"], ["ad0afd", "bright violet"], ["004577", "prussian blue"], ["658d6d", "slate green"], ["ca7b80", "dirty pink"], ["005249", "dark blue green"], ["2b5d34", "pine"], ["bff128", "yellowy green"], ["b59410", "dark gold"], ["2976bb", "bluish"], ["014182", "darkish blue"], ["bb3f3f", "dull red"], ["fc2647", "pinky red"], ["a87900", "bronze"], ["82cbb2", "pale teal"], ["667c3e", "military green"], ["fe46a5", "barbie pink"], ["fe83cc", "bubblegum pink"], ["94a617", "pea soup green"], ["a88905", "dark mustard"], ["7f5f00", "shit"], ["9e43a2", "medium purple"], ["062e03", "very dark green"], ["8a6e45", "dirt"], ["cc7a8b", "dusky pink"], ["9e0168", "red violet"], ["fdff38", "lemon yellow"], ["c0fa8b", "pistachio"], ["eedc5b", "dull yellow"], ["7ebd01", "dark lime green"], ["3b5b92", "denim blue"], ["01889f", "teal blue"], ["3d7afd", "lightish blue"], ["5f34e7", "purpley blue"], ["6d5acf", "light indigo"], ["748500", "swamp green"], ["706c11", "brown green"], ["3c0008", "dark maroon"], ["cb00f5", "hot purple"], ["002d04", "dark forest green"], ["658cbb", "faded blue"], ["749551", "drab green"], ["b9ff66", "light lime green"], ["9dc100", "snot green"], ["faee66", "yellowish"], ["7efbb3", "light blue green"], ["7b002c", "bordeaux"], ["c292a1", "light mauve"], ["017b92", "ocean"], ["fcc006", "marigold"], ["657432", "muddy green"], ["d8863b", "dull orange"], ["738595", "steel"], ["aa23ff", "electric purple"], ["08ff08", "fluorescent green"], ["9b7a01", "yellowish brown"], ["f29e8e", "blush"], ["6fc276", "soft green"], ["ff5b00", "bright orange"], ["fdff52", "lemon"], ["866f85", "purple grey"], ["8ffe09", "acid green"], ["eecffe", "pale lavender"], ["510ac9", "violet blue"], ["4f9153", "light forest green"], ["9f2305", "burnt red"], ["728639", "khaki green"], ["de0c62", "cerise"], ["916e99", "faded purple"], ["ffb16d", "apricot"], ["3c4d03", "dark olive green"], ["7f7053", "grey brown"], ["77926f", "green grey"], ["010fcc", "true blue"], ["ceaefa", "pale violet"], ["8f99fb", "periwinkle blue"], ["c6fcff", "light sky blue"], ["5539cc", "blurple"], ["544e03", "green brown"], ["017a79", "bluegreen"], ["01f9c6", "bright teal"], ["c9b003", "brownish yellow"], ["929901", "pea soup"], ["0b5509", "forest"], ["a00498", "barney purple"], ["2000b1", "ultramarine"], ["94568c", "purplish"], ["c2be0e", "puke yellow"], ["748b97", "bluish grey"], ["665fd1", "dark periwinkle"], ["9c6da5", "dark lilac"], ["c44240", "reddish"], ["a24857", "light maroon"], ["825f87", "dusty purple"], ["c9643b", "terra cotta"], ["90b134", "avocado"], ["01386a", "marine blue"], ["25a36f", "teal green"], ["59656d", "slate grey"], ["75fd63", "lighter green"], ["21fc0d", "electric green"], ["5a86ad", "dusty blue"], ["fec615", "golden yellow"], ["fffd01", "bright yellow"], ["dfc5fe", "light lavender"], ["b26400", "umber"], ["7f5e00", "poop"], ["de7e5d", "dark peach"], ["048243", "jungle green"], ["ffffd4", "eggshell"], ["3b638c", "denim"], ["b79400", "yellow brown"], ["84597e", "dull purple"], ["411900", "chocolate brown"], ["7b0323", "wine red"], ["04d9ff", "neon blue"], ["667e2c", "dirty green"], ["fbeeac", "light tan"], ["d7fffe", "ice blue"], ["4e7496", "cadet blue"], ["874c62", "dark mauve"], ["d5ffff", "very light blue"], ["826d8c", "grey purple"], ["ffbacd", "pastel pink"], ["d1ffbd", "very light green"], ["448ee4", "dark sky blue"], ["05472a", "evergreen"], ["d5869d", "dull pink"], ["3d0734", "aubergine"], ["4a0100", "mahogany"], ["f8481c", "reddish orange"], ["02590f", "deep green"], ["89a203", "vomit green"], ["e03fd8", "purple pink"], ["d58a94", "dusty pink"], ["7bb274", "faded green"], ["526525", "camo green"], ["c94cbe", "pinky purple"], ["db4bda", "pink purple"], ["9e3623", "brownish red"], ["b5485d", "dark rose"], ["735c12", "mud"], ["9c6d57", "brownish"], ["028f1e", "emerald green"], ["b1916e", "pale brown"], ["49759c", "dull blue"], ["a0450e", "burnt umber"], ["39ad48", "medium green"], ["b66a50", "clay"], ["8cffdb", "light aqua"], ["a4be5c", "light olive green"], ["cb7723", "brownish orange"], ["05696b", "dark aqua"], ["ce5dae", "purplish pink"], ["c85a53", "dark salmon"], ["96ae8d", "greenish grey"], ["1fa774", "jade"], ["7a9703", "ugly green"], ["ac9362", "dark beige"], ["01a049", "emerald"], ["d9544d", "pale red"], ["fa5ff7", "light magenta"], ["82cafc", "sky"], ["acfffc", "light cyan"], ["fcb001", "yellow orange"], ["910951", "reddish purple"], ["fe2c54", "reddish pink"], ["c875c4", "orchid"], ["cdc50a", "dirty yellow"], ["fd411e", "orange red"], ["9a0200", "deep red"], ["be6400", "orange brown"], ["030aa7", "cobalt blue"], ["fe019a", "neon pink"], ["f7879a", "rose pink"], ["887191", "greyish purple"], ["b00149", "raspberry"], ["12e193", "aqua green"], ["fe7b7c", "salmon pink"], ["ff9408", "tangerine"], ["6a6e09", "brownish green"], ["8b2e16", "red brown"], ["696112", "greenish brown"], ["e17701", "pumpkin"], ["0a481e", "pine green"], ["343837", "charcoal"], ["ffb7ce", "baby pink"], ["6a79f7", "cornflower"], ["5d06e9", "blue violet"], ["3d1c02", "chocolate"], ["82a67d", "greyish green"], ["be0119", "scarlet"], ["c9ff27", "green yellow"], ["373e02", "dark olive"], ["a9561e", "sienna"], ["caa0ff", "pastel purple"], ["ca6641", "terracotta"], ["02d8e9", "aqua blue"], ["88b378", "sage green"], ["980002", "blood red"], ["cb0162", "deep pink"], ["5cac2d", "grass"], ["769958", "moss"], ["a2bffe", "pastel blue"], ["10a674", "bluish green"], ["06b48b", "green blue"], ["af884a", "dark tan"], ["0b8b87", "greenish blue"], ["ffa756", "pale orange"], ["a2a415", "vomit"], ["154406", "forrest green"], ["856798", "dark lavender"], ["34013f", "dark violet"], ["632de9", "purple blue"], ["0a888a", "dark cyan"], ["6f7632", "olive drab"], ["d46a7e", "pinkish"], ["1e488f", "cobalt"], ["bc13fe", "neon purple"], ["7ef4cc", "light turquoise"], ["76cd26", "apple green"], ["74a662", "dull green"], ["80013f", "wine"], ["b1d1fc", "powder blue"], ["ffffe4", "off white"], ["0652ff", "electric blue"], ["045c5a", "dark turquoise"], ["5729ce", "blue purple"], ["069af3", "azure"], ["ff000d", "bright red"], ["f10c45", "pinkish red"], ["5170d7", "cornflower blue"], ["acbf69", "light olive"], ["6c3461", "grape"], ["5e819d", "greyish blue"], ["601ef9", "purplish blue"], ["b0dd16", "yellowish green"], ["cdfd02", "greenish yellow"], ["2c6fbb", "medium blue"], ["c0737a", "dusty rose"], ["d6b4fc", "light violet"], ["020035", "midnight blue"], ["703be7", "bluish purple"], ["fd3c06", "red orange"], ["960056", "dark magenta"], ["40a368", "greenish"], ["03719c", "ocean blue"], ["fc5a50", "coral"], ["ffffc2", "cream"], ["7f2b0a", "reddish brown"], ["b04e0f", "burnt sienna"], ["a03623", "brick"], ["87ae73", "sage"], ["789b73", "grey green"], ["ffffff", "white"], ["98eff9", "robin's egg blue"], ["658b38", "moss green"], ["5a7d9a", "steel blue"], ["380835", "eggplant"], ["fffe7a", "light yellow"], ["5ca904", "leaf green"], ["d8dcd6", "light grey"], ["a5a502", "puke"], ["d648d7", "pinkish purple"], ["047495", "sea blue"], ["b790d4", "pale purple"], ["5b7c99", "slate blue"], ["607c8e", "blue grey"], ["0b4008", "hunter green"], ["ed0dd9", "fuchsia"], ["8c000f", "crimson"], ["ffff84", "pale yellow"], ["bf9005", "ochre"], ["d2bd0a", "mustard yellow"], ["ff474c", "light red"], ["0485d1", "cerulean"], ["ffcfdc", "pale pink"], ["040273", "deep blue"], ["a83c09", "rust"], ["90e4c1", "light teal"], ["516572", "slate"], ["fac205", "goldenrod"], ["d5b60a", "dark yellow"], ["363737", "dark grey"], ["4b5d16", "army green"], ["6b8ba4", "grey blue"], ["80f9ad", "seafoam"], ["a57e52", "puce"], ["a9f971", "spring green"], ["c65102", "dark orange"], ["e2ca76", "sand"], ["b0ff9d", "pastel green"], ["9ffeb0", "mint"], ["fdaa48", "light orange"], ["fe01b1", "bright pink"], ["c1f80a", "chartreuse"], ["36013f", "deep purple"], ["341c02", "dark brown"], ["b9a281", "taupe"], ["8eab12", "pea green"], ["9aae07", "puke green"], ["02ab2e", "kelly green"], ["7af9ab", "seafoam green"], ["137e6d", "blue green"], ["aaa662", "khaki"], ["610023", "burgundy"], ["014d4e", "dark teal"], ["8f1402", "brick red"], ["4b006e", "royal purple"], ["580f41", "plum"], ["8fff9f", "mint green"], ["dbb40c", "gold"], ["a2cffe", "baby blue"], ["c0fb2d", "yellow green"], ["be03fd", "bright purple"], ["840000", "dark red"], ["d0fefe", "pale blue"], ["3f9b0b", "grass green"], ["01153e", "navy"], ["04d8b2", "aquamarine"], ["c04e01", "burnt orange"], ["0cff0c", "neon green"], ["0165fc", "bright blue"], ["cf6275", "rose"], ["ffd1df", "light pink"], ["ceb301", "mustard"], ["380282", "indigo"], ["aaff32", "lime"], ["53fca1", "sea green"], ["8e82fe", "periwinkle"], ["cb416b", "dark pink"], ["677a04", "olive green"], ["ffb07c", "peach"], ["c7fdb5", "pale green"], ["ad8150", "light brown"], ["ff028d", "hot pink"], ["000000", "black"], ["cea2fd", "lilac"], ["001146", "navy blue"], ["0504aa", "royal blue"], ["e6daa6", "beige"], ["ff796c", "salmon"], ["6e750e", "olive"], ["650021", "maroon"], ["01ff07", "bright green"], ["35063e", "dark purple"], ["ae7181", "mauve"], ["06470c", "forest green"], ["13eac9", "aqua"], ["00ffff", "cyan"], ["d1b26f", "tan"], ["00035b", "dark blue"], ["c79fef", "lavender"], ["06c2ac", "turquoise"], ["033500", "dark green"], ["9a0eea", "violet"], ["bf77f6", "light purple"], ["89fe05", "lime green"], ["929591", "grey"], ["75bbfd", "sky blue"], ["ffff14", "yellow"], ["c20078", "magenta"], ["96f97b", "light green"], ["f97306", "orange"], ["029386", "teal"], ["95d0fc", "light blue"], ["e50000", "red"], ["653700", "brown"], ["ff81c0", "pink"], ["0343df", "blue"], ["15b01a", "green"], ["7e1e9c", "purple"], ["FF5E99", "paul irish pink"], ["87b84a", "peridot"], ["00000000", "transparent"]];
  lookup = {};
  normalizeKey = function(key) {
    return key.toString().toLowerCase().split(' ').join('');
  };
  names.each(function(element) {
    return lookup[normalizeKey(element[1])] = element[0].parseHex();
  });
  return Color.lookup = function(color) {
    return lookup[normalizeKey(color)];
  };
})();
;
/**
The Controllable module adds simple movement
when up, down, left, or right are held.

<code><pre>
  # create a player and include Controllable
  player = GameObject
    width: 5
    height: 17
    x: 15
    y: 30
    speed:  2

  player.include Controllable

  # hold the left arrow key, then
  # update the player
  player.update()

  # the player is moved left according to his speed
  player.I.x
  # => 13

  # We keep track of the direction the object is
  # facing in case you need that (eg. for attack direction)
  player.I.facing
  # => player.I.facing 
  # => Point(-1, 0)
</pre></code>

@name Controllable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Controllable;

Controllable = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    facing: Point(1, 0),
    speed: 1,
    velocity: Point(0, 0)
  });
  self.bind("update", function() {
    return self.movement();
  });
  return {
    movement: function() {
      I.velocity.x = 0;
      I.velocity.y = 0;
      if (keydown.left) I.velocity.x = -1;
      if (keydown.right) I.velocity.x = 1;
      if (keydown.up) I.velocity.y = -1;
      if (keydown.down) I.velocity.y = 1;
      I.velocity = I.velocity.norm();
      if (!I.velocity.equal(Point.ZERO)) I.facing = I.velocity;
      return I.velocity = I.velocity.scale(I.speed);
    }
  };
};
;
/**
The Cooldown module provides a declarative way to manage cooldowns on
GameObject's properties.

<code><pre>
# Health regeneration
player = GameObject
  health: 50

player.cooldown "health",
  target: 100

player.update(1)
</pre></code>

<code><pre>
# Shoot Timeout
player = GameObject()

player.cooldown "shootTimer"

player.I.shootTimer = 10 # => Pew! Pew!

player.update(1)

player.I.shootTimer # => 9
</pre></code>

@name Cooldown
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Cooldown;

Cooldown = function(I, self) {
  Object.reverseMerge(I, {
    cooldowns: {}
  });
  self.bind("update", function(dt) {
    var approachBy, cooldownOptions, name, target, _ref, _results;
    _ref = I.cooldowns;
    _results = [];
    for (name in _ref) {
      cooldownOptions = _ref[name];
      approachBy = cooldownOptions.approachBy, target = cooldownOptions.target;
      _results.push(I[name] = I[name].approach(target, approachBy * dt));
    }
    return _results;
  });
  return {
    cooldown: function(name, options) {
      var approachBy, target, value;
      if (options == null) options = {};
      target = options.target, approachBy = options.approachBy, value = options.value;
      target || (target = 0);
      if (approachBy == null) approachBy = 1;
      I.cooldowns[name] = {
        target: target,
        approachBy: approachBy
      };
      if (value != null) {
        return I[name] = options.value;
      } else {
        if (!I[name]) return I[name] = 0;
      }
    }
  };
};
;
/**
The Debuggable Module provides a simple API to easily display
an object's properties onscreen. This mixin comes with predefined
attribute filters so that you can exclude irrelevant data.

<code><pre>
player = GameObject
  x: 40
  y: 14
  spriteName: null
  numericErrorProperty: NaN

player.include Debuggable

# sets up debug output for all player's properties
# at the starting position (0, 0)
player.debug
  filter: 'all'
</pre></code>

Debuggable module
@name Debuggable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Debuggable;

Debuggable = function(I, self) {
  var COL_HEIGHT, FONT_SIZE, ROW_HEIGHT, debugBounds, debugVelocity, debugX, debugY, drawDebugLine, filterProperties, getPropertyRow, initialI, nan, processValue, sortedKeys;
  if (I == null) I = {};
  COL_HEIGHT = 175;
  ROW_HEIGHT = 9;
  FONT_SIZE = 9;
  debugX = 0;
  debugY = 0;
  Object.reverseMerge(I, {
    debug: {
      enabled: false,
      color: 'black',
      filter: 'all',
      bounds: true,
      velocity: true,
      position: {
        x: 0,
        y: 0
      }
    }
  });
  initialI = Object.extend({}, I);
  debugBounds = function(canvas) {
    return canvas.drawRect({
      color: 'rgba(255, 0, 255, 0.4)',
      bounds: self.bounds()
    });
  };
  debugVelocity = function(canvas) {
    if (I.velocity != null) {
      return canvas.withTransform(Matrix.translation(I.x, I.y), function(canvas) {
        var color, length, thickness;
        thickness = 4;
        length = 10;
        color = 'rgba(255, 0, 0, 0.5)';
        canvas.drawRect({
          x: 0,
          y: -thickness / 2,
          width: I.velocity.x * length,
          height: thickness,
          color: color
        });
        return canvas.drawRect({
          x: -thickness / 2,
          y: 0,
          width: thickness,
          height: I.velocity.y * length,
          color: color
        });
      });
    }
  };
  filterProperties = function(properties) {
    var key, results, value;
    results = {};
    switch (I.debug.filter) {
      case 'all':
        results = properties;
        break;
      case 'undefined':
        for (key in properties) {
          value = properties[key];
          if (!(value != null) || nan(value)) results[key] = value;
        }
        break;
      case 'changed':
        for (key in properties) {
          value = properties[key];
          if (initialI[key] !== value) results[key] = value;
        }
    }
    return results;
  };
  sortedKeys = function() {
    var key, keys, value, _ref;
    keys = [];
    _ref = filterProperties(I);
    for (key in _ref) {
      value = _ref[key];
      keys.push(key);
    }
    return keys.sort();
  };
  nan = function(value) {
    return typeof value === 'number' && isNaN(value);
  };
  drawDebugLine = function(text, canvas, x, y) {
    canvas.drawText({
      color: I.debug.color,
      x: x + I.debug.position.x,
      y: y + I.debug.position.y,
      text: text
    });
    return debugY += ROW_HEIGHT;
  };
  getPropertyRow = function(key, value, canvas) {
    var k, toStringArray, v;
    if (typeof value === 'function') {} else if (Object.isObject(value)) {
      drawDebugLine(key, canvas, debugX, debugY);
      debugX += 8;
      for (k in value) {
        v = value[k];
        getPropertyRow(k, v, canvas);
      }
      return debugX -= 8;
    } else if (Object.isArray(value)) {
      toStringArray = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = value.length; _i < _len; _i++) {
          v = value[_i];
          if (Object.isObject(v)) {
            _results.push(v.I["class"] || v.toString());
          } else {
            _results.push(v);
          }
        }
        return _results;
      })();
      return drawDebugLine("" + key + "(" + value.length + "): " + toStringArray, canvas, debugX, debugY);
    } else {
      value = processValue(value);
      return drawDebugLine("" + key + ": " + value, canvas, debugX, debugY);
    }
  };
  processValue = function(value) {
    var output, parsedNumber;
    output = value;
    try {
      parsedNumber = parseFloat(value);
    } catch (_error) {}
    if (parsedNumber) {
      if (typeof value !== 'string' && parsedNumber !== parseInt(value)) {
        output = value.toFixed(3);
      }
    }
    return output;
  };
  self.bind("update", function() {
    if (justPressed['0']) return self.toggleDebug();
  });
  self.bind("overlay", function(canvas) {
    var key, _i, _len, _ref;
    if (I.debug.enabled) {
      canvas.font("" + FONT_SIZE + "px Monaco");
      debugX = 0;
      debugY = ROW_HEIGHT;
      _ref = sortedKeys();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        getPropertyRow(key, I[key], canvas);
      }
      debugX += COL_HEIGHT;
      debugY = ROW_HEIGHT;
      if (I.debug.bounds) debugBounds(canvas);
      if (I.debug.velocity) return debugVelocity(canvas);
    }
  });
  return {
    /**
    Enable debugging display for the calling GameObject.
    
    <code><pre>
    player = GameObject
      x: 40
      y: 14
      spriteName: null
      numericErrorProperty: NaN
    
    player.include Debuggable
    
    # sets up debug output for all player's properties
    # at the starting position (0, 0)
    player.debug
      filter: 'all'
    
    player.I.y = 45
    
    # sets up debug output for only properties that have
    # changed since initialization. In this case only y
    # would be displayed.
    player.debug
      filter: 'changed'
    
    # sets up debug output for properties that are <code>undefined</code>, 
    # <code>null</code>, or <code>NaN</code>. In this case spriteName and
    # numericErrorProperty would be displayed.
    player.debug
      filter: 'undefined'
    
    # sets up debug output using all possible configuration options
    player.debug
      bounds: true # set this to false to disable visual debugging of the object's bounding box
      color: 'red' # color of debug text
      filter: 'all'
      x: 30 # x position to start printing debug information
      y: 50 # y position to start printing debug information
      velocity: true # set this to false to disable visual debugging of the object's velocity
    </pre></code>
    
    @name debug
    @methodOf Debuggable#
    @param {Object} Options to configure debug output
    @param {Boolean} bounds Whether or not to visually debug the object's bounds
    @param {Color|String} color The color of the debug text
    @param {String} filter Choices include 'all', 'changed', and 'undefined'
    @param {Number} x The x position to start drawing the debug information
    @param {Number} y The y position to start drawing the debug information
    @param {Boolean} velocity Whether or not to visually debug the object's velocity
    */
    debug: function(options) {
      var x, y;
      if (options == null) options = {};
      x = options.x, y = options.y;
      if (x != null) I.debug.position.x = x;
      if (y != null) I.debug.position.y = y;
      Object.extend(I.debug, options);
      return I.debug.enabled = true;
    },
    /**
    Toggle display of debug information.
    
    <code><pre>
    player = GameObject()
    
    player.include Debuggable
    
    # enables debug display
    player.debug()
    
    # disables debug display
    player.toggleDisable()
    
    # if false is passed to toggleDisplay, then debugging is disabled.  
    player.toggleDisplay(false)
    
    # if true is passed to toggleDisplay, then debugging is enabled.
    player.toggleDisplay(true)
    </pre></code>
    
    @name toggleDebug
    @methodOf Debuggable#
    @param {Boolean} newVal If true is passed then debugging is enabled, if false is passed then debugging is disabled, if nothing is passed, then debug state is toggled.
    */
    toggleDebug: function(newVal) {
      if (newVal != null) {
        return I.debug.enabled = newVal;
      } else {
        return I.debug.enabled = !I.debug.enabled;
      }
    }
  };
};
;
/**
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

<code><pre>
player = Core
  x: 15
  y: 30
  width: 5
  height: 5
  sprite: "my_cool_sprite"

engine.bind 'draw', (canvas) ->
  player.draw(canvas) 
# => Uncaught TypeError: Object has no method 'draw'

player.include(Drawable)

engine.bind 'draw', (canvas) ->
  player.draw(canvas)
# => if you have a sprite named "my_cool_sprite" in your images folder
# then it will be drawn. Otherwise, a rectangle positioned at x: 15 and
# y: 30 with width and height 5 will be drawn.
</pre></code>

@name Drawable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
/**
Triggered every time the object should be drawn. A canvas is passed as
the first argument. 

<code><pre>
player = Core
  x: 0
  y: 10
  width: 5
  height: 5

player.bind "draw", (canvas) ->
  # Text will be drawn positioned relatively to the object.
  canvas.drawText
    text: "Hey, drawing stuff is pretty easy."
    color: "white"
    x: 5
    y: 5
</pre></code>

@name draw
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
*/
/**
Triggered before the object should be drawn. A canvas is passed as
the first argument. This does not apply the current transform.

@name beforeTransform
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
*/
/**
Triggered after the object should be drawn. A canvas is passed as
the first argument. This applies the current transform.

@name afterTransform
@methodOf Drawable#
@event
@param {PowerCanvas} canvas A reference to the canvas to draw on.
*/
var Drawable;

Drawable = function(I, self) {
  var setSizeCallback, _ref;
  I || (I = {});
  Object.reverseMerge(I, {
    alpha: 1,
    color: "#196",
    hflip: false,
    vflip: false,
    spriteName: null,
    zIndex: 0
  });
  setSizeCallback = function(sprite) {
    I.width = sprite.width;
    return I.height = sprite.height;
  };
  if ((_ref = I.sprite) != null ? typeof _ref.isString === "function" ? _ref.isString() : void 0 : void 0) {
    if (I.sprite.indexOf("data:") === 0) {
      I.sprite = Sprite.fromURL(I.sprite, setSizeCallback);
    } else {
      I.sprite = Sprite.loadByName(I.sprite, setSizeCallback);
    }
  } else if (I.spriteName) {
    I.sprite = Sprite.loadByName(I.spriteName, setSizeCallback);
  }
  self.bind('draw', function(canvas) {
    var previousAlpha, sprite;
    if ((I.alpha != null) && I.alpha !== 1) {
      previousAlpha = canvas.context().globalAlpha;
      canvas.context().globalAlpha = I.alpha;
    }
    if (sprite = I.sprite) {
      if (sprite.draw != null) {
        sprite.draw(canvas, -sprite.width / 2, -sprite.height / 2);
      } else {
        if (typeof warn === "function") warn("Sprite has no draw method!");
      }
    } else {
      if (I.radius != null) {
        canvas.drawCircle({
          x: 0,
          y: 0,
          radius: I.radius,
          color: I.color
        });
      } else {
        canvas.drawRect({
          x: -I.width / 2,
          y: -I.height / 2,
          width: I.width,
          height: I.height,
          color: I.color
        });
      }
    }
    if ((I.alpha != null) && I.alpha !== 1) {
      return canvas.context().globalAlpha = previousAlpha;
    }
  });
  return {
    /**
    Draw does not actually do any drawing itself, instead it triggers all of the draw events.
    Listeners on the events do the actual drawing.
    
    @name draw
    @methodOf Drawable#
    @returns self
    */
    draw: function(canvas) {
      self.trigger('beforeTransform', canvas);
      canvas.withTransform(self.transform(), function(canvas) {
        self.trigger('beforeDraw', canvas);
        self.trigger('draw', canvas);
        return self.trigger('afterDraw', canvas);
      });
      self.trigger('afterTransform', canvas);
      return self;
    },
    /**
    Returns the current transform, with translation, rotation, and flipping applied.
    
    @name transform
    @methodOf Drawable#
    @returns {Matrix} The current transform
    */
    transform: function() {
      var center, transform;
      center = self.center();
      transform = Matrix.translation(center.x.floor(), center.y.floor());
      if ((I.scale != null) && I.scale !== 1) {
        transform = transform.concat(Matrix.scale(I.scale));
      }
      if (I.rotation) transform = transform.concat(Matrix.rotation(I.rotation));
      if (I.hflip) transform = transform.concat(Matrix.HORIZONTAL_FLIP);
      if (I.vflip) transform = transform.concat(Matrix.VERTICAL_FLIP);
      if (I.spriteOffset) {
        transform = transform.concat(Matrix.translation(I.spriteOffset.x, I.spriteOffset.y));
      }
      return transform;
    }
  };
};

Drawable.setSizeCallback = function(sprite) {};
;

(function() {
  var Easing, polynomialEasings;
  Easing = {
    sinusoidal: function(begin, end) {
      var change;
      change = end - begin;
      return function(t) {
        return begin + change * (1 - Math.cos(t * Math.TAU / 4));
      };
    },
    sinusoidalOut: function(begin, end) {
      var change;
      change = end - begin;
      return function(t) {
        return begin + change * (0 + Math.sin(t * Math.TAU / 4));
      };
    }
  };
  polynomialEasings = ["linear", "quadratic", "cubic", "quartic", "quintic"];
  polynomialEasings.each(function(easing, i) {
    var exponent, sign;
    exponent = i + 1;
    sign = exponent % 2 ? 1 : -1;
    Easing[easing] = function(begin, end) {
      var change;
      change = end - begin;
      return function(t) {
        return begin + change * Math.pow(t, exponent);
      };
    };
    return Easing["" + easing + "Out"] = function(begin, end) {
      var change;
      change = end - begin;
      return function(t) {
        return begin + change * (1 + sign * Math.pow(t - 1, exponent));
      };
    };
  });
  ["sinusoidal"].concat(polynomialEasings).each(function(easing) {
    return Easing["" + easing + "InOut"] = function(begin, end) {
      var easeIn, easeOut, midpoint;
      midpoint = (begin + end) / 2;
      easeIn = Easing[easing](begin, midpoint);
      easeOut = Easing["" + easing + "Out"](midpoint, end);
      return function(t) {
        if (t < 0.5) {
          return easeIn(2 * t);
        } else {
          return easeOut(2 * t - 1);
        }
      };
    };
  });
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Easing"] = Easing;
})();
;
var Emitter;

Emitter = function(I) {
  var self;
  if (I == null) I = {};
  self = GameObject(I);
  self.include(Emitterable);
  return self;
};
;
var Emitterable;

Emitterable = function(I, self) {
  var n;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    batchSize: 1,
    emissionRate: 1,
    width: 0,
    height: 0,
    sprite: Sprite.EMPTY,
    generator: {},
    particles: [],
    particleCount: Infinity,
    x: I.x,
    y: I.y,
    particleData: {
      acceleration: Point(0, 0.1),
      age: 0,
      color: "blue",
      duration: 1.5,
      includedModules: ["Movable"],
      height: 2,
      maxSpeed: 120,
      offset: Point(0, 0),
      sprite: false,
      spriteName: false,
      velocity: Point(-0.25, 1),
      width: 2,
      x: 0,
      y: 0
    }
  });
  n = 0;
  self.bind('draw', function(canvas) {
    return I.particles.invoke("draw", canvas);
  });
  self.bind('overlay', function(canvas) {
    return I.particles.invoke("trigger", "overlay", canvas);
  });
  self.bind('beforeUpdate', function(dt) {
    return I.particles.invoke("trigger", "beforeUpdate", dt);
  });
  self.bind('afterUpdate', function(dt) {
    return I.particles.invoke("trigger", "afterUpdate", dt);
  });
  self.bind('update', function(dt) {
    I.batchSize.times(function() {
      var key, particleProperties, value, _ref;
      if (n < I.particleCount && rand() < I.emissionRate) {
        particleProperties = Object.extend({}, I.particleData);
        _ref = I.generator;
        for (key in _ref) {
          value = _ref[key];
          if (I.generator[key].call) {
            particleProperties[key] = I.generator[key](n, I);
          } else {
            particleProperties[key] = I.generator[key];
          }
        }
        particleProperties.x += particleProperties.offset.x;
        particleProperties.y += particleProperties.offset.y;
        I.particles.push(GameObject(particleProperties));
        return n += 1;
      }
    });
    I.particles = I.particles.select(function(particle) {
      return particle.update(dt);
    });
    if (n === I.particleCount && !I.particles.length) return I.active = false;
  });
  return {};
};
;

(function() {
  var Engine, defaults;
  defaults = {
    FPS: 30,
    age: 0,
    excludedModules: [],
    includedModules: [],
    paused: false,
    showFPS: false,
    zSort: false
  };
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
  @param {Object} I Instance variables of the engine
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
  @param {Number} elapsedTime The time in seconds that has elapsed since the last update.
  */
  /**
  Called after the engine completes an update. Here it is 
  safe to modify the game objects array.
  
  @name afterUpdate
  @methodOf Engine#
  @event
  */
  /**
  Called before the engine draws the game objects on the canvas. The current camera transform is applied.
  
  @name beforeDraw
  @methodOf Engine#
  @event
  @params {PixieCanvas} canvas A reference to the canvas to draw on.
  */
  /**
  Called after the engine draws on the canvas. The current camera transform is applied.
  
  <code><pre>
  engine.bind "draw", (canvas) ->
    # print some directions for the player
    canvas.drawText
      text: "Go this way =>"
      x: 200
      y: 200 
  </pre></code>
  
  @name draw
  @methodOf Engine#
  @event
  @params {PixieCanvas} canvas A reference to the canvas to draw on.
  */
  /**
  Called after the engine draws.
  
  The current camera transform is not applied. This is great for
  adding overlays.
  
  <code><pre>
  engine.bind "overlay", (canvas) ->
    # print the player's health. This will be
    # positioned absolutely according to the viewport.
    canvas.drawText
      text: "HEALTH:"
      position: Point(20, 20)
  
    canvas.drawText
      text: player.health()
      position: Point(50, 20)
  </pre></code>
  
  @name overlay
  @methodOf Engine#
  @event
  @params {PixieCanvas} canvas A reference to the canvas to draw on.
  */
  Engine = function(I) {
    var animLoop, draw, frameAdvance, lastStepTime, modules, running, self, startTime, step, update;
    if (I == null) I = {};
    Object.reverseMerge(I, defaults);
    frameAdvance = false;
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
      if (running) return window.requestAnimationFrame(animLoop);
    };
    update = function(elapsedTime) {
      self.trigger("beforeUpdate", elapsedTime);
      self.trigger("update", elapsedTime);
      return self.trigger("afterUpdate", elapsedTime);
    };
    draw = function() {
      var canvas;
      if (!(canvas = I.canvas)) return;
      self.trigger("beforeDraw", canvas);
      self.trigger("draw", canvas);
      return self.trigger("overlay", I.canvas);
    };
    step = function() {
      var secondsPerFrame;
      if (!I.paused || frameAdvance) {
        secondsPerFrame = 1 / I.FPS;
        update(secondsPerFrame);
        I.age += 1;
      }
      return draw();
    };
    self = Core(I).extend({
      /**
      Start the game simulation.
      
      <code><pre>
      engine.start()
      </pre></code>
      
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
      
      <code><pre>
      engine.stop()
      </pre></code>
      
      @methodOf Engine#
      @name stop
      */
      stop: function() {
        return running = false;
      },
      /**
      Pause the game and step through 1 update of the engine.
      
      <code><pre>
      engine.frameAdvance()
      </pre></code>
      
      @methodOf Engine#
      @name frameAdvance
      */
      frameAdvance: function() {
        I.paused = true;
        frameAdvance = true;
        step();
        return frameAdvance = false;
      },
      /**
      Resume the game.
      
      <code><pre>
      engine.play()
      </pre></code>
      
      @methodOf Engine#
      @name play
      */
      play: function() {
        return I.paused = false;
      },
      /**
      Toggle the paused state of the simulation.
      
      <code><pre>
      engine.pause()
      </pre></code>
      
      @methodOf Engine#
      @name pause
      @param {Boolean} [setTo] Force to pause by passing true or unpause by passing false.
      */
      pause: function(setTo) {
        if (setTo != null) {
          return I.paused = setTo;
        } else {
          return I.paused = !I.paused;
        }
      },
      /**
      Query the engine to see if it is paused.
      
      <code><pre>
      engine.pause()
      
      engine.paused()
      # true
      
      engine.play()
      
      engine.paused()
      # false
      </pre></code>
      
      @methodOf Engine#
      @name paused
      */
      paused: function() {
        return I.paused;
      },
      /**
      Change the framerate of the game. The default framerate is 30 fps.
      
      <code><pre>
      engine.setFramerate(60)
      </pre></code>
      
      @methodOf Engine#
      @name setFramerate
      */
      setFramerate: function(newFPS) {
        I.FPS = newFPS;
        self.stop();
        return self.start();
      },
      update: update,
      draw: draw
    });
    self.include(Bindable);
    modules = Engine.defaultModules.concat(I.includedModules);
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
  Engine.defaultModules = ["Data", "Keyboard", "Mouse", "Background", "Delay", "GameState", "Selector", "Collision", "Tilemap", "Levels"];
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Engine"] = Engine;
})();
;
/**
This module clears or fills the canvas before drawing the scene.

@name Clear
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Background = function(I, self) {
  Object.reverseMerge(I, {
    background: null,
    backgroundColor: "#00010D",
    clear: false
  });
  self.attrAccessor("clear", "backgroundColor");
  self.bind("init", function() {
    var _ref;
    if ((_ref = I.background) != null ? typeof _ref.isString === "function" ? _ref.isString() : void 0 : void 0) {
      return I.background = Sprite.loadByName(I.background);
    }
  });
  self.bind("beforeDraw", function() {
    if (I.clear) {
      return I.canvas.clear();
    } else if (I.background) {
      return I.background.fill(I.canvas, 0, 0, App.width, App.height);
    } else if (I.backgroundColor) {
      return I.canvas.fill(I.backgroundColor);
    }
  });
  return {};
};
;
/**
The <code>Collision</code> module provides some simple collision detection methods to engine.

@name Collision
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Collision = function(I, self) {
  return {
    /**
    Detects collisions between a bounds and the game objects.
    
    @name collides
    @methodOf Engine#
    @param bounds The bounds to check collisions with.
    @param [sourceObject] An object to exclude from the results.
    @returns {Boolean} true if the bounds object collides with any of the game objects, false otherwise.
    */
    collides: function(bounds, sourceObject) {
      return self.objects().inject(false, function(collided, object) {
        return collided || (object.solid() && (object !== sourceObject) && object.collides(bounds));
      });
    },
    /**
    Detects collisions between a bounds and the game objects. 
    Returns an array of objects colliding with the bounds provided.
    
    @name collidesWith
    @methodOf Engine#
    @param bounds The bounds to check collisions with.
    @param [sourceObject] An object to exclude from the results.
    @returns {Array} An array of objects that collide with the given bounds.
    */
    collidesWith: function(bounds, sourceObject) {
      var collided;
      collided = [];
      self.objects().each(function(object) {
        if (!object.solid()) return;
        if (object !== sourceObject && object.collides(bounds)) {
          return collided.push(object);
        }
      });
      if (collided.length) return collided;
    },
    /**
    Detects collisions between a ray and the game objects.
    
    @name rayCollides
    @methodOf Engine#
    @param source The origin point
    @param direction A point representing the direction of the ray
    @param [sourceObject] An object to exclude from the results.
    */
    rayCollides: function(source, direction, sourceObject) {
      var hits, nearestDistance, nearestHit;
      hits = self.objects().map(function(object) {
        var hit;
        hit = object.solid() && (object !== sourceObject) && Collision.rayRectangle(source, direction, object.centeredBounds());
        if (hit) hit.object = object;
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
};
;
/**
The <code>Data</code> module provides methods to store global and persistent data in the engine.

    engine.data.score = 0
    engine.data.score += 10
    
    engine.data.score # => 10

@name Data
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Data = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    data: {}
  });
  Object.defineProperty(self, 'data', {
    get: function() {
      return I.data;
    }
  });
  return {};
};
;
/**
The <code>Delay</code> module provides methods to trigger events after a number of steps have passed.

@name Delay
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Delay = function(I, self) {
  var delayedEvents;
  delayedEvents = [];
  self.bind('afterUpdate', function() {
    var firingEvents, _ref;
    _ref = delayedEvents.partition(function(event) {
      return (event.delay -= 1) >= 0;
    }), delayedEvents = _ref[0], firingEvents = _ref[1];
    firingEvents.each(function(event) {
      return event.callback();
    });
  });
  return {
    /**
    Execute a callback after a number of steps have passed.
    
    <code><pre>
    engine.delay 5, ->
      engine.add
        class: "Ghost"
    </pre></code>
    
    @name delay
    @methodOf Engine#
    @param {Number} steps The number of steps to wait before executing the callback
    @param {Function} callback The callback to be executed.
    
    @returns {Engine} self
    */
    delay: function(steps, callback) {
      delayedEvents.push({
        delay: steps,
        callback: callback
      });
      return self;
    }
  };
};
;
/**
The <code>FPSCounter</code> module tracks and displays the framerate.

<code><pre>
window.engine = Engine
  ...
  includedModules: ["FPSCounter"]
  FPSColor: "#080"
</pre></code>

@name FPSCounter
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.FPSCounter = function(I, self) {
  var framerate;
  Object.reverseMerge(I, {
    showFPS: true,
    FPSColor: "#FFF"
  });
  framerate = Framerate();
  return self.bind("overlay", function(canvas) {
    if (I.showFPS) {
      canvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace");
      canvas.drawText({
        color: I.FPSColor,
        position: Point(6, 18),
        text: "fps: " + framerate.fps
      });
    }
    return framerate.rendered();
  });
};
;

Engine.GameState = function(I, self) {
  var requestedState;
  Object.reverseMerge(I, {
    currentState: GameState()
  });
  requestedState = null;
  self.bind("update", function(elapsedTime) {
    I.currentState.trigger("beforeUpdate", elapsedTime);
    I.currentState.trigger("update", elapsedTime);
    return I.currentState.trigger("afterUpdate", elapsedTime);
  });
  self.bind("afterUpdate", function() {
    var previousState;
    if (requestedState != null) {
      I.currentState.trigger("exit", requestedState);
      self.trigger('stateExited', I.currentState);
      previousState = I.currentState;
      I.currentState = requestedState;
      I.currentState.trigger("enter", previousState);
      self.trigger('stateEntered', I.currentState);
      return requestedState = null;
    }
  });
  self.bind("draw", function(canvas) {
    I.currentState.trigger("beforeDraw", canvas);
    I.currentState.trigger("draw", canvas);
    return I.currentState.trigger("overlay", canvas);
  });
  return {
    add: function(entityData) {
      var object;
      self.trigger("beforeAdd", entityData);
      object = I.currentState.add(entityData);
      self.trigger("afterAdd", object);
      return object;
    },
    camera: function(n) {
      if (n == null) n = 0;
      return self.cameras()[n];
    },
    cameras: function(newCameras) {
      if (newCameras != null) {
        I.currentState.cameras(newCameras);
        return self;
      } else {
        return I.currentState.cameras();
      }
    },
    fadeIn: function(options) {
      if (options == null) options = {};
      return self.cameras().invoke('fadeIn', options);
    },
    fadeOut: function(options) {
      if (options == null) options = {};
      return self.cameras().invoke('fadeOut', options);
    },
    flash: function(options) {
      if (options == null) options = {};
      return self.camera(options.camera).flash(options);
    },
    objects: function() {
      return I.currentState.objects();
    },
    setState: function(newState) {
      return requestedState = newState;
    },
    shake: function(options) {
      if (options == null) options = {};
      return self.camera(options.camera).shake(options);
    },
    saveState: function() {
      return I.currentState.saveState();
    },
    loadState: function(newState) {
      return I.currentState.loadState(newState);
    },
    reload: function() {
      return I.currentState.reload();
    }
  };
};
;
/**
The <code>Joysticks</code> module gives the engine access to joysticks.

<code><pre>
# First you need to add the joysticks module to the engine
window.engine = Engine
  ...
  includedModules: ["Joysticks"]
# Then you need to get a controller reference
# id = 0 for player 1, etc.
controller = engine.controller(id)

# Point indicating direction primary axis is held
direction = controller.position()

# Check if buttons are held
controller.actionDown("A")
controller.actionDown("B")
controller.actionDown("X")
controller.actionDown("Y")
</pre></code>

@name Joysticks
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Joysticks = function(I, self) {
  Joysticks.init();
  self.bind("update", function() {
    Joysticks.init();
    return Joysticks.update();
  });
  return {
    /**
    Get a controller for a given joystick id.
    
    @name controller
    @methodOf Engine.Joysticks#
    
    @param {Number} i The joystick id to get the controller of.
    */
    controller: function(i) {
      return Joysticks.getController(i);
    }
  };
};
;
/**
This module sets up the keyboard inputs for each engine update.

@name Keyboard
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Keyboard = function(I, self) {
  self.bind("beforeUpdate", function() {
    return typeof updateKeys === "function" ? updateKeys() : void 0;
  });
  return {};
};
;
/**
This module provides methods for transitioning between levels.

@name Levels
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Levels = function(I, self) {
  var loadLevel;
  Object.reverseMerge(I, {
    levels: [],
    currentLevel: -1,
    currentLevelName: null
  });
  I.transitioning = false;
  loadLevel = function(level) {
    var levelState;
    if (!I.transitioning) {
      I.transitioning = true;
      levelState = LevelState({
        level: level
      });
      I.currentLevelName = level;
      return engine.setState(levelState);
    }
  };
  return {
    /**
    Load map for the next level.
    
    <code><pre>
    engine.nextLevel()
    </pre></code>
    
    @name nextLevel
    @methodOf Engine#
    */
    nextLevel: function() {
      var level;
      if (!I.transitioning) {
        I.currentLevel += 1;
        if (level = I.levels[I.currentLevel]) {
          return loadLevel(level);
        } else {
          return engine.setState(GameOver());
        }
      }
    },
    /**
    Load map named <code>level</code>
    
    <code><pre>
    engine.goToLevel 'bossFight'
    </pre></code>
    
    @name goToLevel
    @methodOf Engine#
    */
    goToLevel: function(level) {
      return loadLevel(level);
    },
    /**
    Reload the current level. Useful for retrying after a player dies.
    
    <code><pre>
    engine.reloadLevel()
    </pre></code>
    
    @name reloadLevel
    @methodOf Engine#
    */
    reloadLevel: function() {
      return loadLevel(I.currentLevelName);
    }
  };
};
;
/**
This module sets up the mouse inputs for each engine update.

@name Mouse
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Mouse = function(I, self) {
  self.bind("beforeUpdate", function() {
    return typeof updateMouse === "function" ? updateMouse() : void 0;
  });
  return {};
};
;
/**
The <code>Selector</code> module provides methods to query the engine to find game objects.

@name Selector
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Selector = function(I, self) {
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
    Get the game object matching the given selector that is closest to the given position.
    
    <code><pre>
    player = engine.add
      x: 0
      y: 0
    
    enemy1 = engine.add
      enemy: true
      x: 10
      y: 0
    
    enemy2 = engine.add
      enemy: true
      x: 0
      y: 15
    
    player2 = engine.add
      x: 0
      y: 10
    
    equals engine.closest(".enemy", player.position()), enemy1
    equals engine.closest(".enemy", player2.position()), enemy2
    </pre></code>
    
    @param {String} selector
    @param {Point} position
    */
    closest: function(selector, position) {
      return self.find(selector).sort(function(a, b) {
        return Point.distanceSquared(position, a.position()) - Point.distanceSquared(position, b.position());
      }).first();
    },
    /**
    Get a selection of GameObjects that match the specified selector criteria. The selector language
    can select objects by id, class, or attributes. Note that this method always returns an Array,
    so if you are trying to find only one object you will need something like <code>engine.find("Enemy").first()</code>.
    
    <code><pre>
    player = engine.add
      class: "Player"
    
    enemy = engine.add
      class: "Enemy"
      speed: 5
      x: 0
    
    distantEnemy = engine.add
      class "Enemy"
      x: 500
    
    boss = engine.add
      class: "Enemy"
      id: "Boss"
      x: 0
    
    # to select an object by id use "#anId"
    engine.find "#Boss"
    # => [boss]
    
    # to select an object by class use "MyClass"
    engine.find "Enemy"
    # => [enemy, distantEnemy, boss]
    
    # to select an object by properties use ".someProperty" or ".someProperty=someValue"
    engine.find ".speed=5"
    # => [enemy]
    
    # You may mix and match selectors.
    engine.find "Enemy.x=0"
    # => [enemy, boss] # doesn't return distantEnemy
    </pre></code>
    
    @name find
    @methodOf Engine#
    @param {String} selector
    @returns {Array} An array of the objects found
    */
    each: function(selector, fn) {
      return self.find(selector).each(function(obj, index) {
        return fn(obj, index);
      });
    },
    find: function(selector) {
      var matcher, results;
      results = [];
      matcher = Engine.Selector.generate(selector);
      self.objects().each(function(object) {
        if (matcher.match(object)) return results.push(object);
      });
      return Object.extend(results, instanceMethods);
    },
    first: function(selector) {
      return self.find(selector).first();
    }
  };
};

Object.extend(Engine.Selector, {
  parse: function(selector) {
    return selector.split(",").invoke("trim");
  },
  process: function(item) {
    var result;
    result = /^(\w+)?#?([\w\-]+)?\.?([\w\-]+)?=?([\w\-]+)?/.exec(item);
    if (result) {
      if (result[4]) result[4] = result[4].parse();
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
          if (idMatch && typeMatch && attrMatch) return true;
        }
        return false;
      }
    };
  }
});
;
/**
The <code>Stats</code> module provides methods to query the engine to find game objects.

@name Stats
@fieldOf Engine
@module
@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Stats = function(I, self) {
  return {
    measure: function(objects, field, frequency) {
      if (frequency == null) frequency = 30;
    },
    gatherData: function() {
      return self.find();
    }
  };
};
;
/**
The <code>Tilemap</code> module provides a way to load tilemaps in the engine.

@name Tilemap
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Tilemap = function(I, self) {
  var clearObjects, updating;
  Object.extend(I, {
    map: null
  });
  updating = false;
  clearObjects = false;
  self.bind("update", function() {
    return updating = true;
  });
  self.bind("afterUpdate", function() {
    updating = false;
    if (clearObjects) {
      self.objects().clear();
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
      return I.map = Tilemap.load({
        name: name,
        complete: complete,
        entity: self.add
      });
    }
  };
};
;
/**
The Expirable module deactivates a <code>GameObject</code> after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

This module is included by default in <code>GameObjects</code>

<code><pre>
enemy = GameObject
  x: 50
  y: 30
  duration: 5

enemy.include Expirable

enemy.I.active
# => true

5.times ->
  enemy.update(1)

enemy.I.active
# => false
</pre></code>

@name Expirable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Expirable;

Expirable = function(I, self) {
  var startingAlpha;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    duration: -1,
    alpha: 1,
    fadeOut: false
  });
  startingAlpha = I.alpha;
  self.bind("update", function(dt) {
    if (I.fadeOut) I.alpha = startingAlpha * (1 - (I.age / I.duration));
    if (I.duration !== -1 && I.age >= I.duration) I.active = false;
    return I.alpha = I.alpha.clamp(0, 1);
  });
  return {};
};
;
/**
The <code>Fadeable</code> module provides a method to fade a sprite to transparent. 
You may also provide a callback function that is executed when the sprite has finished fading out.

@name Fadeable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Fadeable;

Fadeable = function(I, self) {
  Object.reverseMerge(I, {
    fadeDuration: 30,
    fadeCooldown: null,
    fadeCallback: null
  });
  self.bind("update", function() {
    if (I.fadeCooldown != null) {
      I.fadeCooldown = I.fadeCooldown.approach(0, 1);
      I.alpha = I.fadeCooldown / I.fadeDuration;
    }
    if (I.fadeCooldown === 0) {
      I.fadeCooldown = null;
      return typeof I.fadeCallback === "function" ? I.fadeCallback(self) : void 0;
    }
  });
  return {
    /**
    A convenient way to set the fade instance variables on a sprite. You can modify the
    instance variables by hand but the suggested way to do it is through this method.
    
    <code><pre>
    player = GameObject()
    
    player.include(Fadeable)
    
    fadedOut = false
    
    # this will fade the player object out over the next 30 frames. 
    # once the player is faded out the fadedOut variable will be set to true.
    player.fadeOut 30, (player) ->
      fadedOut = true
    
    30.times ->
      player.update()
    
    fadedOut
    # => true
    </pre></code>
    
    @name fadeOut
    @methodOf Fadeable#
    @param {Number} [duration=30] How long the effect lasts
    @param {Function} [callback=null] The function to execute when the sprite has finished fading.
    */
    fadeOut: function(duration, callback) {
      if (duration == null) duration = 30;
      I.fadeDuration = duration;
      I.fadeCooldown = duration;
      return I.fadeCallback = callback;
    }
  };
};
;
/**
The <code>Flickerable</code> module provides a method to flicker a sprite between solid and 50% opacity. 

@name Flickerable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Flickerable;

Flickerable = function(I, self) {
  var originalAlpha;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    flickerAlpha: 0.5,
    flickerDuration: 30,
    flickerFrequency: 3
  });
  originalAlpha = I.alpha;
  self.bind('update', function() {
    I.flickerDuration = I.flickerDuration.approach(0, 1);
    if (I.flickerDuration > 0) {
      if (I.age.mod(I.flickerFrequency) === 0) {
        if (I.alpha === I.flickerAlpha) {
          return I.alpha = originalAlpha;
        } else {
          return I.alpha = I.flickerAlpha;
        }
      }
    } else {
      return I.alpha = originalAlpha;
    }
  });
  return {
    /**
    A convenient way to set the flicker instance variables on a sprite. You can modify the
    instance variables by hand but the suggested way to do it is through this method.
    
    <code><pre>
    player = GameObject()
    
    player.include(Flickerable)
    
    player.flicker()
    # => This causes the sprite to flicker between full opacity 
    # => and 50% opacity every 3 frames for 30 frames
    
    player.flicker(90, 5, 0.3)
    # => This causes the sprite to flicker between full opacity
    # => and 30% opacity every 5 frames for 90 frames
    </pre></code>
    
    @name flicker
    @methodOf Flickerable#
    @param {Number} [duration=30] How long the effect lasts
    @param {Number} [frequency=3] The number of frames in between opacity changes
    @param {Number} [alpha=0.5] The alpha value to flicker to
    */
    flicker: function(_arg) {
      var alpha, duration, frequency, _ref;
      _ref = _arg != null ? _arg : {}, duration = _ref.duration, frequency = _ref.frequency, alpha = _ref.alpha;
      if (duration != null) I.flickerDuration = duration;
      if (frequency != null) I.flickerFrequency = frequency;
      if (alpha != null) return I.flickerAlpha = alpha;
    }
  };
};
;
/**
The Follow module provides a simple method to set an object's
direction so that it is pointed at another object.

The calculated direction is based on the center point of 
each object.

This method relies on both objects having <code>position</code> methods. 

Include this module by calling <code>self.include Follow</code>

<code><pre>
player = GameObject
  x: 50
  y: 50
  width: 10
  height: 10

enemy = GameObject
  x: 100
  y: 50
  width: 10
  height: 10
  velocity: Point(0, 0)
  speed: 2

enemy.include Follow

# Make an enemy follow the player
enemy.follow(player)

# now the enemy's direction will point toward the player
enemy.I.direction
# => Point(-1, 0)

# you can use this direction to set a velocity for your object.
enemy.I.velocity = enemy.I.direction.scale(I.speed)

</pre></code>

@name Follow
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Follow;

Follow = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    velocity: Point(0, 0),
    speed: 1
  });
  return {
    /**
    Set your velocity to follow another object.
    
    <code><pre>
    enemy.follow(player)
    
    # => The enemy now has it's velocity attribute set in
    # the direction of the player, with magnitude equal to
    # the enemy's speed
    </pre></code>
    
    @name follow
    @methodOf Follow#
    @param {GameObject} obj The object you want to follow
    */
    follow: function(obj) {
      if (obj) {
        return I.velocity = obj.position().subtract(self.position()).norm(I.speed);
      }
    }
  };
};
;
/**
This object keeps track of framerate and displays it by creating and appending an
html element to the DOM.

Once created you call snapshot at the end of every rendering cycle.

@name Framerate
@constructor
*/
var Framerate;

Framerate = function(options) {
  var framerateUpdateInterval, framerates, numFramerates, renderTime, self, updateFramerate;
  if (options == null) options = {};
  numFramerates = 15;
  framerateUpdateInterval = 250;
  renderTime = -1;
  framerates = [];
  updateFramerate = function() {
    return self.fps = framerates.average().round();
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
};
;
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

<code><pre>
enemyCount = 0

enemy = engine.add
  class: "Enemy"

enemy.bind 'create', ->
  enemyCount++
</pre></code>

@name create
@methodOf GameObject#
@event
*/
/**
Triggered when object is destroyed. Use 
the destroy event to add particle effects, play sounds, etc.

<code><pre>
bomb = GameObject()

bomb.bind 'destroy', ->
  bomb.explode()
  Sound.play "Kaboom"
</pre></code>

@name destroy
@methodOf GameObject#
@event
*/
/**
Triggered during every update step.

<code><pre>
player = GameObject()

player.bind 'step', ->
  # check to see if keys are being pressed and 
  # change the player's velocity
  if keydown.left
    player.velocity(Point(-1, 0))
  else if keydown.right
    player.velocity(Point(1, 0))
  else
    player.velocity(Point(0, 0))
</pre></code>

@name step
@methodOf GameObject#
@event
*/
/**
Triggered every update after the <code>step</code> event is triggered.

<code><pre>
player = GameObject()

# we can really use the update and 
# step events almost interchangebly
player.bind 'update', ->
  # check to see if keys are being pressed and 
  # change the player's velocity
  if keydown.left
    player.velocity(Point(-1, 0))
  else if keydown.right
    player.velocity(Point(1, 0))
  else
    player.velocity(Point(0, 0))
</pre></code>

@name update
@methodOf GameObject#
@event
*/
/**
Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

<code><pre>
boss = GameObject()

boss.bind 'remove', ->
  unlockDoorToLevel2()
</pre></code>

@name remove
@methodOf GameObject#
@event
*/
var GameObject;

GameObject = function(I) {
  var autobindEvents, defaultModules, modules, self;
  I || (I = {});
  /**
  @name {Object} I Instance variables 
  @memberOf GameObject#
  */
  Object.reverseMerge(I, {
    active: true,
    created: false,
    destroyed: false,
    includedModules: [],
    excludedModules: []
  });
  self = Core(I).extend({
    /**
    Update the game object. This is generally called by the engine.
    
    @name update
    @methodOf GameObject#
    */
    update: function(elapsedTime) {
      if (I.active) self.trigger('update', elapsedTime);
      return I.active;
    },
    /**
    Triggers the create event if the object has not already been created.
    
    @name create
    @methodOf GameObject#
    */
    create: function() {
      if (!I.created) self.trigger('create');
      return I.created = true;
    },
    /**
    Destroys the object and triggers the destroyed event.
    
    @name destroy
    @methodOf GameObject#
    */
    destroy: function() {
      if (!I.destroyed) self.trigger('destroy');
      I.destroyed = true;
      return I.active = false;
    }
  });
  defaultModules = [Bindable, Ageable, Bounded, Clampable, Cooldown, Drawable, Expirable, Follow, Metered, Movable, Rotatable, TimedEvents, Tween];
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
};
;
/**
The Game Over class sets up a simple game state with restart instructions.

@see TextScreen
@name GameOver
@constructor
*/
/**
Transitions to the title state on user input.

@name update
@methodOf GameOver#
@event
*/
/**
Draws Game Over screen and reset instructions.

@name overlay
@methodOf GameOver#
@param {PixieCanvas} canvas
@event
*/
var GameOver;

GameOver = function(I) {
  var self;
  if (I == null) I = {};
  self = TextScreen(I);
  self.bind('update', function() {
    if (justPressed.any) {
      return engine.delay(15, function() {
        return engine.setState(TitleScreen());
      });
    }
  });
  self.bind("overlay", function(canvas) {
    self.centerText(canvas, "Game Over");
    return self.centerText(canvas, "Press any key to restart", {
      size: 12,
      y: App.height / 2 + 30
    });
  });
  return self;
};
;
var GameState;

GameState = function(I) {
  var queuedObjects, self;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    objects: []
  });
  queuedObjects = [];
  self = Core(I).extend({
    /**
    The add method creates and adds an object to the game world. Two
    other events are triggered around this one: beforeAdd and afterAdd.
    
    <code><pre>
    # you can add arbitrary entityData and
    # the engine will make it into a GameObject
    engine.add 
      x: 50
      y: 30
      color: "red"
    
    player = engine.add
      class: "Player"
    </pre></code>
    
    @name add
    @methodOf Engine#
    @param {Object} entityData The data used to create the game object.
    @returns {GameObject}
    */
    add: function(entityData) {
      var object;
      self.trigger("beforeAdd", entityData);
      object = GameObject.construct(entityData);
      object.create();
      self.trigger("afterAdd", object);
      if (I.updating) {
        queuedObjects.push(object);
      } else {
        I.objects.push(object);
      }
      return object;
    },
    objects: function() {
      return I.objects.copy();
    }
  });
  self.include(Bindable);
  self.bind("update", function(elapsedTime) {
    var toKeep, toRemove, _ref;
    I.updating = true;
    I.objects.invoke("trigger", "beforeUpdate", elapsedTime);
    _ref = I.objects.partition(function(object) {
      return object.update(elapsedTime);
    }), toKeep = _ref[0], toRemove = _ref[1];
    I.objects.invoke("trigger", "afterUpdate", elapsedTime);
    toRemove.invoke("trigger", "remove");
    I.objects = toKeep.concat(queuedObjects);
    queuedObjects = [];
    return I.updating = false;
  });
  self.include(GameState.Cameras);
  self.include(GameState.SaveState);
  return self;
};
;

GameState.Cameras = function(I, self) {
  var cameras;
  cameras = [Camera()];
  self.bind('update', function() {
    return self.cameras().invoke('trigger', 'update');
  });
  self.bind('afterUpdate', function() {
    return self.cameras().invoke('trigger', 'afterUpdate');
  });
  self.bind('draw', function(canvas) {
    return self.cameras().invoke('trigger', 'draw', canvas, self.objects());
  });
  self.bind('overlay', function(canvas) {
    return self.cameras().invoke('trigger', 'overlay', canvas, self.objects());
  });
  return {
    addCamera: function(data) {
      return cameras.push(Camera(data));
    },
    /**
    Returns the array of camera objects.
    
    @name cameras
    @methodOf Engine#
    @returns {Array}
    */
    cameras: function(newCameras) {
      if (newCameras) {
        cameras = newCameras;
        return self;
      } else {
        return cameras;
      }
    }
  };
};
;
/**
The <code>SaveState</code> module provides methods to save and restore the current game state.

@name SaveState
@fieldOf GameState
@module
@param {Object} I Instance variables
@param {Object} self Reference to the game state
*/
GameState.SaveState = function(I, self) {
  var savedState;
  savedState = null;
  return {
    /**
    Save the current game state and returns a JSON object representing that state.
    
    <code><pre>
    engine.bind 'update', ->
      if justPressed.s
        engine.saveState()
    </pre></code>
    
    @name saveState
    @methodOf GameState#
    @returns {Array} An array of the instance data of all objects in the game state
    */
    saveState: function() {
      return savedState = I.objects.map(function(object) {
        return Object.extend({}, object.I);
      });
    },
    /**
    Loads the game state passed in, or the last saved state, if any.
    
    <code><pre>
    engine.bind 'update', ->
      if justPressed.l
        # loads the last saved state
        engine.loadState()
    
      if justPressed.o
        # removes all game objects, then reinstantiates 
        # them with the entityData passed in
        engine.loadState([{x: 40, y: 50, class: "Player"}, {x: 0, y: 0, class: "Enemy"}, {x: 500, y: 400, class: "Boss"}])
    </pre></code>
    
    @name loadState
    @methodOf GameState#
    @param [newState] An arraf of object instance data to load.
    */
    loadState: function(newState) {
      if (newState || (newState = savedState)) {
        I.objects.invoke("trigger", "remove");
        I.objects = [];
        return newState.each(function(objectData) {
          return self.add(Object.extend({}, objectData));
        });
      }
    },
    /**
    Reloads the current game state, useful for hotswapping code.
    
    <code><pre>
    engine.I.objects.each (object) ->
      # bring all objects to (0, 0) for some reason
      object.I.x = 0
      object.I.y = 0
    
    # reload all objects to make sure
    # they are at (0, 0)  
    engine.reload()
    </pre></code>
    
    @name reload
    @methodOf GameState#
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
};
;
/**
The <code>SingleCamera</code> module provides provides a single camera view of the game.
Its transform can be adjusted to view different areas and provide various camera effects.

@name SingleCamera
@fieldOf GameState
@module
@param {Object} I Instance variables
@param {Object} self Reference to the game state
*/
GameState.SingleCamera = function(I, self) {
  Object.reverseMerge(I, {
    cameraTransform: Matrix.IDENTITY,
    zSort: true
  });
  self.attrAccessor("cameraTransform");
  self.bind("draw", function(canvas) {
    return canvas.withTransform(I.cameraTransform, function(canvas) {
      var drawObjects;
      drawObjects = self.objects();
      if (I.zSort) {
        drawObjects.sort(function(a, b) {
          return a.I.zIndex - b.I.zIndex;
        });
      }
      return drawObjects.invoke("draw", canvas);
    });
  });
  return {};
};
;
/**
A Game State that loads the map for a given level and transitions into the level.

@see GameState
@name LevelState
@constructor
@param {Number} duration Amount of time in frames it takes to fade into the level
@param {String} level name of the map to load
*/
/**
Fades in the current level and loads the map.

@name enter
@methodOf LevelState#
@event
*/
var LevelState;

LevelState = function(I) {
  var self;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    duration: 10,
    level: 'level1'
  });
  self = GameState(I);
  self.bind("enter", function() {
    engine.fadeIn({
      duration: I.duration
    });
    return engine.loadMap(I.level, function() {
      return engine.I.transitioning = false;
    });
  });
  return self;
};
;
/**
The Metered module provides a simple drop-in
meter ui to track arbitrary numeric attributes.

<code><pre>
player = GameObject
  health: 100
  maxHealth: 100

player.include Metered

enemy = GameObject
  health: 500

enemy.include Metered

someOtherObject = GameObject

someOtherObject.include Metered

player.meter 'health'
# => Sets up a health meter that will be drawn during the player overlay event

enemy.meter 'health'
# => Sets up a health meter that will be drawn during the enemy overlay event. 
# Since maxHealth wasn't provided, it is set to the value of I.health (500)

someOtherObject.meter 'turbo'
# => Sets up a turbo meter that will be drawn during the someOtherObject overlay event. 
# Since neither turbo maxTurbo were provided, they are both set to 100.

</pre></code>

Metered module
@name Metered
@module
@constructor
@param {Object} I Instance variables
@param {GameObject} self Reference to including object
*/
var Metered;

Metered = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    meters: {}
  });
  self.bind('overlay', function(canvas) {
    var backgroundColor, borderColor, borderRadius, borderWidth, color, height, meterData, name, ratio, show, width, x, y, _ref, _ref2, _ref3;
    _ref = I.meters;
    for (name in _ref) {
      meterData = _ref[name];
      backgroundColor = meterData.backgroundColor, (_ref2 = meterData.border, borderColor = _ref2.color, borderRadius = _ref2.radius, borderWidth = _ref2.width), color = meterData.color, height = meterData.height, show = meterData.show, width = meterData.width, x = meterData.x, y = meterData.y;
      if (meterData.position != null) {
        _ref3 = meterData.position, x = _ref3.x, y = _ref3.y;
      }
      if (!show) return;
      ratio = I[name] / I["max" + (name.capitalize())];
      canvas.drawRoundRect({
        color: backgroundColor,
        radius: borderRadius,
        x: x,
        y: y,
        width: width,
        height: height
      });
      canvas.drawRoundRect({
        color: color,
        x: x,
        y: y,
        radius: borderRadius,
        width: width * ratio,
        height: height
      });
      canvas.drawRoundRect({
        x: x,
        y: y,
        width: width,
        height: height,
        radius: borderRadius,
        stroke: {
          color: borderColor,
          width: borderWidth
        }
      });
    }
  });
  return {
    /**
    Configures a meter to be drawn each overlay event.
    
    <code><pre>
    player = GameObject
    
    player.include Metered      
    
    player.meter 'health',
      border
        color: 'brown'
        radius: 3
      color: 'pink'
      height: 20
      x: 5
      y: 5
      show: true
      width: 150
    
    # => Sets up a health meter, using all the configuration options
    </pre></code>
    
    @name meter
    @methodOf Metered#
    @param {String} name The name of the property to meter
    @param {Object} options The meter configuration options
    @param {String} border: color Color of the meter's border
    @param {Number} border: width Width of the meter's border
    @param {String} color Color of the meter's inner rectangle
    @param {Number} height Height of the meter
    @param {Object} position An x, y object representing the position of the meter
    @param {Number} x x position of the meter
    @param {Number} y y position of the meter
    @param {Number} border: radius Border radius of the meter
    @param {Boolean} show Boolean to toggle whether of not to display the meter
    @param {Number} width How wide the meter is
    */
    meter: function(name, options) {
      if (options == null) options = {};
      Object.reverseMerge(options, {
        backgroundColor: 'black',
        border: {
          color: 'white',
          radius: 2,
          width: 1.5
        },
        color: 'green',
        height: 10,
        x: 0,
        y: 0,
        show: true,
        width: 100
      });
      if (I[name] == null) I[name] = 100;
      if (!I["max" + (name.capitalize())]) {
        if (I[name]) {
          I["max" + (name.capitalize())] = I[name];
        } else {
          I["max" + (name.capitalize())] = 100;
        }
      }
      return I.meters[name] = options;
    },
    /**
    Shows the named meter
    
    <code><pre>
    player = GameObject
    
    player.include Metered      
    
    # creates a health meter but disables visibility
    player.meter 'health'
      show: false
    
    # enables visibility for the meter named 'health'
    player.showMeter 'health'
    </pre></code>
    
    @name showMeter
    @methodOf Metered#
    @param {String} name The name of the meter to show
    */
    showMeter: function(name) {
      return I.meters[name].show = true;
    },
    /**
    Hides the named meter
    
    <code><pre>
    player = GameObject
    
    player.include Metered      
    
    # creates a health meter
    player.meter 'health'
    
    # disables visibility for the meter named 'health'
    player.hideMeter 'health'
    </pre></code>
    
    @name hideMeter
    @methodOf Metered#
    @param {String} name The name of the meter to hide
    */
    hideMeter: function(name) {
      return I.meters[name].show = false;
    },
    /**
    Toggles visibility of the named meter
    
    <code><pre>
    player = GameObject
    
    player.include Metered      
    
    # creates a health meter
    player.meter 'health'
    
    # toggles visibility for the meter named 'health'
    player.toggleMeter 'health'
    </pre></code>
    
    @name toggleMeter
    @methodOf Metered#
    @param {String} name The name of the meter to toggle
    */
    toggleMeter: function(name) {
      return I.meters[name].show = !I.meters[name].show;
    }
  };
};
;
/**
The Movable module automatically updates the position and velocity of
GameObjects based on the velocity and acceleration. It does not check
collisions so is probably best suited to particle effect like things.

<code><pre>
player = GameObject
  x: 0
  y: 0
  velocity: Point(0, 0)
  acceleration: Point(1, 0)
  maxSpeed: 2

player.include(Movable)

# => `velocity is {x: 0, y: 0} and position is {x: 0, y: 0}`

player.update(1)
# => `velocity is {x: 1, y: 0} and position is {x: 1, y: 0}` 

player.update(1)
# => `velocity is {x: 2, y: 0} and position is {x: 3, y: 0}`   

# we've hit our maxSpeed so our velocity won't increase
player.update(1)
# => `velocity is {x: 2, y: 0} and position is {x: 5, y: 0}`
</pre></code>

@name Movable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Movable;

Movable = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    acceleration: Point(0, 0),
    velocity: Point(0, 0)
  });
  I.acceleration = Point(I.acceleration.x, I.acceleration.y);
  I.velocity = Point(I.velocity.x, I.velocity.y);
  self.unbind(".Movable");
  return self.bind('update.Movable', function(dt) {
    var currentSpeed;
    I.velocity = I.velocity.add(I.acceleration.scale(dt));
    if (I.maxSpeed != null) {
      currentSpeed = I.velocity.magnitude();
      if (currentSpeed > I.maxSpeed) {
        I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed);
      }
    }
    I.x += I.velocity.x * dt;
    return I.y += I.velocity.y * dt;
  });
};
;
/**
Creates an oscillator function with the given parameters.

@name Oscillator
@constructor
@param {Number} amplitude How much to scale the oscillator function value
@param {Number} period How fast the osciallator function repeats
@param {Number} offset How much to offset the created oscillator function. Useful for translating between sin and cosine functions.
*/
var Oscillator;

Oscillator = function(options) {
  var amplitude, offset, period;
  if (options == null) options = {};
  amplitude = options.amplitude, period = options.period, offset = options.offset;
  if (amplitude == null) amplitude = 1;
  if (period == null) period = 1;
  if (offset == null) offset = 0;
  return function(t) {
    return amplitude * Math.cos(Math.TAU * t / period + offset);
  };
};
;
/**
@name ResourceLoader
@namespace

Helps access the assets in your game.
*/
(function() {
  var ResourceLoader, typeTable;
  typeTable = {
    images: "png",
    data: "json",
    tilemaps: "tilemap"
  };
  ResourceLoader = {
    /**
    Return the url for a particular asset.
    
    <code><pre>
    ResourceLoader.urlFor("images", "player")
    # => This returns the url for the file "player.png" in your images directory.
    </pre></code>
    
    @name urlFor
    @methodOf ResourceLoader#
    @param {String} directory The directory your file is in.
    @param {String} name The name of the file.
    @returns {String} The full url of your asset
    */
    urlFor: function(directory, name) {
      var type, _ref;
      directory = (typeof App !== "undefined" && App !== null ? (_ref = App.directories) != null ? _ref[directory] : void 0 : void 0) || directory;
      type = typeTable[directory];
      return "" + BASE_URL + "/" + directory + "/" + name + "." + type + "?" + MTIME;
    }
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["ResourceLoader"] = ResourceLoader;
})();
;
/**
The Rotatable module rotates the object
based on its rotational velocity.

<code><pre>
player = GameObject
  x: 0
  y: 0
  rotationalVelocity: Math.PI / 64

player.I.rotation
# => 0

player.update(1)

player.I.rotation
# => 0.04908738521234052 # Math.PI / 64

player.update(1)

player.I.rotation
# => 0.09817477042468103 # 2 * (Math.PI / 64)
</pre></code>

@name Rotatable
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Rotatable;

Rotatable = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    rotation: 0,
    rotationalVelocity: 0
  });
  self.bind('update', function(dt) {
    return I.rotation += I.rotationalVelocity * dt;
  });
  return {};
};
;
/**
The Sprite class provides a way to load images for use in games.

By default, images are loaded asynchronously. A proxy object is 
returned immediately. Even though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@name Sprite
@constructor
*/
(function() {
  var LoaderProxy, Sprite;
  LoaderProxy = function() {
    return {
      draw: function() {},
      fill: function() {},
      frame: function() {},
      update: function() {},
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
      @param {PowerCanvas} canvas Reference to the canvas to draw the sprite on
      @param {Number} x Position on the x axis to draw the sprite
      @param {Number} y Position on the y axis to draw the sprite
      */
      draw: function(canvas, x, y) {
        return canvas.drawImage(image, sourceX, sourceY, width, height, x, y, width, height);
      },
      /**
      Draw this sprite on the given canvas tiled to the x, y, 
      width, and height dimensions specified.
      
      @name fill
      @methodOf Sprite#
      @param {PowerCanvas} canvas Reference to the canvas to draw the sprite on
      @param {Number} x Position on the x axis to draw the sprite
      @param {Number} y Position on the y axis to draw the sprite
      @param {Number} width How far to tile the sprite on the x-axis
      @param {Number} height How far to tile the sprite on the y-axis
      @param {String} repeat Repeat options. Can be `repeat-x`, `repeat-y`, `no-repeat`, or `repeat`. Defaults to `repeat`
      */
      fill: function(canvas, x, y, width, height, repeat) {
        var pattern;
        if (repeat == null) repeat = "repeat";
        pattern = canvas.createPattern(image, repeat);
        return canvas.drawRect({
          x: x,
          y: y,
          width: width,
          height: height,
          color: pattern
        });
      },
      width: width,
      height: height
    };
  };
  /**
  Loads all sprites from a sprite sheet found in
  your images directory, specified by the name passed in.
  
  @name loadSheet
  @methodOf Sprite
  @param {String} name Name of the spriteSheet image in your images directory
  @param {Number} tileWidth Width of each sprite in the sheet
  @param {Number} tileHeight Height of each sprite in the sheet
  @returns {Array} An array of sprite objects
  */
  Sprite.loadSheet = function(name, tileWidth, tileHeight) {
    var image, sprites, url;
    url = ResourceLoader.urlFor("images", name);
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
  /**
  Loads a sprite from a given url.
  
  @name load
  @methodOf Sprite
  @param {String} url
  @param {Function} [loadedCallback]
  @returns {Sprite} A sprite object
  */
  Sprite.load = function(url, loadedCallback) {
    var img, proxy;
    img = new Image();
    proxy = LoaderProxy();
    img.onload = function() {
      var tile;
      tile = Sprite(this);
      Object.extend(proxy, tile);
      if (loadedCallback) return loadedCallback(proxy);
    };
    img.src = url;
    return proxy;
  };
  /**
  Loads a sprite with the given pixie id.
  
  @name fromPixieId
  @methodOf Sprite
  @param {Number} id Pixie Id of the sprite to load
  @param {Function} [callback] Function to execute once the image is loaded. The sprite proxy data is passed to this as a parameter.
  @returns {Sprite}
  */
  Sprite.fromPixieId = function(id, callback) {
    return Sprite.load("http://pixieengine.com/s3/sprites/" + id + "/original.png", callback);
  };
  /**
  A sprite that draws nothing.
  
  @name EMPTY
  @fieldOf Sprite
  @constant
  @returns {Sprite}
  */
  /**
  A sprite that draws nothing.
  
  @name NONE
  @fieldOf Sprite
  @constant
  @returns {Sprite}
  */
  Sprite.EMPTY = Sprite.NONE = LoaderProxy();
  /**
  Loads a sprite from a given url.
  
  @name fromURL
  @methodOf Sprite
  @param {String} url The url where the image to load is located
  @param {Function} [callback] Function to execute once the image is loaded. The sprite proxy data is passed to this as a parameter.
  @returns {Sprite}
  */
  Sprite.fromURL = Sprite.load;
  /**
  Loads a sprite with the given name.
  
  @name loadByName
  @methodOf Sprite
  @param {String} name The name of the image in your images directory
  @param {Function} [callback] Function to execute once the image is loaded. The sprite proxy data is passed to this as a parameter.
  @returns {Sprite}
  */
  Sprite.loadByName = function(name, callback) {
    return Sprite.load(ResourceLoader.urlFor("images", name), callback);
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Sprite"] = Sprite;
})();
;
/**
The Text Effect class provides a method to display moving text onscreen, fading out the text over the effect duration.

By default, images are loaded asynchronously. A proxy object is 
returned immediately. Even though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@name TextEffect
@constructor
*/
/**
Updates the position of the text based on the effect velocity. Updates the 
alpha based on the elapsed time since the effect creation. If <code>rotationalVelocity</code>
is provided then the text rotation is updated as well.

@name update
@methodOf TextEffect#
@event
*/
/**
Draws the <code>textShadow</code> text and the <code>text</code> text.

@name draw
@methodOf TextEffect#
@param {PixieCanvas} canvas
@event
*/
var TextEffect;

TextEffect = function(I) {
  var self;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    color: Color('green'),
    duration: 40,
    font: '20px Helvetica',
    text: '100',
    textShadow: Color('black'),
    alpha: 1,
    rotation: 0,
    rotationalVelocity: 0,
    velocity: Point(0, 0)
  });
  self = GameObject(I);
  self.bind("update", function() {
    return I.alpha = 1 - (I.age / I.duration);
  });
  self.unbind("draw");
  self.bind("draw", function(canvas) {
    if (!I.color.channels) I.color = Color(I.color);
    if (!I.textShadow.channels) I.textShadow = Color(I.textShadow);
    I.color.a = I.alpha;
    I.textShadow.a = I.alpha;
    canvas.font(I.font);
    canvas.drawText({
      color: I.textShadow,
      x: 1,
      y: 1,
      text: I.text
    });
    return canvas.drawText({
      color: I.color,
      x: 0,
      y: 0,
      text: I.text
    });
  });
  return self;
};
;
/**
The Text Screen class is a GameState that provides convenience methods for drawing text to screen. 

@name TextScreen
@constructor
*/
var TextScreen;

TextScreen = function(I) {
  var self;
  if (I == null) I = {};
  Object.reverseMerge(I, {
    font: 'Helvetica',
    fontSize: 24,
    fontColor: 'white',
    yPosition: App.height / 2
  });
  return self = GameState(I).extend({
    /**
    Draw center aligned text at the given y position.
      
    <code><pre>
    screen = TextScreen()
    screen.centerText canvas, 'Centering text is easy'
    </pre></code>
      
    @name centerText
    @methodOf TextScreen#
    @param {PixieCanvas} canvas The canvas to draw on    
    @param {String} text The text to draw
    @param {Object} options These include font, size, color, and yPosition
    */
    centerText: function(canvas, text, options) {
      var color, font, size, yPosition;
      if (options == null) options = {};
      font = options.font || I.font;
      size = options.size || I.fontSize;
      color = options.color || I.fontColor;
      yPosition = options.y || I.yPosition;
      canvas.font("" + size + "px " + font);
      return canvas.centerText({
        y: yPosition,
        text: text,
        color: color
      });
    }
  });
};
;

(function() {
  var Map, Tilemap, loadByName;
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
      if (!entityCallback) return;
      return data.layers.each(function(layer, layerIndex) {
        var instance, instanceData, instances, x, y, _i, _len, _results;
        if (instances = layer.instances) {
          _results = [];
          for (_i = 0, _len = instances.length; _i < _len; _i++) {
            instance = instances[_i];
            x = instance.x, y = instance.y, uuid = instance.uuid;
            instanceData = Object.extend({
              layer: layerIndex,
              sprite: spriteLookup[uuid],
              x: x + tileWidth / 2,
              y: y + tileHeight / 2
            }, App.entities[uuid], instance.properties);
            _results.push(entityCallback(instanceData));
          }
          return _results;
        }
      });
    };
    loadEntities();
    return data;
  };
  Tilemap = function(name, callback, entityCallback) {
    return fromPixieId(App.Tilemaps[name], callback, entityCallback);
  };
  loadByName = function(name, callback, entityCallback) {
    var proxy, url;
    url = ResourceLoader.urlFor("tilemaps", name);
    proxy = {};
    $.getJSON(url, function(data) {
      Object.extend(proxy, Map(data, entityCallback));
      return typeof callback === "function" ? callback(proxy) : void 0;
    });
    return proxy;
  };
  Tilemap.load = function(options) {
    if (options.pixieId) {
      return fromPixieId(options.pixieId, options.complete, options.entity);
    } else if (options.name) {
      return loadByName(options.name, options.complete, options.entity);
    }
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Tilemap"] = Tilemap;
})();
;
/**
The TimedEvents module allows arbitrary code to be executed at set intervals. <code>GameObject</code> includes this module by default

TimedEvents module
@name TimedEvents
@module
@constructor
@param {Object} I Instance variables
*/
var TimedEvents,
  __slice = Array.prototype.slice;

TimedEvents = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    everyEvents: []
  });
  self.bind("update", function(elapsedTime) {
    var event, fn, period, _i, _len, _ref, _results;
    _ref = I.everyEvents;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      event = _ref[_i];
      fn = event.fn, period = event.period;
      _results.push((function() {
        var _results2;
        _results2 = [];
        while (event.lastFired < I.age + elapsedTime) {
          self.sendOrApply(fn);
          _results2.push(event.lastFired += period);
        }
        return _results2;
      })());
    }
    return _results;
  });
  return {
    /**
    Execute <code>fn</code> every <code>n</code> frames.
    
    <code><pre>
    player = GameObject()
    
    player.include TimedEvents
    
    # doSomething is called every 4 seconds
    player.every 4, ->
      doSomething()
    </pre></code>
    
    @name every
    @methodOf TimedEvents#
    @param {Number} n Number of frames to wait before executing the callback
    @param {Function} fn Code to execute after <code>n</code> frames has passed
    */
    every: function(period, fn) {
      if (!(period > 0)) return;
      return I.everyEvents.push({
        fn: fn,
        period: period,
        lastFired: I.age
      });
    },
    sendOrApply: function() {
      var args, fn;
      fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof fn === "function") {
        return fn.apply(self, args);
      } else {
        return self.send.apply(self, [fn].concat(__slice.call(args)));
      }
    }
  };
};
;
/**
The Title Screen class sets up a simple game title screen using <code>App.name</code>

@see TextScreen
@name TitleScreen
@constructor
*/
/**
Goes to the next level on any user input.

@name update
@methodOf TitleScreen#
@event
*/
/**
Overlays the title text in the middle of the screen. Uses <code>App.name</code> 

@name overlay
@methodOf TitleScreen#
@param {PixieCanvas} canvas
@event
*/
var TitleScreen;

TitleScreen = function(I) {
  var self;
  if (I == null) I = {};
  self = TextScreen(I);
  self.bind('update', function() {
    if (justPressed.any) return engine.nextLevel();
  });
  self.bind("overlay", function(canvas) {
    self.centerText(canvas, App.name);
    return self.centerText(canvas, "Press any key to start", {
      size: 12,
      y: App.height / 2 + 30
    });
  });
  return self;
};
;
/**
The <code>Tween</code> module provides a method to tween object properties. 

@name Tween
@module
@constructor
@param {Object} I Instance variables
@param {Core} self Reference to including object
*/
var Tween;

Tween = function(I, self) {
  if (I == null) I = {};
  Object.reverseMerge(I, {
    activeTweens: {}
  });
  self.bind("update", function() {
    var data, f, property, t, _base, _ref, _results;
    _ref = I.activeTweens;
    _results = [];
    for (property in _ref) {
      data = _ref[property];
      if (I.age >= data.endTime) {
        I[property] = data.end;
        if (typeof (_base = I.activeTweens[property]).complete === "function") {
          _base.complete();
        }
        _results.push(delete I.activeTweens[property]);
      } else {
        f = Easing[data.easing](data.start, data.end);
        t = (I.age - data.startTime) / data.duration;
        _results.push(I[property] = f(t));
      }
    }
    return _results;
  });
  return {
    /**
    Modify the object's properties over time.
    
    <code><pre>
    player = GameObject()
    
    player.tween 30,
      x: 50
      y: 50
      easing: "quadratic"
    </pre></code>
    
    <code><pre>
    player = GameObject()
    
    player.tween 30,
      x: 150
      y: 150
      complete: ->
        player.dance()
    </pre></code>
    
    @name tween
    @methodOf Tween#
    @param {Number} duration How long (in frames) until the object's properties reach their final values.
    @param {Object} properties Which properties to tween. Set the `easing` property to specify the easing function.
    */
    tween: function(duration, properties) {
      var complete, easing, property, target, _results;
      properties = Object.extend({}, properties);
      easing = properties.easing || "linear";
      complete = properties.complete;
      delete properties.easing;
      delete properties.complete;
      _results = [];
      for (property in properties) {
        target = properties[property];
        _results.push(I.activeTweens[property] = {
          complete: complete,
          end: target,
          start: I[property],
          easing: easing,
          duration: duration,
          startTime: I.age,
          endTime: I.age + duration
        });
      }
      return _results;
    }
  };
};
;
;
