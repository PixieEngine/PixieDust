( ->
  ###*
  Use this to handle generic rectangular collisions among game object a-la Flixel.

  @name Collidable
  @module
  @constructor
  ###
  Collidable = (I, self) ->
    # Set some default properties
    Object.reverseMerge I,
      allowCollisions: ANY
      immovable: false
      touching: NONE
      velocity: Point(0, 0)
      mass: 1
      elasticity: 1

    self.attrAccessor(
      "immovable",
      "velocity",
      "mass",
      "elasticity",
    )

    solid: (newSolid) ->
      if newSolid?
        if newSolid
          I.allowCollisions = ANY
        else
          I.allowCollisions = NONE
      else
        I.allowCollisions

  (exports ? this)["Collidable"] = Collidable

  ###*

  ###
  {NONE, LEFT, RIGHT, UP, DOWN} = Object.extend Collidable,
    NONE:  0x0000
    LEFT:  0x0001
    RIGHT: 0x0010
    UP:    0x0100
    DOWN:  0x1000

  {ANY, FLOOR, WALL, CEILING} = Object.extend Collidable,
    FLOOR: DOWN
    WALL: LEFT | RIGHT
    CEILING: UP
    ANY: LEFT | RIGHT | UP | DOWN

  Object.extend Collidable,
    separate: (a, b) ->
      return if a.immovable() && b.immovable()

      aBounds = a.bounds()
      bBounds = b.bounds()

      aVelocity = a.velocity()
      bVelocity = b.velocity()

      deltaVelocity = aVelocity.subtract(bVelocity)

      overlap = Point(0, 0)

      if Collision.rectangular(aBounds, bBounds)
        if deltaVelocity.x > 0
          overlap.x = aBounds.x + aBounds.width - bBounds.x
          if !(a.I.allowCollisions & RIGHT) || !(b.I.allowCollisions & LEFT)
            overlap.x = 0
          else
            a.I.touching |= RIGHT
            b.I.touching |= LEFT

        else if deltaVelocity.x < 0
          overlap.x = aBounds.x - bBounds.width - bBounds.x
          if !(a.I.allowCollisions & LEFT) || !(b.I.allowCollisions & RIGHT)
            overlap.x = 0
          else
            a.I.touching |= LEFT
            b.I.touching |= RIGHT

        if deltaVelocity.y > 0
          overlap.y = aBounds.y + aBounds.height - bBounds.y
          if !(a.I.allowCollisions & DOWN) || !(b.I.allowCollisions & UP)
            overlap.y = 0
          else
            a.I.touching |= DOWN
            b.I.touching |= UP

        else if deltaVelocity.y < 0
          overlap.x = aBounds.y - bBounds.height - bBounds.y
          if !(a.I.allowCollisions & UP) || !(b.I.allowCollisions & DOWN)
            overlap.y = 0
          else
            a.I.touching |= UP
            b.I.touching |= DOWN

      unless overlap.equal(Point.ZERO)
        if !a.immovable() and !a.immovable()
          a.changePosition(overlap.scale(-0.5))
          b.changePosition(overlap.scale(+0.5))

          # Elastic collision
          relativeVelocity = aVelocity.subtract(bVelocity)

          aMass = a.mass()
          bMass = b.mass()
          totalMass = bMass + aMass

          normal = overlap.norm()

          pushA = normal.scale(-2 * (relativeVelocity.dot(normal) * (bMass / totalMass)))
          pushB = normal.scale(+2 * (relativeVelocity.dot(normal) * (aMass / totalMass)))
          average = pushA.add(pushB).scale(0.5)

          pushA.subtract$(average).scale(a.elasticity())
          pushB.subtract$(average).scale(b.elasticity())

          a.I.velocity = average.add(pushA)
          b.I.velocity = average.add(pushB)

        else if !a.immovable()
          a.changePosition(overlap.scale(-1))

          a.I.velocity = bVelocity.subtract(aVelocity.scale(a.elasticity()))

        else if !b.immovable()
          b.changePosition(overlap)

          b.I.velocity = aVelocity.subtract(bVelocity.scale(b.elasticity()))

        return true
)()

