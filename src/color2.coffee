( ->
  Color2 = (args...) ->
    __proto__: Color::

    r: args[0] || 0
    g: args[1] || 0
    b: args[2] || 0
    a: args[3] || 0

  Color:: =
    aMethod: ->
      true

  (exports ? this)["Color2"] = Color2
)()