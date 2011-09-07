###*
  @name ResourceLoader
  @namespace

  Helps access the assets in your game.
###
(->
  typeTable =
    images: "png"

  ResourceLoader =
    ###*
    @name urlFor
    @methodOf ResourceLoader#
    @param {String} directory The directory your file is in.
    @param {String} name The name of the file.
    @returns {String} The full url of your asset

    ###
    urlFor: (directory, name) ->
      directory = App?.directories?[directory] || directory

      type = typeTable[directory]

      "#{BASE_URL}/#{directory}/#{name}.#{type}?#{MTIME}"

  (exports ? this)["ResourceLoader"] = ResourceLoader
)()
