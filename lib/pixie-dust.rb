require 'sprockets'

module PixieDust
  root_dir = File.expand_path(File.dirname(File.dirname(__FILE__)))

  Sprockets.append_path File.join(root_dir, "source")
end
