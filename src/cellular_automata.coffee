CellularAutomata = (I) ->
  I ||= {}
  
  $.reverseMerge I,
    cellUpdate: (row, col, value, neighbors) ->
      neighborCounts = neighbors.sum()
      +((value + neighborCounts) >= 5)
    initializeCell: (row, col) ->
      rand() < 0.45
    outsideValue: (row, col) ->
      1
    width: 32
    height: 32
    
  currentState = []
  nextState = []
  
  get = (row, col) ->
    if (0 <= row < I.height) && (0 <= col < I.width)
      return currentState[row][col]
    else
      return I.outsideValue(row, col)
  
  neighbors = (row, col) ->
    return [
      get(row - 1, col - 1)
      get(row - 1, col)
      get(row - 1, col + 1)
      get(row, col - 1)
      get(row, col + 1)
      get(row + 1, col - 1)
      get(row + 1, col)
      get(row + 1, col + 1)
    ]
    
  I.height.times (row) ->
    currentState[row] = []
    I.width.times (col) ->
      currentState[row][col] = I.initializeCell(row, col)

  self =
    data: () ->
      currentState
      
    get: (row, col) ->
      currentState[row][col]
      
    update: (updateFn) ->
      I.height.times (row) ->
        nextState[row] = currentState[row].map (value, col) ->
          if updateFn
            updateFn(row, col, value, neighbors(row, col))
          else
            I.cellUpdate(row, col, value, neighbors(row, col))
      currentState = nextState
      nextState = []
          
      
  return self

