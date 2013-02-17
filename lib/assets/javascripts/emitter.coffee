# Just a placeholder class if you don't want to include the module yourself.
window.Emitter = (I={}) ->
  self = GameObject(I)

  self.include "Emitterable"

  return self
