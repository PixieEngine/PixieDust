require "pixie-dust/version"

# Sneaky require for Rails engine environment
if defined? ::Rails::Engine
  require "pixie-dust/rails"
elsif defined? ::Sprockets
  require "pixie-dust/sprockets"
end
