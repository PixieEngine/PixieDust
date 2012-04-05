module "Camera"

MockCanvas = ->
  clear: ->
  context: ->
    beginPath: ->
    clip: ->
    rect: ->
  drawRect: ->
  fill: ->
  withTransform: (t, fn) ->
    fn(@)
  clip: ->

test "create", ->
  ok Camera()

test "overlay", 1, ->
  object = GameObject()
  object.bind 'overlay', ->
    ok true

  camera = Camera()

  camera.trigger 'overlay', canvas, [object]
# Clear out the module
module()
