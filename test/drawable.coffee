module "Drawable"

test "should apply hflip and vflip transformations", ->
  window.canvas = $("<canvas width=10 height=10} />").powerCanvas()

  horizontal_obj = GameObject
    hflip: true

  horizontal_obj.draw(canvas)

  equal horizontal_obj.I.transform.a, Matrix.HORIZONTAL_FLIP.a
  equal horizontal_obj.I.transform.b, Matrix.HORIZONTAL_FLIP.b
  equal horizontal_obj.I.transform.c, Matrix.HORIZONTAL_FLIP.c
  equal horizontal_obj.I.transform.d, Matrix.HORIZONTAL_FLIP.d

  vertical_obj = GameObject
    vflip: true

  vertical_obj.draw(canvas)

  equal vertical_obj.I.transform.a, Matrix.VERTICAL_FLIP.a
  equal vertical_obj.I.transform.b, Matrix.VERTICAL_FLIP.b
  equal vertical_obj.I.transform.c, Matrix.VERTICAL_FLIP.c
  equal vertical_obj.I.transform.d, Matrix.VERTICAL_FLIP.d

module()