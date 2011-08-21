;
;
;
/**
Returns a copy of the array without null and undefined values.

@name compact
@methodOf Array#
@type Array
@returns An array that contains only the non-null values.
*/var __slice = Array.prototype.slice;
Array.prototype.compact = function() {
  return this.select(function(element) {
    return element != null;
  });
};
/**
Creates and returns a copy of the array. The copy contains
the same objects.

@name copy
@methodOf Array#
@type Array
@returns A new array that is a copy of the array
*/
Array.prototype.copy = function() {
  return this.concat();
};
/**
Empties the array of its contents. It is modified in place.

@name clear
@methodOf Array#
@type Array
@returns this, now emptied.
*/
Array.prototype.clear = function() {
  this.length = 0;
  return this;
};
/**
Flatten out an array of arrays into a single array of elements.

@name flatten
@methodOf Array#
@type Array
@returns A new array with all the sub-arrays flattened to the top.
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
  => [1, 2, 3, 4]

  ['hello', 'world', 'cool!'].invoke('substring', 0, 3)
  => ['hel', 'wor', 'coo']
</pre></code>

@param {String} method The name of the method to invoke.
@param [arg...] Optional arguments to pass to the method being invoked.

@name invoke
@methodOf Array#
@type Array
@returns A new array containing the results of invoking the 
named method on each element.
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

@name rand
@methodOf Array#
@type Object
@returns A random element from an array
*/
Array.prototype.rand = function() {
  return this[rand(this.length)];
};
/**
Remove the first occurance of the given object from the array if it is
present.

@name remove
@methodOf Array#
@param {Object} object The object to remove from the array if present.
@returns The removed object if present otherwise undefined.
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

@name include
@methodOf Array#
@param {Object} element The element to check if present.
@returns true if the element is in the array, false otherwise.
@type Boolean
*/
Array.prototype.include = function(element) {
  return this.indexOf(element) !== -1;
};
/**
Call the given iterator once for each element in the array,
passing in the element as the first argument, the index of 
the element as the second argument, and this array as the
third argument.

@name each
@methodOf Array#
@param {Function} iterator Function to be called once for 
each element in the array.
@param {Object} [context] Optional context parameter to be 
used as `this` when calling the iterator function.

@type Array
@returns this to enable method chaining.
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
Array.prototype.map || (Array.prototype.map = function(iterator, context) {
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

Ex. [1, 2, 3, 4].eachPair (a, b) ->
  # 1, 2
  # 1, 3
  # 1, 4
  # 2, 3
  # 2, 4
  # 3, 4 

@name eachPair
@methodOf Array#
@param {Function} iterator Function to be called once for 
each pair of elements in the array.
@param {Object} [context] Optional context parameter to be 
used as `this` when calling the iterator function.
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
<code>each</code>

@see Array#each

@name eachWithObject
@methodOf Array#

@param {Object} object The object to pass to the iterator on each
visit.
@param {Function} iterator Function to be called once for 
each element in the array.
@param {Object} [context] Optional context parameter to be 
used as `this` when calling the iterator function.

@returns this
@type Array
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
passed as in <code>each</each>.

@see Array#each

@name eachSlice
@methodOf Array#

@param {Number} n The number of elements in each group.
@param {Function} iterator Function to be called once for 
each group of elements in the array.
@param {Object} [context] Optional context parameter to be 
used as `this` when calling the iterator function.

@returns this
@type Array
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
Returns a new array with the elements all shuffled up.

@name shuffle
@methodOf Array#

@returns A new array that is randomly shuffled.
@type Array
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

@name first
@methodOf Array#

@returns The first element, or undefined if the array is empty.
@type Object
*/
Array.prototype.first = function() {
  return this[0];
};
/**
Returns the last element of the array, undefined if the array is empty.

@name last
@methodOf Array#

@returns The last element, or undefined if the array is empty.
@type Object
*/
Array.prototype.last = function() {
  return this[this.length - 1];
};
/**
Returns an object containing the extremes of this array.
<pre>
[-1, 3, 0].extremes() # => {min: -1, max: 3}
</pre>

@name extremes
@methodOf Array#

@param {Function} [fn] An optional funtion used to evaluate 
each element to calculate its value for determining extremes.
@returns {min: minElement, max: maxElement}
@type Object
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

@name wrap
@methodOf Array#

@param {Number} start The index to start wrapping at, or the index of the 
sole element to return if no length is given.
@param {Number} [length] Optional length determines how long result 
array should be.
@returns The element at start mod array.length, or an array of length elements, 
starting from start and wrapping.
@type Object or Array
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

@name partition
@methodOf Array#

@param {Function} iterator
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns An array in the form of [trueCollection, falseCollection]
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

@param {Function} iterator The iterator receives each element in turn as 
the first agument.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns An array containing the elements for which the iterator returned true.
*/
Array.prototype.select = function(iterator, context) {
  return this.partition(iterator, context)[0];
};
/**
Return the group of elements that are not in the passed in set.

@name without
@methodOf Array#

@param {Array} values List of elements to exclude.

@type Array
@returns An array containing the elements that are not passed in.
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

@param {Function} iterator The iterator receives each element in turn as 
the first agument.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns An array containing the elements for which the iterator returned false.
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

@type Object
@returns The result of a
*/
Array.prototype.inject = function(initial, iterator) {
  this.each(function(element) {
    return initial = iterator(initial, element);
  });
  return initial;
};
/**
Add all the elements in the array.

@name sum
@methodOf Array#

@type Number
@returns The sum of the elements in the array.
*/
Array.prototype.sum = function() {
  return this.inject(0, function(sum, n) {
    return sum + n;
  });
};
/**
Multiply all the elements in the array.

@name product
@methodOf Array#

@type Number
@returns The product of the elements in the array.
*/
Array.prototype.product = function() {
  return this.inject(1, function(product, n) {
    return product * n;
  });
};
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
};;
/**
Bindable module
@name Bindable
@module
@constructor
*/var Bindable;
var __slice = Array.prototype.slice;
Bindable = function() {
  var eventCallbacks;
  eventCallbacks = {};
  return {
    /**
    The bind method adds a function as an event listener.
    
    @name bind
    @methodOf Bindable#
    
    @param {String} event The event to listen to.
    @param {Function} callback The function to be called when the specified event
    is triggered.
    */
    bind: function(event, callback) {
      eventCallbacks[event] = eventCallbacks[event] || [];
      return eventCallbacks[event].push(callback);
    },
    /**
    The unbind method removes a specific event listener, or all event listeners if
    no specific listener is given.
    
    @name unbind
    @methodOf Bindable#
    
    @param {String} event The event to remove the listener from.
    @param {Function} [callback] The listener to remove.
    */
    unbind: function(event, callback) {
      eventCallbacks[event] = eventCallbacks[event] || [];
      if (callback) {
        return eventCallbacks[event].remove(callback);
      } else {
        return eventCallbacks[event] = [];
      }
    },
    /**
    The trigger method calls all listeners attached to the specified event.
    
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
(typeof exports !== "undefined" && exports !== null ? exports : this)["Bindable"] = Bindable;;
/**
The Core class is used to add extended functionality to objects without
extending the object class directly. Inherit from Core to gain its utility
methods.

@name Core
@constructor

@param {Object} I Instance variables
*/var Core;
var __slice = Array.prototype.slice;
Core = function(I) {
  var self;
  I || (I = {});
  return self = {
    /**
      External access to instance variables. Use of this property should be avoided
      in general, but can come in handy from time to time.
    
      @name I
      @fieldOf Core#
      */
    I: I,
    /**
      Generates a public jQuery style getter / setter method for each 
      String argument.
    
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
    Extends this object with methods from the passed in object. `before` and 
    `after` are special option names that glue functionality before or after 
    existing methods.
    
    @name extend
    @methodOf Core#
    */
    extend: function(options) {
      var afterMethods, beforeMethods, fn, name;
      afterMethods = options.after;
      beforeMethods = options.before;
      delete options.after;
      delete options.before;
      Object.extend(self, options);
      if (beforeMethods) {
        for (name in beforeMethods) {
          fn = beforeMethods[name];
          self[name] = self[name].withBefore(fn);
        }
      }
      if (afterMethods) {
        for (name in afterMethods) {
          fn = afterMethods[name];
          self[name] = self[name].withAfter(fn);
        }
      }
      return self;
    },
    /** 
    Includes a module in this object.
    
    @name include
    @methodOf Core#
    
    @param {Module} Module the module to include. A module is a constructor 
    that takes two parameters, I and self, and returns an object containing the 
    public methods to extend the including object with.
    */
    include: function(Module) {
      return self.extend(Module(I, self));
    }
  };
};;
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
};;
["log", "info", "warn", "error"].each(function(name) {
  if (typeof console !== "undefined") {
    return (typeof exports !== "undefined" && exports !== null ? exports : this)[name] = function(message) {
      if (console[name]) {
        return console[name](message);
      }
    };
  } else {
    return (typeof exports !== "undefined" && exports !== null ? exports : this)[name] = function() {};
  }
});;
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
*/(function() {
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
  */  var Matrix;
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
      @returns The result of the matrix multiplication, a new matrix.
      @type Matrix
      */
    concat: function(matrix) {
      return Matrix(this.a * matrix.a + this.c * matrix.b, this.b * matrix.a + this.d * matrix.b, this.a * matrix.c + this.c * matrix.d, this.b * matrix.c + this.d * matrix.d, this.a * matrix.tx + this.c * matrix.ty + this.tx, this.b * matrix.tx + this.d * matrix.ty + this.ty);
    },
    /**
    Given a point in the pretransform coordinate space, returns the coordinates of 
    that point after the transformation occurs. Unlike the standard transformation 
    applied using the transformPoint() method, the deltaTransformPoint() method 
    does not consider the translation parameters tx and ty.
    @name deltaTransformPoint
    @methodOf Matrix#
    @see #transformPoint
    
    @return A new point transformed by this matrix ignoring tx and ty.
    @type Point
    */
    deltaTransformPoint: function(point) {
      return Point(this.a * point.x + this.c * point.y, this.b * point.x + this.d * point.y);
    },
    /**
    Returns the inverse of the matrix.
    http://mathworld.wolfram.com/MatrixInverse.html
    @name inverse
    @methodOf Matrix#
    
    @returns A new matrix that is the inverse of this matrix.
    @type Matrix
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
    @returns A new matrix, rotated by the specified amount.
    @type Matrix
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
    @type Matrix
    */
    scale: function(sx, sy, aboutPoint) {
      return this.concat(Matrix.scale(sx, sy, aboutPoint));
    },
    /**
    Returns the result of applying the geometric transformation represented by the 
    Matrix object to the specified point.
    @name transformPoint
    @methodOf Matrix#
    @see #deltaTransformPoint
    
    @returns A new point with the transformation applied.
    @type Point
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
    @returns A new matrix with the translation applied.
    @type Matrix
    */
    translate: function(tx, ty) {
      return this.concat(Matrix.translation(tx, ty));
    }
    /**
    Creates a matrix transformation that corresponds to the given rotation,
    around (0,0) or the specified point.
    @see Matrix#rotate
    
    @param {Number} theta Rotation in radians.
    @param {Point} [aboutPoint] The point about which this rotation occurs. Defaults to (0,0).
    @returns 
    @type Matrix
    */
  };
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
  @returns A matrix transformation representing scaling by sx and sy.
  @type Matrix
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
  Returns a matrix that corresponds to a translation of tx, ty.
  @see Matrix#translate
  
  @param {Number} tx The amount to translate in the x direction.
  @param {Number} ty The amount to translate in the y direction.
  @return A matrix transformation representing a translation by tx and ty.
  @type Matrix
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
})();;
/** 
Returns the absolute value of this number.

@name abs
@methodOf Number#

@type Number
@returns The absolute value of the number.
*/Number.prototype.abs = function() {
  return Math.abs(this);
};
/**
Returns the mathematical ceiling of this number.

@name ceil
@methodOf Number#

@type Number
@returns The number truncated to the nearest integer of greater than or equal value.

(4.9).ceil() # => 5
(4.2).ceil() # => 5
(-1.2).ceil() # => -1
*/
Number.prototype.ceil = function() {
  return Math.ceil(this);
};
/**
Returns the mathematical floor of this number.

@name floor
@methodOf Number#

@type Number
@returns The number truncated to the nearest integer of less than or equal value.

(4.9).floor() # => 4
(4.2).floor() # => 4
(-1.2).floor() # => -2
*/
Number.prototype.floor = function() {
  return Math.floor(this);
};
/**
Returns this number rounded to the nearest integer.

@name round
@methodOf Number#

@type Number
@returns The number rounded to the nearest integer.

(4.5).round() # => 5
(4.4).round() # => 4
*/
Number.prototype.round = function() {
  return Math.round(this);
};
/**
Returns a number whose value is limited to the given range.

Example: limit the output of this computation to between 0 and 255
<pre>
(x * 255).clamp(0, 255)
</pre>

@name clamp
@methodOf Number#

@param {Number} min The lower boundary of the output range
@param {Number} max The upper boundary of the output range

@returns A number in the range [min, max]
@type Number
*/
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
/**
A mod method useful for array wrapping. The range of the function is
constrained to remain in bounds of array indices.

<pre>
Example:
(-1).mod(5) == 4
</pre>

@name mod
@methodOf Number#

@param {Number} base
@returns An integer between 0 and (base - 1) if base is positive.
@type Number
*/
Number.prototype.mod = function(base) {
  var result;
  result = this % base;
  if (result < 0 && base > 0) {
    result += base;
  }
  return result;
};
/**
Get the sign of this number as an integer (1, -1, or 0).

@name sign
@methodOf Number#

@type Number
@returns The sign of this number, 0 if the number is 0.
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

@name even
@methodOf Number#

@type Boolean
@returns true if this number is an even integer, false otherwise.
*/
Number.prototype.even = function() {
  return this % 2 === 0;
};
/**
Returns true if this number is odd (has remainder of 1 when divided by 2).

@name odd
@methodOf Number#

@type Boolean
@returns true if this number is an odd integer, false otherwise.
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

@name times
@methodOf Number#

@param {Function} iterator The iterator takes a single parameter, the number 
of the current iteration.
@param {Object} [context] The optional context parameter specifies an object
to treat as <code>this</code> in the iterator block.

@returns The number of times the iterator was called.
@type Number
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

  EX: 
   (7).snap(8) => 0
   (4).snap(8) => 0
   (12).snap(8) => 8

@name snap
@methodOf Number#

@param {Number} resolution The grid resolution to snap to.
@returns The nearest multiple of resolution lower than the number.
@type Number
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

@name primeFactors
@methodOf Number#

@returns An array containing the factorization of this number.
@type Array
*/
Number.prototype.primeFactors = function() {
  var factors, i, iSquared, n;
  factors = [];
  n = Math.floor(this);
  if (n === 0) {
    return;
  }
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
  if (n !== 1) {
    factors.push(n);
  }
  return factors;
};
Number.prototype.toColorPart = function() {
  var s;
  s = parseInt(this.clamp(0, 255), 10).toString(16);
  if (s.length === 1) {
    s = '0' + s;
  }
  return s;
};
Number.prototype.approach = function(target, maxDelta) {
  return (target - this).clamp(-maxDelta, maxDelta) + this;
};
Number.prototype.approachByRatio = function(target, ratio) {
  return this.approach(target, this * ratio);
};
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

