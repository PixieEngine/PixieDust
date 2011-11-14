GameState.Camera = (I, self) ->
  cameras = [Camera()]

  self.bind 'afterUpdate', ->
    self.cameras().each (camera) ->
      camera.trigger('afterUpdate')

  self.bind 'overlay', (canvas) ->
    self.cameras().each (camera) ->  
      camera.trigger 'overlay', canvas

  return {
    addCamera: ->
      ;
  }
