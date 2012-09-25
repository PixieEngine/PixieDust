Camera.ZSort = (I, self) ->
  Object.reverseMerge I,
    zSort: true

  self.objectFilterChain (objects) ->
    if I.zSort
      objects.sort (a, b) ->
        a.I.zIndex - b.I.zIndex

    objects

  return {}

