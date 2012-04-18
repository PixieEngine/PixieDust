Distance = (I={}, self) ->
  distance: (otherObj) ->
    Point.distance(self.position(), otherObj.position())