@name constrainRotation
@methodOf Number#

@returns This number constrained between -PI and PI.
@type Number
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
Number.prototype.d = function(sides) {
  var sum;
  sum = 0;
  this.times(function() {
    return sum += rand(sides) + 1;
  });
  return sum;
};
/** 
The mathematical circle constant of 1 turn.

@name TAU
@fieldOf Math
*/
Math.TAU = 2 * Math.PI;;
/**
Checks whether an object is an array.
@name isArray
@methodOf Object

@param {Object} object The object to check for array-ness.
@type Boolean
@returns A boolean expressing whether the object is an instance of Array 
*/var __slice = Array.prototype.slice;
Object.isArray = function(object) {
  return Object.prototype.toString.call(object) === '[object Array]';
};
/**
Merges properties from objects into target without overiding.
First come, first served.
@name reverseMerge
@methodOf Object

@param {Object} target The object to merge the properties into.
@type Object
@returns target
*/
Object.reverseMerge = function() {
  var name, object, objects, target, _i, _len;
  target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  for (_i = 0, _len = objects.length; _i < _len; _i++) {
    object = objects[_i];
    for (name in object) {
      if (!target.hasOwnProperty(name)) {
        target[name] = object[name];
      }
    }
  }
  return target;
};
/**
Merges properties from sources into target with overiding.
Last in covers earlier properties.
@name extend
@methodOf Object

@param {Object} target The object to merge the properties into.
@type Object
@returns target
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
};;
(function() {
  /**
  Create a new point with given x and y coordinates. If no arguments are given
  defaults to (0, 0).
  @name Point
  @param {Number} [x]
  @param {Number} [y]
  @constructor
  */  var Point;
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
      Creates a copy of this point.
    
      @name copy
      @methodOf Point#
      @returns A new point with the same x and y value as this point.
      @type Point
      */
    copy: function() {
      return Point(this.x, this.y);
    },
    /**
    Adds a point to this one and returns the new point. You may
    also use a two argument call like <code>point.add(x, y)</code>
    to add x and y values without a second point object.
    @name add
    @methodOf Point#
    
    @param {Point} other The point to add this point to.
    @returns A new point, the sum of both.
    @type Point
    */
    add: function(first, second) {
      return this.copy().add$(first, second);
    },
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
    @name subtract
    @methodOf Point#
    
    @param {Point} other The point to subtract from this point.
    @returns A new point, this - other.
    @type Point
    */
    subtract: function(first, second) {
      return this.copy().subtract$(first, second);
    },
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
    @name scale
    @methodOf Point#
    
    @param {Number} scalar The amount to scale this point by.
    @returns A new point, this * scalar.
    @type Point
    */
    scale: function(scalar) {
      return this.copy().scale$(scalar);
    },
    scale$: function(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },
    /**
    The norm of a vector is the unit vector pointing in the same direction. This method
    treats the point as though it is a vector from the origin to (x, y).
    @name norm
    @methodOf Point#
    
    @returns The unit vector pointing in the same direction as this vector.
    @type Point
    */
    norm: function(length) {
      if (length == null) {
        length = 1.0;
      }
      return this.copy().norm$(length);
    },
    norm$: function(length) {
      var m;
      if (length == null) {
        length = 1.0;
      }
      if (m = this.length()) {
        return this.scale$(length / m);
      } else {
        return this;
      }
    },
    /**
    Floor the x and y values, returning a new point.
    
    @name floor
    @methodOf Point#
    @returns A new point, with x and y values each floored to the largest previous integer.
    @type Point
    */
    floor: function() {
      return this.copy().floor$();
    },
    floor$: function() {
      this.x = this.x.floor();
      this.y = this.y.floor();
      return this;
    },
    /**
    Determine whether this point is equal to another point.
    @name equal
    @methodOf Point#
    
    @param {Point} other The point to check for equality.
    @returns true if the other point has the same x, y coordinates, false otherwise.
    @type Boolean
    */
    equal: function(other) {
      return this.x === other.x && this.y === other.y;
    },
    /**
    Computed the length of this point as though it were a vector from (0,0) to (x,y)
    @name length
    @methodOf Point#
    
    @returns The length of the vector from the origin to this point.
    @type Number
    */
    length: function() {
      return Math.sqrt(this.dot(this));
    },
    /**
    Calculate the magnitude of this Point (Vector).
    @name magnitude
    @methodOf Point#
    
    @returns The magnitude of this point as if it were a vector from (0, 0) -> (x, y).
    @type Number
    */
    magnitude: function() {
      return this.length();
    },
    /**
    Returns the direction in radians of this point from the origin.
    @name direction
    @methodOf Point#
    
    @type Number
    */
    direction: function() {
      return Math.atan2(this.y, this.x);
    },
    /**
    Calculate the dot product of this point and another point (Vector).
    @name dot
    @methodOf Point#
    
    @param {Point} other The point to dot with this point.
    @returns The dot product of this point dot other as a scalar value.
    @type Number
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
    @returns The cross product of this point with the other point as scalar value.
    @type Number
    */
    cross: function(other) {
      return this.x * other.y - other.x * this.y;
    },
    /**
    Computed the Euclidean between this point and another point.
    @name distance
    @methodOf Point#
    
    @param {Point} other The point to compute the distance to.
    @returns The distance between this point and another point.
    @type Number
    */
    distance: function(other) {
      return Point.distance(this, other);
    }
    /**
    @name distance
    @methodOf Point
    @param {Point} p1
    @param {Point} p2
    @type Number
    @returns The Euclidean distance between two points.
    */
  };
  Point.distance = function(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };
  /**
  Construct a point on the unit circle for the given angle.
  
  @name fromAngle
  @methodOf Point
  
  @param {Number} angle The angle in radians
  @type Point
  @returns The point on the unit circle.
  */
  Point.fromAngle = function(angle) {
    return Point(Math.cos(angle), Math.sin(angle));
  };
  /**
  If you have two dudes, one standing at point p1, and the other
  standing at point p2, then this method will return the direction
  that the dude standing at p1 will need to face to look at p2.
  
  @name direction
  @methodOf Point
  
  @param {Point} p1 The starting point.
  @param {Point} p2 The ending point.
  @type Number
  @returns The direction from p1 to p2 in radians.
  */
  Point.direction = function(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  };
  /**
  @name ZERO
  @fieldOf Point
  
  @type Point
  */
  Point.ZERO = Point();
  if (Object.freeze) {
    Object.freeze(Point.ZERO);
  }
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Point"] = Point;
})();;
(function() {
  /**
  @name Random
  @namespace Some useful methods for generating random things.
  */  (typeof exports !== "undefined" && exports !== null ? exports : this)["Random"] = {
    /**
      Returns a random angle, uniformly distributed, between 0 and 2pi.
    
      @name angle
      @methodOf Random
      @type Number
      */
    angle: function() {
      return rand() * Math.TAU;
    },
    color: function() {
      return Color.random();
    },
    often: function() {
      return rand(3);
    },
    sometimes: function() {
      return !rand(3);
    }
    /**
    Returns random integers from [0, n) if n is given.
    Otherwise returns random float between 0 and 1.
    
    @name rand
    @methodOf window
    
    @param {Number} n
    @type Number
    */
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["rand"] = function(n) {
    if (n) {
      return Math.floor(n * Math.random());
    } else {
      return Math.random();
    }
  };
})();;
/**
Returns true if this string only contains whitespace characters.

@name blank
@methodOf String#

@returns Whether or not this string is blank.
@type Boolean
*/String.prototype.blank = function() {
  return /^\s*$/.test(this);
};
/**
Returns a new string that is a camelCase version.

@name camelize
@methodOf String#
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

@name capitalize
@methodOf String#
*/
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
};
/**
Return the class or constant named in this string.

@name constantize
@methodOf String#

@returns The class or constant named in this string.
@type Object
*/
String.prototype.constantize = function() {
  if (this.match(/[A-Z][A-Za-z0-9]*/)) {
    eval("var that = " + this);
    return that;
  } else {
    throw "String#constantize: '" + this + "' is not a valid constant name.";
  }
};
/**
Returns a new string that is a more human readable version.

@name humanize
@methodOf String#
*/
String.prototype.humanize = function() {
  return this.replace(/_id$/, "").replace(/_/g, " ").capitalize();
};
/**
Returns true.

@name isString
@methodOf String#
@type Boolean
@returns true
*/
String.prototype.isString = function() {
  return true;
};
/**
Parse this string as though it is JSON and return the object it represents. If it
is not valid JSON returns the string itself.

@name parse
@methodOf String#

@returns Returns an object from the JSON this string contains. If it
is not valid JSON returns the string itself.
@type Object
*/
String.prototype.parse = function() {
  try {
    return JSON.parse(this.toString());
  } catch (e) {
    return this.toString();
  }
};
/**
Returns a new string in Title Case.
@name titleize
@methodOf String#
*/
String.prototype.titleize = function() {
  return this.split(/[- ]/).map(function(word) {
    return word.capitalize();
  }).join(' ');
};
/**
Underscore a word, changing camelCased with under_scored.
@name underscore
@methodOf String#
*/
String.prototype.underscore = function() {
  return this.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
};
/**
Assumes the string is something like a file name and returns the 
contents of the string without the extension.

"neat.png".witouthExtension() => "neat"

@name withoutExtension
@methodOf String#
*/
String.prototype.withoutExtension = function() {
  return this.replace(/\.[^\.]*$/, '');
};;
/**
Non-standard



@name toSource
@methodOf Boolean#
*/
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
Non-standard



