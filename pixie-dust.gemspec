# -*- encoding: utf-8 -*-
require File.expand_path('../lib/pixie-dust/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = "pixie-dust"
  s.version     = PixieDust::VERSION
  s.authors     = ["Matt Diebolt", "Daniel X. Moore"]
  s.email       = ["pixie@pixieengine.com"]
  s.homepage    = "https://github.com/PixieEngine/PixieDust"
  s.summary     = %q{CoffeeScript based HTML5 game engine}
  s.description = %q{Make browser games}

  s.files         = `git ls-files`.split("\n")
  s.require_paths = ["lib"]

  s.add_development_dependency 'rake'

  s.add_dependency 'cornerstone-source'
end
