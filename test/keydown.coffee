module "keydown"

test "keydown", ->
  event = $.Event("keydown")
  event.which = 32

  $(document).trigger event

  equal(keydown.space, true, "Space should be down after a keydown event")

  event = $.Event("keyup")
  event.which = 32

  $(document).trigger event

  equal(keydown.space, false, "Space should be up after a keyup event")

module()