@name toSource
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
@param index  An integer between 0 and 1 less than the length of the string.
@name charAt
@methodOf String#
*/
/**
Returns the numeric Unicode value of the character at the given index (except
for unicode codepoints > 0x10000).


@param index  An integer greater than 0 and less than the length of the string;
if it is not a number, it defaults to 0.
@name charCodeAt
@methodOf String#
*/
/**
Combines the text of two or more strings and returns a new string.

<code><em>string</em>.concat(<em>string2</em>, <em>string3</em>[, ..., <em>stringN</em>])</code>
@param string2...stringN  Strings to concatenate to this string.
@name concat
@methodOf String#
*/
/**
Returns the index within the calling String object of the first occurrence of
the specified value, starting the search at fromIndex,
returns -1 if the value is not found.

<code><em>string</em>.indexOf(<em>searchValue</em>[, <em>fromIndex</em>]</code>
@param searchValue  A string representing the value to search for.
@param fromIndex  The location within the calling string to start the search
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
@param searchValue  A string representing the value to search for.
@param fromIndex  The location within the calling string to start the search
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
Non-standard



@name quote
@methodOf String#
*/
/**
Returns a new string with some or all matches of a pattern replaced by a
replacement.  The pattern can be a string or a RegExp, and the replacement can
be a string or a function to be called for each match.

<code><em>str</em>.replace(<em>regexp|substr</em>, <em>newSubStr|function[</em>, </code><code><em>flags]</em>);</code>
@param regexp  A RegExp object. The match is replaced by the return value of
parameter #2.
@param substr  A String that is to be replaced by newSubStr.
@param newSubStr  The String that replaces the substring received from parameter
#1. A number of special replacement patterns are supported; see the "Specifying
a string as a parameter" section below.
@param function  A function to be invoked to create the new substring (to put in
place of the substring received from parameter #1). The arguments supplied to
this function are described in the "Specifying a function as a parameter"
section below.
@param flags gimy 

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
@param regexp  A  regular expression object. If a non-RegExp object obj is
passed, it is implicitly converted to a RegExp by using new RegExp(obj).
@name search
@methodOf String#
*/
/**
Extracts a section of a string and returns a new string.

<code><em>string</em>.slice(<em>beginslice</em>[, <em>endSlice</em>])</code>
@param beginSlice  The zero-based index at which to begin extraction.
@param endSlice  The zero-based index at which to end extraction. If omitted,
slice extracts to the end of the string.
@name slice
@methodOf String#
*/
/**
Splits a String object into an array of strings by separating the string into
substrings.

<code><em>string</em>.split([<em>separator</em>][, <em>limit</em>])</code>
@param separator  Specifies the character to use for separating the string. The
separator is treated as a string or a regular expression. If separator is
omitted, the array returned contains one element consisting of the entire
string.
@param limit  Integer specifying a limit on the number of splits to be found.
@name split
@methodOf String#
*/
/**
Returns the characters in a string beginning at the specified location through
the specified number of characters.

<code><em>string</em>.substr(<em>start</em>[, <em>length</em>])</code>
@param start  Location at which to begin extracting characters.
@param length  The number of characters to extract.
@name substr
@methodOf String#
*/
/**
Returns a subset of a string between one index and another, or through the end
of the string.

<code><em>string</em>.substring(<em>indexA</em>[, <em>indexB</em>])</code>
@param indexA  An integer between 0 and one less than the length of the string.
@param indexB  (optional) An integer between 0 and the length of the string.
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
Non-standard



@name toSource
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
Non-standard



@name trimLeft
@methodOf String#
*/
/**
Non-standard



@name trimRight
@methodOf String#
*/
/**
Returns the primitive value of a String object.

<code><em>string</em>.valueOf()</code>

@name valueOf
@methodOf String#
*/
/**
Non-standard



@name anchor
@methodOf String#
*/
/**
Non-standard



@name big
@methodOf String#
*/
/**
Non-standard

<code>BLINK</code>

@name blink
@methodOf String#
*/
/**
Non-standard



@name bold
@methodOf String#
*/
/**
Non-standard



@name fixed
@methodOf String#
*/
/**
Non-standard

<code>&lt;FONT COLOR="<i>color</i>"&gt;</code>

@name fontcolor
@methodOf String#
*/
/**
Non-standard

<code>&lt;FONT SIZE="<i>size</i>"&gt;</code>

@name fontsize
@methodOf String#
*/
/**
Non-standard



@name italics
@methodOf String#
*/
/**
Non-standard



@name link
@methodOf String#
*/
/**
Non-standard



@name small
@methodOf String#
*/
/**
Non-standard



@name strike
@methodOf String#
*/
/**
Non-standard



@name sub
@methodOf String#
*/
/**
Non-standard



@name sup
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
Reverses an array in place.  The first array element becomes the last and the
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
@param compareFunction  Specifies a function that defines the sort order. If
omitted, the array is sorted lexicographically (in dictionary order) according
to the string conversion of each element.
@name sort
@methodOf Array#
*/
/**
Changes the content of an array, adding new elements while removing old
elements.

<code><em>array</em>.splice(<em>index</em>, <em>howMany</em>[, <em>element1</em>[, ...[, <em>elementN</em>]]])</code>
@param index  Index at which to start changing the array. If negative, will
begin that many elements from the end.
@param howMany  An integer indicating the number of old array elements to
remove. If howMany is 0, no elements are removed. In this case, you should
specify at least one new element. If no howMany parameter is specified (second
syntax above, which is a SpiderMonkey extension), all elements after index are
removed.
@param element1, ..., elementN  The elements to add to the array. If you don't
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
@param valueN  Arrays and/or values to concatenate to the resulting array.
@name concat
@methodOf Array#
*/
/**
Joins all elements of an array into a string.

<code><em>array</em>.join(<em>separator</em>)</code>
@param separator  Specifies a string to separate each element of the array. The
separator is converted to a string if necessary. If omitted, the array elements
are separated with a comma.
@name join
@methodOf Array#
*/
/**
Returns a one-level deep copy of a portion of an array.

<code><em>array</em>.slice(<em>begin</em>[, <em>end</em>])</code>
@param begin  Zero-based index at which to begin extraction.As a negative index,
start indicates an offset from the end of the sequence. slice(-2) extracts the
second-to-last element and the last element in the sequence.
@param end  Zero-based index at which to end extraction. slice extracts up to
but not including end.slice(1,4) extracts the second element through the fourth
element (elements indexed 1, 2, and 3).As a negative index, end indicates an
offset from the end of the sequence. slice(2,-1) extracts the third element
through the second-to-last element in the sequence.If end is omitted, slice
extracts to the end of the sequence.
@name slice
@methodOf Array#
*/
/**
Non-standard



@name toSource
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
@param searchElement fromIndex  Element to locate in the array.The index at
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
@param searchElement fromIndex  Element to locate in the array.The index at
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
@param callback thisObject  Function to test each element of the array.Object to
use as this when executing callback.
@name filter
@methodOf Array#
*/
/**
Executes a provided function once per array element.

<code><em>array</em>.forEach(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to execute for each element.Object to use
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
@param callback thisObject  Function to test for each element.Object to use as
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
@param callback initialValue  Function to execute on each value in the
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
@param thisArg  Determines the value of this inside fun. If thisArg is null or
undefined, this will be the global object. Otherwise, this will be equal to
Object(thisArg) (which is thisArg if thisArg is already an object, or a String,
Boolean, or Number if thisArg is a primitive value of the corresponding type).
Therefore, it is always true that typeof this == "object" when the function
executes.
@param argsArray  An argument array for the object, specifying the arguments
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
the target function when the bound function is called.  The value is ignored if
the bound function is constructed using the new operator.Arguments to prepend to
arguments provided to the bound function when invoking the target function.
@name bind
@methodOf Function#
*/
/**
Calls a function with a given this value and arguments provided individually.

<code><em>fun</em>.call(<em>thisArg</em>[, <em>arg1</em>[, <em>arg2</em>[, ...]]])</code>
@param thisArg  Determines the value of this inside fun. If thisArg is null or
undefined, this will be the global object. Otherwise, this will be equal to
Object(thisArg) (which is thisArg if thisArg is already an object, or a String,
Boolean, or Number if thisArg is a primitive value of the corresponding type).
Therefore, it is always true that typeof this == "object" when the function
executes.
@param arg1, arg2, ...  Arguments for the object.
@name call
@methodOf Function#
*/
/**
Non-standard



@name toSource
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


@param regexp  The name of the regular expression. It can be a variable name or
a literal.
@param str  The string against which to match the regular expression.
@name exec
@methodOf RegExp#
*/
/**
Executes the search for a match between a regular expression and a specified
string. Returns true or false.

<code> <em>regexp</em>.test([<em>str</em>]) </code>
@param regexp  The name of the regular expression. It can be a variable name or
a literal.
@param str  The string against which to match the regular expression.
@name test
@methodOf RegExp#
*/
/**
Non-standard



@name toSource
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
Deprecated



@name getYear
@methodOf Date#
*/
/**
Sets the day of the month for a specified date according to local time.

<code> setDate(<em>dayValue</em>) </code>
@param dayValue  An integer from 1 to 31, representing the day of the month.
@name setDate
@methodOf Date#
*/
/**
Sets the full year for a specified date according to local time.

<code>
setFullYear(<i>yearValue</i>[, <i>monthValue</i>[, <em>dayValue</em>]])
</code>
@param  yearValue   An integer specifying the numeric value of the year, for
example, 1995.
@param  monthValue   An integer between 0 and 11 representing the months January
through December.
@param  dayValue   An integer between 1 and 31 representing the day of the
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
@param  hoursValue   An integer between 0 and 23, representing the hour. 
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
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
@param  millisecondsValue   A number between 0 and 999, representing the
milliseconds.
@name setMilliseconds
@methodOf Date#
*/
/**
Sets the minutes for a specified date according to local time.

<code>
setMinutes(<i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]])
</code>
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
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
@param  monthValue   An integer between 0 and 11 (representing the months
January through December).
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setMonth
@methodOf Date#
*/
/**
Sets the seconds for a specified date according to local time.

<code>
setSeconds(<i>secondsValue</i>[, <em>msValue</em>])
</code>
@param  secondsValue   An integer between 0 and 59. 
@param  msValue   A number between 0 and 999, representing the milliseconds.
@name setSeconds
@methodOf Date#
*/
/**
Sets the Date object to the time represented by a number of milliseconds since
January 1, 1970, 00:00:00 UTC.

<code>
setTime(<i>timeValue</i>)
</code>
@param  timeValue   An integer representing the number of milliseconds since 1
January 1970, 00:00:00 UTC.
@name setTime
@methodOf Date#
*/
/**
Sets the day of the month for a specified date according to universal time.

<code>
setUTCDate(<i>dayValue</i>)
</code>
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setUTCDate
@methodOf Date#
*/
/**
Sets the full year for a specified date according to universal time.

<code>
setUTCFullYear(<i>yearValue</i>[, <i>monthValue</i>[, <em>dayValue</em>]])
</code>
@param  yearValue   An integer specifying the numeric value of the year, for
example, 1995.
@param  monthValue   An integer between 0 and 11 representing the months January
through December.
@param  dayValue   An integer between 1 and 31 representing the day of the
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
@param  hoursValue   An integer between 0 and 23, representing the hour. 
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
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
@param  millisecondsValue   A number between 0 and 999, representing the
milliseconds.
@name setUTCMilliseconds
@methodOf Date#
*/
/**
Sets the minutes for a specified date according to universal time.

<code>
setUTCMinutes(<i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]])
</code>
@param  minutesValue   An integer between 0 and 59, representing the minutes. 
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
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
@param  monthValue   An integer between 0 and 11, representing the months
January through December.
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setUTCMonth
@methodOf Date#
*/
/**
Sets the seconds for a specified date according to universal time.

<code>
setUTCSeconds(<i>secondsValue</i>[, <em>msValue</em>])
</code>
@param  secondsValue   An integer between 0 and 59. 
@param  msValue   A number between 0 and 999, representing the milliseconds.
@name setUTCSeconds
@methodOf Date#
*/
/**
Deprecated



@name setYear
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
Deprecated



@name toGMTString
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
Non-standard



@name toLocaleFormat
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
Non-standard



@name toSource
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
/**
Returns the primitive value of a Date object.

<code>
valueOf()
</code>

@name valueOf
@methodOf Date#
*/;
/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/**
Generate a random uuid.

USAGE: Math.uuid(length, radix)

EXAMPLES:
  // No arguments  - returns RFC4122, version 4 ID
  Math.uuid()
  "92329D39-6F5C-4520-ABFC-AAB64544E172"

  // One argument - returns ID of the specified length
  Math.uuid(15)     // 15 character ID (default base=62)
  "VcydxgltxrVZSTV"

  // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
  Math.uuid(8, 2)  // 8 character ID (base=2)
  "01001010"
  Math.uuid(8, 10) // 8 character ID (base=10)
  "47473046"
  Math.uuid(8, 16) // 8 character ID (base=16)
  "098F4D35"
  
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
/**
The Bounded module is used to provide basic data about the
location and dimensions of the including object

Bounded module
@name Bounded
@module
@constructor

@param {Object} I Instance variables
@param {Object} self Reference to including object
*/var Bounded;
Bounded = function(I, self) {
  I || (I = {});
  Object.reverseMerge(I, {
    x: 0,
    y: 0,
    width: 8,
    height: 8,
    collisionMargin: Point(0, 0)
  });
  return {
    /**
    The position of this game object, the top left point in the local transform.
    
    @returns The position of this object
    @type Point
    */
    position: function() {
      return Point(I.x, I.y);
    },
    collides: function(bounds) {
      return Collision.rectangular(I, bounds);
    },
    /**
    This returns a modified bounds based on the collision margin.
    The area of the bounds is reduced if collision margin is positive
    and increased if collision margin is negative.
    
    @name collisionBounds
    @methodOf Bounded#
    
    @param {number} xOffset the amount to shift the x position 
    @param {number} yOffset the amount to shift the y position
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
    The bounds method returns infomation about the location 
    of the object and its dimensions with optional offsets
    
    @name bounds
    @methodOf Bounded#
    
    @param {number} xOffset the amount to shift the x position 
    @param {number} yOffset the amount to shift the y position
    */
    bounds: function(xOffset, yOffset) {
      return {
        x: I.x + (xOffset || 0),
        y: I.y + (yOffset || 0),
        width: I.width,
        height: I.height
      };
    },
    /**
    The centeredBounds method returns infomation about the center
    of the object along with the midpoint of the width and height
    
    @name centeredBounds
    @methodOf Bounded#
    */
    centeredBounds: function() {
      return {
        x: I.x + I.width / 2,
        y: I.y + I.height / 2,
        xw: I.width / 2,
        yw: I.height / 2
      };
    },
    /**
    The center method returns the {@link Point} that is
    the center of the object
    
    @name center
    @methodOf Bounded#
    */
    center: function() {
      return Point(I.x + I.width / 2, I.y + I.height / 2);
    },
    /**
    Return the circular bounds of the object. The circle is
    centered at the midpoint of the object.
    
    @name circle
    @methodOf Bounded#
    */
    circle: function() {
      var circle;
      circle = self.center();
      circle.radius = I.radius || I.width / 2 || I.height / 2;
      return circle;
    }
  };
};;
/**
Collision holds many useful methods for checking geometric overlap of various objects.

@name Collision
@namespace
*/var Collision;
Collision = {
  /**
    Takes two bounds objects and returns true if they collide (overlap), false otherwise.
    Bounds objects have x, y, width and height properties.
  
    @name rectangular
    @methodOf Collision
  
    @param a
    @param b
    */
  rectangular: function(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  },
  /**
  Takes two circle objects and returns true if they collide (overlap), false otherwise.
  Circle objects have x, y, and radius.
  
  @name circular
  @methodOf Collision
  
  @param a
  @param b
  */
  circular: function(a, b) {
    var dx, dy, r;
    r = a.radius + b.radius;
    dx = b.x - a.x;
    dy = b.y - a.y;
    return r * r >= dx * dx + dy * dy;
  },
  rayCircle: function(source, direction, target) {
    var dt, hit, intersection, intersectionToTarget, intersectionToTargetLength, laserToTarget, projection, projectionLength, radius;
    radius = target.radius();
    target = target.position();
    laserToTarget = target.subtract(source);
    projectionLength = direction.dot(laserToTarget);
    if (projectionLength < 0) {
      return false;
    }
    projection = direction.scale(projectionLength);
    intersection = source.add(projection);
    intersectionToTarget = target.subtract(intersection);
    intersectionToTargetLength = intersectionToTarget.length();
    if (intersectionToTargetLength < radius) {
      hit = true;
    }
    if (hit) {
      dt = Math.sqrt(radius * radius - intersectionToTargetLength * intersectionToTargetLength);
      return hit = direction.scale(projectionLength - dt).add(source);
    }
  },
  rayRectangle: function(source, direction, target) {
    var areaPQ0, areaPQ1, hit, p0, p1, t, tX, tY, xval, xw, yval, yw, _ref, _ref2;
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
      if (areaPQ0 * areaPQ1 < 0) {
        return hit = direction.scale(t).add(source);
      }
    }
  }
};;
/*
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

@name Drawable
@module
@constructor

@param {Object} I Instance variables
@param {Object} self Reference to including object
*/
/**
Triggered every time the object should be drawn. A canvas is passed as
the first argument.

@name draw
@methodOf Drawable#
@event
*/var Drawable;
Drawable = function(I, self) {
  var _ref;
  I || (I = {});
  Object.reverseMerge(I, {
    color: "#196",
    hflip: false,
    vflip: false,
    spriteName: null,
    zIndex: 0
  });
  if ((_ref = I.sprite) != null ? typeof _ref.isString === "function" ? _ref.isString() : void 0 : void 0) {
    I.sprite = Sprite.loadByName(I.sprite, function(sprite) {
      I.width = sprite.width;
      return I.height = sprite.height;
    });
  } else if (I.spriteName) {
    I.sprite = Sprite.loadByName(I.spriteName, function(sprite) {
      I.width = sprite.width;
      return I.height = sprite.height;
    });
  }
  self.bind('draw', function(canvas) {
    if (I.sprite) {
      if (I.sprite.draw != null) {
        return I.sprite.draw(canvas, 0, 0);
      } else {
        return typeof warn === "function" ? warn("Sprite has no draw method!") : void 0;
      }
    } else {
      canvas.fillColor(I.color);
      return canvas.fillRect(0, 0, I.width, I.height);
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
        return self.trigger('draw', canvas);
      });
      self.trigger('afterTransform', canvas);
      return self;
    },
    /**
    Returns the current transform, with translation, rotation, and flipping applied.
    
    @name transform
    @methodOf Drawable#
    @type Matrix
    */
    transform: function() {
      var centerX, centerY, transform;
      centerX = (I.x + I.width / 2).floor();
      centerY = (I.y + I.height / 2).floor();
      transform = Matrix.translation(centerX, centerY);
      if (I.rotation) {
        transform = transform.concat(Matrix.rotation(I.rotation));
      }
      if (I.hflip) {
        transform = transform.concat(Matrix.HORIZONTAL_FLIP);
      }
      if (I.vflip) {
        transform = transform.concat(Matrix.VERTICAL_FLIP);
      }
      transform = transform.concat(Matrix.translation(-I.width / 2, -I.height / 2));
      if (I.spriteOffset) {
        transform = transform.concat(Matrix.translation(I.spriteOffset.x, I.spriteOffset.y));
      }
      return transform;
    }
  };
};;
/**
The Durable module deactives GameObjects after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

@name Durable
@module
@constructor

@param {Object} I Instance variables
*/var Durable;
Durable = function(I) {
  Object.reverseMerge(I, {
    duration: -1
  });
  return {
    before: {
      update: function() {
        if (I.duration !== -1 && I.age >= I.duration) {
          return I.active = false;
        }
      }
    }
  };
};;
var Emitter;
Emitter = function(I) {
  var self;
  self = GameObject(I);
  return self.include(Emitterable);
};;
var Emitterable;
Emitterable = function(I, self) {
  var n, particles;
  I || (I = {});
  Object.reverseMerge(I, {
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
          var center, key, particleProperties, value, _ref;
          if (n < I.particleCount && rand() < I.emissionRate) {
            center = self.center();
            particleProperties = Object.reverseMerge({
              x: center.x,
              y: center.y
            }, I.particleData);
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
(function() {
  var Engine, defaults;
  defaults = {
    FPS: 30,
    age: 0,
    ambientLight: 1,
    backgroundColor: "#00010D",
    cameraTransform: Matrix.IDENTITY,
    clear: false,
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
  
  The current camera transform is applied.
  
  @name beforeDraw
  @methodOf Engine#
  @event
  */
  /**
  Called after the engine draws on the canvas.
  
  The current camera transform is applied.
  
  @name draw
  @methodOf Engine#
  @event
  */
  /**
  Called after the engine draws.
  
  The current camera transform is not applied. This is great for
  adding overlays.
  
  @name overlay
  @methodOf Engine#
  @event
  */
  Engine = function(I) {
    var animLoop, defaultModules, draw, frameAdvance, lastStepTime, modules, queuedObjects, running, self, startTime, step, update;
    I || (I = {});
    Object.reverseMerge(I, {
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
      if (typeof updateKeys === "function") {
        updateKeys();
      }
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
      if (I.clear) {
        I.canvas.clear();
      } else if (I.backgroundColor) {
        I.canvas.fill(I.backgroundColor);
      }
      I.canvas.withTransform(I.cameraTransform, function(canvas) {
        var drawObjects;
        self.trigger("beforeDraw", canvas);
        if (I.zSort) {
          drawObjects = I.objects.copy().sort(function(a, b) {
            return a.I.zIndex - b.I.zIndex;
          });
        } else {
          drawObjects = I.objects;
        }
        drawObjects.invoke("draw", canvas);
        return self.trigger("draw", I.canvas);
      });
      return self.trigger("overlay", I.canvas);
    };
    step = function() {
      if (!I.paused || frameAdvance) {
        update();
        I.age += 1;
      }
      return draw();
    };
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
      },
      update: update,
      draw: draw
    });
    self.attrAccessor("ambientLight", "backgroundColor", "cameraTransform", "clear");
    self.include(Bindable);
    defaultModules = ["SaveState", "Selector", "Collision"];
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
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Engine"] = Engine;
})();;
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
        return Object.extend({}, object.I);
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
          return self.add(Object.extend({}, objectData));
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
      return Object.extend(results, instanceMethods);
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
  Object.reverseMerge(I, {
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
  Object.reverseMerge(I, {
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
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["ResourceLoader"] = ResourceLoader;
})();;
var Rotatable;
Rotatable = function(I) {
  I || (I = {});
  Object.reverseMerge(I, {
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
/**
The Sprite class provides a way to load images for use in games.

By default, images are loaded asynchronously. A proxy object is 
returned immediately but though it has a draw method it will not
draw anything to the screen until the image has been loaded.

@name Sprite
@constructor
*/(function() {
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
      
      @param canvas
      @param x
      @param y
      */
      draw: function(canvas, x, y) {
        return canvas.drawImage(image, sourceX, sourceY, width, height, x, y, width, height);
      },
      fill: function(canvas, x, y, width, height, repeat) {
        var pattern;
        if (repeat == null) {
          repeat = "repeat";
        }
        pattern = canvas.createPattern(image, repeat);
        canvas.fillColor(pattern);
        return canvas.fillRect(x, y, width, height);
      },
      width: width,
      height: height
    };
  };
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
  Sprite.load = function(url, loadedCallback) {
    var img, proxy;
    img = new Image();
    proxy = LoaderProxy();
    img.onload = function() {
      var tile;
      tile = Sprite(this);
      Object.extend(proxy, tile);
      if (loadedCallback) {
        return loadedCallback(proxy);
      }
    };
    img.src = url;
    return proxy;
  };
  /**
  Loads a sprite with the given pixie id.
  
  @name fromPixieId
  @methodOf Sprite
  
  @param id
  @param [callback]
  
  @type Sprite
  */
  Sprite.fromPixieId = function(id, callback) {
    return Sprite.load("http://pixieengine.com/s3/sprites/" + id + "/original.png", callback);
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
  Sprite.EMPTY = Sprite.NONE = LoaderProxy();
  /**
  Loads a sprite from a given url.
  
  @name fromURL
  @methodOf Sprite
  
  @param {String} url
  @param [callback]
  
  @type Sprite
  */
  Sprite.fromURL = Sprite.load;
  /**
  Loads a sprite with the given name.
  
  @name loadByName
  @methodOf Sprite
  
  @param {String} name
  @param [callback]
  
  @type Sprite
  */
  Sprite.loadByName = function(name, callback) {
    return Sprite.load(ResourceLoader.urlFor("images", name), callback);
  };
  return (typeof exports !== "undefined" && exports !== null ? exports : this)["Sprite"] = Sprite;
})();;
;
