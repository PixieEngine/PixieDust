GameState.Camera = (I, self) ->
  cameras = [Camera()]

  self.bind 'afterUpdate', ->
    self.cameras().each (camera) ->
      camera.trigger('afterUpdate')

  self.bind 'draw', (canvas) ->
    self.cameras().invoke 'trigger', 'draw', canvas, self.objects()

  self.bind 'overlay', (canvas) ->
    self.cameras().each (camera) ->  
      camera.trigger 'overlay', canvas

  return {
    addCamera: (data) ->
      cameras.push(Camera(data))
    ###*
    Returns the array of camera objects.

    @name cameras
    @methodOf Engine#
    @returns {Array}
    ###
    cameras: ->
      return cameras
  }
