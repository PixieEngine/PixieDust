module "ResourceLoader"

test ".urlFor", ->
  equals ResourceLoader.urlFor("images", "guy"), "#{BASE_URL}/images/guy.png?#{MTIME}"

module undefined

