( ->
  Color2 = (args...) ->
    __proto__: Color::

    switch args.length
      when 0
        parsedColor = [0, 0, 0, 1]

    r: parsedColor[0]
    g: parsedColor[1] 
    b: parsedColor[2] 
    a: parsedColor[3] 

  Color:: =
    aMethod: ->
      true

  (exports ? this)["Color2"] = Color2
)()