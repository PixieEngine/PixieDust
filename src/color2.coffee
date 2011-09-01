( ->
  Color2 = (args...) ->
    __proto__: Color::

  Color:: =
    aMethod: ->
      true

  (exports ? this)["Color2"] = Color2
)()