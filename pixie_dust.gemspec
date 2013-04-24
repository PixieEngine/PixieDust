# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pixie_dust/version'

Gem::Specification.new do |spec|
  spec.name          = "pixie_dust"
  spec.version       = PixieDust::VERSION
  spec.authors       = ["Daniel Moore"]
  spec.email         = ["yahivin@gmail.com"]
  spec.description   = %q{
    Amazing libraries for developing games.
    Defines the main PixieEngine GameObject and includes mixins to easily augment their behavior.
  }

  spec.summary       = %q{Amazing libraries for developing games}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"

  spec.add_dependency "cornerstone-source"
end
