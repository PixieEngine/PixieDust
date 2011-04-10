Engine.SaveState = (I, self) ->
  savedState = null

  #TODO      
  rewind: () ->

  saveState: () ->
    savedState = I.objects.map (object) ->
      $.extend({}, object.I)

  loadState: (newState) ->
    if newState ||= savedState
      I.objects.invoke "trigger", "remove"
      I.objects = []

      newState.each (objectData) ->
        self.add $.extend({}, objectData)

  reload: () ->
    oldObjects = I.objects
    I.objects = []

    oldObjects.each (object) ->
      object.trigger "remove"

      self.add object.I

