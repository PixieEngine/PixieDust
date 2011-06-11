$ ->
  ###*
  The global keydown property lets your query the status of keys.

  <pre>
  # Examples:

  if keydown.left
    moveLeft()

  if keydown.a or keydown.space
    attack()

  if keydown.return
    confirm()

  if keydown.esc
    cancel()

  </pre>

  @name keydown
  @namespace
  ###
  window.keydown = {}
  window.justPressed = {}

  prevKeysDown = {}

  keyName = (event) ->
    jQuery.hotkeys.specialKeys[event.which] || 
    String.fromCharCode(event.which).toLowerCase()

  $(document).bind "keydown", (event) ->
    key = keyName(event)
    keydown[key] = true

  $(document).bind "keyup", (event) ->
    key = keyName(event)
    keydown[key] = false

  window.updateKeys = () ->
    window.justPressed = {}

    for key, value of keydown
      justPressed[key] = value unless prevKeysDown[key]

    prevKeysDown = {}
    for key, value of keydown  
      prevKeysDown[key] = value

