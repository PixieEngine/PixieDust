require "pixie_dust/version"

require "cornerstone-source"

if defined? ::Rails
  class Engine < ::Rails::Engine
    config.paths['app/assets'] = "source"
  end
elsif defined? ::Sprockets
  root_dir = File.expand_path(File.dirname(File.dirname(__FILE__)))
  asset_dir = File.join(root_dir, "source")

  ::Sprockets.append_path asset_dir
end
