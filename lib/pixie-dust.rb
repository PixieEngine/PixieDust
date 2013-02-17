module PixieDust
  if defined? ::Rails::Engine
    class Rails < Rails::Engine
    end
  elsif defined? ::Sprockets
    root_dir = File.expand_path(File.dirname(File.dirname(__FILE__)))

    Sprockets.append_path File.join(root_dir, "lib", "assets", "javascripts")
  end
end
