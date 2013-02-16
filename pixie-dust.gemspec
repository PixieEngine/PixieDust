# -*- encoding: utf-8 -*-
require File.expand_path('../lib/pixie-dust/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = "pixie-dust"
  s.version     = PixieDust::VERSION
  s.authors     = ["Matt Diebolt", "Daniel X. Moore"]
  s.email       = ["pixie@pixieengine.com"]
  s.homepage    = ""
  s.summary     = %q{CoffeeScript based HTML5 game engine}
  s.description = %q{Make browser games}

  # Manifest
  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  %w[
    cornerstone-source
    rake
  ].each do |name|
    gem.add_dependency name
  end
end
