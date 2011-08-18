(->
  typeTable =
    images: "png"

  ResourceLoader =
    urlFor: (directory, name) ->
      directory = App?.directories?[directory] || directory

      type = typeTable[directory]

      "#{BASE_URL}/#{directory}/#{name}.#{type}?#{MTIME}"

  (exports ? this)["ResourceLoader"] = ResourceLoader
)()
