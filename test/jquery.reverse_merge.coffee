module "jQuery.reverseMerge"

test "reverse merge", ->
  o = {
    exists: "cool"
  }

  $.reverseMerge o,
    another: "also cool"
    exists: "not cool"
    u: undefined

  equal o.exists, "cool"
  equal o.another, "also cool"
  equal o.u, undefined
  ok "u" of o

test "multiple arguments", ->
   o = {
     a: 0
   }

   $.reverseMerge o, {
     a: 1
     b: 1
   }, {
     a: 2
     b: 2
     c: 2
   }, {
     a: 3
     b: 3
     c: 3
     d: 3
   }

   equal o.a, 0
   equal o.b, 1
   equal o.c, 2
   equal o.d, 3

module()

