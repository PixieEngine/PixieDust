Engine.SaveState = (I, self) ->
  savedState = null

  #TODO      
  rewind: () ->
    
  saveState: () ->
    savedState = I.objects.map (object) ->
      $.extend({}, object.I)

  loadState: (newState) ->
    if newState ||= savedState
      I.objects = newState.map (objectData) ->
        GameObject.construct $.extend({}, objectData)

  reload: () ->
    I.objects = I.objects.map (object) ->
      GameObject.construct object.I

