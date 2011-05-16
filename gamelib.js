/*
* Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/
var a2j = {};

(function (a2j, window) {

   if(!window.flash) window.flash = {utils: {Dictionary: Object} };
   else if(!window.flash.utils) window.flash.utils = {Dictionary: Object};
   else if(!window.flash.utils.Dictionary) window.flash.utils.Dictionary = Object;

   window.Vector = window.Array;

   Function.prototype.inherit = function (base) {
      var tmpCtr = this;
      var empty = Function.prototype.inherit.empty;
      empty.prototype = base.prototype;
      this.prototype = new empty();
      this.prototype.constructor = tmpCtr;
   };
   Function.prototype.inherit.empty = function () {};

   window.trace = function () {
      if (window.console && (window.console.log instanceof Function)) window.console.log.apply(window.console, arguments);
   };
   window.assert = function () {
      if (window.console && (window.console.assert instanceof Function)) window.console.assert.apply(window.console, arguments);
   };

   a2j.warn = function warn() {
      if (window.console) console.warn.apply(console, arguments);
   };

   a2j.generateCallback = function generateCallback(context, cb) {
      return function () {
         cb.apply(context, arguments);
      };
   };

   a2j.NVector = function NVector(length) {
      if (length === undefined) length = 0;
      var tmp = new Array(length || 0);
      for (var i = 0; i < length; ++i)
      tmp[i] = 0;
      return tmp;
   };

   a2j.is = function is(o1, o2) {
      if (o1 === null) return false;
      if ((o2 instanceof Function) && (o1 instanceof o2)) return true;
      if ((o1.constructor.__implements != undefined) && (o1.constructor.__implements[o2])) return true;
      return false;
   };

   a2j.parseUInt = function(v) {
      return Math.abs(parseInt(v));
   }

})(a2j, window, undefined);

var Vector_a2j_Number = a2j.NVector;
//package structure
if (!window.Box2D) Box2D = {};
if (!window.Box2D.Collision) Box2D.Collision = {};
if (!window.Box2D.Collision.Shapes) Box2D.Collision.Shapes = {};
if (!window.Box2D.Common) Box2D.Common = {};
if (!window.Box2D.Common.Math) Box2D.Common.Math = {};
if (!window.Box2D.Dynamics) Box2D.Dynamics = {};
if (!window.Box2D.Dynamics.Contacts) Box2D.Dynamics.Contacts = {};
if (!window.Box2D.Dynamics.Controllers) Box2D.Dynamics.Controllers = {};
if (!window.Box2D.Dynamics.Joints) Box2D.Dynamics.Joints = {};
//pre-definitions
(function () {
   Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

   function b2AABB() {
      b2AABB.b2AABB.apply(this, arguments);
   };
   Box2D.Collision.b2AABB = b2AABB;

   function b2Bound() {
      b2Bound.b2Bound.apply(this, arguments);
   };
   Box2D.Collision.b2Bound = b2Bound;

   function b2BoundValues() {
      b2BoundValues.b2BoundValues.apply(this, arguments);
      if (this.constructor === b2BoundValues) this.b2BoundValues.apply(this, arguments);
   };
   Box2D.Collision.b2BoundValues = b2BoundValues;

   function b2BroadPhase() {
      b2BroadPhase.b2BroadPhase.apply(this, arguments);
      if (this.constructor === b2BroadPhase) this.b2BroadPhase.apply(this, arguments);
   };
   Box2D.Collision.b2BroadPhase = b2BroadPhase;

   function b2Collision() {
      b2Collision.b2Collision.apply(this, arguments);
   };
   Box2D.Collision.b2Collision = b2Collision;

   function b2ContactID() {
      b2ContactID.b2ContactID.apply(this, arguments);
      if (this.constructor === b2ContactID) this.b2ContactID.apply(this, arguments);
   };
   Box2D.Collision.b2ContactID = b2ContactID;

   function b2ContactPoint() {
      b2ContactPoint.b2ContactPoint.apply(this, arguments);
   };
   Box2D.Collision.b2ContactPoint = b2ContactPoint;

   function b2Distance() {
      b2Distance.b2Distance.apply(this, arguments);
   };
   Box2D.Collision.b2Distance = b2Distance;

   function b2DistanceInput() {
      b2DistanceInput.b2DistanceInput.apply(this, arguments);
   };
   Box2D.Collision.b2DistanceInput = b2DistanceInput;

   function b2DistanceOutput() {
      b2DistanceOutput.b2DistanceOutput.apply(this, arguments);
   };
   Box2D.Collision.b2DistanceOutput = b2DistanceOutput;

   function b2DistanceProxy() {
      b2DistanceProxy.b2DistanceProxy.apply(this, arguments);
   };
   Box2D.Collision.b2DistanceProxy = b2DistanceProxy;

   function b2DynamicTree() {
      b2DynamicTree.b2DynamicTree.apply(this, arguments);
      if (this.constructor === b2DynamicTree) this.b2DynamicTree.apply(this, arguments);
   };
   Box2D.Collision.b2DynamicTree = b2DynamicTree;

   function b2DynamicTreeBroadPhase() {
      b2DynamicTreeBroadPhase.b2DynamicTreeBroadPhase.apply(this, arguments);
   };
   Box2D.Collision.b2DynamicTreeBroadPhase = b2DynamicTreeBroadPhase;

   function b2DynamicTreeNode() {
      b2DynamicTreeNode.b2DynamicTreeNode.apply(this, arguments);
   };
   Box2D.Collision.b2DynamicTreeNode = b2DynamicTreeNode;

   function b2DynamicTreePair() {
      b2DynamicTreePair.b2DynamicTreePair.apply(this, arguments);
   };
   Box2D.Collision.b2DynamicTreePair = b2DynamicTreePair;

   function b2Manifold() {
      b2Manifold.b2Manifold.apply(this, arguments);
      if (this.constructor === b2Manifold) this.b2Manifold.apply(this, arguments);
   };
   Box2D.Collision.b2Manifold = b2Manifold;

   function b2ManifoldPoint() {
      b2ManifoldPoint.b2ManifoldPoint.apply(this, arguments);
      if (this.constructor === b2ManifoldPoint) this.b2ManifoldPoint.apply(this, arguments);
   };
   Box2D.Collision.b2ManifoldPoint = b2ManifoldPoint;

   function b2OBB() {
      b2OBB.b2OBB.apply(this, arguments);
   };
   Box2D.Collision.b2OBB = b2OBB;

   function b2Pair() {
      b2Pair.b2Pair.apply(this, arguments);
   };
   Box2D.Collision.b2Pair = b2Pair;

   function b2PairManager() {
      b2PairManager.b2PairManager.apply(this, arguments);
      if (this.constructor === b2PairManager) this.b2PairManager.apply(this, arguments);
   };
   Box2D.Collision.b2PairManager = b2PairManager;

   function b2Point() {
      b2Point.b2Point.apply(this, arguments);
   };
   Box2D.Collision.b2Point = b2Point;

   function b2Proxy() {
      b2Proxy.b2Proxy.apply(this, arguments);
   };
   Box2D.Collision.b2Proxy = b2Proxy;

   function b2RayCastInput() {
      b2RayCastInput.b2RayCastInput.apply(this, arguments);
      if (this.constructor === b2RayCastInput) this.b2RayCastInput.apply(this, arguments);
   };
   Box2D.Collision.b2RayCastInput = b2RayCastInput;

   function b2RayCastOutput() {
      b2RayCastOutput.b2RayCastOutput.apply(this, arguments);
   };
   Box2D.Collision.b2RayCastOutput = b2RayCastOutput;

   function b2Segment() {
      b2Segment.b2Segment.apply(this, arguments);
   };
   Box2D.Collision.b2Segment = b2Segment;

   function b2SeparationFunction() {
      b2SeparationFunction.b2SeparationFunction.apply(this, arguments);
   };
   Box2D.Collision.b2SeparationFunction = b2SeparationFunction;

   function b2Simplex() {
      b2Simplex.b2Simplex.apply(this, arguments);
      if (this.constructor === b2Simplex) this.b2Simplex.apply(this, arguments);
   };
   Box2D.Collision.b2Simplex = b2Simplex;

   function b2SimplexCache() {
      b2SimplexCache.b2SimplexCache.apply(this, arguments);
   };
   Box2D.Collision.b2SimplexCache = b2SimplexCache;

   function b2SimplexVertex() {
      b2SimplexVertex.b2SimplexVertex.apply(this, arguments);
   };
   Box2D.Collision.b2SimplexVertex = b2SimplexVertex;

   function b2TimeOfImpact() {
      b2TimeOfImpact.b2TimeOfImpact.apply(this, arguments);
   };
   Box2D.Collision.b2TimeOfImpact = b2TimeOfImpact;

   function b2TOIInput() {
      b2TOIInput.b2TOIInput.apply(this, arguments);
   };
   Box2D.Collision.b2TOIInput = b2TOIInput;

   function b2WorldManifold() {
      b2WorldManifold.b2WorldManifold.apply(this, arguments);
      if (this.constructor === b2WorldManifold) this.b2WorldManifold.apply(this, arguments);
   };
   Box2D.Collision.b2WorldManifold = b2WorldManifold;

   function ClipVertex() {
      ClipVertex.ClipVertex.apply(this, arguments);
   };
   Box2D.Collision.ClipVertex = ClipVertex;

   function Features() {
      Features.Features.apply(this, arguments);
   };
   Box2D.Collision.Features = Features;

   function b2CircleShape() {
      b2CircleShape.b2CircleShape.apply(this, arguments);
      if (this.constructor === b2CircleShape) this.b2CircleShape.apply(this, arguments);
   };
   Box2D.Collision.Shapes.b2CircleShape = b2CircleShape;

   function b2EdgeChainDef() {
      b2EdgeChainDef.b2EdgeChainDef.apply(this, arguments);
      if (this.constructor === b2EdgeChainDef) this.b2EdgeChainDef.apply(this, arguments);
   };
   Box2D.Collision.Shapes.b2EdgeChainDef = b2EdgeChainDef;

   function b2EdgeShape() {
      b2EdgeShape.b2EdgeShape.apply(this, arguments);
      if (this.constructor === b2EdgeShape) this.b2EdgeShape.apply(this, arguments);
   };
   Box2D.Collision.Shapes.b2EdgeShape = b2EdgeShape;

   function b2MassData() {
      b2MassData.b2MassData.apply(this, arguments);
   };
   Box2D.Collision.Shapes.b2MassData = b2MassData;

   function b2PolygonShape() {
      b2PolygonShape.b2PolygonShape.apply(this, arguments);
      if (this.constructor === b2PolygonShape) this.b2PolygonShape.apply(this, arguments);
   };
   Box2D.Collision.Shapes.b2PolygonShape = b2PolygonShape;

   function b2Shape() {
      b2Shape.b2Shape.apply(this, arguments);
      if (this.constructor === b2Shape) this.b2Shape.apply(this, arguments);
   };
   Box2D.Collision.Shapes.b2Shape = b2Shape;
   Box2D.Common.b2internal = 'Box2D.Common.b2internal';

   function b2Color() {
      b2Color.b2Color.apply(this, arguments);
      if (this.constructor === b2Color) this.b2Color.apply(this, arguments);
   };
   Box2D.Common.b2Color = b2Color;

   function b2Settings() {
      b2Settings.b2Settings.apply(this, arguments);
   };
   Box2D.Common.b2Settings = b2Settings;

   function b2Mat22() {
      b2Mat22.b2Mat22.apply(this, arguments);
      if (this.constructor === b2Mat22) this.b2Mat22.apply(this, arguments);
   };
   Box2D.Common.Math.b2Mat22 = b2Mat22;

   function b2Mat33() {
      b2Mat33.b2Mat33.apply(this, arguments);
      if (this.constructor === b2Mat33) this.b2Mat33.apply(this, arguments);
   };
   Box2D.Common.Math.b2Mat33 = b2Mat33;

   function b2Math() {
      b2Math.b2Math.apply(this, arguments);
   };
   Box2D.Common.Math.b2Math = b2Math;

   function b2Sweep() {
      b2Sweep.b2Sweep.apply(this, arguments);
   };
   Box2D.Common.Math.b2Sweep = b2Sweep;

   function b2Transform() {
      b2Transform.b2Transform.apply(this, arguments);
      if (this.constructor === b2Transform) this.b2Transform.apply(this, arguments);
   };
   Box2D.Common.Math.b2Transform = b2Transform;

   function b2Vec2() {
      b2Vec2.b2Vec2.apply(this, arguments);
      if (this.constructor === b2Vec2) this.b2Vec2.apply(this, arguments);
   };
   Box2D.Common.Math.b2Vec2 = b2Vec2;

   function b2Vec3() {
      b2Vec3.b2Vec3.apply(this, arguments);
      if (this.constructor === b2Vec3) this.b2Vec3.apply(this, arguments);
   };
   Box2D.Common.Math.b2Vec3 = b2Vec3;

   function b2Body() {
      b2Body.b2Body.apply(this, arguments);
      if (this.constructor === b2Body) this.b2Body.apply(this, arguments);
   };
   Box2D.Dynamics.b2Body = b2Body;

   function b2BodyDef() {
      b2BodyDef.b2BodyDef.apply(this, arguments);
      if (this.constructor === b2BodyDef) this.b2BodyDef.apply(this, arguments);
   };
   Box2D.Dynamics.b2BodyDef = b2BodyDef;

   function b2ContactFilter() {
      b2ContactFilter.b2ContactFilter.apply(this, arguments);
   };
   Box2D.Dynamics.b2ContactFilter = b2ContactFilter;

   function b2ContactImpulse() {
      b2ContactImpulse.b2ContactImpulse.apply(this, arguments);
   };
   Box2D.Dynamics.b2ContactImpulse = b2ContactImpulse;

   function b2ContactListener() {
      b2ContactListener.b2ContactListener.apply(this, arguments);
   };
   Box2D.Dynamics.b2ContactListener = b2ContactListener;

   function b2ContactManager() {
      b2ContactManager.b2ContactManager.apply(this, arguments);
      if (this.constructor === b2ContactManager) this.b2ContactManager.apply(this, arguments);
   };
   Box2D.Dynamics.b2ContactManager = b2ContactManager;

   function b2DebugDraw() {
      b2DebugDraw.b2DebugDraw.apply(this, arguments);
      if (this.constructor === b2DebugDraw) this.b2DebugDraw.apply(this, arguments);
   };
   Box2D.Dynamics.b2DebugDraw = b2DebugDraw;

   function b2DestructionListener() {
      b2DestructionListener.b2DestructionListener.apply(this, arguments);
   };
   Box2D.Dynamics.b2DestructionListener = b2DestructionListener;

   function b2FilterData() {
      b2FilterData.b2FilterData.apply(this, arguments);
   };
   Box2D.Dynamics.b2FilterData = b2FilterData;

   function b2Fixture() {
      b2Fixture.b2Fixture.apply(this, arguments);
      if (this.constructor === b2Fixture) this.b2Fixture.apply(this, arguments);
   };
   Box2D.Dynamics.b2Fixture = b2Fixture;

   function b2FixtureDef() {
      b2FixtureDef.b2FixtureDef.apply(this, arguments);
      if (this.constructor === b2FixtureDef) this.b2FixtureDef.apply(this, arguments);
   };
   Box2D.Dynamics.b2FixtureDef = b2FixtureDef;

   function b2Island() {
      b2Island.b2Island.apply(this, arguments);
      if (this.constructor === b2Island) this.b2Island.apply(this, arguments);
   };
   Box2D.Dynamics.b2Island = b2Island;

   function b2TimeStep() {
      b2TimeStep.b2TimeStep.apply(this, arguments);
   };
   Box2D.Dynamics.b2TimeStep = b2TimeStep;

   function b2World() {
      b2World.b2World.apply(this, arguments);
      if (this.constructor === b2World) this.b2World.apply(this, arguments);
   };
   Box2D.Dynamics.b2World = b2World;

   function b2CircleContact() {
      b2CircleContact.b2CircleContact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2CircleContact = b2CircleContact;

   function b2Contact() {
      b2Contact.b2Contact.apply(this, arguments);
      if (this.constructor === b2Contact) this.b2Contact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2Contact = b2Contact;

   function b2ContactConstraint() {
      b2ContactConstraint.b2ContactConstraint.apply(this, arguments);
      if (this.constructor === b2ContactConstraint) this.b2ContactConstraint.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactConstraint = b2ContactConstraint;

   function b2ContactConstraintPoint() {
      b2ContactConstraintPoint.b2ContactConstraintPoint.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactConstraintPoint = b2ContactConstraintPoint;

   function b2ContactEdge() {
      b2ContactEdge.b2ContactEdge.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactEdge = b2ContactEdge;

   function b2ContactFactory() {
      b2ContactFactory.b2ContactFactory.apply(this, arguments);
      if (this.constructor === b2ContactFactory) this.b2ContactFactory.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactFactory = b2ContactFactory;

   function b2ContactRegister() {
      b2ContactRegister.b2ContactRegister.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactRegister = b2ContactRegister;

   function b2ContactResult() {
      b2ContactResult.b2ContactResult.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactResult = b2ContactResult;

   function b2ContactSolver() {
      b2ContactSolver.b2ContactSolver.apply(this, arguments);
      if (this.constructor === b2ContactSolver) this.b2ContactSolver.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2ContactSolver = b2ContactSolver;

   function b2EdgeAndCircleContact() {
      b2EdgeAndCircleContact.b2EdgeAndCircleContact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = b2EdgeAndCircleContact;

   function b2NullContact() {
      b2NullContact.b2NullContact.apply(this, arguments);
      if (this.constructor === b2NullContact) this.b2NullContact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2NullContact = b2NullContact;

   function b2PolyAndCircleContact() {
      b2PolyAndCircleContact.b2PolyAndCircleContact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2PolyAndCircleContact = b2PolyAndCircleContact;

   function b2PolyAndEdgeContact() {
      b2PolyAndEdgeContact.b2PolyAndEdgeContact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = b2PolyAndEdgeContact;

   function b2PolygonContact() {
      b2PolygonContact.b2PolygonContact.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2PolygonContact = b2PolygonContact;

   function b2PositionSolverManifold() {
      b2PositionSolverManifold.b2PositionSolverManifold.apply(this, arguments);
      if (this.constructor === b2PositionSolverManifold) this.b2PositionSolverManifold.apply(this, arguments);
   };
   Box2D.Dynamics.Contacts.b2PositionSolverManifold = b2PositionSolverManifold;

   function b2BuoyancyController() {
      b2BuoyancyController.b2BuoyancyController.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2BuoyancyController = b2BuoyancyController;

   function b2ConstantAccelController() {
      b2ConstantAccelController.b2ConstantAccelController.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2ConstantAccelController = b2ConstantAccelController;

   function b2ConstantForceController() {
      b2ConstantForceController.b2ConstantForceController.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2ConstantForceController = b2ConstantForceController;

   function b2Controller() {
      b2Controller.b2Controller.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2Controller = b2Controller;

   function b2ControllerEdge() {
      b2ControllerEdge.b2ControllerEdge.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2ControllerEdge = b2ControllerEdge;

   function b2GravityController() {
      b2GravityController.b2GravityController.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2GravityController = b2GravityController;

   function b2TensorDampingController() {
      b2TensorDampingController.b2TensorDampingController.apply(this, arguments);
   };
   Box2D.Dynamics.Controllers.b2TensorDampingController = b2TensorDampingController;

   function b2DistanceJoint() {
      b2DistanceJoint.b2DistanceJoint.apply(this, arguments);
      if (this.constructor === b2DistanceJoint) this.b2DistanceJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2DistanceJoint = b2DistanceJoint;

   function b2DistanceJointDef() {
      b2DistanceJointDef.b2DistanceJointDef.apply(this, arguments);
      if (this.constructor === b2DistanceJointDef) this.b2DistanceJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2DistanceJointDef = b2DistanceJointDef;

   function b2FrictionJoint() {
      b2FrictionJoint.b2FrictionJoint.apply(this, arguments);
      if (this.constructor === b2FrictionJoint) this.b2FrictionJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2FrictionJoint = b2FrictionJoint;

   function b2FrictionJointDef() {
      b2FrictionJointDef.b2FrictionJointDef.apply(this, arguments);
      if (this.constructor === b2FrictionJointDef) this.b2FrictionJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2FrictionJointDef = b2FrictionJointDef;

   function b2GearJoint() {
      b2GearJoint.b2GearJoint.apply(this, arguments);
      if (this.constructor === b2GearJoint) this.b2GearJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2GearJoint = b2GearJoint;

   function b2GearJointDef() {
      b2GearJointDef.b2GearJointDef.apply(this, arguments);
      if (this.constructor === b2GearJointDef) this.b2GearJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2GearJointDef = b2GearJointDef;

   function b2Jacobian() {
      b2Jacobian.b2Jacobian.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2Jacobian = b2Jacobian;

   function b2Joint() {
      b2Joint.b2Joint.apply(this, arguments);
      if (this.constructor === b2Joint) this.b2Joint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2Joint = b2Joint;

   function b2JointDef() {
      b2JointDef.b2JointDef.apply(this, arguments);
      if (this.constructor === b2JointDef) this.b2JointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2JointDef = b2JointDef;

   function b2JointEdge() {
      b2JointEdge.b2JointEdge.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2JointEdge = b2JointEdge;

   function b2LineJoint() {
      b2LineJoint.b2LineJoint.apply(this, arguments);
      if (this.constructor === b2LineJoint) this.b2LineJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2LineJoint = b2LineJoint;

   function b2LineJointDef() {
      b2LineJointDef.b2LineJointDef.apply(this, arguments);
      if (this.constructor === b2LineJointDef) this.b2LineJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2LineJointDef = b2LineJointDef;

   function b2MouseJoint() {
      b2MouseJoint.b2MouseJoint.apply(this, arguments);
      if (this.constructor === b2MouseJoint) this.b2MouseJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2MouseJoint = b2MouseJoint;

   function b2MouseJointDef() {
      b2MouseJointDef.b2MouseJointDef.apply(this, arguments);
      if (this.constructor === b2MouseJointDef) this.b2MouseJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2MouseJointDef = b2MouseJointDef;

   function b2PrismaticJoint() {
      b2PrismaticJoint.b2PrismaticJoint.apply(this, arguments);
      if (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2PrismaticJoint = b2PrismaticJoint;

   function b2PrismaticJointDef() {
      b2PrismaticJointDef.b2PrismaticJointDef.apply(this, arguments);
      if (this.constructor === b2PrismaticJointDef) this.b2PrismaticJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2PrismaticJointDef = b2PrismaticJointDef;

   function b2PulleyJoint() {
      b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
      if (this.constructor === b2PulleyJoint) this.b2PulleyJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

   function b2PulleyJointDef() {
      b2PulleyJointDef.b2PulleyJointDef.apply(this, arguments);
      if (this.constructor === b2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2PulleyJointDef = b2PulleyJointDef;

   function b2RevoluteJoint() {
      b2RevoluteJoint.b2RevoluteJoint.apply(this, arguments);
      if (this.constructor === b2RevoluteJoint) this.b2RevoluteJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2RevoluteJoint = b2RevoluteJoint;

   function b2RevoluteJointDef() {
      b2RevoluteJointDef.b2RevoluteJointDef.apply(this, arguments);
      if (this.constructor === b2RevoluteJointDef) this.b2RevoluteJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2RevoluteJointDef = b2RevoluteJointDef;

   function b2WeldJoint() {
      b2WeldJoint.b2WeldJoint.apply(this, arguments);
      if (this.constructor === b2WeldJoint) this.b2WeldJoint.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2WeldJoint = b2WeldJoint;

   function b2WeldJointDef() {
      b2WeldJointDef.b2WeldJointDef.apply(this, arguments);
      if (this.constructor === b2WeldJointDef) this.b2WeldJointDef.apply(this, arguments);
   };
   Box2D.Dynamics.Joints.b2WeldJointDef = b2WeldJointDef;
})(); //definitions
_A2J_postDefs = []; /* source: disabled*/
(function () {
   var Dictionary = flash.utils.Dictionary;
   var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
   var b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
   var b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape;
   var b2MassData = Box2D.Collision.Shapes.b2MassData;
   var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
   var b2Shape = Box2D.Collision.Shapes.b2Shape;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2internal = Box2D.Common.b2internal;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2AABB = Box2D.Collision.b2AABB;
   var b2Bound = Box2D.Collision.b2Bound;
   var b2BoundValues = Box2D.Collision.b2BoundValues;
   var b2BroadPhase = Box2D.Collision.b2BroadPhase;
   var b2Collision = Box2D.Collision.b2Collision;
   var b2ContactID = Box2D.Collision.b2ContactID;
   var b2ContactPoint = Box2D.Collision.b2ContactPoint;
   var b2Distance = Box2D.Collision.b2Distance;
   var b2DistanceInput = Box2D.Collision.b2DistanceInput;
   var b2DistanceOutput = Box2D.Collision.b2DistanceOutput;
   var b2DistanceProxy = Box2D.Collision.b2DistanceProxy;
   var b2DynamicTree = Box2D.Collision.b2DynamicTree;
   var b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase;
   var b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode;
   var b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair;
   var b2Manifold = Box2D.Collision.b2Manifold;
   var b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint;
   var b2OBB = Box2D.Collision.b2OBB;
   var b2Pair = Box2D.Collision.b2Pair;
   var b2PairManager = Box2D.Collision.b2PairManager;
   var b2Point = Box2D.Collision.b2Point;
   var b2Proxy = Box2D.Collision.b2Proxy;
   var b2RayCastInput = Box2D.Collision.b2RayCastInput;
   var b2RayCastOutput = Box2D.Collision.b2RayCastOutput;
   var b2Segment = Box2D.Collision.b2Segment;
   var b2SeparationFunction = Box2D.Collision.b2SeparationFunction;
   var b2Simplex = Box2D.Collision.b2Simplex;
   var b2SimplexCache = Box2D.Collision.b2SimplexCache;
   var b2SimplexVertex = Box2D.Collision.b2SimplexVertex;
   var b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact;
   var b2TOIInput = Box2D.Collision.b2TOIInput;
   var b2WorldManifold = Box2D.Collision.b2WorldManifold;
   var ClipVertex = Box2D.Collision.ClipVertex;
   var Features = Box2D.Collision.Features;
   var IBroadPhase = Box2D.Collision.IBroadPhase;
   var b2internal = Box2D.Common.b2internal;
   var b2internal = Box2D.Common.b2internal;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2AABB = Box2D.Collision.b2AABB;
   var b2Bound = Box2D.Collision.b2Bound;
   var b2BoundValues = Box2D.Collision.b2BoundValues;
   var b2BroadPhase = Box2D.Collision.b2BroadPhase;
   var b2Collision = Box2D.Collision.b2Collision;
   var b2ContactID = Box2D.Collision.b2ContactID;
   var b2ContactPoint = Box2D.Collision.b2ContactPoint;
   var b2Distance = Box2D.Collision.b2Distance;
   var b2DistanceInput = Box2D.Collision.b2DistanceInput;
   var b2DistanceOutput = Box2D.Collision.b2DistanceOutput;
   var b2DistanceProxy = Box2D.Collision.b2DistanceProxy;
   var b2DynamicTree = Box2D.Collision.b2DynamicTree;
   var b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase;
   var b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode;
   var b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair;
   var b2Manifold = Box2D.Collision.b2Manifold;
   var b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint;
   var b2OBB = Box2D.Collision.b2OBB;
   var b2Pair = Box2D.Collision.b2Pair;
   var b2PairManager = Box2D.Collision.b2PairManager;
   var b2Point = Box2D.Collision.b2Point;
   var b2Proxy = Box2D.Collision.b2Proxy;
   var b2RayCastInput = Box2D.Collision.b2RayCastInput;
   var b2RayCastOutput = Box2D.Collision.b2RayCastOutput;
   var b2Segment = Box2D.Collision.b2Segment;
   var b2SeparationFunction = Box2D.Collision.b2SeparationFunction;
   var b2Simplex = Box2D.Collision.b2Simplex;
   var b2SimplexCache = Box2D.Collision.b2SimplexCache;
   var b2SimplexVertex = Box2D.Collision.b2SimplexVertex;
   var b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact;
   var b2TOIInput = Box2D.Collision.b2TOIInput;
   var b2WorldManifold = Box2D.Collision.b2WorldManifold;
   var ClipVertex = Box2D.Collision.ClipVertex;
   var Features = Box2D.Collision.Features;
   var IBroadPhase = Box2D.Collision.IBroadPhase;
   var IBroadPhase = Box2D.Collision.IBroadPhase;
   b2AABB.b2AABB = function () {
      this.lowerBound = new b2Vec2();
      this.upperBound = new b2Vec2();
   };
   b2AABB.prototype.IsValid = function () {
      var dX = this.upperBound.x - this.lowerBound.x;
      var dY = this.upperBound.y - this.lowerBound.y;
      var valid = dX >= 0.0 && dY >= 0.0;
      valid = valid && this.lowerBound.IsValid() && this.upperBound.IsValid();
      return valid;
   }
   b2AABB.prototype.GetCenter = function () {
      return new b2Vec2((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
   }
   b2AABB.prototype.GetExtents = function () {
      return new b2Vec2((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
   }
   b2AABB.prototype.Contains = function (aabb) {
      var result = true;
      result = result && this.lowerBound.x <= aabb.lowerBound.x;
      result = result && this.lowerBound.y <= aabb.lowerBound.y;
      result = result && aabb.upperBound.x <= this.upperBound.x;
      result = result && aabb.upperBound.y <= this.upperBound.y;
      return result;
   }
   b2AABB.prototype.RayCast = function (output, input) {
      var tmin = (-Number.MAX_VALUE);
      var tmax = Number.MAX_VALUE;
      var pX = input.p1.x;
      var pY = input.p1.y;
      var dX = input.p2.x - input.p1.x;
      var dY = input.p2.y - input.p1.y;
      var absDX = Math.abs(dX);
      var absDY = Math.abs(dY);
      var normal = output.normal;
      var inv_d = 0;
      var t1 = 0;
      var t2 = 0;
      var t3 = 0;
      var s = 0; {
         if (absDX < Number.MIN_VALUE) {
            if (pX < this.lowerBound.x || this.upperBound.x < pX) return false;
         }
         else {
            inv_d = 1.0 / dX;
            t1 = (this.lowerBound.x - pX) * inv_d;
            t2 = (this.upperBound.x - pX) * inv_d;
            s = (-1.0);
            if (t1 > t2) {
               t3 = t1;
               t1 = t2;
               t2 = t3;
               s = 1.0;
            }
            if (t1 > tmin) {
               normal.x = s;
               normal.y = 0;
               tmin = t1;
            }
            tmax = Math.min(tmax, t2);
            if (tmin > tmax) return false;
         }
      } {
         if (absDY < Number.MIN_VALUE) {
            if (pY < this.lowerBound.y || this.upperBound.y < pY) return false;
         }
         else {
            inv_d = 1.0 / dY;
            t1 = (this.lowerBound.y - pY) * inv_d;
            t2 = (this.upperBound.y - pY) * inv_d;
            s = (-1.0);
            if (t1 > t2) {
               t3 = t1;
               t1 = t2;
               t2 = t3;
               s = 1.0;
            }
            if (t1 > tmin) {
               normal.y = s;
               normal.x = 0;
               tmin = t1;
            }
            tmax = Math.min(tmax, t2);
            if (tmin > tmax) return false;
         }
      }
      output.fraction = tmin;
      return true;
   }
   b2AABB.prototype.TestOverlap = function (other) {
      var d1X = other.lowerBound.x - this.upperBound.x;
      var d1Y = other.lowerBound.y - this.upperBound.y;
      var d2X = this.lowerBound.x - other.upperBound.x;
      var d2Y = this.lowerBound.y - other.upperBound.y;
      if (d1X > 0.0 || d1Y > 0.0) return false;
      if (d2X > 0.0 || d2Y > 0.0) return false;
      return true;
   }
   b2AABB.prototype.Combine = function (aabb1, aabb2) {
      var aabb = new b2AABB();
      if (this.constructor === Box2D.Collision.b2AABB) this._a2j__Combine(aabb1, aabb2);
      else aabb._a2j__Combine(aabb1, aabb2);
      return aabb;
   }
   b2AABB.Combine = b2AABB.prototype.Combine;
   b2AABB.prototype._a2j__Combine = function (aabb1, aabb2) {
      this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBound.x);
      this.lowerBound.y = Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
      this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
      this.upperBound.y = Math.max(aabb1.upperBound.y, aabb2.upperBound.y);
   }
   b2Bound.b2Bound = function () {};
   b2Bound.prototype.IsLower = function () {
      return (this.value & 1) == 0;
   }
   b2Bound.prototype.IsUpper = function () {
      return (this.value & 1) == 1;
   }
   b2Bound.prototype.Swap = function (b) {
      var tempValue = this.value;
      var tempProxy = this.proxy;
      var tempStabbingCount = this.stabbingCount;
      this.value = b.value;
      this.proxy = b.proxy;
      this.stabbingCount = b.stabbingCount;
      b.value = tempValue;
      b.proxy = tempProxy;
      b.stabbingCount = tempStabbingCount;
   }
   b2BoundValues.b2BoundValues = function () {};
   b2BoundValues.prototype.b2BoundValues = function () {
      this.lowerValues = new Vector_a2j_Number();
      this.lowerValues[0] = 0.0;
      this.lowerValues[1] = 0.0;
      this.upperValues = new Vector_a2j_Number();
      this.upperValues[0] = 0.0;
      this.upperValues[1] = 0.0;
   }
   b2BroadPhase.b2BroadPhase = function () {
      this.m_pairManager = new b2PairManager();
      this.m_proxyPool = new Array();
      this.m_querySortKeys = new Array();
      this.m_queryResults = new Array();
      this.m_quantizationFactor = new b2Vec2();
   };
   b2BroadPhase.prototype.b2BroadPhase = function (worldAABB) {
      var i = 0;
      this.m_pairManager.Initialize(this);
      this.m_worldAABB = worldAABB;
      this.m_proxyCount = 0;
      this.m_bounds = new Vector();
      for (i = 0;
      i < 2; i++) {
         this.m_bounds[i] = new Vector();
      }
      var dX = worldAABB.upperBound.x - worldAABB.lowerBound.x;
      var dY = worldAABB.upperBound.y - worldAABB.lowerBound.y;
      this.m_quantizationFactor.x = b2Settings.USHRT_MAX / dX;
      this.m_quantizationFactor.y = b2Settings.USHRT_MAX / dY;
      this.m_timeStamp = 1;
      this.m_queryResultCount = 0;
   }
   b2BroadPhase.prototype.InRange = function (aabb) {
      var dX = 0;
      var dY = 0;
      var d2X = 0;
      var d2Y = 0;
      dX = aabb.lowerBound.x;
      dY = aabb.lowerBound.y;
      dX -= this.m_worldAABB.upperBound.x;
      dY -= this.m_worldAABB.upperBound.y;
      d2X = this.m_worldAABB.lowerBound.x;
      d2Y = this.m_worldAABB.lowerBound.y;
      d2X -= aabb.upperBound.x;
      d2Y -= aabb.upperBound.y;
      dX = b2Math.Max(dX, d2X);
      dY = b2Math.Max(dY, d2Y);
      return b2Math.Max(dX, dY) < 0.0;
   }
   b2BroadPhase.prototype.CreateProxy = function (aabb, userData) {
      var index = 0;
      var proxy;
      var i = 0;
      var j = 0;
      if (!this.m_freeProxy) {
         this.m_freeProxy = this.m_proxyPool[this.m_proxyCount] = new b2Proxy();
         this.m_freeProxy.next = null;
         this.m_freeProxy.timeStamp = 0;
         this.m_freeProxy.overlapCount = b2BroadPhase.b2_invalid;
         this.m_freeProxy.userData = null;
         for (i = 0;
         i < 2; i++) {
            j = this.m_proxyCount * 2;
            this.m_bounds[i][j++] = new b2Bound();
            this.m_bounds[i][j] = new b2Bound();
         }
      }
      proxy = this.m_freeProxy;
      this.m_freeProxy = proxy.next;
      proxy.overlapCount = 0;
      proxy.userData = userData;
      var boundCount = 2 * this.m_proxyCount;
      var lowerValues = new Vector_a2j_Number();
      var upperValues = new Vector_a2j_Number();
      this.ComputeBounds(lowerValues, upperValues, aabb);
      for (var axis = 0; axis < 2; ++axis) {
         var bounds = this.m_bounds[axis];
         var lowerIndex = 0;
         var upperIndex = 0;
         var lowerIndexOut = new Vector_a2j_Number();
         lowerIndexOut.push(lowerIndex);
         var upperIndexOut = new Vector_a2j_Number();
         upperIndexOut.push(upperIndex);
         this.QueryAxis(lowerIndexOut, upperIndexOut, lowerValues[axis], upperValues[axis], bounds, boundCount, axis);
         lowerIndex = lowerIndexOut[0];
         upperIndex = upperIndexOut[0];
         bounds.splice(upperIndex, 0, bounds[bounds.length - 1]);
         bounds.length--;
         bounds.splice(lowerIndex, 0, bounds[bounds.length - 1]);
         bounds.length--;
         ++upperIndex;
         var tBound1 = bounds[lowerIndex];
         var tBound2 = bounds[upperIndex];
         tBound1.value = lowerValues[axis];
         tBound1.proxy = proxy;
         tBound2.value = upperValues[axis];
         tBound2.proxy = proxy;
         var tBoundAS3 = bounds[parseInt(lowerIndex - 1)];
         tBound1.stabbingCount = lowerIndex == 0 ? 0 : tBoundAS3.stabbingCount;
         tBoundAS3 = bounds[parseInt(upperIndex - 1)];
         tBound2.stabbingCount = tBoundAS3.stabbingCount;
         for (index = lowerIndex;
         index < upperIndex; ++index) {
            tBoundAS3 = bounds[index];
            tBoundAS3.stabbingCount++;
         }
         for (index = lowerIndex;
         index < boundCount + 2; ++index) {
            tBound1 = bounds[index];
            var proxy2 = tBound1.proxy;
            if (tBound1.IsLower()) {
               proxy2.lowerBounds[axis] = index;
            }
            else {
               proxy2.upperBounds[axis] = index;
            }
         }
      }++this.m_proxyCount;
      for (i = 0;
      i < this.m_queryResultCount; ++i) {
         this.m_pairManager.AddBufferedPair(proxy, this.m_queryResults[i]);
      }
      this.m_queryResultCount = 0;
      this.IncrementTimeStamp();
      return proxy;
   }
   b2BroadPhase.prototype.DestroyProxy = function (proxy_) {
      var proxy = (proxy_ instanceof b2Proxy ? proxy_ : null);
      var tBound1;
      var tBound2;
      var boundCount = parseInt(2 * this.m_proxyCount);
      for (var axis = 0; axis < 2; ++axis) {
         var bounds = this.m_bounds[axis];
         var lowerIndex = proxy.lowerBounds[axis];
         var upperIndex = proxy.upperBounds[axis];
         tBound1 = bounds[lowerIndex];
         var lowerValue = tBound1.value;
         tBound2 = bounds[upperIndex];
         var upperValue = tBound2.value;
         bounds.splice(upperIndex, 1);
         bounds.splice(lowerIndex, 1);
         bounds.push(tBound1);
         bounds.push(tBound2);
         var tEnd = parseInt(boundCount - 2);
         for (var index = lowerIndex; index < tEnd; ++index) {
            tBound1 = bounds[index];
            var proxy2 = tBound1.proxy;
            if (tBound1.IsLower()) {
               proxy2.lowerBounds[axis] = index;
            }
            else {
               proxy2.upperBounds[axis] = index;
            }
         }
         tEnd = upperIndex - 1;
         for (var index2 = parseInt(lowerIndex); index2 < tEnd; ++index2) {
            tBound1 = bounds[index2];
            tBound1.stabbingCount--;
         }
         var ignore = new Vector_a2j_Number();
         this.QueryAxis(ignore, ignore, lowerValue, upperValue, bounds, boundCount - 2, axis);
      }
      for (var i = 0; i < this.m_queryResultCount; ++i) {
         this.m_pairManager.RemoveBufferedPair(proxy, this.m_queryResults[i]);
      }
      this.m_queryResultCount = 0;
      this.IncrementTimeStamp();
      proxy.userData = null;
      proxy.overlapCount = b2BroadPhase.b2_invalid;
      proxy.lowerBounds[0] = b2BroadPhase.b2_invalid;
      proxy.lowerBounds[1] = b2BroadPhase.b2_invalid;
      proxy.upperBounds[0] = b2BroadPhase.b2_invalid;
      proxy.upperBounds[1] = b2BroadPhase.b2_invalid;
      proxy.next = this.m_freeProxy;
      this.m_freeProxy = proxy;
      --this.m_proxyCount;
   }
   b2BroadPhase.prototype.MoveProxy = function (proxy_, aabb, displacement) {
      var proxy = (proxy_ instanceof b2Proxy ? proxy_ : null);
      var as3arr;
      var as3int = 0;
      var axis = 0;
      var index = 0;
      var bound;
      var prevBound;
      var nextBound;
      var nextProxyId = 0;
      var nextProxy;
      if (proxy == null) {
         return;
      }
      if (aabb.IsValid() == false) {
         return;
      }
      var boundCount = 2 * this.m_proxyCount;
      var newValues = new b2BoundValues();
      this.ComputeBounds(newValues.lowerValues, newValues.upperValues, aabb);
      var oldValues = new b2BoundValues();
      for (axis = 0;
      axis < 2; ++axis) {
         bound = this.m_bounds[axis][proxy.lowerBounds[axis]];
         oldValues.lowerValues[axis] = bound.value;
         bound = this.m_bounds[axis][proxy.upperBounds[axis]];
         oldValues.upperValues[axis] = bound.value;
      }
      for (axis = 0;
      axis < 2; ++axis) {
         var bounds = this.m_bounds[axis];
         var lowerIndex = proxy.lowerBounds[axis];
         var upperIndex = proxy.upperBounds[axis];
         var lowerValue = newValues.lowerValues[axis];
         var upperValue = newValues.upperValues[axis];
         bound = bounds[lowerIndex];
         var deltaLower = parseInt(lowerValue - bound.value);
         bound.value = lowerValue;
         bound = bounds[upperIndex];
         var deltaUpper = parseInt(upperValue - bound.value);
         bound.value = upperValue;
         if (deltaLower < 0) {
            index = lowerIndex;
            while (index > 0 && lowerValue < ((bounds[parseInt(index - 1)] instanceof b2Bound ? bounds[parseInt(index - 1)] : null)).value) {
               bound = bounds[index];
               prevBound = bounds[parseInt(index - 1)];
               var prevProxy = prevBound.proxy;
               prevBound.stabbingCount++;
               if (prevBound.IsUpper() == true) {
                  if (this.TestOverlapBound(newValues, prevProxy)) {
                     this.m_pairManager.AddBufferedPair(proxy, prevProxy);
                  }
                  as3arr = prevProxy.upperBounds;
                  as3int = as3arr[axis];
                  as3int++;
                  as3arr[axis] = as3int;
                  bound.stabbingCount++;
               }
               else {
                  as3arr = prevProxy.lowerBounds;
                  as3int = as3arr[axis];
                  as3int++;
                  as3arr[axis] = as3int;
                  bound.stabbingCount--;
               }
               as3arr = proxy.lowerBounds;
               as3int = as3arr[axis];
               as3int--;
               as3arr[axis] = as3int;
               bound.Swap(prevBound);
               --index;
            }
         }
         if (deltaUpper > 0) {
            index = upperIndex;
            while (index < boundCount - 1 && ((bounds[parseInt(index + 1)] instanceof b2Bound ? bounds[parseInt(index + 1)] : null)).value <= upperValue) {
               bound = bounds[index];
               nextBound = bounds[parseInt(index + 1)];
               nextProxy = nextBound.proxy;
               nextBound.stabbingCount++;
               if (nextBound.IsLower() == true) {
                  if (this.TestOverlapBound(newValues, nextProxy)) {
                     this.m_pairManager.AddBufferedPair(proxy, nextProxy);
                  }
                  as3arr = nextProxy.lowerBounds;
                  as3int = as3arr[axis];
                  as3int--;
                  as3arr[axis] = as3int;
                  bound.stabbingCount++;
               }
               else {
                  as3arr = nextProxy.upperBounds;
                  as3int = as3arr[axis];
                  as3int--;
                  as3arr[axis] = as3int;
                  bound.stabbingCount--;
               }
               as3arr = proxy.upperBounds;
               as3int = as3arr[axis];
               as3int++;
               as3arr[axis] = as3int;
               bound.Swap(nextBound);
               index++;
            }
         }
         if (deltaLower > 0) {
            index = lowerIndex;
            while (index < boundCount - 1 && ((bounds[parseInt(index + 1)] instanceof b2Bound ? bounds[parseInt(index + 1)] : null)).value <= lowerValue) {
               bound = bounds[index];
               nextBound = bounds[parseInt(index + 1)];
               nextProxy = nextBound.proxy;
               nextBound.stabbingCount--;
               if (nextBound.IsUpper()) {
                  if (this.TestOverlapBound(oldValues, nextProxy)) {
                     this.m_pairManager.RemoveBufferedPair(proxy, nextProxy);
                  }
                  as3arr = nextProxy.upperBounds;
                  as3int = as3arr[axis];
                  as3int--;
                  as3arr[axis] = as3int;
                  bound.stabbingCount--;
               }
               else {
                  as3arr = nextProxy.lowerBounds;
                  as3int = as3arr[axis];
                  as3int--;
                  as3arr[axis] = as3int;
                  bound.stabbingCount++;
               }
               as3arr = proxy.lowerBounds;
               as3int = as3arr[axis];
               as3int++;
               as3arr[axis] = as3int;
               bound.Swap(nextBound);
               index++;
            }
         }
         if (deltaUpper < 0) {
            index = upperIndex;
            while (index > 0 && upperValue < ((bounds[parseInt(index - 1)] instanceof b2Bound ? bounds[parseInt(index - 1)] : null)).value) {
               bound = bounds[index];
               prevBound = bounds[parseInt(index - 1)];
               prevProxy = prevBound.proxy;
               prevBound.stabbingCount--;
               if (prevBound.IsLower() == true) {
                  if (this.TestOverlapBound(oldValues, prevProxy)) {
                     this.m_pairManager.RemoveBufferedPair(proxy, prevProxy);
                  }
                  as3arr = prevProxy.lowerBounds;
                  as3int = as3arr[axis];
                  as3int++;
                  as3arr[axis] = as3int;
                  bound.stabbingCount--;
               }
               else {
                  as3arr = prevProxy.upperBounds;
                  as3int = as3arr[axis];
                  as3int++;
                  as3arr[axis] = as3int;
                  bound.stabbingCount++;
               }
               as3arr = proxy.upperBounds;
               as3int = as3arr[axis];
               as3int--;
               as3arr[axis] = as3int;
               bound.Swap(prevBound);
               index--;
            }
         }
      }
   }
   b2BroadPhase.prototype.UpdatePairs = function (callback) {
      this.m_pairManager.Commit(callback);
   }
   b2BroadPhase.prototype.TestOverlap = function (proxyA, proxyB) {
      var proxyA_ = (proxyA instanceof b2Proxy ? proxyA : null);
      var proxyB_ = (proxyB instanceof b2Proxy ? proxyB : null);
      if (proxyA_.lowerBounds[0] > proxyB_.upperBounds[0]) return false;
      if (proxyB_.lowerBounds[0] > proxyA_.upperBounds[0]) return false;
      if (proxyA_.lowerBounds[1] > proxyB_.upperBounds[1]) return false;
      if (proxyB_.lowerBounds[1] > proxyA_.upperBounds[1]) return false;
      return true;
   }
   b2BroadPhase.prototype.GetUserData = function (proxy) {
      return ((proxy instanceof b2Proxy ? proxy : null)).userData;
   }
   b2BroadPhase.prototype.GetFatAABB = function (proxy_) {
      var aabb = new b2AABB();
      var proxy = (proxy_ instanceof b2Proxy ? proxy_ : null);
      aabb.lowerBound.x = this.m_worldAABB.lowerBound.x + this.m_bounds[0][proxy.lowerBounds[0]].value / this.m_quantizationFactor.x;
      aabb.lowerBound.y = this.m_worldAABB.lowerBound.y + this.m_bounds[1][proxy.lowerBounds[1]].value / this.m_quantizationFactor.y;
      aabb.upperBound.x = this.m_worldAABB.lowerBound.x + this.m_bounds[0][proxy.upperBounds[0]].value / this.m_quantizationFactor.x;
      aabb.upperBound.y = this.m_worldAABB.lowerBound.y + this.m_bounds[1][proxy.upperBounds[1]].value / this.m_quantizationFactor.y;
      return aabb;
   }
   b2BroadPhase.prototype.GetProxyCount = function () {
      return this.m_proxyCount;
   }
   b2BroadPhase.prototype.Query = function (callback, aabb) {
      var lowerValues = new Vector_a2j_Number();
      var upperValues = new Vector_a2j_Number();
      this.ComputeBounds(lowerValues, upperValues, aabb);
      var lowerIndex = 0;
      var upperIndex = 0;
      var lowerIndexOut = new Vector_a2j_Number();
      lowerIndexOut.push(lowerIndex);
      var upperIndexOut = new Vector_a2j_Number();
      upperIndexOut.push(upperIndex);
      this.QueryAxis(lowerIndexOut, upperIndexOut, lowerValues[0], upperValues[0], this.m_bounds[0], 2 * this.m_proxyCount, 0);
      this.QueryAxis(lowerIndexOut, upperIndexOut, lowerValues[1], upperValues[1], this.m_bounds[1], 2 * this.m_proxyCount, 1);
      for (var i = 0; i < this.m_queryResultCount; ++i) {
         var proxy = this.m_queryResults[i];
         if (!callback(proxy)) {
            break;
         }
      }
      this.m_queryResultCount = 0;
      this.IncrementTimeStamp();
   }
   b2BroadPhase.prototype.Validate = function () {
      var pair;
      var proxy1;
      var proxy2;
      var overlap;
      for (var axis = 0; axis < 2; ++axis) {
         var bounds = this.m_bounds[axis];
         var boundCount = 2 * this.m_proxyCount;
         var stabbingCount = 0;
         for (var i = 0; i < boundCount; ++i) {
            var bound = bounds[i];
            if (bound.IsLower() == true) {
               stabbingCount++;
            }
            else {
               stabbingCount--;
            }
         }
      }
   }
   b2BroadPhase.prototype.Rebalance = function (iterations) {
      if (iterations === undefined) iterations = 0;
   }
   b2BroadPhase.prototype.RayCast = function (callback, input) {
      var subInput = new b2RayCastInput();
      subInput.p1.SetV(input.p1);
      subInput.p2.SetV(input.p2);
      subInput.maxFraction = input.maxFraction;
      var dx = (input.p2.x - input.p1.x) * this.m_quantizationFactor.x;
      var dy = (input.p2.y - input.p1.y) * this.m_quantizationFactor.y;
      var sx = parseInt(dx < (-Number.MIN_VALUE ? (-1) : (dx > Number.MIN_VALUE ? 1 : 0)));
      var sy = parseInt(dy < (-Number.MIN_VALUE ? (-1) : (dy > Number.MIN_VALUE ? 1 : 0)));
      var p1x = this.m_quantizationFactor.x * (input.p1.x - this.m_worldAABB.lowerBound.x);
      var p1y = this.m_quantizationFactor.y * (input.p1.y - this.m_worldAABB.lowerBound.y);
      var startValues = new Array();
      var startValues2 = new Array();
      startValues[0] = a2j.parseUInt(p1x) & (b2Settings.USHRT_MAX - 1);
      startValues[1] = a2j.parseUInt(p1y) & (b2Settings.USHRT_MAX - 1);
      startValues2[0] = startValues[0] + 1;
      startValues2[1] = startValues[1] + 1;
      var startIndices = new Array();
      var xIndex = 0;
      var yIndex = 0;
      var proxy;
      var lowerIndex = 0;
      var upperIndex = 0;
      var lowerIndexOut = new Vector_a2j_Number();
      lowerIndexOut.push(lowerIndex);
      var upperIndexOut = new Vector_a2j_Number();
      upperIndexOut.push(upperIndex);
      this.QueryAxis(lowerIndexOut, upperIndexOut, startValues[0], startValues2[0], this.m_bounds[0], 2 * this.m_proxyCount, 0);
      if (sx >= 0) xIndex = upperIndexOut[0] - 1;
      else xIndex = lowerIndexOut[0];
      this.QueryAxis(lowerIndexOut, upperIndexOut, startValues[1], startValues2[1], this.m_bounds[1], 2 * this.m_proxyCount, 1);
      if (sy >= 0) yIndex = upperIndexOut[0] - 1;
      else yIndex = lowerIndexOut[0];
      for (var i = 0; i < this.m_queryResultCount; i++) {
         subInput.maxFraction = callback(subInput, this.m_queryResults[i]);
      }
      for (;;) {
         var xProgress = 0;
         var yProgress = 0;
         xIndex += sx >= 0 ? 1 : (-1);
         if (xIndex < 0 || xIndex >= this.m_proxyCount * 2) break;
         if (sx != 0) {
            xProgress = (this.m_bounds[0][xIndex].value - p1x) / dx;
         }
         yIndex += sy >= 0 ? 1 : (-1);
         if (yIndex < 0 || yIndex >= this.m_proxyCount * 2) break;
         if (sy != 0) {
            yProgress = (this.m_bounds[1][yIndex].value - p1y) / dy;
         }
         for (;;) {
            if (sy == 0 || (sx != 0 && xProgress < yProgress)) {
               if (xProgress > subInput.maxFraction) break;
               if (sx > 0 ? this.m_bounds[0][xIndex].IsLower() : this.m_bounds[0][xIndex].IsUpper()) {
                  proxy = this.m_bounds[0][xIndex].proxy;
                  if (sy >= 0) {
                     if (proxy.lowerBounds[1] <= yIndex - 1 && proxy.upperBounds[1] >= yIndex) {
                        subInput.maxFraction = callback(subInput, proxy);
                     }
                  }
                  else {
                     if (proxy.lowerBounds[1] <= yIndex && proxy.upperBounds[1] >= yIndex + 1) {
                        subInput.maxFraction = callback(subInput, proxy);
                     }
                  }
               }
               if (subInput.maxFraction == 0) break;
               if (sx > 0) {
                  xIndex++;
                  if (xIndex == this.m_proxyCount * 2) break;
               }
               else {
                  xIndex--;
                  if (xIndex < 0) break;
               }
               xProgress = (this.m_bounds[0][xIndex].value - p1x) / dx;
            }
            else {
               if (yProgress > subInput.maxFraction) break;
               if (sy > 0 ? this.m_bounds[1][yIndex].IsLower() : this.m_bounds[1][yIndex].IsUpper()) {
                  proxy = this.m_bounds[1][yIndex].proxy;
                  if (sx >= 0) {
                     if (proxy.lowerBounds[0] <= xIndex - 1 && proxy.upperBounds[0] >= xIndex) {
                        subInput.maxFraction = callback(subInput, proxy);
                     }
                  }
                  else {
                     if (proxy.lowerBounds[0] <= xIndex && proxy.upperBounds[0] >= xIndex + 1) {
                        subInput.maxFraction = callback(subInput, proxy);
                     }
                  }
               }
               if (subInput.maxFraction == 0) break;
               if (sy > 0) {
                  yIndex++;
                  if (yIndex == this.m_proxyCount * 2) break;
               }
               else {
                  yIndex--;
                  if (yIndex < 0) break;
               }
               yProgress = (this.m_bounds[1][yIndex].value - p1y) / dy;
            }
         }
         break;
      }
      this.m_queryResultCount = 0;
      this.IncrementTimeStamp();
      return;
   }
   b2BroadPhase.prototype.ComputeBounds = function (lowerValues, upperValues, aabb) {
      var minVertexX = aabb.lowerBound.x;
      var minVertexY = aabb.lowerBound.y;
      minVertexX = b2Math.Min(minVertexX, this.m_worldAABB.upperBound.x);
      minVertexY = b2Math.Min(minVertexY, this.m_worldAABB.upperBound.y);
      minVertexX = b2Math.Max(minVertexX, this.m_worldAABB.lowerBound.x);
      minVertexY = b2Math.Max(minVertexY, this.m_worldAABB.lowerBound.y);
      var maxVertexX = aabb.upperBound.x;
      var maxVertexY = aabb.upperBound.y;
      maxVertexX = b2Math.Min(maxVertexX, this.m_worldAABB.upperBound.x);
      maxVertexY = b2Math.Min(maxVertexY, this.m_worldAABB.upperBound.y);
      maxVertexX = b2Math.Max(maxVertexX, this.m_worldAABB.lowerBound.x);
      maxVertexY = b2Math.Max(maxVertexY, this.m_worldAABB.lowerBound.y);
      lowerValues[0] = a2j.parseUInt(this.m_quantizationFactor.x * (minVertexX - this.m_worldAABB.lowerBound.x)) & (b2Settings.USHRT_MAX - 1);
      upperValues[0] = (a2j.parseUInt(this.m_quantizationFactor.x * (maxVertexX - this.m_worldAABB.lowerBound.x)) & 0x0000ffff) | 1;
      lowerValues[1] = a2j.parseUInt(this.m_quantizationFactor.y * (minVertexY - this.m_worldAABB.lowerBound.y)) & (b2Settings.USHRT_MAX - 1);
      upperValues[1] = (a2j.parseUInt(this.m_quantizationFactor.y * (maxVertexY - this.m_worldAABB.lowerBound.y)) & 0x0000ffff) | 1;
   }
   b2BroadPhase.prototype.TestOverlapValidate = function (p1, p2) {
      for (var axis = 0; axis < 2; ++axis) {
         var bounds = this.m_bounds[axis];
         var bound1 = bounds[p1.lowerBounds[axis]];
         var bound2 = bounds[p2.upperBounds[axis]];
         if (bound1.value > bound2.value) return false;
         bound1 = bounds[p1.upperBounds[axis]];
         bound2 = bounds[p2.lowerBounds[axis]];
         if (bound1.value < bound2.value) return false;
      }
      return true;
   }
   b2BroadPhase.prototype.TestOverlapBound = function (b, p) {
      for (var axis = 0; axis < 2; ++axis) {
         var bounds = this.m_bounds[axis];
         var bound = bounds[p.upperBounds[axis]];
         if (b.lowerValues[axis] > bound.value) return false;
         bound = bounds[p.lowerBounds[axis]];
         if (b.upperValues[axis] < bound.value) return false;
      }
      return true;
   }
   b2BroadPhase.prototype.QueryAxis = function (lowerQueryOut, upperQueryOut, lowerValue, upperValue, bounds, boundCount, axis) {
      if (lowerValue === undefined) lowerValue = 0;
      if (upperValue === undefined) upperValue = 0;
      if (boundCount === undefined) boundCount = 0;
      if (axis === undefined) axis = 0;
      var lowerQuery = this.BinarySearch(bounds, boundCount, lowerValue);
      var upperQuery = this.BinarySearch(bounds, boundCount, upperValue);
      var bound;
      for (var j = lowerQuery; j < upperQuery; ++j) {
         bound = bounds[j];
         if (bound.IsLower()) {
            this.IncrementOverlapCount(bound.proxy);
         }
      }
      if (lowerQuery > 0) {
         var i = parseInt(lowerQuery - 1);
         bound = bounds[i];
         var s = parseInt(bound.stabbingCount);
         while (s) {
            bound = bounds[i];
            if (bound.IsLower()) {
               var proxy = bound.proxy;
               if (lowerQuery <= proxy.upperBounds[axis]) {
                  this.IncrementOverlapCount(bound.proxy);
                  --s;
               }
            }--i;
         }
      }
      lowerQueryOut[0] = lowerQuery;
      upperQueryOut[0] = upperQuery;
   }
   b2BroadPhase.prototype.IncrementOverlapCount = function (proxy) {
      if (proxy.timeStamp < this.m_timeStamp) {
         proxy.timeStamp = this.m_timeStamp;
         proxy.overlapCount = 1;
      }
      else {
         proxy.overlapCount = 2;
         this.m_queryResults[this.m_queryResultCount] = proxy;
         ++this.m_queryResultCount;
      }
   }
   b2BroadPhase.prototype.IncrementTimeStamp = function () {
      if (this.m_timeStamp == b2Settings.USHRT_MAX) {
         for (var i = 0; i < this.m_proxyPool.length; ++i) {
            ((this.m_proxyPool[i] instanceof b2Proxy ? this.m_proxyPool[i] : null)).timeStamp = 0;
         }
         this.m_timeStamp = 1;
      }
      else {
         ++this.m_timeStamp;
      }
   }
   b2BroadPhase.prototype.BinarySearch = function (bounds, count, value) {
      if (count === undefined) count = 0;
      if (value === undefined) value = 0;
      var low = 0;
      var high = parseInt(count - 1);
      while (low <= high) {
         var mid = parseInt(((low + high) / 2));
         var bound = bounds[mid];
         if (bound.value > value) {
            high = mid - 1;
         }
         else if (bound.value < value) {
            low = mid + 1;
         }
         else {
            return a2j.parseUInt(mid);
         }
      }
      return a2j.parseUInt(low);
   }
   b2BroadPhase.BinarySearch = b2BroadPhase.prototype.BinarySearch;
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2BroadPhase.s_validate = false;
      Box2D.Collision.b2BroadPhase.prototype.s_validate = Box2D.Collision.b2BroadPhase.s_validate;
      Box2D.Collision.b2BroadPhase.b2_invalid = parseInt(b2Settings.USHRT_MAX);
      Box2D.Collision.b2BroadPhase.prototype.b2_invalid = Box2D.Collision.b2BroadPhase.b2_invalid;
      Box2D.Collision.b2BroadPhase.b2_nullEdge = parseInt(b2Settings.USHRT_MAX);
      Box2D.Collision.b2BroadPhase.prototype.b2_nullEdge = Box2D.Collision.b2BroadPhase.b2_nullEdge;
   });
   b2BroadPhase.__implements = {};
   b2BroadPhase.__implements[IBroadPhase] = true;
   b2Collision.b2Collision = function () {};
   b2Collision.prototype.ClipSegmentToLine = function (vOut, vIn, normal, offset) {
      if (offset === undefined) offset = 0;
      var cv;
      var numOut = 0;
      cv = vIn[0];
      var vIn0 = cv.v;
      cv = vIn[1];
      var vIn1 = cv.v;
      var distance0 = normal.x * vIn0.x + normal.y * vIn0.y - offset;
      var distance1 = normal.x * vIn1.x + normal.y * vIn1.y - offset;
      if (distance0 <= 0.0) vOut[numOut++].Set(vIn[0]);
      if (distance1 <= 0.0) vOut[numOut++].Set(vIn[1]);
      if (distance0 * distance1 < 0.0) {
         var interp = distance0 / (distance0 - distance1);
         cv = vOut[numOut];
         var tVec = cv.v;
         tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
         tVec.y = vIn0.y + interp * (vIn1.y - vIn0.y);
         cv = vOut[numOut];
         var cv2;
         if (distance0 > 0.0) {
            cv2 = vIn[0];
            cv.id = cv2.id;
         }
         else {
            cv2 = vIn[1];
            cv.id = cv2.id;
         }++numOut;
      }
      return numOut;
   }
   b2Collision.ClipSegmentToLine = b2Collision.prototype.ClipSegmentToLine;
   b2Collision.prototype.EdgeSeparation = function (poly1, xf1, edge1, poly2, xf2) {
      if (edge1 === undefined) edge1 = 0;
      var count1 = parseInt(poly1.m_vertexCount);
      var vertices1 = poly1.m_vertices;
      var normals1 = poly1.m_normals;
      var count2 = parseInt(poly2.m_vertexCount);
      var vertices2 = poly2.m_vertices;
      var tMat;
      var tVec;
      tMat = xf1.R;
      tVec = normals1[edge1];
      var normal1WorldX = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var normal1WorldY = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tMat = xf2.R;
      var normal1X = (tMat.col1.x * normal1WorldX + tMat.col1.y * normal1WorldY);
      var normal1Y = (tMat.col2.x * normal1WorldX + tMat.col2.y * normal1WorldY);
      var index = 0;
      var minDot = Number.MAX_VALUE;
      for (var i = 0; i < count2; ++i) {
         tVec = vertices2[i];
         var dot = tVec.x * normal1X + tVec.y * normal1Y;
         if (dot < minDot) {
            minDot = dot;
            index = i;
         }
      }
      tVec = vertices1[edge1];
      tMat = xf1.R;
      var v1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var v1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tVec = vertices2[index];
      tMat = xf2.R;
      var v2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var v2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      v2X -= v1X;
      v2Y -= v1Y;
      var separation = v2X * normal1WorldX + v2Y * normal1WorldY;
      return separation;
   }
   b2Collision.EdgeSeparation = b2Collision.prototype.EdgeSeparation;
   b2Collision.prototype.FindMaxSeparation = function (edgeIndex, poly1, xf1, poly2, xf2) {
      var count1 = parseInt(poly1.m_vertexCount);
      var normals1 = poly1.m_normals;
      var tVec;
      var tMat;
      tMat = xf2.R;
      tVec = poly2.m_centroid;
      var dX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var dY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tMat = xf1.R;
      tVec = poly1.m_centroid;
      dX -= xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      dY -= xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      var dLocal1X = (dX * xf1.R.col1.x + dY * xf1.R.col1.y);
      var dLocal1Y = (dX * xf1.R.col2.x + dY * xf1.R.col2.y);
      var edge = 0;
      var maxDot = (-Number.MAX_VALUE);
      for (var i = 0; i < count1; ++i) {
         tVec = normals1[i];
         var dot = (tVec.x * dLocal1X + tVec.y * dLocal1Y);
         if (dot > maxDot) {
            maxDot = dot;
            edge = i;
         }
      }
      var s = this.EdgeSeparation(poly1, xf1, edge, poly2, xf2);
      var prevEdge = parseInt(edge - 1 >= 0 ? edge - 1 : count1 - 1);
      var sPrev = this.EdgeSeparation(poly1, xf1, prevEdge, poly2, xf2);
      var nextEdge = parseInt(edge + 1 < count1 ? edge + 1 : 0);
      var sNext = this.EdgeSeparation(poly1, xf1, nextEdge, poly2, xf2);
      var bestEdge = 0;
      var bestSeparation = 0;
      var increment = 0;
      if (sPrev > s && sPrev > sNext) {
         increment = (-1);
         bestEdge = prevEdge;
         bestSeparation = sPrev;
      }
      else if (sNext > s) {
         increment = 1;
         bestEdge = nextEdge;
         bestSeparation = sNext;
      }
      else {
         edgeIndex[0] = edge;
         return s;
      }
      while (true) {
         if (increment == (-1)) edge = bestEdge - 1 >= 0 ? bestEdge - 1 : count1 - 1;
         else edge = bestEdge + 1 < count1 ? bestEdge + 1 : 0;s = this.EdgeSeparation(poly1, xf1, edge, poly2, xf2);
         if (s > bestSeparation) {
            bestEdge = edge;
            bestSeparation = s;
         }
         else {
            break;
         }
      }
      edgeIndex[0] = bestEdge;
      return bestSeparation;
   }
   b2Collision.FindMaxSeparation = b2Collision.prototype.FindMaxSeparation;
   b2Collision.prototype.FindIncidentEdge = function (c, poly1, xf1, edge1, poly2, xf2) {
      if (edge1 === undefined) edge1 = 0;
      var count1 = parseInt(poly1.m_vertexCount);
      var normals1 = poly1.m_normals;
      var count2 = parseInt(poly2.m_vertexCount);
      var vertices2 = poly2.m_vertices;
      var normals2 = poly2.m_normals;
      var tMat;
      var tVec;
      tMat = xf1.R;
      tVec = normals1[edge1];
      var normal1X = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var normal1Y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tMat = xf2.R;
      var tX = (tMat.col1.x * normal1X + tMat.col1.y * normal1Y);
      normal1Y = (tMat.col2.x * normal1X + tMat.col2.y * normal1Y);
      normal1X = tX;
      var index = 0;
      var minDot = Number.MAX_VALUE;
      for (var i = 0; i < count2; ++i) {
         tVec = normals2[i];
         var dot = (normal1X * tVec.x + normal1Y * tVec.y);
         if (dot < minDot) {
            minDot = dot;
            index = i;
         }
      }
      var tClip;
      var i1 = parseInt(index);
      var i2 = parseInt(i1 + 1 < count2 ? i1 + 1 : 0);
      tClip = c[0];
      tVec = vertices2[i1];
      tMat = xf2.R;
      tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tClip.id.features.referenceEdge = edge1;
      tClip.id.features.incidentEdge = i1;
      tClip.id.features.incidentVertex = 0;
      tClip = c[1];
      tVec = vertices2[i2];
      tMat = xf2.R;
      tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tClip.id.features.referenceEdge = edge1;
      tClip.id.features.incidentEdge = i2;
      tClip.id.features.incidentVertex = 1;
   }
   b2Collision.FindIncidentEdge = b2Collision.prototype.FindIncidentEdge;
   b2Collision.prototype.MakeClipPointVector = function () {
      var r = new Vector(2);
      r[0] = new ClipVertex();
      r[1] = new ClipVertex();
      return r;
   }
   b2Collision.MakeClipPointVector = b2Collision.prototype.MakeClipPointVector;
   b2Collision.prototype.CollidePolygons = function (manifold, polyA, xfA, polyB, xfB) {
      var cv;
      manifold.m_pointCount = 0;
      var totalRadius = polyA.m_radius + polyB.m_radius;
      var edgeA = 0;
      b2Collision.s_edgeAO[0] = edgeA;
      var separationA = this.FindMaxSeparation(b2Collision.s_edgeAO, polyA, xfA, polyB, xfB);
      edgeA = b2Collision.s_edgeAO[0];
      if (separationA > totalRadius) return;
      var edgeB = 0;
      b2Collision.s_edgeBO[0] = edgeB;
      var separationB = this.FindMaxSeparation(b2Collision.s_edgeBO, polyB, xfB, polyA, xfA);
      edgeB = b2Collision.s_edgeBO[0];
      if (separationB > totalRadius) return;
      var poly1;
      var poly2;
      var xf1;
      var xf2;
      var edge1 = 0;
      var flip = 0;
      var k_relativeTol = 0.98;
      var k_absoluteTol = 0.001;
      var tMat;
      if (separationB > k_relativeTol * separationA + k_absoluteTol) {
         poly1 = polyB;
         poly2 = polyA;
         xf1 = xfB;
         xf2 = xfA;
         edge1 = edgeB;
         manifold.m_type = b2Manifold.e_faceB;
         flip = 1;
      }
      else {
         poly1 = polyA;
         poly2 = polyB;
         xf1 = xfA;
         xf2 = xfB;
         edge1 = edgeA;
         manifold.m_type = b2Manifold.e_faceA;
         flip = 0;
      }
      var incidentEdge = b2Collision.s_incidentEdge;
      this.FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);
      var count1 = parseInt(poly1.m_vertexCount);
      var vertices1 = poly1.m_vertices;
      var local_v11 = vertices1[edge1];
      var local_v12;
      if (edge1 + 1 < count1) {
         local_v12 = vertices1[parseInt(edge1 + 1)];
      }
      else {
         local_v12 = vertices1[0];
      }
      var localTangent = b2Collision.s_localTangent;
      localTangent.Set(local_v12.x - local_v11.x, local_v12.y - local_v11.y);
      localTangent.Normalize();
      var localNormal = b2Collision.s_localNormal;
      localNormal.x = localTangent.y;
      localNormal.y = (-localTangent.x);
      var planePoint = b2Collision.s_planePoint;
      planePoint.Set(0.5 * (local_v11.x + local_v12.x), 0.5 * (local_v11.y + local_v12.y));
      var tangent = b2Collision.s_tangent;
      tMat = xf1.R;
      tangent.x = (tMat.col1.x * localTangent.x + tMat.col2.x * localTangent.y);
      tangent.y = (tMat.col1.y * localTangent.x + tMat.col2.y * localTangent.y);
      var tangent2 = b2Collision.s_tangent2;
      tangent2.x = (-tangent.x);
      tangent2.y = (-tangent.y);
      var normal = b2Collision.s_normal;
      normal.x = tangent.y;
      normal.y = (-tangent.x);
      var v11 = b2Collision.s_v11;
      var v12 = b2Collision.s_v12;
      v11.x = xf1.position.x + (tMat.col1.x * local_v11.x + tMat.col2.x * local_v11.y);
      v11.y = xf1.position.y + (tMat.col1.y * local_v11.x + tMat.col2.y * local_v11.y);
      v12.x = xf1.position.x + (tMat.col1.x * local_v12.x + tMat.col2.x * local_v12.y);
      v12.y = xf1.position.y + (tMat.col1.y * local_v12.x + tMat.col2.y * local_v12.y);
      var frontOffset = normal.x * v11.x + normal.y * v11.y;
      var sideOffset1 = (-tangent.x * v11.x) - tangent.y * v11.y + totalRadius;
      var sideOffset2 = tangent.x * v12.x + tangent.y * v12.y + totalRadius;
      var clipPoints1 = b2Collision.s_clipPoints1;
      var clipPoints2 = b2Collision.s_clipPoints2;
      var np = 0;
      np = this.ClipSegmentToLine(clipPoints1, incidentEdge, tangent2, sideOffset1);
      if (np < 2) return;
      np = this.ClipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2);
      if (np < 2) return;
      manifold.m_localPlaneNormal.SetV(localNormal);
      manifold.m_localPoint.SetV(planePoint);
      var pointCount = 0;
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; ++i) {
         cv = clipPoints2[i];
         var separation = normal.x * cv.v.x + normal.y * cv.v.y - frontOffset;
         if (separation <= totalRadius) {
            var cp = manifold.m_points[pointCount];
            tMat = xf2.R;
            var tX = cv.v.x - xf2.position.x;
            var tY = cv.v.y - xf2.position.y;
            cp.m_localPoint.x = (tX * tMat.col1.x + tY * tMat.col1.y);
            cp.m_localPoint.y = (tX * tMat.col2.x + tY * tMat.col2.y);
            cp.m_id.Set(cv.id);
            cp.m_id.features.flip = flip;
            ++pointCount;
         }
      }
      manifold.m_pointCount = pointCount;
   }
   b2Collision.CollidePolygons = b2Collision.prototype.CollidePolygons;
   b2Collision.prototype.CollideCircles = function (manifold, circle1, xf1, circle2, xf2) {
      manifold.m_pointCount = 0;
      var tMat;
      var tVec;
      tMat = xf1.R;
      tVec = circle1.m_p;
      var p1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var p1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      tMat = xf2.R;
      tVec = circle2.m_p;
      var p2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var p2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      var dX = p2X - p1X;
      var dY = p2Y - p1Y;
      var distSqr = dX * dX + dY * dY;
      var radius = circle1.m_radius + circle2.m_radius;
      if (distSqr > radius * radius) {
         return;
      }
      manifold.m_type = b2Manifold.e_circles;
      manifold.m_localPoint.SetV(circle1.m_p);
      manifold.m_localPlaneNormal.SetZero();
      manifold.m_pointCount = 1;
      manifold.m_points[0].m_localPoint.SetV(circle2.m_p);
      manifold.m_points[0].m_id.key = 0;
   }
   b2Collision.CollideCircles = b2Collision.prototype.CollideCircles;
   b2Collision.prototype.CollidePolygonAndCircle = function (manifold, polygon, xf1, circle, xf2) {
      manifold.m_pointCount = 0;
      var tPoint;
      var dX = 0;
      var dY = 0;
      var positionX = 0;
      var positionY = 0;
      var tVec;
      var tMat;
      tMat = xf2.R;
      tVec = circle.m_p;
      var cX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      dX = cX - xf1.position.x;
      dY = cY - xf1.position.y;
      tMat = xf1.R;
      var cLocalX = (dX * tMat.col1.x + dY * tMat.col1.y);
      var cLocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
      var dist = 0;
      var normalIndex = 0;
      var separation = (-Number.MAX_VALUE);
      var radius = polygon.m_radius + circle.m_radius;
      var vertexCount = parseInt(polygon.m_vertexCount);
      var vertices = polygon.m_vertices;
      var normals = polygon.m_normals;
      for (var i = 0; i < vertexCount; ++i) {
         tVec = vertices[i];
         dX = cLocalX - tVec.x;
         dY = cLocalY - tVec.y;
         tVec = normals[i];
         var s = tVec.x * dX + tVec.y * dY;
         if (s > radius) {
            return;
         }
         if (s > separation) {
            separation = s;
            normalIndex = i;
         }
      }
      var vertIndex1 = parseInt(normalIndex);
      var vertIndex2 = parseInt(vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0);
      var v1 = vertices[vertIndex1];
      var v2 = vertices[vertIndex2];
      if (separation < Number.MIN_VALUE) {
         manifold.m_pointCount = 1;
         manifold.m_type = b2Manifold.e_faceA;
         manifold.m_localPlaneNormal.SetV(normals[normalIndex]);
         manifold.m_localPoint.x = 0.5 * (v1.x + v2.x);
         manifold.m_localPoint.y = 0.5 * (v1.y + v2.y);
         manifold.m_points[0].m_localPoint.SetV(circle.m_p);
         manifold.m_points[0].m_id.key = 0;
         return;
      }
      var u1 = (cLocalX - v1.x) * (v2.x - v1.x) + (cLocalY - v1.y) * (v2.y - v1.y);
      var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + (cLocalY - v2.y) * (v1.y - v2.y);
      if (u1 <= 0.0) {
         if ((cLocalX - v1.x) * (cLocalX - v1.x) + (cLocalY - v1.y) * (cLocalY - v1.y) > radius * radius) return;
         manifold.m_pointCount = 1;
         manifold.m_type = b2Manifold.e_faceA;
         manifold.m_localPlaneNormal.x = cLocalX - v1.x;
         manifold.m_localPlaneNormal.y = cLocalY - v1.y;
         manifold.m_localPlaneNormal.Normalize();
         manifold.m_localPoint.SetV(v1);
         manifold.m_points[0].m_localPoint.SetV(circle.m_p);
         manifold.m_points[0].m_id.key = 0;
      }
      else if (u2 <= 0) {
         if ((cLocalX - v2.x) * (cLocalX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) > radius * radius) return;
         manifold.m_pointCount = 1;
         manifold.m_type = b2Manifold.e_faceA;
         manifold.m_localPlaneNormal.x = cLocalX - v2.x;
         manifold.m_localPlaneNormal.y = cLocalY - v2.y;
         manifold.m_localPlaneNormal.Normalize();
         manifold.m_localPoint.SetV(v2);
         manifold.m_points[0].m_localPoint.SetV(circle.m_p);
         manifold.m_points[0].m_id.key = 0;
      }
      else {
         var faceCenterX = 0.5 * (v1.x + v2.x);
         var faceCenterY = 0.5 * (v1.y + v2.y);
         separation = (cLocalX - faceCenterX) * normals[vertIndex1].x + (cLocalY - faceCenterY) * normals[vertIndex1].y;
         if (separation > radius) return;
         manifold.m_pointCount = 1;
         manifold.m_type = b2Manifold.e_faceA;
         manifold.m_localPlaneNormal.x = normals[vertIndex1].x;
         manifold.m_localPlaneNormal.y = normals[vertIndex1].y;
         manifold.m_localPlaneNormal.Normalize();
         manifold.m_localPoint.Set(faceCenterX, faceCenterY);
         manifold.m_points[0].m_localPoint.SetV(circle.m_p);
         manifold.m_points[0].m_id.key = 0;
      }
   }
   b2Collision.CollidePolygonAndCircle = b2Collision.prototype.CollidePolygonAndCircle;
   b2Collision.prototype.TestOverlap = function (a, b) {
      var t1 = b.lowerBound;
      var t2 = a.upperBound;
      var d1X = t1.x - t2.x;
      var d1Y = t1.y - t2.y;
      t1 = a.lowerBound;
      t2 = b.upperBound;
      var d2X = t1.x - t2.x;
      var d2Y = t1.y - t2.y;
      if (d1X > 0.0 || d1Y > 0.0) return false;
      if (d2X > 0.0 || d2Y > 0.0) return false;
      return true;
   }
   b2Collision.TestOverlap = b2Collision.prototype.TestOverlap;
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2Collision.s_incidentEdge = b2Collision.MakeClipPointVector();
      Box2D.Collision.b2Collision.prototype.s_incidentEdge = Box2D.Collision.b2Collision.s_incidentEdge;
      Box2D.Collision.b2Collision.s_clipPoints1 = b2Collision.MakeClipPointVector();
      Box2D.Collision.b2Collision.prototype.s_clipPoints1 = Box2D.Collision.b2Collision.s_clipPoints1;
      Box2D.Collision.b2Collision.s_clipPoints2 = b2Collision.MakeClipPointVector();
      Box2D.Collision.b2Collision.prototype.s_clipPoints2 = Box2D.Collision.b2Collision.s_clipPoints2;
      Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
      Box2D.Collision.b2Collision.prototype.s_edgeAO = Box2D.Collision.b2Collision.s_edgeAO;
      Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
      Box2D.Collision.b2Collision.prototype.s_edgeBO = Box2D.Collision.b2Collision.s_edgeBO;
      Box2D.Collision.b2Collision.s_localTangent = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_localTangent = Box2D.Collision.b2Collision.s_localTangent;
      Box2D.Collision.b2Collision.s_localNormal = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_localNormal = Box2D.Collision.b2Collision.s_localNormal;
      Box2D.Collision.b2Collision.s_planePoint = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_planePoint = Box2D.Collision.b2Collision.s_planePoint;
      Box2D.Collision.b2Collision.s_normal = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_normal = Box2D.Collision.b2Collision.s_normal;
      Box2D.Collision.b2Collision.s_tangent = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_tangent = Box2D.Collision.b2Collision.s_tangent;
      Box2D.Collision.b2Collision.s_tangent2 = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_tangent2 = Box2D.Collision.b2Collision.s_tangent2;
      Box2D.Collision.b2Collision.s_v11 = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_v11 = Box2D.Collision.b2Collision.s_v11;
      Box2D.Collision.b2Collision.s_v12 = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.s_v12 = Box2D.Collision.b2Collision.s_v12;
      Box2D.Collision.b2Collision.b2CollidePolyTempVec = new b2Vec2();
      Box2D.Collision.b2Collision.prototype.b2CollidePolyTempVec = Box2D.Collision.b2Collision.b2CollidePolyTempVec;
      Box2D.Collision.b2Collision.b2_nullFeature = 0x000000ff;
      Box2D.Collision.b2Collision.prototype.b2_nullFeature = Box2D.Collision.b2Collision.b2_nullFeature;
   });
   b2ContactID.b2ContactID = function () {
      this.features = new Features();
   };
   b2ContactID.prototype.b2ContactID = function () {
      this.features._m_id = this;
   }
   b2ContactID.prototype.Set = function (id) {
      this.key = id._key;
   }
   b2ContactID.prototype.Copy = function () {
      var id = new b2ContactID();
      id.key = this.key;
      return id;
   }
   b2ContactID.prototype.__defineGetter__('key', function () {
      return this._key;
   });
   b2ContactID.prototype.__defineSetter__('key', function (value) {
      if (value === undefined) value = 0;
      this._key = value;
      this.features._referenceEdge = this._key & 0x000000ff;
      this.features._incidentEdge = ((this._key & 0x0000ff00) >> 8) & 0x000000ff;
      this.features._incidentVertex = ((this._key & 0x00ff0000) >> 16) & 0x000000ff;
      this.features._flip = ((this._key & 0xff000000) >> 24) & 0x000000ff;
   });
   b2ContactPoint.b2ContactPoint = function () {
      this.position = new b2Vec2();
      this.velocity = new b2Vec2();
      this.normal = new b2Vec2();
      this.id = new b2ContactID();
   };
   b2Distance.b2Distance = function () {};
   b2Distance.prototype.Distance = function (output, cache, input) {
      ++b2Distance.b2_gjkCalls;
      var proxyA = input.proxyA;
      var proxyB = input.proxyB;
      var transformA = input.transformA;
      var transformB = input.transformB;
      var simplex = b2Distance.s_simplex;
      simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);
      var vertices = simplex.m_vertices;
      var k_maxIters = 20;
      var saveA = b2Distance.s_saveA;
      var saveB = b2Distance.s_saveB;
      var saveCount = 0;
      var closestPoint = simplex.GetClosestPoint();
      var distanceSqr1 = closestPoint.LengthSquared();
      var distanceSqr2 = distanceSqr1;
      var i = 0;
      var p;
      var iter = 0;
      while (iter < k_maxIters) {
         saveCount = simplex.m_count;
         for (i = 0;
         i < saveCount; i++) {
            saveA[i] = vertices[i].indexA;
            saveB[i] = vertices[i].indexB;
         }
         switch (simplex.m_count) {
         case 1:
            break;
         case 2:
            simplex.Solve2();
            break;
         case 3:
            simplex.Solve3();
            break;
         default:
            b2Settings.b2Assert(false);
         }
         if (simplex.m_count == 3) {
            break;
         }
         p = simplex.GetClosestPoint();
         distanceSqr2 = p.LengthSquared();
         if (distanceSqr2 > distanceSqr1) {}
         distanceSqr1 = distanceSqr2;
         var d = simplex.GetSearchDirection();
         if (d.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) {
            break;
         }
         var vertex = vertices[simplex.m_count];
         vertex.indexA = proxyA.GetSupport(b2Math.MulTMV(transformA.R, d.GetNegative()));
         vertex.wA = b2Math.MulX(transformA, proxyA.GetVertex(vertex.indexA));
         vertex.indexB = proxyB.GetSupport(b2Math.MulTMV(transformB.R, d));
         vertex.wB = b2Math.MulX(transformB, proxyB.GetVertex(vertex.indexB));
         vertex.w = b2Math.SubtractVV(vertex.wB, vertex.wA);
         ++iter;
         ++b2Distance.b2_gjkIters;
         var duplicate = false;
         for (i = 0;
         i < saveCount; i++) {
            if (vertex.indexA == saveA[i] && vertex.indexB == saveB[i]) {
               duplicate = true;
               break;
            }
         }
         if (duplicate) {
            break;
         }++simplex.m_count;
      }
      b2Distance.b2_gjkMaxIters = b2Math.Max(b2Distance.b2_gjkMaxIters, iter);
      simplex.GetWitnessPoints(output.pointA, output.pointB);
      output.distance = b2Math.SubtractVV(output.pointA, output.pointB).Length();
      output.iterations = iter;
      simplex.WriteCache(cache);
      if (input.useRadii) {
         var rA = proxyA.m_radius;
         var rB = proxyB.m_radius;
         if (output.distance > rA + rB && output.distance > Number.MIN_VALUE) {
            output.distance -= rA + rB;
            var normal = b2Math.SubtractVV(output.pointB, output.pointA);
            normal.Normalize();
            output.pointA.x += rA * normal.x;
            output.pointA.y += rA * normal.y;
            output.pointB.x -= rB * normal.x;
            output.pointB.y -= rB * normal.y;
         }
         else {
            p = new b2Vec2();
            p.x = .5 * (output.pointA.x + output.pointB.x);
            p.y = .5 * (output.pointA.y + output.pointB.y);
            output.pointA.x = output.pointB.x = p.x;
            output.pointA.y = output.pointB.y = p.y;
            output.distance = 0.0;
         }
      }
   }
   b2Distance.Distance = b2Distance.prototype.Distance;
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2Distance.s_simplex = new b2Simplex();
      Box2D.Collision.b2Distance.prototype.s_simplex = Box2D.Collision.b2Distance.s_simplex;
      Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
      Box2D.Collision.b2Distance.prototype.s_saveA = Box2D.Collision.b2Distance.s_saveA;
      Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3);
      Box2D.Collision.b2Distance.prototype.s_saveB = Box2D.Collision.b2Distance.s_saveB;
   });
   b2DistanceInput.b2DistanceInput = function () {};
   b2DistanceOutput.b2DistanceOutput = function () {
      this.pointA = new b2Vec2();
      this.pointB = new b2Vec2();
   };
   b2DistanceProxy.b2DistanceProxy = function () {};
   b2DistanceProxy.prototype.Set = function (shape) {
      switch (shape.GetType()) {
      case b2Shape.e_circleShape:
         {
            var circle = (shape instanceof b2CircleShape ? shape : null);
            this.m_vertices = new Vector(1, true);
            this.m_vertices[0] = circle.m_p;
            this.m_count = 1;
            this.m_radius = circle.m_radius;
         }
         break;
      case b2Shape.e_polygonShape:
         {
            var polygon = (shape instanceof b2PolygonShape ? shape : null);
            this.m_vertices = polygon.m_vertices;
            this.m_count = polygon.m_vertexCount;
            this.m_radius = polygon.m_radius;
         }
         break;
      default:
         b2Settings.b2Assert(false);
      }
   }
   b2DistanceProxy.prototype.GetSupport = function (d) {
      var bestIndex = 0;
      var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
      for (var i = 1; i < this.m_count; ++i) {
         var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
         if (value > bestValue) {
            bestIndex = i;
            bestValue = value;
         }
      }
      return bestIndex;
   }
   b2DistanceProxy.prototype.GetSupportVertex = function (d) {
      var bestIndex = 0;
      var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
      for (var i = 1; i < this.m_count; ++i) {
         var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
         if (value > bestValue) {
            bestIndex = i;
            bestValue = value;
         }
      }
      return this.m_vertices[bestIndex];
   }
   b2DistanceProxy.prototype.GetVertexCount = function () {
      return this.m_count;
   }
   b2DistanceProxy.prototype.GetVertex = function (index) {
      if (index === undefined) index = 0;
      b2Settings.b2Assert(0 <= index && index < this.m_count);
      return this.m_vertices[index];
   }
   b2DynamicTree.b2DynamicTree = function () {};
   b2DynamicTree.prototype.b2DynamicTree = function () {
      this.m_root = null;
      this.m_freeList = null;
      this.m_path = 0;
      this.m_insertionCount = 0;
   }
   b2DynamicTree.prototype.CreateProxy = function (aabb, userData) {
      var node = this.AllocateNode();
      var extendX = b2Settings.b2_aabbExtension;
      var extendY = b2Settings.b2_aabbExtension;
      node.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
      node.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
      node.aabb.upperBound.x = aabb.upperBound.x + extendX;
      node.aabb.upperBound.y = aabb.upperBound.y + extendY;
      node.userData = userData;
      this.InsertLeaf(node);
      return node;
   }
   b2DynamicTree.prototype.DestroyProxy = function (proxy) {
      this.RemoveLeaf(proxy);
      this.FreeNode(proxy);
   }
   b2DynamicTree.prototype.MoveProxy = function (proxy, aabb, displacement) {
      b2Settings.b2Assert(proxy.IsLeaf());
      if (proxy.aabb.Contains(aabb)) {
         return false;
      }
      this.RemoveLeaf(proxy);
      var extendX = b2Settings.b2_aabbExtension + b2Settings.b2_aabbMultiplier * (displacement.x > 0 ? displacement.x : (-displacement.x));
      var extendY = b2Settings.b2_aabbExtension + b2Settings.b2_aabbMultiplier * (displacement.y > 0 ? displacement.y : (-displacement.y));
      proxy.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
      proxy.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
      proxy.aabb.upperBound.x = aabb.upperBound.x + extendX;
      proxy.aabb.upperBound.y = aabb.upperBound.y + extendY;
      this.InsertLeaf(proxy);
      return true;
   }
   b2DynamicTree.prototype.Rebalance = function (iterations) {
      if (iterations === undefined) iterations = 0;
      if (this.m_root == null) return;
      for (var i = 0; i < iterations; i++) {
         var node = this.m_root;
         var bit = 0;
         while (node.IsLeaf() == false) {
            node = (this.m_path >> bit) & 1 ? node.child2 : node.child1;
            bit = (bit + 1) & 31;
         }++this.m_path;
         this.RemoveLeaf(node);
         this.InsertLeaf(node);
      }
   }
   b2DynamicTree.prototype.GetFatAABB = function (proxy) {
      return proxy.aabb;
   }
   b2DynamicTree.prototype.GetUserData = function (proxy) {
      return proxy.userData;
   }
   b2DynamicTree.prototype.Query = function (callback, aabb) {
      if (this.m_root == null) return;
      var stack = new Vector();
      var count = 0;
      stack[count++] = this.m_root;
      while (count > 0) {
         var node = stack[--count];
         if (node.aabb.TestOverlap(aabb)) {
            if (node.IsLeaf()) {
               var proceed = callback(node);
               if (!proceed) return;
            }
            else {
               stack[count++] = node.child1;
               stack[count++] = node.child2;
            }
         }
      }
   }
   b2DynamicTree.prototype.RayCast = function (callback, input) {
      if (this.m_root == null) return;
      var p1 = input.p1;
      var p2 = input.p2;
      var r = b2Math.SubtractVV(p1, p2);
      r.Normalize();
      var v = b2Math.CrossFV(1.0, r);
      var abs_v = b2Math.AbsV(v);
      var maxFraction = input.maxFraction;
      var segmentAABB = new b2AABB();
      var tX = 0;
      var tY = 0; {
         tX = p1.x + maxFraction * (p2.x - p1.x);
         tY = p1.y + maxFraction * (p2.y - p1.y);
         segmentAABB.lowerBound.x = Math.min(p1.x, tX);
         segmentAABB.lowerBound.y = Math.min(p1.y, tY);
         segmentAABB.upperBound.x = Math.max(p1.x, tX);
         segmentAABB.upperBound.y = Math.max(p1.y, tY);
      }
      var stack = new Vector();
      var count = 0;
      stack[count++] = this.m_root;
      while (count > 0) {
         var node = stack[--count];
         if (node.aabb.TestOverlap(segmentAABB) == false) {
            continue;
         }
         var c = node.aabb.GetCenter();
         var h = node.aabb.GetExtents();
         var separation = Math.abs(v.x * (p1.x - c.x) + v.y * (p1.y - c.y)) - abs_v.x * h.x - abs_v.y * h.y;
         if (separation > 0.0) continue;
         if (node.IsLeaf()) {
            var subInput = new b2RayCastInput();
            subInput.p1 = input.p1;
            subInput.p2 = input.p2;
            subInput.maxFraction = input.maxFraction;
            maxFraction = callback(subInput, node);
            if (maxFraction == 0.0) return;
            if (maxFraction > 0.0) {
               tX = p1.x + maxFraction * (p2.x - p1.x);
               tY = p1.y + maxFraction * (p2.y - p1.y);
               segmentAABB.lowerBound.x = Math.min(p1.x, tX);
               segmentAABB.lowerBound.y = Math.min(p1.y, tY);
               segmentAABB.upperBound.x = Math.max(p1.x, tX);
               segmentAABB.upperBound.y = Math.max(p1.y, tY);
            }
         }
         else {
            stack[count++] = node.child1;
            stack[count++] = node.child2;
         }
      }
   }
   b2DynamicTree.prototype.AllocateNode = function () {
      if (this.m_freeList) {
         var node = this.m_freeList;
         this.m_freeList = node.parent;
         node.parent = null;
         node.child1 = null;
         node.child2 = null;
         return node;
      }
      return new b2DynamicTreeNode();
   }
   b2DynamicTree.prototype.FreeNode = function (node) {
      node.parent = this.m_freeList;
      this.m_freeList = node;
   }
   b2DynamicTree.prototype.InsertLeaf = function (leaf) {
      ++this.m_insertionCount;
      if (this.m_root == null) {
         this.m_root = leaf;
         this.m_root.parent = null;
         return;
      }
      var center = leaf.aabb.GetCenter();
      var sibling = this.m_root;
      if (sibling.IsLeaf() == false) {
         do {
            var child1 = sibling.child1;
            var child2 = sibling.child2;
            var norm1 = Math.abs((child1.aabb.lowerBound.x + child1.aabb.upperBound.x) / 2 - center.x) + Math.abs((child1.aabb.lowerBound.y + child1.aabb.upperBound.y) / 2 - center.y);
            var norm2 = Math.abs((child2.aabb.lowerBound.x + child2.aabb.upperBound.x) / 2 - center.x) + Math.abs((child2.aabb.lowerBound.y + child2.aabb.upperBound.y) / 2 - center.y);
            if (norm1 < norm2) {
               sibling = child1;
            }
            else {
               sibling = child2;
            }
         }
         while (sibling.IsLeaf() == false)
      }
      var node1 = sibling.parent;
      var node2 = this.AllocateNode();
      node2.parent = node1;
      node2.userData = null;
      node2.aabb.Combine(leaf.aabb, sibling.aabb);
      if (node1) {
         if (sibling.parent.child1 == sibling) {
            node1.child1 = node2;
         }
         else {
            node1.child2 = node2;
         }
         node2.child1 = sibling;
         node2.child2 = leaf;
         sibling.parent = node2;
         leaf.parent = node2;
         do {
            if (node1.aabb.Contains(node2.aabb)) break;
            node1.aabb.Combine(node1.child1.aabb, node1.child2.aabb);
            node2 = node1;
            node1 = node1.parent;
         }
         while (node1)
      }
      else {
         node2.child1 = sibling;
         node2.child2 = leaf;
         sibling.parent = node2;
         leaf.parent = node2;
         this.m_root = node2;
      }
   }
   b2DynamicTree.prototype.RemoveLeaf = function (leaf) {
      if (leaf == this.m_root) {
         this.m_root = null;
         return;
      }
      var node2 = leaf.parent;
      var node1 = node2.parent;
      var sibling;
      if (node2.child1 == leaf) {
         sibling = node2.child2;
      }
      else {
         sibling = node2.child1;
      }
      if (node1) {
         if (node1.child1 == node2) {
            node1.child1 = sibling;
         }
         else {
            node1.child2 = sibling;
         }
         sibling.parent = node1;
         this.FreeNode(node2);
         while (node1) {
            var oldAABB = node1.aabb;
            node1.aabb = b2AABB.Combine(node1.child1.aabb, node1.child2.aabb);
            if (oldAABB.Contains(node1.aabb)) break;
            node1 = node1.parent;
         }
      }
      else {
         this.m_root = sibling;
         sibling.parent = null;
         this.FreeNode(node2);
      }
   }
   b2DynamicTreeBroadPhase.b2DynamicTreeBroadPhase = function () {
      this.m_tree = new b2DynamicTree();
      this.m_moveBuffer = new Vector();
      this.m_pairBuffer = new Vector();
      this.m_pairCount = 0;
   };
   b2DynamicTreeBroadPhase.prototype.CreateProxy = function (aabb, userData) {
      var proxy = this.m_tree.CreateProxy(aabb, userData);
      ++this.m_proxyCount;
      this.BufferMove(proxy);
      return proxy;
   }
   b2DynamicTreeBroadPhase.prototype.DestroyProxy = function (proxy) {
      this.UnBufferMove(proxy);
      --this.m_proxyCount;
      this.m_tree.DestroyProxy(proxy);
   }
   b2DynamicTreeBroadPhase.prototype.MoveProxy = function (proxy, aabb, displacement) {
      var buffer = this.m_tree.MoveProxy(proxy, aabb, displacement);
      if (buffer) {
         this.BufferMove(proxy);
      }
   }
   b2DynamicTreeBroadPhase.prototype.TestOverlap = function (proxyA, proxyB) {
      var aabbA = this.m_tree.GetFatAABB(proxyA);
      var aabbB = this.m_tree.GetFatAABB(proxyB);
      return aabbA.TestOverlap(aabbB);
   }
   b2DynamicTreeBroadPhase.prototype.GetUserData = function (proxy) {
      return this.m_tree.GetUserData(proxy);
   }
   b2DynamicTreeBroadPhase.prototype.GetFatAABB = function (proxy) {
      return this.m_tree.GetFatAABB(proxy);
   }
   b2DynamicTreeBroadPhase.prototype.GetProxyCount = function () {
      return this.m_proxyCount;
   }
   b2DynamicTreeBroadPhase.prototype.UpdatePairs = function (callback) {
      var __this = this;
      __this.m_pairCount = 0;
      var queryProxy;

      var len = __this.m_moveBuffer.length
      for (var i=0; i < len; i++) {
         queryProxy = __this.m_moveBuffer[i]; {
            function QueryCallback(proxy) {
               if (proxy == queryProxy) return true;
               if (__this.m_pairCount == __this.m_pairBuffer.length) {
                  __this.m_pairBuffer[__this.m_pairCount] = new b2DynamicTreePair();
               }
               var pair = __this.m_pairBuffer[__this.m_pairCount];
               pair.proxyA = proxy < queryProxy ? proxy : queryProxy;
               pair.proxyB = proxy >= queryProxy ? proxy : queryProxy;++__this.m_pairCount;
               return true;
            };
            var fatAABB = __this.m_tree.GetFatAABB(queryProxy);
            __this.m_tree.Query(QueryCallback, fatAABB);
         }
      }
      __this.m_moveBuffer.length = 0;
      for (var i = 0; i < __this.m_pairCount;) {
         var primaryPair = __this.m_pairBuffer[i];
         var userDataA = __this.m_tree.GetUserData(primaryPair.proxyA);
         var userDataB = __this.m_tree.GetUserData(primaryPair.proxyB);
         callback(userDataA, userDataB);
         ++i;
         while (i < __this.m_pairCount) {
            var pair = __this.m_pairBuffer[i];
            if (pair.proxyA != primaryPair.proxyA || pair.proxyB != primaryPair.proxyB) {
               break;
            }++i;
         }
      }
   }
   b2DynamicTreeBroadPhase.prototype.Query = function (callback, aabb) {
      this.m_tree.Query(callback, aabb);
   }
   b2DynamicTreeBroadPhase.prototype.RayCast = function (callback, input) {
      this.m_tree.RayCast(callback, input);
   }
   b2DynamicTreeBroadPhase.prototype.Validate = function () {}
   b2DynamicTreeBroadPhase.prototype.Rebalance = function (iterations) {
      if (iterations === undefined) iterations = 0;
      this.m_tree.Rebalance(iterations);
   }
   b2DynamicTreeBroadPhase.prototype.BufferMove = function (proxy) {
      this.m_moveBuffer[this.m_moveBuffer.length] = proxy;
   }
   b2DynamicTreeBroadPhase.prototype.UnBufferMove = function (proxy) {
      var i = parseInt(this.m_moveBuffer.indexOf(proxy));
      this.m_moveBuffer.splice(i, 1);
   }
   b2DynamicTreeBroadPhase.prototype.ComparePairs = function (pair1, pair2) {
      return 0;
   }
   b2DynamicTreeBroadPhase.__implements = {};
   b2DynamicTreeBroadPhase.__implements[IBroadPhase] = true;
   b2DynamicTreeNode.b2DynamicTreeNode = function () {
      this.aabb = new b2AABB();
   };
   b2DynamicTreeNode.prototype.IsLeaf = function () {
      return this.child1 == null;
   }
   b2DynamicTreePair.b2DynamicTreePair = function () {};
   b2Manifold.b2Manifold = function () {
      this.m_pointCount = 0;
   };
   b2Manifold.prototype.b2Manifold = function () {
      this.m_points = new Vector(b2Settings.b2_maxManifoldPoints);
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
         this.m_points[i] = new b2ManifoldPoint();
      }
      this.m_localPlaneNormal = new b2Vec2();
      this.m_localPoint = new b2Vec2();
   }
   b2Manifold.prototype.Reset = function () {
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
         ((this.m_points[i] instanceof b2ManifoldPoint ? this.m_points[i] : null)).Reset();
      }
      this.m_localPlaneNormal.SetZero();
      this.m_localPoint.SetZero();
      this.m_type = 0;
      this.m_pointCount = 0;
   }
   b2Manifold.prototype.Set = function (m) {
      this.m_pointCount = m.m_pointCount;
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
         ((this.m_points[i] instanceof b2ManifoldPoint ? this.m_points[i] : null)).Set(m.m_points[i]);
      }
      this.m_localPlaneNormal.SetV(m.m_localPlaneNormal);
      this.m_localPoint.SetV(m.m_localPoint);
      this.m_type = m.m_type;
   }
   b2Manifold.prototype.Copy = function () {
      var copy = new b2Manifold();
      copy.Set(this);
      return copy;
   }
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2Manifold.e_circles = 0x0001;
      Box2D.Collision.b2Manifold.prototype.e_circles = Box2D.Collision.b2Manifold.e_circles;
      Box2D.Collision.b2Manifold.e_faceA = 0x0002;
      Box2D.Collision.b2Manifold.prototype.e_faceA = Box2D.Collision.b2Manifold.e_faceA;
      Box2D.Collision.b2Manifold.e_faceB = 0x0004;
      Box2D.Collision.b2Manifold.prototype.e_faceB = Box2D.Collision.b2Manifold.e_faceB;
   });
   b2ManifoldPoint.b2ManifoldPoint = function () {
      this.m_localPoint = new b2Vec2();
      this.m_id = new b2ContactID();
   };
   b2ManifoldPoint.prototype.b2ManifoldPoint = function () {
      this.Reset();
   }
   b2ManifoldPoint.prototype.Reset = function () {
      this.m_localPoint.SetZero();
      this.m_normalImpulse = 0.0;
      this.m_tangentImpulse = 0.0;
      this.m_id.key = 0;
   }
   b2ManifoldPoint.prototype.Set = function (m) {
      this.m_localPoint.SetV(m.m_localPoint);
      this.m_normalImpulse = m.m_normalImpulse;
      this.m_tangentImpulse = m.m_tangentImpulse;
      this.m_id.Set(m.m_id);
   }
   b2OBB.b2OBB = function () {
      this.R = new b2Mat22();
      this.center = new b2Vec2();
      this.extents = new b2Vec2();
   };
   b2Pair.b2Pair = function () {
      this.userData = null;
   };
   b2Pair.prototype.SetBuffered = function () {
      this.status |= b2Pair.e_pairBuffered;
   }
   b2Pair.prototype.ClearBuffered = function () {
      this.status &= ~b2Pair.e_pairBuffered;
   }
   b2Pair.prototype.IsBuffered = function () {
      return (this.status & b2Pair.e_pairBuffered) == b2Pair.e_pairBuffered;
   }
   b2Pair.prototype.SetRemoved = function () {
      this.status |= b2Pair.e_pairRemoved;
   }
   b2Pair.prototype.ClearRemoved = function () {
      this.status &= ~b2Pair.e_pairRemoved;
   }
   b2Pair.prototype.IsRemoved = function () {
      return (this.status & b2Pair.e_pairRemoved) == b2Pair.e_pairRemoved;
   }
   b2Pair.prototype.SetFinal = function () {
      this.status |= b2Pair.e_pairFinal;
   }
   b2Pair.prototype.IsFinal = function () {
      return (this.status & b2Pair.e_pairFinal) == b2Pair.e_pairFinal;
   }
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2Pair.b2_nullProxy = parseInt(b2Settings.USHRT_MAX);
      Box2D.Collision.b2Pair.prototype.b2_nullProxy = Box2D.Collision.b2Pair.b2_nullProxy;
      Box2D.Collision.b2Pair.e_pairBuffered = 0x0001;
      Box2D.Collision.b2Pair.prototype.e_pairBuffered = Box2D.Collision.b2Pair.e_pairBuffered;
      Box2D.Collision.b2Pair.e_pairRemoved = 0x0002;
      Box2D.Collision.b2Pair.prototype.e_pairRemoved = Box2D.Collision.b2Pair.e_pairRemoved;
      Box2D.Collision.b2Pair.e_pairFinal = 0x0004;
      Box2D.Collision.b2Pair.prototype.e_pairFinal = Box2D.Collision.b2Pair.e_pairFinal;
   });
   b2PairManager.b2PairManager = function () {};
   b2PairManager.prototype.b2PairManager = function () {
      this.m_pairs = new Array();
      this.m_pairBuffer = new Array();
      this.m_pairCount = 0;
      this.m_pairBufferCount = 0;
      this.m_freePair = null;
   }
   b2PairManager.prototype.Initialize = function (broadPhase) {
      this.m_broadPhase = broadPhase;
   }
   b2PairManager.prototype.AddBufferedPair = function (proxy1, proxy2) {
      var pair = this.AddPair(proxy1, proxy2);
      if (pair.IsBuffered() == false) {
         pair.SetBuffered();
         this.m_pairBuffer[this.m_pairBufferCount] = pair;
         ++this.m_pairBufferCount;
      }
      pair.ClearRemoved();
      if (b2BroadPhase.s_validate) {
         this.ValidateBuffer();
      }
   }
   b2PairManager.prototype.RemoveBufferedPair = function (proxy1, proxy2) {
      var pair = this.Find(proxy1, proxy2);
      if (pair == null) {
         return;
      }
      if (pair.IsBuffered() == false) {
         pair.SetBuffered();
         this.m_pairBuffer[this.m_pairBufferCount] = pair;
         ++this.m_pairBufferCount;
      }
      pair.SetRemoved();
      if (b2BroadPhase.s_validate) {
         this.ValidateBuffer();
      }
   }
   b2PairManager.prototype.Commit = function (callback) {
      var i = 0;
      var removeCount = 0;
      for (i = 0;
      i < this.m_pairBufferCount; ++i) {
         var pair = this.m_pairBuffer[i];
         pair.ClearBuffered();
         var proxy1 = pair.proxy1;
         var proxy2 = pair.proxy2;
         if (pair.IsRemoved()) {} else {
            if (pair.IsFinal() == false) {
               callback(proxy1.userData, proxy2.userData);
            }
         }
      }
      this.m_pairBufferCount = 0;
      if (b2BroadPhase.s_validate) {
         this.ValidateTable();
      }
   }
   b2PairManager.prototype.AddPair = function (proxy1, proxy2) {
      var pair = proxy1.pairs[proxy2];
      if (pair != null) return pair;
      if (this.m_freePair == null) {
         this.m_freePair = new b2Pair();
         this.m_pairs.push(this.m_freePair);
      }
      pair = this.m_freePair;
      this.m_freePair = pair.next;
      pair.proxy1 = proxy1;
      pair.proxy2 = proxy2;
      pair.status = 0;
      pair.userData = null;
      pair.next = null;
      proxy1.pairs[proxy2] = pair;
      proxy2.pairs[proxy1] = pair;
      ++this.m_pairCount;
      return pair;
   }
   b2PairManager.prototype.RemovePair = function (proxy1, proxy2) {
      var pair = proxy1.pairs[proxy2];
      if (pair == null) {
         return null;
      }
      var userData = pair.userData;
      delete proxy1.pairs[proxy2];
      delete proxy2.pairs[proxy1];
      pair.next = this.m_freePair;
      pair.proxy1 = null;
      pair.proxy2 = null;
      pair.userData = null;
      pair.status = 0;
      this.m_freePair = pair;
      --this.m_pairCount;
      return userData;
   }
   b2PairManager.prototype.Find = function (proxy1, proxy2) {
      return proxy1.pairs[proxy2];
   }
   b2PairManager.prototype.ValidateBuffer = function () {}
   b2PairManager.prototype.ValidateTable = function () {}
   b2Point.b2Point = function () {
      this.p = new b2Vec2();
   };
   b2Point.prototype.Support = function (xf, vX, vY) {
      if (vX === undefined) vX = 0;
      if (vY === undefined) vY = 0;
      return this.p;
   }
   b2Point.prototype.GetFirstVertex = function (xf) {
      return this.p;
   }
   b2Proxy.b2Proxy = function () {
      this.lowerBounds = new Vector_a2j_Number(2);
      this.upperBounds = new Vector_a2j_Number(2);
      this.pairs = new Dictionary();
      this.userData = null;
   };
   b2Proxy.prototype.IsValid = function () {
      return this.overlapCount != b2BroadPhase.b2_invalid;
   }
   b2RayCastInput.b2RayCastInput = function () {
      this.p1 = new b2Vec2();
      this.p2 = new b2Vec2();
   };
   b2RayCastInput.prototype.b2RayCastInput = function (p1, p2, maxFraction) {
      if (p1 === undefined) p1 = null;
      if (p2 === undefined) p2 = null;
      if (maxFraction === undefined) maxFraction = 1;
      if (p1) this.p1.SetV(p1);
      if (p2) this.p2.SetV(p2);
      this.maxFraction = maxFraction;
   }
   b2RayCastOutput.b2RayCastOutput = function () {
      this.normal = new b2Vec2();
   };
   b2Segment.b2Segment = function () {
      this.p1 = new b2Vec2();
      this.p2 = new b2Vec2();
   };
   b2Segment.prototype.TestSegment = function (lambda, normal, segment, maxLambda) {
      if (maxLambda === undefined) maxLambda = 0;
      var s = segment.p1;
      var rX = segment.p2.x - s.x;
      var rY = segment.p2.y - s.y;
      var dX = this.p2.x - this.p1.x;
      var dY = this.p2.y - this.p1.y;
      var nX = dY;
      var nY = (-dX);
      var k_slop = 100.0 * Number.MIN_VALUE;
      var denom = (-(rX * nX + rY * nY));
      if (denom > k_slop) {
         var bX = s.x - this.p1.x;
         var bY = s.y - this.p1.y;
         var a = (bX * nX + bY * nY);
         if (0.0 <= a && a <= maxLambda * denom) {
            var mu2 = (-rX * bY) + rY * bX;
            if ((-k_slop * denom) <= mu2 && mu2 <= denom * (1.0 + k_slop)) {
               a /= denom;
               var nLen = Math.sqrt(nX * nX + nY * nY);
               nX /= nLen;
               nY /= nLen;
               lambda[0] = a;
               normal.Set(nX, nY);
               return true;
            }
         }
      }
      return false;
   }
   b2Segment.prototype.Extend = function (aabb) {
      this.ExtendForward(aabb);
      this.ExtendBackward(aabb);
   }
   b2Segment.prototype.ExtendForward = function (aabb) {
      var dX = this.p2.x - this.p1.x;
      var dY = this.p2.y - this.p1.y;
      var lambda = Math.min(dX > 0 ? (aabb.upperBound.x - this.p1.x) / dX : dX < 0 ? (aabb.lowerBound.x - this.p1.x) / dX : Number.POSITIVE_INFINITY,
      dY > 0 ? (aabb.upperBound.y - this.p1.y) / dY : dY < 0 ? (aabb.lowerBound.y - this.p1.y) / dY : Number.POSITIVE_INFINITY);
      this.p2.x = this.p1.x + dX * lambda;
      this.p2.y = this.p1.y + dY * lambda;
   }
   b2Segment.prototype.ExtendBackward = function (aabb) {
      var dX = (-this.p2.x) + this.p1.x;
      var dY = (-this.p2.y) + this.p1.y;
      var lambda = Math.min(dX > 0 ? (aabb.upperBound.x - this.p2.x) / dX : dX < 0 ? (aabb.lowerBound.x - this.p2.x) / dX : Number.POSITIVE_INFINITY,
      dY > 0 ? (aabb.upperBound.y - this.p2.y) / dY : dY < 0 ? (aabb.lowerBound.y - this.p2.y) / dY : Number.POSITIVE_INFINITY);
      this.p1.x = this.p2.x + dX * lambda;
      this.p1.y = this.p2.y + dY * lambda;
   }
   b2SeparationFunction.b2SeparationFunction = function () {
      this.m_localPoint = new b2Vec2();
      this.m_axis = new b2Vec2();
   };
   b2SeparationFunction.prototype.Initialize = function (cache, proxyA, transformA, proxyB, transformB) {
      this.m_proxyA = proxyA;
      this.m_proxyB = proxyB;
      var count = parseInt(cache.count);
      b2Settings.b2Assert(0 < count && count < 3);
      var localPointA;
      var localPointA1;
      var localPointA2;
      var localPointB;
      var localPointB1;
      var localPointB2;
      var pointAX = 0;
      var pointAY = 0;
      var pointBX = 0;
      var pointBY = 0;
      var normalX = 0;
      var normalY = 0;
      var tMat;
      var tVec;
      var s = 0;
      var sgn = 0;
      if (count == 1) {
         this.m_type = b2SeparationFunction.e_points;
         localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
         localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
         tVec = localPointA;
         tMat = transformA.R;
         pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         tVec = localPointB;
         tMat = transformB.R;
         pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         this.m_axis.x = pointBX - pointAX;
         this.m_axis.y = pointBY - pointAY;
         this.m_axis.Normalize();
      }
      else if (cache.indexB[0] == cache.indexB[1]) {
         this.m_type = b2SeparationFunction.e_faceA;
         localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
         localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);
         localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
         this.m_localPoint.x = 0.5 * (localPointA1.x + localPointA2.x);
         this.m_localPoint.y = 0.5 * (localPointA1.y + localPointA2.y);
         this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointA2, localPointA1), 1.0);
         this.m_axis.Normalize();
         tVec = this.m_axis;
         tMat = transformA.R;
         normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
         normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
         tVec = this.m_localPoint;
         tMat = transformA.R;
         pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         tVec = localPointB;
         tMat = transformB.R;
         pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         s = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
         if (s < 0.0) {
            this.m_axis.NegativeSelf();
         }
      }
      else if (cache.indexA[0] == cache.indexA[0]) {
         this.m_type = b2SeparationFunction.e_faceB;
         localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
         localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);
         localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
         this.m_localPoint.x = 0.5 * (localPointB1.x + localPointB2.x);
         this.m_localPoint.y = 0.5 * (localPointB1.y + localPointB2.y);
         this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointB2, localPointB1), 1.0);
         this.m_axis.Normalize();
         tVec = this.m_axis;
         tMat = transformB.R;
         normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
         normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
         tVec = this.m_localPoint;
         tMat = transformB.R;
         pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         tVec = localPointA;
         tMat = transformA.R;
         pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         s = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
         if (s < 0.0) {
            this.m_axis.NegativeSelf();
         }
      }
      else {
         localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
         localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);
         localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
         localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);
         var pA = b2Math.MulX(transformA, localPointA);
         var dA = b2Math.MulMV(transformA.R, b2Math.SubtractVV(localPointA2, localPointA1));
         var pB = b2Math.MulX(transformB, localPointB);
         var dB = b2Math.MulMV(transformB.R, b2Math.SubtractVV(localPointB2, localPointB1));
         var a = dA.x * dA.x + dA.y * dA.y;
         var e = dB.x * dB.x + dB.y * dB.y;
         var r = b2Math.SubtractVV(dB, dA);
         var c = dA.x * r.x + dA.y * r.y;
         var f = dB.x * r.x + dB.y * r.y;
         var b = dA.x * dB.x + dA.y * dB.y;
         var denom = a * e - b * b;
         s = 0.0;
         if (denom != 0.0) {
            s = b2Math.Clamp((b * f - c * e) / denom, 0.0, 1.0);
         }
         var t = (b * s + f) / e;
         if (t < 0.0) {
            t = 0.0;
            s = b2Math.Clamp((b - c) / a, 0.0, 1.0);
         }
         localPointA = new b2Vec2();
         localPointA.x = localPointA1.x + s * (localPointA2.x - localPointA1.x);
         localPointA.y = localPointA1.y + s * (localPointA2.y - localPointA1.y);
         localPointB = new b2Vec2();
         localPointB.x = localPointB1.x + s * (localPointB2.x - localPointB1.x);
         localPointB.y = localPointB1.y + s * (localPointB2.y - localPointB1.y);
         if (s == 0.0 || s == 1.0) {
            this.m_type = b2SeparationFunction.e_faceB;
            this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointB2, localPointB1), 1.0);
            this.m_axis.Normalize();
            this.m_localPoint = localPointB;
            tVec = this.m_axis;
            tMat = transformB.R;
            normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tVec = this.m_localPoint;
            tMat = transformB.R;
            pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tVec = localPointA;
            tMat = transformA.R;
            pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            sgn = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
            if (s < 0.0) {
               this.m_axis.NegativeSelf();
            }
         }
         else {
            this.m_type = b2SeparationFunction.e_faceA;
            this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointA2, localPointA1), 1.0);
            this.m_localPoint = localPointA;
            tVec = this.m_axis;
            tMat = transformA.R;
            normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tVec = this.m_localPoint;
            tMat = transformA.R;
            pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tVec = localPointB;
            tMat = transformB.R;
            pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            sgn = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
            if (s < 0.0) {
               this.m_axis.NegativeSelf();
            }
         }
      }
   }
   b2SeparationFunction.prototype.Evaluate = function (transformA, transformB) {
      var axisA;
      var axisB;
      var localPointA;
      var localPointB;
      var pointA;
      var pointB;
      var seperation = 0;
      var normal;
      switch (this.m_type) {
      case b2SeparationFunction.e_points:
         {
            axisA = b2Math.MulTMV(transformA.R, this.m_axis);
            axisB = b2Math.MulTMV(transformB.R, this.m_axis.GetNegative());
            localPointA = this.m_proxyA.GetSupportVertex(axisA);
            localPointB = this.m_proxyB.GetSupportVertex(axisB);
            pointA = b2Math.MulX(transformA, localPointA);
            pointB = b2Math.MulX(transformB, localPointB);
            seperation = (pointB.x - pointA.x) * this.m_axis.x + (pointB.y - pointA.y) * this.m_axis.y;
            return seperation;
         }
      case b2SeparationFunction.e_faceA:
         {
            normal = b2Math.MulMV(transformA.R, this.m_axis);
            pointA = b2Math.MulX(transformA, this.m_localPoint);
            axisB = b2Math.MulTMV(transformB.R, normal.GetNegative());
            localPointB = this.m_proxyB.GetSupportVertex(axisB);
            pointB = b2Math.MulX(transformB, localPointB);
            seperation = (pointB.x - pointA.x) * normal.x + (pointB.y - pointA.y) * normal.y;
            return seperation;
         }
      case b2SeparationFunction.e_faceB:
         {
            normal = b2Math.MulMV(transformB.R, this.m_axis);
            pointB = b2Math.MulX(transformB, this.m_localPoint);
            axisA = b2Math.MulTMV(transformA.R, normal.GetNegative());
            localPointA = this.m_proxyA.GetSupportVertex(axisA);
            pointA = b2Math.MulX(transformA, localPointA);
            seperation = (pointA.x - pointB.x) * normal.x + (pointA.y - pointB.y) * normal.y;
            return seperation;
         }
      default:
         b2Settings.b2Assert(false);
         return 0.0;
      }
   }
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2SeparationFunction.e_points = 0x01;
      Box2D.Collision.b2SeparationFunction.prototype.e_points = Box2D.Collision.b2SeparationFunction.e_points;
      Box2D.Collision.b2SeparationFunction.e_faceA = 0x02;
      Box2D.Collision.b2SeparationFunction.prototype.e_faceA = Box2D.Collision.b2SeparationFunction.e_faceA;
      Box2D.Collision.b2SeparationFunction.e_faceB = 0x04;
      Box2D.Collision.b2SeparationFunction.prototype.e_faceB = Box2D.Collision.b2SeparationFunction.e_faceB;
   });
   b2Simplex.b2Simplex = function () {
      this.m_v1 = new b2SimplexVertex();
      this.m_v2 = new b2SimplexVertex();
      this.m_v3 = new b2SimplexVertex();
      this.m_vertices = new Vector(3);
   };
   b2Simplex.prototype.b2Simplex = function () {
      this.m_vertices[0] = this.m_v1;
      this.m_vertices[1] = this.m_v2;
      this.m_vertices[2] = this.m_v3;
   }
   b2Simplex.prototype.ReadCache = function (cache, proxyA, transformA, proxyB, transformB) {
      b2Settings.b2Assert(0 <= cache.count && cache.count <= 3);
      var wALocal;
      var wBLocal;
      this.m_count = cache.count;
      var vertices = this.m_vertices;
      for (var i = 0; i < this.m_count; i++) {
         var v = vertices[i];
         v.indexA = cache.indexA[i];
         v.indexB = cache.indexB[i];
         wALocal = proxyA.GetVertex(v.indexA);
         wBLocal = proxyB.GetVertex(v.indexB);
         v.wA = b2Math.MulX(transformA, wALocal);
         v.wB = b2Math.MulX(transformB, wBLocal);
         v.w = b2Math.SubtractVV(v.wB, v.wA);
         v.a = 0;
      }
      if (this.m_count > 1) {
         var metric1 = cache.metric;
         var metric2 = this.GetMetric();
         if (metric2 < .5 * metric1 || 2.0 * metric1 < metric2 || metric2 < Number.MIN_VALUE) {
            this.m_count = 0;
         }
      }
      if (this.m_count == 0) {
         v = vertices[0];
         v.indexA = 0;
         v.indexB = 0;
         wALocal = proxyA.GetVertex(0);
         wBLocal = proxyB.GetVertex(0);
         v.wA = b2Math.MulX(transformA, wALocal);
         v.wB = b2Math.MulX(transformB, wBLocal);
         v.w = b2Math.SubtractVV(v.wB, v.wA);
         this.m_count = 1;
      }
   }
   b2Simplex.prototype.WriteCache = function (cache) {
      cache.metric = this.GetMetric();
      cache.count = a2j.parseUInt(this.m_count);
      var vertices = this.m_vertices;
      for (var i = 0; i < this.m_count; i++) {
         cache.indexA[i] = a2j.parseUInt(vertices[i].indexA);
         cache.indexB[i] = a2j.parseUInt(vertices[i].indexB);
      }
   }
   b2Simplex.prototype.GetSearchDirection = function () {
      switch (this.m_count) {
      case 1:
         return this.m_v1.w.GetNegative();
      case 2:
         {
            var e12 = b2Math.SubtractVV(this.m_v2.w, this.m_v1.w);
            var sgn = b2Math.CrossVV(e12, this.m_v1.w.GetNegative());
            if (sgn > 0.0) {
               return b2Math.CrossFV(1.0, e12);
            }
            else {
               return b2Math.CrossVF(e12, 1.0);
            }
         }
      default:
         b2Settings.b2Assert(false);
         return new b2Vec2();
      }
   }
   b2Simplex.prototype.GetClosestPoint = function () {
      switch (this.m_count) {
      case 0:
         b2Settings.b2Assert(false);
         return new b2Vec2();
      case 1:
         return this.m_v1.w;
      case 2:
         return new b2Vec2(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
      default:
         b2Settings.b2Assert(false);
         return new b2Vec2();
      }
   }
   b2Simplex.prototype.GetWitnessPoints = function (pA, pB) {
      switch (this.m_count) {
      case 0:
         b2Settings.b2Assert(false);
         break;
      case 1:
         pA.SetV(this.m_v1.wA);
         pB.SetV(this.m_v1.wB);
         break;
      case 2:
         pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
         pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
         pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
         pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
         break;
      case 3:
         pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
         pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
         break;
      default:
         b2Settings.b2Assert(false);
         break;
      }
   }
   b2Simplex.prototype.GetMetric = function () {
      switch (this.m_count) {
      case 0:
         b2Settings.b2Assert(false);
         return 0.0;
      case 1:
         return 0.0;
      case 2:
         return b2Math.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
      case 3:
         return b2Math.CrossVV(b2Math.SubtractVV(this.m_v2.w, this.m_v1.w), b2Math.SubtractVV(this.m_v3.w, this.m_v1.w));
      default:
         b2Settings.b2Assert(false);
         return 0.0;
      }
   }
   b2Simplex.prototype.Solve2 = function () {
      var w1 = this.m_v1.w;
      var w2 = this.m_v2.w;
      var e12 = b2Math.SubtractVV(w2, w1);
      var d12_2 = (-(w1.x * e12.x + w1.y * e12.y));
      if (d12_2 <= 0.0) {
         this.m_v1.a = 1.0;
         this.m_count = 1;
         return;
      }
      var d12_1 = (w2.x * e12.x + w2.y * e12.y);
      if (d12_1 <= 0.0) {
         this.m_v2.a = 1.0;
         this.m_count = 1;
         this.m_v1.Set(this.m_v2);
         return;
      }
      var inv_d12 = 1.0 / (d12_1 + d12_2);
      this.m_v1.a = d12_1 * inv_d12;
      this.m_v2.a = d12_2 * inv_d12;
      this.m_count = 2;
   }
   b2Simplex.prototype.Solve3 = function () {
      var w1 = this.m_v1.w;
      var w2 = this.m_v2.w;
      var w3 = this.m_v3.w;
      var e12 = b2Math.SubtractVV(w2, w1);
      var w1e12 = b2Math.Dot(w1, e12);
      var w2e12 = b2Math.Dot(w2, e12);
      var d12_1 = w2e12;
      var d12_2 = (-w1e12);
      var e13 = b2Math.SubtractVV(w3, w1);
      var w1e13 = b2Math.Dot(w1, e13);
      var w3e13 = b2Math.Dot(w3, e13);
      var d13_1 = w3e13;
      var d13_2 = (-w1e13);
      var e23 = b2Math.SubtractVV(w3, w2);
      var w2e23 = b2Math.Dot(w2, e23);
      var w3e23 = b2Math.Dot(w3, e23);
      var d23_1 = w3e23;
      var d23_2 = (-w2e23);
      var n123 = b2Math.CrossVV(e12, e13);
      var d123_1 = n123 * b2Math.CrossVV(w2, w3);
      var d123_2 = n123 * b2Math.CrossVV(w3, w1);
      var d123_3 = n123 * b2Math.CrossVV(w1, w2);
      if (d12_2 <= 0.0 && d13_2 <= 0.0) {
         this.m_v1.a = 1.0;
         this.m_count = 1;
         return;
      }
      if (d12_1 > 0.0 && d12_2 > 0.0 && d123_3 <= 0.0) {
         var inv_d12 = 1.0 / (d12_1 + d12_2);
         this.m_v1.a = d12_1 * inv_d12;
         this.m_v2.a = d12_2 * inv_d12;
         this.m_count = 2;
         return;
      }
      if (d13_1 > 0.0 && d13_2 > 0.0 && d123_2 <= 0.0) {
         var inv_d13 = 1.0 / (d13_1 + d13_2);
         this.m_v1.a = d13_1 * inv_d13;
         this.m_v3.a = d13_2 * inv_d13;
         this.m_count = 2;
         this.m_v2.Set(this.m_v3);
         return;
      }
      if (d12_1 <= 0.0 && d23_2 <= 0.0) {
         this.m_v2.a = 1.0;
         this.m_count = 1;
         this.m_v1.Set(this.m_v2);
         return;
      }
      if (d13_1 <= 0.0 && d23_1 <= 0.0) {
         this.m_v3.a = 1.0;
         this.m_count = 1;
         this.m_v1.Set(this.m_v3);
         return;
      }
      if (d23_1 > 0.0 && d23_2 > 0.0 && d123_1 <= 0.0) {
         var inv_d23 = 1.0 / (d23_1 + d23_2);
         this.m_v2.a = d23_1 * inv_d23;
         this.m_v3.a = d23_2 * inv_d23;
         this.m_count = 2;
         this.m_v1.Set(this.m_v3);
         return;
      }
      var inv_d123 = 1.0 / (d123_1 + d123_2 + d123_3);
      this.m_v1.a = d123_1 * inv_d123;
      this.m_v2.a = d123_2 * inv_d123;
      this.m_v3.a = d123_3 * inv_d123;
      this.m_count = 3;
   }
   b2SimplexCache.b2SimplexCache = function () {
      this.indexA = new Vector_a2j_Number(3);
      this.indexB = new Vector_a2j_Number(3);
   };
   b2SimplexVertex.b2SimplexVertex = function () {};
   b2SimplexVertex.prototype.Set = function (other) {
      this.wA.SetV(other.wA);
      this.wB.SetV(other.wB);
      this.w.SetV(other.w);
      this.a = other.a;
      this.indexA = other.indexA;
      this.indexB = other.indexB;
   }
   b2TimeOfImpact.b2TimeOfImpact = function () {};
   b2TimeOfImpact.prototype.TimeOfImpact = function (input) {
      ++b2TimeOfImpact.b2_toiCalls;
      var proxyA = input.proxyA;
      var proxyB = input.proxyB;
      var sweepA = input.sweepA;
      var sweepB = input.sweepB;
      b2Settings.b2Assert(sweepA.t0 == sweepB.t0);
      b2Settings.b2Assert(1.0 - sweepA.t0 > Number.MIN_VALUE);
      var radius = proxyA.m_radius + proxyB.m_radius;
      var tolerance = input.tolerance;
      var alpha = 0.0;
      var k_maxIterations = 1000;
      var iter = 0;
      var target = 0.0;
      b2TimeOfImpact.s_cache.count = 0;
      b2TimeOfImpact.s_distanceInput.useRadii = false;
      for (;;) {
         sweepA.GetTransform(b2TimeOfImpact.s_xfA, alpha);
         sweepB.GetTransform(b2TimeOfImpact.s_xfB, alpha);
         b2TimeOfImpact.s_distanceInput.proxyA = proxyA;
         b2TimeOfImpact.s_distanceInput.proxyB = proxyB;
         b2TimeOfImpact.s_distanceInput.transformA = b2TimeOfImpact.s_xfA;
         b2TimeOfImpact.s_distanceInput.transformB = b2TimeOfImpact.s_xfB;
         b2Distance.Distance(b2TimeOfImpact.s_distanceOutput, b2TimeOfImpact.s_cache, b2TimeOfImpact.s_distanceInput);
         if (b2TimeOfImpact.s_distanceOutput.distance <= 0.0) {
            alpha = 1.0;
            break;
         }
         b2TimeOfImpact.s_fcn.Initialize(b2TimeOfImpact.s_cache, proxyA, b2TimeOfImpact.s_xfA, proxyB, b2TimeOfImpact.s_xfB);
         var separation = b2TimeOfImpact.s_fcn.Evaluate(b2TimeOfImpact.s_xfA, b2TimeOfImpact.s_xfB);
         if (separation <= 0.0) {
            alpha = 1.0;
            break;
         }
         if (iter == 0) {
            if (separation > radius) {
               target = b2Math.Max(radius - tolerance, 0.75 * radius);
            }
            else {
               target = b2Math.Max(separation - tolerance, 0.02 * radius);
            }
         }
         if (separation - target < 0.5 * tolerance) {
            if (iter == 0) {
               alpha = 1.0;
               break;
            }
            break;
         }
         var newAlpha = alpha; {
            var x1 = alpha;
            var x2 = 1.0;
            var f1 = separation;
            sweepA.GetTransform(b2TimeOfImpact.s_xfA, x2);
            sweepB.GetTransform(b2TimeOfImpact.s_xfB, x2);
            var f2 = b2TimeOfImpact.s_fcn.Evaluate(b2TimeOfImpact.s_xfA, b2TimeOfImpact.s_xfB);
            if (f2 >= target) {
               alpha = 1.0;
               break;
            }
            var rootIterCount = 0;
            for (;;) {
               var x = 0;
               if (rootIterCount & 1) {
                  x = x1 + (target - f1) * (x2 - x1) / (f2 - f1);
               }
               else {
                  x = 0.5 * (x1 + x2);
               }
               sweepA.GetTransform(b2TimeOfImpact.s_xfA, x);
               sweepB.GetTransform(b2TimeOfImpact.s_xfB, x);
               var f = b2TimeOfImpact.s_fcn.Evaluate(b2TimeOfImpact.s_xfA, b2TimeOfImpact.s_xfB);
               if (b2Math.Abs(f - target) < 0.025 * tolerance) {
                  newAlpha = x;
                  break;
               }
               if (f > target) {
                  x1 = x;
                  f1 = f;
               }
               else {
                  x2 = x;
                  f2 = f;
               }++rootIterCount;
               ++b2TimeOfImpact.b2_toiRootIters;
               if (rootIterCount == 50) {
                  break;
               }
            }
            b2TimeOfImpact.b2_toiMaxRootIters = b2Math.Max(b2TimeOfImpact.b2_toiMaxRootIters, rootIterCount);
         }
         if (newAlpha < (1.0 + 100.0 * Number.MIN_VALUE) * alpha) {
            break;
         }
         alpha = newAlpha;
         iter++;
         ++b2TimeOfImpact.b2_toiIters;
         if (iter == k_maxIterations) {
            break;
         }
      }
      b2TimeOfImpact.b2_toiMaxIters = b2Math.Max(b2TimeOfImpact.b2_toiMaxIters, iter);
      return alpha;
   }
   b2TimeOfImpact.TimeOfImpact = b2TimeOfImpact.prototype.TimeOfImpact;
   _A2J_postDefs.push(function () {
      Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
      Box2D.Collision.b2TimeOfImpact.prototype.b2_toiCalls = Box2D.Collision.b2TimeOfImpact.b2_toiCalls;
      Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
      Box2D.Collision.b2TimeOfImpact.prototype.b2_toiIters = Box2D.Collision.b2TimeOfImpact.b2_toiIters;
      Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
      Box2D.Collision.b2TimeOfImpact.prototype.b2_toiMaxIters = Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters;
      Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
      Box2D.Collision.b2TimeOfImpact.prototype.b2_toiRootIters = Box2D.Collision.b2TimeOfImpact.b2_toiRootIters;
      Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
      Box2D.Collision.b2TimeOfImpact.prototype.b2_toiMaxRootIters = Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters;
      Box2D.Collision.b2TimeOfImpact.s_cache = new b2SimplexCache();
      Box2D.Collision.b2TimeOfImpact.prototype.s_cache = Box2D.Collision.b2TimeOfImpact.s_cache;
      Box2D.Collision.b2TimeOfImpact.s_distanceInput = new b2DistanceInput();
      Box2D.Collision.b2TimeOfImpact.prototype.s_distanceInput = Box2D.Collision.b2TimeOfImpact.s_distanceInput;
      Box2D.Collision.b2TimeOfImpact.s_xfA = new b2Transform();
      Box2D.Collision.b2TimeOfImpact.prototype.s_xfA = Box2D.Collision.b2TimeOfImpact.s_xfA;
      Box2D.Collision.b2TimeOfImpact.s_xfB = new b2Transform();
      Box2D.Collision.b2TimeOfImpact.prototype.s_xfB = Box2D.Collision.b2TimeOfImpact.s_xfB;
      Box2D.Collision.b2TimeOfImpact.s_fcn = new b2SeparationFunction();
      Box2D.Collision.b2TimeOfImpact.prototype.s_fcn = Box2D.Collision.b2TimeOfImpact.s_fcn;
      Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new b2DistanceOutput();
      Box2D.Collision.b2TimeOfImpact.prototype.s_distanceOutput = Box2D.Collision.b2TimeOfImpact.s_distanceOutput;
   });
   b2TOIInput.b2TOIInput = function () {
      this.proxyA = new b2DistanceProxy();
      this.proxyB = new b2DistanceProxy();
      this.sweepA = new b2Sweep();
      this.sweepB = new b2Sweep();
   };
   b2WorldManifold.b2WorldManifold = function () {
      this.m_normal = new b2Vec2();
   };
   b2WorldManifold.prototype.b2WorldManifold = function () {
      this.m_points = new Vector(b2Settings.b2_maxManifoldPoints);
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
         this.m_points[i] = new b2Vec2();
      }
   }
   b2WorldManifold.prototype.Initialize = function (manifold, xfA, radiusA, xfB, radiusB) {
      if (radiusA === undefined) radiusA = 0;
      if (radiusB === undefined) radiusB = 0;
      if (manifold.m_pointCount == 0) {
         return;
      }
      var i = 0;
      var tVec;
      var tMat;
      var normalX = 0;
      var normalY = 0;
      var planePointX = 0;
      var planePointY = 0;
      var clipPointX = 0;
      var clipPointY = 0;
      switch (manifold.m_type) {
      case b2Manifold.e_circles:
         {
            tMat = xfA.R;
            tVec = manifold.m_localPoint;
            var pointAX = xfA.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            var pointAY = xfA.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tMat = xfB.R;
            tVec = manifold.m_points[0].m_localPoint;
            var pointBX = xfB.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            var pointBY = xfB.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            var dX = pointBX - pointAX;
            var dY = pointBY - pointAY;
            var d2 = dX * dX + dY * dY;
            if (d2 > Number.MIN_VALUE * Number.MIN_VALUE) {
               var d = Math.sqrt(d2);
               this.m_normal.x = dX / d;
               this.m_normal.y = dY / d;
            }
            else {
               this.m_normal.x = 1;
               this.m_normal.y = 0;
            }
            var cAX = pointAX + radiusA * this.m_normal.x;
            var cAY = pointAY + radiusA * this.m_normal.y;
            var cBX = pointBX - radiusB * this.m_normal.x;
            var cBY = pointBY - radiusB * this.m_normal.y;
            this.m_points[0].x = 0.5 * (cAX + cBX);
            this.m_points[0].y = 0.5 * (cAY + cBY);
         }
         break;
      case b2Manifold.e_faceA:
         {
            tMat = xfA.R;
            tVec = manifold.m_localPlaneNormal;
            normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tMat = xfA.R;
            tVec = manifold.m_localPoint;
            planePointX = xfA.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            planePointY = xfA.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            this.m_normal.x = normalX;
            this.m_normal.y = normalY;
            for (i = 0;
            i < manifold.m_pointCount; i++) {
               tMat = xfB.R;
               tVec = manifold.m_points[i].m_localPoint;
               clipPointX = xfB.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
               clipPointY = xfB.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
               this.m_points[i].x = clipPointX + 0.5 * (radiusA - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusB) * normalX;
               this.m_points[i].y = clipPointY + 0.5 * (radiusA - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusB) * normalY;
            }
         }
         break;
      case b2Manifold.e_faceB:
         {
            tMat = xfB.R;
            tVec = manifold.m_localPlaneNormal;
            normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tMat = xfB.R;
            tVec = manifold.m_localPoint;
            planePointX = xfB.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            planePointY = xfB.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            this.m_normal.x = (-normalX);
            this.m_normal.y = (-normalY);
            for (i = 0;
            i < manifold.m_pointCount; i++) {
               tMat = xfA.R;
               tVec = manifold.m_points[i].m_localPoint;
               clipPointX = xfA.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
               clipPointY = xfA.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
               this.m_points[i].x = clipPointX + 0.5 * (radiusB - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusA) * normalX;
               this.m_points[i].y = clipPointY + 0.5 * (radiusB - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusA) * normalY;
            }
         }
         break;
      }
   }
   ClipVertex.ClipVertex = function () {
      this.v = new b2Vec2();
      this.id = new b2ContactID();
   };
   ClipVertex.prototype.Set = function (other) {
      this.v.SetV(other.v);
      this.id.Set(other.id);
   }
   Features.Features = function () {};
   Features.prototype.__defineGetter__('referenceEdge', function () {
      return this._referenceEdge;
   });
   Features.prototype.__defineSetter__('referenceEdge', function (value) {
      if (value === undefined) value = 0;
      this._referenceEdge = value;
      this._m_id._key = (this._m_id._key & 0xffffff00) | (this._referenceEdge & 0x000000ff);
   });
   Features.prototype.__defineGetter__('incidentEdge', function () {
      return this._incidentEdge;
   });
   Features.prototype.__defineSetter__('incidentEdge', function (value) {
      if (value === undefined) value = 0;
      this._incidentEdge = value;
      this._m_id._key = (this._m_id._key & 0xffff00ff) | ((this._incidentEdge << 8) & 0x0000ff00);
   });
   Features.prototype.__defineGetter__('incidentVertex', function () {
      return this._incidentVertex;
   });
   Features.prototype.__defineSetter__('incidentVertex', function (value) {
      if (value === undefined) value = 0;
      this._incidentVertex = value;
      this._m_id._key = (this._m_id._key & 0xff00ffff) | ((this._incidentVertex << 16) & 0x00ff0000);
   });
   Features.prototype.__defineGetter__('flip', function () {
      return this._flip;
   });
   Features.prototype.__defineSetter__('flip', function (value) {
      if (value === undefined) value = 0;
      this._flip = value;
      this._m_id._key = (this._m_id._key & 0x00ffffff) | ((this._flip << 24) & 0xff000000);
   });
})(); /* source: disabled*/
(function () {
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
   var b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
   var b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape;
   var b2MassData = Box2D.Collision.Shapes.b2MassData;
   var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
   var b2Shape = Box2D.Collision.Shapes.b2Shape;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   var b2AABB = Box2D.Collision.b2AABB;
   var b2Bound = Box2D.Collision.b2Bound;
   var b2BoundValues = Box2D.Collision.b2BoundValues;
   var b2BroadPhase = Box2D.Collision.b2BroadPhase;
   var b2Collision = Box2D.Collision.b2Collision;
   var b2ContactID = Box2D.Collision.b2ContactID;
   var b2ContactPoint = Box2D.Collision.b2ContactPoint;
   var b2Distance = Box2D.Collision.b2Distance;
   var b2DistanceInput = Box2D.Collision.b2DistanceInput;
   var b2DistanceOutput = Box2D.Collision.b2DistanceOutput;
   var b2DistanceProxy = Box2D.Collision.b2DistanceProxy;
   var b2DynamicTree = Box2D.Collision.b2DynamicTree;
   var b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase;
   var b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode;
   var b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair;
   var b2Manifold = Box2D.Collision.b2Manifold;
   var b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint;
   var b2OBB = Box2D.Collision.b2OBB;
   var b2Pair = Box2D.Collision.b2Pair;
   var b2PairManager = Box2D.Collision.b2PairManager;
   var b2Point = Box2D.Collision.b2Point;
   var b2Proxy = Box2D.Collision.b2Proxy;
   var b2RayCastInput = Box2D.Collision.b2RayCastInput;
   var b2RayCastOutput = Box2D.Collision.b2RayCastOutput;
   var b2Segment = Box2D.Collision.b2Segment;
   var b2SeparationFunction = Box2D.Collision.b2SeparationFunction;
   var b2Simplex = Box2D.Collision.b2Simplex;
   var b2SimplexCache = Box2D.Collision.b2SimplexCache;
   var b2SimplexVertex = Box2D.Collision.b2SimplexVertex;
   var b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact;
   var b2TOIInput = Box2D.Collision.b2TOIInput;
   var b2WorldManifold = Box2D.Collision.b2WorldManifold;
   var ClipVertex = Box2D.Collision.ClipVertex;
   var Features = Box2D.Collision.Features;
   var IBroadPhase = Box2D.Collision.IBroadPhase;
   var b2internal = Box2D.Common.b2internal;
   var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
   var b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
   var b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape;
   var b2MassData = Box2D.Collision.Shapes.b2MassData;
   var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
   var b2Shape = Box2D.Collision.Shapes.b2Shape;
   b2CircleShape.inherit(Box2D.Collision.Shapes.b2Shape);
   b2CircleShape.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
   b2CircleShape.b2CircleShape = function () {
      Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
      this.m_p = new b2Vec2();
   };
   b2CircleShape.prototype.Copy = function () {
      var s = new b2CircleShape();
      s.Set(this);
      return s;
   }
   b2CircleShape.prototype.Set = function (other) {
      this.__super.Set.call(this, other);
      if (a2j.is(other, b2CircleShape)) {
         var other2 = (other instanceof b2CircleShape ? other : null);
         this.m_p.SetV(other2.m_p);
      }
   }
   b2CircleShape.prototype.TestPoint = function (transform, p) {
      var tMat = transform.R;
      var dX = transform.position.x + (tMat.col1.x * this.m_p.x + tMat.col2.x * this.m_p.y);
      var dY = transform.position.y + (tMat.col1.y * this.m_p.x + tMat.col2.y * this.m_p.y);
      dX = p.x - dX;
      dY = p.y - dY;
      return (dX * dX + dY * dY) <= this.m_radius * this.m_radius;
   }
   b2CircleShape.prototype.RayCast = function (output, input, transform) {
      var tMat = transform.R;
      var positionX = transform.position.x + (tMat.col1.x * this.m_p.x + tMat.col2.x * this.m_p.y);
      var positionY = transform.position.y + (tMat.col1.y * this.m_p.x + tMat.col2.y * this.m_p.y);
      var sX = input.p1.x - positionX;
      var sY = input.p1.y - positionY;
      var b = (sX * sX + sY * sY) - this.m_radius * this.m_radius;
      var rX = input.p2.x - input.p1.x;
      var rY = input.p2.y - input.p1.y;
      var c = (sX * rX + sY * rY);
      var rr = (rX * rX + rY * rY);
      var sigma = c * c - rr * b;
      if (sigma < 0.0 || rr < Number.MIN_VALUE) {
         return false;
      }
      var a = (-(c + Math.sqrt(sigma)));
      if (0.0 <= a && a <= input.maxFraction * rr) {
         a /= rr;
         output.fraction = a;
         output.normal.x = sX + a * rX;
         output.normal.y = sY + a * rY;
         output.normal.Normalize();
         return true;
      }
      return false;
   }
   b2CircleShape.prototype.ComputeAABB = function (aabb, transform) {
      var tMat = transform.R;
      var pX = transform.position.x + (tMat.col1.x * this.m_p.x + tMat.col2.x * this.m_p.y);
      var pY = transform.position.y + (tMat.col1.y * this.m_p.x + tMat.col2.y * this.m_p.y);
      aabb.lowerBound.Set(pX - this.m_radius, pY - this.m_radius);
      aabb.upperBound.Set(pX + this.m_radius, pY + this.m_radius);
   }
   b2CircleShape.prototype.ComputeMass = function (massData, density) {
      if (density === undefined) density = 0;
      massData.mass = density * b2Settings.b2_pi * this.m_radius * this.m_radius;
      massData.center.SetV(this.m_p);
      massData.I = massData.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
   }
   b2CircleShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
      if (offset === undefined) offset = 0;
      var p = b2Math.MulX(xf, this.m_p);
      var l = (-(b2Math.Dot(normal, p) - offset));
      if (l < (-this.m_radius) + Number.MIN_VALUE) {
         return 0;
      }
      if (l > this.m_radius) {
         c.SetV(p);
         return Math.PI * this.m_radius * this.m_radius;
      }
      var r2 = this.m_radius * this.m_radius;
      var l2 = l * l;
      var area = r2 * (Math.asin(l / this.m_radius) + Math.PI / 2) + l * Math.sqrt(r2 - l2);
      var com = (-2 / 3 * Math.pow(r2 - l2, 1.5) / area);
      c.x = p.x + normal.x * com;
      c.y = p.y + normal.y * com;
      return area;
   }
   b2CircleShape.prototype.GetLocalPosition = function () {
      return this.m_p;
   }
   b2CircleShape.prototype.SetLocalPosition = function (position) {
      this.m_p.SetV(position);
   }
   b2CircleShape.prototype.GetRadius = function () {
      return this.m_radius;
   }
   b2CircleShape.prototype.SetRadius = function (radius) {
      if (radius === undefined) radius = 0;
      this.m_radius = radius;
   }
   b2CircleShape.prototype.b2CircleShape = function (radius) {
      if (radius === undefined) radius = 0;
      this.__super.b2Shape.call(this);
      this.m_type = this.e_circleShape;
      this.m_radius = radius;
   }
   b2EdgeChainDef.b2EdgeChainDef = function () {};
   b2EdgeChainDef.prototype.b2EdgeChainDef = function () {
      this.vertexCount = 0;
      this.isALoop = true;
      this.vertices = [];
   }
   b2EdgeShape.inherit(Box2D.Collision.Shapes.b2Shape);
   b2EdgeShape.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
   b2EdgeShape.b2EdgeShape = function () {
      Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
      this.s_supportVec = new b2Vec2();
      this.m_v1 = new b2Vec2();
      this.m_v2 = new b2Vec2();
      this.m_coreV1 = new b2Vec2();
      this.m_coreV2 = new b2Vec2();
      this.m_normal = new b2Vec2();
      this.m_direction = new b2Vec2();
      this.m_cornerDir1 = new b2Vec2();
      this.m_cornerDir2 = new b2Vec2();
   };
   b2EdgeShape.prototype.TestPoint = function (transform, p) {
      return false;
   }
   b2EdgeShape.prototype.RayCast = function (output, input, transform) {
      var tMat;
      var rX = input.p2.x - input.p1.x;
      var rY = input.p2.y - input.p1.y;
      tMat = transform.R;
      var v1X = transform.position.x + (tMat.col1.x * this.m_v1.x + tMat.col2.x * this.m_v1.y);
      var v1Y = transform.position.y + (tMat.col1.y * this.m_v1.x + tMat.col2.y * this.m_v1.y);
      var nX = transform.position.y + (tMat.col1.y * this.m_v2.x + tMat.col2.y * this.m_v2.y) - v1Y;
      var nY = (-(transform.position.x + (tMat.col1.x * this.m_v2.x + tMat.col2.x * this.m_v2.y) - v1X));
      var k_slop = 100.0 * Number.MIN_VALUE;
      var denom = (-(rX * nX + rY * nY));
      if (denom > k_slop) {
         var bX = input.p1.x - v1X;
         var bY = input.p1.y - v1Y;
         var a = (bX * nX + bY * nY);
         if (0.0 <= a && a <= input.maxFraction * denom) {
            var mu2 = (-rX * bY) + rY * bX;
            if ((-k_slop * denom) <= mu2 && mu2 <= denom * (1.0 + k_slop)) {
               a /= denom;
               output.fraction = a;
               var nLen = Math.sqrt(nX * nX + nY * nY);
               output.normal.x = nX / nLen;
               output.normal.y = nY / nLen;
               return true;
            }
         }
      }
      return false;
   }
   b2EdgeShape.prototype.ComputeAABB = function (aabb, transform) {
      var tMat = transform.R;
      var v1X = transform.position.x + (tMat.col1.x * this.m_v1.x + tMat.col2.x * this.m_v1.y);
      var v1Y = transform.position.y + (tMat.col1.y * this.m_v1.x + tMat.col2.y * this.m_v1.y);
      var v2X = transform.position.x + (tMat.col1.x * this.m_v2.x + tMat.col2.x * this.m_v2.y);
      var v2Y = transform.position.y + (tMat.col1.y * this.m_v2.x + tMat.col2.y * this.m_v2.y);
      if (v1X < v2X) {
         aabb.lowerBound.x = v1X;
         aabb.upperBound.x = v2X;
      }
      else {
         aabb.lowerBound.x = v2X;
         aabb.upperBound.x = v1X;
      }
      if (v1Y < v2Y) {
         aabb.lowerBound.y = v1Y;
         aabb.upperBound.y = v2Y;
      }
      else {
         aabb.lowerBound.y = v2Y;
         aabb.upperBound.y = v1Y;
      }
   }
   b2EdgeShape.prototype.ComputeMass = function (massData, density) {
      if (density === undefined) density = 0;
      massData.mass = 0;
      massData.center.SetV(this.m_v1);
      massData.I = 0;
   }
   b2EdgeShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
      if (offset === undefined) offset = 0;
      var v0 = new b2Vec2(normal.x * offset, normal.y * offset);
      var v1 = b2Math.MulX(xf, this.m_v1);
      var v2 = b2Math.MulX(xf, this.m_v2);
      var d1 = b2Math.Dot(normal, v1) - offset;
      var d2 = b2Math.Dot(normal, v2) - offset;
      if (d1 > 0) {
         if (d2 > 0) {
            return 0;
         }
         else {
            v1.x = (-d2 / (d1 - d2) * v1.x) + d1 / (d1 - d2) * v2.x;
            v1.y = (-d2 / (d1 - d2) * v1.y) + d1 / (d1 - d2) * v2.y;
         }
      }
      else {
         if (d2 > 0) {
            v2.x = (-d2 / (d1 - d2) * v1.x) + d1 / (d1 - d2) * v2.x;
            v2.y = (-d2 / (d1 - d2) * v1.y) + d1 / (d1 - d2) * v2.y;
         }
         else {}
      }
      c.x = (v0.x + v1.x + v2.x) / 3;
      c.y = (v0.y + v1.y + v2.y) / 3;
      return 0.5 * ((v1.x - v0.x) * (v2.y - v0.y) - (v1.y - v0.y) * (v2.x - v0.x));
   }
   b2EdgeShape.prototype.GetLength = function () {
      return this.m_length;
   }
   b2EdgeShape.prototype.GetVertex1 = function () {
      return this.m_v1;
   }
   b2EdgeShape.prototype.GetVertex2 = function () {
      return this.m_v2;
   }
   b2EdgeShape.prototype.GetCoreVertex1 = function () {
      return this.m_coreV1;
   }
   b2EdgeShape.prototype.GetCoreVertex2 = function () {
      return this.m_coreV2;
   }
   b2EdgeShape.prototype.GetNormalVector = function () {
      return this.m_normal;
   }
   b2EdgeShape.prototype.GetDirectionVector = function () {
      return this.m_direction;
   }
   b2EdgeShape.prototype.GetCorner1Vector = function () {
      return this.m_cornerDir1;
   }
   b2EdgeShape.prototype.GetCorner2Vector = function () {
      return this.m_cornerDir2;
   }
   b2EdgeShape.prototype.Corner1IsConvex = function () {
      return this.m_cornerConvex1;
   }
   b2EdgeShape.prototype.Corner2IsConvex = function () {
      return this.m_cornerConvex2;
   }
   b2EdgeShape.prototype.GetFirstVertex = function (xf) {
      var tMat = xf.R;
      return new b2Vec2(xf.position.x + (tMat.col1.x * this.m_coreV1.x + tMat.col2.x * this.m_coreV1.y), xf.position.y + (tMat.col1.y * this.m_coreV1.x + tMat.col2.y * this.m_coreV1.y));
   }
   b2EdgeShape.prototype.GetNextEdge = function () {
      return this.m_nextEdge;
   }
   b2EdgeShape.prototype.GetPrevEdge = function () {
      return this.m_prevEdge;
   }
   b2EdgeShape.prototype.Support = function (xf, dX, dY) {
      if (dX === undefined) dX = 0;
      if (dY === undefined) dY = 0;
      var tMat = xf.R;
      var v1X = xf.position.x + (tMat.col1.x * this.m_coreV1.x + tMat.col2.x * this.m_coreV1.y);
      var v1Y = xf.position.y + (tMat.col1.y * this.m_coreV1.x + tMat.col2.y * this.m_coreV1.y);
      var v2X = xf.position.x + (tMat.col1.x * this.m_coreV2.x + tMat.col2.x * this.m_coreV2.y);
      var v2Y = xf.position.y + (tMat.col1.y * this.m_coreV2.x + tMat.col2.y * this.m_coreV2.y);
      if ((v1X * dX + v1Y * dY) > (v2X * dX + v2Y * dY)) {
         this.s_supportVec.x = v1X;
         this.s_supportVec.y = v1Y;
      }
      else {
         this.s_supportVec.x = v2X;
         this.s_supportVec.y = v2Y;
      }
      return this.s_supportVec;
   }
   b2EdgeShape.prototype.b2EdgeShape = function (v1, v2) {
      this.__super.b2Shape.call(this);
      this.m_type = this.e_edgeShape;
      this.m_prevEdge = null;
      this.m_nextEdge = null;
      this.m_v1 = v1;
      this.m_v2 = v2;
      this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
      this.m_length = this.m_direction.Normalize();
      this.m_normal.Set(this.m_direction.y, (-this.m_direction.x));
      this.m_coreV1.Set((-b2Settings.b2_toiSlop * (this.m_normal.x - this.m_direction.x)) + this.m_v1.x, (-b2Settings.b2_toiSlop * (this.m_normal.y - this.m_direction.y)) + this.m_v1.y);
      this.m_coreV2.Set((-b2Settings.b2_toiSlop * (this.m_normal.x + this.m_direction.x)) + this.m_v2.x, (-b2Settings.b2_toiSlop * (this.m_normal.y + this.m_direction.y)) + this.m_v2.y);
      this.m_cornerDir1 = this.m_normal;
      this.m_cornerDir2.Set((-this.m_normal.x), (-this.m_normal.y));
   }
   b2EdgeShape.prototype.SetPrevEdge = function (edge, core, cornerDir, convex) {
      this.m_prevEdge = edge;
      this.m_coreV1 = core;
      this.m_cornerDir1 = cornerDir;
      this.m_cornerConvex1 = convex;
   }
   b2EdgeShape.prototype.SetNextEdge = function (edge, core, cornerDir, convex) {
      this.m_nextEdge = edge;
      this.m_coreV2 = core;
      this.m_cornerDir2 = cornerDir;
      this.m_cornerConvex2 = convex;
   }
   b2MassData.b2MassData = function () {
      this.mass = 0.0;
      this.center = new b2Vec2(0, 0);
      this.I = 0.0;
   };
   b2PolygonShape.inherit(Box2D.Collision.Shapes.b2Shape);
   b2PolygonShape.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
   b2PolygonShape.b2PolygonShape = function () {
      Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
   };
   b2PolygonShape.prototype.Copy = function () {
      var s = new b2PolygonShape();
      s.Set(this);
      return s;
   }
   b2PolygonShape.prototype.Set = function (other) {
      this.__super.Set.call(this, other);
      if (a2j.is(other, b2PolygonShape)) {
         var other2 = (other instanceof b2PolygonShape ? other : null);
         this.m_centroid.SetV(other2.m_centroid);
         this.m_vertexCount = other2.m_vertexCount;
         this.Reserve(this.m_vertexCount);
         for (var i = 0; i < this.m_vertexCount; i++) {
            this.m_vertices[i].SetV(other2.m_vertices[i]);
            this.m_normals[i].SetV(other2.m_normals[i]);
         }
      }
   }
   b2PolygonShape.prototype.SetAsArray = function (vertices, vertexCount) {
      if (vertexCount === undefined) vertexCount = 0;
      var v = new Vector();
      var tVec;

      var len = vertices.length
      for (var i = 0; i < len; i++) {
         tVec = vertices[i]; {
            v.push(tVec);
         }
      }
      this.SetAsVector(v, vertexCount);
   }
   b2PolygonShape.prototype.AsArray = function (vertices, vertexCount) {
      if (vertexCount === undefined) vertexCount = 0;
      var polygonShape = new b2PolygonShape();
      polygonShape.SetAsArray(vertices, vertexCount);
      return polygonShape;
   }
   b2PolygonShape.AsArray = b2PolygonShape.prototype.AsArray;
   b2PolygonShape.prototype.SetAsVector = function (vertices, vertexCount) {
      if (vertexCount === undefined) vertexCount = 0;
      if (vertexCount == 0) vertexCount = vertices.length;
      b2Settings.b2Assert(2 <= vertexCount);
      this.m_vertexCount = vertexCount;
      this.Reserve(vertexCount);
      var i = 0;
      for (i = 0;
      i < this.m_vertexCount; i++) {
         this.m_vertices[i].SetV(vertices[i]);
      }
      for (i = 0;
      i < this.m_vertexCount; ++i) {
         var i1 = parseInt(i);
         var i2 = parseInt(i + 1 < this.m_vertexCount ? i + 1 : 0);
         var edge = b2Math.SubtractVV(this.m_vertices[i2], this.m_vertices[i1]);
         b2Settings.b2Assert(edge.LengthSquared() > Number.MIN_VALUE);
         this.m_normals[i].SetV(b2Math.CrossVF(edge, 1.0));
         this.m_normals[i].Normalize();
      }
      this.m_centroid = this.ComputeCentroid(this.m_vertices, this.m_vertexCount);
   }
   b2PolygonShape.prototype.AsVector = function (vertices, vertexCount) {
      if (vertexCount === undefined) vertexCount = 0;
      var polygonShape = new b2PolygonShape();
      polygonShape.SetAsVector(vertices, vertexCount);
      return polygonShape;
   }
   b2PolygonShape.AsVector = b2PolygonShape.prototype.AsVector;
   b2PolygonShape.prototype.SetAsBox = function (hx, hy) {
      if (hx === undefined) hx = 0;
      if (hy === undefined) hy = 0;
      this.m_vertexCount = 4;
      this.Reserve(4);
      this.m_vertices[0].Set((-hx), (-hy));
      this.m_vertices[1].Set(hx, (-hy));
      this.m_vertices[2].Set(hx, hy);
      this.m_vertices[3].Set((-hx), hy);
      this.m_normals[0].Set(0.0, (-1.0));
      this.m_normals[1].Set(1.0, 0.0);
      this.m_normals[2].Set(0.0, 1.0);
      this.m_normals[3].Set((-1.0), 0.0);
      this.m_centroid.SetZero();
   }
   b2PolygonShape.prototype.AsBox = function (hx, hy) {
      if (hx === undefined) hx = 0;
      if (hy === undefined) hy = 0;
      var polygonShape = new b2PolygonShape();
      polygonShape.SetAsBox(hx, hy);
      return polygonShape;
   }
   b2PolygonShape.AsBox = b2PolygonShape.prototype.AsBox;
   b2PolygonShape.prototype.SetAsOrientedBox = function (hx, hy, center, angle) {
      if (hx === undefined) hx = 0;
      if (hy === undefined) hy = 0;
      if (center === undefined) center = null;
      if (angle === undefined) angle = 0.0;
      this.m_vertexCount = 4;
      this.Reserve(4);
      this.m_vertices[0].Set((-hx), (-hy));
      this.m_vertices[1].Set(hx, (-hy));
      this.m_vertices[2].Set(hx, hy);
      this.m_vertices[3].Set((-hx), hy);
      this.m_normals[0].Set(0.0, (-1.0));
      this.m_normals[1].Set(1.0, 0.0);
      this.m_normals[2].Set(0.0, 1.0);
      this.m_normals[3].Set((-1.0), 0.0);
      this.m_centroid = center;
      var xf = new b2Transform();
      xf.position = center;
      xf.R.Set(angle);
      for (var i = 0; i < this.m_vertexCount; ++i) {
         this.m_vertices[i] = b2Math.MulX(xf, this.m_vertices[i]);
         this.m_normals[i] = b2Math.MulMV(xf.R, this.m_normals[i]);
      }
   }
   b2PolygonShape.prototype.AsOrientedBox = function (hx, hy, center, angle) {
      if (hx === undefined) hx = 0;
      if (hy === undefined) hy = 0;
      if (center === undefined) center = null;
      if (angle === undefined) angle = 0.0;
      var polygonShape = new b2PolygonShape();
      polygonShape.SetAsOrientedBox(hx, hy, center, angle);
      return polygonShape;
   }
   b2PolygonShape.AsOrientedBox = b2PolygonShape.prototype.AsOrientedBox;
   b2PolygonShape.prototype.SetAsEdge = function (v1, v2) {
      this.m_vertexCount = 2;
      this.Reserve(2);
      this.m_vertices[0].SetV(v1);
      this.m_vertices[1].SetV(v2);
      this.m_centroid.x = 0.5 * (v1.x + v2.x);
      this.m_centroid.y = 0.5 * (v1.y + v2.y);
      this.m_normals[0] = b2Math.CrossVF(b2Math.SubtractVV(v2, v1), 1.0);
      this.m_normals[0].Normalize();
      this.m_normals[1].x = (-this.m_normals[0].x);
      this.m_normals[1].y = (-this.m_normals[0].y);
   }
   b2PolygonShape.prototype.AsEdge = function (v1, v2) {
      var polygonShape = new b2PolygonShape();
      polygonShape.SetAsEdge(v1, v2);
      return polygonShape;
   }
   b2PolygonShape.AsEdge = b2PolygonShape.prototype.AsEdge;
   b2PolygonShape.prototype.TestPoint = function (xf, p) {
      var tVec;
      var tMat = xf.R;
      var tX = p.x - xf.position.x;
      var tY = p.y - xf.position.y;
      var pLocalX = (tX * tMat.col1.x + tY * tMat.col1.y);
      var pLocalY = (tX * tMat.col2.x + tY * tMat.col2.y);
      for (var i = 0; i < this.m_vertexCount; ++i) {
         tVec = this.m_vertices[i];
         tX = pLocalX - tVec.x;
         tY = pLocalY - tVec.y;
         tVec = this.m_normals[i];
         var dot = (tVec.x * tX + tVec.y * tY);
         if (dot > 0.0) {
            return false;
         }
      }
      return true;
   }
   b2PolygonShape.prototype.RayCast = function (output, input, transform) {
      var lower = 0.0;
      var upper = input.maxFraction;
      var tX = 0;
      var tY = 0;
      var tMat;
      var tVec;
      tX = input.p1.x - transform.position.x;
      tY = input.p1.y - transform.position.y;
      tMat = transform.R;
      var p1X = (tX * tMat.col1.x + tY * tMat.col1.y);
      var p1Y = (tX * tMat.col2.x + tY * tMat.col2.y);
      tX = input.p2.x - transform.position.x;
      tY = input.p2.y - transform.position.y;
      tMat = transform.R;
      var p2X = (tX * tMat.col1.x + tY * tMat.col1.y);
      var p2Y = (tX * tMat.col2.x + tY * tMat.col2.y);
      var dX = p2X - p1X;
      var dY = p2Y - p1Y;
      var index = parseInt((-1));
      for (var i = 0; i < this.m_vertexCount; ++i) {
         tVec = this.m_vertices[i];
         tX = tVec.x - p1X;
         tY = tVec.y - p1Y;
         tVec = this.m_normals[i];
         var numerator = (tVec.x * tX + tVec.y * tY);
         var denominator = (tVec.x * dX + tVec.y * dY);
         if (denominator == 0.0) {
            if (numerator < 0.0) {
               return false;
            }
         }
         else {
            if (denominator < 0.0 && numerator < lower * denominator) {
               lower = numerator / denominator;
               index = i;
            }
            else if (denominator > 0.0 && numerator < upper * denominator) {
               upper = numerator / denominator;
            }
         }
         if (upper < lower - Number.MIN_VALUE) {
            return false;
         }
      }
      if (index >= 0) {
         output.fraction = lower;
         tMat = transform.R;
         tVec = this.m_normals[index];
         output.normal.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         output.normal.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         return true;
      }
      return false;
   }
   b2PolygonShape.prototype.ComputeAABB = function (aabb, xf) {
      var tMat = xf.R;
      var tVec = this.m_vertices[0];
      var lowerX = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      var lowerY = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      var upperX = lowerX;
      var upperY = lowerY;
      for (var i = 1; i < this.m_vertexCount; ++i) {
         tVec = this.m_vertices[i];
         var vX = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
         var vY = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
         lowerX = lowerX < vX ? lowerX : vX;
         lowerY = lowerY < vY ? lowerY : vY;
         upperX = upperX > vX ? upperX : vX;
         upperY = upperY > vY ? upperY : vY;
      }
      aabb.lowerBound.x = lowerX - this.m_radius;
      aabb.lowerBound.y = lowerY - this.m_radius;
      aabb.upperBound.x = upperX + this.m_radius;
      aabb.upperBound.y = upperY + this.m_radius;
   }
   b2PolygonShape.prototype.ComputeMass = function (massData, density) {
      if (density === undefined) density = 0;
      if (this.m_vertexCount == 2) {
         massData.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x);
         massData.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y);
         massData.mass = 0.0;
         massData.I = 0.0;
         return;
      }
      var centerX = 0.0;
      var centerY = 0.0;
      var area = 0.0;
      var I = 0.0;
      var p1X = 0.0;
      var p1Y = 0.0;
      var k_inv3 = 1.0 / 3.0;
      for (var i = 0; i < this.m_vertexCount; ++i) {
         var p2 = this.m_vertices[i];
         var p3 = i + 1 < this.m_vertexCount ? this.m_vertices[parseInt(i + 1)] : this.m_vertices[0];
         var e1X = p2.x - p1X;
         var e1Y = p2.y - p1Y;
         var e2X = p3.x - p1X;
         var e2Y = p3.y - p1Y;
         var D = e1X * e2Y - e1Y * e2X;
         var triangleArea = 0.5 * D;area += triangleArea;
         centerX += triangleArea * k_inv3 * (p1X + p2.x + p3.x);
         centerY += triangleArea * k_inv3 * (p1Y + p2.y + p3.y);
         var px = p1X;
         var py = p1Y;
         var ex1 = e1X;
         var ey1 = e1Y;
         var ex2 = e2X;
         var ey2 = e2Y;
         var intx2 = k_inv3 * (0.25 * (ex1 * ex1 + ex2 * ex1 + ex2 * ex2) + (px * ex1 + px * ex2)) + 0.5 * px * px;
         var inty2 = k_inv3 * (0.25 * (ey1 * ey1 + ey2 * ey1 + ey2 * ey2) + (py * ey1 + py * ey2)) + 0.5 * py * py;I += D * (intx2 + inty2);
      }
      massData.mass = density * area;
      centerX *= 1.0 / area;
      centerY *= 1.0 / area;
      massData.center.Set(centerX, centerY);
      massData.I = density * I;
   }
   b2PolygonShape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
      if (offset === undefined) offset = 0;
      var normalL = b2Math.MulTMV(xf.R, normal);
      var offsetL = offset - b2Math.Dot(normal, xf.position);
      var depths = new Vector_a2j_Number();
      var diveCount = 0;
      var intoIndex = parseInt((-1));
      var outoIndex = parseInt((-1));
      var lastSubmerged = false;
      var i = 0;
      for (i = 0;
      i < this.m_vertexCount; ++i) {
         depths[i] = b2Math.Dot(normalL, this.m_vertices[i]) - offsetL;
         var isSubmerged = depths[i] < (-Number.MIN_VALUE);
         if (i > 0) {
            if (isSubmerged) {
               if (!lastSubmerged) {
                  intoIndex = i - 1;
                  diveCount++;
               }
            }
            else {
               if (lastSubmerged) {
                  outoIndex = i - 1;
                  diveCount++;
               }
            }
         }
         lastSubmerged = isSubmerged;
      }
      switch (diveCount) {
      case 0:
         if (lastSubmerged) {
            var md = new b2MassData();
            this.ComputeMass(md, 1);
            c.SetV(b2Math.MulX(xf, md.center));
            return md.mass;
         }
         else {
            return 0;
         }
         break;
      case 1:
         if (intoIndex == (-1)) {
            intoIndex = this.m_vertexCount - 1;
         }
         else {
            outoIndex = this.m_vertexCount - 1;
         }
         break;
      }
      var intoIndex2 = parseInt((intoIndex + 1) % this.m_vertexCount);
      var outoIndex2 = parseInt((outoIndex + 1) % this.m_vertexCount);
      var intoLamdda = (0 - depths[intoIndex]) / (depths[intoIndex2] - depths[intoIndex]);
      var outoLamdda = (0 - depths[outoIndex]) / (depths[outoIndex2] - depths[outoIndex]);
      var intoVec = new b2Vec2(this.m_vertices[intoIndex].x * (1 - intoLamdda) + this.m_vertices[intoIndex2].x * intoLamdda, this.m_vertices[intoIndex].y * (1 - intoLamdda) + this.m_vertices[intoIndex2].y * intoLamdda);
      var outoVec = new b2Vec2(this.m_vertices[outoIndex].x * (1 - outoLamdda) + this.m_vertices[outoIndex2].x * outoLamdda, this.m_vertices[outoIndex].y * (1 - outoLamdda) + this.m_vertices[outoIndex2].y * outoLamdda);
      var area = 0;
      var center = new b2Vec2();
      var p2 = this.m_vertices[intoIndex2];
      var p3;
      i = intoIndex2;
      while (i != outoIndex2) {
         i = (i + 1) % this.m_vertexCount;
         if (i == outoIndex2) p3 = outoVec;
         else p3 = this.m_vertices[i];
         var triangleArea = 0.5 * ((p2.x - intoVec.x) * (p3.y - intoVec.y) - (p2.y - intoVec.y) * (p3.x - intoVec.x));
         area += triangleArea;
         center.x += triangleArea * (intoVec.x + p2.x + p3.x) / 3;
         center.y += triangleArea * (intoVec.y + p2.y + p3.y) / 3;
         p2 = p3;
      }
      center.Multiply(1 / area);
      c.SetV(b2Math.MulX(xf, center));
      return area;
   }
   b2PolygonShape.prototype.GetVertexCount = function () {
      return this.m_vertexCount;
   }
   b2PolygonShape.prototype.GetVertices = function () {
      return this.m_vertices;
   }
   b2PolygonShape.prototype.GetNormals = function () {
      return this.m_normals;
   }
   b2PolygonShape.prototype.GetSupport = function (d) {
      var bestIndex = 0;
      var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
      for (var i = 1; i < this.m_vertexCount; ++i) {
         var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
         if (value > bestValue) {
            bestIndex = i;
            bestValue = value;
         }
      }
      return bestIndex;
   }
   b2PolygonShape.prototype.GetSupportVertex = function (d) {
      var bestIndex = 0;
      var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
      for (var i = 1; i < this.m_vertexCount; ++i) {
         var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
         if (value > bestValue) {
            bestIndex = i;
            bestValue = value;
         }
      }
      return this.m_vertices[bestIndex];
   }
   b2PolygonShape.prototype.Validate = function () {
      return false;
   }
   b2PolygonShape.prototype.b2PolygonShape = function () {
      this.__super.b2Shape.call(this);
      this.m_type = this.e_polygonShape;
      this.m_centroid = new b2Vec2();
      this.m_vertices = new Vector();
      this.m_normals = new Vector();
   }
   b2PolygonShape.prototype.Reserve = function (count) {
      if (count === undefined) count = 0;
      for (var i = parseInt(this.m_vertices.length); i < count; i++) {
         this.m_vertices[i] = new b2Vec2();
         this.m_normals[i] = new b2Vec2();
      }
   }
   b2PolygonShape.prototype.ComputeCentroid = function (vs, count) {
      if (count === undefined) count = 0;
      var c = new b2Vec2();
      var area = 0.0;
      var p1X = 0.0;
      var p1Y = 0.0;
      var inv3 = 1.0 / 3.0;
      for (var i = 0; i < count; ++i) {
         var p2 = vs[i];
         var p3 = i + 1 < count ? vs[parseInt(i + 1)] : vs[0];
         var e1X = p2.x - p1X;
         var e1Y = p2.y - p1Y;
         var e2X = p3.x - p1X;
         var e2Y = p3.y - p1Y;
         var D = (e1X * e2Y - e1Y * e2X);
         var triangleArea = 0.5 * D;area += triangleArea;
         c.x += triangleArea * inv3 * (p1X + p2.x + p3.x);
         c.y += triangleArea * inv3 * (p1Y + p2.y + p3.y);
      }
      c.x *= 1.0 / area;
      c.y *= 1.0 / area;
      return c;
   }
   b2PolygonShape.ComputeCentroid = b2PolygonShape.prototype.ComputeCentroid;
   b2PolygonShape.prototype.ComputeOBB = function (obb, vs, count) {
      if (count === undefined) count = 0;
      var i = 0;
      var p = new Vector(count + 1);
      for (i = 0;
      i < count; ++i) {
         p[i] = vs[i];
      }
      p[count] = p[0];
      var minArea = Number.MAX_VALUE;
      for (i = 1;
      i <= count; ++i) {
         var root = p[parseInt(i - 1)];
         var uxX = p[i].x - root.x;
         var uxY = p[i].y - root.y;
         var length = Math.sqrt(uxX * uxX + uxY * uxY);
         uxX /= length;
         uxY /= length;
         var uyX = (-uxY);
         var uyY = uxX;
         var lowerX = Number.MAX_VALUE;
         var lowerY = Number.MAX_VALUE;
         var upperX = (-Number.MAX_VALUE);
         var upperY = (-Number.MAX_VALUE);
         for (var j = 0; j < count; ++j) {
            var dX = p[j].x - root.x;
            var dY = p[j].y - root.y;
            var rX = (uxX * dX + uxY * dY);
            var rY = (uyX * dX + uyY * dY);
            if (rX < lowerX) lowerX = rX;
            if (rY < lowerY) lowerY = rY;
            if (rX > upperX) upperX = rX;
            if (rY > upperY) upperY = rY;
         }
         var area = (upperX - lowerX) * (upperY - lowerY);
         if (area < 0.95 * minArea) {
            minArea = area;
            obb.R.col1.x = uxX;
            obb.R.col1.y = uxY;
            obb.R.col2.x = uyX;
            obb.R.col2.y = uyY;
            var centerX = 0.5 * (lowerX + upperX);
            var centerY = 0.5 * (lowerY + upperY);
            var tMat = obb.R;
            obb.center.x = root.x + (tMat.col1.x * centerX + tMat.col2.x * centerY);
            obb.center.y = root.y + (tMat.col1.y * centerX + tMat.col2.y * centerY);
            obb.extents.x = 0.5 * (upperX - lowerX);
            obb.extents.y = 0.5 * (upperY - lowerY);
         }
      }
   }
   b2PolygonShape.ComputeOBB = b2PolygonShape.prototype.ComputeOBB;
   _A2J_postDefs.push(function () {
      Box2D.Collision.Shapes.b2PolygonShape.s_mat = new b2Mat22();
      Box2D.Collision.Shapes.b2PolygonShape.prototype.s_mat = Box2D.Collision.Shapes.b2PolygonShape.s_mat;
   });
   b2Shape.b2Shape = function () {};
   b2Shape.prototype.Copy = function () {
      return null;
   }
   b2Shape.prototype.Set = function (other) {
      this.m_radius = other.m_radius;
   }
   b2Shape.prototype.GetType = function () {
      return this.m_type;
   }
   b2Shape.prototype.TestPoint = function (xf, p) {
      return false;
   }
   b2Shape.prototype.RayCast = function (output, input, transform) {
      return false;
   }
   b2Shape.prototype.ComputeAABB = function (aabb, xf) {}
   b2Shape.prototype.ComputeMass = function (massData, density) {
      if (density === undefined) density = 0;
   }
   b2Shape.prototype.ComputeSubmergedArea = function (normal, offset, xf, c) {
      if (offset === undefined) offset = 0;
      return 0;
   }
   b2Shape.prototype.TestOverlap = function (shape1, transform1, shape2, transform2) {
      var input = new b2DistanceInput();
      input.proxyA = new b2DistanceProxy();
      input.proxyA.Set(shape1);
      input.proxyB = new b2DistanceProxy();
      input.proxyB.Set(shape2);
      input.transformA = transform1;
      input.transformB = transform2;
      input.useRadii = true;
      var simplexCache = new b2SimplexCache();
      simplexCache.count = 0;
      var output = new b2DistanceOutput();
      b2Distance.Distance(output, simplexCache, input);
      return output.distance < 10.0 * Number.MIN_VALUE;
   }
   b2Shape.TestOverlap = b2Shape.prototype.TestOverlap;
   b2Shape.prototype.b2Shape = function () {
      this.m_type = b2Shape.e_unknownShape;
      this.m_radius = b2Settings.b2_linearSlop;
   }
   _A2J_postDefs.push(function () {
      Box2D.Collision.Shapes.b2Shape.e_unknownShape = parseInt((-1));
      Box2D.Collision.Shapes.b2Shape.prototype.e_unknownShape = Box2D.Collision.Shapes.b2Shape.e_unknownShape;
      Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
      Box2D.Collision.Shapes.b2Shape.prototype.e_circleShape = Box2D.Collision.Shapes.b2Shape.e_circleShape;
      Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
      Box2D.Collision.Shapes.b2Shape.prototype.e_polygonShape = Box2D.Collision.Shapes.b2Shape.e_polygonShape;
      Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
      Box2D.Collision.Shapes.b2Shape.prototype.e_edgeShape = Box2D.Collision.Shapes.b2Shape.e_edgeShape;
      Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
      Box2D.Collision.Shapes.b2Shape.prototype.e_shapeTypeCount = Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount;
      Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
      Box2D.Collision.Shapes.b2Shape.prototype.e_hitCollide = Box2D.Collision.Shapes.b2Shape.e_hitCollide;
      Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
      Box2D.Collision.Shapes.b2Shape.prototype.e_missCollide = Box2D.Collision.Shapes.b2Shape.e_missCollide;
      Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = parseInt((-1));
      Box2D.Collision.Shapes.b2Shape.prototype.e_startsInsideCollide = Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide;
   });
})(); /* source: disabled*/
(function () {
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2internal = Box2D.Common.b2internal;
   b2Color.b2Color = function () {
      this._r = 0;
      this._g = 0;
      this._b = 0;
   };
   b2Color.prototype.b2Color = function (rr, gg, bb) {
      if (rr === undefined) rr = 0;
      if (gg === undefined) gg = 0;
      if (bb === undefined) bb = 0;
      this._r = a2j.parseUInt(255 * b2Math.Clamp(rr, 0.0, 1.0));
      this._g = a2j.parseUInt(255 * b2Math.Clamp(gg, 0.0, 1.0));
      this._b = a2j.parseUInt(255 * b2Math.Clamp(bb, 0.0, 1.0));
   }
   b2Color.prototype.Set = function (rr, gg, bb) {
      if (rr === undefined) rr = 0;
      if (gg === undefined) gg = 0;
      if (bb === undefined) bb = 0;
      this._r = a2j.parseUInt(255 * b2Math.Clamp(rr, 0.0, 1.0));
      this._g = a2j.parseUInt(255 * b2Math.Clamp(gg, 0.0, 1.0));
      this._b = a2j.parseUInt(255 * b2Math.Clamp(bb, 0.0, 1.0));
   }
   b2Color.prototype.__defineSetter__('r', function (rr) {
      if (rr === undefined) rr = 0;
      this._r = a2j.parseUInt(255 * b2Math.Clamp(rr, 0.0, 1.0));
   });
   b2Color.prototype.__defineSetter__('g', function (gg) {
      if (gg === undefined) gg = 0;
      this._g = a2j.parseUInt(255 * b2Math.Clamp(gg, 0.0, 1.0));
   });
   b2Color.prototype.__defineSetter__('b', function (bb) {
      if (bb === undefined) bb = 0;
      this._b = a2j.parseUInt(255 * b2Math.Clamp(bb, 0.0, 1.0));
   });
   b2Color.prototype.__defineGetter__('color', function () {
      return (this._r << 16) | (this._g << 8) | (this._b);
   });
   b2Settings.b2Settings = function () {};
   b2Settings.prototype.b2MixFriction = function (friction1, friction2) {
      if (friction1 === undefined) friction1 = 0;
      if (friction2 === undefined) friction2 = 0;
      return Math.sqrt(friction1 * friction2);
   }
   b2Settings.b2MixFriction = b2Settings.prototype.b2MixFriction;
   b2Settings.prototype.b2MixRestitution = function (restitution1, restitution2) {
      if (restitution1 === undefined) restitution1 = 0;
      if (restitution2 === undefined) restitution2 = 0;
      return restitution1 > restitution2 ? restitution1 : restitution2;
   }
   b2Settings.b2MixRestitution = b2Settings.prototype.b2MixRestitution;
   b2Settings.prototype.b2Assert = function (a) {
      if (!a) {
         throw "Assertion Failed";
      }
   }
   b2Settings.b2Assert = b2Settings.prototype.b2Assert;
   _A2J_postDefs.push(function () {
      Box2D.Common.b2Settings.VERSION = "2.1alpha";
      Box2D.Common.b2Settings.prototype.VERSION = Box2D.Common.b2Settings.VERSION;
      Box2D.Common.b2Settings.USHRT_MAX = 0x0000ffff;
      Box2D.Common.b2Settings.prototype.USHRT_MAX = Box2D.Common.b2Settings.USHRT_MAX;
      Box2D.Common.b2Settings.b2_pi = Math.PI;
      Box2D.Common.b2Settings.prototype.b2_pi = Box2D.Common.b2Settings.b2_pi;
      Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
      Box2D.Common.b2Settings.prototype.b2_maxManifoldPoints = Box2D.Common.b2Settings.b2_maxManifoldPoints;
      Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
      Box2D.Common.b2Settings.prototype.b2_aabbExtension = Box2D.Common.b2Settings.b2_aabbExtension;
      Box2D.Common.b2Settings.b2_aabbMultiplier = 2.0;
      Box2D.Common.b2Settings.prototype.b2_aabbMultiplier = Box2D.Common.b2Settings.b2_aabbMultiplier;
      Box2D.Common.b2Settings.b2_polygonRadius = 2.0 * b2Settings.b2_linearSlop;
      Box2D.Common.b2Settings.prototype.b2_polygonRadius = Box2D.Common.b2Settings.b2_polygonRadius;
      Box2D.Common.b2Settings.b2_linearSlop = 0.005;
      Box2D.Common.b2Settings.prototype.b2_linearSlop = Box2D.Common.b2Settings.b2_linearSlop;
      Box2D.Common.b2Settings.b2_angularSlop = 2.0 / 180.0 * b2Settings.b2_pi;
      Box2D.Common.b2Settings.prototype.b2_angularSlop = Box2D.Common.b2Settings.b2_angularSlop;
      Box2D.Common.b2Settings.b2_toiSlop = 8.0 * b2Settings.b2_linearSlop;
      Box2D.Common.b2Settings.prototype.b2_toiSlop = Box2D.Common.b2Settings.b2_toiSlop;
      Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
      Box2D.Common.b2Settings.prototype.b2_maxTOIContactsPerIsland = Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland;
      Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
      Box2D.Common.b2Settings.prototype.b2_maxTOIJointsPerIsland = Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland;
      Box2D.Common.b2Settings.b2_velocityThreshold = 1.0;
      Box2D.Common.b2Settings.prototype.b2_velocityThreshold = Box2D.Common.b2Settings.b2_velocityThreshold;
      Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
      Box2D.Common.b2Settings.prototype.b2_maxLinearCorrection = Box2D.Common.b2Settings.b2_maxLinearCorrection;
      Box2D.Common.b2Settings.b2_maxAngularCorrection = 8.0 / 180.0 * b2Settings.b2_pi;
      Box2D.Common.b2Settings.prototype.b2_maxAngularCorrection = Box2D.Common.b2Settings.b2_maxAngularCorrection;
      Box2D.Common.b2Settings.b2_maxTranslation = 2.0;
      Box2D.Common.b2Settings.prototype.b2_maxTranslation = Box2D.Common.b2Settings.b2_maxTranslation;
      Box2D.Common.b2Settings.b2_maxTranslationSquared = b2Settings.b2_maxTranslation * b2Settings.b2_maxTranslation;
      Box2D.Common.b2Settings.prototype.b2_maxTranslationSquared = Box2D.Common.b2Settings.b2_maxTranslationSquared;
      Box2D.Common.b2Settings.b2_maxRotation = 0.5 * b2Settings.b2_pi;
      Box2D.Common.b2Settings.prototype.b2_maxRotation = Box2D.Common.b2Settings.b2_maxRotation;
      Box2D.Common.b2Settings.b2_maxRotationSquared = b2Settings.b2_maxRotation * b2Settings.b2_maxRotation;
      Box2D.Common.b2Settings.prototype.b2_maxRotationSquared = Box2D.Common.b2Settings.b2_maxRotationSquared;
      Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
      Box2D.Common.b2Settings.prototype.b2_contactBaumgarte = Box2D.Common.b2Settings.b2_contactBaumgarte;
      Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
      Box2D.Common.b2Settings.prototype.b2_timeToSleep = Box2D.Common.b2Settings.b2_timeToSleep;
      Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01;
      Box2D.Common.b2Settings.prototype.b2_linearSleepTolerance = Box2D.Common.b2Settings.b2_linearSleepTolerance;
      Box2D.Common.b2Settings.b2_angularSleepTolerance = 2.0 / 180.0 * b2Settings.b2_pi;
      Box2D.Common.b2Settings.prototype.b2_angularSleepTolerance = Box2D.Common.b2Settings.b2_angularSleepTolerance;
   });
})(); /* source: disabled*/
(function () {
   var b2AABB = Box2D.Collision.b2AABB;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   b2Mat22.b2Mat22 = function () {
      this.col1 = new b2Vec2();
      this.col2 = new b2Vec2();
   };
   b2Mat22.prototype.b2Mat22 = function () {
      this.SetIdentity();
   }
   b2Mat22.prototype.FromAngle = function (angle) {
      if (angle === undefined) angle = 0;
      var mat = new b2Mat22();
      mat.Set(angle);
      return mat;
   }
   b2Mat22.FromAngle = b2Mat22.prototype.FromAngle;
   b2Mat22.prototype.FromVV = function (c1, c2) {
      var mat = new b2Mat22();
      mat.SetVV(c1, c2);
      return mat;
   }
   b2Mat22.FromVV = b2Mat22.prototype.FromVV;
   b2Mat22.prototype.Set = function (angle) {
      if (angle === undefined) angle = 0;
      var c = Math.cos(angle);
      var s = Math.sin(angle);
      this.col1.x = c;
      this.col2.x = (-s);
      this.col1.y = s;
      this.col2.y = c;
   }
   b2Mat22.prototype.SetVV = function (c1, c2) {
      this.col1.SetV(c1);
      this.col2.SetV(c2);
   }
   b2Mat22.prototype.Copy = function () {
      var mat = new b2Mat22();
      mat.SetM(this);
      return mat;
   }
   b2Mat22.prototype.SetM = function (m) {
      this.col1.SetV(m.col1);
      this.col2.SetV(m.col2);
   }
   b2Mat22.prototype.AddM = function (m) {
      this.col1.x += m.col1.x;
      this.col1.y += m.col1.y;
      this.col2.x += m.col2.x;
      this.col2.y += m.col2.y;
   }
   b2Mat22.prototype.SetIdentity = function () {
      this.col1.x = 1.0;
      this.col2.x = 0.0;
      this.col1.y = 0.0;
      this.col2.y = 1.0;
   }
   b2Mat22.prototype.SetZero = function () {
      this.col1.x = 0.0;
      this.col2.x = 0.0;
      this.col1.y = 0.0;
      this.col2.y = 0.0;
   }
   b2Mat22.prototype.GetAngle = function () {
      return Math.atan2(this.col1.y, this.col1.x);
   }
   b2Mat22.prototype.GetInverse = function (out) {
      var a = this.col1.x;
      var b = this.col2.x;
      var c = this.col1.y;
      var d = this.col2.y;
      var det = a * d - b * c;
      if (det != 0.0) {
         det = 1.0 / det;
      }
      out.col1.x = det * d;
      out.col2.x = (-det * b);
      out.col1.y = (-det * c);
      out.col2.y = det * a;
      return out;
   }
   b2Mat22.prototype.Solve = function (out, bX, bY) {
      if (bX === undefined) bX = 0;
      if (bY === undefined) bY = 0;
      var a11 = this.col1.x;
      var a12 = this.col2.x;
      var a21 = this.col1.y;
      var a22 = this.col2.y;
      var det = a11 * a22 - a12 * a21;
      if (det != 0.0) {
         det = 1.0 / det;
      }
      out.x = det * (a22 * bX - a12 * bY);
      out.y = det * (a11 * bY - a21 * bX);
      return out;
   }
   b2Mat22.prototype.Abs = function () {
      this.col1.Abs();
      this.col2.Abs();
   }
   b2Mat33.b2Mat33 = function () {
      this.col1 = new b2Vec3();
      this.col2 = new b2Vec3();
      this.col3 = new b2Vec3();
   };
   b2Mat33.prototype.b2Mat33 = function (c1, c2, c3) {
      if (c1 === undefined) c1 = null;
      if (c2 === undefined) c2 = null;
      if (c3 === undefined) c3 = null;
      if (!c1 && !c2 && !c3) {
         this.col1.SetZero();
         this.col2.SetZero();
         this.col3.SetZero();
      }
      else {
         this.col1.SetV(c1);
         this.col2.SetV(c2);
         this.col3.SetV(c3);
      }
   }
   b2Mat33.prototype.SetVVV = function (c1, c2, c3) {
      this.col1.SetV(c1);
      this.col2.SetV(c2);
      this.col3.SetV(c3);
   }
   b2Mat33.prototype.Copy = function () {
      return new b2Mat33(this.col1, this.col2, this.col3);
   }
   b2Mat33.prototype.SetM = function (m) {
      this.col1.SetV(m.col1);
      this.col2.SetV(m.col2);
      this.col3.SetV(m.col3);
   }
   b2Mat33.prototype.AddM = function (m) {
      this.col1.x += m.col1.x;
      this.col1.y += m.col1.y;
      this.col1.z += m.col1.z;
      this.col2.x += m.col2.x;
      this.col2.y += m.col2.y;
      this.col2.z += m.col2.z;
      this.col3.x += m.col3.x;
      this.col3.y += m.col3.y;
      this.col3.z += m.col3.z;
   }
   b2Mat33.prototype.SetIdentity = function () {
      this.col1.x = 1.0;
      this.col2.x = 0.0;
      this.col3.x = 0.0;
      this.col1.y = 0.0;
      this.col2.y = 1.0;
      this.col3.y = 0.0;
      this.col1.z = 0.0;
      this.col2.z = 0.0;
      this.col3.z = 1.0;
   }
   b2Mat33.prototype.SetZero = function () {
      this.col1.x = 0.0;
      this.col2.x = 0.0;
      this.col3.x = 0.0;
      this.col1.y = 0.0;
      this.col2.y = 0.0;
      this.col3.y = 0.0;
      this.col1.z = 0.0;
      this.col2.z = 0.0;
      this.col3.z = 0.0;
   }
   b2Mat33.prototype.Solve22 = function (out, bX, bY) {
      if (bX === undefined) bX = 0;
      if (bY === undefined) bY = 0;
      var a11 = this.col1.x;
      var a12 = this.col2.x;
      var a21 = this.col1.y;
      var a22 = this.col2.y;
      var det = a11 * a22 - a12 * a21;
      if (det != 0.0) {
         det = 1.0 / det;
      }
      out.x = det * (a22 * bX - a12 * bY);
      out.y = det * (a11 * bY - a21 * bX);
      return out;
   }
   b2Mat33.prototype.Solve33 = function (out, bX, bY, bZ) {
      if (bX === undefined) bX = 0;
      if (bY === undefined) bY = 0;
      if (bZ === undefined) bZ = 0;
      var a11 = this.col1.x;
      var a21 = this.col1.y;
      var a31 = this.col1.z;
      var a12 = this.col2.x;
      var a22 = this.col2.y;
      var a32 = this.col2.z;
      var a13 = this.col3.x;
      var a23 = this.col3.y;
      var a33 = this.col3.z;
      var det = a11 * (a22 * a33 - a32 * a23) + a21 * (a32 * a13 - a12 * a33) + a31 * (a12 * a23 - a22 * a13);
      if (det != 0.0) {
         det = 1.0 / det;
      }
      out.x = det * (bX * (a22 * a33 - a32 * a23) + bY * (a32 * a13 - a12 * a33) + bZ * (a12 * a23 - a22 * a13));
      out.y = det * (a11 * (bY * a33 - bZ * a23) + a21 * (bZ * a13 - bX * a33) + a31 * (bX * a23 - bY * a13));
      out.z = det * (a11 * (a22 * bZ - a32 * bY) + a21 * (a32 * bX - a12 * bZ) + a31 * (a12 * bY - a22 * bX));
      return out;
   }
   b2Math.b2Math = function () {};
   b2Math.prototype.IsValid = function (x) {
      if (x === undefined) x = 0;
      return isFinite(x);
   }
   b2Math.IsValid = b2Math.prototype.IsValid;
   b2Math.prototype.Dot = function (a, b) {
      return a.x * b.x + a.y * b.y;
   }
   b2Math.Dot = b2Math.prototype.Dot;
   b2Math.prototype.CrossVV = function (a, b) {
      return a.x * b.y - a.y * b.x;
   }
   b2Math.CrossVV = b2Math.prototype.CrossVV;
   b2Math.prototype.CrossVF = function (a, s) {
      if (s === undefined) s = 0;
      var v = new b2Vec2(s * a.y, (-s * a.x));
      return v;
   }
   b2Math.CrossVF = b2Math.prototype.CrossVF;
   b2Math.prototype.CrossFV = function (s, a) {
      if (s === undefined) s = 0;
      var v = new b2Vec2((-s * a.y), s * a.x);
      return v;
   }
   b2Math.CrossFV = b2Math.prototype.CrossFV;
   b2Math.prototype.MulMV = function (A, v) {
      var u = new b2Vec2(A.col1.x * v.x + A.col2.x * v.y, A.col1.y * v.x + A.col2.y * v.y);
      return u;
   }
   b2Math.MulMV = b2Math.prototype.MulMV;
   b2Math.prototype.MulTMV = function (A, v) {
      var u = new b2Vec2(this.Dot(v, A.col1), this.Dot(v, A.col2));
      return u;
   }
   b2Math.MulTMV = b2Math.prototype.MulTMV;
   b2Math.prototype.MulX = function (T, v) {
      var a = this.MulMV(T.R, v);
      a.x += T.position.x;
      a.y += T.position.y;
      return a;
   }
   b2Math.MulX = b2Math.prototype.MulX;
   b2Math.prototype.MulXT = function (T, v) {
      var a = this.SubtractVV(v, T.position);
      var tX = (a.x * T.R.col1.x + a.y * T.R.col1.y);
      a.y = (a.x * T.R.col2.x + a.y * T.R.col2.y);
      a.x = tX;
      return a;
   }
   b2Math.MulXT = b2Math.prototype.MulXT;
   b2Math.prototype.AddVV = function (a, b) {
      var v = new b2Vec2(a.x + b.x, a.y + b.y);
      return v;
   }
   b2Math.AddVV = b2Math.prototype.AddVV;
   b2Math.prototype.SubtractVV = function (a, b) {
      var v = new b2Vec2(a.x - b.x, a.y - b.y);
      return v;
   }
   b2Math.SubtractVV = b2Math.prototype.SubtractVV;
   b2Math.prototype.Distance = function (a, b) {
      var cX = a.x - b.x;
      var cY = a.y - b.y;
      return Math.sqrt(cX * cX + cY * cY);
   }
   b2Math.Distance = b2Math.prototype.Distance;
   b2Math.prototype.DistanceSquared = function (a, b) {
      var cX = a.x - b.x;
      var cY = a.y - b.y;
      return (cX * cX + cY * cY);
   }
   b2Math.DistanceSquared = b2Math.prototype.DistanceSquared;
   b2Math.prototype.MulFV = function (s, a) {
      if (s === undefined) s = 0;
      var v = new b2Vec2(s * a.x, s * a.y);
      return v;
   }
   b2Math.MulFV = b2Math.prototype.MulFV;
   b2Math.prototype.AddMM = function (A, B) {
      var C = b2Mat22.FromVV(this.AddVV(A.col1, B.col1), this.AddVV(A.col2, B.col2));
      return C;
   }
   b2Math.AddMM = b2Math.prototype.AddMM;
   b2Math.prototype.MulMM = function (A, B) {
      var C = b2Mat22.FromVV(this.MulMV(A, B.col1), this.MulMV(A, B.col2));
      return C;
   }
   b2Math.MulMM = b2Math.prototype.MulMM;
   b2Math.prototype.MulTMM = function (A, B) {
      var c1 = new b2Vec2(this.Dot(A.col1, B.col1), this.Dot(A.col2, B.col1));
      var c2 = new b2Vec2(this.Dot(A.col1, B.col2), this.Dot(A.col2, B.col2));
      var C = b2Mat22.FromVV(c1, c2);
      return C;
   }
   b2Math.MulTMM = b2Math.prototype.MulTMM;
   b2Math.prototype.Abs = function (a) {
      if (a === undefined) a = 0;
      return a > 0.0 ? a : (-a);
   }
   b2Math.Abs = b2Math.prototype.Abs;
   b2Math.prototype.AbsV = function (a) {
      var b = new b2Vec2(this.Abs(a.x), this.Abs(a.y));
      return b;
   }
   b2Math.AbsV = b2Math.prototype.AbsV;
   b2Math.prototype.AbsM = function (A) {
      var B = b2Mat22.FromVV(this.AbsV(A.col1), this.AbsV(A.col2));
      return B;
   }
   b2Math.AbsM = b2Math.prototype.AbsM;
   b2Math.prototype.Min = function (a, b) {
      if (a === undefined) a = 0;
      if (b === undefined) b = 0;
      return a < b ? a : b;
   }
   b2Math.Min = b2Math.prototype.Min;
   b2Math.prototype.MinV = function (a, b) {
      var c = new b2Vec2(this.Min(a.x, b.x), this.Min(a.y, b.y));
      return c;
   }
   b2Math.MinV = b2Math.prototype.MinV;
   b2Math.prototype.Max = function (a, b) {
      if (a === undefined) a = 0;
      if (b === undefined) b = 0;
      return a > b ? a : b;
   }
   b2Math.Max = b2Math.prototype.Max;
   b2Math.prototype.MaxV = function (a, b) {
      var c = new b2Vec2(this.Max(a.x, b.x), this.Max(a.y, b.y));
      return c;
   }
   b2Math.MaxV = b2Math.prototype.MaxV;
   b2Math.prototype.Clamp = function (a, low, high) {
      if (a === undefined) a = 0;
      if (low === undefined) low = 0;
      if (high === undefined) high = 0;
      return a < low ? low : a > high ? high : a;
   }
   b2Math.Clamp = b2Math.prototype.Clamp;
   b2Math.prototype.ClampV = function (a, low, high) {
      return this.MaxV(low, this.MinV(a, high));
   }
   b2Math.ClampV = b2Math.prototype.ClampV;
   b2Math.prototype.Swap = function (a, b) {
      var tmp = a[0];
      a[0] = b[0];
      b[0] = tmp;
   }
   b2Math.Swap = b2Math.prototype.Swap;
   b2Math.prototype.Random = function () {
      return Math.random() * 2 - 1;
   }
   b2Math.Random = b2Math.prototype.Random;
   b2Math.prototype.RandomRange = function (lo, hi) {
      if (lo === undefined) lo = 0;
      if (hi === undefined) hi = 0;
      var r = Math.random();
      r = (hi - lo) * r + lo;
      return r;
   }
   b2Math.RandomRange = b2Math.prototype.RandomRange;
   b2Math.prototype.NextPowerOfTwo = function (x) {
      if (x === undefined) x = 0;
      x |= (x >> 1) & 0x7FFFFFFF;
      x |= (x >> 2) & 0x3FFFFFFF;
      x |= (x >> 4) & 0x0FFFFFFF;
      x |= (x >> 8) & 0x00FFFFFF;
      x |= (x >> 16) & 0x0000FFFF;
      return x + 1;
   }
   b2Math.NextPowerOfTwo = b2Math.prototype.NextPowerOfTwo;
   b2Math.prototype.IsPowerOfTwo = function (x) {
      if (x === undefined) x = 0;
      var result = x > 0 && (x & (x - 1)) == 0;
      return result;
   }
   b2Math.IsPowerOfTwo = b2Math.prototype.IsPowerOfTwo;
   _A2J_postDefs.push(function () {
      Box2D.Common.Math.b2Math.b2Vec2_zero = new b2Vec2(0.0, 0.0);
      Box2D.Common.Math.b2Math.prototype.b2Vec2_zero = Box2D.Common.Math.b2Math.b2Vec2_zero;
      Box2D.Common.Math.b2Math.b2Mat22_identity = b2Mat22.FromVV(new b2Vec2(1.0, 0.0), new b2Vec2(0.0, 1.0));
      Box2D.Common.Math.b2Math.prototype.b2Mat22_identity = Box2D.Common.Math.b2Math.b2Mat22_identity;
      Box2D.Common.Math.b2Math.b2Transform_identity = new b2Transform(b2Math.b2Vec2_zero, b2Math.b2Mat22_identity);
      Box2D.Common.Math.b2Math.prototype.b2Transform_identity = Box2D.Common.Math.b2Math.b2Transform_identity;
   });
   b2Sweep.b2Sweep = function () {
      this.localCenter = new b2Vec2();
      this.c0 = new b2Vec2;
      this.c = new b2Vec2();
   };
   b2Sweep.prototype.Set = function (other) {
      this.localCenter.SetV(other.localCenter);
      this.c0.SetV(other.c0);
      this.c.SetV(other.c);
      this.a0 = other.a0;
      this.a = other.a;
      this.t0 = other.t0;
   }
   b2Sweep.prototype.Copy = function () {
      var copy = new b2Sweep();
      copy.localCenter.SetV(this.localCenter);
      copy.c0.SetV(this.c0);
      copy.c.SetV(this.c);
      copy.a0 = this.a0;
      copy.a = this.a;
      copy.t0 = this.t0;
      return copy;
   }
   b2Sweep.prototype.GetTransform = function (xf, alpha) {
      if (alpha === undefined) alpha = 0;
      xf.position.x = (1.0 - alpha) * this.c0.x + alpha * this.c.x;
      xf.position.y = (1.0 - alpha) * this.c0.y + alpha * this.c.y;
      var angle = (1.0 - alpha) * this.a0 + alpha * this.a;
      xf.R.Set(angle);
      var tMat = xf.R;
      xf.position.x -= (tMat.col1.x * this.localCenter.x + tMat.col2.x * this.localCenter.y);
      xf.position.y -= (tMat.col1.y * this.localCenter.x + tMat.col2.y * this.localCenter.y);
   }
   b2Sweep.prototype.Advance = function (t) {
      if (t === undefined) t = 0;
      if (this.t0 < t && 1.0 - this.t0 > Number.MIN_VALUE) {
         var alpha = (t - this.t0) / (1.0 - this.t0);
         this.c0.x = (1.0 - alpha) * this.c0.x + alpha * this.c.x;
         this.c0.y = (1.0 - alpha) * this.c0.y + alpha * this.c.y;
         this.a0 = (1.0 - alpha) * this.a0 + alpha * this.a;
         this.t0 = t;
      }
   }
   b2Transform.b2Transform = function () {
      this.position = new b2Vec2;
      this.R = new b2Mat22();
   };
   b2Transform.prototype.b2Transform = function (pos, r) {
      if (pos === undefined) pos = null;
      if (r === undefined) r = null;
      if (pos) {
         this.position.SetV(pos);
         this.R.SetM(r);
      }
   }
   b2Transform.prototype.Initialize = function (pos, r) {
      this.position.SetV(pos);
      this.R.SetM(r);
   }
   b2Transform.prototype.SetIdentity = function () {
      this.position.SetZero();
      this.R.SetIdentity();
   }
   b2Transform.prototype.Set = function (x) {
      this.position.SetV(x.position);
      this.R.SetM(x.R);
   }
   b2Transform.prototype.GetAngle = function () {
      return Math.atan2(this.R.col1.y, this.R.col1.x);
   }
   b2Vec2.b2Vec2 = function () {};
   b2Vec2.prototype.b2Vec2 = function (x_, y_) {
      if (x_ === undefined) x_ = 0;
      if (y_ === undefined) y_ = 0;
      this.x = x_;
      this.y = y_;
   }
   b2Vec2.prototype.SetZero = function () {
      this.x = 0.0;
      this.y = 0.0;
   }
   b2Vec2.prototype.Set = function (x_, y_) {
      if (x_ === undefined) x_ = 0;
      if (y_ === undefined) y_ = 0;
      this.x = x_;
      this.y = y_;
   }
   b2Vec2.prototype.SetV = function (v) {
      this.x = v.x;
      this.y = v.y;
   }
   b2Vec2.prototype.GetNegative = function () {
      return new b2Vec2((-this.x), (-this.y));
   }
   b2Vec2.prototype.NegativeSelf = function () {
      this.x = (-this.x);
      this.y = (-this.y);
   }
   b2Vec2.prototype.Make = function (x_, y_) {
      if (x_ === undefined) x_ = 0;
      if (y_ === undefined) y_ = 0;
      return new b2Vec2(x_, y_);
   }
   b2Vec2.Make = b2Vec2.prototype.Make;
   b2Vec2.prototype.Copy = function () {
      return new b2Vec2(this.x, this.y);
   }
   b2Vec2.prototype.Add = function (v) {
      this.x += v.x;
      this.y += v.y;
   }
   b2Vec2.prototype.Subtract = function (v) {
      this.x -= v.x;
      this.y -= v.y;
   }
   b2Vec2.prototype.Multiply = function (a) {
      if (a === undefined) a = 0;
      this.x *= a;
      this.y *= a;
   }
   b2Vec2.prototype.MulM = function (A) {
      var tX = this.x;
      this.x = A.col1.x * tX + A.col2.x * this.y;
      this.y = A.col1.y * tX + A.col2.y * this.y;
   }
   b2Vec2.prototype.MulTM = function (A) {
      var tX = b2Math.Dot(this, A.col1);
      this.y = b2Math.Dot(this, A.col2);
      this.x = tX;
   }
   b2Vec2.prototype.CrossVF = function (s) {
      if (s === undefined) s = 0;
      var tX = this.x;
      this.x = s * this.y;
      this.y = (-s * tX);
   }
   b2Vec2.prototype.CrossFV = function (s) {
      if (s === undefined) s = 0;
      var tX = this.x;
      this.x = (-s * this.y);
      this.y = s * tX;
   }
   b2Vec2.prototype.MinV = function (b) {
      this.x = this.x < b.x ? this.x : b.x;
      this.y = this.y < b.y ? this.y : b.y;
   }
   b2Vec2.prototype.MaxV = function (b) {
      this.x = this.x > b.x ? this.x : b.x;
      this.y = this.y > b.y ? this.y : b.y;
   }
   b2Vec2.prototype.Abs = function () {
      if (this.x < 0) this.x = (-this.x);
      if (this.y < 0) this.y = (-this.y);
   }
   b2Vec2.prototype.Length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
   }
   b2Vec2.prototype.LengthSquared = function () {
      return (this.x * this.x + this.y * this.y);
   }
   b2Vec2.prototype.Normalize = function () {
      var length = Math.sqrt(this.x * this.x + this.y * this.y);
      if (length < Number.MIN_VALUE) {
         return 0.0;
      }
      var invLength = 1.0 / length;
      this.x *= invLength;
      this.y *= invLength;
      return length;
   }
   b2Vec2.prototype.IsValid = function () {
      return b2Math.IsValid(this.x) && b2Math.IsValid(this.y);
   }
   b2Vec3.b2Vec3 = function () {};
   b2Vec3.prototype.b2Vec3 = function (x, y, z) {
      if (x === undefined) x = 0;
      if (y === undefined) y = 0;
      if (z === undefined) z = 0;
      this.x = x;
      this.y = y;
      this.z = z;
   }
   b2Vec3.prototype.SetZero = function () {
      this.x = this.y = this.z = 0.0;
   }
   b2Vec3.prototype.Set = function (x, y, z) {
      if (x === undefined) x = 0;
      if (y === undefined) y = 0;
      if (z === undefined) z = 0;
      this.x = x;
      this.y = y;
      this.z = z;
   }
   b2Vec3.prototype.SetV = function (v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
   }
   b2Vec3.prototype.GetNegative = function () {
      return new b2Vec3((-this.x), (-this.y), (-this.z));
   }
   b2Vec3.prototype.NegativeSelf = function () {
      this.x = (-this.x);
      this.y = (-this.y);
      this.z = (-this.z);
   }
   b2Vec3.prototype.Copy = function () {
      return new b2Vec3(this.x, this.y, this.z);
   }
   b2Vec3.prototype.Add = function (v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
   }
   b2Vec3.prototype.Subtract = function (v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
   }
   b2Vec3.prototype.Multiply = function (a) {
      if (a === undefined) a = 0;
      this.x *= a;
      this.y *= a;
      this.z *= a;
   }
})(); /* source: disabled*/
(function () {
   var b2ControllerEdge = Box2D.Dynamics.Controllers.b2ControllerEdge;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2AABB = Box2D.Collision.b2AABB;
   var b2Bound = Box2D.Collision.b2Bound;
   var b2BoundValues = Box2D.Collision.b2BoundValues;
   var b2BroadPhase = Box2D.Collision.b2BroadPhase;
   var b2Collision = Box2D.Collision.b2Collision;
   var b2ContactID = Box2D.Collision.b2ContactID;
   var b2ContactPoint = Box2D.Collision.b2ContactPoint;
   var b2Distance = Box2D.Collision.b2Distance;
   var b2DistanceInput = Box2D.Collision.b2DistanceInput;
   var b2DistanceOutput = Box2D.Collision.b2DistanceOutput;
   var b2DistanceProxy = Box2D.Collision.b2DistanceProxy;
   var b2DynamicTree = Box2D.Collision.b2DynamicTree;
   var b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase;
   var b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode;
   var b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair;
   var b2Manifold = Box2D.Collision.b2Manifold;
   var b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint;
   var b2OBB = Box2D.Collision.b2OBB;
   var b2Pair = Box2D.Collision.b2Pair;
   var b2PairManager = Box2D.Collision.b2PairManager;
   var b2Point = Box2D.Collision.b2Point;
   var b2Proxy = Box2D.Collision.b2Proxy;
   var b2RayCastInput = Box2D.Collision.b2RayCastInput;
   var b2RayCastOutput = Box2D.Collision.b2RayCastOutput;
   var b2Segment = Box2D.Collision.b2Segment;
   var b2SeparationFunction = Box2D.Collision.b2SeparationFunction;
   var b2Simplex = Box2D.Collision.b2Simplex;
   var b2SimplexCache = Box2D.Collision.b2SimplexCache;
   var b2SimplexVertex = Box2D.Collision.b2SimplexVertex;
   var b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact;
   var b2TOIInput = Box2D.Collision.b2TOIInput;
   var b2WorldManifold = Box2D.Collision.b2WorldManifold;
   var ClipVertex = Box2D.Collision.ClipVertex;
   var Features = Box2D.Collision.Features;
   var IBroadPhase = Box2D.Collision.IBroadPhase;
   var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
   var b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
   var b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape;
   var b2MassData = Box2D.Collision.Shapes.b2MassData;
   var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
   var b2Shape = Box2D.Collision.Shapes.b2Shape;
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   var b2CircleContact = Box2D.Dynamics.Contacts.b2CircleContact;
   var b2Contact = Box2D.Dynamics.Contacts.b2Contact;
   var b2ContactConstraint = Box2D.Dynamics.Contacts.b2ContactConstraint;
   var b2ContactConstraintPoint = Box2D.Dynamics.Contacts.b2ContactConstraintPoint;
   var b2ContactEdge = Box2D.Dynamics.Contacts.b2ContactEdge;
   var b2ContactFactory = Box2D.Dynamics.Contacts.b2ContactFactory;
   var b2ContactRegister = Box2D.Dynamics.Contacts.b2ContactRegister;
   var b2ContactResult = Box2D.Dynamics.Contacts.b2ContactResult;
   var b2ContactSolver = Box2D.Dynamics.Contacts.b2ContactSolver;
   var b2EdgeAndCircleContact = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact;
   var b2NullContact = Box2D.Dynamics.Contacts.b2NullContact;
   var b2PolyAndCircleContact = Box2D.Dynamics.Contacts.b2PolyAndCircleContact;
   var b2PolyAndEdgeContact = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact;
   var b2PolygonContact = Box2D.Dynamics.Contacts.b2PolygonContact;
   var b2PositionSolverManifold = Box2D.Dynamics.Contacts.b2PositionSolverManifold;
   var b2Controller = Box2D.Dynamics.Controllers.b2Controller;
   var b2ControllerEdge = Box2D.Dynamics.Controllers.b2ControllerEdge;
   var b2DistanceJoint = Box2D.Dynamics.Joints.b2DistanceJoint;
   var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
   var b2FrictionJoint = Box2D.Dynamics.Joints.b2FrictionJoint;
   var b2FrictionJointDef = Box2D.Dynamics.Joints.b2FrictionJointDef;
   var b2GearJoint = Box2D.Dynamics.Joints.b2GearJoint;
   var b2GearJointDef = Box2D.Dynamics.Joints.b2GearJointDef;
   var b2Jacobian = Box2D.Dynamics.Joints.b2Jacobian;
   var b2Joint = Box2D.Dynamics.Joints.b2Joint;
   var b2JointDef = Box2D.Dynamics.Joints.b2JointDef;
   var b2JointEdge = Box2D.Dynamics.Joints.b2JointEdge;
   var b2LineJoint = Box2D.Dynamics.Joints.b2LineJoint;
   var b2LineJointDef = Box2D.Dynamics.Joints.b2LineJointDef;
   var b2MouseJoint = Box2D.Dynamics.Joints.b2MouseJoint;
   var b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
   var b2PrismaticJoint = Box2D.Dynamics.Joints.b2PrismaticJoint;
   var b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef;
   var b2PulleyJoint = Box2D.Dynamics.Joints.b2PulleyJoint;
   var b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef;
   var b2RevoluteJoint = Box2D.Dynamics.Joints.b2RevoluteJoint;
   var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
   var b2WeldJoint = Box2D.Dynamics.Joints.b2WeldJoint;
   var b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef;
   var b2internal = Box2D.Common.b2internal;
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   b2Body.b2Body = function () {
      this.m_xf = new b2Transform();
      this.m_sweep = new b2Sweep();
      this.m_linearVelocity = new b2Vec2();
      this.m_force = new b2Vec2();
   };
   b2Body.prototype.connectEdges = function (s1, s2, angle1) {
      if (angle1 === undefined) angle1 = 0;
      var angle2 = Math.atan2(s2.GetDirectionVector().y, s2.GetDirectionVector().x);
      var coreOffset = Math.tan((angle2 - angle1) * 0.5);
      var core = b2Math.MulFV(coreOffset, s2.GetDirectionVector());
      core = b2Math.SubtractVV(core, s2.GetNormalVector());
      core = b2Math.MulFV(b2Settings.b2_toiSlop, core);
      core = b2Math.AddVV(core, s2.GetVertex1());
      var cornerDir = b2Math.AddVV(s1.GetDirectionVector(), s2.GetDirectionVector());
      cornerDir.Normalize();
      var convex = b2Math.Dot(s1.GetDirectionVector(), s2.GetNormalVector()) > 0.0;
      s1.SetNextEdge(s2, core, cornerDir, convex);
      s2.SetPrevEdge(s1, core, cornerDir, convex);
      return angle2;
   }
   b2Body.prototype.CreateFixture = function (def) {
      if (this.m_world.IsLocked() == true) {
         return null;
      }
      var fixture = new b2Fixture();
      fixture.Create(this, this.m_xf, def);
      if (this.m_flags & b2Body.e_activeFlag) {
         var broadPhase = this.m_world.m_contactManager.m_broadPhase;
         fixture.CreateProxy(broadPhase, this.m_xf);
      }
      fixture.m_next = this.m_fixtureList;
      this.m_fixtureList = fixture;
      ++this.m_fixtureCount;
      fixture.m_body = this;
      if (fixture.m_density > 0.0) {
         this.ResetMassData();
      }
      this.m_world.m_flags |= b2World.e_newFixture;
      return fixture;
   }
   b2Body.prototype.CreateFixture2 = function (shape, density) {
      if (density === undefined) density = 0.0;
      var def = new b2FixtureDef();
      def.shape = shape;
      def.density = density;
      return this.CreateFixture(def);
   }
   b2Body.prototype.DestroyFixture = function (fixture) {
      if (this.m_world.IsLocked() == true) {
         return;
      }
      var node = this.m_fixtureList;
      var ppF = null;
      var found = false;
      while (node != null) {
         if (node == fixture) {
            if (ppF) ppF.m_next = fixture.m_next;
            else this.m_fixtureList = fixture.m_next;
            found = true;
            break;
         }
         ppF = node;
         node = node.m_next;
      }
      var edge = this.m_contactList;
      while (edge) {
         var c = edge.contact;
         edge = edge.next;
         var fixtureA = c.GetFixtureA();
         var fixtureB = c.GetFixtureB();
         if (fixture == fixtureA || fixture == fixtureB) {
            this.m_world.m_contactManager.Destroy(c);
         }
      }
      if (this.m_flags & b2Body.e_activeFlag) {
         var broadPhase = this.m_world.m_contactManager.m_broadPhase;
         fixture.DestroyProxy(broadPhase);
      }
      else {}
      fixture.Destroy();
      fixture.m_body = null;
      fixture.m_next = null;
      --this.m_fixtureCount;
      this.ResetMassData();
   }
   b2Body.prototype.SetPositionAndAngle = function (position, angle) {
      if (angle === undefined) angle = 0;
      var f;
      if (this.m_world.IsLocked() == true) {
         return;
      }
      this.m_xf.R.Set(angle);
      this.m_xf.position.SetV(position);
      var tMat = this.m_xf.R;
      var tVec = this.m_sweep.localCenter;
      this.m_sweep.c.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      this.m_sweep.c.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      this.m_sweep.c.x += this.m_xf.position.x;
      this.m_sweep.c.y += this.m_xf.position.y;
      this.m_sweep.c0.SetV(this.m_sweep.c);
      this.m_sweep.a0 = this.m_sweep.a = angle;
      var broadPhase = this.m_world.m_contactManager.m_broadPhase;
      for (f = this.m_fixtureList;
      f; f = f.m_next) {
         f.Synchronize(broadPhase, this.m_xf, this.m_xf);
      }
      this.m_world.m_contactManager.FindNewContacts();
   }
   b2Body.prototype.SetTransform = function (xf) {
      this.SetPositionAndAngle(xf.position, xf.GetAngle());
   }
   b2Body.prototype.GetTransform = function () {
      return this.m_xf;
   }
   b2Body.prototype.GetPosition = function () {
      return this.m_xf.position;
   }
   b2Body.prototype.SetPosition = function (position) {
      this.SetPositionAndAngle(position, this.GetAngle());
   }
   b2Body.prototype.GetAngle = function () {
      return this.m_sweep.a;
   }
   b2Body.prototype.SetAngle = function (angle) {
      if (angle === undefined) angle = 0;
      this.SetPositionAndAngle(this.GetPosition(), angle);
   }
   b2Body.prototype.GetWorldCenter = function () {
      return this.m_sweep.c;
   }
   b2Body.prototype.GetLocalCenter = function () {
      return this.m_sweep.localCenter;
   }
   b2Body.prototype.SetLinearVelocity = function (v) {
      if (this.m_type == b2Body.b2_staticBody) {
         return;
      }
      this.m_linearVelocity.SetV(v);
   }
   b2Body.prototype.GetLinearVelocity = function () {
      return this.m_linearVelocity;
   }
   b2Body.prototype.SetAngularVelocity = function (omega) {
      if (omega === undefined) omega = 0;
      if (this.m_type == b2Body.b2_staticBody) {
         return;
      }
      this.m_angularVelocity = omega;
   }
   b2Body.prototype.GetAngularVelocity = function () {
      return this.m_angularVelocity;
   }
   b2Body.prototype.GetDefinition = function () {
      var bd = new b2BodyDef();
      bd.type = this.GetType();
      bd.allowSleep = (this.m_flags & b2Body.e_allowSleepFlag) == b2Body.e_allowSleepFlag;
      bd.angle = this.GetAngle();
      bd.angularDamping = this.m_angularDamping;
      bd.angularVelocity = this.m_angularVelocity;
      bd.fixedRotation = (this.m_flags & b2Body.e_fixedRotationFlag) == b2Body.e_fixedRotationFlag;
      bd.bullet = (this.m_flags & b2Body.e_bulletFlag) == b2Body.e_bulletFlag;
      bd.awake = (this.m_flags & b2Body.e_awakeFlag) == b2Body.e_awakeFlag;
      bd.linearDamping = this.m_linearDamping;
      bd.linearVelocity.SetV(this.GetLinearVelocity());
      bd.position = this.GetPosition();
      bd.userData = this.GetUserData();
      return bd;
   }
   b2Body.prototype.ApplyForce = function (force, point) {
      if (this.m_type != b2Body.b2_dynamicBody) {
         return;
      }
      if (this.IsAwake() == false) {
         this.SetAwake(true);
      }
      this.m_force.x += force.x;
      this.m_force.y += force.y;
      this.m_torque += ((point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x);
   }
   b2Body.prototype.ApplyTorque = function (torque) {
      if (torque === undefined) torque = 0;
      if (this.m_type != b2Body.b2_dynamicBody) {
         return;
      }
      if (this.IsAwake() == false) {
         this.SetAwake(true);
      }
      this.m_torque += torque;
   }
   b2Body.prototype.ApplyImpulse = function (impulse, point) {
      if (this.m_type != b2Body.b2_dynamicBody) {
         return;
      }
      if (this.IsAwake() == false) {
         this.SetAwake(true);
      }
      this.m_linearVelocity.x += this.m_invMass * impulse.x;
      this.m_linearVelocity.y += this.m_invMass * impulse.y;
      this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
   }
   b2Body.prototype.Split = function (callback) {
      var linearVelocity = this.GetLinearVelocity().Copy();
      var angularVelocity = this.GetAngularVelocity();
      var center = this.GetWorldCenter();
      var body1 = this;
      var body2 = this.m_world.CreateBody(this.GetDefinition());
      var prev;
      for (var f = body1.m_fixtureList; f;) {
         if (callback(f)) {
            var next = f.m_next;
            if (prev) {
               prev.m_next = next;
            }
            else {
               body1.m_fixtureList = next;
            }
            body1.m_fixtureCount--;
            f.m_next = body2.m_fixtureList;
            body2.m_fixtureList = f;
            body2.m_fixtureCount++;
            f.m_body = body2;
            f = next;
         }
         else {
            prev = f;
            f = f.m_next;
         }
      }
      body1.ResetMassData();
      body2.ResetMassData();
      var center1 = body1.GetWorldCenter();
      var center2 = body2.GetWorldCenter();
      var velocity1 = b2Math.AddVV(linearVelocity, b2Math.CrossFV(angularVelocity, b2Math.SubtractVV(center1, center)));
      var velocity2 = b2Math.AddVV(linearVelocity, b2Math.CrossFV(angularVelocity, b2Math.SubtractVV(center2, center)));
      body1.SetLinearVelocity(velocity1);
      body2.SetLinearVelocity(velocity2);
      body1.SetAngularVelocity(angularVelocity);
      body2.SetAngularVelocity(angularVelocity);
      body1.SynchronizeFixtures();
      body2.SynchronizeFixtures();
      return body2;
   }
   b2Body.prototype.Merge = function (other) {
      var f;
      for (f = other.m_fixtureList;
      f;) {
         var next = f.m_next;
         other.m_fixtureCount--;
         f.m_next = this.m_fixtureList;
         this.m_fixtureList = f;
         this.m_fixtureCount++;
         f.m_body = body2;
         f = next;
      }
      body1.m_fixtureCount = 0;
      var body1 = this;
      var body2 = other;
      var center1 = body1.GetWorldCenter();
      var center2 = body2.GetWorldCenter();
      var velocity1 = body1.GetLinearVelocity().Copy();
      var velocity2 = body2.GetLinearVelocity().Copy();
      var angular1 = body1.GetAngularVelocity();
      var angular = body2.GetAngularVelocity();
      body1.ResetMassData();
      this.SynchronizeFixtures();
   }
   b2Body.prototype.GetMass = function () {
      return this.m_mass;
   }
   b2Body.prototype.GetInertia = function () {
      return this.m_I;
   }
   b2Body.prototype.GetMassData = function (data) {
      data.mass = this.m_mass;
      data.I = this.m_I;
      data.center.SetV(this.m_sweep.localCenter);
   }
   b2Body.prototype.SetMassData = function (massData) {
      b2Settings.b2Assert(this.m_world.IsLocked() == false);
      if (this.m_world.IsLocked() == true) {
         return;
      }
      if (this.m_type != b2Body.b2_dynamicBody) {
         return;
      }
      this.m_invMass = 0.0;
      this.m_I = 0.0;
      this.m_invI = 0.0;
      this.m_mass = massData.mass;
      if (this.m_mass <= 0.0) {
         this.m_mass = 1.0;
      }
      this.m_invMass = 1.0 / this.m_mass;
      if (massData.I > 0.0 && (this.m_flags & b2Body.e_fixedRotationFlag) == 0) {
         this.m_I = massData.I - this.m_mass * (massData.center.x * massData.center.x + massData.center.y * massData.center.y);
         this.m_invI = 1.0 / this.m_I;
      }
      var oldCenter = this.m_sweep.c.Copy();
      this.m_sweep.localCenter.SetV(massData.center);
      this.m_sweep.c0.SetV(b2Math.MulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_linearVelocity.x += this.m_angularVelocity * (-(this.m_sweep.c.y - oldCenter.y));
      this.m_linearVelocity.y += this.m_angularVelocity * (+(this.m_sweep.c.x - oldCenter.x));
   }
   b2Body.prototype.ResetMassData = function () {
      this.m_mass = 0.0;
      this.m_invMass = 0.0;
      this.m_I = 0.0;
      this.m_invI = 0.0;
      this.m_sweep.localCenter.SetZero();
      if (this.m_type == b2Body.b2_staticBody || this.m_type == b2Body.b2_kinematicBody) {
         return;
      }
      var center = b2Vec2.Make(0, 0);
      for (var f = this.m_fixtureList; f; f = f.m_next) {
         if (f.m_density == 0.0) {
            continue;
         }
         var massData = f.GetMassData();
         this.m_mass += massData.mass;
         center.x += massData.center.x * massData.mass;
         center.y += massData.center.y * massData.mass;
         this.m_I += massData.I;
      }
      if (this.m_mass > 0.0) {
         this.m_invMass = 1.0 / this.m_mass;
         center.x *= this.m_invMass;
         center.y *= this.m_invMass;
      }
      else {
         this.m_mass = 1.0;
         this.m_invMass = 1.0;
      }
      if (this.m_I > 0.0 && (this.m_flags & b2Body.e_fixedRotationFlag) == 0) {
         this.m_I -= this.m_mass * (center.x * center.x + center.y * center.y);
         this.m_I *= this.m_inertiaScale;
         b2Settings.b2Assert(this.m_I > 0);
         this.m_invI = 1.0 / this.m_I;
      }
      else {
         this.m_I = 0.0;
         this.m_invI = 0.0;
      }
      var oldCenter = this.m_sweep.c.Copy();
      this.m_sweep.localCenter.SetV(center);
      this.m_sweep.c0.SetV(b2Math.MulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_linearVelocity.x += this.m_angularVelocity * (-(this.m_sweep.c.y - oldCenter.y));
      this.m_linearVelocity.y += this.m_angularVelocity * (+(this.m_sweep.c.x - oldCenter.x));
   }
   b2Body.prototype.GetWorldPoint = function (localPoint) {
      var A = this.m_xf.R;
      var u = new b2Vec2(A.col1.x * localPoint.x + A.col2.x * localPoint.y, A.col1.y * localPoint.x + A.col2.y * localPoint.y);
      u.x += this.m_xf.position.x;
      u.y += this.m_xf.position.y;
      return u;
   }
   b2Body.prototype.GetWorldVector = function (localVector) {
      return b2Math.MulMV(this.m_xf.R, localVector);
   }
   b2Body.prototype.GetLocalPoint = function (worldPoint) {
      return b2Math.MulXT(this.m_xf, worldPoint);
   }
   b2Body.prototype.GetLocalVector = function (worldVector) {
      return b2Math.MulTMV(this.m_xf.R, worldVector);
   }
   b2Body.prototype.GetLinearVelocityFromWorldPoint = function (worldPoint) {
      return new b2Vec2(this.m_linearVelocity.x - this.m_angularVelocity * (worldPoint.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (worldPoint.x - this.m_sweep.c.x));
   }
   b2Body.prototype.GetLinearVelocityFromLocalPoint = function (localPoint) {
      var A = this.m_xf.R;
      var worldPoint = new b2Vec2(A.col1.x * localPoint.x + A.col2.x * localPoint.y, A.col1.y * localPoint.x + A.col2.y * localPoint.y);
      worldPoint.x += this.m_xf.position.x;
      worldPoint.y += this.m_xf.position.y;
      return new b2Vec2(this.m_linearVelocity.x - this.m_angularVelocity * (worldPoint.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (worldPoint.x - this.m_sweep.c.x));
   }
   b2Body.prototype.GetLinearDamping = function () {
      return this.m_linearDamping;
   }
   b2Body.prototype.SetLinearDamping = function (linearDamping) {
      if (linearDamping === undefined) linearDamping = 0;
      this.m_linearDamping = linearDamping;
   }
   b2Body.prototype.GetAngularDamping = function () {
      return this.m_angularDamping;
   }
   b2Body.prototype.SetAngularDamping = function (angularDamping) {
      if (angularDamping === undefined) angularDamping = 0;
      this.m_angularDamping = angularDamping;
   }
   b2Body.prototype.SetType = function (type) {
      if (type === undefined) type = 0;
      if (this.m_type == type) {
         return;
      }
      this.m_type = type;
      this.ResetMassData();
      if (this.m_type == b2Body.b2_staticBody) {
         this.m_linearVelocity.SetZero();
         this.m_angularVelocity = 0.0;
      }
      this.SetAwake(true);
      this.m_force.SetZero();
      this.m_torque = 0.0;
      for (var ce = this.m_contactList; ce; ce = ce.next) {
         ce.contact.FlagForFiltering();
      }
   }
   b2Body.prototype.GetType = function () {
      return this.m_type;
   }
   b2Body.prototype.SetBullet = function (flag) {
      if (flag) {
         this.m_flags |= b2Body.e_bulletFlag;
      }
      else {
         this.m_flags &= ~b2Body.e_bulletFlag;
      }
   }
   b2Body.prototype.IsBullet = function () {
      return (this.m_flags & b2Body.e_bulletFlag) == b2Body.e_bulletFlag;
   }
   b2Body.prototype.SetSleepingAllowed = function (flag) {
      if (flag) {
         this.m_flags |= b2Body.e_allowSleepFlag;
      }
      else {
         this.m_flags &= ~b2Body.e_allowSleepFlag;
         this.SetAwake(true);
      }
   }
   b2Body.prototype.SetAwake = function (flag) {
      if (flag) {
         this.m_flags |= b2Body.e_awakeFlag;
         this.m_sleepTime = 0.0;
      }
      else {
         this.m_flags &= ~b2Body.e_awakeFlag;
         this.m_sleepTime = 0.0;
         this.m_linearVelocity.SetZero();
         this.m_angularVelocity = 0.0;
         this.m_force.SetZero();
         this.m_torque = 0.0;
      }
   }
   b2Body.prototype.IsAwake = function () {
      return (this.m_flags & b2Body.e_awakeFlag) == b2Body.e_awakeFlag;
   }
   b2Body.prototype.SetFixedRotation = function (fixed) {
      if (fixed) {
         this.m_flags |= b2Body.e_fixedRotationFlag;
      }
      else {
         this.m_flags &= ~b2Body.e_fixedRotationFlag;
      }
      this.ResetMassData();
   }
   b2Body.prototype.IsFixedRotation = function () {
      return (this.m_flags & b2Body.e_fixedRotationFlag) == b2Body.e_fixedRotationFlag;
   }
   b2Body.prototype.SetActive = function (flag) {
      if (flag == this.IsActive()) {
         return;
      }
      var broadPhase;
      var f;
      if (flag) {
         this.m_flags |= b2Body.e_activeFlag;
         broadPhase = this.m_world.m_contactManager.m_broadPhase;
         for (f = this.m_fixtureList;
         f; f = f.m_next) {
            f.CreateProxy(broadPhase, this.m_xf);
         }
      }
      else {
         this.m_flags &= ~b2Body.e_activeFlag;
         broadPhase = this.m_world.m_contactManager.m_broadPhase;
         for (f = this.m_fixtureList;
         f; f = f.m_next) {
            f.DestroyProxy(broadPhase);
         }
         var ce = this.m_contactList;
         while (ce) {
            var ce0 = ce;
            ce = ce.next;
            this.m_world.m_contactManager.Destroy(ce0.contact);
         }
         this.m_contactList = null;
      }
   }
   b2Body.prototype.IsActive = function () {
      return (this.m_flags & b2Body.e_activeFlag) == b2Body.e_activeFlag;
   }
   b2Body.prototype.IsSleepingAllowed = function () {
      return (this.m_flags & b2Body.e_allowSleepFlag) == b2Body.e_allowSleepFlag;
   }
   b2Body.prototype.GetFixtureList = function () {
      return this.m_fixtureList;
   }
   b2Body.prototype.GetJointList = function () {
      return this.m_jointList;
   }
   b2Body.prototype.GetControllerList = function () {
      return this.m_controllerList;
   }
   b2Body.prototype.GetContactList = function () {
      return this.m_contactList;
   }
   b2Body.prototype.GetNext = function () {
      return this.m_next;
   }
   b2Body.prototype.GetUserData = function () {
      return this.m_userData;
   }
   b2Body.prototype.SetUserData = function (data) {
      this.m_userData = data;
   }
   b2Body.prototype.GetWorld = function () {
      return this.m_world;
   }
   b2Body.prototype.b2Body = function (bd, world) {
      this.m_flags = 0;
      if (bd.bullet) {
         this.m_flags |= b2Body.e_bulletFlag;
      }
      if (bd.fixedRotation) {
         this.m_flags |= b2Body.e_fixedRotationFlag;
      }
      if (bd.allowSleep) {
         this.m_flags |= b2Body.e_allowSleepFlag;
      }
      if (bd.awake) {
         this.m_flags |= b2Body.e_awakeFlag;
      }
      if (bd.active) {
         this.m_flags |= b2Body.e_activeFlag;
      }
      this.m_world = world;
      this.m_xf.position.SetV(bd.position);
      this.m_xf.R.Set(bd.angle);
      this.m_sweep.localCenter.SetZero();
      this.m_sweep.t0 = 1.0;
      this.m_sweep.a0 = this.m_sweep.a = bd.angle;
      var tMat = this.m_xf.R;
      var tVec = this.m_sweep.localCenter;
      this.m_sweep.c.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      this.m_sweep.c.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      this.m_sweep.c.x += this.m_xf.position.x;
      this.m_sweep.c.y += this.m_xf.position.y;
      this.m_sweep.c0.SetV(this.m_sweep.c);
      this.m_jointList = null;
      this.m_controllerList = null;
      this.m_contactList = null;
      this.m_controllerCount = 0;
      this.m_prev = null;
      this.m_next = null;
      this.m_linearVelocity.SetV(bd.linearVelocity);
      this.m_angularVelocity = bd.angularVelocity;
      this.m_linearDamping = bd.linearDamping;
      this.m_angularDamping = bd.angularDamping;
      this.m_force.Set(0.0, 0.0);
      this.m_torque = 0.0;
      this.m_sleepTime = 0.0;
      this.m_type = bd.type;
      if (this.m_type == b2Body.b2_dynamicBody) {
         this.m_mass = 1.0;
         this.m_invMass = 1.0;
      }
      else {
         this.m_mass = 0.0;
         this.m_invMass = 0.0;
      }
      this.m_I = 0.0;
      this.m_invI = 0.0;
      this.m_inertiaScale = bd.inertiaScale;
      this.m_userData = bd.userData;
      this.m_fixtureList = null;
      this.m_fixtureCount = 0;
   }
   b2Body.prototype.SynchronizeFixtures = function () {
      var xf1 = b2Body.s_xf1;
      xf1.R.Set(this.m_sweep.a0);
      var tMat = xf1.R;
      var tVec = this.m_sweep.localCenter;
      xf1.position.x = this.m_sweep.c0.x - (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      xf1.position.y = this.m_sweep.c0.y - (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      var f;
      var broadPhase = this.m_world.m_contactManager.m_broadPhase;
      for (f = this.m_fixtureList;
      f; f = f.m_next) {
         f.Synchronize(broadPhase, xf1, this.m_xf);
      }
   }
   b2Body.prototype.SynchronizeTransform = function () {
      this.m_xf.R.Set(this.m_sweep.a);
      var tMat = this.m_xf.R;
      var tVec = this.m_sweep.localCenter;
      this.m_xf.position.x = this.m_sweep.c.x - (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
      this.m_xf.position.y = this.m_sweep.c.y - (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
   }
   b2Body.prototype.ShouldCollide = function (other) {
      if (this.m_type != b2Body.b2_dynamicBody && other.m_type != b2Body.b2_dynamicBody) {
         return false;
      }
      for (var jn = this.m_jointList; jn; jn = jn.next) {
         if (jn.other == other) if (jn.joint.m_collideConnected == false) {
            return false;
         }
      }
      return true;
   }
   b2Body.prototype.Advance = function (t) {
      if (t === undefined) t = 0;
      this.m_sweep.Advance(t);
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_sweep.a = this.m_sweep.a0;
      this.SynchronizeTransform();
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2Body.s_xf1 = new b2Transform();
      Box2D.Dynamics.b2Body.prototype.s_xf1 = Box2D.Dynamics.b2Body.s_xf1;
      Box2D.Dynamics.b2Body.e_islandFlag = 0x0001;
      Box2D.Dynamics.b2Body.prototype.e_islandFlag = Box2D.Dynamics.b2Body.e_islandFlag;
      Box2D.Dynamics.b2Body.e_awakeFlag = 0x0002;
      Box2D.Dynamics.b2Body.prototype.e_awakeFlag = Box2D.Dynamics.b2Body.e_awakeFlag;
      Box2D.Dynamics.b2Body.e_allowSleepFlag = 0x0004;
      Box2D.Dynamics.b2Body.prototype.e_allowSleepFlag = Box2D.Dynamics.b2Body.e_allowSleepFlag;
      Box2D.Dynamics.b2Body.e_bulletFlag = 0x0008;
      Box2D.Dynamics.b2Body.prototype.e_bulletFlag = Box2D.Dynamics.b2Body.e_bulletFlag;
      Box2D.Dynamics.b2Body.e_fixedRotationFlag = 0x0010;
      Box2D.Dynamics.b2Body.prototype.e_fixedRotationFlag = Box2D.Dynamics.b2Body.e_fixedRotationFlag;
      Box2D.Dynamics.b2Body.e_activeFlag = 0x0020;
      Box2D.Dynamics.b2Body.prototype.e_activeFlag = Box2D.Dynamics.b2Body.e_activeFlag;
      Box2D.Dynamics.b2Body.b2_staticBody = 0;
      Box2D.Dynamics.b2Body.prototype.b2_staticBody = Box2D.Dynamics.b2Body.b2_staticBody;
      Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
      Box2D.Dynamics.b2Body.prototype.b2_kinematicBody = Box2D.Dynamics.b2Body.b2_kinematicBody;
      Box2D.Dynamics.b2Body.b2_dynamicBody = 2;
      Box2D.Dynamics.b2Body.prototype.b2_dynamicBody = Box2D.Dynamics.b2Body.b2_dynamicBody;
   });
   b2BodyDef.b2BodyDef = function () {
      this.position = new b2Vec2();
      this.linearVelocity = new b2Vec2();
   };
   b2BodyDef.prototype.b2BodyDef = function () {
      this.userData = null;
      this.position.Set(0.0, 0.0);
      this.angle = 0.0;
      this.linearVelocity.Set(0, 0);
      this.angularVelocity = 0.0;
      this.linearDamping = 0.0;
      this.angularDamping = 0.0;
      this.allowSleep = true;
      this.awake = true;
      this.fixedRotation = false;
      this.bullet = false;
      this.type = b2Body.b2_staticBody;
      this.active = true;
      this.inertiaScale = 1.0;
   }
   b2ContactFilter.b2ContactFilter = function () {};
   b2ContactFilter.prototype.ShouldCollide = function (fixtureA, fixtureB) {
      var filter1 = fixtureA.GetFilterData();
      var filter2 = fixtureB.GetFilterData();
      if (filter1.groupIndex == filter2.groupIndex && filter1.groupIndex != 0) {
         return filter1.groupIndex > 0;
      }
      var collide = (filter1.maskBits & filter2.categoryBits) != 0 && (filter1.categoryBits & filter2.maskBits) != 0;
      return collide;
   }
   b2ContactFilter.prototype.RayCollide = function (userData, fixture) {
      if (!userData) return true;
      return this.ShouldCollide((userData instanceof b2Fixture ? userData : null), fixture);
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new b2ContactFilter();
      Box2D.Dynamics.b2ContactFilter.prototype.b2_defaultFilter = Box2D.Dynamics.b2ContactFilter.b2_defaultFilter;
   });
   b2ContactImpulse.b2ContactImpulse = function () {
      this.normalImpulses = new Vector_a2j_Number(b2Settings.b2_maxManifoldPoints);
      this.tangentImpulses = new Vector_a2j_Number(b2Settings.b2_maxManifoldPoints);
   };
   b2ContactListener.b2ContactListener = function () {};
   b2ContactListener.prototype.BeginContact = function (contact) {}
   b2ContactListener.prototype.EndContact = function (contact) {}
   b2ContactListener.prototype.PreSolve = function (contact, oldManifold) {}
   b2ContactListener.prototype.PostSolve = function (contact, impulse) {}
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2ContactListener.b2_defaultListener = new b2ContactListener();
      Box2D.Dynamics.b2ContactListener.prototype.b2_defaultListener = Box2D.Dynamics.b2ContactListener.b2_defaultListener;
   });
   b2ContactManager.b2ContactManager = function () {};
   b2ContactManager.prototype.b2ContactManager = function () {
      this.m_world = null;
      this.m_contactCount = 0;
      this.m_contactFilter = b2ContactFilter.b2_defaultFilter;
      this.m_contactListener = b2ContactListener.b2_defaultListener;
      this.m_contactFactory = new b2ContactFactory(this.m_allocator);
      this.m_broadPhase = new b2DynamicTreeBroadPhase();
   }
   b2ContactManager.prototype.AddPair = function (proxyUserDataA, proxyUserDataB) {
      var fixtureA = (proxyUserDataA instanceof b2Fixture ? proxyUserDataA : null);
      var fixtureB = (proxyUserDataB instanceof b2Fixture ? proxyUserDataB : null);
      var bodyA = fixtureA.GetBody();
      var bodyB = fixtureB.GetBody();
      if (bodyA == bodyB) return;
      var edge = bodyB.GetContactList();
      while (edge) {
         if (edge.other == bodyA) {
            var fA = edge.contact.GetFixtureA();
            var fB = edge.contact.GetFixtureB();
            if (fA == fixtureA && fB == fixtureB) return;
            if (fA == fixtureB && fB == fixtureA) return;
         }
         edge = edge.next;
      }
      if (bodyB.ShouldCollide(bodyA) == false) {
         return;
      }
      if (this.m_contactFilter.ShouldCollide(fixtureA, fixtureB) == false) {
         return;
      }
      var c = this.m_contactFactory.Create(fixtureA, fixtureB);
      fixtureA = c.GetFixtureA();
      fixtureB = c.GetFixtureB();
      bodyA = fixtureA.m_body;
      bodyB = fixtureB.m_body;
      c.m_prev = null;
      c.m_next = this.m_world.m_contactList;
      if (this.m_world.m_contactList != null) {
         this.m_world.m_contactList.m_prev = c;
      }
      this.m_world.m_contactList = c;
      c.m_nodeA.contact = c;
      c.m_nodeA.other = bodyB;
      c.m_nodeA.prev = null;
      c.m_nodeA.next = bodyA.m_contactList;
      if (bodyA.m_contactList != null) {
         bodyA.m_contactList.prev = c.m_nodeA;
      }
      bodyA.m_contactList = c.m_nodeA;
      c.m_nodeB.contact = c;
      c.m_nodeB.other = bodyA;
      c.m_nodeB.prev = null;
      c.m_nodeB.next = bodyB.m_contactList;
      if (bodyB.m_contactList != null) {
         bodyB.m_contactList.prev = c.m_nodeB;
      }
      bodyB.m_contactList = c.m_nodeB;
      ++this.m_world.m_contactCount;
      return;
   }
   b2ContactManager.prototype.FindNewContacts = function () {
      this.m_broadPhase.UpdatePairs(a2j.generateCallback(this, this.AddPair));
   }
   b2ContactManager.prototype.Destroy = function (c) {
      var fixtureA = c.GetFixtureA();
      var fixtureB = c.GetFixtureB();
      var bodyA = fixtureA.GetBody();
      var bodyB = fixtureB.GetBody();
      if (c.IsTouching()) {
         this.m_contactListener.EndContact(c);
      }
      if (c.m_prev) {
         c.m_prev.m_next = c.m_next;
      }
      if (c.m_next) {
         c.m_next.m_prev = c.m_prev;
      }
      if (c == this.m_world.m_contactList) {
         this.m_world.m_contactList = c.m_next;
      }
      if (c.m_nodeA.prev) {
         c.m_nodeA.prev.next = c.m_nodeA.next;
      }
      if (c.m_nodeA.next) {
         c.m_nodeA.next.prev = c.m_nodeA.prev;
      }
      if (c.m_nodeA == bodyA.m_contactList) {
         bodyA.m_contactList = c.m_nodeA.next;
      }
      if (c.m_nodeB.prev) {
         c.m_nodeB.prev.next = c.m_nodeB.next;
      }
      if (c.m_nodeB.next) {
         c.m_nodeB.next.prev = c.m_nodeB.prev;
      }
      if (c.m_nodeB == bodyB.m_contactList) {
         bodyB.m_contactList = c.m_nodeB.next;
      }
      this.m_contactFactory.Destroy(c);
      --this.m_contactCount;
   }
   b2ContactManager.prototype.Collide = function () {
      var c = this.m_world.m_contactList;
      while (c) {
         var fixtureA = c.GetFixtureA();
         var fixtureB = c.GetFixtureB();
         var bodyA = fixtureA.GetBody();
         var bodyB = fixtureB.GetBody();
         if (bodyA.IsAwake() == false && bodyB.IsAwake() == false) {
            c = c.GetNext();
            continue;
         }
         if (c.m_flags & b2Contact.e_filterFlag) {
            if (bodyB.ShouldCollide(bodyA) == false) {
               var cNuke = c;
               c = cNuke.GetNext();
               this.Destroy(cNuke);
               continue;
            }
            if (this.m_contactFilter.ShouldCollide(fixtureA, fixtureB) == false) {
               cNuke = c;
               c = cNuke.GetNext();
               this.Destroy(cNuke);
               continue;
            }
            c.m_flags &= ~b2Contact.e_filterFlag;
         }
         var proxyA = fixtureA.m_proxy;
         var proxyB = fixtureB.m_proxy;
         var overlap = this.m_broadPhase.TestOverlap(proxyA, proxyB);
         if (overlap == false) {
            cNuke = c;
            c = cNuke.GetNext();
            this.Destroy(cNuke);
            continue;
         }
         c.Update(this.m_contactListener);
         c = c.GetNext();
      }
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2ContactManager.s_evalCP = new b2ContactPoint();
      Box2D.Dynamics.b2ContactManager.prototype.s_evalCP = Box2D.Dynamics.b2ContactManager.s_evalCP;
   });
   b2DebugDraw.b2DebugDraw = function () {};
   b2DebugDraw.prototype.b2DebugDraw = function () {
      m_drawFlags = 0;
   }
   b2DebugDraw.prototype.SetFlags = function (flags) {
      if (flags === undefined) flags = 0;
   }
   b2DebugDraw.prototype.GetFlags = function () {}
   b2DebugDraw.prototype.AppendFlags = function (flags) {
      if (flags === undefined) flags = 0;
   }
   b2DebugDraw.prototype.ClearFlags = function (flags) {
      if (flags === undefined) flags = 0;
   }
   b2DebugDraw.prototype.SetSprite = function (sprite) {}
   b2DebugDraw.prototype.GetSprite = function () {}
   b2DebugDraw.prototype.SetDrawScale = function (drawScale) {
      if (drawScale === undefined) drawScale = 0;
   }
   b2DebugDraw.prototype.GetDrawScale = function () {}
   b2DebugDraw.prototype.SetLineThickness = function (lineThickness) {
      if (lineThickness === undefined) lineThickness = 0;
   }
   b2DebugDraw.prototype.GetLineThickness = function () {}
   b2DebugDraw.prototype.SetAlpha = function (alpha) {
      if (alpha === undefined) alpha = 0;
   }
   b2DebugDraw.prototype.GetAlpha = function () {}
   b2DebugDraw.prototype.SetFillAlpha = function (alpha) {
      if (alpha === undefined) alpha = 0;
   }
   b2DebugDraw.prototype.GetFillAlpha = function () {}
   b2DebugDraw.prototype.SetXFormScale = function (xformScale) {
      if (xformScale === undefined) xformScale = 0;
   }
   b2DebugDraw.prototype.GetXFormScale = function () {}
   b2DebugDraw.prototype.DrawPolygon = function (vertices, vertexCount, color) {
      if (vertexCount === undefined) vertexCount = 0;
   }
   b2DebugDraw.prototype.DrawSolidPolygon = function (vertices, vertexCount, color) {
      if (vertexCount === undefined) vertexCount = 0;
   }
   b2DebugDraw.prototype.DrawCircle = function (center, radius, color) {
      if (radius === undefined) radius = 0;
   }
   b2DebugDraw.prototype.DrawSolidCircle = function (center, radius, axis, color) {
      if (radius === undefined) radius = 0;
   }
   b2DebugDraw.prototype.DrawSegment = function (p1, p2, color) {}
   b2DebugDraw.prototype.DrawTransform = function (xf) {}
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2DebugDraw.e_shapeBit = 0x0001;
      Box2D.Dynamics.b2DebugDraw.prototype.e_shapeBit = Box2D.Dynamics.b2DebugDraw.e_shapeBit;
      Box2D.Dynamics.b2DebugDraw.e_jointBit = 0x0002;
      Box2D.Dynamics.b2DebugDraw.prototype.e_jointBit = Box2D.Dynamics.b2DebugDraw.e_jointBit;
      Box2D.Dynamics.b2DebugDraw.e_aabbBit = 0x0004;
      Box2D.Dynamics.b2DebugDraw.prototype.e_aabbBit = Box2D.Dynamics.b2DebugDraw.e_aabbBit;
      Box2D.Dynamics.b2DebugDraw.e_pairBit = 0x0008;
      Box2D.Dynamics.b2DebugDraw.prototype.e_pairBit = Box2D.Dynamics.b2DebugDraw.e_pairBit;
      Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 0x0010;
      Box2D.Dynamics.b2DebugDraw.prototype.e_centerOfMassBit = Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit;
      Box2D.Dynamics.b2DebugDraw.e_controllerBit = 0x0020;
      Box2D.Dynamics.b2DebugDraw.prototype.e_controllerBit = Box2D.Dynamics.b2DebugDraw.e_controllerBit;
   });
   b2DestructionListener.b2DestructionListener = function () {};
   b2DestructionListener.prototype.SayGoodbyeJoint = function (joint) {}
   b2DestructionListener.prototype.SayGoodbyeFixture = function (fixture) {}
   b2FilterData.b2FilterData = function () {
      this.categoryBits = 0x0001;
      this.maskBits = 0xFFFF;
      this.groupIndex = 0;
   };
   b2FilterData.prototype.Copy = function () {
      var copy = new b2FilterData();
      copy.categoryBits = this.categoryBits;
      copy.maskBits = this.maskBits;
      copy.groupIndex = this.groupIndex;
      return copy;
   }
   b2Fixture.b2Fixture = function () {
      this.m_filter = new b2FilterData();
   };
   b2Fixture.prototype.GetType = function () {
      return this.m_shape.GetType();
   }
   b2Fixture.prototype.GetShape = function () {
      return this.m_shape;
   }
   b2Fixture.prototype.SetSensor = function (sensor) {
      if (this.m_isSensor == sensor) return;
      this.m_isSensor = sensor;
      if (this.m_body == null) return;
      var edge = this.m_body.GetContactList();
      while (edge) {
         var contact = edge.contact;
         var fixtureA = contact.GetFixtureA();
         var fixtureB = contact.GetFixtureB();
         if (fixtureA == this || fixtureB == this) contact.SetSensor(fixtureA.IsSensor() || fixtureB.IsSensor());
         edge = edge.next;
      }
   }
   b2Fixture.prototype.IsSensor = function () {
      return this.m_isSensor;
   }
   b2Fixture.prototype.SetFilterData = function (filter) {
      this.m_filter = filter.Copy();
      if (this.m_body) return;
      var edge = this.m_body.GetContactList();
      while (edge) {
         var contact = edge.contact;
         var fixtureA = contact.GetFixtureA();
         var fixtureB = contact.GetFixtureB();
         if (fixtureA == this || fixtureB == this) contact.FlagForFiltering();
         edge = edge.next;
      }
   }
   b2Fixture.prototype.GetFilterData = function () {
      return this.m_filter.Copy();
   }
   b2Fixture.prototype.GetBody = function () {
      return this.m_body;
   }
   b2Fixture.prototype.GetNext = function () {
      return this.m_next;
   }
   b2Fixture.prototype.GetUserData = function () {
      return this.m_userData;
   }
   b2Fixture.prototype.SetUserData = function (data) {
      this.m_userData = data;
   }
   b2Fixture.prototype.TestPoint = function (p) {
      return this.m_shape.TestPoint(this.m_body.GetTransform(), p);
   }
   b2Fixture.prototype.RayCast = function (output, input) {
      return this.m_shape.RayCast(output, input, this.m_body.GetTransform());
   }
   b2Fixture.prototype.GetMassData = function (massData) {
      if (massData === undefined) massData = null;
      if (massData == null) {
         massData = new b2MassData();
      }
      this.m_shape.ComputeMass(massData, this.m_density);
      return massData;
   }
   b2Fixture.prototype.SetDensity = function (density) {
      if (density === undefined) density = 0;
      this.m_density = density;
   }
   b2Fixture.prototype.GetDensity = function () {
      return this.m_density;
   }
   b2Fixture.prototype.GetFriction = function () {
      return this.m_friction;
   }
   b2Fixture.prototype.SetFriction = function (friction) {
      if (friction === undefined) friction = 0;
      this.m_friction = friction;
   }
   b2Fixture.prototype.GetRestitution = function () {
      return this.m_restitution;
   }
   b2Fixture.prototype.SetRestitution = function (restitution) {
      if (restitution === undefined) restitution = 0;
      this.m_restitution = restitution;
   }
   b2Fixture.prototype.GetAABB = function () {
      return this.m_aabb;
   }
   b2Fixture.prototype.b2Fixture = function () {
      this.m_aabb = new b2AABB();
      this.m_userData = null;
      this.m_body = null;
      this.m_next = null;
      this.m_shape = null;
      this.m_density = 0.0;
      this.m_friction = 0.0;
      this.m_restitution = 0.0;
   }
   b2Fixture.prototype.Create = function (body, xf, def) {
      this.m_userData = def.userData;
      this.m_friction = def.friction;
      this.m_restitution = def.restitution;
      this.m_body = body;
      this.m_next = null;
      this.m_filter = def.filter.Copy();
      this.m_isSensor = def.isSensor;
      this.m_shape = def.shape.Copy();
      this.m_density = def.density;
   }
   b2Fixture.prototype.Destroy = function () {
      this.m_shape = null;
   }
   b2Fixture.prototype.CreateProxy = function (broadPhase, xf) {
      this.m_shape.ComputeAABB(this.m_aabb, xf);
      this.m_proxy = broadPhase.CreateProxy(this.m_aabb, this);
   }
   b2Fixture.prototype.DestroyProxy = function (broadPhase) {
      if (this.m_proxy == null) {
         return;
      }
      broadPhase.DestroyProxy(this.m_proxy);
      this.m_proxy = null;
   }
   b2Fixture.prototype.Synchronize = function (broadPhase, transform1, transform2) {
      if (!this.m_proxy) return;
      var aabb1 = new b2AABB();
      var aabb2 = new b2AABB();
      this.m_shape.ComputeAABB(aabb1, transform1);
      this.m_shape.ComputeAABB(aabb2, transform2);
      this.m_aabb.Combine(aabb1, aabb2);
      var displacement = b2Math.SubtractVV(transform2.position, transform1.position);
      broadPhase.MoveProxy(this.m_proxy, this.m_aabb, displacement);
   }
   b2FixtureDef.b2FixtureDef = function () {
      this.filter = new b2FilterData();
   };
   b2FixtureDef.prototype.b2FixtureDef = function () {
      this.shape = null;
      this.userData = null;
      this.friction = 0.2;
      this.restitution = 0.0;
      this.density = 0.0;
      this.filter.categoryBits = 0x0001;
      this.filter.maskBits = 0xFFFF;
      this.filter.groupIndex = 0;
      this.isSensor = false;
   }
   b2Island.b2Island = function () {};
   b2Island.prototype.b2Island = function () {
      this.m_bodies = new Vector();
      this.m_contacts = new Vector();
      this.m_joints = new Vector();
   }
   b2Island.prototype.Initialize = function (bodyCapacity, contactCapacity, jointCapacity, allocator, listener, contactSolver) {
      if (bodyCapacity === undefined) bodyCapacity = 0;
      if (contactCapacity === undefined) contactCapacity = 0;
      if (jointCapacity === undefined) jointCapacity = 0;
      var i = 0;
      this.m_bodyCapacity = bodyCapacity;
      this.m_contactCapacity = contactCapacity;
      this.m_jointCapacity = jointCapacity;
      this.m_bodyCount = 0;
      this.m_contactCount = 0;
      this.m_jointCount = 0;
      this.m_allocator = allocator;
      this.m_listener = listener;
      this.m_contactSolver = contactSolver;
      for (i = this.m_bodies.length;
      i < bodyCapacity; i++)
      this.m_bodies[i] = null;
      for (i = this.m_contacts.length;
      i < contactCapacity; i++)
      this.m_contacts[i] = null;
      for (i = this.m_joints.length;
      i < jointCapacity; i++)
      this.m_joints[i] = null;
   }
   b2Island.prototype.Clear = function () {
      this.m_bodyCount = 0;
      this.m_contactCount = 0;
      this.m_jointCount = 0;
   }
   b2Island.prototype.Solve = function (step, gravity, allowSleep) {
      var i = 0;
      var j = 0;
      var b;
      var joint;
      for (i = 0;
      i < this.m_bodyCount; ++i) {
         b = this.m_bodies[i];
         if (b.GetType() != b2Body.b2_dynamicBody) continue;
         b.m_linearVelocity.x += step.dt * (gravity.x + b.m_invMass * b.m_force.x);
         b.m_linearVelocity.y += step.dt * (gravity.y + b.m_invMass * b.m_force.y);
         b.m_angularVelocity += step.dt * b.m_invI * b.m_torque;
         b.m_linearVelocity.Multiply(b2Math.Clamp(1.0 - step.dt * b.m_linearDamping, 0.0, 1.0));
         b.m_angularVelocity *= b2Math.Clamp(1.0 - step.dt * b.m_angularDamping, 0.0, 1.0);
      }
      this.m_contactSolver.Initialize(step, this.m_contacts, this.m_contactCount, this.m_allocator);
      var contactSolver = this.m_contactSolver;
      contactSolver.InitVelocityConstraints(step);
      for (i = 0;
      i < this.m_jointCount; ++i) {
         joint = this.m_joints[i];
         joint.InitVelocityConstraints(step);
      }
      for (i = 0;
      i < step.velocityIterations; ++i) {
         for (j = 0;
         j < this.m_jointCount; ++j) {
            joint = this.m_joints[j];
            joint.SolveVelocityConstraints(step);
         }
         contactSolver.SolveVelocityConstraints();
      }
      for (i = 0;
      i < this.m_jointCount; ++i) {
         joint = this.m_joints[i];
         joint.FinalizeVelocityConstraints();
      }
      contactSolver.FinalizeVelocityConstraints();
      for (i = 0;
      i < this.m_bodyCount; ++i) {
         b = this.m_bodies[i];
         if (b.GetType() == b2Body.b2_staticBody) continue;
         var translationX = step.dt * b.m_linearVelocity.x;
         var translationY = step.dt * b.m_linearVelocity.y;
         if ((translationX * translationX + translationY * translationY) > b2Settings.b2_maxTranslationSquared) {
            b.m_linearVelocity.Normalize();
            b.m_linearVelocity.x *= b2Settings.b2_maxTranslation * step.inv_dt;
            b.m_linearVelocity.y *= b2Settings.b2_maxTranslation * step.inv_dt;
         }
         var rotation = step.dt * b.m_angularVelocity;
         if (rotation * rotation > b2Settings.b2_maxRotationSquared) {
            if (b.m_angularVelocity < 0.0) {
               b.m_angularVelocity = (-b2Settings.b2_maxRotation * step.inv_dt);
            }
            else {
               b.m_angularVelocity = b2Settings.b2_maxRotation * step.inv_dt;
            }
         }
         b.m_sweep.c0.SetV(b.m_sweep.c);
         b.m_sweep.a0 = b.m_sweep.a;
         b.m_sweep.c.x += step.dt * b.m_linearVelocity.x;
         b.m_sweep.c.y += step.dt * b.m_linearVelocity.y;
         b.m_sweep.a += step.dt * b.m_angularVelocity;
         b.SynchronizeTransform();
      }
      for (i = 0;
      i < step.positionIterations; ++i) {
         var contactsOkay = contactSolver.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);
         var jointsOkay = true;
         for (j = 0;
         j < this.m_jointCount; ++j) {
            joint = this.m_joints[j];
            var jointOkay = joint.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);
            jointsOkay = jointsOkay && jointOkay;
         }
         if (contactsOkay && jointsOkay) {
            break;
         }
      }
      this.Report(contactSolver.m_constraints);
      if (allowSleep) {
         var minSleepTime = Number.MAX_VALUE;
         var linTolSqr = b2Settings.b2_linearSleepTolerance * b2Settings.b2_linearSleepTolerance;
         var angTolSqr = b2Settings.b2_angularSleepTolerance * b2Settings.b2_angularSleepTolerance;
         for (i = 0;
         i < this.m_bodyCount; ++i) {
            b = this.m_bodies[i];
            if (b.GetType() == b2Body.b2_staticBody) {
               continue;
            }
            if ((b.m_flags & b2Body.e_allowSleepFlag) == 0) {
               b.m_sleepTime = 0.0;
               minSleepTime = 0.0;
            }
            if ((b.m_flags & b2Body.e_allowSleepFlag) == 0 || b.m_angularVelocity * b.m_angularVelocity > angTolSqr || b2Math.Dot(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr) {
               b.m_sleepTime = 0.0;
               minSleepTime = 0.0;
            }
            else {
               b.m_sleepTime += step.dt;
               minSleepTime = b2Math.Min(minSleepTime, b.m_sleepTime);
            }
         }
         if (minSleepTime >= b2Settings.b2_timeToSleep) {
            for (i = 0;
            i < this.m_bodyCount; ++i) {
               b = this.m_bodies[i];
               b.SetAwake(false);
            }
         }
      }
   }
   b2Island.prototype.SolveTOI = function (subStep) {
      var i = 0;
      var j = 0;
      this.m_contactSolver.Initialize(subStep, this.m_contacts, this.m_contactCount, this.m_allocator);
      var contactSolver = this.m_contactSolver;
      for (i = 0;
      i < this.m_jointCount; ++i) {
         this.m_joints[i].InitVelocityConstraints(subStep);
      }
      for (i = 0;
      i < subStep.velocityIterations; ++i) {
         contactSolver.SolveVelocityConstraints();
         for (j = 0;
         j < this.m_jointCount; ++j) {
            this.m_joints[j].SolveVelocityConstraints(subStep);
         }
      }
      for (i = 0;
      i < this.m_bodyCount; ++i) {
         var b = this.m_bodies[i];
         if (b.GetType() == b2Body.b2_staticBody) continue;
         var translationX = subStep.dt * b.m_linearVelocity.x;
         var translationY = subStep.dt * b.m_linearVelocity.y;
         if ((translationX * translationX + translationY * translationY) > b2Settings.b2_maxTranslationSquared) {
            b.m_linearVelocity.Normalize();
            b.m_linearVelocity.x *= b2Settings.b2_maxTranslation * subStep.inv_dt;
            b.m_linearVelocity.y *= b2Settings.b2_maxTranslation * subStep.inv_dt;
         }
         var rotation = subStep.dt * b.m_angularVelocity;
         if (rotation * rotation > b2Settings.b2_maxRotationSquared) {
            if (b.m_angularVelocity < 0.0) {
               b.m_angularVelocity = (-b2Settings.b2_maxRotation * subStep.inv_dt);
            }
            else {
               b.m_angularVelocity = b2Settings.b2_maxRotation * subStep.inv_dt;
            }
         }
         b.m_sweep.c0.SetV(b.m_sweep.c);
         b.m_sweep.a0 = b.m_sweep.a;
         b.m_sweep.c.x += subStep.dt * b.m_linearVelocity.x;
         b.m_sweep.c.y += subStep.dt * b.m_linearVelocity.y;
         b.m_sweep.a += subStep.dt * b.m_angularVelocity;
         b.SynchronizeTransform();
      }
      var k_toiBaumgarte = 0.75;
      for (i = 0;
      i < subStep.positionIterations; ++i) {
         var contactsOkay = contactSolver.SolvePositionConstraints(k_toiBaumgarte);
         var jointsOkay = true;
         for (j = 0;
         j < this.m_jointCount; ++j) {
            var jointOkay = this.m_joints[j].SolvePositionConstraints(b2Settings.b2_contactBaumgarte);
            jointsOkay = jointsOkay && jointOkay;
         }
         if (contactsOkay && jointsOkay) {
            break;
         }
      }
      this.Report(contactSolver.m_constraints);
   }
   b2Island.prototype.Report = function (constraints) {
      if (this.m_listener == null) {
         return;
      }
      for (var i = 0; i < this.m_contactCount; ++i) {
         var c = this.m_contacts[i];
         var cc = constraints[i];
         for (var j = 0; j < cc.pointCount; ++j) {
            b2Island.s_impulse.normalImpulses[j] = cc.points[j].normalImpulse;
            b2Island.s_impulse.tangentImpulses[j] = cc.points[j].tangentImpulse;
         }
         this.m_listener.PostSolve(c, b2Island.s_impulse);
      }
   }
   b2Island.prototype.AddBody = function (body) {
      body.m_islandIndex = this.m_bodyCount;
      this.m_bodies[this.m_bodyCount++] = body;
   }
   b2Island.prototype.AddContact = function (contact) {
      this.m_contacts[this.m_contactCount++] = contact;
   }
   b2Island.prototype.AddJoint = function (joint) {
      this.m_joints[this.m_jointCount++] = joint;
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2Island.s_impulse = new b2ContactImpulse();
      Box2D.Dynamics.b2Island.prototype.s_impulse = Box2D.Dynamics.b2Island.s_impulse;
   });
   b2TimeStep.b2TimeStep = function () {};
   b2TimeStep.prototype.Set = function (step) {
      this.dt = step.dt;
      this.inv_dt = step.inv_dt;
      this.positionIterations = step.positionIterations;
      this.velocityIterations = step.velocityIterations;
      this.warmStarting = step.warmStarting;
   }
   b2World.b2World = function () {
      this.s_stack = new Vector();
      this.m_contactManager = new b2ContactManager();
      this.m_contactSolver = new b2ContactSolver();
      this.m_island = new b2Island();
   };
   b2World.prototype.b2World = function (gravity, doSleep) {
      this.m_destructionListener = null;
      this.m_debugDraw = null;
      this.m_bodyList = null;
      this.m_contactList = null;
      this.m_jointList = null;
      this.m_controllerList = null;
      this.m_bodyCount = 0;
      this.m_contactCount = 0;
      this.m_jointCount = 0;
      this.m_controllerCount = 0;
      b2World.m_warmStarting = true;
      b2World.m_continuousPhysics = true;
      this.m_allowSleep = doSleep;
      this.m_gravity = gravity;
      this.m_inv_dt0 = 0.0;
      this.m_contactManager.m_world = this;
      var bd = new b2BodyDef();
      this.m_groundBody = this.CreateBody(bd);
   }
   b2World.prototype.SetDestructionListener = function (listener) {
      this.m_destructionListener = listener;
   }
   b2World.prototype.SetContactFilter = function (filter) {
      this.m_contactManager.m_contactFilter = filter;
   }
   b2World.prototype.SetContactListener = function (listener) {
      this.m_contactManager.m_contactListener = listener;
   }
   b2World.prototype.SetDebugDraw = function (debugDraw) {
      this.m_debugDraw = debugDraw;
   }
   b2World.prototype.SetBroadPhase = function (broadPhase) {
      var oldBroadPhase = this.m_contactManager.m_broadPhase;
      this.m_contactManager.m_broadPhase = broadPhase;
      for (var b = this.m_bodyList; b; b = b.m_next) {
         for (var f = b.m_fixtureList; f; f = f.m_next) {
            f.m_proxy = broadPhase.CreateProxy(oldBroadPhase.GetFatAABB(f.m_proxy), f);
         }
      }
   }
   b2World.prototype.Validate = function () {
      this.m_contactManager.m_broadPhase.Validate();
   }
   b2World.prototype.GetProxyCount = function () {
      return this.m_contactManager.m_broadPhase.GetProxyCount();
   }
   b2World.prototype.CreateBody = function (def) {
      if (this.IsLocked() == true) {
         return null;
      }
      var b = new b2Body(def, this);
      b.m_prev = null;
      b.m_next = this.m_bodyList;
      if (this.m_bodyList) {
         this.m_bodyList.m_prev = b;
      }
      this.m_bodyList = b;
      ++this.m_bodyCount;
      return b;
   }
   b2World.prototype.DestroyBody = function (b) {
      if (this.IsLocked() == true) {
         return;
      }
      var jn = b.m_jointList;
      while (jn) {
         var jn0 = jn;
         jn = jn.next;
         if (this.m_destructionListener) {
            this.m_destructionListener.SayGoodbyeJoint(jn0.joint);
         }
         this.DestroyJoint(jn0.joint);
      }
      var coe = b.m_controllerList;
      while (coe) {
         var coe0 = coe;
         coe = coe.nextController;
         coe0.controller.RemoveBody(b);
      }
      var ce = b.m_contactList;
      while (ce) {
         var ce0 = ce;
         ce = ce.next;
         this.m_contactManager.Destroy(ce0.contact);
      }
      b.m_contactList = null;
      var f = b.m_fixtureList;
      while (f) {
         var f0 = f;
         f = f.m_next;
         if (this.m_destructionListener) {
            this.m_destructionListener.SayGoodbyeFixture(f0);
         }
         f0.DestroyProxy(this.m_contactManager.m_broadPhase);
         f0.Destroy();
      }
      b.m_fixtureList = null;
      b.m_fixtureCount = 0;
      if (b.m_prev) {
         b.m_prev.m_next = b.m_next;
      }
      if (b.m_next) {
         b.m_next.m_prev = b.m_prev;
      }
      if (b == this.m_bodyList) {
         this.m_bodyList = b.m_next;
      }--this.m_bodyCount;
   }
   b2World.prototype.CreateJoint = function (def) {
      var j = b2Joint.Create(def, null);
      j.m_prev = null;
      j.m_next = this.m_jointList;
      if (this.m_jointList) {
         this.m_jointList.m_prev = j;
      }
      this.m_jointList = j;
      ++this.m_jointCount;
      j.m_edgeA.joint = j;
      j.m_edgeA.other = j.m_bodyB;
      j.m_edgeA.prev = null;
      j.m_edgeA.next = j.m_bodyA.m_jointList;
      if (j.m_bodyA.m_jointList) j.m_bodyA.m_jointList.prev = j.m_edgeA;
      j.m_bodyA.m_jointList = j.m_edgeA;
      j.m_edgeB.joint = j;
      j.m_edgeB.other = j.m_bodyA;
      j.m_edgeB.prev = null;
      j.m_edgeB.next = j.m_bodyB.m_jointList;
      if (j.m_bodyB.m_jointList) j.m_bodyB.m_jointList.prev = j.m_edgeB;
      j.m_bodyB.m_jointList = j.m_edgeB;
      var bodyA = def.bodyA;
      var bodyB = def.bodyB;
      if (def.collideConnected == false) {
         var edge = bodyB.GetContactList();
         while (edge) {
            if (edge.other == bodyA) {
               edge.contact.FlagForFiltering();
            }
            edge = edge.next;
         }
      }
      return j;
   }
   b2World.prototype.DestroyJoint = function (j) {
      var collideConnected = j.m_collideConnected;
      if (j.m_prev) {
         j.m_prev.m_next = j.m_next;
      }
      if (j.m_next) {
         j.m_next.m_prev = j.m_prev;
      }
      if (j == this.m_jointList) {
         this.m_jointList = j.m_next;
      }
      var bodyA = j.m_bodyA;
      var bodyB = j.m_bodyB;
      bodyA.SetAwake(true);
      bodyB.SetAwake(true);
      if (j.m_edgeA.prev) {
         j.m_edgeA.prev.next = j.m_edgeA.next;
      }
      if (j.m_edgeA.next) {
         j.m_edgeA.next.prev = j.m_edgeA.prev;
      }
      if (j.m_edgeA == bodyA.m_jointList) {
         bodyA.m_jointList = j.m_edgeA.next;
      }
      j.m_edgeA.prev = null;
      j.m_edgeA.next = null;
      if (j.m_edgeB.prev) {
         j.m_edgeB.prev.next = j.m_edgeB.next;
      }
      if (j.m_edgeB.next) {
         j.m_edgeB.next.prev = j.m_edgeB.prev;
      }
      if (j.m_edgeB == bodyB.m_jointList) {
         bodyB.m_jointList = j.m_edgeB.next;
      }
      j.m_edgeB.prev = null;
      j.m_edgeB.next = null;
      b2Joint.Destroy(j, null);
      --this.m_jointCount;
      if (collideConnected == false) {
         var edge = bodyB.GetContactList();
         while (edge) {
            if (edge.other == bodyA) {
               edge.contact.FlagForFiltering();
            }
            edge = edge.next;
         }
      }
   }
   b2World.prototype.AddController = function (c) {
      c.m_next = this.m_controllerList;
      c.m_prev = null;
      this.m_controllerList = c;
      c.m_world = this;
      this.m_controllerCount++;
      return c;
   }
   b2World.prototype.RemoveController = function (c) {
      if (c.m_prev) c.m_prev.m_next = c.m_next;
      if (c.m_next) c.m_next.m_prev = c.m_prev;
      if (this.m_controllerList == c) this.m_controllerList = c.m_next;
      this.m_controllerCount--;
   }
   b2World.prototype.CreateController = function (controller) {
      if (controller.m_world != this) throw new Error("Controller can only be a member of one world");
      controller.m_next = this.m_controllerList;
      controller.m_prev = null;
      if (this.m_controllerList) this.m_controllerList.m_prev = controller;
      this.m_controllerList = controller;
      ++this.m_controllerCount;
      controller.m_world = this;
      return controller;
   }
   b2World.prototype.DestroyController = function (controller) {
      controller.Clear();
      if (controller.m_next) controller.m_next.m_prev = controller.m_prev;
      if (controller.m_prev) controller.m_prev.m_next = controller.m_next;
      if (controller == this.m_controllerList) this.m_controllerList = controller.m_next;
      --this.m_controllerCount;
   }
   b2World.prototype.SetWarmStarting = function (flag) {
      b2World.m_warmStarting = flag;
   }
   b2World.prototype.SetContinuousPhysics = function (flag) {
      b2World.m_continuousPhysics = flag;
   }
   b2World.prototype.GetBodyCount = function () {
      return this.m_bodyCount;
   }
   b2World.prototype.GetJointCount = function () {
      return this.m_jointCount;
   }
   b2World.prototype.GetContactCount = function () {
      return this.m_contactCount;
   }
   b2World.prototype.SetGravity = function (gravity) {
      this.m_gravity = gravity;
   }
   b2World.prototype.GetGravity = function () {
      return this.m_gravity;
   }
   b2World.prototype.GetGroundBody = function () {
      return this.m_groundBody;
   }
   b2World.prototype.Step = function (dt, velocityIterations, positionIterations) {
      if (dt === undefined) dt = 0;
      if (velocityIterations === undefined) velocityIterations = 0;
      if (positionIterations === undefined) positionIterations = 0;
      if (this.m_flags & b2World.e_newFixture) {
         this.m_contactManager.FindNewContacts();
         this.m_flags &= ~b2World.e_newFixture;
      }
      this.m_flags |= b2World.e_locked;
      var step = b2World.s_timestep2;
      step.dt = dt;
      step.velocityIterations = velocityIterations;
      step.positionIterations = positionIterations;
      if (dt > 0.0) {
         step.inv_dt = 1.0 / dt;
      }
      else {
         step.inv_dt = 0.0;
      }
      step.dtRatio = this.m_inv_dt0 * dt;
      step.warmStarting = b2World.m_warmStarting;
      this.m_contactManager.Collide();
      if (step.dt > 0.0) {
         this.Solve(step);
      }
      if (b2World.m_continuousPhysics && step.dt > 0.0) {
         this.SolveTOI(step);
      }
      if (step.dt > 0.0) {
         this.m_inv_dt0 = step.inv_dt;
      }
      this.m_flags &= ~b2World.e_locked;
   }
   b2World.prototype.ClearForces = function () {
      for (var body = this.m_bodyList; body; body = body.m_next) {
         body.m_force.SetZero();
         body.m_torque = 0.0;
      }
   }
   b2World.prototype.DrawDebugData = function () {
      if (this.m_debugDraw == null) {
         return;
      }
      this.m_debugDraw.m_sprite.graphics.clear();
      var flags = this.m_debugDraw.GetFlags();
      var i = 0;
      var b;
      var f;
      var s;
      var j;
      var bp;
      var invQ = new b2Vec2;
      var x1 = new b2Vec2;
      var x2 = new b2Vec2;
      var xf;
      var b1 = new b2AABB();
      var b2 = new b2AABB();
      var vs = [new b2Vec2(), new b2Vec2(), new b2Vec2(), new b2Vec2()];
      var color = new b2Color(0, 0, 0);
      if (flags & b2DebugDraw.e_shapeBit) {
         for (b = this.m_bodyList;
         b; b = b.m_next) {
            xf = b.m_xf;
            for (f = b.GetFixtureList();
            f; f = f.m_next) {
               s = f.GetShape();
               if (b.IsActive() == false) {
                  color.Set(0.5, 0.5, 0.3);
                  this.DrawShape(s, xf, color);
               }
               else if (b.GetType() == b2Body.b2_staticBody) {
                  color.Set(0.5, 0.9, 0.5);
                  this.DrawShape(s, xf, color);
               }
               else if (b.GetType() == b2Body.b2_kinematicBody) {
                  color.Set(0.5, 0.5, 0.9);
                  this.DrawShape(s, xf, color);
               }
               else if (b.IsAwake() == false) {
                  color.Set(0.6, 0.6, 0.6);
                  this.DrawShape(s, xf, color);
               }
               else {
                  color.Set(0.9, 0.7, 0.7);
                  this.DrawShape(s, xf, color);
               }
            }
         }
      }
      if (flags & b2DebugDraw.e_jointBit) {
         for (j = this.m_jointList;
         j; j = j.m_next) {
            this.DrawJoint(j);
         }
      }
      if (flags & b2DebugDraw.e_controllerBit) {
         for (var c = this.m_controllerList; c; c = c.m_next) {
            c.Draw(this.m_debugDraw);
         }
      }
      if (flags & b2DebugDraw.e_pairBit) {
         color.Set(0.3, 0.9, 0.9);
         for (var contact = this.m_contactManager.m_contactList; contact; contact = contact.GetNext()) {
            var fixtureA = contact.GetFixtureA();
            var fixtureB = contact.GetFixtureB();
            var cA = fixtureA.GetAABB().GetCenter();
            var cB = fixtureB.GetAABB().GetCenter();
            this.m_debugDraw.DrawSegment(cA, cB, color);
         }
      }
      if (flags & b2DebugDraw.e_aabbBit) {
         bp = this.m_contactManager.m_broadPhase;
         vs = [new b2Vec2(), new b2Vec2(), new b2Vec2(), new b2Vec2()];
         for (b = this.m_bodyList;
         b; b = b.GetNext()) {
            if (b.IsActive() == false) {
               continue;
            }
            for (f = b.GetFixtureList();
            f; f = f.GetNext()) {
               var aabb = bp.GetFatAABB(f.m_proxy);
               vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
               vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
               vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
               vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);
               this.m_debugDraw.DrawPolygon(vs, 4, color);
            }
         }
      }
      if (flags & b2DebugDraw.e_centerOfMassBit) {
         for (b = this.m_bodyList;
         b; b = b.m_next) {
            xf = b2World.s_xf;
            xf.R = b.m_xf.R;
            xf.position = b.GetWorldCenter();
            this.m_debugDraw.DrawTransform(xf);
         }
      }
   }
   b2World.prototype.QueryAABB = function (callback, aabb) {
      var __this = this;
      var broadPhase = __this.m_contactManager.m_broadPhase;

      function WorldQueryWrapper(proxy) {
         return callback(broadPhase.GetUserData(proxy));
      };
      broadPhase.Query(WorldQueryWrapper, aabb);
   }
   b2World.prototype.QueryShape = function (callback, shape, transform) {
      var __this = this;
      if (transform === undefined) transform = null;
      if (transform == null) {
         transform = new b2Transform();
         transform.SetIdentity();
      }
      var broadPhase = __this.m_contactManager.m_broadPhase;

      function WorldQueryWrapper(proxy) {
         var fixture = (broadPhase.GetUserData(proxy) instanceof b2Fixture ? broadPhase.GetUserData(proxy) : null);
         if (b2Shape.TestOverlap(shape, transform, fixture.GetShape(), fixture.GetBody().GetTransform())) return callback(fixture);
         return true;
      };
      var aabb = new b2AABB();
      shape.ComputeAABB(aabb, transform);
      broadPhase.Query(WorldQueryWrapper, aabb);
   }
   b2World.prototype.QueryPoint = function (callback, p) {
      var __this = this;
      var broadPhase = __this.m_contactManager.m_broadPhase;

      function WorldQueryWrapper(proxy) {
         var fixture = (broadPhase.GetUserData(proxy) instanceof b2Fixture ? broadPhase.GetUserData(proxy) : null);
         if (fixture.TestPoint(p)) return callback(fixture);
         return true;
      };
      var aabb = new b2AABB();
      aabb.lowerBound.Set(p.x - b2Settings.b2_linearSlop, p.y - b2Settings.b2_linearSlop);
      aabb.upperBound.Set(p.x + b2Settings.b2_linearSlop, p.y + b2Settings.b2_linearSlop);
      broadPhase.Query(WorldQueryWrapper, aabb);
   }
   b2World.prototype.RayCast = function (callback, point1, point2) {
      var __this = this;
      var broadPhase = __this.m_contactManager.m_broadPhase;
      var output = new b2RayCastOutput;

      function RayCastWrapper(input, proxy) {
         var userData = broadPhase.GetUserData(proxy);
         var fixture = (userData instanceof b2Fixture ? userData : null);
         var hit = fixture.RayCast(output, input);
         if (hit) {
            var fraction = output.fraction;
            var point = new b2Vec2((1.0 - fraction) * point1.x + fraction * point2.x, (1.0 - fraction) * point1.y + fraction * point2.y);
            return callback(fixture, point, output.normal, fraction);
         }
         return input.maxFraction;
      };
      var input = new b2RayCastInput(point1, point2);
      broadPhase.RayCast(RayCastWrapper, input);
   }
   b2World.prototype.RayCastOne = function (point1, point2) {
      var __this = this;
      var result;

      function RayCastOneWrapper(fixture, point, normal, fraction) {
         if (fraction === undefined) fraction = 0;
         result = fixture;
         return fraction;
      };
      __this.RayCast(RayCastOneWrapper, point1, point2);
      return result;
   }
   b2World.prototype.RayCastAll = function (point1, point2) {
      var __this = this;
      var result = new Vector();

      function RayCastAllWrapper(fixture, point, normal, fraction) {
         if (fraction === undefined) fraction = 0;
         result[result.length] = fixture;
         return 1;
      };
      __this.RayCast(RayCastAllWrapper, point1, point2);
      return result;
   }
   b2World.prototype.GetBodyList = function () {
      return this.m_bodyList;
   }
   b2World.prototype.GetJointList = function () {
      return this.m_jointList;
   }
   b2World.prototype.GetContactList = function () {
      return this.m_contactList;
   }
   b2World.prototype.IsLocked = function () {
      return (this.m_flags & b2World.e_locked) > 0;
   }
   b2World.prototype.Solve = function (step) {
      var b;
      for (var controller = this.m_controllerList; controller; controller = controller.m_next) {
         controller.Step(step);
      }
      var island = this.m_island;
      island.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
      for (b = this.m_bodyList;
      b; b = b.m_next) {
         b.m_flags &= ~b2Body.e_islandFlag;
      }
      for (var c = this.m_contactList; c; c = c.m_next) {
         c.m_flags &= ~b2Contact.e_islandFlag;
      }
      for (var j = this.m_jointList; j; j = j.m_next) {
         j.m_islandFlag = false;
      }
      var stackSize = parseInt(this.m_bodyCount);
      var stack = this.s_stack;
      for (var seed = this.m_bodyList; seed; seed = seed.m_next) {
         if (seed.m_flags & b2Body.e_islandFlag) {
            continue;
         }
         if (seed.IsAwake() == false || seed.IsActive() == false) {
            continue;
         }
         if (seed.GetType() == b2Body.b2_staticBody) {
            continue;
         }
         island.Clear();
         var stackCount = 0;
         stack[stackCount++] = seed;
         seed.m_flags |= b2Body.e_islandFlag;
         while (stackCount > 0) {
            b = stack[--stackCount];
            island.AddBody(b);
            if (b.IsAwake() == false) {
               b.SetAwake(true);
            }
            if (b.GetType() == b2Body.b2_staticBody) {
               continue;
            }
            var other;
            for (var ce = b.m_contactList; ce; ce = ce.next) {
               if (ce.contact.m_flags & b2Contact.e_islandFlag) {
                  continue;
               }
               if (ce.contact.IsSensor() == true || ce.contact.IsEnabled() == false || ce.contact.IsTouching() == false) {
                  continue;
               }
               island.AddContact(ce.contact);
               ce.contact.m_flags |= b2Contact.e_islandFlag;
               other = ce.other;
               if (other.m_flags & b2Body.e_islandFlag) {
                  continue;
               }
               stack[stackCount++] = other;
               other.m_flags |= b2Body.e_islandFlag;
            }
            for (var jn = b.m_jointList; jn; jn = jn.next) {
               if (jn.joint.m_islandFlag == true) {
                  continue;
               }
               other = jn.other;
               if (other.IsActive() == false) {
                  continue;
               }
               island.AddJoint(jn.joint);
               jn.joint.m_islandFlag = true;
               if (other.m_flags & b2Body.e_islandFlag) {
                  continue;
               }
               stack[stackCount++] = other;
               other.m_flags |= b2Body.e_islandFlag;
            }
         }
         island.Solve(step, this.m_gravity, this.m_allowSleep);
         for (var i = 0; i < island.m_bodyCount; ++i) {
            b = island.m_bodies[i];
            if (b.GetType() == b2Body.b2_staticBody) {
               b.m_flags &= ~b2Body.e_islandFlag;
            }
         }
      }
      for (i = 0;
      i < stack.length; ++i) {
         if (!stack[i]) break;
         stack[i] = null;
      }
      for (b = this.m_bodyList;
      b; b = b.m_next) {
         if (b.IsAwake() == false || b.IsActive() == false) {
            continue;
         }
         if (b.GetType() == b2Body.b2_staticBody) {
            continue;
         }
         b.SynchronizeFixtures();
      }
      this.m_contactManager.FindNewContacts();
   }
   b2World.prototype.SolveTOI = function (step) {
      var b;
      var fA;
      var fB;
      var bA;
      var bB;
      var cEdge;
      var j;
      var island = this.m_island;
      island.Initialize(this.m_bodyCount, b2Settings.b2_maxTOIContactsPerIsland, b2Settings.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
      var queue = b2World.s_queue;
      for (b = this.m_bodyList;
      b; b = b.m_next) {
         b.m_flags &= ~b2Body.e_islandFlag;
         b.m_sweep.t0 = 0.0;
      }
      var c;
      for (c = this.m_contactList;
      c; c = c.m_next) {
         c.m_flags &= ~ (b2Contact.e_toiFlag | b2Contact.e_islandFlag);
      }
      for (j = this.m_jointList;
      j; j = j.m_next) {
         j.m_islandFlag = false;
      }
      for (;;) {
         var minContact = null;
         var minTOI = 1.0;
         for (c = this.m_contactList;
         c; c = c.m_next) {
            if (c.IsSensor() == true || c.IsEnabled() == false || c.IsContinuous() == false) {
               continue;
            }
            var toi = 1.0;
            if (c.m_flags & b2Contact.e_toiFlag) {
               toi = c.m_toi;
            }
            else {
               fA = c.m_fixtureA;
               fB = c.m_fixtureB;
               bA = fA.m_body;
               bB = fB.m_body;
               if ((bA.GetType() != b2Body.b2_dynamicBody || bA.IsAwake() == false) && (bB.GetType() != b2Body.b2_dynamicBody || bB.IsAwake() == false)) {
                  continue;
               }
               var t0 = bA.m_sweep.t0;
               if (bA.m_sweep.t0 < bB.m_sweep.t0) {
                  t0 = bB.m_sweep.t0;
                  bA.m_sweep.Advance(t0);
               }
               else if (bB.m_sweep.t0 < bA.m_sweep.t0) {
                  t0 = bA.m_sweep.t0;
                  bB.m_sweep.Advance(t0);
               }
               toi = c.ComputeTOI(bA.m_sweep, bB.m_sweep);
               b2Settings.b2Assert(0.0 <= toi && toi <= 1.0);
               if (toi > 0.0 && toi < 1.0) {
                  toi = (1.0 - toi) * t0 + toi;
                  if (toi > 1) toi = 1;
               }
               c.m_toi = toi;
               c.m_flags |= b2Contact.e_toiFlag;
            }
            if (Number.MIN_VALUE < toi && toi < minTOI) {
               minContact = c;
               minTOI = toi;
            }
         }
         if (minContact == null || 1.0 - 100.0 * Number.MIN_VALUE < minTOI) {
            break;
         }
         fA = minContact.m_fixtureA;
         fB = minContact.m_fixtureB;
         bA = fA.m_body;
         bB = fB.m_body;
         b2World.s_backupA.Set(bA.m_sweep);
         b2World.s_backupB.Set(bB.m_sweep);
         bA.Advance(minTOI);
         bB.Advance(minTOI);
         minContact.Update(this.m_contactManager.m_contactListener);
         minContact.m_flags &= ~b2Contact.e_toiFlag;
         if (minContact.IsSensor() == true || minContact.IsEnabled() == false) {
            bA.m_sweep.Set(b2World.s_backupA);
            bB.m_sweep.Set(b2World.s_backupB);
            bA.SynchronizeTransform();
            bB.SynchronizeTransform();
            continue;
         }
         if (minContact.IsTouching() == false) {
            continue;
         }
         var seed = bA;
         if (seed.GetType() != b2Body.b2_dynamicBody) {
            seed = bB;
         }
         island.Clear();
         var queueStart = 0;
         var queueSize = 0;
         queue[queueStart + queueSize++] = seed;
         seed.m_flags |= b2Body.e_islandFlag;
         while (queueSize > 0) {
            b = queue[queueStart++];
            --queueSize;
            island.AddBody(b);
            if (b.IsAwake() == false) {
               b.SetAwake(true);
            }
            if (b.GetType() != b2Body.b2_dynamicBody) {
               continue;
            }
            for (cEdge = b.m_contactList;
            cEdge; cEdge = cEdge.next) {
               if (island.m_contactCount == island.m_contactCapacity) {
                  break;
               }
               if (cEdge.contact.m_flags & b2Contact.e_islandFlag) {
                  continue;
               }
               if (cEdge.contact.IsSensor() == true || cEdge.contact.IsEnabled() == false || cEdge.contact.IsTouching() == false) {
                  continue;
               }
               island.AddContact(cEdge.contact);
               cEdge.contact.m_flags |= b2Contact.e_islandFlag;
               var other = cEdge.other;
               if (other.m_flags & b2Body.e_islandFlag) {
                  continue;
               }
               if (other.GetType() != b2Body.b2_staticBody) {
                  other.Advance(minTOI);
                  other.SetAwake(true);
               }
               queue[queueStart + queueSize] = other;
               ++queueSize;
               other.m_flags |= b2Body.e_islandFlag;
            }
            for (var jEdge = b.m_jointList; jEdge; jEdge = jEdge.next) {
               if (island.m_jointCount == island.m_jointCapacity) continue;
               if (jEdge.joint.m_islandFlag == true) continue;
               other = jEdge.other;
               if (other.IsActive() == false) {
                  continue;
               }
               island.AddJoint(jEdge.joint);
               jEdge.joint.m_islandFlag = true;
               if (other.m_flags & b2Body.e_islandFlag) continue;
               if (other.GetType() != b2Body.b2_staticBody) {
                  other.Advance(minTOI);
                  other.SetAwake(true);
               }
               queue[queueStart + queueSize] = other;
               ++queueSize;
               other.m_flags |= b2Body.e_islandFlag;
            }
         }
         var subStep = b2World.s_timestep;
         subStep.warmStarting = false;
         subStep.dt = (1.0 - minTOI) * step.dt;
         subStep.inv_dt = 1.0 / subStep.dt;
         subStep.dtRatio = 0.0;
         subStep.velocityIterations = step.velocityIterations;
         subStep.positionIterations = step.positionIterations;
         island.SolveTOI(subStep);
         var i = 0;
         for (i = 0;
         i < island.m_bodyCount; ++i) {
            b = island.m_bodies[i];
            b.m_flags &= ~b2Body.e_islandFlag;
            if (b.IsAwake() == false) {
               continue;
            }
            if (b.GetType() != b2Body.b2_dynamicBody) {
               continue;
            }
            b.SynchronizeFixtures();
            for (cEdge = b.m_contactList;
            cEdge; cEdge = cEdge.next) {
               cEdge.contact.m_flags &= ~b2Contact.e_toiFlag;
            }
         }
         for (i = 0;
         i < island.m_contactCount; ++i) {
            c = island.m_contacts[i];
            c.m_flags &= ~ (b2Contact.e_toiFlag | b2Contact.e_islandFlag);
         }
         for (i = 0;
         i < island.m_jointCount; ++i) {
            j = island.m_joints[i];
            j.m_islandFlag = false;
         }
         this.m_contactManager.FindNewContacts();
      }
   }
   b2World.prototype.DrawJoint = function (joint) {
      var b1 = joint.GetBodyA();
      var b2 = joint.GetBodyB();
      var xf1 = b1.m_xf;
      var xf2 = b2.m_xf;
      var x1 = xf1.position;
      var x2 = xf2.position;
      var p1 = joint.GetAnchorA();
      var p2 = joint.GetAnchorB();
      var color = b2World.s_jointColor;
      switch (joint.m_type) {
      case b2Joint.e_distanceJoint:
         this.m_debugDraw.DrawSegment(p1, p2, color);
         break;
      case b2Joint.e_pulleyJoint:
         {
            var pulley = ((joint instanceof b2PulleyJoint ? joint : null));
            var s1 = pulley.GetGroundAnchorA();
            var s2 = pulley.GetGroundAnchorB();
            this.m_debugDraw.DrawSegment(s1, p1, color);
            this.m_debugDraw.DrawSegment(s2, p2, color);
            this.m_debugDraw.DrawSegment(s1, s2, color);
         }
         break;
      case b2Joint.e_mouseJoint:
         this.m_debugDraw.DrawSegment(p1, p2, color);
         break;
      default:
         if (b1 != this.m_groundBody) this.m_debugDraw.DrawSegment(x1, p1, color);
         this.m_debugDraw.DrawSegment(p1, p2, color);
         if (b2 != this.m_groundBody) this.m_debugDraw.DrawSegment(x2, p2, color);
      }
   }
   b2World.prototype.DrawShape = function (shape, xf, color) {
      switch (shape.m_type) {
      case b2Shape.e_circleShape:
         {
            var circle = ((shape instanceof b2CircleShape ? shape : null));
            var center = b2Math.MulX(xf, circle.m_p);
            var radius = circle.m_radius;
            var axis = xf.R.col1;
            this.m_debugDraw.DrawSolidCircle(center, radius, axis, color);
         }
         break;
      case b2Shape.e_polygonShape:
         {
            var i = 0;
            var poly = ((shape instanceof b2PolygonShape ? shape : null));
            var vertexCount = parseInt(poly.GetVertexCount());
            var localVertices = poly.GetVertices();
            var vertices = new Vector(vertexCount);
            for (i = 0;
            i < vertexCount; ++i) {
               vertices[i] = b2Math.MulX(xf, localVertices[i]);
            }
            this.m_debugDraw.DrawSolidPolygon(vertices, vertexCount, color);
         }
         break;
      case b2Shape.e_edgeShape:
         {
            var edge = (shape instanceof b2EdgeShape ? shape : null);
            this.m_debugDraw.DrawSegment(b2Math.MulX(xf, edge.GetVertex1()), b2Math.MulX(xf, edge.GetVertex2()), color);
         }
         break;
      }
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2World.s_timestep2 = new b2TimeStep();
      Box2D.Dynamics.b2World.prototype.s_timestep2 = Box2D.Dynamics.b2World.s_timestep2;
      Box2D.Dynamics.b2World.s_xf = new b2Transform();
      Box2D.Dynamics.b2World.prototype.s_xf = Box2D.Dynamics.b2World.s_xf;
      Box2D.Dynamics.b2World.s_backupA = new b2Sweep();
      Box2D.Dynamics.b2World.prototype.s_backupA = Box2D.Dynamics.b2World.s_backupA;
      Box2D.Dynamics.b2World.s_backupB = new b2Sweep();
      Box2D.Dynamics.b2World.prototype.s_backupB = Box2D.Dynamics.b2World.s_backupB;
      Box2D.Dynamics.b2World.s_timestep = new b2TimeStep();
      Box2D.Dynamics.b2World.prototype.s_timestep = Box2D.Dynamics.b2World.s_timestep;
      Box2D.Dynamics.b2World.s_queue = new Vector();
      Box2D.Dynamics.b2World.prototype.s_queue = Box2D.Dynamics.b2World.s_queue;
      Box2D.Dynamics.b2World.s_jointColor = new b2Color(0.5, 0.8, 0.8);
      Box2D.Dynamics.b2World.prototype.s_jointColor = Box2D.Dynamics.b2World.s_jointColor;
      Box2D.Dynamics.b2World.e_newFixture = 0x0001;
      Box2D.Dynamics.b2World.prototype.e_newFixture = Box2D.Dynamics.b2World.e_newFixture;
      Box2D.Dynamics.b2World.e_locked = 0x0002;
      Box2D.Dynamics.b2World.prototype.e_locked = Box2D.Dynamics.b2World.e_locked;
   });
})(); /* source: disabled*/
(function () {
   var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
   var b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
   var b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape;
   var b2MassData = Box2D.Collision.Shapes.b2MassData;
   var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
   var b2Shape = Box2D.Collision.Shapes.b2Shape;
   var b2CircleContact = Box2D.Dynamics.Contacts.b2CircleContact;
   var b2Contact = Box2D.Dynamics.Contacts.b2Contact;
   var b2ContactConstraint = Box2D.Dynamics.Contacts.b2ContactConstraint;
   var b2ContactConstraintPoint = Box2D.Dynamics.Contacts.b2ContactConstraintPoint;
   var b2ContactEdge = Box2D.Dynamics.Contacts.b2ContactEdge;
   var b2ContactFactory = Box2D.Dynamics.Contacts.b2ContactFactory;
   var b2ContactRegister = Box2D.Dynamics.Contacts.b2ContactRegister;
   var b2ContactResult = Box2D.Dynamics.Contacts.b2ContactResult;
   var b2ContactSolver = Box2D.Dynamics.Contacts.b2ContactSolver;
   var b2EdgeAndCircleContact = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact;
   var b2NullContact = Box2D.Dynamics.Contacts.b2NullContact;
   var b2PolyAndCircleContact = Box2D.Dynamics.Contacts.b2PolyAndCircleContact;
   var b2PolyAndEdgeContact = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact;
   var b2PolygonContact = Box2D.Dynamics.Contacts.b2PolygonContact;
   var b2PositionSolverManifold = Box2D.Dynamics.Contacts.b2PositionSolverManifold;
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2AABB = Box2D.Collision.b2AABB;
   var b2Bound = Box2D.Collision.b2Bound;
   var b2BoundValues = Box2D.Collision.b2BoundValues;
   var b2BroadPhase = Box2D.Collision.b2BroadPhase;
   var b2Collision = Box2D.Collision.b2Collision;
   var b2ContactID = Box2D.Collision.b2ContactID;
   var b2ContactPoint = Box2D.Collision.b2ContactPoint;
   var b2Distance = Box2D.Collision.b2Distance;
   var b2DistanceInput = Box2D.Collision.b2DistanceInput;
   var b2DistanceOutput = Box2D.Collision.b2DistanceOutput;
   var b2DistanceProxy = Box2D.Collision.b2DistanceProxy;
   var b2DynamicTree = Box2D.Collision.b2DynamicTree;
   var b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase;
   var b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode;
   var b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair;
   var b2Manifold = Box2D.Collision.b2Manifold;
   var b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint;
   var b2OBB = Box2D.Collision.b2OBB;
   var b2Pair = Box2D.Collision.b2Pair;
   var b2PairManager = Box2D.Collision.b2PairManager;
   var b2Point = Box2D.Collision.b2Point;
   var b2Proxy = Box2D.Collision.b2Proxy;
   var b2RayCastInput = Box2D.Collision.b2RayCastInput;
   var b2RayCastOutput = Box2D.Collision.b2RayCastOutput;
   var b2Segment = Box2D.Collision.b2Segment;
   var b2SeparationFunction = Box2D.Collision.b2SeparationFunction;
   var b2Simplex = Box2D.Collision.b2Simplex;
   var b2SimplexCache = Box2D.Collision.b2SimplexCache;
   var b2SimplexVertex = Box2D.Collision.b2SimplexVertex;
   var b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact;
   var b2TOIInput = Box2D.Collision.b2TOIInput;
   var b2WorldManifold = Box2D.Collision.b2WorldManifold;
   var ClipVertex = Box2D.Collision.ClipVertex;
   var Features = Box2D.Collision.Features;
   var IBroadPhase = Box2D.Collision.IBroadPhase;
   var b2internal = Box2D.Common.b2internal;
   var b2CircleContact = Box2D.Dynamics.Contacts.b2CircleContact;
   var b2Contact = Box2D.Dynamics.Contacts.b2Contact;
   var b2ContactConstraint = Box2D.Dynamics.Contacts.b2ContactConstraint;
   var b2ContactConstraintPoint = Box2D.Dynamics.Contacts.b2ContactConstraintPoint;
   var b2ContactEdge = Box2D.Dynamics.Contacts.b2ContactEdge;
   var b2ContactFactory = Box2D.Dynamics.Contacts.b2ContactFactory;
   var b2ContactRegister = Box2D.Dynamics.Contacts.b2ContactRegister;
   var b2ContactResult = Box2D.Dynamics.Contacts.b2ContactResult;
   var b2ContactSolver = Box2D.Dynamics.Contacts.b2ContactSolver;
   var b2EdgeAndCircleContact = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact;
   var b2NullContact = Box2D.Dynamics.Contacts.b2NullContact;
   var b2PolyAndCircleContact = Box2D.Dynamics.Contacts.b2PolyAndCircleContact;
   var b2PolyAndEdgeContact = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact;
   var b2PolygonContact = Box2D.Dynamics.Contacts.b2PolygonContact;
   var b2PositionSolverManifold = Box2D.Dynamics.Contacts.b2PositionSolverManifold;
   b2CircleContact.inherit(Box2D.Dynamics.Contacts.b2Contact);
   b2CircleContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
   b2CircleContact.b2CircleContact = function () {
      Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
   };
   b2CircleContact.prototype.Create = function (allocator) {
      return new b2CircleContact();
   }
   b2CircleContact.Create = b2CircleContact.prototype.Create;
   b2CircleContact.prototype.Destroy = function (contact, allocator) {}
   b2CircleContact.Destroy = b2CircleContact.prototype.Destroy;
   b2CircleContact.prototype.Reset = function (fixtureA, fixtureB) {
      this.__super.Reset.call(this, fixtureA, fixtureB);
   }
   b2CircleContact.prototype.Evaluate = function () {
      var bA = this.m_fixtureA.GetBody();
      var bB = this.m_fixtureB.GetBody();
      b2Collision.CollideCircles(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2CircleShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2CircleShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
   }
   b2Contact.b2Contact = function () {
      this.m_nodeA = new b2ContactEdge();
      this.m_nodeB = new b2ContactEdge();
      this.m_manifold = new b2Manifold();
      this.m_oldManifold = new b2Manifold();
   };
   b2Contact.prototype.GetManifold = function () {
      return this.m_manifold;
   }
   b2Contact.prototype.GetWorldManifold = function (worldManifold) {
      var bodyA = this.m_fixtureA.GetBody();
      var bodyB = this.m_fixtureB.GetBody();
      var shapeA = this.m_fixtureA.GetShape();
      var shapeB = this.m_fixtureB.GetShape();
      worldManifold.Initialize(this.m_manifold, bodyA.GetTransform(), shapeA.m_radius, bodyB.GetTransform(), shapeB.m_radius);
   }
   b2Contact.prototype.IsTouching = function () {
      return (this.m_flags & b2Contact.e_touchingFlag) == b2Contact.e_touchingFlag;
   }
   b2Contact.prototype.IsContinuous = function () {
      return (this.m_flags & b2Contact.e_continuousFlag) == b2Contact.e_continuousFlag;
   }
   b2Contact.prototype.SetSensor = function (sensor) {
      if (sensor) {
         this.m_flags |= b2Contact.e_sensorFlag;
      }
      else {
         this.m_flags &= ~b2Contact.e_sensorFlag;
      }
   }
   b2Contact.prototype.IsSensor = function () {
      return (this.m_flags & b2Contact.e_sensorFlag) == b2Contact.e_sensorFlag;
   }
   b2Contact.prototype.SetEnabled = function (flag) {
      if (flag) {
         this.m_flags |= b2Contact.e_enabledFlag;
      }
      else {
         this.m_flags &= ~b2Contact.e_enabledFlag;
      }
   }
   b2Contact.prototype.IsEnabled = function () {
      return (this.m_flags & b2Contact.e_enabledFlag) == b2Contact.e_enabledFlag;
   }
   b2Contact.prototype.GetNext = function () {
      return this.m_next;
   }
   b2Contact.prototype.GetFixtureA = function () {
      return this.m_fixtureA;
   }
   b2Contact.prototype.GetFixtureB = function () {
      return this.m_fixtureB;
   }
   b2Contact.prototype.FlagForFiltering = function () {
      this.m_flags |= b2Contact.e_filterFlag;
   }
   b2Contact.prototype.b2Contact = function () {}
   b2Contact.prototype.Reset = function (fixtureA, fixtureB) {
      if (fixtureA === undefined) fixtureA = null;
      if (fixtureB === undefined) fixtureB = null;
      this.m_flags = b2Contact.e_enabledFlag;
      if (!fixtureA || !fixtureB) {
         this.m_fixtureA = null;
         this.m_fixtureB = null;
         return;
      }
      if (fixtureA.IsSensor() || fixtureB.IsSensor()) {
         this.m_flags |= b2Contact.e_sensorFlag;
      }
      var bodyA = fixtureA.GetBody();
      var bodyB = fixtureB.GetBody();
      if (bodyA.GetType() != b2Body.b2_dynamicBody || bodyA.IsBullet() || bodyB.GetType() != b2Body.b2_dynamicBody || bodyB.IsBullet()) {
         this.m_flags |= b2Contact.e_continuousFlag;
      }
      this.m_fixtureA = fixtureA;
      this.m_fixtureB = fixtureB;
      this.m_manifold.m_pointCount = 0;
      this.m_prev = null;
      this.m_next = null;
      this.m_nodeA.contact = null;
      this.m_nodeA.prev = null;
      this.m_nodeA.next = null;
      this.m_nodeA.other = null;
      this.m_nodeB.contact = null;
      this.m_nodeB.prev = null;
      this.m_nodeB.next = null;
      this.m_nodeB.other = null;
   }
   b2Contact.prototype.Update = function (listener) {
      var tManifold = this.m_oldManifold;
      this.m_oldManifold = this.m_manifold;
      this.m_manifold = tManifold;
      this.m_flags |= b2Contact.e_enabledFlag;
      var touching = false;
      var wasTouching = (this.m_flags & b2Contact.e_touchingFlag) == b2Contact.e_touchingFlag;
      var bodyA = this.m_fixtureA.m_body;
      var bodyB = this.m_fixtureB.m_body;
      var aabbOverlap = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
      if (this.m_flags & b2Contact.e_sensorFlag) {
         if (aabbOverlap) {
            var shapeA = this.m_fixtureA.GetShape();
            var shapeB = this.m_fixtureB.GetShape();
            var xfA = bodyA.GetTransform();
            var xfB = bodyB.GetTransform();
            touching = b2Shape.TestOverlap(shapeA, xfA, shapeB, xfB);
         }
         this.m_manifold.m_pointCount = 0;
      }
      else {
         if (bodyA.GetType() != b2Body.b2_dynamicBody || bodyA.IsBullet() || bodyB.GetType() != b2Body.b2_dynamicBody || bodyB.IsBullet()) {
            this.m_flags |= b2Contact.e_continuousFlag;
         }
         else {
            this.m_flags &= ~b2Contact.e_continuousFlag;
         }
         if (aabbOverlap) {
            this.Evaluate();
            touching = this.m_manifold.m_pointCount > 0;
            for (var i = 0; i < this.m_manifold.m_pointCount; ++i) {
               var mp2 = this.m_manifold.m_points[i];
               mp2.m_normalImpulse = 0.0;
               mp2.m_tangentImpulse = 0.0;
               var id2 = mp2.m_id;
               for (var j = 0; j < this.m_oldManifold.m_pointCount; ++j) {
                  var mp1 = this.m_oldManifold.m_points[j];
                  if (mp1.m_id.key == id2.key) {
                     mp2.m_normalImpulse = mp1.m_normalImpulse;
                     mp2.m_tangentImpulse = mp1.m_tangentImpulse;
                     break;
                  }
               }
            }
         }
         else {
            this.m_manifold.m_pointCount = 0;
         }
         if (touching != wasTouching) {
            bodyA.SetAwake(true);
            bodyB.SetAwake(true);
         }
      }
      if (touching) {
         this.m_flags |= b2Contact.e_touchingFlag;
      }
      else {
         this.m_flags &= ~b2Contact.e_touchingFlag;
      }
      if (wasTouching == false && touching == true) {
         listener.BeginContact(this);
      }
      if (wasTouching == true && touching == false) {
         listener.EndContact(this);
      }
      if ((this.m_flags & b2Contact.e_sensorFlag) == 0) {
         listener.PreSolve(this, this.m_oldManifold);
      }
   }
   b2Contact.prototype.Evaluate = function () {}
   b2Contact.prototype.ComputeTOI = function (sweepA, sweepB) {
      b2Contact.s_input.proxyA.Set(this.m_fixtureA.GetShape());
      b2Contact.s_input.proxyB.Set(this.m_fixtureB.GetShape());
      b2Contact.s_input.sweepA = sweepA;
      b2Contact.s_input.sweepB = sweepB;
      b2Contact.s_input.tolerance = b2Settings.b2_linearSlop;
      return b2TimeOfImpact.TimeOfImpact(b2Contact.s_input);
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 0x0001;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_sensorFlag = Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag;
      Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 0x0002;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_continuousFlag = Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag;
      Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 0x0004;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_islandFlag = Box2D.Dynamics.Contacts.b2Contact.e_islandFlag;
      Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 0x0008;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_toiFlag = Box2D.Dynamics.Contacts.b2Contact.e_toiFlag;
      Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 0x0010;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_touchingFlag = Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag;
      Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 0x0020;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_enabledFlag = Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag;
      Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 0x0040;
      Box2D.Dynamics.Contacts.b2Contact.prototype.e_filterFlag = Box2D.Dynamics.Contacts.b2Contact.e_filterFlag;
      Box2D.Dynamics.Contacts.b2Contact.s_input = new b2TOIInput();
      Box2D.Dynamics.Contacts.b2Contact.prototype.s_input = Box2D.Dynamics.Contacts.b2Contact.s_input;
   });
   b2ContactConstraint.b2ContactConstraint = function () {
      this.localPlaneNormal = new b2Vec2();
      this.localPoint = new b2Vec2();
      this.normal = new b2Vec2();
      this.normalMass = new b2Mat22();
      this.K = new b2Mat22();
   };
   b2ContactConstraint.prototype.b2ContactConstraint = function () {
      this.points = new Vector(b2Settings.b2_maxManifoldPoints);
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
         this.points[i] = new b2ContactConstraintPoint();
      }
   }
   b2ContactConstraintPoint.b2ContactConstraintPoint = function () {
      this.localPoint = new b2Vec2();
      this.rA = new b2Vec2();
      this.rB = new b2Vec2();
   };
   b2ContactEdge.b2ContactEdge = function () {};
   b2ContactFactory.b2ContactFactory = function () {};
   b2ContactFactory.prototype.b2ContactFactory = function (allocator) {
      this.m_allocator = allocator;
      this.InitializeRegisters();
   }
   b2ContactFactory.prototype.AddType = function (createFcn, destroyFcn, type1, type2) {
      if (type1 === undefined) type1 = 0;
      if (type2 === undefined) type2 = 0;
      this.m_registers[type1][type2].createFcn = createFcn;
      this.m_registers[type1][type2].destroyFcn = destroyFcn;
      this.m_registers[type1][type2].primary = true;
      if (type1 != type2) {
         this.m_registers[type2][type1].createFcn = createFcn;
         this.m_registers[type2][type1].destroyFcn = destroyFcn;
         this.m_registers[type2][type1].primary = false;
      }
   }
   b2ContactFactory.prototype.InitializeRegisters = function () {
      this.m_registers = new Vector(b2Shape.e_shapeTypeCount);
      for (var i = 0; i < b2Shape.e_shapeTypeCount; i++) {
         this.m_registers[i] = new Vector(b2Shape.e_shapeTypeCount);
         for (var j = 0; j < b2Shape.e_shapeTypeCount; j++) {
            this.m_registers[i][j] = new b2ContactRegister();
         }
      }
      this.AddType(b2CircleContact.Create, b2CircleContact.Destroy, b2Shape.e_circleShape, b2Shape.e_circleShape);
      this.AddType(b2PolyAndCircleContact.Create, b2PolyAndCircleContact.Destroy, b2Shape.e_polygonShape, b2Shape.e_circleShape);
      this.AddType(b2PolygonContact.Create, b2PolygonContact.Destroy, b2Shape.e_polygonShape, b2Shape.e_polygonShape);
      this.AddType(b2EdgeAndCircleContact.Create, b2EdgeAndCircleContact.Destroy, b2Shape.e_edgeShape, b2Shape.e_circleShape);
      this.AddType(b2PolyAndEdgeContact.Create, b2PolyAndEdgeContact.Destroy, b2Shape.e_polygonShape, b2Shape.e_edgeShape);
   }
   b2ContactFactory.prototype.Create = function (fixtureA, fixtureB) {
      var type1 = parseInt(fixtureA.GetType());
      var type2 = parseInt(fixtureB.GetType());
      var reg = this.m_registers[type1][type2];
      var c;
      if (reg.pool) {
         c = reg.pool;
         reg.pool = c.m_next;
         reg.poolCount--;
         c.Reset(fixtureA, fixtureB);
         return c;
      }
      var createFcn = reg.createFcn;
      if (createFcn != null) {
         if (reg.primary) {
            c = createFcn(this.m_allocator);
            c.Reset(fixtureA, fixtureB);
            return c;
         }
         else {
            c = createFcn(this.m_allocator);
            c.Reset(fixtureB, fixtureA);
            return c;
         }
      }
      else {
         return null;
      }
   }
   b2ContactFactory.prototype.Destroy = function (contact) {
      if (contact.m_manifold.m_pointCount > 0) {
         contact.m_fixtureA.m_body.SetAwake(true);
         contact.m_fixtureB.m_body.SetAwake(true);
      }
      var type1 = parseInt(contact.m_fixtureA.GetType());
      var type2 = parseInt(contact.m_fixtureB.GetType());
      var reg = this.m_registers[type1][type2];
      if (true) {
         reg.poolCount++;
         contact.m_next = reg.pool;
         reg.pool = contact;
      }
      var destroyFcn = reg.destroyFcn;
      destroyFcn(contact, this.m_allocator);
   }
   b2ContactRegister.b2ContactRegister = function () {};
   b2ContactResult.b2ContactResult = function () {
      this.position = new b2Vec2();
      this.normal = new b2Vec2();
      this.id = new b2ContactID();
   };
   b2ContactSolver.b2ContactSolver = function () {
      this.m_step = new b2TimeStep();
      this.m_constraints = new Vector();
   };
   b2ContactSolver.prototype.b2ContactSolver = function () {}
   b2ContactSolver.prototype.Initialize = function (step, contacts, contactCount, allocator) {
      if (contactCount === undefined) contactCount = 0;
      var contact;
      this.m_step.Set(step);
      this.m_allocator = allocator;
      var i = 0;
      var tVec;
      var tMat;
      this.m_constraintCount = contactCount;
      while (this.m_constraints.length < this.m_constraintCount) {
         this.m_constraints[this.m_constraints.length] = new b2ContactConstraint();
      }
      for (i = 0;
      i < contactCount; ++i) {
         contact = contacts[i];
         var fixtureA = contact.m_fixtureA;
         var fixtureB = contact.m_fixtureB;
         var shapeA = fixtureA.m_shape;
         var shapeB = fixtureB.m_shape;
         var radiusA = shapeA.m_radius;
         var radiusB = shapeB.m_radius;
         var bodyA = fixtureA.m_body;
         var bodyB = fixtureB.m_body;
         var manifold = contact.GetManifold();
         var friction = b2Settings.b2MixFriction(fixtureA.GetFriction(), fixtureB.GetFriction());
         var restitution = b2Settings.b2MixRestitution(fixtureA.GetRestitution(), fixtureB.GetRestitution());
         var vAX = bodyA.m_linearVelocity.x;
         var vAY = bodyA.m_linearVelocity.y;
         var vBX = bodyB.m_linearVelocity.x;
         var vBY = bodyB.m_linearVelocity.y;
         var wA = bodyA.m_angularVelocity;
         var wB = bodyB.m_angularVelocity;
         b2Settings.b2Assert(manifold.m_pointCount > 0);
         b2ContactSolver.s_worldManifold.Initialize(manifold, bodyA.m_xf, radiusA, bodyB.m_xf, radiusB);
         var normalX = b2ContactSolver.s_worldManifold.m_normal.x;
         var normalY = b2ContactSolver.s_worldManifold.m_normal.y;
         var cc = this.m_constraints[i];
         cc.bodyA = bodyA;
         cc.bodyB = bodyB;
         cc.manifold = manifold;
         cc.normal.x = normalX;
         cc.normal.y = normalY;
         cc.pointCount = manifold.m_pointCount;
         cc.friction = friction;
         cc.restitution = restitution;
         cc.localPlaneNormal.x = manifold.m_localPlaneNormal.x;
         cc.localPlaneNormal.y = manifold.m_localPlaneNormal.y;
         cc.localPoint.x = manifold.m_localPoint.x;
         cc.localPoint.y = manifold.m_localPoint.y;
         cc.radius = radiusA + radiusB;
         cc.type = manifold.m_type;
         for (var k = 0; k < cc.pointCount; ++k) {
            var cp = manifold.m_points[k];
            var ccp = cc.points[k];
            ccp.normalImpulse = cp.m_normalImpulse;
            ccp.tangentImpulse = cp.m_tangentImpulse;
            ccp.localPoint.SetV(cp.m_localPoint);
            var rAX = ccp.rA.x = b2ContactSolver.s_worldManifold.m_points[k].x - bodyA.m_sweep.c.x;
            var rAY = ccp.rA.y = b2ContactSolver.s_worldManifold.m_points[k].y - bodyA.m_sweep.c.y;
            var rBX = ccp.rB.x = b2ContactSolver.s_worldManifold.m_points[k].x - bodyB.m_sweep.c.x;
            var rBY = ccp.rB.y = b2ContactSolver.s_worldManifold.m_points[k].y - bodyB.m_sweep.c.y;
            var rnA = rAX * normalY - rAY * normalX;
            var rnB = rBX * normalY - rBY * normalX;
            rnA *= rnA;
            rnB *= rnB;
            var kNormal = bodyA.m_invMass + bodyB.m_invMass + bodyA.m_invI * rnA + bodyB.m_invI * rnB;
            ccp.normalMass = 1.0 / kNormal;
            var kEqualized = bodyA.m_mass * bodyA.m_invMass + bodyB.m_mass * bodyB.m_invMass;
            kEqualized += bodyA.m_mass * bodyA.m_invI * rnA + bodyB.m_mass * bodyB.m_invI * rnB;
            ccp.equalizedMass = 1.0 / kEqualized;
            var tangentX = normalY;
            var tangentY = (-normalX);
            var rtA = rAX * tangentY - rAY * tangentX;
            var rtB = rBX * tangentY - rBY * tangentX;
            rtA *= rtA;
            rtB *= rtB;
            var kTangent = bodyA.m_invMass + bodyB.m_invMass + bodyA.m_invI * rtA + bodyB.m_invI * rtB;
            ccp.tangentMass = 1.0 / kTangent;
            ccp.velocityBias = 0.0;
            var tX = vBX + ((-wB * rBY)) - vAX - ((-wA * rAY));
            var tY = vBY + (wB * rBX) - vAY - (wA * rAX);
            var vRel = cc.normal.x * tX + cc.normal.y * tY;
            if (vRel < (-b2Settings.b2_velocityThreshold)) {
               ccp.velocityBias += (-cc.restitution * vRel);
            }
         }
         if (cc.pointCount == 2) {
            var ccp1 = cc.points[0];
            var ccp2 = cc.points[1];
            var invMassA = bodyA.m_invMass;
            var invIA = bodyA.m_invI;
            var invMassB = bodyB.m_invMass;
            var invIB = bodyB.m_invI;
            var rn1A = ccp1.rA.x * normalY - ccp1.rA.y * normalX;
            var rn1B = ccp1.rB.x * normalY - ccp1.rB.y * normalX;
            var rn2A = ccp2.rA.x * normalY - ccp2.rA.y * normalX;
            var rn2B = ccp2.rB.x * normalY - ccp2.rB.y * normalX;
            var k11 = invMassA + invMassB + invIA * rn1A * rn1A + invIB * rn1B * rn1B;
            var k22 = invMassA + invMassB + invIA * rn2A * rn2A + invIB * rn2B * rn2B;
            var k12 = invMassA + invMassB + invIA * rn1A * rn2A + invIB * rn1B * rn2B;
            var k_maxConditionNumber = 100.0;
            if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
               cc.K.col1.Set(k11, k12);
               cc.K.col2.Set(k12, k22);
               cc.K.GetInverse(cc.normalMass);
            }
            else {
               cc.pointCount = 1;
            }
         }
      }
   }
   b2ContactSolver.prototype.InitVelocityConstraints = function (step) {
      var tVec;
      var tVec2;
      var tMat;
      for (var i = 0; i < this.m_constraintCount; ++i) {
         var c = this.m_constraints[i];
         var bodyA = c.bodyA;
         var bodyB = c.bodyB;
         var invMassA = bodyA.m_invMass;
         var invIA = bodyA.m_invI;
         var invMassB = bodyB.m_invMass;
         var invIB = bodyB.m_invI;
         var normalX = c.normal.x;
         var normalY = c.normal.y;
         var tangentX = normalY;
         var tangentY = (-normalX);
         var tX = 0;
         var j = 0;
         var tCount = 0;
         if (step.warmStarting) {
            tCount = c.pointCount;
            for (j = 0;
            j < tCount; ++j) {
               var ccp = c.points[j];
               ccp.normalImpulse *= step.dtRatio;
               ccp.tangentImpulse *= step.dtRatio;
               var PX = ccp.normalImpulse * normalX + ccp.tangentImpulse * tangentX;
               var PY = ccp.normalImpulse * normalY + ccp.tangentImpulse * tangentY;
               bodyA.m_angularVelocity -= invIA * (ccp.rA.x * PY - ccp.rA.y * PX);
               bodyA.m_linearVelocity.x -= invMassA * PX;
               bodyA.m_linearVelocity.y -= invMassA * PY;
               bodyB.m_angularVelocity += invIB * (ccp.rB.x * PY - ccp.rB.y * PX);
               bodyB.m_linearVelocity.x += invMassB * PX;
               bodyB.m_linearVelocity.y += invMassB * PY;
            }
         }
         else {
            tCount = c.pointCount;
            for (j = 0;
            j < tCount; ++j) {
               var ccp2 = c.points[j];
               ccp2.normalImpulse = 0.0;
               ccp2.tangentImpulse = 0.0;
            }
         }
      }
   }
   b2ContactSolver.prototype.SolveVelocityConstraints = function () {
      var j = 0;
      var ccp;
      var rAX = 0;
      var rAY = 0;
      var rBX = 0;
      var rBY = 0;
      var dvX = 0;
      var dvY = 0;
      var vn = 0;
      var vt = 0;
      var lambda = 0;
      var maxFriction = 0;
      var newImpulse = 0;
      var PX = 0;
      var PY = 0;
      var dX = 0;
      var dY = 0;
      var P1X = 0;
      var P1Y = 0;
      var P2X = 0;
      var P2Y = 0;
      var tMat;
      var tVec;
      for (var i = 0; i < this.m_constraintCount; ++i) {
         var c = this.m_constraints[i];
         var bodyA = c.bodyA;
         var bodyB = c.bodyB;
         var wA = bodyA.m_angularVelocity;
         var wB = bodyB.m_angularVelocity;
         var vA = bodyA.m_linearVelocity;
         var vB = bodyB.m_linearVelocity;
         var invMassA = bodyA.m_invMass;
         var invIA = bodyA.m_invI;
         var invMassB = bodyB.m_invMass;
         var invIB = bodyB.m_invI;
         var normalX = c.normal.x;
         var normalY = c.normal.y;
         var tangentX = normalY;
         var tangentY = (-normalX);
         var friction = c.friction;
         var tX = 0;
         for (j = 0;
         j < c.pointCount; j++) {
            ccp = c.points[j];
            dvX = vB.x - wB * ccp.rB.y - vA.x + wA * ccp.rA.y;
            dvY = vB.y + wB * ccp.rB.x - vA.y - wA * ccp.rA.x;
            vt = dvX * tangentX + dvY * tangentY;
            lambda = ccp.tangentMass * (-vt);
            maxFriction = friction * ccp.normalImpulse;
            newImpulse = b2Math.Clamp(ccp.tangentImpulse + lambda, (-maxFriction), maxFriction);
            lambda = newImpulse - ccp.tangentImpulse;
            PX = lambda * tangentX;
            PY = lambda * tangentY;
            vA.x -= invMassA * PX;
            vA.y -= invMassA * PY;
            wA -= invIA * (ccp.rA.x * PY - ccp.rA.y * PX);
            vB.x += invMassB * PX;
            vB.y += invMassB * PY;
            wB += invIB * (ccp.rB.x * PY - ccp.rB.y * PX);
            ccp.tangentImpulse = newImpulse;
         }
         var tCount = parseInt(c.pointCount);
         if (c.pointCount == 1) {
            ccp = c.points[0];
            dvX = vB.x + ((-wB * ccp.rB.y)) - vA.x - ((-wA * ccp.rA.y));
            dvY = vB.y + (wB * ccp.rB.x) - vA.y - (wA * ccp.rA.x);
            vn = dvX * normalX + dvY * normalY;
            lambda = (-ccp.normalMass * (vn - ccp.velocityBias));
            newImpulse = ccp.normalImpulse + lambda;
            newImpulse = newImpulse > 0 ? newImpulse : 0.0;
            lambda = newImpulse - ccp.normalImpulse;
            PX = lambda * normalX;
            PY = lambda * normalY;
            vA.x -= invMassA * PX;
            vA.y -= invMassA * PY;
            wA -= invIA * (ccp.rA.x * PY - ccp.rA.y * PX);
            vB.x += invMassB * PX;
            vB.y += invMassB * PY;
            wB += invIB * (ccp.rB.x * PY - ccp.rB.y * PX);
            ccp.normalImpulse = newImpulse;
         }
         else {
            var cp1 = c.points[0];
            var cp2 = c.points[1];
            var aX = cp1.normalImpulse;
            var aY = cp2.normalImpulse;
            var dv1X = vB.x - wB * cp1.rB.y - vA.x + wA * cp1.rA.y;
            var dv1Y = vB.y + wB * cp1.rB.x - vA.y - wA * cp1.rA.x;
            var dv2X = vB.x - wB * cp2.rB.y - vA.x + wA * cp2.rA.y;
            var dv2Y = vB.y + wB * cp2.rB.x - vA.y - wA * cp2.rA.x;
            var vn1 = dv1X * normalX + dv1Y * normalY;
            var vn2 = dv2X * normalX + dv2Y * normalY;
            var bX = vn1 - cp1.velocityBias;
            var bY = vn2 - cp2.velocityBias;
            tMat = c.K;
            bX -= tMat.col1.x * aX + tMat.col2.x * aY;
            bY -= tMat.col1.y * aX + tMat.col2.y * aY;
            var k_errorTol = 0.001;
            for (;;) {
               tMat = c.normalMass;
               var xX = (-(tMat.col1.x * bX + tMat.col2.x * bY));
               var xY = (-(tMat.col1.y * bX + tMat.col2.y * bY));
               if (xX >= 0.0 && xY >= 0.0) {
                  dX = xX - aX;
                  dY = xY - aY;
                  P1X = dX * normalX;
                  P1Y = dX * normalY;
                  P2X = dY * normalX;
                  P2Y = dY * normalY;
                  vA.x -= invMassA * (P1X + P2X);
                  vA.y -= invMassA * (P1Y + P2Y);
                  wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
                  vB.x += invMassB * (P1X + P2X);
                  vB.y += invMassB * (P1Y + P2Y);
                  wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
                  cp1.normalImpulse = xX;
                  cp2.normalImpulse = xY;
                  break;
               }
               xX = (-cp1.normalMass * bX);
               xY = 0.0;
               vn1 = 0.0;
               vn2 = c.K.col1.y * xX + bY;
               if (xX >= 0.0 && vn2 >= 0.0) {
                  dX = xX - aX;
                  dY = xY - aY;
                  P1X = dX * normalX;
                  P1Y = dX * normalY;
                  P2X = dY * normalX;
                  P2Y = dY * normalY;
                  vA.x -= invMassA * (P1X + P2X);
                  vA.y -= invMassA * (P1Y + P2Y);
                  wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
                  vB.x += invMassB * (P1X + P2X);
                  vB.y += invMassB * (P1Y + P2Y);
                  wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
                  cp1.normalImpulse = xX;
                  cp2.normalImpulse = xY;
                  break;
               }
               xX = 0.0;
               xY = (-cp2.normalMass * bY);
               vn1 = c.K.col2.x * xY + bX;
               vn2 = 0.0;
               if (xY >= 0.0 && vn1 >= 0.0) {
                  dX = xX - aX;
                  dY = xY - aY;
                  P1X = dX * normalX;
                  P1Y = dX * normalY;
                  P2X = dY * normalX;
                  P2Y = dY * normalY;
                  vA.x -= invMassA * (P1X + P2X);
                  vA.y -= invMassA * (P1Y + P2Y);
                  wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
                  vB.x += invMassB * (P1X + P2X);
                  vB.y += invMassB * (P1Y + P2Y);
                  wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
                  cp1.normalImpulse = xX;
                  cp2.normalImpulse = xY;
                  break;
               }
               xX = 0.0;
               xY = 0.0;
               vn1 = bX;
               vn2 = bY;
               if (vn1 >= 0.0 && vn2 >= 0.0) {
                  dX = xX - aX;
                  dY = xY - aY;
                  P1X = dX * normalX;
                  P1Y = dX * normalY;
                  P2X = dY * normalX;
                  P2Y = dY * normalY;
                  vA.x -= invMassA * (P1X + P2X);
                  vA.y -= invMassA * (P1Y + P2Y);
                  wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
                  vB.x += invMassB * (P1X + P2X);
                  vB.y += invMassB * (P1Y + P2Y);
                  wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
                  cp1.normalImpulse = xX;
                  cp2.normalImpulse = xY;
                  break;
               }
               break;
            }
         }
         bodyA.m_angularVelocity = wA;
         bodyB.m_angularVelocity = wB;
      }
   }
   b2ContactSolver.prototype.FinalizeVelocityConstraints = function () {
      for (var i = 0; i < this.m_constraintCount; ++i) {
         var c = this.m_constraints[i];
         var m = c.manifold;
         for (var j = 0; j < c.pointCount; ++j) {
            var point1 = m.m_points[j];
            var point2 = c.points[j];
            point1.m_normalImpulse = point2.normalImpulse;
            point1.m_tangentImpulse = point2.tangentImpulse;
         }
      }
   }
   b2ContactSolver.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var minSeparation = 0.0;
      for (var i = 0; i < this.m_constraintCount; i++) {
         var c = this.m_constraints[i];
         var bodyA = c.bodyA;
         var bodyB = c.bodyB;
         var invMassA = bodyA.m_mass * bodyA.m_invMass;
         var invIA = bodyA.m_mass * bodyA.m_invI;
         var invMassB = bodyB.m_mass * bodyB.m_invMass;
         var invIB = bodyB.m_mass * bodyB.m_invI;
         b2ContactSolver.s_psm.Initialize(c);
         var normal = b2ContactSolver.s_psm.m_normal;
         for (var j = 0; j < c.pointCount; j++) {
            var ccp = c.points[j];
            var point = b2ContactSolver.s_psm.m_points[j];
            var separation = b2ContactSolver.s_psm.m_separations[j];
            var rAX = point.x - bodyA.m_sweep.c.x;
            var rAY = point.y - bodyA.m_sweep.c.y;
            var rBX = point.x - bodyB.m_sweep.c.x;
            var rBY = point.y - bodyB.m_sweep.c.y;
            minSeparation = minSeparation < separation ? minSeparation : separation;
            var C = b2Math.Clamp(baumgarte * (separation + b2Settings.b2_linearSlop), (-b2Settings.b2_maxLinearCorrection), 0.0);
            var impulse = (-ccp.equalizedMass * C);
            var PX = impulse * normal.x;
            var PY = impulse * normal.y;bodyA.m_sweep.c.x -= invMassA * PX;
            bodyA.m_sweep.c.y -= invMassA * PY;
            bodyA.m_sweep.a -= invIA * (rAX * PY - rAY * PX);
            bodyA.SynchronizeTransform();
            bodyB.m_sweep.c.x += invMassB * PX;
            bodyB.m_sweep.c.y += invMassB * PY;
            bodyB.m_sweep.a += invIB * (rBX * PY - rBY * PX);
            bodyB.SynchronizeTransform();
         }
      }
      return minSeparation > (-1.5 * b2Settings.b2_linearSlop);
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new b2WorldManifold();
      Box2D.Dynamics.Contacts.b2ContactSolver.prototype.s_worldManifold = Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold;
      Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new b2PositionSolverManifold();
      Box2D.Dynamics.Contacts.b2ContactSolver.prototype.s_psm = Box2D.Dynamics.Contacts.b2ContactSolver.s_psm;
   });
   b2EdgeAndCircleContact.inherit(Box2D.Dynamics.Contacts.b2Contact);
   b2EdgeAndCircleContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
   b2EdgeAndCircleContact.b2EdgeAndCircleContact = function () {
      Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
   };
   b2EdgeAndCircleContact.prototype.Create = function (allocator) {
      return new b2EdgeAndCircleContact();
   }
   b2EdgeAndCircleContact.Create = b2EdgeAndCircleContact.prototype.Create;
   b2EdgeAndCircleContact.prototype.Destroy = function (contact, allocator) {}
   b2EdgeAndCircleContact.Destroy = b2EdgeAndCircleContact.prototype.Destroy;
   b2EdgeAndCircleContact.prototype.Reset = function (fixtureA, fixtureB) {
      this.__super.Reset.call(this, fixtureA, fixtureB);
   }
   b2EdgeAndCircleContact.prototype.Evaluate = function () {
      var bA = this.m_fixtureA.GetBody();
      var bB = this.m_fixtureB.GetBody();
      this.b2CollideEdgeAndCircle(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2EdgeShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2CircleShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
   }
   b2EdgeAndCircleContact.prototype.b2CollideEdgeAndCircle = function (manifold, edge, xf1, circle, xf2) {}
   b2NullContact.inherit(Box2D.Dynamics.Contacts.b2Contact);
   b2NullContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
   b2NullContact.b2NullContact = function () {
      Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
   };
   b2NullContact.prototype.b2NullContact = function () {
      this.__super.b2Contact.call(this);
   }
   b2NullContact.prototype.Evaluate = function () {}
   b2PolyAndCircleContact.inherit(Box2D.Dynamics.Contacts.b2Contact);
   b2PolyAndCircleContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
   b2PolyAndCircleContact.b2PolyAndCircleContact = function () {
      Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
   };
   b2PolyAndCircleContact.prototype.Create = function (allocator) {
      return new b2PolyAndCircleContact();
   }
   b2PolyAndCircleContact.Create = b2PolyAndCircleContact.prototype.Create;
   b2PolyAndCircleContact.prototype.Destroy = function (contact, allocator) {}
   b2PolyAndCircleContact.Destroy = b2PolyAndCircleContact.prototype.Destroy;
   b2PolyAndCircleContact.prototype.Reset = function (fixtureA, fixtureB) {
      this.__super.Reset.call(this, fixtureA, fixtureB);
      b2Settings.b2Assert(fixtureA.GetType() == b2Shape.e_polygonShape);
      b2Settings.b2Assert(fixtureB.GetType() == b2Shape.e_circleShape);
   }
   b2PolyAndCircleContact.prototype.Evaluate = function () {
      var bA = this.m_fixtureA.m_body;
      var bB = this.m_fixtureB.m_body;
      b2Collision.CollidePolygonAndCircle(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2PolygonShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2CircleShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
   }
   b2PolyAndEdgeContact.inherit(Box2D.Dynamics.Contacts.b2Contact);
   b2PolyAndEdgeContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
   b2PolyAndEdgeContact.b2PolyAndEdgeContact = function () {
      Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
   };
   b2PolyAndEdgeContact.prototype.Create = function (allocator) {
      return new b2PolyAndEdgeContact();
   }
   b2PolyAndEdgeContact.Create = b2PolyAndEdgeContact.prototype.Create;
   b2PolyAndEdgeContact.prototype.Destroy = function (contact, allocator) {}
   b2PolyAndEdgeContact.Destroy = b2PolyAndEdgeContact.prototype.Destroy;
   b2PolyAndEdgeContact.prototype.Reset = function (fixtureA, fixtureB) {
      this.__super.Reset.call(this, fixtureA, fixtureB);
      b2Settings.b2Assert(fixtureA.GetType() == b2Shape.e_polygonShape);
      b2Settings.b2Assert(fixtureB.GetType() == b2Shape.e_edgeShape);
   }
   b2PolyAndEdgeContact.prototype.Evaluate = function () {
      var bA = this.m_fixtureA.GetBody();
      var bB = this.m_fixtureB.GetBody();
      this.b2CollidePolyAndEdge(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2PolygonShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2EdgeShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
   }
   b2PolyAndEdgeContact.prototype.b2CollidePolyAndEdge = function (manifold, polygon, xf1, edge, xf2) {}
   b2PolygonContact.inherit(Box2D.Dynamics.Contacts.b2Contact);
   b2PolygonContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
   b2PolygonContact.b2PolygonContact = function () {
      Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
   };
   b2PolygonContact.prototype.Create = function (allocator) {
      return new b2PolygonContact();
   }
   b2PolygonContact.Create = b2PolygonContact.prototype.Create;
   b2PolygonContact.prototype.Destroy = function (contact, allocator) {}
   b2PolygonContact.Destroy = b2PolygonContact.prototype.Destroy;
   b2PolygonContact.prototype.Reset = function (fixtureA, fixtureB) {
      this.__super.Reset.call(this, fixtureA, fixtureB);
   }
   b2PolygonContact.prototype.Evaluate = function () {
      var bA = this.m_fixtureA.GetBody();
      var bB = this.m_fixtureB.GetBody();
      b2Collision.CollidePolygons(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2PolygonShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2PolygonShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
   }
   b2PositionSolverManifold.b2PositionSolverManifold = function () {};
   b2PositionSolverManifold.prototype.b2PositionSolverManifold = function () {
      this.m_normal = new b2Vec2();
      this.m_separations = new Vector_a2j_Number(b2Settings.b2_maxManifoldPoints);
      this.m_points = new Vector(b2Settings.b2_maxManifoldPoints);
      for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
         this.m_points[i] = new b2Vec2();
      }
   }
   b2PositionSolverManifold.prototype.Initialize = function (cc) {
      b2Settings.b2Assert(cc.pointCount > 0);
      var i = 0;
      var clipPointX = 0;
      var clipPointY = 0;
      var tMat;
      var tVec;
      var planePointX = 0;
      var planePointY = 0;
      switch (cc.type) {
      case b2Manifold.e_circles:
         {
            tMat = cc.bodyA.m_xf.R;
            tVec = cc.localPoint;
            var pointAX = cc.bodyA.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            var pointAY = cc.bodyA.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tMat = cc.bodyB.m_xf.R;
            tVec = cc.points[0].localPoint;
            var pointBX = cc.bodyB.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            var pointBY = cc.bodyB.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            var dX = pointBX - pointAX;
            var dY = pointBY - pointAY;
            var d2 = dX * dX + dY * dY;
            if (d2 > Number.MIN_VALUE * Number.MIN_VALUE) {
               var d = Math.sqrt(d2);
               this.m_normal.x = dX / d;
               this.m_normal.y = dY / d;
            }
            else {
               this.m_normal.x = 1.0;
               this.m_normal.y = 0.0;
            }
            this.m_points[0].x = 0.5 * (pointAX + pointBX);
            this.m_points[0].y = 0.5 * (pointAY + pointBY);
            this.m_separations[0] = dX * this.m_normal.x + dY * this.m_normal.y - cc.radius;
         }
         break;
      case b2Manifold.e_faceA:
         {
            tMat = cc.bodyA.m_xf.R;
            tVec = cc.localPlaneNormal;
            this.m_normal.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            this.m_normal.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tMat = cc.bodyA.m_xf.R;
            tVec = cc.localPoint;
            planePointX = cc.bodyA.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            planePointY = cc.bodyA.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tMat = cc.bodyB.m_xf.R;
            for (i = 0;
            i < cc.pointCount; ++i) {
               tVec = cc.points[i].localPoint;
               clipPointX = cc.bodyB.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
               clipPointY = cc.bodyB.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
               this.m_separations[i] = (clipPointX - planePointX) * this.m_normal.x + (clipPointY - planePointY) * this.m_normal.y - cc.radius;
               this.m_points[i].x = clipPointX;
               this.m_points[i].y = clipPointY;
            }
         }
         break;
      case b2Manifold.e_faceB:
         {
            tMat = cc.bodyB.m_xf.R;
            tVec = cc.localPlaneNormal;
            this.m_normal.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            this.m_normal.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tMat = cc.bodyB.m_xf.R;
            tVec = cc.localPoint;
            planePointX = cc.bodyB.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            planePointY = cc.bodyB.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tMat = cc.bodyA.m_xf.R;
            for (i = 0;
            i < cc.pointCount; ++i) {
               tVec = cc.points[i].localPoint;
               clipPointX = cc.bodyA.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
               clipPointY = cc.bodyA.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
               this.m_separations[i] = (clipPointX - planePointX) * this.m_normal.x + (clipPointY - planePointY) * this.m_normal.y - cc.radius;
               this.m_points[i].Set(clipPointX, clipPointY);
            }
            this.m_normal.x *= (-1);
            this.m_normal.y *= (-1);
         }
         break;
      }
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new b2Vec2();
      Box2D.Dynamics.Contacts.b2PositionSolverManifold.prototype.circlePointA = Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA;
      Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new b2Vec2();
      Box2D.Dynamics.Contacts.b2PositionSolverManifold.prototype.circlePointB = Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB;
   });
})(); /* source: disabled*/
(function () {
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
   var b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
   var b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape;
   var b2MassData = Box2D.Collision.Shapes.b2MassData;
   var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
   var b2Shape = Box2D.Collision.Shapes.b2Shape;
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   var b2BuoyancyController = Box2D.Dynamics.Controllers.b2BuoyancyController;
   var b2ConstantAccelController = Box2D.Dynamics.Controllers.b2ConstantAccelController;
   var b2ConstantForceController = Box2D.Dynamics.Controllers.b2ConstantForceController;
   var b2Controller = Box2D.Dynamics.Controllers.b2Controller;
   var b2ControllerEdge = Box2D.Dynamics.Controllers.b2ControllerEdge;
   var b2GravityController = Box2D.Dynamics.Controllers.b2GravityController;
   var b2TensorDampingController = Box2D.Dynamics.Controllers.b2TensorDampingController;
   b2BuoyancyController.inherit(Box2D.Dynamics.Controllers.b2Controller);
   b2BuoyancyController.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
   b2BuoyancyController.b2BuoyancyController = function () {
      Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.normal = new b2Vec2(0, (-1));
      this.offset = 0;
      this.density = 0;
      this.velocity = new b2Vec2(0, 0);
      this.linearDrag = 2;
      this.angularDrag = 1;
      this.useDensity = false;
      this.useWorldGravity = true;
      this.gravity = null;
   };
   b2BuoyancyController.prototype.Step = function (step) {
      if (!this.m_bodyList) return;
      if (this.useWorldGravity) {
         this.gravity = this.GetWorld().GetGravity().Copy();
      }
      for (var i = this.m_bodyList; i; i = i.nextBody) {
         var body = i.body;
         if (body.IsAwake() == false) {
            continue;
         }
         var areac = new b2Vec2();
         var massc = new b2Vec2();
         var area = 0.0;
         var mass = 0.0;
         for (var fixture = body.GetFixtureList(); fixture; fixture = fixture.GetNext()) {
            var sc = new b2Vec2();
            var sarea = fixture.GetShape().ComputeSubmergedArea(this.normal, this.offset, body.GetTransform(), sc);
            area += sarea;
            areac.x += sarea * sc.x;
            areac.y += sarea * sc.y;
            var shapeDensity = 0;
            if (this.useDensity) {
               shapeDensity = 1;
            }
            else {
               shapeDensity = 1;
            }
            mass += sarea * shapeDensity;
            massc.x += sarea * sc.x * shapeDensity;
            massc.y += sarea * sc.y * shapeDensity;
         }
         areac.x /= area;
         areac.y /= area;
         massc.x /= mass;
         massc.y /= mass;
         if (area < Number.MIN_VALUE) continue;
         var buoyancyForce = this.gravity.GetNegative();
         buoyancyForce.Multiply(this.density * area);
         body.ApplyForce(buoyancyForce, massc);
         var dragForce = body.GetLinearVelocityFromWorldPoint(areac);
         dragForce.Subtract(this.velocity);
         dragForce.Multiply((-this.linearDrag * area));
         body.ApplyForce(dragForce, areac);
         body.ApplyTorque((-body.GetInertia() / body.GetMass() * area * body.GetAngularVelocity() * this.angularDrag));
      }
   }
   b2BuoyancyController.prototype.Draw = function (debugDraw) {
      var r = 1000;
      var p1 = new b2Vec2();
      var p2 = new b2Vec2();
      p1.x = this.normal.x * this.offset + this.normal.y * r;
      p1.y = this.normal.y * this.offset - this.normal.x * r;
      p2.x = this.normal.x * this.offset - this.normal.y * r;
      p2.y = this.normal.y * this.offset + this.normal.x * r;
      var color = new b2Color(0, 0, 1);
      debugDraw.DrawSegment(p1, p2, color);
   }
   b2ConstantAccelController.inherit(Box2D.Dynamics.Controllers.b2Controller);
   b2ConstantAccelController.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
   b2ConstantAccelController.b2ConstantAccelController = function () {
      Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.A = new b2Vec2(0, 0);
   };
   b2ConstantAccelController.prototype.Step = function (step) {
      var smallA = new b2Vec2(this.A.x * step.dt, this.A.y * step.dt);
      for (var i = this.m_bodyList; i; i = i.nextBody) {
         var body = i.body;
         if (!body.IsAwake()) continue;
         body.SetLinearVelocity(new b2Vec2(body.GetLinearVelocity().x + smallA.x, body.GetLinearVelocity().y + smallA.y));
      }
   }
   b2ConstantForceController.inherit(Box2D.Dynamics.Controllers.b2Controller);
   b2ConstantForceController.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
   b2ConstantForceController.b2ConstantForceController = function () {
      Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.F = new b2Vec2(0, 0);
   };
   b2ConstantForceController.prototype.Step = function (step) {
      for (var i = this.m_bodyList; i; i = i.nextBody) {
         var body = i.body;
         if (!body.IsAwake()) continue;
         body.ApplyForce(this.F, body.GetWorldCenter());
      }
   }
   b2Controller.b2Controller = function () {};
   b2Controller.prototype.Step = function (step) {}
   b2Controller.prototype.Draw = function (debugDraw) {}
   b2Controller.prototype.AddBody = function (body) {
      var edge = new b2ControllerEdge();
      edge.controller = this;
      edge.body = body;
      edge.nextBody = this.m_bodyList;
      edge.prevBody = null;
      this.m_bodyList = edge;
      if (edge.nextBody) edge.nextBody.prevBody = edge;
      this.m_bodyCount++;
      edge.nextController = body.m_controllerList;
      edge.prevController = null;
      body.m_controllerList = edge;
      if (edge.nextController) edge.nextController.prevController = edge;
      body.m_controllerCount++;
   }
   b2Controller.prototype.RemoveBody = function (body) {
      var edge = body.m_controllerList;
      while (edge && edge.controller != this)
      edge = edge.nextController;
      if (edge.prevBody) edge.prevBody.nextBody = edge.nextBody;
      if (edge.nextBody) edge.nextBody.prevBody = edge.prevBody;
      if (edge.nextController) edge.nextController.prevController = edge.prevController;
      if (edge.prevController) edge.prevController.nextController = edge.nextController;
      if (this.m_bodyList == edge) this.m_bodyList = edge.nextBody;
      if (body.m_controllerList == edge) body.m_controllerList = edge.nextController;
      body.m_controllerCount--;
      this.m_bodyCount--;
   }
   b2Controller.prototype.Clear = function () {
      while (this.m_bodyList)
      this.RemoveBody(this.m_bodyList.body);
   }
   b2Controller.prototype.GetNext = function () {
      return this.m_next;
   }
   b2Controller.prototype.GetWorld = function () {
      return this.m_world;
   }
   b2Controller.prototype.GetBodyList = function () {
      return this.m_bodyList;
   }
   b2ControllerEdge.b2ControllerEdge = function () {};
   b2GravityController.inherit(Box2D.Dynamics.Controllers.b2Controller);
   b2GravityController.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
   b2GravityController.b2GravityController = function () {
      Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.G = 1;
      this.invSqr = true;
   };
   b2GravityController.prototype.Step = function (step) {
      var i = null;
      var body1 = null;
      var p1 = null;
      var mass1 = 0;
      var j = null;
      var body2 = null;
      var p2 = null;
      var dx = 0;
      var dy = 0;
      var r2 = 0;
      var f = null;
      if (this.invSqr) {
         for (i = this.m_bodyList;
         i; i = i.nextBody) {
            body1 = i.body;
            p1 = body1.GetWorldCenter();
            mass1 = body1.GetMass();
            for (j = this.m_bodyList;
            j != i; j = j.nextBody) {
               body2 = j.body;
               p2 = body2.GetWorldCenter();
               dx = p2.x - p1.x;
               dy = p2.y - p1.y;
               r2 = dx * dx + dy * dy;
               if (r2 < Number.MIN_VALUE) continue;
               f = new b2Vec2(dx, dy);
               f.Multiply(this.G / r2 / Math.sqrt(r2) * mass1 * body2.GetMass());
               if (body1.IsAwake()) body1.ApplyForce(f, p1);
               f.Multiply((-1));
               if (body2.IsAwake()) body2.ApplyForce(f, p2);
            }
         }
      }
      else {
         for (i = this.m_bodyList;
         i; i = i.nextBody) {
            body1 = i.body;
            p1 = body1.GetWorldCenter();
            mass1 = body1.GetMass();
            for (j = this.m_bodyList;
            j != i; j = j.nextBody) {
               body2 = j.body;
               p2 = body2.GetWorldCenter();
               dx = p2.x - p1.x;
               dy = p2.y - p1.y;
               r2 = dx * dx + dy * dy;
               if (r2 < Number.MIN_VALUE) continue;
               f = new b2Vec2(dx, dy);
               f.Multiply(this.G / r2 * mass1 * body2.GetMass());
               if (body1.IsAwake()) body1.ApplyForce(f, p1);
               f.Multiply((-1));
               if (body2.IsAwake()) body2.ApplyForce(f, p2);
            }
         }
      }
   }
   b2TensorDampingController.inherit(Box2D.Dynamics.Controllers.b2Controller);
   b2TensorDampingController.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
   b2TensorDampingController.b2TensorDampingController = function () {
      Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.T = new b2Mat22();
      this.maxTimestep = 0;
   };
   b2TensorDampingController.prototype.SetAxisAligned = function (xDamping, yDamping) {
      if (xDamping === undefined) xDamping = 0;
      if (yDamping === undefined) yDamping = 0;
      this.T.col1.x = (-xDamping);
      this.T.col1.y = 0;
      this.T.col2.x = 0;
      this.T.col2.y = (-yDamping);
      if (xDamping > 0 || yDamping > 0) {
         this.maxTimestep = 1 / Math.max(xDamping, yDamping);
      }
      else {
         this.maxTimestep = 0;
      }
   }
   b2TensorDampingController.prototype.Step = function (step) {
      var timestep = step.dt;
      if (timestep <= Number.MIN_VALUE) return;
      if (timestep > this.maxTimestep && this.maxTimestep > 0) timestep = this.maxTimestep;
      for (var i = this.m_bodyList; i; i = i.nextBody) {
         var body = i.body;
         if (!body.IsAwake()) {
            continue;
         }
         var damping = body.GetWorldVector(b2Math.MulMV(this.T, body.GetLocalVector(body.GetLinearVelocity())));
         body.SetLinearVelocity(new b2Vec2(body.GetLinearVelocity().x + damping.x * timestep, body.GetLinearVelocity().y + damping.y * timestep));
      }
   }
})(); /* source: disabled*/
(function () {
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2Color = Box2D.Common.b2Color;
   var b2internal = Box2D.Common.b2internal;
   var b2Settings = Box2D.Common.b2Settings;
   var b2internal = Box2D.Common.b2internal;
   var b2Mat22 = Box2D.Common.Math.b2Mat22;
   var b2Mat33 = Box2D.Common.Math.b2Mat33;
   var b2Math = Box2D.Common.Math.b2Math;
   var b2Sweep = Box2D.Common.Math.b2Sweep;
   var b2Transform = Box2D.Common.Math.b2Transform;
   var b2Vec2 = Box2D.Common.Math.b2Vec2;
   var b2Vec3 = Box2D.Common.Math.b2Vec3;
   var b2DistanceJoint = Box2D.Dynamics.Joints.b2DistanceJoint;
   var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
   var b2FrictionJoint = Box2D.Dynamics.Joints.b2FrictionJoint;
   var b2FrictionJointDef = Box2D.Dynamics.Joints.b2FrictionJointDef;
   var b2GearJoint = Box2D.Dynamics.Joints.b2GearJoint;
   var b2GearJointDef = Box2D.Dynamics.Joints.b2GearJointDef;
   var b2Jacobian = Box2D.Dynamics.Joints.b2Jacobian;
   var b2Joint = Box2D.Dynamics.Joints.b2Joint;
   var b2JointDef = Box2D.Dynamics.Joints.b2JointDef;
   var b2JointEdge = Box2D.Dynamics.Joints.b2JointEdge;
   var b2LineJoint = Box2D.Dynamics.Joints.b2LineJoint;
   var b2LineJointDef = Box2D.Dynamics.Joints.b2LineJointDef;
   var b2MouseJoint = Box2D.Dynamics.Joints.b2MouseJoint;
   var b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
   var b2PrismaticJoint = Box2D.Dynamics.Joints.b2PrismaticJoint;
   var b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef;
   var b2PulleyJoint = Box2D.Dynamics.Joints.b2PulleyJoint;
   var b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef;
   var b2RevoluteJoint = Box2D.Dynamics.Joints.b2RevoluteJoint;
   var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
   var b2WeldJoint = Box2D.Dynamics.Joints.b2WeldJoint;
   var b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef;
   var b2Body = Box2D.Dynamics.b2Body;
   var b2BodyDef = Box2D.Dynamics.b2BodyDef;
   var b2ContactFilter = Box2D.Dynamics.b2ContactFilter;
   var b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse;
   var b2ContactListener = Box2D.Dynamics.b2ContactListener;
   var b2ContactManager = Box2D.Dynamics.b2ContactManager;
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   var b2DestructionListener = Box2D.Dynamics.b2DestructionListener;
   var b2FilterData = Box2D.Dynamics.b2FilterData;
   var b2Fixture = Box2D.Dynamics.b2Fixture;
   var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
   var b2Island = Box2D.Dynamics.b2Island;
   var b2TimeStep = Box2D.Dynamics.b2TimeStep;
   var b2World = Box2D.Dynamics.b2World;
   var b2internal = Box2D.Common.b2internal;
   var b2DistanceJoint = Box2D.Dynamics.Joints.b2DistanceJoint;
   var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
   var b2FrictionJoint = Box2D.Dynamics.Joints.b2FrictionJoint;
   var b2FrictionJointDef = Box2D.Dynamics.Joints.b2FrictionJointDef;
   var b2GearJoint = Box2D.Dynamics.Joints.b2GearJoint;
   var b2GearJointDef = Box2D.Dynamics.Joints.b2GearJointDef;
   var b2Jacobian = Box2D.Dynamics.Joints.b2Jacobian;
   var b2Joint = Box2D.Dynamics.Joints.b2Joint;
   var b2JointDef = Box2D.Dynamics.Joints.b2JointDef;
   var b2JointEdge = Box2D.Dynamics.Joints.b2JointEdge;
   var b2LineJoint = Box2D.Dynamics.Joints.b2LineJoint;
   var b2LineJointDef = Box2D.Dynamics.Joints.b2LineJointDef;
   var b2MouseJoint = Box2D.Dynamics.Joints.b2MouseJoint;
   var b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
   var b2PrismaticJoint = Box2D.Dynamics.Joints.b2PrismaticJoint;
   var b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef;
   var b2PulleyJoint = Box2D.Dynamics.Joints.b2PulleyJoint;
   var b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef;
   var b2RevoluteJoint = Box2D.Dynamics.Joints.b2RevoluteJoint;
   var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
   var b2WeldJoint = Box2D.Dynamics.Joints.b2WeldJoint;
   var b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef;
   b2DistanceJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2DistanceJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2DistanceJoint.b2DistanceJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchor1 = new b2Vec2();
      this.m_localAnchor2 = new b2Vec2();
      this.m_u = new b2Vec2();
   };
   b2DistanceJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
   }
   b2DistanceJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
   }
   b2DistanceJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
   }
   b2DistanceJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return 0.0;
   }
   b2DistanceJoint.prototype.GetLength = function () {
      return this.m_length;
   }
   b2DistanceJoint.prototype.SetLength = function (length) {
      if (length === undefined) length = 0;
      this.m_length = length;
   }
   b2DistanceJoint.prototype.GetFrequency = function () {
      return this.m_frequencyHz;
   }
   b2DistanceJoint.prototype.SetFrequency = function (hz) {
      if (hz === undefined) hz = 0;
      this.m_frequencyHz = hz;
   }
   b2DistanceJoint.prototype.GetDampingRatio = function () {
      return this.m_dampingRatio;
   }
   b2DistanceJoint.prototype.SetDampingRatio = function (ratio) {
      if (ratio === undefined) ratio = 0;
      this.m_dampingRatio = ratio;
   }
   b2DistanceJoint.prototype.b2DistanceJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      var tMat;
      var tX = 0;
      var tY = 0;
      this.m_localAnchor1.SetV(def.localAnchorA);
      this.m_localAnchor2.SetV(def.localAnchorB);
      this.m_length = def.length;
      this.m_frequencyHz = def.frequencyHz;
      this.m_dampingRatio = def.dampingRatio;
      this.m_impulse = 0.0;
      this.m_gamma = 0.0;
      this.m_bias = 0.0;
   }
   b2DistanceJoint.prototype.InitVelocityConstraints = function (step) {
      var tMat;
      var tX = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
      this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
      var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
      if (length > b2Settings.b2_linearSlop) {
         this.m_u.Multiply(1.0 / length);
      }
      else {
         this.m_u.SetZero();
      }
      var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
      var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
      var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
      this.m_mass = invMass != 0.0 ? 1.0 / invMass : 0.0;
      if (this.m_frequencyHz > 0.0) {
         var C = length - this.m_length;
         var omega = 2.0 * Math.PI * this.m_frequencyHz;
         var d = 2.0 * this.m_mass * this.m_dampingRatio * omega;
         var k = this.m_mass * omega * omega;
         this.m_gamma = step.dt * (d + step.dt * k);
         this.m_gamma = this.m_gamma != 0.0 ? 1 / this.m_gamma : 0.0;
         this.m_bias = C * step.dt * k * this.m_gamma;
         this.m_mass = invMass + this.m_gamma;
         this.m_mass = this.m_mass != 0.0 ? 1.0 / this.m_mass : 0.0;
      }
      if (step.warmStarting) {
         this.m_impulse *= step.dtRatio;
         var PX = this.m_impulse * this.m_u.x;
         var PY = this.m_impulse * this.m_u.y;
         bA.m_linearVelocity.x -= bA.m_invMass * PX;
         bA.m_linearVelocity.y -= bA.m_invMass * PY;
         bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
         bB.m_linearVelocity.x += bB.m_invMass * PX;
         bB.m_linearVelocity.y += bB.m_invMass * PY;
         bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
      }
      else {
         this.m_impulse = 0.0;
      }
   }
   b2DistanceJoint.prototype.SolveVelocityConstraints = function (step) {
      var tMat;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
      var v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
      var v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
      var v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
      var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
      var impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
      this.m_impulse += impulse;
      var PX = impulse * this.m_u.x;
      var PY = impulse * this.m_u.y;
      bA.m_linearVelocity.x -= bA.m_invMass * PX;
      bA.m_linearVelocity.y -= bA.m_invMass * PY;
      bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
      bB.m_linearVelocity.x += bB.m_invMass * PX;
      bB.m_linearVelocity.y += bB.m_invMass * PY;
      bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
   }
   b2DistanceJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var tMat;
      if (this.m_frequencyHz > 0.0) {
         return true;
      }
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
      var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
      var length = Math.sqrt(dX * dX + dY * dY);
      dX /= length;
      dY /= length;
      var C = length - this.m_length;
      C = b2Math.Clamp(C, (-b2Settings.b2_maxLinearCorrection), b2Settings.b2_maxLinearCorrection);
      var impulse = (-this.m_mass * C);
      this.m_u.Set(dX, dY);
      var PX = impulse * this.m_u.x;
      var PY = impulse * this.m_u.y;
      bA.m_sweep.c.x -= bA.m_invMass * PX;
      bA.m_sweep.c.y -= bA.m_invMass * PY;
      bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
      bB.m_sweep.c.x += bB.m_invMass * PX;
      bB.m_sweep.c.y += bB.m_invMass * PY;
      bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
      bA.SynchronizeTransform();
      bB.SynchronizeTransform();
      return b2Math.Abs(C) < b2Settings.b2_linearSlop;
   }
   b2DistanceJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2DistanceJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2DistanceJointDef.b2DistanceJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
   };
   b2DistanceJointDef.prototype.b2DistanceJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_distanceJoint;
      this.length = 1.0;
      this.frequencyHz = 0.0;
      this.dampingRatio = 0.0;
   }
   b2DistanceJointDef.prototype.Initialize = function (bA, bB, anchorA, anchorB) {
      this.bodyA = bA;
      this.bodyB = bB;
      this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchorA));
      this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchorB));
      var dX = anchorB.x - anchorA.x;
      var dY = anchorB.y - anchorA.y;
      this.length = Math.sqrt(dX * dX + dY * dY);
      this.frequencyHz = 0.0;
      this.dampingRatio = 0.0;
   }
   b2FrictionJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2FrictionJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2FrictionJoint.b2FrictionJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchorA = new b2Vec2();
      this.m_localAnchorB = new b2Vec2();
      this.m_linearMass = new b2Mat22();
      this.m_linearImpulse = new b2Vec2();
   };
   b2FrictionJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
   }
   b2FrictionJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
   }
   b2FrictionJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_linearImpulse.x, inv_dt * this.m_linearImpulse.y);
   }
   b2FrictionJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return inv_dt * this.m_angularImpulse;
   }
   b2FrictionJoint.prototype.SetMaxForce = function (force) {
      if (force === undefined) force = 0;
      this.m_maxForce = force;
   }
   b2FrictionJoint.prototype.GetMaxForce = function () {
      return this.m_maxForce;
   }
   b2FrictionJoint.prototype.SetMaxTorque = function (torque) {
      if (torque === undefined) torque = 0;
      this.m_maxTorque = torque;
   }
   b2FrictionJoint.prototype.GetMaxTorque = function () {
      return this.m_maxTorque;
   }
   b2FrictionJoint.prototype.b2FrictionJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      this.m_localAnchorA.SetV(def.localAnchorA);
      this.m_localAnchorB.SetV(def.localAnchorB);
      this.m_linearMass.SetZero();
      this.m_angularMass = 0.0;
      this.m_linearImpulse.SetZero();
      this.m_angularImpulse = 0.0;
      this.m_maxForce = def.maxForce;
      this.m_maxTorque = def.maxTorque;
   }
   b2FrictionJoint.prototype.InitVelocityConstraints = function (step) {
      var tMat;
      var tX = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      tMat = bA.m_xf.R;
      var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
      var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rAX + tMat.col2.x * rAY);
      rAY = (tMat.col1.y * rAX + tMat.col2.y * rAY);
      rAX = tX;
      tMat = bB.m_xf.R;
      var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
      var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rBX + tMat.col2.x * rBY);
      rBY = (tMat.col1.y * rBX + tMat.col2.y * rBY);
      rBX = tX;
      var mA = bA.m_invMass;
      var mB = bB.m_invMass;
      var iA = bA.m_invI;
      var iB = bB.m_invI;
      var K = new b2Mat22();
      K.col1.x = mA + mB;
      K.col2.x = 0.0;
      K.col1.y = 0.0;
      K.col2.y = mA + mB;
      K.col1.x += iA * rAY * rAY;
      K.col2.x += (-iA * rAX * rAY);
      K.col1.y += (-iA * rAX * rAY);
      K.col2.y += iA * rAX * rAX;
      K.col1.x += iB * rBY * rBY;
      K.col2.x += (-iB * rBX * rBY);
      K.col1.y += (-iB * rBX * rBY);
      K.col2.y += iB * rBX * rBX;
      K.GetInverse(this.m_linearMass);
      this.m_angularMass = iA + iB;
      if (this.m_angularMass > 0.0) {
         this.m_angularMass = 1.0 / this.m_angularMass;
      }
      if (step.warmStarting) {
         this.m_linearImpulse.x *= step.dtRatio;
         this.m_linearImpulse.y *= step.dtRatio;
         this.m_angularImpulse *= step.dtRatio;
         var P = this.m_linearImpulse;
         bA.m_linearVelocity.x -= mA * P.x;
         bA.m_linearVelocity.y -= mA * P.y;
         bA.m_angularVelocity -= iA * (rAX * P.y - rAY * P.x + this.m_angularImpulse);
         bB.m_linearVelocity.x += mB * P.x;
         bB.m_linearVelocity.y += mB * P.y;
         bB.m_angularVelocity += iB * (rBX * P.y - rBY * P.x + this.m_angularImpulse);
      }
      else {
         this.m_linearImpulse.SetZero();
         this.m_angularImpulse = 0.0;
      }
   }
   b2FrictionJoint.prototype.SolveVelocityConstraints = function (step) {
      var tMat;
      var tX = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var vA = bA.m_linearVelocity;
      var wA = bA.m_angularVelocity;
      var vB = bB.m_linearVelocity;
      var wB = bB.m_angularVelocity;
      var mA = bA.m_invMass;
      var mB = bB.m_invMass;
      var iA = bA.m_invI;
      var iB = bB.m_invI;
      tMat = bA.m_xf.R;
      var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
      var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rAX + tMat.col2.x * rAY);
      rAY = (tMat.col1.y * rAX + tMat.col2.y * rAY);
      rAX = tX;
      tMat = bB.m_xf.R;
      var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
      var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rBX + tMat.col2.x * rBY);
      rBY = (tMat.col1.y * rBX + tMat.col2.y * rBY);
      rBX = tX;
      var maxImpulse = 0; {
         var Cdot = wB - wA;
         var impulse = (-this.m_angularMass * Cdot);
         var oldImpulse = this.m_angularImpulse;
         maxImpulse = step.dt * this.m_maxTorque;
         this.m_angularImpulse = b2Math.Clamp(this.m_angularImpulse + impulse, (-maxImpulse), maxImpulse);
         impulse = this.m_angularImpulse - oldImpulse;
         wA -= iA * impulse;
         wB += iB * impulse;
      } {
         var CdotX = vB.x - wB * rBY - vA.x + wA * rAY;
         var CdotY = vB.y + wB * rBX - vA.y - wA * rAX;
         var impulseV = b2Math.MulMV(this.m_linearMass, new b2Vec2((-CdotX), (-CdotY)));
         var oldImpulseV = this.m_linearImpulse.Copy();
         this.m_linearImpulse.Add(impulseV);
         maxImpulse = step.dt * this.m_maxForce;
         if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
            this.m_linearImpulse.Normalize();
            this.m_linearImpulse.Multiply(maxImpulse);
         }
         impulseV = b2Math.SubtractVV(this.m_linearImpulse, oldImpulseV);
         vA.x -= mA * impulseV.x;
         vA.y -= mA * impulseV.y;
         wA -= iA * (rAX * impulseV.y - rAY * impulseV.x);
         vB.x += mB * impulseV.x;
         vB.y += mB * impulseV.y;
         wB += iB * (rBX * impulseV.y - rBY * impulseV.x);
      }
      bA.m_angularVelocity = wA;
      bB.m_angularVelocity = wB;
   }
   b2FrictionJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      return true;
   }
   b2FrictionJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2FrictionJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2FrictionJointDef.b2FrictionJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
   };
   b2FrictionJointDef.prototype.b2FrictionJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_frictionJoint;
      this.maxForce = 0.0;
      this.maxTorque = 0.0;
   }
   b2FrictionJointDef.prototype.Initialize = function (bA, bB, anchor) {
      this.bodyA = bA;
      this.bodyB = bB;
      this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchor));
      this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchor));
   }
   b2GearJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2GearJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2GearJoint.b2GearJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_groundAnchor1 = new b2Vec2();
      this.m_groundAnchor2 = new b2Vec2();
      this.m_localAnchor1 = new b2Vec2();
      this.m_localAnchor2 = new b2Vec2();
      this.m_J = new b2Jacobian();
   };
   b2GearJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
   }
   b2GearJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
   }
   b2GearJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_impulse * this.m_J.linearB.x, inv_dt * this.m_impulse * this.m_J.linearB.y);
   }
   b2GearJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      var tMat = this.m_bodyB.m_xf.R;
      var rX = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x;
      var rY = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y;
      var tX = tMat.col1.x * rX + tMat.col2.x * rY;
      rY = tMat.col1.y * rX + tMat.col2.y * rY;
      rX = tX;
      var PX = this.m_impulse * this.m_J.linearB.x;
      var PY = this.m_impulse * this.m_J.linearB.y;
      return inv_dt * (this.m_impulse * this.m_J.angularB - rX * PY + rY * PX);
   }
   b2GearJoint.prototype.GetRatio = function () {
      return this.m_ratio;
   }
   b2GearJoint.prototype.SetRatio = function (ratio) {
      if (ratio === undefined) ratio = 0;
      this.m_ratio = ratio;
   }
   b2GearJoint.prototype.b2GearJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      var type1 = parseInt(def.joint1.m_type);
      var type2 = parseInt(def.joint2.m_type);
      this.m_revolute1 = null;
      this.m_prismatic1 = null;
      this.m_revolute2 = null;
      this.m_prismatic2 = null;
      var coordinate1 = 0;
      var coordinate2 = 0;
      this.m_ground1 = def.joint1.GetBodyA();
      this.m_bodyA = def.joint1.GetBodyB();
      if (type1 == b2Joint.e_revoluteJoint) {
         this.m_revolute1 = (def.joint1 instanceof b2RevoluteJoint ? def.joint1 : null);
         this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);
         this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);
         coordinate1 = this.m_revolute1.GetJointAngle();
      }
      else {
         this.m_prismatic1 = (def.joint1 instanceof b2PrismaticJoint ? def.joint1 : null);
         this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);
         this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);
         coordinate1 = this.m_prismatic1.GetJointTranslation();
      }
      this.m_ground2 = def.joint2.GetBodyA();
      this.m_bodyB = def.joint2.GetBodyB();
      if (type2 == b2Joint.e_revoluteJoint) {
         this.m_revolute2 = (def.joint2 instanceof b2RevoluteJoint ? def.joint2 : null);
         this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);
         this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);
         coordinate2 = this.m_revolute2.GetJointAngle();
      }
      else {
         this.m_prismatic2 = (def.joint2 instanceof b2PrismaticJoint ? def.joint2 : null);
         this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);
         this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);
         coordinate2 = this.m_prismatic2.GetJointTranslation();
      }
      this.m_ratio = def.ratio;
      this.m_constant = coordinate1 + this.m_ratio * coordinate2;
      this.m_impulse = 0.0;
   }
   b2GearJoint.prototype.InitVelocityConstraints = function (step) {
      var g1 = this.m_ground1;
      var g2 = this.m_ground2;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var ugX = 0;
      var ugY = 0;
      var rX = 0;
      var rY = 0;
      var tMat;
      var tVec;
      var crug = 0;
      var tX = 0;
      var K = 0.0;
      this.m_J.SetZero();
      if (this.m_revolute1) {
         this.m_J.angularA = (-1.0);
         K += bA.m_invI;
      }
      else {
         tMat = g1.m_xf.R;
         tVec = this.m_prismatic1.m_localXAxis1;
         ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
         ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
         tMat = bA.m_xf.R;
         rX = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
         rY = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
         tX = tMat.col1.x * rX + tMat.col2.x * rY;
         rY = tMat.col1.y * rX + tMat.col2.y * rY;
         rX = tX;
         crug = rX * ugY - rY * ugX;
         this.m_J.linearA.Set((-ugX), (-ugY));
         this.m_J.angularA = (-crug);
         K += bA.m_invMass + bA.m_invI * crug * crug;
      }
      if (this.m_revolute2) {
         this.m_J.angularB = (-this.m_ratio);
         K += this.m_ratio * this.m_ratio * bB.m_invI;
      }
      else {
         tMat = g2.m_xf.R;
         tVec = this.m_prismatic2.m_localXAxis1;
         ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
         ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
         tMat = bB.m_xf.R;
         rX = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
         rY = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
         tX = tMat.col1.x * rX + tMat.col2.x * rY;
         rY = tMat.col1.y * rX + tMat.col2.y * rY;
         rX = tX;
         crug = rX * ugY - rY * ugX;
         this.m_J.linearB.Set((-this.m_ratio * ugX), (-this.m_ratio * ugY));
         this.m_J.angularB = (-this.m_ratio * crug);
         K += this.m_ratio * this.m_ratio * (bB.m_invMass + bB.m_invI * crug * crug);
      }
      this.m_mass = K > 0.0 ? 1.0 / K : 0.0;
      if (step.warmStarting) {
         bA.m_linearVelocity.x += bA.m_invMass * this.m_impulse * this.m_J.linearA.x;
         bA.m_linearVelocity.y += bA.m_invMass * this.m_impulse * this.m_J.linearA.y;
         bA.m_angularVelocity += bA.m_invI * this.m_impulse * this.m_J.angularA;
         bB.m_linearVelocity.x += bB.m_invMass * this.m_impulse * this.m_J.linearB.x;
         bB.m_linearVelocity.y += bB.m_invMass * this.m_impulse * this.m_J.linearB.y;
         bB.m_angularVelocity += bB.m_invI * this.m_impulse * this.m_J.angularB;
      }
      else {
         this.m_impulse = 0.0;
      }
   }
   b2GearJoint.prototype.SolveVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var Cdot = this.m_J.Compute(bA.m_linearVelocity, bA.m_angularVelocity, bB.m_linearVelocity, bB.m_angularVelocity);
      var impulse = (-this.m_mass * Cdot);
      this.m_impulse += impulse;
      bA.m_linearVelocity.x += bA.m_invMass * impulse * this.m_J.linearA.x;
      bA.m_linearVelocity.y += bA.m_invMass * impulse * this.m_J.linearA.y;
      bA.m_angularVelocity += bA.m_invI * impulse * this.m_J.angularA;
      bB.m_linearVelocity.x += bB.m_invMass * impulse * this.m_J.linearB.x;
      bB.m_linearVelocity.y += bB.m_invMass * impulse * this.m_J.linearB.y;
      bB.m_angularVelocity += bB.m_invI * impulse * this.m_J.angularB;
   }
   b2GearJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var linearError = 0.0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var coordinate1 = 0;
      var coordinate2 = 0;
      if (this.m_revolute1) {
         coordinate1 = this.m_revolute1.GetJointAngle();
      }
      else {
         coordinate1 = this.m_prismatic1.GetJointTranslation();
      }
      if (this.m_revolute2) {
         coordinate2 = this.m_revolute2.GetJointAngle();
      }
      else {
         coordinate2 = this.m_prismatic2.GetJointTranslation();
      }
      var C = this.m_constant - (coordinate1 + this.m_ratio * coordinate2);
      var impulse = (-this.m_mass * C);
      bA.m_sweep.c.x += bA.m_invMass * impulse * this.m_J.linearA.x;
      bA.m_sweep.c.y += bA.m_invMass * impulse * this.m_J.linearA.y;
      bA.m_sweep.a += bA.m_invI * impulse * this.m_J.angularA;
      bB.m_sweep.c.x += bB.m_invMass * impulse * this.m_J.linearB.x;
      bB.m_sweep.c.y += bB.m_invMass * impulse * this.m_J.linearB.y;
      bB.m_sweep.a += bB.m_invI * impulse * this.m_J.angularB;
      bA.SynchronizeTransform();
      bB.SynchronizeTransform();
      return linearError < b2Settings.b2_linearSlop;
   }
   b2GearJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2GearJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2GearJointDef.b2GearJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
   };
   b2GearJointDef.prototype.b2GearJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_gearJoint;
      this.joint1 = null;
      this.joint2 = null;
      this.ratio = 1.0;
   }
   b2Jacobian.b2Jacobian = function () {
      this.linearA = new b2Vec2();
      this.linearB = new b2Vec2();
   };
   b2Jacobian.prototype.SetZero = function () {
      this.linearA.SetZero();
      this.angularA = 0.0;
      this.linearB.SetZero();
      this.angularB = 0.0;
   }
   b2Jacobian.prototype.Set = function (x1, a1, x2, a2) {
      if (a1 === undefined) a1 = 0;
      if (a2 === undefined) a2 = 0;
      this.linearA.SetV(x1);
      this.angularA = a1;
      this.linearB.SetV(x2);
      this.angularB = a2;
   }
   b2Jacobian.prototype.Compute = function (x1, a1, x2, a2) {
      if (a1 === undefined) a1 = 0;
      if (a2 === undefined) a2 = 0;
      return (this.linearA.x * x1.x + this.linearA.y * x1.y) + this.angularA * a1 + (this.linearB.x * x2.x + this.linearB.y * x2.y) + this.angularB * a2;
   }
   b2Joint.b2Joint = function () {
      this.m_edgeA = new b2JointEdge();
      this.m_edgeB = new b2JointEdge();
      this.m_localCenterA = new b2Vec2();
      this.m_localCenterB = new b2Vec2();
   };
   b2Joint.prototype.GetType = function () {
      return this.m_type;
   }
   b2Joint.prototype.GetAnchorA = function () {
      return null;
   }
   b2Joint.prototype.GetAnchorB = function () {
      return null;
   }
   b2Joint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return null;
   }
   b2Joint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return 0.0;
   }
   b2Joint.prototype.GetBodyA = function () {
      return this.m_bodyA;
   }
   b2Joint.prototype.GetBodyB = function () {
      return this.m_bodyB;
   }
   b2Joint.prototype.GetNext = function () {
      return this.m_next;
   }
   b2Joint.prototype.GetUserData = function () {
      return this.m_userData;
   }
   b2Joint.prototype.SetUserData = function (data) {
      this.m_userData = data;
   }
   b2Joint.prototype.IsActive = function () {
      return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
   }
   b2Joint.prototype.Create = function (def, allocator) {
      var joint = null;
      switch (def.type) {
      case b2Joint.e_distanceJoint:
         {
            joint = new b2DistanceJoint((def instanceof b2DistanceJointDef ? def : null));
         }
         break;
      case b2Joint.e_mouseJoint:
         {
            joint = new b2MouseJoint((def instanceof b2MouseJointDef ? def : null));
         }
         break;
      case b2Joint.e_prismaticJoint:
         {
            joint = new b2PrismaticJoint((def instanceof b2PrismaticJointDef ? def : null));
         }
         break;
      case b2Joint.e_revoluteJoint:
         {
            joint = new b2RevoluteJoint((def instanceof b2RevoluteJointDef ? def : null));
         }
         break;
      case b2Joint.e_pulleyJoint:
         {
            joint = new b2PulleyJoint((def instanceof b2PulleyJointDef ? def : null));
         }
         break;
      case b2Joint.e_gearJoint:
         {
            joint = new b2GearJoint((def instanceof b2GearJointDef ? def : null));
         }
         break;
      case b2Joint.e_lineJoint:
         {
            joint = new b2LineJoint((def instanceof b2LineJointDef ? def : null));
         }
         break;
      case b2Joint.e_weldJoint:
         {
            joint = new b2WeldJoint((def instanceof b2WeldJointDef ? def : null));
         }
         break;
      case b2Joint.e_frictionJoint:
         {
            joint = new b2FrictionJoint((def instanceof b2FrictionJointDef ? def : null));
         }
         break;
      default:
         break;
      }
      return joint;
   }
   b2Joint.Create = b2Joint.prototype.Create;
   b2Joint.prototype.Destroy = function (joint, allocator) {}
   b2Joint.Destroy = b2Joint.prototype.Destroy;
   b2Joint.prototype.b2Joint = function (def) {
      b2Settings.b2Assert(def.bodyA != def.bodyB);
      this.m_type = def.type;
      this.m_prev = null;
      this.m_next = null;
      this.m_bodyA = def.bodyA;
      this.m_bodyB = def.bodyB;
      this.m_collideConnected = def.collideConnected;
      this.m_islandFlag = false;
      this.m_userData = def.userData;
   }
   b2Joint.prototype.InitVelocityConstraints = function (step) {}
   b2Joint.prototype.SolveVelocityConstraints = function (step) {}
   b2Joint.prototype.FinalizeVelocityConstraints = function () {}
   b2Joint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      return false;
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_unknownJoint = Box2D.Dynamics.Joints.b2Joint.e_unknownJoint;
      Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_revoluteJoint = Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint;
      Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_prismaticJoint = Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint;
      Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_distanceJoint = Box2D.Dynamics.Joints.b2Joint.e_distanceJoint;
      Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_pulleyJoint = Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint;
      Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_mouseJoint = Box2D.Dynamics.Joints.b2Joint.e_mouseJoint;
      Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_gearJoint = Box2D.Dynamics.Joints.b2Joint.e_gearJoint;
      Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_lineJoint = Box2D.Dynamics.Joints.b2Joint.e_lineJoint;
      Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_weldJoint = Box2D.Dynamics.Joints.b2Joint.e_weldJoint;
      Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_frictionJoint = Box2D.Dynamics.Joints.b2Joint.e_frictionJoint;
      Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_inactiveLimit = Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit;
      Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_atLowerLimit = Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit;
      Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_atUpperLimit = Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit;
      Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
      Box2D.Dynamics.Joints.b2Joint.prototype.e_equalLimits = Box2D.Dynamics.Joints.b2Joint.e_equalLimits;
   });
   b2JointDef.b2JointDef = function () {};
   b2JointDef.prototype.b2JointDef = function () {
      this.type = b2Joint.e_unknownJoint;
      this.userData = null;
      this.bodyA = null;
      this.bodyB = null;
      this.collideConnected = false;
   }
   b2JointEdge.b2JointEdge = function () {};
   b2LineJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2LineJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2LineJoint.b2LineJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchor1 = new b2Vec2();
      this.m_localAnchor2 = new b2Vec2();
      this.m_localXAxis1 = new b2Vec2();
      this.m_localYAxis1 = new b2Vec2();
      this.m_axis = new b2Vec2();
      this.m_perp = new b2Vec2();
      this.m_K = new b2Mat22();
      this.m_impulse = new b2Vec2();
   };
   b2LineJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
   }
   b2LineJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
   }
   b2LineJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y));
   }
   b2LineJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return inv_dt * this.m_impulse.y;
   }
   b2LineJoint.prototype.GetJointTranslation = function () {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var p1 = bA.GetWorldPoint(this.m_localAnchor1);
      var p2 = bB.GetWorldPoint(this.m_localAnchor2);
      var dX = p2.x - p1.x;
      var dY = p2.y - p1.y;
      var axis = bA.GetWorldVector(this.m_localXAxis1);
      var translation = axis.x * dX + axis.y * dY;
      return translation;
   }
   b2LineJoint.prototype.GetJointSpeed = function () {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var p1X = bA.m_sweep.c.x + r1X;
      var p1Y = bA.m_sweep.c.y + r1Y;
      var p2X = bB.m_sweep.c.x + r2X;
      var p2Y = bB.m_sweep.c.y + r2Y;
      var dX = p2X - p1X;
      var dY = p2Y - p1Y;
      var axis = bA.GetWorldVector(this.m_localXAxis1);
      var v1 = bA.m_linearVelocity;
      var v2 = bB.m_linearVelocity;
      var w1 = bA.m_angularVelocity;
      var w2 = bB.m_angularVelocity;
      var speed = (dX * ((-w1 * axis.y)) + dY * (w1 * axis.x)) + (axis.x * (((v2.x + ((-w2 * r2Y))) - v1.x) - ((-w1 * r1Y))) + axis.y * (((v2.y + (w2 * r2X)) - v1.y) - (w1 * r1X)));
      return speed;
   }
   b2LineJoint.prototype.IsLimitEnabled = function () {
      return this.m_enableLimit;
   }
   b2LineJoint.prototype.EnableLimit = function (flag) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableLimit = flag;
   }
   b2LineJoint.prototype.GetLowerLimit = function () {
      return this.m_lowerTranslation;
   }
   b2LineJoint.prototype.GetUpperLimit = function () {
      return this.m_upperTranslation;
   }
   b2LineJoint.prototype.SetLimits = function (lower, upper) {
      if (lower === undefined) lower = 0;
      if (upper === undefined) upper = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_lowerTranslation = lower;
      this.m_upperTranslation = upper;
   }
   b2LineJoint.prototype.IsMotorEnabled = function () {
      return this.m_enableMotor;
   }
   b2LineJoint.prototype.EnableMotor = function (flag) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableMotor = flag;
   }
   b2LineJoint.prototype.SetMotorSpeed = function (speed) {
      if (speed === undefined) speed = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_motorSpeed = speed;
   }
   b2LineJoint.prototype.GetMotorSpeed = function () {
      return this.m_motorSpeed;
   }
   b2LineJoint.prototype.SetMaxMotorForce = function (force) {
      if (force === undefined) force = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_maxMotorForce = force;
   }
   b2LineJoint.prototype.GetMaxMotorForce = function () {
      return this.m_maxMotorForce;
   }
   b2LineJoint.prototype.GetMotorForce = function () {
      return this.m_motorImpulse;
   }
   b2LineJoint.prototype.b2LineJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      var tMat;
      var tX = 0;
      var tY = 0;
      this.m_localAnchor1.SetV(def.localAnchorA);
      this.m_localAnchor2.SetV(def.localAnchorB);
      this.m_localXAxis1.SetV(def.localAxisA);
      this.m_localYAxis1.x = (-this.m_localXAxis1.y);
      this.m_localYAxis1.y = this.m_localXAxis1.x;
      this.m_impulse.SetZero();
      this.m_motorMass = 0.0;
      this.m_motorImpulse = 0.0;
      this.m_lowerTranslation = def.lowerTranslation;
      this.m_upperTranslation = def.upperTranslation;
      this.m_maxMotorForce = def.maxMotorForce;
      this.m_motorSpeed = def.motorSpeed;
      this.m_enableLimit = def.enableLimit;
      this.m_enableMotor = def.enableMotor;
      this.m_limitState = this.e_inactiveLimit;
      this.m_axis.SetZero();
      this.m_perp.SetZero();
   }
   b2LineJoint.prototype.InitVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var tX = 0;
      this.m_localCenterA.SetV(bA.GetLocalCenter());
      this.m_localCenterB.SetV(bB.GetLocalCenter());
      var xf1 = bA.GetTransform();
      var xf2 = bB.GetTransform();
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
      var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
      tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
      var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
      var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
      this.m_invMassA = bA.m_invMass;
      this.m_invMassB = bB.m_invMass;
      this.m_invIA = bA.m_invI;
      this.m_invIB = bB.m_invI; {
         this.m_axis.SetV(b2Math.MulMV(xf1.R, this.m_localXAxis1));
         this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
         this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
         this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
         this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1.0 / this.m_motorMass : 0.0;
      } {
         this.m_perp.SetV(b2Math.MulMV(xf1.R, this.m_localYAxis1));
         this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
         this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
         var m1 = this.m_invMassA;
         var m2 = this.m_invMassB;
         var i1 = this.m_invIA;
         var i2 = this.m_invIB;
         this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
         this.m_K.col1.y = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
         this.m_K.col2.x = this.m_K.col1.y;
         this.m_K.col2.y = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
      }
      if (this.m_enableLimit) {
         var jointTransition = this.m_axis.x * dX + this.m_axis.y * dY;
         if (b2Math.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * b2Settings.b2_linearSlop) {
            this.m_limitState = this.e_equalLimits;
         }
         else if (jointTransition <= this.m_lowerTranslation) {
            if (this.m_limitState != this.e_atLowerLimit) {
               this.m_limitState = this.e_atLowerLimit;
               this.m_impulse.y = 0.0;
            }
         }
         else if (jointTransition >= this.m_upperTranslation) {
            if (this.m_limitState != this.e_atUpperLimit) {
               this.m_limitState = this.e_atUpperLimit;
               this.m_impulse.y = 0.0;
            }
         }
         else {
            this.m_limitState = this.e_inactiveLimit;
            this.m_impulse.y = 0.0;
         }
      }
      else {
         this.m_limitState = this.e_inactiveLimit;
      }
      if (this.m_enableMotor == false) {
         this.m_motorImpulse = 0.0;
      }
      if (step.warmStarting) {
         this.m_impulse.x *= step.dtRatio;
         this.m_impulse.y *= step.dtRatio;
         this.m_motorImpulse *= step.dtRatio;
         var PX = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x;
         var PY = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y;
         var L1 = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1;
         var L2 = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2;
         bA.m_linearVelocity.x -= this.m_invMassA * PX;
         bA.m_linearVelocity.y -= this.m_invMassA * PY;
         bA.m_angularVelocity -= this.m_invIA * L1;
         bB.m_linearVelocity.x += this.m_invMassB * PX;
         bB.m_linearVelocity.y += this.m_invMassB * PY;
         bB.m_angularVelocity += this.m_invIB * L2;
      }
      else {
         this.m_impulse.SetZero();
         this.m_motorImpulse = 0.0;
      }
   }
   b2LineJoint.prototype.SolveVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var v1 = bA.m_linearVelocity;
      var w1 = bA.m_angularVelocity;
      var v2 = bB.m_linearVelocity;
      var w2 = bB.m_angularVelocity;
      var PX = 0;
      var PY = 0;
      var L1 = 0;
      var L2 = 0;
      if (this.m_enableMotor && this.m_limitState != this.e_equalLimits) {
         var Cdot = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
         var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
         var oldImpulse = this.m_motorImpulse;
         var maxImpulse = step.dt * this.m_maxMotorForce;
         this.m_motorImpulse = b2Math.Clamp(this.m_motorImpulse + impulse, (-maxImpulse), maxImpulse);
         impulse = this.m_motorImpulse - oldImpulse;
         PX = impulse * this.m_axis.x;
         PY = impulse * this.m_axis.y;
         L1 = impulse * this.m_a1;
         L2 = impulse * this.m_a2;
         v1.x -= this.m_invMassA * PX;
         v1.y -= this.m_invMassA * PY;
         w1 -= this.m_invIA * L1;
         v2.x += this.m_invMassB * PX;
         v2.y += this.m_invMassB * PY;
         w2 += this.m_invIB * L2;
      }
      var Cdot1 = this.m_perp.x * (v2.x - v1.x) + this.m_perp.y * (v2.y - v1.y) + this.m_s2 * w2 - this.m_s1 * w1;
      if (this.m_enableLimit && this.m_limitState != this.e_inactiveLimit) {
         var Cdot2 = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
         var f1 = this.m_impulse.Copy();
         var df = this.m_K.Solve(new b2Vec2(), (-Cdot1), (-Cdot2));
         this.m_impulse.Add(df);
         if (this.m_limitState == this.e_atLowerLimit) {
            this.m_impulse.y = b2Math.Max(this.m_impulse.y, 0.0);
         }
         else if (this.m_limitState == this.e_atUpperLimit) {
            this.m_impulse.y = b2Math.Min(this.m_impulse.y, 0.0);
         }
         var b = (-Cdot1) - (this.m_impulse.y - f1.y) * this.m_K.col2.x;
         var f2r = 0;
         if (this.m_K.col1.x != 0.0) {
            f2r = b / this.m_K.col1.x + f1.x;
         }
         else {
            f2r = f1.x;
         }
         this.m_impulse.x = f2r;
         df.x = this.m_impulse.x - f1.x;
         df.y = this.m_impulse.y - f1.y;
         PX = df.x * this.m_perp.x + df.y * this.m_axis.x;
         PY = df.x * this.m_perp.y + df.y * this.m_axis.y;
         L1 = df.x * this.m_s1 + df.y * this.m_a1;
         L2 = df.x * this.m_s2 + df.y * this.m_a2;
         v1.x -= this.m_invMassA * PX;
         v1.y -= this.m_invMassA * PY;
         w1 -= this.m_invIA * L1;
         v2.x += this.m_invMassB * PX;
         v2.y += this.m_invMassB * PY;
         w2 += this.m_invIB * L2;
      }
      else {
         var df2 = 0;
         if (this.m_K.col1.x != 0.0) {
            df2 = ((-Cdot1)) / this.m_K.col1.x;
         }
         else {
            df2 = 0.0;
         }
         this.m_impulse.x += df2;
         PX = df2 * this.m_perp.x;
         PY = df2 * this.m_perp.y;
         L1 = df2 * this.m_s1;
         L2 = df2 * this.m_s2;
         v1.x -= this.m_invMassA * PX;
         v1.y -= this.m_invMassA * PY;
         w1 -= this.m_invIA * L1;
         v2.x += this.m_invMassB * PX;
         v2.y += this.m_invMassB * PY;
         w2 += this.m_invIB * L2;
      }
      bA.m_linearVelocity.SetV(v1);
      bA.m_angularVelocity = w1;
      bB.m_linearVelocity.SetV(v2);
      bB.m_angularVelocity = w2;
   }
   b2LineJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var limitC = 0;
      var oldLimitImpulse = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var c1 = bA.m_sweep.c;
      var a1 = bA.m_sweep.a;
      var c2 = bB.m_sweep.c;
      var a2 = bB.m_sweep.a;
      var tMat;
      var tX = 0;
      var m1 = 0;
      var m2 = 0;
      var i1 = 0;
      var i2 = 0;
      var linearError = 0.0;
      var angularError = 0.0;
      var active = false;
      var C2 = 0.0;
      var R1 = b2Mat22.FromAngle(a1);
      var R2 = b2Mat22.FromAngle(a2);
      tMat = R1;
      var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
      var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
      tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = R2;
      var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
      var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var dX = c2.x + r2X - c1.x - r1X;
      var dY = c2.y + r2Y - c1.y - r1Y;
      if (this.m_enableLimit) {
         this.m_axis = b2Math.MulMV(R1, this.m_localXAxis1);
         this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
         this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
         var translation = this.m_axis.x * dX + this.m_axis.y * dY;
         if (b2Math.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * b2Settings.b2_linearSlop) {
            C2 = b2Math.Clamp(translation, (-b2Settings.b2_maxLinearCorrection), b2Settings.b2_maxLinearCorrection);
            linearError = b2Math.Abs(translation);
            active = true;
         }
         else if (translation <= this.m_lowerTranslation) {
            C2 = b2Math.Clamp(translation - this.m_lowerTranslation + b2Settings.b2_linearSlop, (-b2Settings.b2_maxLinearCorrection), 0.0);
            linearError = this.m_lowerTranslation - translation;
            active = true;
         }
         else if (translation >= this.m_upperTranslation) {
            C2 = b2Math.Clamp(translation - this.m_upperTranslation + b2Settings.b2_linearSlop, 0.0, b2Settings.b2_maxLinearCorrection);
            linearError = translation - this.m_upperTranslation;
            active = true;
         }
      }
      this.m_perp = b2Math.MulMV(R1, this.m_localYAxis1);
      this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
      this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
      var impulse = new b2Vec2();
      var C1 = this.m_perp.x * dX + this.m_perp.y * dY;
      linearError = b2Math.Max(linearError, b2Math.Abs(C1));
      angularError = 0.0;
      if (active) {
         m1 = this.m_invMassA;
         m2 = this.m_invMassB;
         i1 = this.m_invIA;
         i2 = this.m_invIB;
         this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
         this.m_K.col1.y = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
         this.m_K.col2.x = this.m_K.col1.y;
         this.m_K.col2.y = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
         this.m_K.Solve(impulse, (-C1), (-C2));
      }
      else {
         m1 = this.m_invMassA;
         m2 = this.m_invMassB;
         i1 = this.m_invIA;
         i2 = this.m_invIB;
         var k11 = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
         var impulse1 = 0;
         if (k11 != 0.0) {
            impulse1 = ((-C1)) / k11;
         }
         else {
            impulse1 = 0.0;
         }
         impulse.x = impulse1;
         impulse.y = 0.0;
      }
      var PX = impulse.x * this.m_perp.x + impulse.y * this.m_axis.x;
      var PY = impulse.x * this.m_perp.y + impulse.y * this.m_axis.y;
      var L1 = impulse.x * this.m_s1 + impulse.y * this.m_a1;
      var L2 = impulse.x * this.m_s2 + impulse.y * this.m_a2;
      c1.x -= this.m_invMassA * PX;
      c1.y -= this.m_invMassA * PY;
      a1 -= this.m_invIA * L1;
      c2.x += this.m_invMassB * PX;
      c2.y += this.m_invMassB * PY;
      a2 += this.m_invIB * L2;
      bA.m_sweep.a = a1;
      bB.m_sweep.a = a2;
      bA.SynchronizeTransform();
      bB.SynchronizeTransform();
      return linearError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
   }
   b2LineJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2LineJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2LineJointDef.b2LineJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
      this.localAxisA = new b2Vec2();
   };
   b2LineJointDef.prototype.b2LineJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_lineJoint;
      this.localAxisA.Set(1.0, 0.0);
      this.enableLimit = false;
      this.lowerTranslation = 0.0;
      this.upperTranslation = 0.0;
      this.enableMotor = false;
      this.maxMotorForce = 0.0;
      this.motorSpeed = 0.0;
   }
   b2LineJointDef.prototype.Initialize = function (bA, bB, anchor, axis) {
      this.bodyA = bA;
      this.bodyB = bB;
      this.localAnchorA = this.bodyA.GetLocalPoint(anchor);
      this.localAnchorB = this.bodyB.GetLocalPoint(anchor);
      this.localAxisA = this.bodyA.GetLocalVector(axis);
   }
   b2MouseJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2MouseJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2MouseJoint.b2MouseJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.K = new b2Mat22();
      this.K1 = new b2Mat22();
      this.K2 = new b2Mat22();
      this.m_localAnchor = new b2Vec2();
      this.m_target = new b2Vec2();
      this.m_impulse = new b2Vec2();
      this.m_mass = new b2Mat22();
      this.m_C = new b2Vec2();
   };
   b2MouseJoint.prototype.GetAnchorA = function () {
      return this.m_target;
   }
   b2MouseJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
   }
   b2MouseJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
   }
   b2MouseJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return 0.0;
   }
   b2MouseJoint.prototype.GetTarget = function () {
      return this.m_target;
   }
   b2MouseJoint.prototype.SetTarget = function (target) {
      if (this.m_bodyB.IsAwake() == false) {
         this.m_bodyB.SetAwake(true);
      }
      this.m_target = target;
   }
   b2MouseJoint.prototype.GetMaxForce = function () {
      return this.m_maxForce;
   }
   b2MouseJoint.prototype.SetMaxForce = function (maxForce) {
      if (maxForce === undefined) maxForce = 0;
      this.m_maxForce = maxForce;
   }
   b2MouseJoint.prototype.GetFrequency = function () {
      return this.m_frequencyHz;
   }
   b2MouseJoint.prototype.SetFrequency = function (hz) {
      if (hz === undefined) hz = 0;
      this.m_frequencyHz = hz;
   }
   b2MouseJoint.prototype.GetDampingRatio = function () {
      return this.m_dampingRatio;
   }
   b2MouseJoint.prototype.SetDampingRatio = function (ratio) {
      if (ratio === undefined) ratio = 0;
      this.m_dampingRatio = ratio;
   }
   b2MouseJoint.prototype.b2MouseJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      this.m_target.SetV(def.target);
      var tX = this.m_target.x - this.m_bodyB.m_xf.position.x;
      var tY = this.m_target.y - this.m_bodyB.m_xf.position.y;
      var tMat = this.m_bodyB.m_xf.R;
      this.m_localAnchor.x = (tX * tMat.col1.x + tY * tMat.col1.y);
      this.m_localAnchor.y = (tX * tMat.col2.x + tY * tMat.col2.y);
      this.m_maxForce = def.maxForce;
      this.m_impulse.SetZero();
      this.m_frequencyHz = def.frequencyHz;
      this.m_dampingRatio = def.dampingRatio;
      this.m_beta = 0.0;
      this.m_gamma = 0.0;
   }
   b2MouseJoint.prototype.InitVelocityConstraints = function (step) {
      var b = this.m_bodyB;
      var mass = b.GetMass();
      var omega = 2.0 * Math.PI * this.m_frequencyHz;
      var d = 2.0 * mass * this.m_dampingRatio * omega;
      var k = mass * omega * omega;
      this.m_gamma = step.dt * (d + step.dt * k);
      this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0.0;
      this.m_beta = step.dt * k * this.m_gamma;
      var tMat;tMat = b.m_xf.R;
      var rX = this.m_localAnchor.x - b.m_sweep.localCenter.x;
      var rY = this.m_localAnchor.y - b.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * rX + tMat.col2.x * rY);rY = (tMat.col1.y * rX + tMat.col2.y * rY);
      rX = tX;
      var invMass = b.m_invMass;
      var invI = b.m_invI;this.K1.col1.x = invMass;
      this.K1.col2.x = 0.0;
      this.K1.col1.y = 0.0;
      this.K1.col2.y = invMass;
      this.K2.col1.x = invI * rY * rY;
      this.K2.col2.x = (-invI * rX * rY);
      this.K2.col1.y = (-invI * rX * rY);
      this.K2.col2.y = invI * rX * rX;
      this.K.SetM(this.K1);
      this.K.AddM(this.K2);
      this.K.col1.x += this.m_gamma;
      this.K.col2.y += this.m_gamma;
      this.K.GetInverse(this.m_mass);
      this.m_C.x = b.m_sweep.c.x + rX - this.m_target.x;
      this.m_C.y = b.m_sweep.c.y + rY - this.m_target.y;
      b.m_angularVelocity *= 0.98;
      this.m_impulse.x *= step.dtRatio;
      this.m_impulse.y *= step.dtRatio;
      b.m_linearVelocity.x += invMass * this.m_impulse.x;
      b.m_linearVelocity.y += invMass * this.m_impulse.y;
      b.m_angularVelocity += invI * (rX * this.m_impulse.y - rY * this.m_impulse.x);
   }
   b2MouseJoint.prototype.SolveVelocityConstraints = function (step) {
      var b = this.m_bodyB;
      var tMat;
      var tX = 0;
      var tY = 0;
      tMat = b.m_xf.R;
      var rX = this.m_localAnchor.x - b.m_sweep.localCenter.x;
      var rY = this.m_localAnchor.y - b.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rX + tMat.col2.x * rY);
      rY = (tMat.col1.y * rX + tMat.col2.y * rY);
      rX = tX;
      var CdotX = b.m_linearVelocity.x + ((-b.m_angularVelocity * rY));
      var CdotY = b.m_linearVelocity.y + (b.m_angularVelocity * rX);
      tMat = this.m_mass;
      tX = CdotX + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
      tY = CdotY + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
      var impulseX = (-(tMat.col1.x * tX + tMat.col2.x * tY));
      var impulseY = (-(tMat.col1.y * tX + tMat.col2.y * tY));
      var oldImpulseX = this.m_impulse.x;
      var oldImpulseY = this.m_impulse.y;
      this.m_impulse.x += impulseX;
      this.m_impulse.y += impulseY;
      var maxImpulse = step.dt * this.m_maxForce;
      if (this.m_impulse.LengthSquared() > maxImpulse * maxImpulse) {
         this.m_impulse.Multiply(maxImpulse / this.m_impulse.Length());
      }
      impulseX = this.m_impulse.x - oldImpulseX;
      impulseY = this.m_impulse.y - oldImpulseY;
      b.m_linearVelocity.x += b.m_invMass * impulseX;
      b.m_linearVelocity.y += b.m_invMass * impulseY;
      b.m_angularVelocity += b.m_invI * (rX * impulseY - rY * impulseX);
   }
   b2MouseJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      return true;
   }
   b2MouseJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2MouseJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2MouseJointDef.b2MouseJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.target = new b2Vec2();
   };
   b2MouseJointDef.prototype.b2MouseJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_mouseJoint;
      this.maxForce = 0.0;
      this.frequencyHz = 5.0;
      this.dampingRatio = 0.7;
   }
   b2PrismaticJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2PrismaticJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2PrismaticJoint.b2PrismaticJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchor1 = new b2Vec2();
      this.m_localAnchor2 = new b2Vec2();
      this.m_localXAxis1 = new b2Vec2();
      this.m_localYAxis1 = new b2Vec2();
      this.m_axis = new b2Vec2();
      this.m_perp = new b2Vec2();
      this.m_K = new b2Mat33();
      this.m_impulse = new b2Vec3();
   };
   b2PrismaticJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
   }
   b2PrismaticJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
   }
   b2PrismaticJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
   }
   b2PrismaticJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return inv_dt * this.m_impulse.y;
   }
   b2PrismaticJoint.prototype.GetJointTranslation = function () {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var p1 = bA.GetWorldPoint(this.m_localAnchor1);
      var p2 = bB.GetWorldPoint(this.m_localAnchor2);
      var dX = p2.x - p1.x;
      var dY = p2.y - p1.y;
      var axis = bA.GetWorldVector(this.m_localXAxis1);
      var translation = axis.x * dX + axis.y * dY;
      return translation;
   }
   b2PrismaticJoint.prototype.GetJointSpeed = function () {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var p1X = bA.m_sweep.c.x + r1X;
      var p1Y = bA.m_sweep.c.y + r1Y;
      var p2X = bB.m_sweep.c.x + r2X;
      var p2Y = bB.m_sweep.c.y + r2Y;
      var dX = p2X - p1X;
      var dY = p2Y - p1Y;
      var axis = bA.GetWorldVector(this.m_localXAxis1);
      var v1 = bA.m_linearVelocity;
      var v2 = bB.m_linearVelocity;
      var w1 = bA.m_angularVelocity;
      var w2 = bB.m_angularVelocity;
      var speed = (dX * ((-w1 * axis.y)) + dY * (w1 * axis.x)) + (axis.x * (((v2.x + ((-w2 * r2Y))) - v1.x) - ((-w1 * r1Y))) + axis.y * (((v2.y + (w2 * r2X)) - v1.y) - (w1 * r1X)));
      return speed;
   }
   b2PrismaticJoint.prototype.IsLimitEnabled = function () {
      return this.m_enableLimit;
   }
   b2PrismaticJoint.prototype.EnableLimit = function (flag) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableLimit = flag;
   }
   b2PrismaticJoint.prototype.GetLowerLimit = function () {
      return this.m_lowerTranslation;
   }
   b2PrismaticJoint.prototype.GetUpperLimit = function () {
      return this.m_upperTranslation;
   }
   b2PrismaticJoint.prototype.SetLimits = function (lower, upper) {
      if (lower === undefined) lower = 0;
      if (upper === undefined) upper = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_lowerTranslation = lower;
      this.m_upperTranslation = upper;
   }
   b2PrismaticJoint.prototype.IsMotorEnabled = function () {
      return this.m_enableMotor;
   }
   b2PrismaticJoint.prototype.EnableMotor = function (flag) {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_enableMotor = flag;
   }
   b2PrismaticJoint.prototype.SetMotorSpeed = function (speed) {
      if (speed === undefined) speed = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_motorSpeed = speed;
   }
   b2PrismaticJoint.prototype.GetMotorSpeed = function () {
      return this.m_motorSpeed;
   }
   b2PrismaticJoint.prototype.SetMaxMotorForce = function (force) {
      if (force === undefined) force = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_maxMotorForce = force;
   }
   b2PrismaticJoint.prototype.GetMotorForce = function () {
      return this.m_motorImpulse;
   }
   b2PrismaticJoint.prototype.b2PrismaticJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      var tMat;
      var tX = 0;
      var tY = 0;
      this.m_localAnchor1.SetV(def.localAnchorA);
      this.m_localAnchor2.SetV(def.localAnchorB);
      this.m_localXAxis1.SetV(def.localAxisA);
      this.m_localYAxis1.x = (-this.m_localXAxis1.y);
      this.m_localYAxis1.y = this.m_localXAxis1.x;
      this.m_refAngle = def.referenceAngle;
      this.m_impulse.SetZero();
      this.m_motorMass = 0.0;
      this.m_motorImpulse = 0.0;
      this.m_lowerTranslation = def.lowerTranslation;
      this.m_upperTranslation = def.upperTranslation;
      this.m_maxMotorForce = def.maxMotorForce;
      this.m_motorSpeed = def.motorSpeed;
      this.m_enableLimit = def.enableLimit;
      this.m_enableMotor = def.enableMotor;
      this.m_limitState = this.e_inactiveLimit;
      this.m_axis.SetZero();
      this.m_perp.SetZero();
   }
   b2PrismaticJoint.prototype.InitVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var tX = 0;
      this.m_localCenterA.SetV(bA.GetLocalCenter());
      this.m_localCenterB.SetV(bB.GetLocalCenter());
      var xf1 = bA.GetTransform();
      var xf2 = bB.GetTransform();
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
      var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
      tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
      var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
      var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
      this.m_invMassA = bA.m_invMass;
      this.m_invMassB = bB.m_invMass;
      this.m_invIA = bA.m_invI;
      this.m_invIB = bB.m_invI; {
         this.m_axis.SetV(b2Math.MulMV(xf1.R, this.m_localXAxis1));
         this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
         this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
         this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
         if (this.m_motorMass > Number.MIN_VALUE) this.m_motorMass = 1.0 / this.m_motorMass;
      } {
         this.m_perp.SetV(b2Math.MulMV(xf1.R, this.m_localYAxis1));
         this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
         this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
         var m1 = this.m_invMassA;
         var m2 = this.m_invMassB;
         var i1 = this.m_invIA;
         var i2 = this.m_invIB;
         this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
         this.m_K.col1.y = i1 * this.m_s1 + i2 * this.m_s2;
         this.m_K.col1.z = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
         this.m_K.col2.x = this.m_K.col1.y;
         this.m_K.col2.y = i1 + i2;
         this.m_K.col2.z = i1 * this.m_a1 + i2 * this.m_a2;
         this.m_K.col3.x = this.m_K.col1.z;
         this.m_K.col3.y = this.m_K.col2.z;
         this.m_K.col3.z = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
      }
      if (this.m_enableLimit) {
         var jointTransition = this.m_axis.x * dX + this.m_axis.y * dY;
         if (b2Math.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * b2Settings.b2_linearSlop) {
            this.m_limitState = this.e_equalLimits;
         }
         else if (jointTransition <= this.m_lowerTranslation) {
            if (this.m_limitState != this.e_atLowerLimit) {
               this.m_limitState = this.e_atLowerLimit;
               this.m_impulse.z = 0.0;
            }
         }
         else if (jointTransition >= this.m_upperTranslation) {
            if (this.m_limitState != this.e_atUpperLimit) {
               this.m_limitState = this.e_atUpperLimit;
               this.m_impulse.z = 0.0;
            }
         }
         else {
            this.m_limitState = this.e_inactiveLimit;
            this.m_impulse.z = 0.0;
         }
      }
      else {
         this.m_limitState = this.e_inactiveLimit;
      }
      if (this.m_enableMotor == false) {
         this.m_motorImpulse = 0.0;
      }
      if (step.warmStarting) {
         this.m_impulse.x *= step.dtRatio;
         this.m_impulse.y *= step.dtRatio;
         this.m_motorImpulse *= step.dtRatio;
         var PX = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x;
         var PY = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y;
         var L1 = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
         var L2 = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
         bA.m_linearVelocity.x -= this.m_invMassA * PX;
         bA.m_linearVelocity.y -= this.m_invMassA * PY;
         bA.m_angularVelocity -= this.m_invIA * L1;
         bB.m_linearVelocity.x += this.m_invMassB * PX;
         bB.m_linearVelocity.y += this.m_invMassB * PY;
         bB.m_angularVelocity += this.m_invIB * L2;
      }
      else {
         this.m_impulse.SetZero();
         this.m_motorImpulse = 0.0;
      }
   }
   b2PrismaticJoint.prototype.SolveVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var v1 = bA.m_linearVelocity;
      var w1 = bA.m_angularVelocity;
      var v2 = bB.m_linearVelocity;
      var w2 = bB.m_angularVelocity;
      var PX = 0;
      var PY = 0;
      var L1 = 0;
      var L2 = 0;
      if (this.m_enableMotor && this.m_limitState != this.e_equalLimits) {
         var Cdot = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
         var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
         var oldImpulse = this.m_motorImpulse;
         var maxImpulse = step.dt * this.m_maxMotorForce;
         this.m_motorImpulse = b2Math.Clamp(this.m_motorImpulse + impulse, (-maxImpulse), maxImpulse);
         impulse = this.m_motorImpulse - oldImpulse;
         PX = impulse * this.m_axis.x;
         PY = impulse * this.m_axis.y;
         L1 = impulse * this.m_a1;
         L2 = impulse * this.m_a2;
         v1.x -= this.m_invMassA * PX;
         v1.y -= this.m_invMassA * PY;
         w1 -= this.m_invIA * L1;
         v2.x += this.m_invMassB * PX;
         v2.y += this.m_invMassB * PY;
         w2 += this.m_invIB * L2;
      }
      var Cdot1X = this.m_perp.x * (v2.x - v1.x) + this.m_perp.y * (v2.y - v1.y) + this.m_s2 * w2 - this.m_s1 * w1;
      var Cdot1Y = w2 - w1;
      if (this.m_enableLimit && this.m_limitState != this.e_inactiveLimit) {
         var Cdot2 = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
         var f1 = this.m_impulse.Copy();
         var df = this.m_K.Solve33(new b2Vec3(), (-Cdot1X), (-Cdot1Y), (-Cdot2));
         this.m_impulse.Add(df);
         if (this.m_limitState == this.e_atLowerLimit) {
            this.m_impulse.z = b2Math.Max(this.m_impulse.z, 0.0);
         }
         else if (this.m_limitState == this.e_atUpperLimit) {
            this.m_impulse.z = b2Math.Min(this.m_impulse.z, 0.0);
         }
         var bX = (-Cdot1X) - (this.m_impulse.z - f1.z) * this.m_K.col3.x;
         var bY = (-Cdot1Y) - (this.m_impulse.z - f1.z) * this.m_K.col3.y;
         var f2r = this.m_K.Solve22(new b2Vec2(), bX, bY);
         f2r.x += f1.x;
         f2r.y += f1.y;
         this.m_impulse.x = f2r.x;
         this.m_impulse.y = f2r.y;
         df.x = this.m_impulse.x - f1.x;
         df.y = this.m_impulse.y - f1.y;
         df.z = this.m_impulse.z - f1.z;
         PX = df.x * this.m_perp.x + df.z * this.m_axis.x;
         PY = df.x * this.m_perp.y + df.z * this.m_axis.y;
         L1 = df.x * this.m_s1 + df.y + df.z * this.m_a1;
         L2 = df.x * this.m_s2 + df.y + df.z * this.m_a2;
         v1.x -= this.m_invMassA * PX;
         v1.y -= this.m_invMassA * PY;
         w1 -= this.m_invIA * L1;
         v2.x += this.m_invMassB * PX;
         v2.y += this.m_invMassB * PY;
         w2 += this.m_invIB * L2;
      }
      else {
         var df2 = this.m_K.Solve22(new b2Vec2(), (-Cdot1X), (-Cdot1Y));
         this.m_impulse.x += df2.x;
         this.m_impulse.y += df2.y;
         PX = df2.x * this.m_perp.x;
         PY = df2.x * this.m_perp.y;
         L1 = df2.x * this.m_s1 + df2.y;
         L2 = df2.x * this.m_s2 + df2.y;
         v1.x -= this.m_invMassA * PX;
         v1.y -= this.m_invMassA * PY;
         w1 -= this.m_invIA * L1;
         v2.x += this.m_invMassB * PX;
         v2.y += this.m_invMassB * PY;
         w2 += this.m_invIB * L2;
      }
      bA.m_linearVelocity.SetV(v1);
      bA.m_angularVelocity = w1;
      bB.m_linearVelocity.SetV(v2);
      bB.m_angularVelocity = w2;
   }
   b2PrismaticJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var limitC = 0;
      var oldLimitImpulse = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var c1 = bA.m_sweep.c;
      var a1 = bA.m_sweep.a;
      var c2 = bB.m_sweep.c;
      var a2 = bB.m_sweep.a;
      var tMat;
      var tX = 0;
      var m1 = 0;
      var m2 = 0;
      var i1 = 0;
      var i2 = 0;
      var linearError = 0.0;
      var angularError = 0.0;
      var active = false;
      var C2 = 0.0;
      var R1 = b2Mat22.FromAngle(a1);
      var R2 = b2Mat22.FromAngle(a2);
      tMat = R1;
      var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
      var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
      tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = R2;
      var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
      var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var dX = c2.x + r2X - c1.x - r1X;
      var dY = c2.y + r2Y - c1.y - r1Y;
      if (this.m_enableLimit) {
         this.m_axis = b2Math.MulMV(R1, this.m_localXAxis1);
         this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
         this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
         var translation = this.m_axis.x * dX + this.m_axis.y * dY;
         if (b2Math.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * b2Settings.b2_linearSlop) {
            C2 = b2Math.Clamp(translation, (-b2Settings.b2_maxLinearCorrection), b2Settings.b2_maxLinearCorrection);
            linearError = b2Math.Abs(translation);
            active = true;
         }
         else if (translation <= this.m_lowerTranslation) {
            C2 = b2Math.Clamp(translation - this.m_lowerTranslation + b2Settings.b2_linearSlop, (-b2Settings.b2_maxLinearCorrection), 0.0);
            linearError = this.m_lowerTranslation - translation;
            active = true;
         }
         else if (translation >= this.m_upperTranslation) {
            C2 = b2Math.Clamp(translation - this.m_upperTranslation + b2Settings.b2_linearSlop, 0.0, b2Settings.b2_maxLinearCorrection);
            linearError = translation - this.m_upperTranslation;
            active = true;
         }
      }
      this.m_perp = b2Math.MulMV(R1, this.m_localYAxis1);
      this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
      this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
      var impulse = new b2Vec3();
      var C1X = this.m_perp.x * dX + this.m_perp.y * dY;
      var C1Y = a2 - a1 - this.m_refAngle;
      linearError = b2Math.Max(linearError, b2Math.Abs(C1X));
      angularError = b2Math.Abs(C1Y);
      if (active) {
         m1 = this.m_invMassA;
         m2 = this.m_invMassB;
         i1 = this.m_invIA;
         i2 = this.m_invIB;
         this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
         this.m_K.col1.y = i1 * this.m_s1 + i2 * this.m_s2;
         this.m_K.col1.z = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
         this.m_K.col2.x = this.m_K.col1.y;
         this.m_K.col2.y = i1 + i2;
         this.m_K.col2.z = i1 * this.m_a1 + i2 * this.m_a2;
         this.m_K.col3.x = this.m_K.col1.z;
         this.m_K.col3.y = this.m_K.col2.z;
         this.m_K.col3.z = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
         this.m_K.Solve33(impulse, (-C1X), (-C1Y), (-C2));
      }
      else {
         m1 = this.m_invMassA;
         m2 = this.m_invMassB;
         i1 = this.m_invIA;
         i2 = this.m_invIB;
         var k11 = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
         var k12 = i1 * this.m_s1 + i2 * this.m_s2;
         var k22 = i1 + i2;
         this.m_K.col1.Set(k11, k12, 0.0);
         this.m_K.col2.Set(k12, k22, 0.0);
         var impulse1 = this.m_K.Solve22(new b2Vec2(), (-C1X), (-C1Y));
         impulse.x = impulse1.x;
         impulse.y = impulse1.y;
         impulse.z = 0.0;
      }
      var PX = impulse.x * this.m_perp.x + impulse.z * this.m_axis.x;
      var PY = impulse.x * this.m_perp.y + impulse.z * this.m_axis.y;
      var L1 = impulse.x * this.m_s1 + impulse.y + impulse.z * this.m_a1;
      var L2 = impulse.x * this.m_s2 + impulse.y + impulse.z * this.m_a2;
      c1.x -= this.m_invMassA * PX;
      c1.y -= this.m_invMassA * PY;
      a1 -= this.m_invIA * L1;
      c2.x += this.m_invMassB * PX;
      c2.y += this.m_invMassB * PY;
      a2 += this.m_invIB * L2;
      bA.m_sweep.a = a1;
      bB.m_sweep.a = a2;
      bA.SynchronizeTransform();
      bB.SynchronizeTransform();
      return linearError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
   }
   b2PrismaticJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2PrismaticJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2PrismaticJointDef.b2PrismaticJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
      this.localAxisA = new b2Vec2();
   };
   b2PrismaticJointDef.prototype.b2PrismaticJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_prismaticJoint;
      this.localAxisA.Set(1.0, 0.0);
      this.referenceAngle = 0.0;
      this.enableLimit = false;
      this.lowerTranslation = 0.0;
      this.upperTranslation = 0.0;
      this.enableMotor = false;
      this.maxMotorForce = 0.0;
      this.motorSpeed = 0.0;
   }
   b2PrismaticJointDef.prototype.Initialize = function (bA, bB, anchor, axis) {
      this.bodyA = bA;
      this.bodyB = bB;
      this.localAnchorA = this.bodyA.GetLocalPoint(anchor);
      this.localAnchorB = this.bodyB.GetLocalPoint(anchor);
      this.localAxisA = this.bodyA.GetLocalVector(axis);
      this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
   }
   b2PulleyJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2PulleyJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2PulleyJoint.b2PulleyJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_groundAnchor1 = new b2Vec2();
      this.m_groundAnchor2 = new b2Vec2();
      this.m_localAnchor1 = new b2Vec2();
      this.m_localAnchor2 = new b2Vec2();
      this.m_u1 = new b2Vec2();
      this.m_u2 = new b2Vec2();
   };
   b2PulleyJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
   }
   b2PulleyJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
   }
   b2PulleyJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_impulse * this.m_u2.x, inv_dt * this.m_impulse * this.m_u2.y);
   }
   b2PulleyJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return 0.0;
   }
   b2PulleyJoint.prototype.GetGroundAnchorA = function () {
      var a = this.m_ground.m_xf.position.Copy();
      a.Add(this.m_groundAnchor1);
      return a;
   }
   b2PulleyJoint.prototype.GetGroundAnchorB = function () {
      var a = this.m_ground.m_xf.position.Copy();
      a.Add(this.m_groundAnchor2);
      return a;
   }
   b2PulleyJoint.prototype.GetLength1 = function () {
      var p = this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      var sX = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
      var sY = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
      var dX = p.x - sX;
      var dY = p.y - sY;
      return Math.sqrt(dX * dX + dY * dY);
   }
   b2PulleyJoint.prototype.GetLength2 = function () {
      var p = this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      var sX = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
      var sY = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
      var dX = p.x - sX;
      var dY = p.y - sY;
      return Math.sqrt(dX * dX + dY * dY);
   }
   b2PulleyJoint.prototype.GetRatio = function () {
      return this.m_ratio;
   }
   b2PulleyJoint.prototype.b2PulleyJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      var tMat;
      var tX = 0;
      var tY = 0;
      this.m_ground = this.m_bodyA.m_world.m_groundBody;
      this.m_groundAnchor1.x = def.groundAnchorA.x - this.m_ground.m_xf.position.x;
      this.m_groundAnchor1.y = def.groundAnchorA.y - this.m_ground.m_xf.position.y;
      this.m_groundAnchor2.x = def.groundAnchorB.x - this.m_ground.m_xf.position.x;
      this.m_groundAnchor2.y = def.groundAnchorB.y - this.m_ground.m_xf.position.y;
      this.m_localAnchor1.SetV(def.localAnchorA);
      this.m_localAnchor2.SetV(def.localAnchorB);
      this.m_ratio = def.ratio;
      this.m_constant = def.lengthA + this.m_ratio * def.lengthB;
      this.m_maxLength1 = b2Math.Min(def.maxLengthA, this.m_constant - this.m_ratio * b2PulleyJoint.b2_minPulleyLength);
      this.m_maxLength2 = b2Math.Min(def.maxLengthB, (this.m_constant - b2PulleyJoint.b2_minPulleyLength) / this.m_ratio);
      this.m_impulse = 0.0;
      this.m_limitImpulse1 = 0.0;
      this.m_limitImpulse2 = 0.0;
   }
   b2PulleyJoint.prototype.InitVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var p1X = bA.m_sweep.c.x + r1X;
      var p1Y = bA.m_sweep.c.y + r1Y;
      var p2X = bB.m_sweep.c.x + r2X;
      var p2Y = bB.m_sweep.c.y + r2Y;
      var s1X = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
      var s1Y = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
      var s2X = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
      var s2Y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
      this.m_u1.Set(p1X - s1X, p1Y - s1Y);
      this.m_u2.Set(p2X - s2X, p2Y - s2Y);
      var length1 = this.m_u1.Length();
      var length2 = this.m_u2.Length();
      if (length1 > b2Settings.b2_linearSlop) {
         this.m_u1.Multiply(1.0 / length1);
      }
      else {
         this.m_u1.SetZero();
      }
      if (length2 > b2Settings.b2_linearSlop) {
         this.m_u2.Multiply(1.0 / length2);
      }
      else {
         this.m_u2.SetZero();
      }
      var C = this.m_constant - length1 - this.m_ratio * length2;
      if (C > 0.0) {
         this.m_state = this.e_inactiveLimit;
         this.m_impulse = 0.0;
      }
      else {
         this.m_state = this.e_atUpperLimit;
      }
      if (length1 < this.m_maxLength1) {
         this.m_limitState1 = this.e_inactiveLimit;
         this.m_limitImpulse1 = 0.0;
      }
      else {
         this.m_limitState1 = this.e_atUpperLimit;
      }
      if (length2 < this.m_maxLength2) {
         this.m_limitState2 = this.e_inactiveLimit;
         this.m_limitImpulse2 = 0.0;
      }
      else {
         this.m_limitState2 = this.e_atUpperLimit;
      }
      var cr1u1 = r1X * this.m_u1.y - r1Y * this.m_u1.x;
      var cr2u2 = r2X * this.m_u2.y - r2Y * this.m_u2.x;
      this.m_limitMass1 = bA.m_invMass + bA.m_invI * cr1u1 * cr1u1;
      this.m_limitMass2 = bB.m_invMass + bB.m_invI * cr2u2 * cr2u2;
      this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
      this.m_limitMass1 = 1.0 / this.m_limitMass1;
      this.m_limitMass2 = 1.0 / this.m_limitMass2;
      this.m_pulleyMass = 1.0 / this.m_pulleyMass;
      if (step.warmStarting) {
         this.m_impulse *= step.dtRatio;
         this.m_limitImpulse1 *= step.dtRatio;
         this.m_limitImpulse2 *= step.dtRatio;
         var P1X = ((-this.m_impulse) - this.m_limitImpulse1) * this.m_u1.x;
         var P1Y = ((-this.m_impulse) - this.m_limitImpulse1) * this.m_u1.y;
         var P2X = ((-this.m_ratio * this.m_impulse) - this.m_limitImpulse2) * this.m_u2.x;
         var P2Y = ((-this.m_ratio * this.m_impulse) - this.m_limitImpulse2) * this.m_u2.y;
         bA.m_linearVelocity.x += bA.m_invMass * P1X;
         bA.m_linearVelocity.y += bA.m_invMass * P1Y;
         bA.m_angularVelocity += bA.m_invI * (r1X * P1Y - r1Y * P1X);
         bB.m_linearVelocity.x += bB.m_invMass * P2X;
         bB.m_linearVelocity.y += bB.m_invMass * P2Y;
         bB.m_angularVelocity += bB.m_invI * (r2X * P2Y - r2Y * P2X);
      }
      else {
         this.m_impulse = 0.0;
         this.m_limitImpulse1 = 0.0;
         this.m_limitImpulse2 = 0.0;
      }
   }
   b2PulleyJoint.prototype.SolveVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var v1X = 0;
      var v1Y = 0;
      var v2X = 0;
      var v2Y = 0;
      var P1X = 0;
      var P1Y = 0;
      var P2X = 0;
      var P2Y = 0;
      var Cdot = 0;
      var impulse = 0;
      var oldImpulse = 0;
      if (this.m_state == this.e_atUpperLimit) {
         v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
         v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
         v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
         v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
         Cdot = (-(this.m_u1.x * v1X + this.m_u1.y * v1Y)) - this.m_ratio * (this.m_u2.x * v2X + this.m_u2.y * v2Y);
         impulse = this.m_pulleyMass * ((-Cdot));
         oldImpulse = this.m_impulse;
         this.m_impulse = b2Math.Max(0.0, this.m_impulse + impulse);
         impulse = this.m_impulse - oldImpulse;
         P1X = (-impulse * this.m_u1.x);
         P1Y = (-impulse * this.m_u1.y);
         P2X = (-this.m_ratio * impulse * this.m_u2.x);
         P2Y = (-this.m_ratio * impulse * this.m_u2.y);
         bA.m_linearVelocity.x += bA.m_invMass * P1X;
         bA.m_linearVelocity.y += bA.m_invMass * P1Y;
         bA.m_angularVelocity += bA.m_invI * (r1X * P1Y - r1Y * P1X);
         bB.m_linearVelocity.x += bB.m_invMass * P2X;
         bB.m_linearVelocity.y += bB.m_invMass * P2Y;
         bB.m_angularVelocity += bB.m_invI * (r2X * P2Y - r2Y * P2X);
      }
      if (this.m_limitState1 == this.e_atUpperLimit) {
         v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
         v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
         Cdot = (-(this.m_u1.x * v1X + this.m_u1.y * v1Y));
         impulse = (-this.m_limitMass1 * Cdot);
         oldImpulse = this.m_limitImpulse1;
         this.m_limitImpulse1 = b2Math.Max(0.0, this.m_limitImpulse1 + impulse);
         impulse = this.m_limitImpulse1 - oldImpulse;
         P1X = (-impulse * this.m_u1.x);
         P1Y = (-impulse * this.m_u1.y);
         bA.m_linearVelocity.x += bA.m_invMass * P1X;
         bA.m_linearVelocity.y += bA.m_invMass * P1Y;
         bA.m_angularVelocity += bA.m_invI * (r1X * P1Y - r1Y * P1X);
      }
      if (this.m_limitState2 == this.e_atUpperLimit) {
         v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
         v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
         Cdot = (-(this.m_u2.x * v2X + this.m_u2.y * v2Y));
         impulse = (-this.m_limitMass2 * Cdot);
         oldImpulse = this.m_limitImpulse2;
         this.m_limitImpulse2 = b2Math.Max(0.0, this.m_limitImpulse2 + impulse);
         impulse = this.m_limitImpulse2 - oldImpulse;
         P2X = (-impulse * this.m_u2.x);
         P2Y = (-impulse * this.m_u2.y);
         bB.m_linearVelocity.x += bB.m_invMass * P2X;
         bB.m_linearVelocity.y += bB.m_invMass * P2Y;
         bB.m_angularVelocity += bB.m_invI * (r2X * P2Y - r2Y * P2X);
      }
   }
   b2PulleyJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var s1X = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
      var s1Y = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
      var s2X = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
      var s2Y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
      var r1X = 0;
      var r1Y = 0;
      var r2X = 0;
      var r2Y = 0;
      var p1X = 0;
      var p1Y = 0;
      var p2X = 0;
      var p2Y = 0;
      var length1 = 0;
      var length2 = 0;
      var C = 0;
      var impulse = 0;
      var oldImpulse = 0;
      var oldLimitPositionImpulse = 0;
      var tX = 0;
      var linearError = 0.0;
      if (this.m_state == this.e_atUpperLimit) {
         tMat = bA.m_xf.R;
         r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
         r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
         r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
         r1X = tX;
         tMat = bB.m_xf.R;
         r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
         r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
         r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
         r2X = tX;
         p1X = bA.m_sweep.c.x + r1X;
         p1Y = bA.m_sweep.c.y + r1Y;
         p2X = bB.m_sweep.c.x + r2X;
         p2Y = bB.m_sweep.c.y + r2Y;
         this.m_u1.Set(p1X - s1X, p1Y - s1Y);
         this.m_u2.Set(p2X - s2X, p2Y - s2Y);
         length1 = this.m_u1.Length();
         length2 = this.m_u2.Length();
         if (length1 > b2Settings.b2_linearSlop) {
            this.m_u1.Multiply(1.0 / length1);
         }
         else {
            this.m_u1.SetZero();
         }
         if (length2 > b2Settings.b2_linearSlop) {
            this.m_u2.Multiply(1.0 / length2);
         }
         else {
            this.m_u2.SetZero();
         }
         C = this.m_constant - length1 - this.m_ratio * length2;
         linearError = b2Math.Max(linearError, (-C));
         C = b2Math.Clamp(C + b2Settings.b2_linearSlop, (-b2Settings.b2_maxLinearCorrection), 0.0);
         impulse = (-this.m_pulleyMass * C);
         p1X = (-impulse * this.m_u1.x);
         p1Y = (-impulse * this.m_u1.y);
         p2X = (-this.m_ratio * impulse * this.m_u2.x);
         p2Y = (-this.m_ratio * impulse * this.m_u2.y);
         bA.m_sweep.c.x += bA.m_invMass * p1X;
         bA.m_sweep.c.y += bA.m_invMass * p1Y;
         bA.m_sweep.a += bA.m_invI * (r1X * p1Y - r1Y * p1X);
         bB.m_sweep.c.x += bB.m_invMass * p2X;
         bB.m_sweep.c.y += bB.m_invMass * p2Y;
         bB.m_sweep.a += bB.m_invI * (r2X * p2Y - r2Y * p2X);
         bA.SynchronizeTransform();
         bB.SynchronizeTransform();
      }
      if (this.m_limitState1 == this.e_atUpperLimit) {
         tMat = bA.m_xf.R;
         r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
         r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
         r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
         r1X = tX;
         p1X = bA.m_sweep.c.x + r1X;
         p1Y = bA.m_sweep.c.y + r1Y;
         this.m_u1.Set(p1X - s1X, p1Y - s1Y);
         length1 = this.m_u1.Length();
         if (length1 > b2Settings.b2_linearSlop) {
            this.m_u1.x *= 1.0 / length1;
            this.m_u1.y *= 1.0 / length1;
         }
         else {
            this.m_u1.SetZero();
         }
         C = this.m_maxLength1 - length1;
         linearError = b2Math.Max(linearError, (-C));
         C = b2Math.Clamp(C + b2Settings.b2_linearSlop, (-b2Settings.b2_maxLinearCorrection), 0.0);
         impulse = (-this.m_limitMass1 * C);
         p1X = (-impulse * this.m_u1.x);
         p1Y = (-impulse * this.m_u1.y);
         bA.m_sweep.c.x += bA.m_invMass * p1X;
         bA.m_sweep.c.y += bA.m_invMass * p1Y;
         bA.m_sweep.a += bA.m_invI * (r1X * p1Y - r1Y * p1X);
         bA.SynchronizeTransform();
      }
      if (this.m_limitState2 == this.e_atUpperLimit) {
         tMat = bB.m_xf.R;
         r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
         r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
         r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
         r2X = tX;
         p2X = bB.m_sweep.c.x + r2X;
         p2Y = bB.m_sweep.c.y + r2Y;
         this.m_u2.Set(p2X - s2X, p2Y - s2Y);
         length2 = this.m_u2.Length();
         if (length2 > b2Settings.b2_linearSlop) {
            this.m_u2.x *= 1.0 / length2;
            this.m_u2.y *= 1.0 / length2;
         }
         else {
            this.m_u2.SetZero();
         }
         C = this.m_maxLength2 - length2;
         linearError = b2Math.Max(linearError, (-C));
         C = b2Math.Clamp(C + b2Settings.b2_linearSlop, (-b2Settings.b2_maxLinearCorrection), 0.0);
         impulse = (-this.m_limitMass2 * C);
         p2X = (-impulse * this.m_u2.x);
         p2Y = (-impulse * this.m_u2.y);
         bB.m_sweep.c.x += bB.m_invMass * p2X;
         bB.m_sweep.c.y += bB.m_invMass * p2Y;
         bB.m_sweep.a += bB.m_invI * (r2X * p2Y - r2Y * p2X);
         bB.SynchronizeTransform();
      }
      return linearError < b2Settings.b2_linearSlop;
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2.0;
      Box2D.Dynamics.Joints.b2PulleyJoint.prototype.b2_minPulleyLength = Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength;
   });
   b2PulleyJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2PulleyJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2PulleyJointDef.b2PulleyJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.groundAnchorA = new b2Vec2();
      this.groundAnchorB = new b2Vec2();
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
   };
   b2PulleyJointDef.prototype.b2PulleyJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_pulleyJoint;
      this.groundAnchorA.Set((-1.0), 1.0);
      this.groundAnchorB.Set(1.0, 1.0);
      this.localAnchorA.Set((-1.0), 0.0);
      this.localAnchorB.Set(1.0, 0.0);
      this.lengthA = 0.0;
      this.maxLengthA = 0.0;
      this.lengthB = 0.0;
      this.maxLengthB = 0.0;
      this.ratio = 1.0;
      this.collideConnected = true;
   }
   b2PulleyJointDef.prototype.Initialize = function (bA, bB, gaA, gaB, anchorA, anchorB, r) {
      if (r === undefined) r = 0;
      this.bodyA = bA;
      this.bodyB = bB;
      this.groundAnchorA.SetV(gaA);
      this.groundAnchorB.SetV(gaB);
      this.localAnchorA = this.bodyA.GetLocalPoint(anchorA);
      this.localAnchorB = this.bodyB.GetLocalPoint(anchorB);
      var d1X = anchorA.x - gaA.x;
      var d1Y = anchorA.y - gaA.y;
      this.lengthA = Math.sqrt(d1X * d1X + d1Y * d1Y);
      var d2X = anchorB.x - gaB.x;
      var d2Y = anchorB.y - gaB.y;
      this.lengthB = Math.sqrt(d2X * d2X + d2Y * d2Y);
      this.ratio = r;
      var C = this.lengthA + this.ratio * this.lengthB;
      this.maxLengthA = C - this.ratio * b2PulleyJoint.b2_minPulleyLength;
      this.maxLengthB = (C - b2PulleyJoint.b2_minPulleyLength) / this.ratio;
   }
   b2RevoluteJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2RevoluteJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2RevoluteJoint.b2RevoluteJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.K = new b2Mat22();
      this.K1 = new b2Mat22();
      this.K2 = new b2Mat22();
      this.K3 = new b2Mat22();
      this.impulse3 = new b2Vec3();
      this.impulse2 = new b2Vec2();
      this.reduced = new b2Vec2();
      this.m_localAnchor1 = new b2Vec2();
      this.m_localAnchor2 = new b2Vec2();
      this.m_impulse = new b2Vec3();
      this.m_mass = new b2Mat33();
   };
   b2RevoluteJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
   }
   b2RevoluteJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
   }
   b2RevoluteJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
   }
   b2RevoluteJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return inv_dt * this.m_impulse.z;
   }
   b2RevoluteJoint.prototype.GetJointAngle = function () {
      return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
   }
   b2RevoluteJoint.prototype.GetJointSpeed = function () {
      return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
   }
   b2RevoluteJoint.prototype.IsLimitEnabled = function () {
      return this.m_enableLimit;
   }
   b2RevoluteJoint.prototype.EnableLimit = function (flag) {
      this.m_enableLimit = flag;
   }
   b2RevoluteJoint.prototype.GetLowerLimit = function () {
      return this.m_lowerAngle;
   }
   b2RevoluteJoint.prototype.GetUpperLimit = function () {
      return this.m_upperAngle;
   }
   b2RevoluteJoint.prototype.SetLimits = function (lower, upper) {
      if (lower === undefined) lower = 0;
      if (upper === undefined) upper = 0;
      this.m_lowerAngle = lower;
      this.m_upperAngle = upper;
   }
   b2RevoluteJoint.prototype.IsMotorEnabled = function () {
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      return this.m_enableMotor;
   }
   b2RevoluteJoint.prototype.EnableMotor = function (flag) {
      this.m_enableMotor = flag;
   }
   b2RevoluteJoint.prototype.SetMotorSpeed = function (speed) {
      if (speed === undefined) speed = 0;
      this.m_bodyA.SetAwake(true);
      this.m_bodyB.SetAwake(true);
      this.m_motorSpeed = speed;
   }
   b2RevoluteJoint.prototype.GetMotorSpeed = function () {
      return this.m_motorSpeed;
   }
   b2RevoluteJoint.prototype.SetMaxMotorTorque = function (torque) {
      if (torque === undefined) torque = 0;
      this.m_maxMotorTorque = torque;
   }
   b2RevoluteJoint.prototype.GetMotorTorque = function () {
      return this.m_maxMotorTorque;
   }
   b2RevoluteJoint.prototype.b2RevoluteJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      this.m_localAnchor1.SetV(def.localAnchorA);
      this.m_localAnchor2.SetV(def.localAnchorB);
      this.m_referenceAngle = def.referenceAngle;
      this.m_impulse.SetZero();
      this.m_motorImpulse = 0.0;
      this.m_lowerAngle = def.lowerAngle;
      this.m_upperAngle = def.upperAngle;
      this.m_maxMotorTorque = def.maxMotorTorque;
      this.m_motorSpeed = def.motorSpeed;
      this.m_enableLimit = def.enableLimit;
      this.m_enableMotor = def.enableMotor;
      this.m_limitState = this.e_inactiveLimit;
   }
   b2RevoluteJoint.prototype.InitVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var tX = 0;
      if (this.m_enableMotor || this.m_enableLimit) {}
      tMat = bA.m_xf.R;
      var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
      var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
      r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
      r1X = tX;
      tMat = bB.m_xf.R;
      var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
      var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
      r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
      r2X = tX;
      var m1 = bA.m_invMass;
      var m2 = bB.m_invMass;
      var i1 = bA.m_invI;
      var i2 = bB.m_invI;
      this.m_mass.col1.x = m1 + m2 + r1Y * r1Y * i1 + r2Y * r2Y * i2;
      this.m_mass.col2.x = (-r1Y * r1X * i1) - r2Y * r2X * i2;
      this.m_mass.col3.x = (-r1Y * i1) - r2Y * i2;
      this.m_mass.col1.y = this.m_mass.col2.x;
      this.m_mass.col2.y = m1 + m2 + r1X * r1X * i1 + r2X * r2X * i2;
      this.m_mass.col3.y = r1X * i1 + r2X * i2;
      this.m_mass.col1.z = this.m_mass.col3.x;
      this.m_mass.col2.z = this.m_mass.col3.y;
      this.m_mass.col3.z = i1 + i2;
      this.m_motorMass = 1.0 / (i1 + i2);
      if (this.m_enableMotor == false) {
         this.m_motorImpulse = 0.0;
      }
      if (this.m_enableLimit) {
         var jointAngle = bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
         if (b2Math.Abs(this.m_upperAngle - this.m_lowerAngle) < 2.0 * b2Settings.b2_angularSlop) {
            this.m_limitState = this.e_equalLimits;
         }
         else if (jointAngle <= this.m_lowerAngle) {
            if (this.m_limitState != this.e_atLowerLimit) {
               this.m_impulse.z = 0.0;
            }
            this.m_limitState = this.e_atLowerLimit;
         }
         else if (jointAngle >= this.m_upperAngle) {
            if (this.m_limitState != this.e_atUpperLimit) {
               this.m_impulse.z = 0.0;
            }
            this.m_limitState = this.e_atUpperLimit;
         }
         else {
            this.m_limitState = this.e_inactiveLimit;
            this.m_impulse.z = 0.0;
         }
      }
      else {
         this.m_limitState = this.e_inactiveLimit;
      }
      if (step.warmStarting) {
         this.m_impulse.x *= step.dtRatio;
         this.m_impulse.y *= step.dtRatio;
         this.m_motorImpulse *= step.dtRatio;
         var PX = this.m_impulse.x;
         var PY = this.m_impulse.y;
         bA.m_linearVelocity.x -= m1 * PX;
         bA.m_linearVelocity.y -= m1 * PY;
         bA.m_angularVelocity -= i1 * ((r1X * PY - r1Y * PX) + this.m_motorImpulse + this.m_impulse.z);
         bB.m_linearVelocity.x += m2 * PX;
         bB.m_linearVelocity.y += m2 * PY;
         bB.m_angularVelocity += i2 * ((r2X * PY - r2Y * PX) + this.m_motorImpulse + this.m_impulse.z);
      }
      else {
         this.m_impulse.SetZero();
         this.m_motorImpulse = 0.0;
      }
   }
   b2RevoluteJoint.prototype.SolveVelocityConstraints = function (step) {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var tMat;
      var tX = 0;
      var newImpulse = 0;
      var r1X = 0;
      var r1Y = 0;
      var r2X = 0;
      var r2Y = 0;
      var v1 = bA.m_linearVelocity;
      var w1 = bA.m_angularVelocity;
      var v2 = bB.m_linearVelocity;
      var w2 = bB.m_angularVelocity;
      var m1 = bA.m_invMass;
      var m2 = bB.m_invMass;
      var i1 = bA.m_invI;
      var i2 = bB.m_invI;
      if (this.m_enableMotor && this.m_limitState != this.e_equalLimits) {
         var Cdot = w2 - w1 - this.m_motorSpeed;
         var impulse = this.m_motorMass * ((-Cdot));
         var oldImpulse = this.m_motorImpulse;
         var maxImpulse = step.dt * this.m_maxMotorTorque;
         this.m_motorImpulse = b2Math.Clamp(this.m_motorImpulse + impulse, (-maxImpulse), maxImpulse);
         impulse = this.m_motorImpulse - oldImpulse;
         w1 -= i1 * impulse;
         w2 += i2 * impulse;
      }
      if (this.m_enableLimit && this.m_limitState != this.e_inactiveLimit) {
         tMat = bA.m_xf.R;
         r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
         r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
         r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
         r1X = tX;
         tMat = bB.m_xf.R;
         r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
         r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
         r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
         r2X = tX;
         var Cdot1X = v2.x + ((-w2 * r2Y)) - v1.x - ((-w1 * r1Y));
         var Cdot1Y = v2.y + (w2 * r2X) - v1.y - (w1 * r1X);
         var Cdot2 = w2 - w1;
         this.m_mass.Solve33(this.impulse3, (-Cdot1X), (-Cdot1Y), (-Cdot2));
         if (this.m_limitState == this.e_equalLimits) {
            this.m_impulse.Add(this.impulse3);
         }
         else if (this.m_limitState == this.e_atLowerLimit) {
            newImpulse = this.m_impulse.z + this.impulse3.z;
            if (newImpulse < 0.0) {
               this.m_mass.Solve22(this.reduced, (-Cdot1X), (-Cdot1Y));
               this.impulse3.x = this.reduced.x;
               this.impulse3.y = this.reduced.y;
               this.impulse3.z = (-this.m_impulse.z);
               this.m_impulse.x += this.reduced.x;
               this.m_impulse.y += this.reduced.y;
               this.m_impulse.z = 0.0;
            }
         }
         else if (this.m_limitState == this.e_atUpperLimit) {
            newImpulse = this.m_impulse.z + this.impulse3.z;
            if (newImpulse > 0.0) {
               this.m_mass.Solve22(this.reduced, (-Cdot1X), (-Cdot1Y));
               this.impulse3.x = this.reduced.x;
               this.impulse3.y = this.reduced.y;
               this.impulse3.z = (-this.m_impulse.z);
               this.m_impulse.x += this.reduced.x;
               this.m_impulse.y += this.reduced.y;
               this.m_impulse.z = 0.0;
            }
         }
         v1.x -= m1 * this.impulse3.x;
         v1.y -= m1 * this.impulse3.y;
         w1 -= i1 * (r1X * this.impulse3.y - r1Y * this.impulse3.x + this.impulse3.z);
         v2.x += m2 * this.impulse3.x;
         v2.y += m2 * this.impulse3.y;
         w2 += i2 * (r2X * this.impulse3.y - r2Y * this.impulse3.x + this.impulse3.z);
      }
      else {
         tMat = bA.m_xf.R;
         r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
         r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
         r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
         r1X = tX;
         tMat = bB.m_xf.R;
         r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
         r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
         r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
         r2X = tX;
         var CdotX = v2.x + ((-w2 * r2Y)) - v1.x - ((-w1 * r1Y));
         var CdotY = v2.y + (w2 * r2X) - v1.y - (w1 * r1X);
         this.m_mass.Solve22(this.impulse2, (-CdotX), (-CdotY));
         this.m_impulse.x += this.impulse2.x;
         this.m_impulse.y += this.impulse2.y;
         v1.x -= m1 * this.impulse2.x;
         v1.y -= m1 * this.impulse2.y;
         w1 -= i1 * (r1X * this.impulse2.y - r1Y * this.impulse2.x);
         v2.x += m2 * this.impulse2.x;
         v2.y += m2 * this.impulse2.y;
         w2 += i2 * (r2X * this.impulse2.y - r2Y * this.impulse2.x);
      }
      bA.m_linearVelocity.SetV(v1);
      bA.m_angularVelocity = w1;
      bB.m_linearVelocity.SetV(v2);
      bB.m_angularVelocity = w2;
   }
   b2RevoluteJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var oldLimitImpulse = 0;
      var C = 0;
      var tMat;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var angularError = 0.0;
      var positionError = 0.0;
      var tX = 0;
      var impulseX = 0;
      var impulseY = 0;
      if (this.m_enableLimit && this.m_limitState != this.e_inactiveLimit) {
         var angle = bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
         var limitImpulse = 0.0;
         if (this.m_limitState == this.e_equalLimits) {
            C = b2Math.Clamp(angle - this.m_lowerAngle, (-b2Settings.b2_maxAngularCorrection), b2Settings.b2_maxAngularCorrection);
            limitImpulse = (-this.m_motorMass * C);
            angularError = b2Math.Abs(C);
         }
         else if (this.m_limitState == this.e_atLowerLimit) {
            C = angle - this.m_lowerAngle;
            angularError = (-C);
            C = b2Math.Clamp(C + b2Settings.b2_angularSlop, (-b2Settings.b2_maxAngularCorrection), 0.0);
            limitImpulse = (-this.m_motorMass * C);
         }
         else if (this.m_limitState == this.e_atUpperLimit) {
            C = angle - this.m_upperAngle;
            angularError = C;
            C = b2Math.Clamp(C - b2Settings.b2_angularSlop, 0.0, b2Settings.b2_maxAngularCorrection);
            limitImpulse = (-this.m_motorMass * C);
         }
         bA.m_sweep.a -= bA.m_invI * limitImpulse;
         bB.m_sweep.a += bB.m_invI * limitImpulse;
         bA.SynchronizeTransform();
         bB.SynchronizeTransform();
      } {
         tMat = bA.m_xf.R;
         var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
         var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
         r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
         r1X = tX;
         tMat = bB.m_xf.R;
         var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
         var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
         tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
         r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
         r2X = tX;
         var CX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
         var CY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
         var CLengthSquared = CX * CX + CY * CY;
         var CLength = Math.sqrt(CLengthSquared);
         positionError = CLength;
         var invMass1 = bA.m_invMass;
         var invMass2 = bB.m_invMass;
         var invI1 = bA.m_invI;
         var invI2 = bB.m_invI;
         var k_allowedStretch = 10.0 * b2Settings.b2_linearSlop;
         if (CLengthSquared > k_allowedStretch * k_allowedStretch) {
            var uX = CX / CLength;
            var uY = CY / CLength;
            var k = invMass1 + invMass2;
            var m = 1.0 / k;
            impulseX = m * ((-CX));
            impulseY = m * ((-CY));
            var k_beta = 0.5;
            bA.m_sweep.c.x -= k_beta * invMass1 * impulseX;
            bA.m_sweep.c.y -= k_beta * invMass1 * impulseY;
            bB.m_sweep.c.x += k_beta * invMass2 * impulseX;
            bB.m_sweep.c.y += k_beta * invMass2 * impulseY;
            CX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
            CY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
         }
         this.K1.col1.x = invMass1 + invMass2;
         this.K1.col2.x = 0.0;
         this.K1.col1.y = 0.0;
         this.K1.col2.y = invMass1 + invMass2;
         this.K2.col1.x = invI1 * r1Y * r1Y;
         this.K2.col2.x = (-invI1 * r1X * r1Y);
         this.K2.col1.y = (-invI1 * r1X * r1Y);
         this.K2.col2.y = invI1 * r1X * r1X;
         this.K3.col1.x = invI2 * r2Y * r2Y;
         this.K3.col2.x = (-invI2 * r2X * r2Y);
         this.K3.col1.y = (-invI2 * r2X * r2Y);
         this.K3.col2.y = invI2 * r2X * r2X;
         this.K.SetM(this.K1);
         this.K.AddM(this.K2);
         this.K.AddM(this.K3);
         this.K.Solve(b2RevoluteJoint.tImpulse, (-CX), (-CY));
         impulseX = b2RevoluteJoint.tImpulse.x;
         impulseY = b2RevoluteJoint.tImpulse.y;
         bA.m_sweep.c.x -= bA.m_invMass * impulseX;
         bA.m_sweep.c.y -= bA.m_invMass * impulseY;
         bA.m_sweep.a -= bA.m_invI * (r1X * impulseY - r1Y * impulseX);
         bB.m_sweep.c.x += bB.m_invMass * impulseX;
         bB.m_sweep.c.y += bB.m_invMass * impulseY;
         bB.m_sweep.a += bB.m_invI * (r2X * impulseY - r2Y * impulseX);
         bA.SynchronizeTransform();
         bB.SynchronizeTransform();
      }
      return positionError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
   }
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new b2Vec2();
      Box2D.Dynamics.Joints.b2RevoluteJoint.prototype.tImpulse = Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse;
   });
   b2RevoluteJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2RevoluteJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2RevoluteJointDef.b2RevoluteJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
   };
   b2RevoluteJointDef.prototype.b2RevoluteJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_revoluteJoint;
      this.localAnchorA.Set(0.0, 0.0);
      this.localAnchorB.Set(0.0, 0.0);
      this.referenceAngle = 0.0;
      this.lowerAngle = 0.0;
      this.upperAngle = 0.0;
      this.maxMotorTorque = 0.0;
      this.motorSpeed = 0.0;
      this.enableLimit = false;
      this.enableMotor = false;
   }
   b2RevoluteJointDef.prototype.Initialize = function (bA, bB, anchor) {
      this.bodyA = bA;
      this.bodyB = bB;
      this.localAnchorA = this.bodyA.GetLocalPoint(anchor);
      this.localAnchorB = this.bodyB.GetLocalPoint(anchor);
      this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
   }
   b2WeldJoint.inherit(Box2D.Dynamics.Joints.b2Joint);
   b2WeldJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
   b2WeldJoint.b2WeldJoint = function () {
      Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchorA = new b2Vec2();
      this.m_localAnchorB = new b2Vec2();
      this.m_impulse = new b2Vec3();
      this.m_mass = new b2Mat33();
   };
   b2WeldJoint.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
   }
   b2WeldJoint.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
   }
   b2WeldJoint.prototype.GetReactionForce = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return new b2Vec2(inv_dt * this.m_impulse.x, inv_dt * this.m_impulse.y);
   }
   b2WeldJoint.prototype.GetReactionTorque = function (inv_dt) {
      if (inv_dt === undefined) inv_dt = 0;
      return inv_dt * this.m_impulse.z;
   }
   b2WeldJoint.prototype.b2WeldJoint = function (def) {
      this.__super.b2Joint.call(this, def);
      this.m_localAnchorA.SetV(def.localAnchorA);
      this.m_localAnchorB.SetV(def.localAnchorB);
      this.m_referenceAngle = def.referenceAngle;
      this.m_impulse.SetZero();
      this.m_mass = new b2Mat33();
   }
   b2WeldJoint.prototype.InitVelocityConstraints = function (step) {
      var tMat;
      var tX = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      tMat = bA.m_xf.R;
      var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
      var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rAX + tMat.col2.x * rAY);
      rAY = (tMat.col1.y * rAX + tMat.col2.y * rAY);
      rAX = tX;
      tMat = bB.m_xf.R;
      var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
      var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rBX + tMat.col2.x * rBY);
      rBY = (tMat.col1.y * rBX + tMat.col2.y * rBY);
      rBX = tX;
      var mA = bA.m_invMass;
      var mB = bB.m_invMass;
      var iA = bA.m_invI;
      var iB = bB.m_invI;
      this.m_mass.col1.x = mA + mB + rAY * rAY * iA + rBY * rBY * iB;
      this.m_mass.col2.x = (-rAY * rAX * iA) - rBY * rBX * iB;
      this.m_mass.col3.x = (-rAY * iA) - rBY * iB;
      this.m_mass.col1.y = this.m_mass.col2.x;
      this.m_mass.col2.y = mA + mB + rAX * rAX * iA + rBX * rBX * iB;
      this.m_mass.col3.y = rAX * iA + rBX * iB;
      this.m_mass.col1.z = this.m_mass.col3.x;
      this.m_mass.col2.z = this.m_mass.col3.y;
      this.m_mass.col3.z = iA + iB;
      if (step.warmStarting) {
         this.m_impulse.x *= step.dtRatio;
         this.m_impulse.y *= step.dtRatio;
         this.m_impulse.z *= step.dtRatio;
         bA.m_linearVelocity.x -= mA * this.m_impulse.x;
         bA.m_linearVelocity.y -= mA * this.m_impulse.y;
         bA.m_angularVelocity -= iA * (rAX * this.m_impulse.y - rAY * this.m_impulse.x + this.m_impulse.z);
         bB.m_linearVelocity.x += mB * this.m_impulse.x;
         bB.m_linearVelocity.y += mB * this.m_impulse.y;
         bB.m_angularVelocity += iB * (rBX * this.m_impulse.y - rBY * this.m_impulse.x + this.m_impulse.z);
      }
      else {
         this.m_impulse.SetZero();
      }
   }
   b2WeldJoint.prototype.SolveVelocityConstraints = function (step) {
      var tMat;
      var tX = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var vA = bA.m_linearVelocity;
      var wA = bA.m_angularVelocity;
      var vB = bB.m_linearVelocity;
      var wB = bB.m_angularVelocity;
      var mA = bA.m_invMass;
      var mB = bB.m_invMass;
      var iA = bA.m_invI;
      var iB = bB.m_invI;
      tMat = bA.m_xf.R;
      var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
      var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rAX + tMat.col2.x * rAY);
      rAY = (tMat.col1.y * rAX + tMat.col2.y * rAY);
      rAX = tX;
      tMat = bB.m_xf.R;
      var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
      var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rBX + tMat.col2.x * rBY);
      rBY = (tMat.col1.y * rBX + tMat.col2.y * rBY);
      rBX = tX;
      var Cdot1X = vB.x - wB * rBY - vA.x + wA * rAY;
      var Cdot1Y = vB.y + wB * rBX - vA.y - wA * rAX;
      var Cdot2 = wB - wA;
      var impulse = new b2Vec3();
      this.m_mass.Solve33(impulse, (-Cdot1X), (-Cdot1Y), (-Cdot2));
      this.m_impulse.Add(impulse);
      vA.x -= mA * impulse.x;
      vA.y -= mA * impulse.y;
      wA -= iA * (rAX * impulse.y - rAY * impulse.x + impulse.z);
      vB.x += mB * impulse.x;
      vB.y += mB * impulse.y;
      wB += iB * (rBX * impulse.y - rBY * impulse.x + impulse.z);
      bA.m_angularVelocity = wA;
      bB.m_angularVelocity = wB;
   }
   b2WeldJoint.prototype.SolvePositionConstraints = function (baumgarte) {
      if (baumgarte === undefined) baumgarte = 0;
      var tMat;
      var tX = 0;
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      tMat = bA.m_xf.R;
      var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
      var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rAX + tMat.col2.x * rAY);
      rAY = (tMat.col1.y * rAX + tMat.col2.y * rAY);
      rAX = tX;
      tMat = bB.m_xf.R;
      var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
      var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
      tX = (tMat.col1.x * rBX + tMat.col2.x * rBY);
      rBY = (tMat.col1.y * rBX + tMat.col2.y * rBY);
      rBX = tX;
      var mA = bA.m_invMass;
      var mB = bB.m_invMass;
      var iA = bA.m_invI;
      var iB = bB.m_invI;
      var C1X = bB.m_sweep.c.x + rBX - bA.m_sweep.c.x - rAX;
      var C1Y = bB.m_sweep.c.y + rBY - bA.m_sweep.c.y - rAY;
      var C2 = bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
      var k_allowedStretch = 10.0 * b2Settings.b2_linearSlop;
      var positionError = Math.sqrt(C1X * C1X + C1Y * C1Y);
      var angularError = b2Math.Abs(C2);
      if (positionError > k_allowedStretch) {
         iA *= 1.0;
         iB *= 1.0;
      }
      this.m_mass.col1.x = mA + mB + rAY * rAY * iA + rBY * rBY * iB;
      this.m_mass.col2.x = (-rAY * rAX * iA) - rBY * rBX * iB;
      this.m_mass.col3.x = (-rAY * iA) - rBY * iB;
      this.m_mass.col1.y = this.m_mass.col2.x;
      this.m_mass.col2.y = mA + mB + rAX * rAX * iA + rBX * rBX * iB;
      this.m_mass.col3.y = rAX * iA + rBX * iB;
      this.m_mass.col1.z = this.m_mass.col3.x;
      this.m_mass.col2.z = this.m_mass.col3.y;
      this.m_mass.col3.z = iA + iB;
      var impulse = new b2Vec3();
      this.m_mass.Solve33(impulse, (-C1X), (-C1Y), (-C2));
      bA.m_sweep.c.x -= mA * impulse.x;
      bA.m_sweep.c.y -= mA * impulse.y;
      bA.m_sweep.a -= iA * (rAX * impulse.y - rAY * impulse.x + impulse.z);
      bB.m_sweep.c.x += mB * impulse.x;
      bB.m_sweep.c.y += mB * impulse.y;
      bB.m_sweep.a += iB * (rBX * impulse.y - rBY * impulse.x + impulse.z);
      bA.SynchronizeTransform();
      bB.SynchronizeTransform();
      return positionError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
   }
   b2WeldJointDef.inherit(Box2D.Dynamics.Joints.b2JointDef);
   b2WeldJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
   b2WeldJointDef.b2WeldJointDef = function () {
      Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new b2Vec2();
      this.localAnchorB = new b2Vec2();
   };
   b2WeldJointDef.prototype.b2WeldJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = b2Joint.e_weldJoint;
      this.referenceAngle = 0.0;
   }
   b2WeldJointDef.prototype.Initialize = function (bA, bB, anchor) {
      this.bodyA = bA;
      this.bodyB = bB;
      this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchor));
      this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchor));
      this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
   }
})();
var Vector_a2j_Number = a2j.NVector;
//post-definitions
for (var i = 0; i < _A2J_postDefs.length; ++i) _A2J_postDefs[i]();(function() {
   function b2DebugDraw() {
      b2DebugDraw.b2DebugDraw.apply(this, arguments);
      if (this.constructor === b2DebugDraw) this.b2DebugDraw.apply(this, arguments);
   }
   Box2D.Dynamics.b2DebugDraw = b2DebugDraw;
})();
_A2J_postDefs = [];
(function() {
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
   b2DebugDraw.b2DebugDraw = function () {
      this.m_drawScale = 1.0;
      this.m_lineThickness = 1.0;
      this.m_alpha = 1.0;
      this.m_fillAlpha = 1.0;
      this.m_xformScale = 1.0;
      var __this = this;
      //#WORKAROUND
      this.m_sprite = {graphics: {clear:
         function() {__this.m_ctx.clearRect(0,0,__this.m_ctx.canvas.width,__this.m_ctx.canvas.height)}
      }};
   };
   b2DebugDraw.prototype._color = function(color, alpha) {
      return "rgba("+ ((color & 0xFF0000) >> 16) +","+ ((color & 0xFF00) >> 8) +","+
         (color & 0xFF) +","+ alpha +")";
   };
   b2DebugDraw.prototype.b2DebugDraw = function () {
      this.m_drawFlags = 0;
   };
   b2DebugDraw.prototype.SetFlags = function (flags) {
      if (flags === undefined) flags = 0;
      this.m_drawFlags = flags;
   };
   b2DebugDraw.prototype.GetFlags = function () {
      return this.m_drawFlags;
   };
   b2DebugDraw.prototype.AppendFlags = function (flags) {
      if (flags === undefined) flags = 0;
      this.m_drawFlags |= flags;
   };
   b2DebugDraw.prototype.ClearFlags = function (flags) {
      if (flags === undefined) flags = 0;
      this.m_drawFlags &= ~flags;
   };
   b2DebugDraw.prototype.SetSprite = function (sprite) {
      this.m_ctx = sprite;
   };
   b2DebugDraw.prototype.GetSprite = function () {
      return this.m_ctx;
   };
   b2DebugDraw.prototype.SetDrawScale = function (drawScale) {
      if (drawScale === undefined) drawScale = 0;
      this.m_drawScale = drawScale;
   };
   b2DebugDraw.prototype.GetDrawScale = function () {
      return this.m_drawScale;
   };
   b2DebugDraw.prototype.SetLineThickness = function (lineThickness) {
      if (lineThickness === undefined) lineThickness = 0;
      this.m_lineThickness = lineThickness;
      this.m_ctx.strokeWidth = lineThickness;
   };
   b2DebugDraw.prototype.GetLineThickness = function () {
      return this.m_lineThickness;
   };
   b2DebugDraw.prototype.SetAlpha = function (alpha) {
      if (alpha === undefined) alpha = 0;
      this.m_alpha = alpha;
   };
   b2DebugDraw.prototype.GetAlpha = function () {
      return this.m_alpha;
   };
   b2DebugDraw.prototype.SetFillAlpha = function (alpha) {
      if (alpha === undefined) alpha = 0;
      this.m_fillAlpha = alpha;
   };
   b2DebugDraw.prototype.GetFillAlpha = function () {
      return this.m_fillAlpha;
   };
   b2DebugDraw.prototype.SetXFormScale = function (xformScale) {
      if (xformScale === undefined) xformScale = 0;
      this.m_xformScale = xformScale;
   };
   b2DebugDraw.prototype.GetXFormScale = function () {
      return this.m_xformScale;
   };
   b2DebugDraw.prototype.DrawPolygon = function (vertices, vertexCount, color) {
      if(!vertexCount) return;
      var s = this.m_ctx;
      var drawScale = this.m_drawScale;
      s.beginPath();
      s.strokeStyle = this._color(color.color, this.m_alpha);
      s.moveTo(vertices[0].x * drawScale, vertices[0].y * drawScale);
      for (var i = 1; i < vertexCount; i++) {
         s.lineTo(vertices[i].x * drawScale, vertices[i].y * drawScale);
      }
      s.lineTo(vertices[0].x * drawScale, vertices[0].y * drawScale);
      s.closePath();
      s.stroke();
   };
   b2DebugDraw.prototype.DrawSolidPolygon = function (vertices, vertexCount, color) {
      if(!vertexCount) return;
      var s = this.m_ctx;
      var drawScale = this.m_drawScale;
      s.beginPath();
      s.strokeStyle = this._color(color.color, this.m_alpha);
      s.fillStyle = this._color(color.color, this.m_fillAlpha);
      s.moveTo(vertices[0].x * drawScale, vertices[0].y * drawScale);
      for (var i = 1; i < vertexCount; i++) {
         s.lineTo(vertices[i].x * drawScale, vertices[i].y * drawScale);
      }
      s.lineTo(vertices[0].x * drawScale, vertices[0].y * drawScale);
      s.closePath();
      s.fill();
      s.stroke();
   };
   b2DebugDraw.prototype.DrawCircle = function (center, radius, color) {
      if(!radius) return;
      var s = this.m_ctx;
      var drawScale = this.m_drawScale;
      s.beginPath();
      s.strokeStyle = this._color(color.color, this.m_alpha);
      s.arc(center.x * drawScale, center.y * drawScale, radius * drawScale, 0, Math.PI*2, true);
      s.closePath();
      s.stroke();
   };
   b2DebugDraw.prototype.DrawSolidCircle = function (center, radius, axis, color) {
      /*if (radius === undefined) radius = 0;
      this.m_ctx.graphics.lineStyle(this.m_lineThickness, color.color, this.m_alpha);
      this.m_ctx.graphics.moveTo(0, 0);
      this.m_ctx.graphics.beginFill(color.color, this.m_fillAlpha);
      this.m_ctx.graphics.drawCircle(center.x * this.m_drawScale, center.y * this.m_drawScale, radius * this.m_drawScale);
      this.m_ctx.graphics.endFill();
      this.m_ctx.graphics.moveTo(center.x * this.m_drawScale, center.y * this.m_drawScale);
      this.m_ctx.graphics.lineTo((center.x + axis.x * radius) * this.m_drawScale, (center.y + axis.y * radius) * this.m_drawScale);
      */
      if(!radius) return;
      var   s = this.m_ctx
         ,  drawScale = this.m_drawScale
         ,  cx = center.x * drawScale
         ,  cy = center.y * drawScale
         ;
      s.moveTo(0, 0);
      s.beginPath();
      s.strokeStyle = this._color(color.color, this.m_alpha);
      s.fillStyle = this._color(color.color, this.m_fillAlpha);
      s.arc(cx, cy, radius * drawScale, 0, Math.PI*2, true);
      s.moveTo(cx, cy);
      s.lineTo((center.x + axis.x * radius) * drawScale, (center.y + axis.y * radius) * drawScale);
      s.closePath();
      s.fill();
      s.stroke();
   };
   b2DebugDraw.prototype.DrawSegment = function (p1, p2, color) {
      var   s = this.m_ctx
         ,  drawScale = this.m_drawScale
         ;
      s.strokeStyle = this._color(color.color, this.m_alpha);
      s.beginPath();
      s.moveTo(p1.x * drawScale, p1.y * drawScale);
      s.lineTo(p2.x * drawScale, p2.y * drawScale);
      s.closePath();
      s.stroke();
   };
   b2DebugDraw.prototype.DrawTransform = function (xf) {
      var   s = this.m_ctx
         ,  drawScale = this.m_drawScale
         ;
      s.beginPath();
      s.strokeStyle = this._color(0xff0000, this.m_alpha);
      s.moveTo(xf.position.x * drawScale, xf.position.y * drawScale);
      s.lineTo((xf.position.x + this.m_xformScale * xf.R.col1.x) * drawScale, (xf.position.y + this.m_xformScale * xf.R.col1.y) * drawScale);

      s.strokeStyle = this._color(0xff00, this.m_alpha);
      s.moveTo(xf.position.x * drawScale, xf.position.y * drawScale);
      s.lineTo((xf.position.x + this.m_xformScale * xf.R.col2.x) * drawScale, (xf.position.y + this.m_xformScale * xf.R.col2.y) * drawScale);
      s.closePath();
      s.stroke();
   };
   _A2J_postDefs.push(function () {
      Box2D.Dynamics.b2DebugDraw.e_shapeBit = 0x0001;
      Box2D.Dynamics.b2DebugDraw.prototype.e_shapeBit = Box2D.Dynamics.b2DebugDraw.e_shapeBit;
      Box2D.Dynamics.b2DebugDraw.e_jointBit = 0x0002;
      Box2D.Dynamics.b2DebugDraw.prototype.e_jointBit = Box2D.Dynamics.b2DebugDraw.e_jointBit;
      Box2D.Dynamics.b2DebugDraw.e_aabbBit = 0x0004;
      Box2D.Dynamics.b2DebugDraw.prototype.e_aabbBit = Box2D.Dynamics.b2DebugDraw.e_aabbBit;
      Box2D.Dynamics.b2DebugDraw.e_pairBit = 0x0008;
      Box2D.Dynamics.b2DebugDraw.prototype.e_pairBit = Box2D.Dynamics.b2DebugDraw.e_pairBit;
      Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 0x0010;
      Box2D.Dynamics.b2DebugDraw.prototype.e_centerOfMassBit = Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit;
      Box2D.Dynamics.b2DebugDraw.e_controllerBit = 0x0020;
      Box2D.Dynamics.b2DebugDraw.prototype.e_controllerBit = Box2D.Dynamics.b2DebugDraw.e_controllerBit;
   });
})();

//post-definitions
for (var i = 0; i < _A2J_postDefs.length; ++i) _A2J_postDefs[i]();;
;
var __slice = Array.prototype.slice;
/***
Returns a copy of the array without null and undefined values.

@name compact
@methodOf Array#
@type Array
@returns An array that contains only the non-null values.
*/
Array.prototype.compact = function() {
  return this.select(function(element) {
    return (typeof element !== "undefined" && element !== null);
  });
};
/***
Creates and returns a copy of the array. The copy contains
the same objects.

@name copy
@methodOf Array#
@type Array
@returns A new array that is a copy of the array
*/
Array.prototype.copy = function() {
  return this.concat();
};
/***
Empties the array of its contents. It is modified in place.

@name clear
@methodOf Array#
@type Array
@returns this, now emptied.
*/
Array.prototype.clear = function() {
  this.length = 0;
  return this;
};
/***
Invoke the named method on each element in the array
and return a new array containing the results of the invocation.

<code><pre>
  [1.1, 2.2, 3.3, 4.4].invoke("floor")
  => [1, 2, 3, 4]

  ['hello', 'world', 'cool!'].invoke('substring', 0, 3)
  => ['hel', 'wor', 'coo']
</pre></code>

@param {String} method The name of the method to invoke.
@param [arg...] Optional arguments to pass to the method being invoked.

@name invoke
@methodOf Array#
@type Array
@returns A new array containing the results of invoking the
named method on each element.
*/
Array.prototype.invoke = function(method) {
  var args;
  args = __slice.call(arguments, 1);
  return this.map(function(element) {
    return element[method].apply(element, args);
  });
};
/***
Randomly select an element from the array.

@name rand
@methodOf Array#
@type Object
@returns A random element from an array
*/
Array.prototype.rand = function() {
  return this[rand(this.length)];
};
/***
Remove the first occurance of the given object from the array if it is
present.

@name remove
@methodOf Array#
@param {Object} object The object to remove from the array if present.
@returns The removed object if present otherwise undefined.
*/
Array.prototype.remove = function(object) {
  var index;
  index = this.indexOf(object);
  return index >= 0 ? this.splice(index, 1)[0] : undefined;
};
/***
Returns true if the element is present in the array.

@name include
@methodOf Array#
@param {Object} element The element to check if present.
@returns true if the element is in the array, false otherwise.
@type Boolean
*/
Array.prototype.include = function(element) {
  return this.indexOf(element) !== -1;
};
/***
Call the given iterator once for each element in the array,
passing in the element as the first argument, the index of
the element as the second argument, and this array as the
third argument.

@name each
@methodOf Array#
@param {Function} iterator Function to be called once for
each element in the array.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns this to enable method chaining.
*/
Array.prototype.each = function(iterator, context) {
  var _len, _ref, element, i;
  if (this.forEach) {
    this.forEach(iterator, context);
  } else {
    _ref = this;
    for (i = 0, _len = _ref.length; i < _len; i++) {
      element = _ref[i];
      iterator.call(context, element, i, this);
    }
  }
  return this;
};
/***
Call the given iterator once for each element in the array,
passing in the given object as the first argument and the element
as the second argument. Additional arguments are passed similar to
<code>each</code>

@see Array#each

@name eachWithObject
@methodOf Array#

@param {Object} object The number of elements in each group.
@param {Function} iterator Function to be called once for
each element in the array.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@returns this
@type Array
*/
Array.prototype.eachWithObject = function(object, iterator, context) {
  this.each(function(element, i, self) {
    return iterator.call(context, object, element, i, self);
  });
  return object;
};
/***
Call the given iterator once for each group of elements in the array,
passing in the elements in groups of n. Additional argumens are
passed as in <code>each</each>.

@see Array#each

@name eachSlice
@methodOf Array#

@param {Number} n The number of elements in each group.
@param {Function} iterator Function to be called once for
each group of elements in the array.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@returns this
@type Array
*/
Array.prototype.eachSlice = function(n, iterator, context) {
  var i, len;
  if (n > 0) {
    len = (this.length / n).floor();
    i = -1;
    while (++i < len) {
      iterator.call(context, this.slice(i * n, (i + 1) * n), i * n, this);
    }
  }
  return this;
};
/***
Returns a new array with the elements all shuffled up.

@name shuffle
@methodOf Array#

@returns A new array that is randomly shuffled.
@type Array
*/
Array.prototype.shuffle = function() {
  var shuffledArray;
  shuffledArray = [];
  this.each(function(element) {
    return shuffledArray.splice(rand(shuffledArray.length + 1), 0, element);
  });
  return shuffledArray;
};
/***
Returns the first element of the array, undefined if the array is empty.

@name first
@methodOf Array#

@returns The first element, or undefined if the array is empty.
@type Object
*/
Array.prototype.first = function() {
  return this[0];
};
/***
Returns the last element of the array, undefined if the array is empty.

@name last
@methodOf Array#

@returns The last element, or undefined if the array is empty.
@type Object
*/
Array.prototype.last = function() {
  return this[this.length - 1];
};
/***
Returns an object containing the extremes of this array.
<pre>
[-1, 3, 0].extremes() # => {min: -1, max: 3}
</pre>

@name extremes
@methodOf Array#

@param {Function} [fn] An optional funtion used to evaluate
each element to calculate its value for determining extremes.
@returns {min: minElement, max: maxElement}
@type Object
*/
Array.prototype.extremes = function(fn) {
  var max, maxResult, min, minResult;
  fn || (fn = function(n) {
    return n;
  });
  min = (max = undefined);
  minResult = (maxResult = undefined);
  this.each(function(object) {
    var result;
    result = fn(object);
    if (typeof min !== "undefined" && min !== null) {
      if (result < minResult) {
        min = object;
        minResult = result;
      }
    } else {
      min = object;
      minResult = result;
    }
    if (typeof max !== "undefined" && max !== null) {
      if (result > maxResult) {
        max = object;
        return (maxResult = result);
      }
    } else {
      max = object;
      return (maxResult = result);
    }
  });
  return {
    min: min,
    max: max
  };
};
/***
Pretend the array is a circle and grab a new array containing length elements.
If length is not given return the element at start, again assuming the array
is a circle.

@name wrap
@methodOf Array#

@param {Number} start The index to start wrapping at, or the index of the
sole element to return if no length is given.
@param {Number} [length] Optional length determines how long result
array should be.
@returns The element at start mod array.length, or an array of length elements,
starting from start and wrapping.
@type Object or Array
*/
Array.prototype.wrap = function(start, length) {
  var end, i, result;
  if (typeof length !== "undefined" && length !== null) {
    end = start + length;
    i = start;
    result = [];
    while (i++ < end) {
      result.push(this[i.mod(this.length)]);
    }
    return result;
  } else {
    return this[start.mod(this.length)];
  }
};
/***
Partitions the elements into two groups: those for which the iterator returns
true, and those for which it returns false.

@name partition
@methodOf Array#

@param {Function} iterator
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns An array in the form of [trueCollection, falseCollection]
*/
Array.prototype.partition = function(iterator, context) {
  var falseCollection, trueCollection;
  trueCollection = [];
  falseCollection = [];
  this.each(function(element) {
    return iterator.call(context, element) ? trueCollection.push(element) : falseCollection.push(element);
  });
  return [trueCollection, falseCollection];
};
/***
Return the group of elements for which the return value of the iterator is true.

@name select
@methodOf Array#

@param {Function} iterator The iterator receives each element in turn as
the first agument.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns An array containing the elements for which the iterator returned true.
*/
Array.prototype.select = function(iterator, context) {
  return this.partition(iterator, context)[0];
};
/***
Return the group of elements that are not in the passed in set.

@name without
@methodOf Array#

@param {Array} values List of elements to exclude.

@type Array
@returns An array containing the elements that are not passed in.
*/
Array.prototype.without = function(values) {
  return this.reject(function(element) {
    return values.include(element);
  });
};
/***
Return the group of elements for which the return value of the iterator is false.

@name reject
@methodOf Array#

@param {Function} iterator The iterator receives each element in turn as
the first agument.
@param {Object} [context] Optional context parameter to be
used as `this` when calling the iterator function.

@type Array
@returns An array containing the elements for which the iterator returned false.
*/
Array.prototype.reject = function(iterator, context) {
  return this.partition(iterator, context)[1];
};
/***
Combines all elements of the array by applying a binary operation.
for each element in the arra the iterator is passed an accumulator
value (memo) and the element.

@name inject
@methodOf Array#

@type Object
@returns The result of a
*/
Array.prototype.inject = function(initial, iterator) {
  this.each(function(element) {
    return (initial = iterator(initial, element));
  });
  return initial;
};
/***
Add all the elements in the array.

@name sum
@methodOf Array#

@type Number
@returns The sum of the elements in the array.
*/
Array.prototype.sum = function() {
  return this.inject(0, function(sum, n) {
    return sum + n;
  });
};
/***
Multiply all the elements in the array.

@name product
@methodOf Array#

@type Number
@returns The product of the elements in the array.
*/
Array.prototype.product = function() {
  return this.inject(1, function(product, n) {
    return product * n;
  });
};
Array.prototype.zip = function() {
  var args;
  args = __slice.call(arguments, 0);
  return this.map(function(element, index) {
    var output;
    output = args.map(function(arr) {
      return arr[index];
    });
    output.unshift(element);
    return output;
  });
};;
window.requestAnimationFrame || (window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
  return window.setTimeout(function() {
    return callback(+new Date());
  }, 1000 / 60);
}));;
/**
 * CoffeeScript Compiler v1.0.1
 * http://coffeescript.org
 *
 * Copyright 2011, Jeremy Ashkenas
 * Released under the MIT License
 */
this.CoffeeScript=function(){function require(a){return require[a]}require["./helpers"]=new function(){var a=this;(function(){var b,c;a.starts=function(a,b,c){return b===a.substr(c,b.length)},a.ends=function(a,b,c){var d;d=b.length;return b===a.substr(a.length-d-(c||0),d)},a.compact=function(a){var b,c,d,e;e=[];for(c=0,d=a.length;c<d;c++)b=a[c],b&&e.push(b);return e},a.count=function(a,b){var c,d;c=d=0;if(!b.length)return 1/0;while(d=1+a.indexOf(b,d))c++;return c},a.merge=function(a,c){return b(b({},a),c)},b=a.extend=function(a,b){var c,d;for(c in b)d=b[c],a[c]=d;return a},a.flatten=c=function(a){var b,d,e,f;d=[];for(e=0,f=a.length;e<f;e++)b=a[e],b instanceof Array?d=d.concat(c(b)):d.push(b);return d},a.del=function(a,b){var c;c=a[b],delete a[b];return c},a.last=function(a,b){return a[a.length-(b||0)-1]}}).call(this)},require["./rewriter"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},u=Array.prototype.slice;a.Rewriter=function(){function a(){}a.prototype.rewrite=function(a){this.tokens=a,this.removeLeadingNewlines(),this.removeMidExpressionNewlines(),this.closeOpenCalls(),this.closeOpenIndexes(),this.addImplicitIndentation(),this.tagPostfixConditionals(),this.addImplicitBraces(),this.addImplicitParentheses(),this.ensureBalance(b),this.rewriteClosingParens();return this.tokens},a.prototype.scanTokens=function(a){var b,c,d;d=this.tokens,b=0;while(c=d[b])b+=a.call(this,c,b,d);return!0},a.prototype.detectEnd=function(a,b,c){var f,g,h,i,j;h=this.tokens,f=0;while(g=h[a]){if(f===0&&b.call(this,g,a))return c.call(this,g,a);if(!g||f<0)return c.call(this,g,a-1);if(i=g[0],t.call(e,i)>=0)f+=1;else if(j=g[0],t.call(d,j)>=0)f-=1;a+=1}return a-1},a.prototype.removeLeadingNewlines=function(){var a,b,c,d;d=this.tokens;for(a=0,c=d.length;a<c;a++){b=d[a][0];if(b!=="TERMINATOR")break}if(a)return this.tokens.splice(0,a)},a.prototype.removeMidExpressionNewlines=function(){return this.scanTokens(function(a,b,d){var e;if(a[0]!=="TERMINATOR"||!(e=this.tag(b+1),t.call(c,e)>=0))return 1;d.splice(b,1);return 0})},a.prototype.closeOpenCalls=function(){var a,b;b=function(a,b){var c;return(c=a[0])===")"||c==="CALL_END"||a[0]==="OUTDENT"&&this.tag(b-1)===")"},a=function(a,b){return this.tokens[a[0]==="OUTDENT"?b-1:b][0]="CALL_END"};return this.scanTokens(function(c,d){c[0]==="CALL_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.closeOpenIndexes=function(){var a,b;b=function(a,b){var c;return(c=a[0])==="]"||c==="INDEX_END"},a=function(a,b){return a[0]="INDEX_END"};return this.scanTokens(function(c,d){c[0]==="INDEX_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.addImplicitBraces=function(){var a,b,c,f,g;c=[],f=null,g=0,b=function(a,b){var c,d,e,f,g,h;g=this.tokens.slice(b+1,b+3+1||9e9),c=g[0],f=g[1],e=g[2];if("HERECOMMENT"===(c!=null?c[0]:void 0))return!1;d=a[0];return(d==="TERMINATOR"||d==="OUTDENT")&&((f!=null?f[0]:void 0)!==":"&&((c!=null?c[0]:void 0)!=="@"||(e!=null?e[0]:void 0)!==":"))||d===","&&c&&((h=c[0])!=="IDENTIFIER"&&h!=="NUMBER"&&h!=="STRING"&&h!=="@"&&h!=="TERMINATOR"&&h!=="OUTDENT")},a=function(a,b){return this.tokens.splice(b,0,["}","}",a[2]])};return this.scanTokens(function(g,h,i){var j,k,l,m,n,o,p;if(o=l=g[0],t.call(e,o)>=0){c.push([l==="INDENT"&&this.tag(h-1)==="{"?"{":l,h]);return 1}if(t.call(d,l)>=0){f=c.pop();return 1}if(l!==":"||(j=this.tag(h-2))!==":"&&((p=c[c.length-1])!=null?p[0]:void 0)==="{")return 1;c.push(["{"]),k=j==="@"?h-2:h-1;while(this.tag(k-2)==="HERECOMMENT")k-=2;n=new String("{"),n.generated=!0,m=["{",n,g[2]],m.generated=!0,i.splice(k,0,m),this.detectEnd(h+2,b,a);return 2})},a.prototype.addImplicitParentheses=function(){var a,b;b=!1,a=function(a,b){var c;c=a[0]==="OUTDENT"?b+1:b;return this.tokens.splice(c,0,["CALL_END",")",a[2]])};return this.scanTokens(function(c,d,e){var k,m,n,o,p,q,r,s,u;q=c[0];if(q==="CLASS"||q==="IF")b=!0;r=e.slice(d-1,d+1+1||9e9),o=r[0],m=r[1],n=r[2],k=!b&&q==="INDENT"&&n&&n.generated&&n[0]==="{"&&o&&(s=o[0],t.call(i,s)>=0),p=!1,t.call(l,q)>=0&&(b=!1),o&&!o.spaced&&q==="?"&&(c.call=!0);if(!k&&(!(o!=null?o.spaced:void 0)||!o.call&&!(u=o[0],t.call(i,u)>=0)||t.call(g,q)<0&&(c.spaced||c.newLine||t.call(j,q)<0)))return 1;e.splice(d,0,["CALL_START","(",c[2]]),this.detectEnd(d+1,function(a,b){var c,d;q=a[0];if(!p&&a.fromThen)return!0;if(q==="IF"||q==="ELSE"||q==="->"||q==="=>")p=!0;if((q==="."||q==="?."||q==="::")&&this.tag(b-1)==="OUTDENT")return!0;return!a.generated&&this.tag(b-1)!==","&&t.call(h,q)>=0&&(q!=="INDENT"||this.tag(b-2)!=="CLASS"&&(d=this.tag(b-1),t.call(f,d)<0)&&(!(c=this.tokens[b+1])||!c.generated||c[0]!=="{"))},a),o[0]==="?"&&(o[0]="FUNC_EXIST");return 2})},a.prototype.addImplicitIndentation=function(){return this.scanTokens(function(a,b,c){var d,e,f,g,h,i,j,k;i=a[0];if(i==="TERMINATOR"&&this.tag(b+1)==="THEN"){c.splice(b,1);return 0}if(i==="ELSE"&&this.tag(b-1)!=="OUTDENT"){c.splice.apply(c,[b,0].concat(u.call(this.indentation(a))));return 2}if(i==="CATCH"&&((j=this.tag(b+2))==="OUTDENT"||j==="TERMINATOR"||j==="FINALLY")){c.splice.apply(c,[b+2,0].concat(u.call(this.indentation(a))));return 4}if(t.call(n,i)>=0&&this.tag(b+1)!=="INDENT"&&(i!=="ELSE"||this.tag(b+1)!=="IF")){h=i,k=this.indentation(a),f=k[0],g=k[1],h==="THEN"&&(f.fromThen=!0),f.generated=g.generated=!0,c.splice(b+1,0,f),e=function(a,b){var c;return a[1]!==";"&&(c=a[0],t.call(m,c)>=0)&&(a[0]!=="ELSE"||(h==="IF"||h==="THEN"))},d=function(a,b){return this.tokens.splice(this.tag(b-1)===","?b-1:b,0,g)},this.detectEnd(b+2,e,d),i==="THEN"&&c.splice(b,1);return 1}return 1})},a.prototype.tagPostfixConditionals=function(){var a;a=function(a,b){var c;return(c=a[0])==="TERMINATOR"||c==="INDENT"};return this.scanTokens(function(b,c){var d;if(b[0]!=="IF")return 1;d=b,this.detectEnd(c+1,a,function(a,b){if(a[0]!=="INDENT")return d[0]="POST_"+d[0]});return 1})},a.prototype.ensureBalance=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;d={},f={},m=this.tokens;for(i=0,k=m.length;i<k;i++){h=m[i],g=h[0];for(j=0,l=a.length;j<l;j++){n=a[j],e=n[0],b=n[1],d[e]|=0;if(g===e)d[e]++===0&&(f[e]=h[2]);else if(g===b&&--d[e]<0)throw Error("too many "+h[1]+" on line "+(h[2]+1))}}for(e in d){c=d[e];if(c>0)throw Error("unclosed "+e+" on line "+(f[e]+1))}return this},a.prototype.rewriteClosingParens=function(){var a,b,c;c=[],a={};for(b in k)a[b]=0;return this.scanTokens(function(b,f,g){var h,i,j,l,m,n,o;if(o=m=b[0],t.call(e,o)>=0){c.push(b);return 1}if(t.call(d,m)<0)return 1;if(a[h=k[m]]>0){a[h]-=1,g.splice(f,1);return 0}i=c.pop(),j=i[0],l=k[j];if(m===l)return 1;a[j]+=1,n=[l,j==="INDENT"?i[1]:l],this.tag(f+2)===j?(g.splice(f+3,0,n),c.push(i)):g.splice(f,0,n);return 1})},a.prototype.indentation=function(a){return[["INDENT",2,a[2]],["OUTDENT",2,a[2]]]},a.prototype.tag=function(a){var b;return(b=this.tokens[a])!=null?b[0]:void 0};return a}(),b=[["(",")"],["[","]"],["{","}"],["INDENT","OUTDENT"],["CALL_START","CALL_END"],["PARAM_START","PARAM_END"],["INDEX_START","INDEX_END"]],k={},e=[],d=[];for(q=0,r=b.length;q<r;q++)s=b[q],o=s[0],p=s[1],e.push(k[p]=o),d.push(k[o]=p);c=["CATCH","WHEN","ELSE","FINALLY"].concat(d),i=["IDENTIFIER","SUPER",")","CALL_END","]","INDEX_END","@","THIS"],g=["IDENTIFIER","NUMBER","STRING","JS","REGEX","NEW","PARAM_START","CLASS","IF","TRY","SWITCH","THIS","BOOL","UNARY","SUPER","@","->","=>","[","(","{","--","++"],j=["+","-"],f=["->","=>","{","[",","],h=["POST_IF","FOR","WHILE","UNTIL","WHEN","BY","LOOP","TERMINATOR","INDENT"],n=["ELSE","->","=>","TRY","FINALLY","THEN"],m=["TERMINATOR","CATCH","FINALLY","ELSE","OUTDENT","LEADING_WHEN"],l=["TERMINATOR","INDENT","OUTDENT"]}).call(this)},require["./lexer"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};I=require("./rewriter").Rewriter,T=require("./helpers"),P=T.count,S=T.starts,O=T.compact,Q=T.last,a.Lexer=w=function(){function a(){}a.prototype.tokenize=function(a,b){var c;b==null&&(b={}),N.test(a)&&(a="\n"+a),a=a.replace(/\r/g,"").replace(L,""),this.code=a,this.line=b.line||0,this.indent=0,this.indebt=0,this.outdebt=0,this.indents=[],this.tokens=[],c=0;while(this.chunk=a.slice(c))c+=this.identifierToken()||this.commentToken()||this.whitespaceToken()||this.lineToken()||this.heredocToken()||this.stringToken()||this.numberToken()||this.regexToken()||this.jsToken()||this.literalToken();this.closeIndentation();if(b.rewrite===!1)return this.tokens;return(new I).rewrite(this.tokens)},a.prototype.identifierToken=function(){var a,b,c,d,e,h,i,j,k;if(!(e=o.exec(this.chunk)))return 0;d=e[0],c=e[1],a=e[2];if(c==="own"&&this.tag()==="FOR"){this.token("OWN",c);return c.length}b=a||(h=Q(this.tokens))&&!h.spaced&&((j=h[0])==="."||j==="?."||j==="@"||j==="::"),i="IDENTIFIER";if(U.call(s,c)>=0||!b&&U.call(g,c)>=0)i=c.toUpperCase(),i==="WHEN"&&(k=this.tag(),U.call(t,k)>=0)?i="LEADING_WHEN":i==="FOR"?this.seenFor=!0:i==="UNLESS"?i="IF":U.call(M,i)<0?U.call(G,i)>=0&&(i!=="INSTANCEOF"&&this.seenFor?(i="FOR"+i,this.seenFor=!1):(i="RELATION",this.value()==="!"&&(this.tokens.pop(),c="!"+c))):i="UNARY";U.call(r,c)>=0&&(b?(i="IDENTIFIER",c=new String(c),c.reserved=!0):U.call(H,c)>=0&&this.identifierError(c)),b||(f.hasOwnProperty(c)&&(c=f[c]),i=function(){switch(c){case"!":return"UNARY";case"==":case"!=":return"COMPARE";case"&&":case"||":return"LOGIC";case"true":case"false":case"null":case"undefined":return"BOOL";case"break":case"continue":case"debugger":return"STATEMENT";default:return i}}()),this.token(i,c),a&&this.token(":",":");return d.length},a.prototype.numberToken=function(){var a,b;if(!(a=D.exec(this.chunk)))return 0;b=a[0],this.token("NUMBER",b);return b.length},a.prototype.stringToken=function(){var a,b;switch(this.chunk.charAt(0)){case"'":if(!(a=K.exec(this.chunk)))return 0;this.token("STRING",(b=a[0]).replace(y,"\\\n"));break;case'"':if(!(b=this.balancedString(this.chunk,'"')))return 0;0<b.indexOf("#{",1)?this.interpolateString(b.slice(1,-1)):this.token("STRING",this.escapeLines(b));break;default:return 0}this.line+=P(b,"\n");return b.length},a.prototype.heredocToken=function(){var a,b,c,d;if(!(c=k.exec(this.chunk)))return 0;b=c[0],d=b.charAt(0),a=this.sanitizeHeredoc(c[2],{quote:d,indent:null}),d!=='"'||0>a.indexOf("#{")?this.token("STRING",this.makeString(a,d,!0)):this.interpolateString(a,{heredoc:!0}),this.line+=P(b,"\n");return b.length},a.prototype.commentToken=function(){var a,b,c;if(!(c=this.chunk.match(h)))return 0;a=c[0],b=c[1],this.line+=P(a,"\n"),b&&(this.token("HERECOMMENT",this.sanitizeHeredoc(b,{herecomment:!0,indent:Array(this.indent+1).join(" ")})),this.token("TERMINATOR","\n"));return a.length},a.prototype.jsToken=function(){var a,b;if(this.chunk.charAt(0)!=="`"||!(a=q.exec(this.chunk)))return 0;this.token("JS",(b=a[0]).slice(1,-1));return b.length},a.prototype.regexToken=function(){var a,b,c,d;if(this.chunk.charAt(0)!=="/")return 0;if(a=m.exec(this.chunk))return this.heregexToken(a);b=Q(this.tokens);if(b&&(d=b[0],U.call(b.spaced?A:B,d)>=0))return 0;if(!(a=F.exec(this.chunk)))return 0;c=a[0],this.token("REGEX",c==="//"?"/(?:)/":c);return c.length},a.prototype.heregexToken=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o;d=a[0],b=a[1],c=a[2];if(0>b.indexOf("#{")){e=b.replace(n,"").replace(/\//g,"\\/"),this.token("REGEX","/"+(e||"(?:)")+"/"+c);return d.length}this.token("IDENTIFIER","RegExp"),this.tokens.push(["CALL_START","("]),g=[],k=this.interpolateString(b,{regex:!0});for(i=0,j=k.length;i<j;i++){l=k[i],f=l[0],h=l[1];if(f==="TOKENS")g.push.apply(g,h);else{if(!(h=h.replace(n,"")))continue;h=h.replace(/\\/g,"\\\\"),g.push(["STRING",this.makeString(h,'"',!0)])}g.push(["+","+"])}g.pop(),((m=g[0])!=null?m[0]:void 0)!=="STRING"&&this.tokens.push(["STRING",'""'],["+","+"]),(o=this.tokens).push.apply(o,g),c&&this.tokens.push([",",","],["STRING",'"'+c+'"']),this.token(")",")");return d.length},a.prototype.lineToken=function(){var a,b,c,d,e,f;if(!(c=z.exec(this.chunk)))return 0;b=c[0],this.line+=P(b,"\n"),e=Q(this.tokens,1),f=b.length-1-b.lastIndexOf("\n"),d=this.unfinished();if(f-this.indebt===this.indent){d?this.suppressNewlines():this.newlineToken();return b.length}if(f>this.indent){if(d){this.indebt=f-this.indent,this.suppressNewlines();return b.length}a=f-this.indent+this.outdebt,this.token("INDENT",a),this.indents.push(a),this.outdebt=this.indebt=0}else this.indebt=0,this.outdentToken(this.indent-f,d);this.indent=f;return b.length},a.prototype.outdentToken=function(a,b,c){var d,e;while(a>0)e=this.indents.length-1,this.indents[e]===void 0?a=0:this.indents[e]===this.outdebt?(a-=this.outdebt,this.outdebt=0):this.indents[e]<this.outdebt?(this.outdebt-=this.indents[e],a-=this.indents[e]):(d=this.indents.pop()-this.outdebt,a-=d,this.outdebt=0,this.token("OUTDENT",d));d&&(this.outdebt-=a),this.tag()!=="TERMINATOR"&&!b&&this.token("TERMINATOR","\n");return this},a.prototype.whitespaceToken=function(){var a,b,c;if(!(a=N.exec(this.chunk))&&!(b=this.chunk.charAt(0)==="\n"))return 0;c=Q(this.tokens),c&&(c[a?"spaced":"newLine"]=!0);return a?a[0].length:0},a.prototype.newlineToken=function(){this.tag()!=="TERMINATOR"&&this.token("TERMINATOR","\n");return this},a.prototype.suppressNewlines=function(){this.value()==="\\"&&this.tokens.pop();return this},a.prototype.literalToken=function(){var a,b,c,f,g,h,k,l;(a=E.exec(this.chunk))?(f=a[0],e.test(f)&&this.tagParameters()):f=this.chunk.charAt(0),c=f,b=Q(this.tokens);if(f==="="&&b){!b[1].reserved&&(g=b[1],U.call(r,g)>=0)&&this.assignmentError();if((h=b[1])==="||"||h==="&&"){b[0]="COMPOUND_ASSIGN",b[1]+="=";return f.length}}if(f===";")c="TERMINATOR";else if(U.call(x,f)<0)if(U.call(i,f)<0)if(U.call(j,f)<0)if(U.call(M,f)<0)if(U.call(J,f)<0){if(U.call(v,f)>=0||f==="?"&&(b!=null?b.spaced:void 0))c="LOGIC";else if(b&&!b.spaced)if(f==="("&&(k=b[0],U.call(d,k)>=0))b[0]==="?"&&(b[0]="FUNC_EXIST"),c="CALL_START";else if(f==="["&&(l=b[0],U.call(p,l)>=0)){c="INDEX_START";switch(b[0]){case"?":b[0]="INDEX_SOAK";break;case"::":b[0]="INDEX_PROTO"}}}else c="SHIFT";else c="UNARY";else c="COMPOUND_ASSIGN";else c="COMPARE";else c="MATH";this.token(c,f);return f.length},a.prototype.sanitizeHeredoc=function(a,b){var c,d,e,f,g;e=b.indent,d=b.herecomment;if(d&&0>a.indexOf("\n"))return a;if(!d)while(f=l.exec(a)){c=f[1];if(e===null||0<(g=c.length)&&g<e.length)e=c}e&&(a=a.replace(RegExp("\\n"+e,"g"),"\n")),d||(a=a.replace(/^\n/,""));return a},a.prototype.tagParameters=function(){var a,b,c,d;if(this.tag()!==")")return this;b=[],d=this.tokens,a=d.length,d[--a][0]="PARAM_END";while(c=d[--a])switch(c[0]){case")":b.push(c);break;case"(":case"CALL_START":if(b.length)b.pop();else{c[0]="PARAM_START";return this}}return this},a.prototype.closeIndentation=function(){return this.outdentToken(this.indent)},a.prototype.identifierError=function(a){throw SyntaxError('Reserved word "'+a+'" on line '+(this.line+1))},a.prototype.assignmentError=function(){throw SyntaxError('Reserved word "'+this.value()+'" on line '+(this.line+1)+" can't be assigned")},a.prototype.balancedString=function(a,b){var c,d,e,f,g;f=[b];for(c=1,g=a.length;1<=g?c<g:c>g;1<=g?c+=1:c-=1){switch(d=a.charAt(c)){case"\\":c++;continue;case b:f.pop();if(!f.length)return a.slice(0,c+1);b=f[f.length-1];continue}b!=="}"||d!=='"'&&d!=="'"?b==="}"&&d==="{"?f.push(b="}"):b==='"'&&e==="#"&&d==="{"&&f.push(b="}"):f.push(b=d),e=d}throw new Error("missing "+f.pop()+", starting on line "+(this.line+1))},a.prototype.interpolateString=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c==null&&(c={}),e=c.heredoc,m=c.regex,o=[],l=0,f=-1;while(j=b.charAt(f+=1)){if(j==="\\"){f+=1;continue}if(j!=="#"||b.charAt(f+1)!=="{"||!(d=this.balancedString(b.slice(f+1),"}")))continue;l<f&&o.push(["NEOSTRING",b.slice(l,f)]),g=d.slice(1,-1);if(g.length){k=(new a).tokenize(g,{line:this.line,rewrite:!1}),k.pop(),((r=k[0])!=null?r[0]:void 0)==="TERMINATOR"&&k.shift();if(i=k.length)i>1&&(k.unshift(["(","("]),k.push([")",")"])),o.push(["TOKENS",k])}f+=d.length,l=f+1}f>l&&l<b.length&&o.push(["NEOSTRING",b.slice(l)]);if(m)return o;if(!o.length)return this.token("STRING",'""');o[0][0]!=="NEOSTRING"&&o.unshift(["",""]),(h=o.length>1)&&this.token("(","(");for(f=0,q=o.length;f<q;f++)s=o[f],n=s[0],p=s[1],f&&this.token("+","+"),n==="TOKENS"?(t=this.tokens).push.apply(t,p):this.token("STRING",this.makeString(p,'"',e));h&&this.token(")",")");return o},a.prototype.token=function(a,b){return this.tokens.push([a,b,this.line])},a.prototype.tag=function(a,b){var c;return(c=Q(this.tokens,a))&&(b?c[0]=b:c[0])},a.prototype.value=function(a,b){var c;return(c=Q(this.tokens,a))&&(b?c[1]=b:c[1])},a.prototype.unfinished=function(){var a,c;return u.test(this.chunk)||(a=Q(this.tokens,1))&&a[0]!=="."&&(c=this.value())&&!c.reserved&&C.test(c)&&!e.test(c)&&!b.test(this.chunk)},a.prototype.escapeLines=function(a,b){return a.replace(y,b?"\\n":"")},a.prototype.makeString=function(a,b,c){if(!a)return b+b;a=a.replace(/\\([\s\S])/g,function(a,c){return c==="\n"||c===b?c:a}),a=a.replace(RegExp(""+b,"g"),"\\$&");return b+this.escapeLines(a,c)+b};return a}(),s=["true","false","null","this","new","delete","typeof","in","instanceof","return","throw","break","continue","debugger","if","else","switch","for","while","do","try","catch","finally","class","extends","super"],g=["undefined","then","unless","until","loop","of","by","when"];for(R in f={and:"&&",or:"||",is:"==",isnt:"!=",not:"!",yes:"true",no:"false",on:"true",off:"false"})g.push(R);H=["case","default","function","var","void","with","const","let","enum","export","import","native","__hasProp","__extends","__slice","__bind","__indexOf"],r=s.concat(H),a.RESERVED=H.concat(s).concat(g),o=/^([$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)([^\n\S]*:(?!:))?/,D=/^0x[\da-f]+|^(?:\d+(\.\d+)?|\.\d+)(?:e[+-]?\d+)?/i,k=/^("""|''')([\s\S]*?)(?:\n[^\n\S]*)?\1/,E=/^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/,N=/^[^\n\S]+/,h=/^###([^#][\s\S]*?)(?:###[^\n\S]*|(?:###)?$)|^(?:\s*#(?!##[^#]).*)+/,e=/^[-=]>/,z=/^(?:\n[^\n\S]*)+/,K=/^'[^\\']*(?:\\.[^\\']*)*'/,q=/^`[^\\`]*(?:\\.[^\\`]*)*`/,F=/^\/(?!\s)[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/[imgy]{0,4}(?!\w)/,m=/^\/{3}([\s\S]+?)\/{3}([imgy]{0,4})(?!\w)/,n=/\s+(?:#.*)?/g,y=/\n/g,l=/\n+([^\n\S]*)/g,b=/^\s*@?([$A-Za-z_][$\w\x7f-\uffff]*|['"].*['"])[^\n\S]*?[:=][^:=>]/,u=/^\s*(?:,|\??\.(?!\.)|::)/,L=/\s+$/,C=/^(?:[-+*&|\/%=<>!.\\][<>=&|]*|and|or|is(?:nt)?|n(?:ot|ew)|delete|typeof|instanceof)$/,j=["-=","+=","/=","*=","%=","||=","&&=","?=","<<=",">>=",">>>=","&=","^=","|="],M=["!","~","NEW","TYPEOF","DELETE","DO"],v=["&&","||","&","|","^"],J=["<<",">>",">>>"],i=["==","!=","<",">","<=",">="],x=["*","/","%"],G=["IN","OF","INSTANCEOF"],c=["TRUE","FALSE","NULL","UNDEFINED"],A=["NUMBER","REGEX","BOOL","++","--","]"],B=A.concat(")","}","THIS","IDENTIFIER","STRING"),d=["IDENTIFIER","STRING","REGEX",")","]","}","?","::","@","THIS","SUPER"],p=d.concat("NUMBER","BOOL"),t=["INDENT","OUTDENT","TERMINATOR"]}).call(this)},require["./parser"]=new function(){var a=this,b=function(){var a={trace:function b(){},yy:{},symbols_:{error:2,Root:3,Body:4,Block:5,TERMINATOR:6,Line:7,Expression:8,Statement:9,Return:10,Throw:11,Comment:12,STATEMENT:13,Value:14,Invocation:15,Code:16,Operation:17,Assign:18,If:19,Try:20,While:21,For:22,Switch:23,Class:24,INDENT:25,OUTDENT:26,Identifier:27,IDENTIFIER:28,AlphaNumeric:29,NUMBER:30,STRING:31,Literal:32,JS:33,REGEX:34,BOOL:35,Assignable:36,"=":37,AssignObj:38,ObjAssignable:39,":":40,ThisProperty:41,RETURN:42,HERECOMMENT:43,PARAM_START:44,ParamList:45,PARAM_END:46,FuncGlyph:47,"->":48,"=>":49,OptComma:50,",":51,Param:52,ParamVar:53,"...":54,Array:55,Object:56,Splat:57,SimpleAssignable:58,Accessor:59,Parenthetical:60,Range:61,This:62,".":63,"?.":64,"::":65,Index:66,Slice:67,INDEX_START:68,INDEX_END:69,INDEX_SOAK:70,INDEX_PROTO:71,"{":72,AssignList:73,"}":74,CLASS:75,EXTENDS:76,OptFuncExist:77,Arguments:78,SUPER:79,FUNC_EXIST:80,CALL_START:81,CALL_END:82,ArgList:83,THIS:84,"@":85,"[":86,"]":87,RangeDots:88,"..":89,Arg:90,SimpleArgs:91,TRY:92,Catch:93,FINALLY:94,CATCH:95,THROW:96,"(":97,")":98,WhileSource:99,WHILE:100,WHEN:101,UNTIL:102,Loop:103,LOOP:104,ForBody:105,FOR:106,ForStart:107,ForSource:108,ForVariables:109,OWN:110,ForValue:111,FORIN:112,FOROF:113,BY:114,SWITCH:115,Whens:116,ELSE:117,When:118,LEADING_WHEN:119,IfBlock:120,IF:121,POST_IF:122,UNARY:123,"-":124,"+":125,"--":126,"++":127,"?":128,MATH:129,SHIFT:130,COMPARE:131,LOGIC:132,RELATION:133,COMPOUND_ASSIGN:134,$accept:0,$end:1},terminals_:{2:"error",6:"TERMINATOR",13:"STATEMENT",25:"INDENT",26:"OUTDENT",28:"IDENTIFIER",30:"NUMBER",31:"STRING",33:"JS",34:"REGEX",35:"BOOL",37:"=",40:":",42:"RETURN",43:"HERECOMMENT",44:"PARAM_START",46:"PARAM_END",48:"->",49:"=>",51:",",54:"...",63:".",64:"?.",65:"::",68:"INDEX_START",69:"INDEX_END",70:"INDEX_SOAK",71:"INDEX_PROTO",72:"{",74:"}",75:"CLASS",76:"EXTENDS",79:"SUPER",80:"FUNC_EXIST",81:"CALL_START",82:"CALL_END",84:"THIS",85:"@",86:"[",87:"]",89:"..",92:"TRY",94:"FINALLY",95:"CATCH",96:"THROW",97:"(",98:")",100:"WHILE",101:"WHEN",102:"UNTIL",104:"LOOP",106:"FOR",110:"OWN",112:"FORIN",113:"FOROF",114:"BY",115:"SWITCH",117:"ELSE",119:"LEADING_WHEN",121:"IF",122:"POST_IF",123:"UNARY",124:"-",125:"+",126:"--",127:"++",128:"?",129:"MATH",130:"SHIFT",131:"COMPARE",132:"LOGIC",133:"RELATION",134:"COMPOUND_ASSIGN"},productions_:[0,[3,0],[3,1],[3,2],[4,1],[4,3],[4,2],[7,1],[7,1],[9,1],[9,1],[9,1],[9,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[5,2],[5,3],[27,1],[29,1],[29,1],[32,1],[32,1],[32,1],[32,1],[18,3],[18,5],[38,1],[38,3],[38,5],[38,1],[39,1],[39,1],[39,1],[10,2],[10,1],[12,1],[16,5],[16,2],[47,1],[47,1],[50,0],[50,1],[45,0],[45,1],[45,3],[52,1],[52,2],[52,3],[53,1],[53,1],[53,1],[53,1],[57,2],[58,1],[58,2],[58,2],[58,1],[36,1],[36,1],[36,1],[14,1],[14,1],[14,1],[14,1],[14,1],[59,2],[59,2],[59,2],[59,1],[59,1],[59,1],[66,3],[66,2],[66,2],[56,4],[73,0],[73,1],[73,3],[73,4],[73,6],[24,1],[24,2],[24,3],[24,4],[24,2],[24,3],[24,4],[24,5],[15,3],[15,3],[15,1],[15,2],[77,0],[77,1],[78,2],[78,4],[62,1],[62,1],[41,2],[55,2],[55,4],[88,1],[88,1],[61,5],[67,5],[67,4],[67,4],[83,1],[83,3],[83,4],[83,4],[83,6],[90,1],[90,1],[91,1],[91,3],[20,2],[20,3],[20,4],[20,5],[93,3],[11,2],[60,3],[60,5],[99,2],[99,4],[99,2],[99,4],[21,2],[21,2],[21,2],[21,1],[103,2],[103,2],[22,2],[22,2],[22,2],[105,2],[105,2],[107,2],[107,3],[111,1],[111,1],[111,1],[109,1],[109,3],[108,2],[108,2],[108,4],[108,4],[108,4],[108,6],[108,6],[23,5],[23,7],[23,4],[23,6],[116,1],[116,2],[118,3],[118,4],[120,3],[120,5],[19,1],[19,3],[19,3],[19,3],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,5],[17,3]],performAction:function c(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return this.$=new d.Block;case 2:return this.$=f[g];case 3:return this.$=f[g-1];case 4:this.$=d.Block.wrap([f[g]]);break;case 5:this.$=f[g-2].push(f[g]);break;case 6:this.$=f[g-1];break;case 7:this.$=f[g];break;case 8:this.$=f[g];break;case 9:this.$=f[g];break;case 10:this.$=f[g];break;case 11:this.$=f[g];break;case 12:this.$=new d.Literal(f[g]);break;case 13:this.$=f[g];break;case 14:this.$=f[g];break;case 15:this.$=f[g];break;case 16:this.$=f[g];break;case 17:this.$=f[g];break;case 18:this.$=f[g];break;case 19:this.$=f[g];break;case 20:this.$=f[g];break;case 21:this.$=f[g];break;case 22:this.$=f[g];break;case 23:this.$=f[g];break;case 24:this.$=new d.Block;break;case 25:this.$=f[g-1];break;case 26:this.$=new d.Literal(f[g]);break;case 27:this.$=new d.Literal(f[g]);break;case 28:this.$=new d.Literal(f[g]);break;case 29:this.$=f[g];break;case 30:this.$=new d.Literal(f[g]);break;case 31:this.$=new d.Literal(f[g]);break;case 32:this.$=function(){var a;a=new d.Literal(f[g]),f[g]==="undefined"&&(a.isUndefined=!0);return a}();break;case 33:this.$=new d.Assign(f[g-2],f[g]);break;case 34:this.$=new d.Assign(f[g-4],f[g-1]);break;case 35:this.$=new d.Value(f[g]);break;case 36:this.$=new d.Assign(new d.Value(f[g-2]),f[g],"object");break;case 37:this.$=new d.Assign(new d.Value(f[g-4]),f[g-1],"object");break;case 38:this.$=f[g];break;case 39:this.$=f[g];break;case 40:this.$=f[g];break;case 41:this.$=f[g];break;case 42:this.$=new d.Return(f[g]);break;case 43:this.$=new d.Return;break;case 44:this.$=new d.Comment(f[g]);break;case 45:this.$=new d.Code(f[g-3],f[g],f[g-1]);break;case 46:this.$=new d.Code([],f[g],f[g-1]);break;case 47:this.$="func";break;case 48:this.$="boundfunc";break;case 49:this.$=f[g];break;case 50:this.$=f[g];break;case 51:this.$=[];break;case 52:this.$=[f[g]];break;case 53:this.$=f[g-2].concat(f[g]);break;case 54:this.$=new d.Param(f[g]);break;case 55:this.$=new d.Param(f[g-1],null,!0);break;case 56:this.$=new d.Param(f[g-2],f[g]);break;case 57:this.$=f[g];break;case 58:this.$=f[g];break;case 59:this.$=f[g];break;case 60:this.$=f[g];break;case 61:this.$=new d.Splat(f[g-1]);break;case 62:this.$=new d.Value(f[g]);break;case 63:this.$=f[g-1].push(f[g]);break;case 64:this.$=new d.Value(f[g-1],[f[g]]);break;case 65:this.$=f[g];break;case 66:this.$=f[g];break;case 67:this.$=new d.Value(f[g]);break;case 68:this.$=new d.Value(f[g]);break;case 69:this.$=f[g];break;case 70:this.$=new d.Value(f[g]);break;case 71:this.$=new d.Value(f[g]);break;case 72:this.$=new d.Value(f[g]);break;case 73:this.$=f[g];break;case 74:this.$=new d.Access(f[g]);break;case 75:this.$=new d.Access(f[g],"soak");break;case 76:this.$=new d.Access(f[g],"proto");break;case 77:this.$=new d.Access(new d.Literal("prototype"));break;case 78:this.$=f[g];break;case 79:this.$=new d.Slice(f[g]);break;case 80:this.$=new d.Index(f[g-1]);break;case 81:this.$=d.extend(f[g],{soak:!0});break;case 82:this.$=d.extend(f[g],{proto:!0});break;case 83:this.$=new d.Obj(f[g-2],f[g-3].generated);break;case 84:this.$=[];break;case 85:this.$=[f[g]];break;case 86:this.$=f[g-2].concat(f[g]);break;case 87:this.$=f[g-3].concat(f[g]);break;case 88:this.$=f[g-5].concat(f[g-2]);break;case 89:this.$=new d.Class;break;case 90:this.$=new d.Class(null,null,f[g]);break;case 91:this.$=new d.Class(null,f[g]);break;case 92:this.$=new d.Class(null,f[g-1],f[g]);break;case 93:this.$=new d.Class(f[g]);break;case 94:this.$=new d.Class(f[g-1],null,f[g]);break;case 95:this.$=new d.Class(f[g-2],f[g]);break;case 96:this.$=new d.Class(f[g-3],f[g-1],f[g]);break;case 97:this.$=new d.Call(f[g-2],f[g],f[g-1]);break;case 98:this.$=new d.Call(f[g-2],f[g],f[g-1]);break;case 99:this.$=new d.Call("super",[new d.Splat(new d.Literal("arguments"))]);break;case 100:this.$=new d.Call("super",f[g]);break;case 101:this.$=!1;break;case 102:this.$=!0;break;case 103:this.$=[];break;case 104:this.$=f[g-2];break;case 105:this.$=new d.Value(new d.Literal("this"));break;case 106:this.$=new d.Value(new d.Literal("this"));break;case 107:this.$=new d.Value(new d.Literal("this"),[new d.Access(f[g])],"this");break;case 108:this.$=new d.Arr([]);break;case 109:this.$=new d.Arr(f[g-2]);break;case 110:this.$="inclusive";break;case 111:this.$="exclusive";break;case 112:this.$=new d.Range(f[g-3],f[g-1],f[g-2]);break;case 113:this.$=new d.Range(f[g-3],f[g-1],f[g-2]);break;case 114:this.$=new d.Range(f[g-2],null,f[g-1]);break;case 115:this.$=new d.Range(null,f[g-1],f[g-2]);break;case 116:this.$=[f[g]];break;case 117:this.$=f[g-2].concat(f[g]);break;case 118:this.$=f[g-3].concat(f[g]);break;case 119:this.$=f[g-2];break;case 120:this.$=f[g-5].concat(f[g-2]);break;case 121:this.$=f[g];break;case 122:this.$=f[g];break;case 123:this.$=f[g];break;case 124:this.$=[].concat(f[g-2],f[g]);break;case 125:this.$=new d.Try(f[g]);break;case 126:this.$=new d.Try(f[g-1],f[g][0],f[g][1]);break;case 127:this.$=new d.Try(f[g-2],null,null,f[g]);break;case 128:this.$=new d.Try(f[g-3],f[g-2][0],f[g-2][1],f[g]);break;case 129:this.$=[f[g-1],f[g]];break;case 130:this.$=new d.Throw(f[g]);break;case 131:this.$=new d.Parens(f[g-1]);break;case 132:this.$=new d.Parens(f[g-2]);break;case 133:this.$=new d.While(f[g]);break;case 134:this.$=new d.While(f[g-2],{guard:f[g]});break;case 135:this.$=new d.While(f[g],{invert:!0});break;case 136:this.$=new d.While(f[g-2],{invert:!0,guard:f[g]});break;case 137:this.$=f[g-1].addBody(f[g]);break;case 138:this.$=f[g].addBody(d.Block.wrap([f[g-1]]));break;case 139:this.$=f[g].addBody(d.Block.wrap([f[g-1]]));break;case 140:this.$=f[g];break;case 141:this.$=(new d.While(new d.Literal("true"))).addBody(f[g]);break;case 142:this.$=(new d.While(new d.Literal("true"))).addBody(d.Block.wrap([f[g]]));break;case 143:this.$=new d.For(f[g-1],f[g]);break;case 144:this.$=new d.For(f[g-1],f[g]);break;case 145:this.$=new d.For(f[g],f[g-1]);break;case 146:this.$={source:new d.Value(f[g])};break;case 147:this.$=function(){f[g].own=f[g-1].own,f[g].name=f[g-1][0],f[g].index=f[g-1][1];return f[g]}();break;case 148:this.$=f[g];break;case 149:this.$=function(){f[g].own=!0;return f[g]}();break;case 150:this.$=f[g];break;case 151:this.$=new d.Value(f[g]);break;case 152:this.$=new d.Value(f[g]);break;case 153:this.$=[f[g]];break;case 154:this.$=[f[g-2],f[g]];break;case 155:this.$={source:f[g]};break;case 156:this.$={source:f[g],object:!0};break;case 157:this.$={source:f[g-2],guard:f[g]};break;case 158:this.$={source:f[g-2],guard:f[g],object:!0};break;case 159:this.$={source:f[g-2],step:f[g]};break;case 160:this.$={source:f[g-4],guard:f[g-2],step:f[g]};break;case 161:this.$={source:f[g-4],step:f[g-2],guard:f[g]};break;case 162:this.$=new d.Switch(f[g-3],f[g-1]);break;case 163:this.$=new d.Switch(f[g-5],f[g-3],f[g-1]);break;case 164:this.$=new d.Switch(null,f[g-1]);break;case 165:this.$=new d.Switch(null,f[g-3],f[g-1]);break;case 166:this.$=f[g];break;case 167:this.$=f[g-1].concat(f[g]);break;case 168:this.$=[[f[g-1],f[g]]];break;case 169:this.$=[[f[g-2],f[g-1]]];break;case 170:this.$=new d.If(f[g-1],f[g],{type:f[g-2]});break;case 171:this.$=f[g-4].addElse(new d.If(f[g-1],f[g],{type:f[g-2]}));break;case 172:this.$=f[g];break;case 173:this.$=f[g-2].addElse(f[g]);break;case 174:this.$=new d.If(f[g],d.Block.wrap([f[g-2]]),{type:f[g-1],statement:!0});break;case 175:this.$=new d.If(f[g],d.Block.wrap([f[g-2]]),{type:f[g-1],statement:!0});break;case 176:this.$=new d.Op(f[g-1],f[g]);break;case 177:this.$=new d.Op("-",f[g]);break;case 178:this.$=new d.Op("+",f[g]);break;case 179:this.$=new d.Op("--",f[g]);break;case 180:this.$=new d.Op("++",f[g]);break;case 181:this.$=new d.Op("--",f[g-1],null,!0);break;case 182:this.$=new d.Op("++",f[g-1],null,!0);break;case 183:this.$=new d.Existence(f[g-1]);break;case 184:this.$=new d.Op("+",f[g-2],f[g]);break;case 185:this.$=new d.Op("-",f[g-2],f[g]);break;case 186:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 187:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 188:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 189:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 190:this.$=function(){return f[g-1].charAt(0)==="!"?(new d.Op(f[g-1].slice(1),f[g-2],f[g])).invert():new d.Op(f[g-1],f[g-2],f[g])}();break;case 191:this.$=new d.Assign(f[g-2],f[g],f[g-1]);break;case 192:this.$=new d.Assign(f[g-4],f[g-1],f[g-3]);break;case 193:this.$=new d.Extends(f[g-2],f[g])}},table:[{1:[2,1],3:1,4:2,5:3,7:4,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,5],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[3]},{1:[2,2],6:[1,71]},{6:[1,72]},{1:[2,4],6:[2,4],26:[2,4],98:[2,4]},{4:74,7:4,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,26:[1,73],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,7],6:[2,7],26:[2,7],98:[2,7],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,8],6:[2,8],26:[2,8],98:[2,8],99:87,100:[1,62],102:[1,63],105:88,106:[1,65],107:66,122:[1,86]},{1:[2,13],6:[2,13],25:[2,13],26:[2,13],46:[2,13],51:[2,13],54:[2,13],59:90,63:[1,92],64:[1,93],65:[1,94],66:95,67:96,68:[1,97],69:[2,13],70:[1,98],71:[1,99],74:[2,13],77:89,80:[1,91],81:[2,101],82:[2,13],87:[2,13],89:[2,13],98:[2,13],100:[2,13],101:[2,13],102:[2,13],106:[2,13],114:[2,13],122:[2,13],124:[2,13],125:[2,13],128:[2,13],129:[2,13],130:[2,13],131:[2,13],132:[2,13],133:[2,13]},{1:[2,14],6:[2,14],25:[2,14],26:[2,14],46:[2,14],51:[2,14],54:[2,14],59:101,63:[1,92],64:[1,93],65:[1,94],66:95,67:96,68:[1,97],69:[2,14],70:[1,98],71:[1,99],74:[2,14],77:100,80:[1,91],81:[2,101],82:[2,14],87:[2,14],89:[2,14],98:[2,14],100:[2,14],101:[2,14],102:[2,14],106:[2,14],114:[2,14],122:[2,14],124:[2,14],125:[2,14],128:[2,14],129:[2,14],130:[2,14],131:[2,14],132:[2,14],133:[2,14]},{1:[2,15],6:[2,15],25:[2,15],26:[2,15],46:[2,15],51:[2,15],54:[2,15],69:[2,15],74:[2,15],82:[2,15],87:[2,15],89:[2,15],98:[2,15],100:[2,15],101:[2,15],102:[2,15],106:[2,15],114:[2,15],122:[2,15],124:[2,15],125:[2,15],128:[2,15],129:[2,15],130:[2,15],131:[2,15],132:[2,15],133:[2,15]},{1:[2,16],6:[2,16],25:[2,16],26:[2,16],46:[2,16],51:[2,16],54:[2,16],69:[2,16],74:[2,16],82:[2,16],87:[2,16],89:[2,16],98:[2,16],100:[2,16],101:[2,16],102:[2,16],106:[2,16],114:[2,16],122:[2,16],124:[2,16],125:[2,16],128:[2,16],129:[2,16],130:[2,16],131:[2,16],132:[2,16],133:[2,16]},{1:[2,17],6:[2,17],25:[2,17],26:[2,17],46:[2,17],51:[2,17],54:[2,17],69:[2,17],74:[2,17],82:[2,17],87:[2,17],89:[2,17],98:[2,17],100:[2,17],101:[2,17],102:[2,17],106:[2,17],114:[2,17],122:[2,17],124:[2,17],125:[2,17],128:[2,17],129:[2,17],130:[2,17],131:[2,17],132:[2,17],133:[2,17]},{1:[2,18],6:[2,18],25:[2,18],26:[2,18],46:[2,18],51:[2,18],54:[2,18],69:[2,18],74:[2,18],82:[2,18],87:[2,18],89:[2,18],98:[2,18],100:[2,18],101:[2,18],102:[2,18],106:[2,18],114:[2,18],122:[2,18],124:[2,18],125:[2,18],128:[2,18],129:[2,18],130:[2,18],131:[2,18],132:[2,18],133:[2,18]},{1:[2,19],6:[2,19],25:[2,19],26:[2,19],46:[2,19],51:[2,19],54:[2,19],69:[2,19],74:[2,19],82:[2,19],87:[2,19],89:[2,19],98:[2,19],100:[2,19],101:[2,19],102:[2,19],106:[2,19],114:[2,19],122:[2,19],124:[2,19],125:[2,19],128:[2,19],129:[2,19],130:[2,19],131:[2,19],132:[2,19],133:[2,19]},{1:[2,20],6:[2,20],25:[2,20],26:[2,20],46:[2,20],51:[2,20],54:[2,20],69:[2,20],74:[2,20],82:[2,20],87:[2,20],89:[2,20],98:[2,20],100:[2,20],101:[2,20],102:[2,20],106:[2,20],114:[2,20],122:[2,20],124:[2,20],125:[2,20],128:[2,20],129:[2,20],130:[2,20],131:[2,20],132:[2,20],133:[2,20]},{1:[2,21],6:[2,21],25:[2,21],26:[2,21],46:[2,21],51:[2,21],54:[2,21],69:[2,21],74:[2,21],82:[2,21],87:[2,21],89:[2,21],98:[2,21],100:[2,21],101:[2,21],102:[2,21],106:[2,21],114:[2,21],122:[2,21],124:[2,21],125:[2,21],128:[2,21],129:[2,21],130:[2,21],131:[2,21],132:[2,21],133:[2,21]},{1:[2,22],6:[2,22],25:[2,22],26:[2,22],46:[2,22],51:[2,22],54:[2,22],69:[2,22],74:[2,22],82:[2,22],87:[2,22],89:[2,22],98:[2,22],100:[2,22],101:[2,22],102:[2,22],106:[2,22],114:[2,22],122:[2,22],124:[2,22],125:[2,22],128:[2,22],129:[2,22],130:[2,22],131:[2,22],132:[2,22],133:[2,22]},{1:[2,23],6:[2,23],25:[2,23],26:[2,23],46:[2,23],51:[2,23],54:[2,23],69:[2,23],74:[2,23],82:[2,23],87:[2,23],89:[2,23],98:[2,23],100:[2,23],101:[2,23],102:[2,23],106:[2,23],114:[2,23],122:[2,23],124:[2,23],125:[2,23],128:[2,23],129:[2,23],130:[2,23],131:[2,23],132:[2,23],133:[2,23]},{1:[2,9],6:[2,9],26:[2,9],98:[2,9],100:[2,9],102:[2,9],106:[2,9],122:[2,9]},{1:[2,10],6:[2,10],26:[2,10],98:[2,10],100:[2,10],102:[2,10],106:[2,10],122:[2,10]},{1:[2,11],6:[2,11],26:[2,11],98:[2,11],100:[2,11],102:[2,11],106:[2,11],122:[2,11]},{1:[2,12],6:[2,12],26:[2,12],98:[2,12],100:[2,12],102:[2,12],106:[2,12],122:[2,12]},{1:[2,69],6:[2,69],25:[2,69],26:[2,69],37:[1,102],46:[2,69],51:[2,69],54:[2,69],63:[2,69],64:[2,69],65:[2,69],68:[2,69],69:[2,69],70:[2,69],71:[2,69],74:[2,69],80:[2,69],81:[2,69],82:[2,69],87:[2,69],89:[2,69],98:[2,69],100:[2,69],101:[2,69],102:[2,69],106:[2,69],114:[2,69],122:[2,69],124:[2,69],125:[2,69],128:[2,69],129:[2,69],130:[2,69],131:[2,69],132:[2,69],133:[2,69]},{1:[2,70],6:[2,70],25:[2,70],26:[2,70],46:[2,70],51:[2,70],54:[2,70],63:[2,70],64:[2,70],65:[2,70],68:[2,70],69:[2,70],70:[2,70],71:[2,70],74:[2,70],80:[2,70],81:[2,70],82:[2,70],87:[2,70],89:[2,70],98:[2,70],100:[2,70],101:[2,70],102:[2,70],106:[2,70],114:[2,70],122:[2,70],124:[2,70],125:[2,70],128:[2,70],129:[2,70],130:[2,70],131:[2,70],132:[2,70],133:[2,70]},{1:[2,71],6:[2,71],25:[2,71],26:[2,71],46:[2,71],51:[2,71],54:[2,71],63:[2,71],64:[2,71],65:[2,71],68:[2,71],69:[2,71],70:[2,71],71:[2,71],74:[2,71],80:[2,71],81:[2,71],82:[2,71],87:[2,71],89:[2,71],98:[2,71],100:[2,71],101:[2,71],102:[2,71],106:[2,71],114:[2,71],122:[2,71],124:[2,71],125:[2,71],128:[2,71],129:[2,71],130:[2,71],131:[2,71],132:[2,71],133:[2,71]},{1:[2,72],6:[2,72],25:[2,72],26:[2,72],46:[2,72],51:[2,72],54:[2,72],63:[2,72],64:[2,72],65:[2,72],68:[2,72],69:[2,72],70:[2,72],71:[2,72],74:[2,72],80:[2,72],81:[2,72],82:[2,72],87:[2,72],89:[2,72],98:[2,72],100:[2,72],101:[2,72],102:[2,72],106:[2,72],114:[2,72],122:[2,72],124:[2,72],125:[2,72],128:[2,72],129:[2,72],130:[2,72],131:[2,72],132:[2,72],133:[2,72]},{1:[2,73],6:[2,73],25:[2,73],26:[2,73],46:[2,73],51:[2,73],54:[2,73],63:[2,73],64:[2,73],65:[2,73],68:[2,73],69:[2,73],70:[2,73],71:[2,73],74:[2,73],80:[2,73],81:[2,73],82:[2,73],87:[2,73],89:[2,73],98:[2,73],100:[2,73],101:[2,73],102:[2,73],106:[2,73],114:[2,73],122:[2,73],124:[2,73],125:[2,73],128:[2,73],129:[2,73],130:[2,73],131:[2,73],132:[2,73],133:[2,73]},{1:[2,99],6:[2,99],25:[2,99],26:[2,99],46:[2,99],51:[2,99],54:[2,99],63:[2,99],64:[2,99],65:[2,99],68:[2,99],69:[2,99],70:[2,99],71:[2,99],74:[2,99],78:103,80:[2,99],81:[1,104],82:[2,99],87:[2,99],89:[2,99],98:[2,99],100:[2,99],101:[2,99],102:[2,99],106:[2,99],114:[2,99],122:[2,99],124:[2,99],125:[2,99],128:[2,99],129:[2,99],130:[2,99],131:[2,99],132:[2,99],133:[2,99]},{27:108,28:[1,70],41:109,45:105,46:[2,51],51:[2,51],52:106,53:107,55:110,56:111,72:[1,67],85:[1,112],86:[1,113]},{5:114,25:[1,5]},{8:115,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:117,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:118,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{14:120,15:121,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:122,41:60,55:47,56:48,58:119,60:25,61:26,62:27,72:[1,67],79:[1,28],84:[1,55],85:[1,56],86:[1,54],97:[1,53]},{14:120,15:121,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:122,41:60,55:47,56:48,58:123,60:25,61:26,62:27,72:[1,67],79:[1,28],84:[1,55],85:[1,56],86:[1,54],97:[1,53]},{1:[2,66],6:[2,66],25:[2,66],26:[2,66],37:[2,66],46:[2,66],51:[2,66],54:[2,66],63:[2,66],64:[2,66],65:[2,66],68:[2,66],69:[2,66],70:[2,66],71:[2,66],74:[2,66],76:[1,127],80:[2,66],81:[2,66],82:[2,66],87:[2,66],89:[2,66],98:[2,66],100:[2,66],101:[2,66],102:[2,66],106:[2,66],114:[2,66],122:[2,66],124:[2,66],125:[2,66],126:[1,124],127:[1,125],128:[2,66],129:[2,66],130:[2,66],131:[2,66],132:[2,66],133:[2,66],134:[1,126]},{1:[2,172],6:[2,172],25:[2,172],26:[2,172],46:[2,172],51:[2,172],54:[2,172],69:[2,172],74:[2,172],82:[2,172],87:[2,172],89:[2,172],98:[2,172],100:[2,172],101:[2,172],102:[2,172],106:[2,172],114:[2,172],117:[1,128],122:[2,172],124:[2,172],125:[2,172],128:[2,172],129:[2,172],130:[2,172],131:[2,172],132:[2,172],133:[2,172]},{5:129,25:[1,5]},{5:130,25:[1,5]},{1:[2,140],6:[2,140],25:[2,140],26:[2,140],46:[2,140],51:[2,140],54:[2,140],69:[2,140],74:[2,140],82:[2,140],87:[2,140],89:[2,140],98:[2,140],100:[2,140],101:[2,140],102:[2,140],106:[2,140],114:[2,140],122:[2,140],124:[2,140],125:[2,140],128:[2,140],129:[2,140],130:[2,140],131:[2,140],132:[2,140],133:[2,140]},{5:131,25:[1,5]},{8:132,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,133],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,89],5:134,6:[2,89],14:120,15:121,25:[1,5],26:[2,89],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:122,41:60,46:[2,89],51:[2,89],54:[2,89],55:47,56:48,58:136,60:25,61:26,62:27,69:[2,89],72:[1,67],74:[2,89],76:[1,135],79:[1,28],82:[2,89],84:[1,55],85:[1,56],86:[1,54],87:[2,89],89:[2,89],97:[1,53],98:[2,89],100:[2,89],101:[2,89],102:[2,89],106:[2,89],114:[2,89],122:[2,89],124:[2,89],125:[2,89],128:[2,89],129:[2,89],130:[2,89],131:[2,89],132:[2,89],133:[2,89]},{1:[2,43],6:[2,43],8:137,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,26:[2,43],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],98:[2,43],99:39,100:[2,43],102:[2,43],103:40,104:[1,64],105:41,106:[2,43],107:66,115:[1,42],120:37,121:[1,61],122:[2,43],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:138,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,44],6:[2,44],25:[2,44],26:[2,44],51:[2,44],74:[2,44],98:[2,44],100:[2,44],102:[2,44],106:[2,44],122:[2,44]},{1:[2,67],6:[2,67],25:[2,67],26:[2,67],37:[2,67],46:[2,67],51:[2,67],54:[2,67],63:[2,67],64:[2,67],65:[2,67],68:[2,67],69:[2,67],70:[2,67],71:[2,67],74:[2,67],80:[2,67],81:[2,67],82:[2,67],87:[2,67],89:[2,67],98:[2,67],100:[2,67],101:[2,67],102:[2,67],106:[2,67],114:[2,67],122:[2,67],124:[2,67],125:[2,67],128:[2,67],129:[2,67],130:[2,67],131:[2,67],132:[2,67],133:[2,67]},{1:[2,68],6:[2,68],25:[2,68],26:[2,68],37:[2,68],46:[2,68],51:[2,68],54:[2,68],63:[2,68],64:[2,68],65:[2,68],68:[2,68],69:[2,68],70:[2,68],71:[2,68],74:[2,68],80:[2,68],81:[2,68],82:[2,68],87:[2,68],89:[2,68],98:[2,68],100:[2,68],101:[2,68],102:[2,68],106:[2,68],114:[2,68],122:[2,68],124:[2,68],125:[2,68],128:[2,68],129:[2,68],130:[2,68],131:[2,68],132:[2,68],133:[2,68]},{1:[2,29],6:[2,29],25:[2,29],26:[2,29],46:[2,29],51:[2,29],54:[2,29],63:[2,29],64:[2,29],65:[2,29],68:[2,29],69:[2,29],70:[2,29],71:[2,29],74:[2,29],80:[2,29],81:[2,29],82:[2,29],87:[2,29],89:[2,29],98:[2,29],100:[2,29],101:[2,29],102:[2,29],106:[2,29],114:[2,29],122:[2,29],124:[2,29],125:[2,29],128:[2,29],129:[2,29],130:[2,29],131:[2,29],132:[2,29],133:[2,29]},{1:[2,30],6:[2,30],25:[2,30],26:[2,30],46:[2,30],51:[2,30],54:[2,30],63:[2,30],64:[2,30],65:[2,30],68:[2,30],69:[2,30],70:[2,30],71:[2,30],74:[2,30],80:[2,30],81:[2,30],82:[2,30],87:[2,30],89:[2,30],98:[2,30],100:[2,30],101:[2,30],102:[2,30],106:[2,30],114:[2,30],122:[2,30],124:[2,30],125:[2,30],128:[2,30],129:[2,30],130:[2,30],131:[2,30],132:[2,30],133:[2,30]},{1:[2,31],6:[2,31],25:[2,31],26:[2,31],46:[2,31],51:[2,31],54:[2,31],63:[2,31],64:[2,31],65:[2,31],68:[2,31],69:[2,31],70:[2,31],71:[2,31],74:[2,31],80:[2,31],81:[2,31],82:[2,31],87:[2,31],89:[2,31],98:[2,31],100:[2,31],101:[2,31],102:[2,31],106:[2,31],114:[2,31],122:[2,31],124:[2,31],125:[2,31],128:[2,31],129:[2,31],130:[2,31],131:[2,31],132:[2,31],133:[2,31]},{1:[2,32],6:[2,32],25:[2,32],26:[2,32],46:[2,32],51:[2,32],54:[2,32],63:[2,32],64:[2,32],65:[2,32],68:[2,32],69:[2,32],70:[2,32],71:[2,32],74:[2,32],80:[2,32],81:[2,32],82:[2,32],87:[2,32],89:[2,32],98:[2,32],100:[2,32],101:[2,32],102:[2,32],106:[2,32],114:[2,32],122:[2,32],124:[2,32],125:[2,32],128:[2,32],129:[2,32],130:[2,32],131:[2,32],132:[2,32],133:[2,32]},{4:139,7:4,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,140],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:141,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,145],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],83:143,84:[1,55],85:[1,56],86:[1,54],87:[1,142],90:144,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,105],6:[2,105],25:[2,105],26:[2,105],46:[2,105],51:[2,105],54:[2,105],63:[2,105],64:[2,105],65:[2,105],68:[2,105],69:[2,105],70:[2,105],71:[2,105],74:[2,105],80:[2,105],81:[2,105],82:[2,105],87:[2,105],89:[2,105],98:[2,105],100:[2,105],101:[2,105],102:[2,105],106:[2,105],114:[2,105],122:[2,105],124:[2,105],125:[2,105],128:[2,105],129:[2,105],130:[2,105],131:[2,105],132:[2,105],133:[2,105]},{1:[2,106],6:[2,106],25:[2,106],26:[2,106],27:147,28:[1,70],46:[2,106],51:[2,106],54:[2,106],63:[2,106],64:[2,106],65:[2,106],68:[2,106],69:[2,106],70:[2,106],71:[2,106],74:[2,106],80:[2,106],81:[2,106],82:[2,106],87:[2,106],89:[2,106],98:[2,106],100:[2,106],101:[2,106],102:[2,106],106:[2,106],114:[2,106],122:[2,106],124:[2,106],125:[2,106],128:[2,106],129:[2,106],130:[2,106],131:[2,106],132:[2,106],133:[2,106]},{25:[2,47]},{25:[2,48]},{1:[2,62],6:[2,62],25:[2,62],26:[2,62],37:[2,62],46:[2,62],51:[2,62],54:[2,62],63:[2,62],64:[2,62],65:[2,62],68:[2,62],69:[2,62],70:[2,62],71:[2,62],74:[2,62],76:[2,62],80:[2,62],81:[2,62],82:[2,62],87:[2,62],89:[2,62],98:[2,62],100:[2,62],101:[2,62],102:[2,62],106:[2,62],114:[2,62],122:[2,62],124:[2,62],125:[2,62],126:[2,62],127:[2,62],128:[2,62],129:[2,62],130:[2,62],131:[2,62],132:[2,62],133:[2,62],134:[2,62]},{1:[2,65],6:[2,65],25:[2,65],26:[2,65],37:[2,65],46:[2,65],51:[2,65],54:[2,65],63:[2,65],64:[2,65],65:[2,65],68:[2,65],69:[2,65],70:[2,65],71:[2,65],74:[2,65],76:[2,65],80:[2,65],81:[2,65],82:[2,65],87:[2,65],89:[2,65],98:[2,65],100:[2,65],101:[2,65],102:[2,65],106:[2,65],114:[2,65],122:[2,65],124:[2,65],125:[2,65],126:[2,65],127:[2,65],128:[2,65],129:[2,65],130:[2,65],131:[2,65],132:[2,65],133:[2,65],134:[2,65]},{8:148,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:149,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:150,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{5:151,8:152,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,5],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{27:157,28:[1,70],55:158,56:159,61:153,72:[1,67],86:[1,54],109:154,110:[1,155],111:156},{108:160,112:[1,161],113:[1,162]},{6:[2,84],12:166,25:[2,84],27:167,28:[1,70],29:168,30:[1,68],31:[1,69],38:164,39:165,41:169,43:[1,46],51:[2,84],73:163,74:[2,84],85:[1,112]},{1:[2,27],6:[2,27],25:[2,27],26:[2,27],40:[2,27],46:[2,27],51:[2,27],54:[2,27],63:[2,27],64:[2,27],65:[2,27],68:[2,27],69:[2,27],70:[2,27],71:[2,27],74:[2,27],80:[2,27],81:[2,27],82:[2,27],87:[2,27],89:[2,27],98:[2,27],100:[2,27],101:[2,27],102:[2,27],106:[2,27],114:[2,27],122:[2,27],124:[2,27],125:[2,27],128:[2,27],129:[2,27],130:[2,27],131:[2,27],132:[2,27],133:[2,27]},{1:[2,28],6:[2,28],25:[2,28],26:[2,28],40:[2,28],46:[2,28],51:[2,28],54:[2,28],63:[2,28],64:[2,28],65:[2,28],68:[2,28],69:[2,28],70:[2,28],71:[2,28],74:[2,28],80:[2,28],81:[2,28],82:[2,28],87:[2,28],89:[2,28],98:[2,28],100:[2,28],101:[2,28],102:[2,28],106:[2,28],114:[2,28],122:[2,28],124:[2,28],125:[2,28],128:[2,28],129:[2,28],130:[2,28],131:[2,28],132:[2,28],133:[2,28]},{1:[2,26],6:[2,26],25:[2,26],26:[2,26],37:[2,26],40:[2,26],46:[2,26],51:[2,26],54:[2,26],63:[2,26],64:[2,26],65:[2,26],68:[2,26],69:[2,26],70:[2,26],71:[2,26],74:[2,26],76:[2,26],80:[2,26],81:[2,26],82:[2,26],87:[2,26],89:[2,26],98:[2,26],100:[2,26],101:[2,26],102:[2,26],106:[2,26],112:[2,26],113:[2,26],114:[2,26],122:[2,26],124:[2,26],125:[2,26],126:[2,26],127:[2,26],128:[2,26],129:[2,26],130:[2,26],131:[2,26],132:[2,26],133:[2,26],134:[2,26]},{1:[2,6],6:[2,6],7:170,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,26:[2,6],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],98:[2,6],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,3]},{1:[2,24],6:[2,24],25:[2,24],26:[2,24],46:[2,24],51:[2,24],54:[2,24],69:[2,24],74:[2,24],82:[2,24],87:[2,24],89:[2,24],94:[2,24],95:[2,24],98:[2,24],100:[2,24],101:[2,24],102:[2,24],106:[2,24],114:[2,24],117:[2,24],119:[2,24],122:[2,24],124:[2,24],125:[2,24],128:[2,24],129:[2,24],130:[2,24],131:[2,24],132:[2,24],133:[2,24]},{6:[1,71],26:[1,171]},{1:[2,183],6:[2,183],25:[2,183],26:[2,183],46:[2,183],51:[2,183],54:[2,183],69:[2,183],74:[2,183],82:[2,183],87:[2,183],89:[2,183],98:[2,183],100:[2,183],101:[2,183],102:[2,183],106:[2,183],114:[2,183],122:[2,183],124:[2,183],125:[2,183],128:[2,183],129:[2,183],130:[2,183],131:[2,183],132:[2,183],133:[2,183]},{8:172,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:173,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:174,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:175,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:176,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:177,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:178,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:179,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,139],6:[2,139],25:[2,139],26:[2,139],46:[2,139],51:[2,139],54:[2,139],69:[2,139],74:[2,139],82:[2,139],87:[2,139],89:[2,139],98:[2,139],100:[2,139],101:[2,139],102:[2,139],106:[2,139],114:[2,139],122:[2,139],124:[2,139],125:[2,139],128:[2,139],129:[2,139],130:[2,139],131:[2,139],132:[2,139],133:[2,139]},{1:[2,144],6:[2,144],25:[2,144],26:[2,144],46:[2,144],51:[2,144],54:[2,144],69:[2,144],74:[2,144],82:[2,144],87:[2,144],89:[2,144],98:[2,144],100:[2,144],101:[2,144],102:[2,144],106:[2,144],114:[2,144],122:[2,144],124:[2,144],125:[2,144],128:[2,144],129:[2,144],130:[2,144],131:[2,144],132:[2,144],133:[2,144]},{8:180,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,138],6:[2,138],25:[2,138],26:[2,138],46:[2,138],51:[2,138],54:[2,138],69:[2,138],74:[2,138],82:[2,138],87:[2,138],89:[2,138],98:[2,138],100:[2,138],101:[2,138],102:[2,138],106:[2,138],114:[2,138],122:[2,138],124:[2,138],125:[2,138],128:[2,138],129:[2,138],130:[2,138],131:[2,138],132:[2,138],133:[2,138]},{1:[2,143],6:[2,143],25:[2,143],26:[2,143],46:[2,143],51:[2,143],54:[2,143],69:[2,143],74:[2,143],82:[2,143],87:[2,143],89:[2,143],98:[2,143],100:[2,143],101:[2,143],102:[2,143],106:[2,143],114:[2,143],122:[2,143],124:[2,143],125:[2,143],128:[2,143],129:[2,143],130:[2,143],131:[2,143],132:[2,143],133:[2,143]},{78:181,81:[1,104]},{1:[2,63],6:[2,63],25:[2,63],26:[2,63],37:[2,63],46:[2,63],51:[2,63],54:[2,63],63:[2,63],64:[2,63],65:[2,63],68:[2,63],69:[2,63],70:[2,63],71:[2,63],74:[2,63],76:[2,63],80:[2,63],81:[2,63],82:[2,63],87:[2,63],89:[2,63],98:[2,63],100:[2,63],101:[2,63],102:[2,63],106:[2,63],114:[2,63],122:[2,63],124:[2,63],125:[2,63],126:[2,63],127:[2,63],128:[2,63],129:[2,63],130:[2,63],131:[2,63],132:[2,63],133:[2,63],134:[2,63]},{81:[2,102]},{27:182,28:[1,70]},{27:183,28:[1,70]},{1:[2,77],6:[2,77],25:[2,77],26:[2,77],27:184,28:[1,70],37:[2,77],46:[2,77],51:[2,77],54:[2,77],63:[2,77],64:[2,77],65:[2,77],68:[2,77],69:[2,77],70:[2,77],71:[2,77],74:[2,77],76:[2,77],80:[2,77],81:[2,77],82:[2,77],87:[2,77],89:[2,77],98:[2,77],100:[2,77],101:[2,77],102:[2,77],106:[2,77],114:[2,77],122:[2,77],124:[2,77],125:[2,77],126:[2,77],127:[2,77],128:[2,77],129:[2,77],130:[2,77],131:[2,77],132:[2,77],133:[2,77],134:[2,77]},{1:[2,78],6:[2,78],25:[2,78],26:[2,78],37:[2,78],46:[2,78],51:[2,78],54:[2,78],63:[2,78],64:[2,78],65:[2,78],68:[2,78],69:[2,78],70:[2,78],71:[2,78],74:[2,78],76:[2,78],80:[2,78],81:[2,78],82:[2,78],87:[2,78],89:[2,78],98:[2,78],100:[2,78],101:[2,78],102:[2,78],106:[2,78],114:[2,78],122:[2,78],124:[2,78],125:[2,78],126:[2,78],127:[2,78],128:[2,78],129:[2,78],130:[2,78],131:[2,78],132:[2,78],133:[2,78],134:[2,78]},{1:[2,79],6:[2,79],25:[2,79],26:[2,79],37:[2,79],46:[2,79],51:[2,79],54:[2,79],63:[2,79],64:[2,79],65:[2,79],68:[2,79],69:[2,79],70:[2,79],71:[2,79],74:[2,79],76:[2,79],80:[2,79],81:[2,79],82:[2,79],87:[2,79],89:[2,79],98:[2,79],100:[2,79],101:[2,79],102:[2,79],106:[2,79],114:[2,79],122:[2,79],124:[2,79],125:[2,79],126:[2,79],127:[2,79],128:[2,79],129:[2,79],130:[2,79],131:[2,79],132:[2,79],133:[2,79],134:[2,79]},{8:185,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],54:[1,188],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],88:186,89:[1,187],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{66:189,68:[1,190],70:[1,98],71:[1,99]},{66:191,68:[1,190],70:[1,98],71:[1,99]},{78:192,81:[1,104]},{1:[2,64],6:[2,64],25:[2,64],26:[2,64],37:[2,64],46:[2,64],51:[2,64],54:[2,64],63:[2,64],64:[2,64],65:[2,64],68:[2,64],69:[2,64],70:[2,64],71:[2,64],74:[2,64],76:[2,64],80:[2,64],81:[2,64],82:[2,64],87:[2,64],89:[2,64],98:[2,64],100:[2,64],101:[2,64],102:[2,64],106:[2,64],114:[2,64],122:[2,64],124:[2,64],125:[2,64],126:[2,64],127:[2,64],128:[2,64],129:[2,64],130:[2,64],131:[2,64],132:[2,64],133:[2,64],134:[2,64]},{8:193,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,194],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,100],6:[2,100],25:[2,100],26:[2,100],46:[2,100],51:[2,100],54:[2,100],63:[2,100],64:[2,100],65:[2,100],68:[2,100],69:[2,100],70:[2,100],71:[2,100],74:[2,100],80:[2,100],81:[2,100],82:[2,100],87:[2,100],89:[2,100],98:[2,100],100:[2,100],101:[2,100],102:[2,100],106:[2,100],114:[2,100],122:[2,100],124:[2,100],125:[2,100],128:[2,100],129:[2,100],130:[2,100],131:[2,100],132:[2,100],133:[2,100]},{8:197,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,145],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],82:[1,195],83:196,84:[1,55],85:[1,56],86:[1,54],90:144,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{46:[1,198],51:[1,199]},{46:[2,52],51:[2,52]},{37:[1,201],46:[2,54],51:[2,54],54:[1,200]},{37:[2,57],46:[2,57],51:[2,57],54:[2,57]},{37:[2,58],46:[2,58],51:[2,58],54:[2,58]},{37:[2,59],46:[2,59],51:[2,59],54:[2,59]},{37:[2,60],46:[2,60],51:[2,60],54:[2,60]},{27:147,28:[1,70]},{8:197,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,145],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],83:143,84:[1,55],85:[1,56],86:[1,54],87:[1,142],90:144,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,46],6:[2,46],25:[2,46],26:[2,46],46:[2,46],51:[2,46],54:[2,46],69:[2,46],74:[2,46],82:[2,46],87:[2,46],89:[2,46],98:[2,46],100:[2,46],101:[2,46],102:[2,46],106:[2,46],114:[2,46],122:[2,46],124:[2,46],125:[2,46],128:[2,46],129:[2,46],130:[2,46],131:[2,46],132:[2,46],133:[2,46]},{1:[2,176],6:[2,176],25:[2,176],26:[2,176],46:[2,176],51:[2,176],54:[2,176],69:[2,176],74:[2,176],82:[2,176],87:[2,176],89:[2,176],98:[2,176],99:84,100:[2,176],101:[2,176],102:[2,176],105:85,106:[2,176],107:66,114:[2,176],122:[2,176],124:[2,176],125:[2,176],128:[1,75],129:[2,176],130:[2,176],131:[2,176],132:[2,176],133:[2,176]},{99:87,100:[1,62],102:[1,63],105:88,106:[1,65],107:66,122:[1,86]},{1:[2,177],6:[2,177],25:[2,177],26:[2,177],46:[2,177],51:[2,177],54:[2,177],69:[2,177],74:[2,177],82:[2,177],87:[2,177],89:[2,177],98:[2,177],99:84,100:[2,177],101:[2,177],102:[2,177],105:85,106:[2,177],107:66,114:[2,177],122:[2,177],124:[2,177],125:[2,177],128:[1,75],129:[2,177],130:[2,177],131:[2,177],132:[2,177],133:[2,177]},{1:[2,178],6:[2,178],25:[2,178],26:[2,178],46:[2,178],51:[2,178],54:[2,178],69:[2,178],74:[2,178],82:[2,178],87:[2,178],89:[2,178],98:[2,178],99:84,100:[2,178],101:[2,178],102:[2,178],105:85,106:[2,178],107:66,114:[2,178],122:[2,178],124:[2,178],125:[2,178],128:[1,75],129:[2,178],130:[2,178],131:[2,178],132:[2,178],133:[2,178]},{1:[2,179],6:[2,179],25:[2,179],26:[2,179],46:[2,179],51:[2,179],54:[2,179],63:[2,66],64:[2,66],65:[2,66],68:[2,66],69:[2,179],70:[2,66],71:[2,66],74:[2,179],80:[2,66],81:[2,66],82:[2,179],87:[2,179],89:[2,179],98:[2,179],100:[2,179],101:[2,179],102:[2,179],106:[2,179],114:[2,179],122:[2,179],124:[2,179],125:[2,179],128:[2,179],129:[2,179],130:[2,179],131:[2,179],132:[2,179],133:[2,179]},{59:90,63:[1,92],64:[1,93],65:[1,94],66:95,67:96,68:[1,97],70:[1,98],71:[1,99],77:89,80:[1,91],81:[2,101]},{59:101,63:[1,92],64:[1,93],65:[1,94],66:95,67:96,68:[1,97],70:[1,98],71:[1,99],77:100,80:[1,91],81:[2,101]},{1:[2,69],6:[2,69],25:[2,69],26:[2,69],46:[2,69],51:[2,69],54:[2,69],63:[2,69],64:[2,69],65:[2,69],68:[2,69],69:[2,69],70:[2,69],71:[2,69],74:[2,69],80:[2,69],81:[2,69],82:[2,69],87:[2,69],89:[2,69],98:[2,69],100:[2,69],101:[2,69],102:[2,69],106:[2,69],114:[2,69],122:[2,69],124:[2,69],125:[2,69],128:[2,69],129:[2,69],130:[2,69],131:[2,69],132:[2,69],133:[2,69]},{1:[2,180],6:[2,180],25:[2,180],26:[2,180],46:[2,180],51:[2,180],54:[2,180],63:[2,66],64:[2,66],65:[2,66],68:[2,66],69:[2,180],70:[2,66],71:[2,66],74:[2,180],80:[2,66],81:[2,66],82:[2,180],87:[2,180],89:[2,180],98:[2,180],100:[2,180],101:[2,180],102:[2,180],106:[2,180],114:[2,180],122:[2,180],124:[2,180],125:[2,180],128:[2,180],129:[2,180],130:[2,180],131:[2,180],132:[2,180],133:[2,180]},{1:[2,181],6:[2,181],25:[2,181],26:[2,181],46:[2,181],51:[2,181],54:[2,181],69:[2,181],74:[2,181],82:[2,181],87:[2,181],89:[2,181],98:[2,181],100:[2,181],101:[2,181],102:[2,181],106:[2,181],114:[2,181],122:[2,181],124:[2,181],125:[2,181],128:[2,181],129:[2,181],130:[2,181],131:[2,181],132:[2,181],133:[2,181]},{1:[2,182],6:[2,182],25:[2,182],26:[2,182],46:[2,182],51:[2,182],54:[2,182],69:[2,182],74:[2,182],82:[2,182],87:[2,182],89:[2,182],98:[2,182],100:[2,182],101:[2,182],102:[2,182],106:[2,182],114:[2,182],122:[2,182],124:[2,182],125:[2,182],128:[2,182],129:[2,182],130:[2,182],131:[2,182],132:[2,182],133:[2,182]},{8:202,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,203],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:204,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{5:205,25:[1,5],121:[1,206]},{1:[2,125],6:[2,125],25:[2,125],26:[2,125],46:[2,125],51:[2,125],54:[2,125],69:[2,125],74:[2,125],82:[2,125],87:[2,125],89:[2,125],93:207,94:[1,208],95:[1,209],98:[2,125],100:[2,125],101:[2,125],102:[2,125],106:[2,125],114:[2,125],122:[2,125],124:[2,125],125:[2,125],128:[2,125],129:[2,125],130:[2,125],131:[2,125],132:[2,125],133:[2,125]},{1:[2,137],6:[2,137],25:[2,137],26:[2,137],46:[2,137],51:[2,137],54:[2,137],69:[2,137],74:[2,137],82:[2,137],87:[2,137],89:[2,137],98:[2,137],100:[2,137],101:[2,137],102:[2,137],106:[2,137],114:[2,137],122:[2,137],124:[2,137],125:[2,137],128:[2,137],129:[2,137],130:[2,137],131:[2,137],132:[2,137],133:[2,137]},{1:[2,145],6:[2,145],25:[2,145],26:[2,145],46:[2,145],51:[2,145],54:[2,145],69:[2,145],74:[2,145],82:[2,145],87:[2,145],89:[2,145],98:[2,145],100:[2,145],101:[2,145],102:[2,145],106:[2,145],114:[2,145],122:[2,145],124:[2,145],125:[2,145],128:[2,145],129:[2,145],130:[2,145],131:[2,145],132:[2,145],133:[2,145]},{25:[1,210],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{116:211,118:212,119:[1,213]},{1:[2,90],6:[2,90],25:[2,90],26:[2,90],46:[2,90],51:[2,90],54:[2,90],69:[2,90],74:[2,90],82:[2,90],87:[2,90],89:[2,90],98:[2,90],100:[2,90],101:[2,90],102:[2,90],106:[2,90],114:[2,90],122:[2,90],124:[2,90],125:[2,90],128:[2,90],129:[2,90],130:[2,90],131:[2,90],132:[2,90],133:[2,90]},{14:214,15:121,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:122,41:60,55:47,56:48,58:215,60:25,61:26,62:27,72:[1,67],79:[1,28],84:[1,55],85:[1,56],86:[1,54],97:[1,53]},{1:[2,93],5:216,6:[2,93],25:[1,5],26:[2,93],46:[2,93],51:[2,93],54:[2,93],63:[2,66],64:[2,66],65:[2,66],68:[2,66],69:[2,93],70:[2,66],71:[2,66],74:[2,93],76:[1,217],80:[2,66],81:[2,66],82:[2,93],87:[2,93],89:[2,93],98:[2,93],100:[2,93],101:[2,93],102:[2,93],106:[2,93],114:[2,93],122:[2,93],124:[2,93],125:[2,93],128:[2,93],129:[2,93],130:[2,93],131:[2,93],132:[2,93],133:[2,93]},{1:[2,42],6:[2,42],26:[2,42],98:[2,42],99:84,100:[2,42],102:[2,42],105:85,106:[2,42],107:66,122:[2,42],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,130],6:[2,130],26:[2,130],98:[2,130],99:84,100:[2,130],102:[2,130],105:85,106:[2,130],107:66,122:[2,130],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{6:[1,71],98:[1,218]},{4:219,7:4,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[2,121],25:[2,121],51:[2,121],54:[1,221],87:[2,121],88:220,89:[1,187],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,108],6:[2,108],25:[2,108],26:[2,108],37:[2,108],46:[2,108],51:[2,108],54:[2,108],63:[2,108],64:[2,108],65:[2,108],68:[2,108],69:[2,108],70:[2,108],71:[2,108],74:[2,108],80:[2,108],81:[2,108],82:[2,108],87:[2,108],89:[2,108],98:[2,108],100:[2,108],101:[2,108],102:[2,108],106:[2,108],112:[2,108],113:[2,108],114:[2,108],122:[2,108],124:[2,108],125:[2,108],128:[2,108],129:[2,108],130:[2,108],131:[2,108],132:[2,108],133:[2,108]},{6:[2,49],25:[2,49],50:222,51:[1,223],87:[2,49]},{6:[2,116],25:[2,116],26:[2,116],51:[2,116],82:[2,116],87:[2,116]},{8:197,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,145],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],83:224,84:[1,55],85:[1,56],86:[1,54],90:144,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[2,122],25:[2,122],26:[2,122],51:[2,122],82:[2,122],87:[2,122]},{1:[2,107],6:[2,107],25:[2,107],26:[2,107],37:[2,107],40:[2,107],46:[2,107],51:[2,107],54:[2,107],63:[2,107],64:[2,107],65:[2,107],68:[2,107],69:[2,107],70:[2,107],71:[2,107],74:[2,107],76:[2,107],80:[2,107],81:[2,107],82:[2,107],87:[2,107],89:[2,107],98:[2,107],100:[2,107],101:[2,107],102:[2,107],106:[2,107],114:[2,107],122:[2,107],124:[2,107],125:[2,107],126:[2,107],127:[2,107],128:[2,107],129:[2,107],130:[2,107],131:[2,107],132:[2,107],133:[2,107],134:[2,107]},{5:225,25:[1,5],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,133],6:[2,133],25:[2,133],26:[2,133],46:[2,133],51:[2,133],54:[2,133],69:[2,133],74:[2,133],82:[2,133],87:[2,133],89:[2,133],98:[2,133],99:84,100:[1,62],101:[1,226],102:[1,63],105:85,106:[1,65],107:66,114:[2,133],122:[2,133],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,135],6:[2,135],25:[2,135],26:[2,135],46:[2,135],51:[2,135],54:[2,135],69:[2,135],74:[2,135],82:[2,135],87:[2,135],89:[2,135],98:[2,135],99:84,100:[1,62],101:[1,227],102:[1,63],105:85,106:[1,65],107:66,114:[2,135],122:[2,135],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,141],6:[2,141],25:[2,141],26:[2,141],46:[2,141],51:[2,141],54:[2,141],69:[2,141],74:[2,141],82:[2,141],87:[2,141],89:[2,141],98:[2,141],100:[2,141],101:[2,141],102:[2,141],106:[2,141],114:[2,141],122:[2,141],124:[2,141],125:[2,141],128:[2,141],129:[2,141],130:[2,141],131:[2,141],132:[2,141],133:[2,141]},{1:[2,142],6:[2,142],25:[2,142],26:[2,142],46:[2,142],51:[2,142],54:[2,142],69:[2,142],74:[2,142],82:[2,142],87:[2,142],89:[2,142],98:[2,142],99:84,100:[1,62],101:[2,142],102:[1,63],105:85,106:[1,65],107:66,114:[2,142],122:[2,142],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,146],6:[2,146],25:[2,146],26:[2,146],46:[2,146],51:[2,146],54:[2,146],69:[2,146],74:[2,146],82:[2,146],87:[2,146],89:[2,146],98:[2,146],100:[2,146],101:[2,146],102:[2,146],106:[2,146],114:[2,146],122:[2,146],124:[2,146],125:[2,146],128:[2,146],129:[2,146],130:[2,146],131:[2,146],132:[2,146],133:[2,146]},{112:[2,148],113:[2,148]},{27:157,28:[1,70],55:158,56:159,72:[1,67],86:[1,113],109:228,111:156},{51:[1,229],112:[2,153],113:[2,153]},{51:[2,150],112:[2,150],113:[2,150]},{51:[2,151],112:[2,151],113:[2,151]},{51:[2,152],112:[2,152],113:[2,152]},{1:[2,147],6:[2,147],25:[2,147],26:[2,147],46:[2,147],51:[2,147],54:[2,147],69:[2,147],74:[2,147],82:[2,147],87:[2,147],89:[2,147],98:[2,147],100:[2,147],101:[2,147],102:[2,147],106:[2,147],114:[2,147],122:[2,147],124:[2,147],125:[2,147],128:[2,147],129:[2,147],130:[2,147],131:[2,147],132:[2,147],133:[2,147]},{8:230,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:231,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[2,49],25:[2,49],50:232,51:[1,233],74:[2,49]},{6:[2,85],25:[2,85],26:[2,85],51:[2,85],74:[2,85]},{6:[2,35],25:[2,35],26:[2,35],40:[1,234],51:[2,35],74:[2,35]},{6:[2,38],25:[2,38],26:[2,38],51:[2,38],74:[2,38]},{6:[2,39],25:[2,39],26:[2,39],40:[2,39],51:[2,39],74:[2,39]},{6:[2,40],25:[2,40],26:[2,40],40:[2,40],51:[2,40],74:[2,40]},{6:[2,41],25:[2,41],26:[2,41],40:[2,41],51:[2,41],74:[2,41]},{1:[2,5],6:[2,5],26:[2,5],98:[2,5]},{1:[2,25],6:[2,25],25:[2,25],26:[2,25],46:[2,25],51:[2,25],54:[2,25],69:[2,25],74:[2,25],82:[2,25],87:[2,25],89:[2,25],94:[2,25],95:[2,25],98:[2,25],100:[2,25],101:[2,25],102:[2,25],106:[2,25],114:[2,25],117:[2,25],119:[2,25],122:[2,25],124:[2,25],125:[2,25],128:[2,25],129:[2,25],130:[2,25],131:[2,25],132:[2,25],133:[2,25]},{1:[2,184],6:[2,184],25:[2,184],26:[2,184],46:[2,184],51:[2,184],54:[2,184],69:[2,184],74:[2,184],82:[2,184],87:[2,184],89:[2,184],98:[2,184],99:84,100:[2,184],101:[2,184],102:[2,184],105:85,106:[2,184],107:66,114:[2,184],122:[2,184],124:[2,184],125:[2,184],128:[1,75],129:[1,78],130:[2,184],131:[2,184],132:[2,184],133:[2,184]},{1:[2,185],6:[2,185],25:[2,185],26:[2,185],46:[2,185],51:[2,185],54:[2,185],69:[2,185],74:[2,185],82:[2,185],87:[2,185],89:[2,185],98:[2,185],99:84,100:[2,185],101:[2,185],102:[2,185],105:85,106:[2,185],107:66,114:[2,185],122:[2,185],124:[2,185],125:[2,185],128:[1,75],129:[1,78],130:[2,185],131:[2,185],132:[2,185],133:[2,185]},{1:[2,186],6:[2,186],25:[2,186],26:[2,186],46:[2,186],51:[2,186],54:[2,186],69:[2,186],74:[2,186],82:[2,186],87:[2,186],89:[2,186],98:[2,186],99:84,100:[2,186],101:[2,186],102:[2,186],105:85,106:[2,186],107:66,114:[2,186],122:[2,186],124:[2,186],125:[2,186],128:[1,75],129:[2,186],130:[2,186],131:[2,186],132:[2,186],133:[2,186]},{1:[2,187],6:[2,187],25:[2,187],26:[2,187],46:[2,187],51:[2,187],54:[2,187],69:[2,187],74:[2,187],82:[2,187],87:[2,187],89:[2,187],98:[2,187],99:84,100:[2,187],101:[2,187],102:[2,187],105:85,106:[2,187],107:66,114:[2,187],122:[2,187],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[2,187],131:[2,187],132:[2,187],133:[2,187]},{1:[2,188],6:[2,188],25:[2,188],26:[2,188],46:[2,188],51:[2,188],54:[2,188],69:[2,188],74:[2,188],82:[2,188],87:[2,188],89:[2,188],98:[2,188],99:84,100:[2,188],101:[2,188],102:[2,188],105:85,106:[2,188],107:66,114:[2,188],122:[2,188],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[2,188],132:[2,188],133:[1,82]},{1:[2,189],6:[2,189],25:[2,189],26:[2,189],46:[2,189],51:[2,189],54:[2,189],69:[2,189],74:[2,189],82:[2,189],87:[2,189],89:[2,189],98:[2,189],99:84,100:[2,189],101:[2,189],102:[2,189],105:85,106:[2,189],107:66,114:[2,189],122:[2,189],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[2,189],133:[1,82]},{1:[2,190],6:[2,190],25:[2,190],26:[2,190],46:[2,190],51:[2,190],54:[2,190],69:[2,190],74:[2,190],82:[2,190],87:[2,190],89:[2,190],98:[2,190],99:84,100:[2,190],101:[2,190],102:[2,190],105:85,106:[2,190],107:66,114:[2,190],122:[2,190],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[2,190],132:[2,190],133:[2,190]},{1:[2,175],6:[2,175],25:[2,175],26:[2,175],46:[2,175],51:[2,175],54:[2,175],69:[2,175],74:[2,175],82:[2,175],87:[2,175],89:[2,175],98:[2,175],99:84,100:[1,62],101:[2,175],102:[1,63],105:85,106:[1,65],107:66,114:[2,175],122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,174],6:[2,174],25:[2,174],26:[2,174],46:[2,174],51:[2,174],54:[2,174],69:[2,174],74:[2,174],82:[2,174],87:[2,174],89:[2,174],98:[2,174],99:84,100:[1,62],101:[2,174],102:[1,63],105:85,106:[1,65],107:66,114:[2,174],122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,97],6:[2,97],25:[2,97],26:[2,97],46:[2,97],51:[2,97],54:[2,97],63:[2,97],64:[2,97],65:[2,97],68:[2,97],69:[2,97],70:[2,97],71:[2,97],74:[2,97],80:[2,97],81:[2,97],82:[2,97],87:[2,97],89:[2,97],98:[2,97],100:[2,97],101:[2,97],102:[2,97],106:[2,97],114:[2,97],122:[2,97],124:[2,97],125:[2,97],128:[2,97],129:[2,97],130:[2,97],131:[2,97],132:[2,97],133:[2,97]},{1:[2,74],6:[2,74],25:[2,74],26:[2,74],37:[2,74],46:[2,74],51:[2,74],54:[2,74],63:[2,74],64:[2,74],65:[2,74],68:[2,74],69:[2,74],70:[2,74],71:[2,74],74:[2,74],76:[2,74],80:[2,74],81:[2,74],82:[2,74],87:[2,74],89:[2,74],98:[2,74],100:[2,74],101:[2,74],102:[2,74],106:[2,74],114:[2,74],122:[2,74],124:[2,74],125:[2,74],126:[2,74],127:[2,74],128:[2,74],129:[2,74],130:[2,74],131:[2,74],132:[2,74],133:[2,74],134:[2,74]},{1:[2,75],6:[2,75],25:[2,75],26:[2,75],37:[2,75],46:[2,75],51:[2,75],54:[2,75],63:[2,75],64:[2,75],65:[2,75],68:[2,75],69:[2,75],70:[2,75],71:[2,75],74:[2,75],76:[2,75],80:[2,75],81:[2,75],82:[2,75],87:[2,75],89:[2,75],98:[2,75],100:[2,75],101:[2,75],102:[2,75],106:[2,75],114:[2,75],122:[2,75],124:[2,75],125:[2,75],126:[2,75],127:[2,75],128:[2,75],129:[2,75],130:[2,75],131:[2,75],132:[2,75],133:[2,75],134:[2,75]},{1:[2,76],6:[2,76],25:[2,76],26:[2,76],37:[2,76],46:[2,76],51:[2,76],54:[2,76],63:[2,76],64:[2,76],65:[2,76],68:[2,76],69:[2,76],70:[2,76],71:[2,76],74:[2,76],76:[2,76],80:[2,76],81:[2,76],82:[2,76],87:[2,76],89:[2,76],98:[2,76],100:[2,76],101:[2,76],102:[2,76],106:[2,76],114:[2,76],122:[2,76],124:[2,76],125:[2,76],126:[2,76],127:[2,76],128:[2,76],129:[2,76],130:[2,76],131:[2,76],132:[2,76],133:[2,76],134:[2,76]},{54:[1,188],69:[1,235],88:236,89:[1,187],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{8:237,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{13:[2,110],28:[2,110],30:[2,110],31:[2,110],33:[2,110],34:[2,110],35:[2,110],42:[2,110],43:[2,110],44:[2,110],48:[2,110],49:[2,110],69:[2,110],72:[2,110],75:[2,110],79:[2,110],84:[2,110],85:[2,110],86:[2,110],92:[2,110],96:[2,110],97:[2,110],100:[2,110],102:[2,110],104:[2,110],106:[2,110],115:[2,110],121:[2,110],123:[2,110],124:[2,110],125:[2,110],126:[2,110],127:[2,110]},{13:[2,111],28:[2,111],30:[2,111],31:[2,111],33:[2,111],34:[2,111],35:[2,111],42:[2,111],43:[2,111],44:[2,111],48:[2,111],49:[2,111],69:[2,111],72:[2,111],75:[2,111],79:[2,111],84:[2,111],85:[2,111],86:[2,111],92:[2,111],96:[2,111],97:[2,111],100:[2,111],102:[2,111],104:[2,111],106:[2,111],115:[2,111],121:[2,111],123:[2,111],124:[2,111],125:[2,111],126:[2,111],127:[2,111]},{1:[2,81],6:[2,81],25:[2,81],26:[2,81],37:[2,81],46:[2,81],51:[2,81],54:[2,81],63:[2,81],64:[2,81],65:[2,81],68:[2,81],69:[2,81],70:[2,81],71:[2,81],74:[2,81],76:[2,81],80:[2,81],81:[2,81],82:[2,81],87:[2,81],89:[2,81],98:[2,81],100:[2,81],101:[2,81],102:[2,81],106:[2,81],114:[2,81],122:[2,81],124:[2,81],125:[2,81],126:[2,81],127:[2,81],128:[2,81],129:[2,81],130:[2,81],131:[2,81],132:[2,81],133:[2,81],134:[2,81]},{8:238,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,82],6:[2,82],25:[2,82],26:[2,82],37:[2,82],46:[2,82],51:[2,82],54:[2,82],63:[2,82],64:[2,82],65:[2,82],68:[2,82],69:[2,82],70:[2,82],71:[2,82],74:[2,82],76:[2,82],80:[2,82],81:[2,82],82:[2,82],87:[2,82],89:[2,82],98:[2,82],100:[2,82],101:[2,82],102:[2,82],106:[2,82],114:[2,82],122:[2,82],124:[2,82],125:[2,82],126:[2,82],127:[2,82],128:[2,82],129:[2,82],130:[2,82],131:[2,82],132:[2,82],133:[2,82],134:[2,82]},{1:[2,98],6:[2,98],25:[2,98],26:[2,98],46:[2,98],51:[2,98],54:[2,98],63:[2,98],64:[2,98],65:[2,98],68:[2,98],69:[2,98],70:[2,98],71:[2,98],74:[2,98],80:[2,98],81:[2,98],82:[2,98],87:[2,98],89:[2,98],98:[2,98],100:[2,98],101:[2,98],102:[2,98],106:[2,98],114:[2,98],122:[2,98],124:[2,98],125:[2,98],128:[2,98],129:[2,98],130:[2,98],131:[2,98],132:[2,98],133:[2,98]},{1:[2,33],6:[2,33],25:[2,33],26:[2,33],46:[2,33],51:[2,33],54:[2,33],69:[2,33],74:[2,33],82:[2,33],87:[2,33],89:[2,33],98:[2,33],99:84,100:[2,33],101:[2,33],102:[2,33],105:85,106:[2,33],107:66,114:[2,33],122:[2,33],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{8:239,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,103],6:[2,103],25:[2,103],26:[2,103],46:[2,103],51:[2,103],54:[2,103],63:[2,103],64:[2,103],65:[2,103],68:[2,103],69:[2,103],70:[2,103],71:[2,103],74:[2,103],80:[2,103],81:[2,103],82:[2,103],87:[2,103],89:[2,103],98:[2,103],100:[2,103],101:[2,103],102:[2,103],106:[2,103],114:[2,103],122:[2,103],124:[2,103],125:[2,103],128:[2,103],129:[2,103],130:[2,103],131:[2,103],132:[2,103],133:[2,103]},{6:[2,49],25:[2,49],50:240,51:[1,223],82:[2,49]},{6:[2,121],25:[2,121],26:[2,121],51:[2,121],54:[1,241],82:[2,121],87:[2,121],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{47:242,48:[1,57],49:[1,58]},{27:108,28:[1,70],41:109,52:243,53:107,55:110,56:111,72:[1,67],85:[1,112],86:[1,113]},{46:[2,55],51:[2,55]},{8:244,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,191],6:[2,191],25:[2,191],26:[2,191],46:[2,191],51:[2,191],54:[2,191],69:[2,191],74:[2,191],82:[2,191],87:[2,191],89:[2,191],98:[2,191],99:84,100:[2,191],101:[2,191],102:[2,191],105:85,106:[2,191],107:66,114:[2,191],122:[2,191],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{8:245,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,193],6:[2,193],25:[2,193],26:[2,193],46:[2,193],51:[2,193],54:[2,193],69:[2,193],74:[2,193],82:[2,193],87:[2,193],89:[2,193],98:[2,193],99:84,100:[2,193],101:[2,193],102:[2,193],105:85,106:[2,193],107:66,114:[2,193],122:[2,193],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,173],6:[2,173],25:[2,173],26:[2,173],46:[2,173],51:[2,173],54:[2,173],69:[2,173],74:[2,173],82:[2,173],87:[2,173],89:[2,173],98:[2,173],100:[2,173],101:[2,173],102:[2,173],106:[2,173],114:[2,173],122:[2,173],124:[2,173],125:[2,173],128:[2,173],129:[2,173],130:[2,173],131:[2,173],132:[2,173],133:[2,173]},{8:246,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,126],6:[2,126],25:[2,126],26:[2,126],46:[2,126],51:[2,126],54:[2,126],69:[2,126],74:[2,126],82:[2,126],87:[2,126],89:[2,126],94:[1,247],98:[2,126],100:[2,126],101:[2,126],102:[2,126],106:[2,126],114:[2,126],122:[2,126],124:[2,126],125:[2,126],128:[2,126],129:[2,126],130:[2,126],131:[2,126],132:[2,126],133:[2,126]},{5:248,25:[1,5]},{27:249,28:[1,70]},{116:250,118:212,119:[1,213]},{26:[1,251],117:[1,252],118:253,119:[1,213]},{26:[2,166],117:[2,166],119:[2,166]},{8:255,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],91:254,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,91],5:256,6:[2,91],25:[1,5],26:[2,91],46:[2,91],51:[2,91],54:[2,91],59:90,63:[1,92],64:[1,93],65:[1,94],66:95,67:96,68:[1,97],69:[2,91],70:[1,98],71:[1,99],74:[2,91],77:89,80:[1,91],81:[2,101],82:[2,91],87:[2,91],89:[2,91],98:[2,91],100:[2,91],101:[2,91],102:[2,91],106:[2,91],114:[2,91],122:[2,91],124:[2,91],125:[2,91],128:[2,91],129:[2,91],130:[2,91],131:[2,91],132:[2,91],133:[2,91]},{1:[2,66],6:[2,66],25:[2,66],26:[2,66],46:[2,66],51:[2,66],54:[2,66],63:[2,66],64:[2,66],65:[2,66],68:[2,66],69:[2,66],70:[2,66],71:[2,66],74:[2,66],80:[2,66],81:[2,66],82:[2,66],87:[2,66],89:[2,66],98:[2,66],100:[2,66],101:[2,66],102:[2,66],106:[2,66],114:[2,66],122:[2,66],124:[2,66],125:[2,66],128:[2,66],129:[2,66],130:[2,66],131:[2,66],132:[2,66],133:[2,66]},{1:[2,94],6:[2,94],25:[2,94],26:[2,94],46:[2,94],51:[2,94],54:[2,94],69:[2,94],74:[2,94],82:[2,94],87:[2,94],89:[2,94],98:[2,94],100:[2,94],101:[2,94],102:[2,94],106:[2,94],114:[2,94],122:[2,94],124:[2,94],125:[2,94],128:[2,94],129:[2,94],130:[2,94],131:[2,94],132:[2,94],133:[2,94]},{14:257,15:121,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:122,41:60,55:47,56:48,58:215,60:25,61:26,62:27,72:[1,67],79:[1,28],84:[1,55],85:[1,56],86:[1,54],97:[1,53]},{1:[2,131],6:[2,131],25:[2,131],26:[2,131],46:[2,131],51:[2,131],54:[2,131],63:[2,131],64:[2,131],65:[2,131],68:[2,131],69:[2,131],70:[2,131],71:[2,131],74:[2,131],80:[2,131],81:[2,131],82:[2,131],87:[2,131],89:[2,131],98:[2,131],100:[2,131],101:[2,131],102:[2,131],106:[2,131],114:[2,131],122:[2,131],124:[2,131],125:[2,131],128:[2,131],129:[2,131],130:[2,131],131:[2,131],132:[2,131],133:[2,131]},{6:[1,71],26:[1,258]},{8:259,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[2,61],13:[2,111],25:[2,61],28:[2,111],30:[2,111],31:[2,111],33:[2,111],34:[2,111],35:[2,111],42:[2,111],43:[2,111],44:[2,111],48:[2,111],49:[2,111],51:[2,61],72:[2,111],75:[2,111],79:[2,111],84:[2,111],85:[2,111],86:[2,111],87:[2,61],92:[2,111],96:[2,111],97:[2,111],100:[2,111],102:[2,111],104:[2,111],106:[2,111],115:[2,111],121:[2,111],123:[2,111],124:[2,111],125:[2,111],126:[2,111],127:[2,111]},{6:[1,261],25:[1,262],87:[1,260]},{6:[2,50],8:197,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[2,50],26:[2,50],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],82:[2,50],84:[1,55],85:[1,56],86:[1,54],87:[2,50],90:263,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[2,49],25:[2,49],26:[2,49],50:264,51:[1,223]},{1:[2,170],6:[2,170],25:[2,170],26:[2,170],46:[2,170],51:[2,170],54:[2,170],69:[2,170],74:[2,170],82:[2,170],87:[2,170],89:[2,170],98:[2,170],100:[2,170],101:[2,170],102:[2,170],106:[2,170],114:[2,170],117:[2,170],122:[2,170],124:[2,170],125:[2,170],128:[2,170],129:[2,170],130:[2,170],131:[2,170],132:[2,170],133:[2,170]},{8:265,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:266,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{112:[2,149],113:[2,149]},{27:157,28:[1,70],55:158,56:159,72:[1,67],86:[1,113],111:267},{1:[2,155],6:[2,155],25:[2,155],26:[2,155],46:[2,155],51:[2,155],54:[2,155],69:[2,155],74:[2,155],82:[2,155],87:[2,155],89:[2,155],98:[2,155],99:84,100:[2,155],101:[1,268],102:[2,155],105:85,106:[2,155],107:66,114:[1,269],122:[2,155],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,156],6:[2,156],25:[2,156],26:[2,156],46:[2,156],51:[2,156],54:[2,156],69:[2,156],74:[2,156],82:[2,156],87:[2,156],89:[2,156],98:[2,156],99:84,100:[2,156],101:[1,270],102:[2,156],105:85,106:[2,156],107:66,114:[2,156],122:[2,156],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{6:[1,272],25:[1,273],74:[1,271]},{6:[2,50],12:166,25:[2,50],26:[2,50],27:167,28:[1,70],29:168,30:[1,68],31:[1,69],38:274,39:165,41:169,43:[1,46],74:[2,50],85:[1,112]},{8:275,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,276],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,80],6:[2,80],25:[2,80],26:[2,80],37:[2,80],46:[2,80],51:[2,80],54:[2,80],63:[2,80],64:[2,80],65:[2,80],68:[2,80],69:[2,80],70:[2,80],71:[2,80],74:[2,80],76:[2,80],80:[2,80],81:[2,80],82:[2,80],87:[2,80],89:[2,80],98:[2,80],100:[2,80],101:[2,80],102:[2,80],106:[2,80],114:[2,80],122:[2,80],124:[2,80],125:[2,80],126:[2,80],127:[2,80],128:[2,80],129:[2,80],130:[2,80],131:[2,80],132:[2,80],133:[2,80],134:[2,80]},{8:277,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,69:[1,278],72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{69:[1,279],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{69:[1,235],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{26:[1,280],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{6:[1,261],25:[1,262],82:[1,281]},{6:[2,61],25:[2,61],26:[2,61],51:[2,61],82:[2,61],87:[2,61]},{5:282,25:[1,5]},{46:[2,53],51:[2,53]},{46:[2,56],51:[2,56],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{26:[1,283],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{5:284,25:[1,5],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{5:285,25:[1,5]},{1:[2,127],6:[2,127],25:[2,127],26:[2,127],46:[2,127],51:[2,127],54:[2,127],69:[2,127],74:[2,127],82:[2,127],87:[2,127],89:[2,127],98:[2,127],100:[2,127],101:[2,127],102:[2,127],106:[2,127],114:[2,127],122:[2,127],124:[2,127],125:[2,127],128:[2,127],129:[2,127],130:[2,127],131:[2,127],132:[2,127],133:[2,127]},{5:286,25:[1,5]},{26:[1,287],117:[1,288],118:253,119:[1,213]},{1:[2,164],6:[2,164],25:[2,164],26:[2,164],46:[2,164],51:[2,164],54:[2,164],69:[2,164],74:[2,164],82:[2,164],87:[2,164],89:[2,164],98:[2,164],100:[2,164],101:[2,164],102:[2,164],106:[2,164],114:[2,164],122:[2,164],124:[2,164],125:[2,164],128:[2,164],129:[2,164],130:[2,164],131:[2,164],132:[2,164],133:[2,164]},{5:289,25:[1,5]},{26:[2,167],117:[2,167],119:[2,167]},{5:290,25:[1,5],51:[1,291]},{25:[2,123],51:[2,123],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,92],6:[2,92],25:[2,92],26:[2,92],46:[2,92],51:[2,92],54:[2,92],69:[2,92],74:[2,92],82:[2,92],87:[2,92],89:[2,92],98:[2,92],100:[2,92],101:[2,92],102:[2,92],106:[2,92],114:[2,92],122:[2,92],124:[2,92],125:[2,92],128:[2,92],129:[2,92],130:[2,92],131:[2,92],132:[2,92],133:[2,92]},{1:[2,95],5:292,6:[2,95],25:[1,5],26:[2,95],46:[2,95],51:[2,95],54:[2,95],59:90,63:[1,92],64:[1,93],65:[1,94],66:95,67:96,68:[1,97],69:[2,95],70:[1,98],71:[1,99],74:[2,95],77:89,80:[1,91],81:[2,101],82:[2,95],87:[2,95],89:[2,95],98:[2,95],100:[2,95],101:[2,95],102:[2,95],106:[2,95],114:[2,95],122:[2,95],124:[2,95],125:[2,95],128:[2,95],129:[2,95],130:[2,95],131:[2,95],132:[2,95],133:[2,95]},{98:[1,293]},{87:[1,294],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,109],6:[2,109],25:[2,109],26:[2,109],37:[2,109],46:[2,109],51:[2,109],54:[2,109],63:[2,109],64:[2,109],65:[2,109],68:[2,109],69:[2,109],70:[2,109],71:[2,109],74:[2,109],80:[2,109],81:[2,109],82:[2,109],87:[2,109],89:[2,109],98:[2,109],100:[2,109],101:[2,109],102:[2,109],106:[2,109],112:[2,109],113:[2,109],114:[2,109],122:[2,109],124:[2,109],125:[2,109],128:[2,109],129:[2,109],130:[2,109],131:[2,109],132:[2,109],133:[2,109]},{8:197,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],90:295,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:197,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,145],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,57:146,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],83:296,84:[1,55],85:[1,56],86:[1,54],90:144,92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[2,117],25:[2,117],26:[2,117],51:[2,117],82:[2,117],87:[2,117]},{6:[1,261],25:[1,262],26:[1,297]},{1:[2,134],6:[2,134],25:[2,134],26:[2,134],46:[2,134],51:[2,134],54:[2,134],69:[2,134],74:[2,134],82:[2,134],87:[2,134],89:[2,134],98:[2,134],99:84,100:[1,62],101:[2,134],102:[1,63],105:85,106:[1,65],107:66,114:[2,134],122:[2,134],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,136],6:[2,136],25:[2,136],26:[2,136],46:[2,136],51:[2,136],54:[2,136],69:[2,136],74:[2,136],82:[2,136],87:[2,136],89:[2,136],98:[2,136],99:84,100:[1,62],101:[2,136],102:[1,63],105:85,106:[1,65],107:66,114:[2,136],122:[2,136],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{112:[2,154],113:[2,154]},{8:298,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:299,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:300,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,83],6:[2,83],25:[2,83],26:[2,83],37:[2,83],46:[2,83],51:[2,83],54:[2,83],63:[2,83],64:[2,83],65:[2,83],68:[2,83],69:[2,83],70:[2,83],71:[2,83],74:[2,83],80:[2,83],81:[2,83],82:[2,83],87:[2,83],89:[2,83],98:[2,83],100:[2,83],101:[2,83],102:[2,83],106:[2,83],112:[2,83],113:[2,83],114:[2,83],122:[2,83],124:[2,83],125:[2,83],128:[2,83],129:[2,83],130:[2,83],131:[2,83],132:[2,83],133:[2,83]},{12:166,27:167,28:[1,70],29:168,30:[1,68],31:[1,69],38:301,39:165,41:169,43:[1,46],85:[1,112]},{6:[2,84],12:166,25:[2,84],26:[2,84],27:167,28:[1,70],29:168,30:[1,68],31:[1,69],38:164,39:165,41:169,43:[1,46],51:[2,84],73:302,85:[1,112]},{6:[2,86],25:[2,86],26:[2,86],51:[2,86],74:[2,86]},{6:[2,36],25:[2,36],26:[2,36],51:[2,36],74:[2,36],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{8:303,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{69:[1,304],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,114],6:[2,114],25:[2,114],26:[2,114],37:[2,114],46:[2,114],51:[2,114],54:[2,114],63:[2,114],64:[2,114],65:[2,114],68:[2,114],69:[2,114],70:[2,114],71:[2,114],74:[2,114],76:[2,114],80:[2,114],81:[2,114],82:[2,114],87:[2,114],89:[2,114],98:[2,114],100:[2,114],101:[2,114],102:[2,114],106:[2,114],114:[2,114],122:[2,114],124:[2,114],125:[2,114],126:[2,114],127:[2,114],128:[2,114],129:[2,114],130:[2,114],131:[2,114],132:[2,114],133:[2,114],134:[2,114]},{1:[2,115],6:[2,115],25:[2,115],26:[2,115],37:[2,115],46:[2,115],51:[2,115],54:[2,115],63:[2,115],64:[2,115],65:[2,115],68:[2,115],69:[2,115],70:[2,115],71:[2,115],74:[2,115],76:[2,115],80:[2,115],81:[2,115],82:[2,115],87:[2,115],89:[2,115],98:[2,115],100:[2,115],101:[2,115],102:[2,115],106:[2,115],114:[2,115],122:[2,115],124:[2,115],125:[2,115],126:[2,115],127:[2,115],128:[2,115],129:[2,115],130:[2,115],131:[2,115],132:[2,115],133:[2,115],134:[2,115]},{1:[2,34],6:[2,34],25:[2,34],26:[2,34],46:[2,34],51:[2,34],54:[2,34],69:[2,34],74:[2,34],82:[2,34],87:[2,34],89:[2,34],98:[2,34],100:[2,34],101:[2,34],102:[2,34],106:[2,34],114:[2,34],122:[2,34],124:[2,34],125:[2,34],128:[2,34],129:[2,34],130:[2,34],131:[2,34],132:[2,34],133:[2,34]},{1:[2,104],6:[2,104],25:[2,104],26:[2,104],46:[2,104],51:[2,104],54:[2,104],63:[2,104],64:[2,104],65:[2,104],68:[2,104],69:[2,104],70:[2,104],71:[2,104],74:[2,104],80:[2,104],81:[2,104],82:[2,104],87:[2,104],89:[2,104],98:[2,104],100:[2,104],101:[2,104],102:[2,104],106:[2,104],114:[2,104],122:[2,104],124:[2,104],125:[2,104],128:[2,104],129:[2,104],130:[2,104],131:[2,104],132:[2,104],133:[2,104]},{1:[2,45],6:[2,45],25:[2,45],26:[2,45],46:[2,45],51:[2,45],54:[2,45],69:[2,45],74:[2,45],82:[2,45],87:[2,45],89:[2,45],98:[2,45],100:[2,45],101:[2,45],102:[2,45],106:[2,45],114:[2,45],122:[2,45],124:[2,45],125:[2,45],128:[2,45],129:[2,45],130:[2,45],131:[2,45],132:[2,45],133:[2,45]},{1:[2,192],6:[2,192],25:[2,192],26:[2,192],46:[2,192],51:[2,192],54:[2,192],69:[2,192],74:[2,192],82:[2,192],87:[2,192],89:[2,192],98:[2,192],100:[2,192],101:[2,192],102:[2,192],106:[2,192],114:[2,192],122:[2,192],124:[2,192],125:[2,192],128:[2,192],129:[2,192],130:[2,192],131:[2,192],132:[2,192],133:[2,192]},{1:[2,171],6:[2,171],25:[2,171],26:[2,171],46:[2,171],51:[2,171],54:[2,171],69:[2,171],74:[2,171],82:[2,171],87:[2,171],89:[2,171],98:[2,171],100:[2,171],101:[2,171],102:[2,171],106:[2,171],114:[2,171],117:[2,171],122:[2,171],124:[2,171],125:[2,171],128:[2,171],129:[2,171],130:[2,171],131:[2,171],132:[2,171],133:[2,171]},{1:[2,128],6:[2,128],25:[2,128],26:[2,128],46:[2,128],51:[2,128],54:[2,128],69:[2,128],74:[2,128],82:[2,128],87:[2,128],89:[2,128],98:[2,128],100:[2,128],101:[2,128],102:[2,128],106:[2,128],114:[2,128],122:[2,128],124:[2,128],125:[2,128],128:[2,128],129:[2,128],130:[2,128],131:[2,128],132:[2,128],133:[2,128]},{1:[2,129],6:[2,129],25:[2,129],26:[2,129],46:[2,129],51:[2,129],54:[2,129],69:[2,129],74:[2,129],82:[2,129],87:[2,129],89:[2,129],94:[2,129],98:[2,129],100:[2,129],101:[2,129],102:[2,129],106:[2,129],114:[2,129],122:[2,129],124:[2,129],125:[2,129],128:[2,129],129:[2,129],130:[2,129],131:[2,129],132:[2,129],133:[2,129]},{1:[2,162],6:[2,162],25:[2,162],26:[2,162],46:[2,162],51:[2,162],54:[2,162],69:[2,162],74:[2,162],82:[2,162],87:[2,162],89:[2,162],98:[2,162],100:[2,162],101:[2,162],102:[2,162],106:[2,162],114:[2,162],122:[2,162],124:[2,162],125:[2,162],128:[2,162],129:[2,162],130:[2,162],131:[2,162],132:[2,162],133:[2,162]},{5:305,25:[1,5]},{26:[1,306]},{6:[1,307],26:[2,168],117:[2,168],119:[2,168]},{8:308,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,96],6:[2,96],25:[2,96],26:[2,96],46:[2,96],51:[2,96],54:[2,96],69:[2,96],74:[2,96],82:[2,96],87:[2,96],89:[2,96],98:[2,96],100:[2,96],101:[2,96],102:[2,96],106:[2,96],114:[2,96],122:[2,96],124:[2,96],125:[2,96],128:[2,96],129:[2,96],130:[2,96],131:[2,96],132:[2,96],133:[2,96]},{1:[2,132],6:[2,132],25:[2,132],26:[2,132],46:[2,132],51:[2,132],54:[2,132],63:[2,132],64:[2,132],65:[2,132],68:[2,132],69:[2,132],70:[2,132],71:[2,132],74:[2,132],80:[2,132],81:[2,132],82:[2,132],87:[2,132],89:[2,132],98:[2,132],100:[2,132],101:[2,132],102:[2,132],106:[2,132],114:[2,132],122:[2,132],124:[2,132],125:[2,132],128:[2,132],129:[2,132],130:[2,132],131:[2,132],132:[2,132],133:[2,132]},{1:[2,112],6:[2,112],25:[2,112],26:[2,112],46:[2,112],51:[2,112],54:[2,112],63:[2,112],64:[2,112],65:[2,112],68:[2,112],69:[2,112],70:[2,112],71:[2,112],74:[2,112],80:[2,112],81:[2,112],82:[2,112],87:[2,112],89:[2,112],98:[2,112],100:[2,112],101:[2,112],102:[2,112],106:[2,112],114:[2,112],122:[2,112],124:[2,112],125:[2,112],128:[2,112],129:[2,112],130:[2,112],131:[2,112],132:[2,112],133:[2,112]},{6:[2,118],25:[2,118],26:[2,118],51:[2,118],82:[2,118],87:[2,118]},{6:[2,49],25:[2,49],26:[2,49],50:309,51:[1,223]},{6:[2,119],25:[2,119],26:[2,119],51:[2,119],82:[2,119],87:[2,119]},{1:[2,157],6:[2,157],25:[2,157],26:[2,157],46:[2,157],51:[2,157],54:[2,157],69:[2,157],74:[2,157],82:[2,157],87:[2,157],89:[2,157],98:[2,157],99:84,100:[2,157],101:[2,157],102:[2,157],105:85,106:[2,157],107:66,114:[1,310],122:[2,157],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,159],6:[2,159],25:[2,159],26:[2,159],46:[2,159],51:[2,159],54:[2,159],69:[2,159],74:[2,159],82:[2,159],87:[2,159],89:[2,159],98:[2,159],99:84,100:[2,159],101:[1,311],102:[2,159],105:85,106:[2,159],107:66,114:[2,159],122:[2,159],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,158],6:[2,158],25:[2,158],26:[2,158],46:[2,158],51:[2,158],54:[2,158],69:[2,158],74:[2,158],82:[2,158],87:[2,158],89:[2,158],98:[2,158],99:84,100:[2,158],101:[2,158],102:[2,158],105:85,106:[2,158],107:66,114:[2,158],122:[2,158],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{6:[2,87],25:[2,87],26:[2,87],51:[2,87],74:[2,87]},{6:[2,49],25:[2,49],26:[2,49],50:312,51:[1,233]},{26:[1,313],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,113],6:[2,113],25:[2,113],26:[2,113],37:[2,113],46:[2,113],51:[2,113],54:[2,113],63:[2,113],64:[2,113],65:[2,113],68:[2,113],69:[2,113],70:[2,113],71:[2,113],74:[2,113],76:[2,113],80:[2,113],81:[2,113],82:[2,113],87:[2,113],89:[2,113],98:[2,113],100:[2,113],101:[2,113],102:[2,113],106:[2,113],114:[2,113],122:[2,113],124:[2,113],125:[2,113],126:[2,113],127:[2,113],128:[2,113],129:[2,113],130:[2,113],131:[2,113],132:[2,113],133:[2,113],134:[2,113]},{26:[1,314]},{1:[2,165],6:[2,165],25:[2,165],26:[2,165],46:[2,165],51:[2,165],54:[2,165],69:[2,165],74:[2,165],82:[2,165],87:[2,165],89:[2,165],98:[2,165],100:[2,165],101:[2,165],102:[2,165],106:[2,165],114:[2,165],122:[2,165],124:[2,165],125:[2,165],128:[2,165],129:[2,165],130:[2,165],131:[2,165],132:[2,165],133:[2,165]},{26:[2,169],117:[2,169],119:[2,169]},{25:[2,124],51:[2,124],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{6:[1,261],25:[1,262],26:[1,315]},{8:316,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{8:317,9:116,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{6:[1,272],25:[1,273],26:[1,318]},{6:[2,37],25:[2,37],26:[2,37],51:[2,37],74:[2,37]},{1:[2,163],6:[2,163],25:[2,163],26:[2,163],46:[2,163],51:[2,163],54:[2,163],69:[2,163],74:[2,163],82:[2,163],87:[2,163],89:[2,163],98:[2,163],100:[2,163],101:[2,163],102:[2,163],106:[2,163],114:[2,163],122:[2,163],124:[2,163],125:[2,163],128:[2,163],129:[2,163],130:[2,163],131:[2,163],132:[2,163],133:[2,163]},{6:[2,120],25:[2,120],26:[2,120],51:[2,120],82:[2,120],87:[2,120]},{1:[2,160],6:[2,160],25:[2,160],26:[2,160],46:[2,160],51:[2,160],54:[2,160],69:[2,160],74:[2,160],82:[2,160],87:[2,160],89:[2,160],98:[2,160],99:84,100:[2,160],101:[2,160],102:[2,160],105:85,106:[2,160],107:66,114:[2,160],122:[2,160],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{1:[2,161],6:[2,161],25:[2,161],26:[2,161],46:[2,161],51:[2,161],54:[2,161],69:[2,161],74:[2,161],82:[2,161],87:[2,161],89:[2,161],98:[2,161],99:84,100:[2,161],101:[2,161],102:[2,161],105:85,106:[2,161],107:66,114:[2,161],122:[2,161],124:[1,77],125:[1,76],128:[1,75],129:[1,78],130:[1,79],131:[1,80],132:[1,81],133:[1,82]},{6:[2,88],25:[2,88],26:[2,88],51:[2,88],74:[2,88]}],defaultActions:{57:[2,47],58:[2,48],72:[2,3],91:[2,102]},parseError:function d(a,b){throw new Error(a)},parse:function e(a){function m(){var a;a=b.lexer.lex()||1,typeof a!=="number"&&(a=b.symbols_[a]||a);return a}function l(a){c.length=c.length-2*a,d.length=d.length-a}var b=this,c=[0],d=[null],e=this.table,f="",g=0,h=0,i=0,j=2,k=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,typeof this.yy.parseError==="function"&&(this.parseError=this.yy.parseError);var n,o,p,q,r,s,t={},u,v,w,x;while(!0){p=c[c.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(n==null&&(n=m()),q=e[p]&&e[p][n]);if(typeof q==="undefined"||!q.length||!q[0]){if(!i){x=[];for(u in e[p])this.terminals_[u]&&u>2&&x.push("'"+this.terminals_[u]+"'");var y="";this.lexer.showPosition?y="Parse error on line "+(g+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+x.join(", "):y="Parse error on line "+(g+1)+": Unexpected "+(n==1?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(y,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,expected:x})}if(i==3){if(n==k)throw new Error(y||"Parsing halted.");h=this.lexer.yyleng,f=this.lexer.yytext,g=this.lexer.yylineno,n=m()}while(1){if(j.toString()in e[p])break;if(p==0)throw new Error(y||"Parsing halted.");l(1),p=c[c.length-1]}o=n,n=j,p=c[c.length-1],q=e[p]&&e[p][j],i=3}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:c.push(n),d.push(this.lexer.yytext),c.push(q[1]),n=null,o?(n=o,o=null):(h=this.lexer.yyleng,f=this.lexer.yytext,g=this.lexer.yylineno,i>0&&i--);break;case 2:v=this.productions_[q[1]][1],t.$=d[d.length-v],s=this.performAction.call(t,f,h,g,this.yy,q[1],d);if(typeof s!=="undefined")return s;v&&(c=c.slice(0,-1*v*2),d=d.slice(0,-1*v)),c.push(this.productions_[q[1]][0]),d.push(t.$),w=e[c[c.length-2]][c[c.length-1]],c.push(w);break;case 3:return!0}}return!0}};return a}();typeof require!=="undefined"&&(a.parser=b,a.parse=function(){return b.parse.apply(b,arguments)},a.main=function c(b){if(!b[1])throw new Error("Usage: "+b[0]+" FILE");if(typeof process!=="undefined")var c=require("fs").readFileSync(require("path").join(process.cwd(),b[1]),"utf8");else var d=require("file").path(require("file").cwd()),c=d.join(b[1]).read({charset:"utf-8"});return a.parser.parse(c)},typeof module!=="undefined"&&require.main===module&&a.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args))},require["./scope"]=new function(){var a=this;(function(){var b,c,d,e;e=require("./helpers"),c=e.extend,d=e.last,a.Scope=b=function(){function a(b,c,d){this.parent=b,this.expressions=c,this.method=d,this.variables=[{name:"arguments",type:"arguments"}],this.positions={},this.parent||(a.root=this)}a.root=null,a.prototype.add=function(a,b,c){var d;if(this.shared&&!c)return this.parent.add(a,b,c);return typeof (d=this.positions[a])==="number"?this.variables[d].type=b:this.positions[a]=this.variables.push({name:a,type:b})-1},a.prototype.find=function(a,b){if(this.check(a,b))return!0;this.add(a,"var");return!1},a.prototype.parameter=function(a){if(!this.shared||!this.parent.check(a,!0))return this.add(a,"param")},a.prototype.check=function(a,b){var c,d;c=!!this.type(a);if(c||b)return c;return!!((d=this.parent)!=null?d.check(a):void 0)},a.prototype.temporary=function(a,b){return a.length>1?"_"+a+(b>1?b:""):"_"+(b+parseInt(a,36)).toString(36).replace(/\d/g,"a")},a.prototype.type=function(a){var b,c,d,e;e=this.variables;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.name===a)return b.type}return null},a.prototype.freeVariable=function(a){var b,c;b=0;while(this.check(c=this.temporary(a,b),!0))b++;this.add(c,"var",!0);return c},a.prototype.assign=function(a,b){this.add(a,{value:b,assigned:!0});return this.hasAssignments=!0},a.prototype.hasDeclarations=function(){return!!this.declaredVariables().length},a.prototype.declaredVariables=function(){var a,b,c,d,e,f;a=[],b=[],f=this.variables;for(d=0,e=f.length;d<e;d++)c=f[d],c.type==="var"&&(c.name.charAt(0)==="_"?b:a).push(c.name);return a.sort().concat(b.sort())},a.prototype.assignedVariables=function(){var a,b,c,d,e;d=this.variables,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],a.type.assigned&&e.push(""+a.name+" = "+a.type.value);return e};return a}()}).call(this)},require["./nodes"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ba,bb,bc,bd,be,bf,bg,bh=Object.prototype.hasOwnProperty,bi=function(a,b){function d(){this.constructor=a}for(var c in b)bh.call(b,c)&&(a[c]=b[c]);d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype;return a},bj=function(a,b){return function(){return a.apply(b,arguments)}};K=require("./scope").Scope,bg=require("./helpers"),X=bg.compact,_=bg.flatten,$=bg.extend,bb=bg.merge,Y=bg.del,bd=bg.starts,Z=bg.ends,ba=bg.last,a.extend=$,W=function(){return!0},B=function(){return!1},P=function(){return this},A=function(){this.negated=!this.negated;return this},a.Base=e=function(){function a(){}a.prototype.compile=function(a,b){var c;a=$({},a),b&&(a.level=b),c=this.unfoldSoak(a)||this,c.tab=a.indent;return a.level!==y&&c.isStatement(a)?c.compileClosure(a):c.compileNode(a)},a.prototype.compileClosure=function(a){if(this.jumps())throw SyntaxError("cannot use a pure statement in an expression.");a.sharedScope=!0;return i.wrap(this).compileNode(a)},a.prototype.cache=function(a,b,c){var e,f;if(this.isComplex()){e=new z(c||a.scope.freeVariable("ref")),f=new d(e,this);return b?[f.compile(a,b),e.value]:[f,e]}e=b?this.compile(a,b):this;return[e,e]},a.prototype.compileLoopReference=function(a,b){var c,d,e;c=d=this.compile(a,v),-Infinity<(e=+c)&&e<Infinity||o.test(c)&&a.scope.check(c,!0)||(c=""+(d=a.scope.freeVariable(b))+" = "+c);return[c,d]},a.prototype.makeReturn=function(){return new I(this)},a.prototype.contains=function(a){var b;b=!1,this.traverseChildren(!1,function(c){if(a(c)){b=!0;return!1}});return b},a.prototype.containsType=function(a){return this instanceof a||this.contains(function(b){return b instanceof a})},a.prototype.lastNonComment=function(a){var b;b=a.length;while(b--)if(!(a[b]instanceof k))return a[b];return null},a.prototype.toString=function(a,b){var c;a==null&&(a=""),b==null&&(b=this.constructor.name),c="\n"+a+b,this.soak&&(c+="?"),this.eachChild(function(b){return c+=b.toString(a+O)});return c},a.prototype.eachChild=function(a){var b,c,d,e,f,g,h,i;if(!this.children)return this;h=this.children;for(d=0,f=h.length;d<f;d++){b=h[d];if(this[b]){i=_([this[b]]);for(e=0,g=i.length;e<g;e++){c=i[e];if(a(c)===!1)return this}}}return this},a.prototype.traverseChildren=function(a,b){return this.eachChild(function(c){if(b(c)===!1)return!1;return c.traverseChildren(a,b)})},a.prototype.invert=function(){return new D("!",this)},a.prototype.unwrapAll=function(){var a;a=this;while(a!==(a=a.unwrap()))continue;return a},a.prototype.children=[],a.prototype.isStatement=B,a.prototype.jumps=B,a.prototype.isComplex=W,a.prototype.isChainable=B,a.prototype.isAssignable=B,a.prototype.unwrap=P,a.prototype.unfoldSoak=B,a.prototype.assigns=B;return a}(),a.Block=f=function(){function a(a){this.expressions=X(_(a||[]))}bi(a,e),a.prototype.children=["expressions"],a.prototype.push=function(a){this.expressions.push(a);return this},a.prototype.pop=function(){return this.expressions.pop()},a.prototype.unshift=function(a){this.expressions.unshift(a);return this},a.prototype.unwrap=function(){return this.expressions.length===1?this.expressions[0]:this},a.prototype.isEmpty=function(){return!this.expressions.length},a.prototype.isStatement=function(a){var b,c,d,e;e=this.expressions;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.isStatement(a))return!0}return!1},a.prototype.jumps=function(a){var b,c,d,e;e=this.expressions;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.jumps(a))return b}},a.prototype.makeReturn=function(){var a,b;b=this.expressions.length;while(b--){a=this.expressions[b];if(!(a instanceof k)){this.expressions[b]=a.makeReturn(),a instanceof I&&!a.expression&&this.expressions.splice(b,1);break}}return this},a.prototype.compile=function(b,c){b==null&&(b={});return b.scope?a.__super__.compile.call(this,b,c):this.compileRoot(b)},a.prototype.compileNode=function(a){var b,c,d,e,f,g,h;this.tab=a.indent,e=a.level===y,c=[],h=this.expressions;for(f=0,g=h.length;f<g;f++)d=h[f],d=d.unwrapAll(),d=d.unfoldSoak(a)||d,e?(d.front=!0,b=d.compile(a),c.push(d.isStatement(a)?b:this.tab+b+";")):c.push(d.compile(a,v));if(e)return c.join("\n");b=c.join(", ")||"void 0";return c.length>1&&a.level>=v?"("+b+")":b},a.prototype.compileRoot=function(a){var b;a.indent=this.tab=a.bare?"":O,a.scope=new K(null,this,null),a.level=y,b=this.compileWithDeclarations(a),b=b.replace(Q,"");return a.bare?b:"(function() {\n"+b+"\n}).call(this);\n"},a.prototype.compileWithDeclarations=function(a){var b,c,d,e,f,g,h,i;b=e="",i=this.expressions;for(d=0,h=i.length;d<h;d++){c=i[d],c=c.unwrap();if(!(c instanceof k||c instanceof z))break}a=bb(a,{level:y}),d&&(f=this.expressions.splice(d,this.expressions.length),b=this.compileNode(a),this.expressions=f),e=this.compileNode(a),g=a.scope,g.expressions===this&&(!a.globals&&a.scope.hasDeclarations()&&(b+=""+this.tab+"var "+g.declaredVariables().join(", ")+";\n"),g.hasAssignments&&(b+=""+this.tab+"var "+bc(g.assignedVariables().join(", "),this.tab)+";\n"));return b+e},a.wrap=function(b){if(b.length===1&&b[0]instanceof a)return b[0];return new a(b)};return a}(),a.Literal=z=function(){function a(a){this.value=a}bi(a,e),a.prototype.makeReturn=function(){return this.isStatement()?this:new I(this)},a.prototype.isAssignable=function(){return o.test(this.value)},a.prototype.isStatement=function(){var a;return(a=this.value)==="break"||a==="continue"||a==="debugger"},a.prototype.isComplex=B,a.prototype.assigns=function(a){return a===this.value},a.prototype.jumps=function(a){if(!this.isStatement())return!1;return a&&(a.loop||a.block&&this.value!=="continue")?!1:this},a.prototype.compileNode=function(a){var b;b=this.isUndefined?a.level>=t?"(void 0)":"void 0":this.value.reserved?'"'+this.value+'"':this.value;return this.isStatement()?""+this.tab+b+";":b},a.prototype.toString=function(){return' "'+this.value+'"'};return a}(),a.Return=I=function(){function a(a){a&&!a.unwrap().isUndefined&&(this.expression=a)}bi(a,e),a.prototype.children=["expression"],a.prototype.isStatement=W,a.prototype.makeReturn=P,a.prototype.jumps=P,a.prototype.compile=function(b,c){var d,e;d=(e=this.expression)!=null?e.makeReturn():void 0;return!d||d instanceof a?a.__super__.compile.call(this,b,c):d.compile(b,c)},a.prototype.compileNode=function(a){return this.tab+("return"+(this.expression?" "+this.expression.compile(a,x):"")+";")};return a}(),a.Value=U=function(){function a(b,c,d){if(!c&&b instanceof a)return b;this.base=b,this.properties=c||[],d&&(this[d]=!0);return this}bi(a,e),a.prototype.children=["base","properties"],a.prototype.push=function(a){this.properties.push(a);return this},a.prototype.hasProperties=function(){return!!this.properties.length},a.prototype.isArray=function(){return!this.properties.length&&this.base instanceof c},a.prototype.isComplex=function(){return this.hasProperties()||this.base.isComplex()},a.prototype.isAssignable=function(){return this.hasProperties()||this.base.isAssignable()},a.prototype.isSimpleNumber=function(){return this.base instanceof z&&J.test(this.base.value)},a.prototype.isAtomic=function(){var a,b,c,d;d=this.properties.concat(this.base);for(b=0,c=d.length;b<c;b++){a=d[b];if(a.soak||a instanceof g)return!1}return!0},a.prototype.isStatement=function(a){return!this.properties.length&&this.base.isStatement(a)},a.prototype.assigns=function(a){return!this.properties.length&&this.base.assigns(a)},a.prototype.jumps=function(a){return!this.properties.length&&this.base.jumps(a)},a.prototype.isObject=function(a){if(this.properties.length)return!1;return this.base instanceof C&&(!a||this.base.generated)},a.prototype.isSplice=function(){return ba(this.properties)instanceof L},a.prototype.makeReturn=function(){return this.properties.length?a.__super__.makeReturn.call(this):this.base.makeReturn()},a.prototype.unwrap=function(){return this.properties.length?this:this.base},a.prototype.cacheReference=function(b){var c,e,f,g;f=ba(this.properties);if(this.properties.length<2&&!this.base.isComplex()&&!(f!=null?f.isComplex():void 0))return[this,this];c=new a(this.base,this.properties.slice(0,-1)),c.isComplex()&&(e=new z(b.scope.freeVariable("base")),c=new a(new F(new d(e,c))));if(!f)return[c,e];f.isComplex()&&(g=new z(b.scope.freeVariable("name")),f=new s(new d(g,f.index)),g=new s(g));return[c.push(f),new a(e||c.base,[g||f])]},a.prototype.compileNode=function(a){var c,d,e,f,g;this.base.front=this.front,e=this.properties,c=this.base.compile(a,e.length?t:null),e[0]instanceof b&&this.isSimpleNumber()&&(c="("+c+")");for(f=0,g=e.length;f<g;f++)d=e[f],c+=d.compile(a);return c},a.prototype.unfoldSoak=function(b){var c,e,f,g,h,i,j,k;if(f=this.base.unfoldSoak(b)){Array.prototype.push.apply(f.body.properties,this.properties);return f}k=this.properties;for(e=0,j=k.length;e<j;e++){g=k[e];if(g.soak){g.soak=!1,c=new a(this.base,this.properties.slice(0,e)),i=new a(this.base,this.properties.slice(e)),c.isComplex()&&(h=new z(b.scope.freeVariable("ref")),c=new F(new d(h,c)),i.base=h);return new q(new l(c),i,{soak:!0})}}return null};return a}(),a.Comment=k=function(){function a(a){this.comment=a}bi(a,e),a.prototype.isStatement=W,a.prototype.makeReturn=P,a.prototype.compileNode=function(a,b){var c;c="/*"+bc(this.comment,this.tab)+"*/",(b||a.level)===y&&(c=a.indent+c);return c};return a}(),a.Call=g=function(){function a(a,b,c){this.args=b!=null?b:[],this.soak=c,this.isNew=!1,this.isSuper=a==="super",this.variable=this.isSuper?null:a}bi(a,e),a.prototype.children=["variable","args"],a.prototype.newInstance=function(){var b;b=this.variable.base||this.variable,b instanceof a?b.newInstance():this.isNew=!0;return this},a.prototype.superReference=function(a){var b,c;b=a.scope.method;if(!b)throw SyntaxError("cannot call super outside of a function.");c=b.name;if(!c)throw SyntaxError("cannot call super on an anonymous function.");return b.klass?""+b.klass+".__super__."+c:""+c+".__super__.constructor"},a.prototype.unfoldSoak=function(b){var c,d,e,f,g,h,i,j,k;if(this.soak){if(this.variable){if(d=be(b,this,"variable"))return d;j=(new U(this.variable)).cacheReference(b),e=j[0],g=j[1]}else e=new z(this.superReference(b)),g=new U(e);g=new a(g,this.args),g.isNew=this.isNew,e=new z("typeof "+e.compile(b)+' == "function"');return new q(e,new U(g),{soak:!0})}c=this,f=[];while(!0){if(c.variable instanceof a){f.push(c),c=c.variable;continue}if(!(c.variable instanceof U))break;f.push(c);if(!((c=c.variable.base)instanceof a))break}k=f.reverse();for(h=0,i=k.length;h<i;h++)c=k[h],d&&(c.variable instanceof a?c.variable=d:c.variable.base=d),d=be(b,c,"variable");return d},a.prototype.compileNode=function(a){var b,c,d,e;(e=this.variable)!=null&&(e.front=this.front);if(d=M.compileSplattedArray(a,this.args,!0))return this.compileSplat(a,d);c=function(){var c,d,e,f;e=this.args,f=[];for(c=0,d=e.length;c<d;c++)b=e[c],f.push(b.compile(a,v));return f}.call(this).join(", ");return this.isSuper?this.superReference(a)+(".call(this"+(c&&", "+c)+")"):(this.isNew?"new ":"")+this.variable.compile(a,t)+("("+c+")")},a.prototype.compileSuper=function(a,b){return""+this.superReference(b)+".call(this"+(a.length?", ":"")+a+")"},a.prototype.compileSplat=function(a,b){var c,d,e,f,g;if(this.isSuper)return""+this.superReference(a)+".apply(this, "+b+")";if(this.isNew){e=this.tab+O;return"(function(func, args, ctor) {\n"+e+"ctor.prototype = func.prototype;\n"+e+"var child = new ctor, result = func.apply(child, args);\n"+e+'return typeof result == "object" ? result : child;\n'+this.tab+"})("+this.variable.compile(a,v)+", "+b+", function() {})"}c=new U(this.variable),(f=c.properties.pop())&&c.isComplex()?(g=a.scope.freeVariable("ref"),d="("+g+" = "+c.compile(a,v)+")"+f.compile(a)):(d=c.compile(a,t),J.test(d)&&(d="("+d+")"),f?(g=d,d+=f.compile(a)):g="null");return""+d+".apply("+g+", "+b+")"};return a}(),a.Extends=m=function(){function a(a,b){this.child=a,this.parent=b}bi(a,e),a.prototype.children=["child","parent"],a.prototype.compile=function(a){bf("hasProp");return(new g(new U(new z(bf("extends"))),[this.child,this.parent])).compile(a)};return a}(),a.Access=b=function(){function a(a,b){this.name=a,this.name.asKey=!0,this.proto=b==="proto"?".prototype":"",this.soak=b==="soak"}bi(a,e),a.prototype.children=["name"],a.prototype.compile=function(a){var b;b=this.name.compile(a);return this.proto+(p.test(b)?"["+b+"]":"."+b)},a.prototype.isComplex=B;return a}(),a.Index=s=function(){function a(a){this.index=a}bi(a,e),a.prototype.children=["index"],a.prototype.compile=function(a){return(this.proto?".prototype":"")+("["+this.index.compile(a,x)+"]")},a.prototype.isComplex=function(){return this.index.isComplex()};return a}(),a.Range=H=function(){function a(a,b,c){this.from=a,this.to=b,this.exclusive=c==="exclusive",this.equals=this.exclusive?"":"="}bi(a,e),a.prototype.children=["from","to"],a.prototype.compileVariables=function(a){var b,c,d,e;a=bb(a,{top:!0}),c=this.from.cache(a,v),this.from=c[0],this.fromVar=c[1],d=this.to.cache(a,v),this.to=d[0],this.toVar=d[1],e=[this.fromVar.match(J),this.toVar.match(J)],this.fromNum=e[0],this.toNum=e[1],b=[],this.from!==this.fromVar&&b.push(this.from);if(this.to!==this.toVar)return b.push(this.to)},a.prototype.compileNode=function(a){var b,c,d,e,f,g,h;this.compileVariables(a);if(!a.index)return this.compileArray(a);if(this.fromNum&&this.toNum)return this.compileSimple(a);c=Y(a,"index"),f=Y(a,"step"),h=""+c+" = "+this.from+(this.to!==this.toVar?", "+this.to:""),e="("+this.fromVar+" <= "+this.toVar+" ? "+c,b=""+e+" <"+this.equals+" "+this.toVar+" : "+c+" >"+this.equals+" "+this.toVar+")",g=f?f.compile(a):"1",d=f?""+c+" += "+g:""+e+" += "+g+" : "+c+" -= "+g+")";return""+h+"; "+b+"; "+d},a.prototype.compileSimple=function(a){var b,c,d,e,f;f=[+this.fromNum,+this.toNum],b=f[0],e=f[1],c=Y(a,"index"),d=Y(a,"step"),d&&(d=""+c+" += "+d.compile(a));return b>e?""+c+" = "+b+"; "+c+" >"+this.equals+" "+e+"; "+(d||""+c+"--"):""+c+" = "+b+"; "+c+" <"+this.equals+" "+e+"; "+(d||""+c+"++")},a.prototype.compileArray=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(this.fromNum&&this.toNum&&Math.abs(this.fromNum-this.toNum)<=20){h=function(){n=[];for(var a=l=+this.fromNum,b=+this.toNum;l<=b?a<=b:a>=b;l<=b?a+=1:a-=1)n.push(a);return n}.apply(this,arguments),this.exclusive&&h.pop();return"["+h.join(", ")+"]"}e=this.tab+O,d=a.scope.freeVariable("i"),i=a.scope.freeVariable("results"),g="\n"+e+i+" = [];",this.fromNum&&this.toNum?(a.index=d,b=this.compileSimple(a)):(j=""+d+" = "+this.from+(this.to!==this.toVar?", "+this.to:""),c=""+this.fromVar+" <= "+this.toVar+" ?",b="var "+j+"; "+c+" "+d+" <"+this.equals+" "+this.toVar+" : "+d+" >"+this.equals+" "+this.toVar+"; "+c+" "+d+" += 1 : "+d+" -= 1"),f="{ "+i+".push("+d+"); }\n"+e+"return "+i+";\n"+a.indent;return"(function() {"+g+"\n"+e+"for ("+b+")"+f+"}).apply(this, arguments)"};return a}(),a.Slice=L=function(){function a(b){this.range=b,a.__super__.constructor.call(this)}bi(a,e),a.prototype.children=["range"],a.prototype.compileNode=function(a){var b,c,d,e,f,g;g=this.range,e=g.to,c=g.from,d=c&&c.compile(a,x)||"0",b=e&&e.compile(a,x),e&&(this.range.exclusive||+b!==-1)&&(f=", "+(this.range.exclusive?b:J.test(b)?(+b+1).toString():"("+b+" + 1) || 9e9"));return".slice("+d+(f||"")+")"};return a}(),a.Obj=C=function(){function a(a,b){this.generated=b!=null?b:!1,this.objects=this.properties=a||[]}bi(a,e),a.prototype.children=["properties"],a.prototype.compileNode=function(a){var b,c,e,f,g,h,i,j;j=this.properties;if(!j.length)return this.front?"({})":"{}";c=a.indent+=O,g=this.lastNonComment(this.properties),j=function(){var h,l;l=[];for(b=0,h=j.length;b<h;b++)i=j[b],f=b===j.length-1?"":i===g||i instanceof k?"\n":",\n",e=i instanceof k?"":c,i instanceof U&&i["this"]&&(i=new d(i.properties[0].name,i,"object")),i instanceof k||(i instanceof d||(i=new d(i,i,"object")),(i.variable.base||i.variable).asKey=!0),l.push(e+i.compile(a,y)+f);return l}(),j=j.join(""),h="{"+(j&&"\n"+j+"\n"+this.tab)+"}";return this.front?"("+h+")":h},a.prototype.assigns=function(a){var b,c,d,e;e=this.properties;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.assigns(a))return!0}return!1};return a}(),a.Arr=c=function(){function a(a){this.objects=a||[]}bi(a,e),a.prototype.children=["objects"],a.prototype.compileNode=function(a){var b,c;if(!this.objects.length)return"[]";a.indent+=O;if(b=M.compileSplattedArray(a,this.objects))return b;b=function(){var b,d,e,f;e=this.objects,f=[];for(b=0,d=e.length;b<d;b++)c=e[b],f.push(c.compile(a,v));return f}.call(this).join(", ");return b.indexOf("\n")<0?"["+b+"]":"[\n"+a.indent+b+"\n"+this.tab+"]"},a.prototype.assigns=function(a){var b,c,d,e;e=this.objects;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.assigns(a))return!0}return!1};return a}(),a.Class=h=function(){function a(a,b,c){this.variable=a,this.parent=b,this.body=c!=null?c:new f,this.boundFuncs=[],this.body.classBody=!0}bi(a,e),a.prototype.children=["variable","parent","body"],a.prototype.determineName=function(){var a,c;if(!this.variable)return null;a=(c=ba(this.variable.properties))?c instanceof b&&c.name.value:this.variable.base.value;return a&&(a=o.test(a)&&a)},a.prototype.setContext=function(a){return this.body.traverseChildren(!1,function(b){if(b.classBody)return!1;if(b instanceof z&&b.value==="this")return b.value=a;if(b instanceof j){b.klass=a;if(b.bound)return b.context=a}})},a.prototype.addBoundFunctions=function(a){var b,c,d,e,f,g;if(this.boundFuncs.length){f=this.boundFuncs,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],b=c.compile(a),g.push(this.ctor.body.unshift(new z("this."+b+" = "+bf("bind")+"(this."+b+", this);")));return g}},a.prototype.addProperties=function(a,c){var e,f,g,h,i;h=a.base.properties.slice(0),i=[];while(e=h.shift()){if(e instanceof d){f=e.variable.base,delete e.context,g=e.value;if(f.value==="constructor"){if(this.ctor)throw new Error("cannot define more than one constructor in a class");if(g.bound)throw new Error("cannot define a constructor as a bound function");g instanceof j?e=this.ctor=g:e=this.ctor=new d(new U(new z(c)),g)}else e.variable["this"]||(e.variable=new U(new z(c),[new b(f,"proto")])),g instanceof j&&g.bound&&(this.boundFuncs.push(f),g.bound=!1)}i.push(e)}return i},a.prototype.walkBody=function(b){return this.traverseChildren(!1,bj(function(c){var d,e,g,h,i;if(c instanceof a)return!1;if(c instanceof f){i=d=c.expressions;for(e=0,h=i.length;e<h;e++)g=i[e],g instanceof U&&g.isObject(!0)&&(d[e]=this.addProperties(g,b));return c.expressions=d=_(d)}},this))},a.prototype.ensureConstructor=function(a){this.ctor||(this.ctor=new j,this.parent&&this.ctor.body.push(new g("super",[new M(new z("arguments"))])),this.body.expressions.unshift(this.ctor)),this.ctor.ctor=this.ctor.name=a,this.ctor.klass=null;return this.ctor.noReturn=!0},a.prototype.compileNode=function(a){var b,c,e,f;b=this.determineName(),f=b||this.name||"_Class",e=new z(f),this.setContext(f),this.walkBody(f),this.parent&&this.body.expressions.unshift(new m(e,this.parent)),this.ensureConstructor(f),this.body.expressions.push(e),this.addBoundFunctions(a),c=new F(i.wrap(this.body),!0),this.variable&&(c=new d(this.variable,c));return c.compile(a)};return a}(),a.Assign=d=function(){function a(a,b,c,d){this.variable=a,this.value=b,this.context=c,this.param=d&&d.param}bi(a,e),a.prototype.METHOD_DEF=/^(?:(\S+)\.prototype\.|\S+?)?\b([$A-Za-z_][$\w\x7f-\uffff]*)$/,a.prototype.children=["variable","value"],a.prototype.assigns=function(a){return this[this.context==="object"?"value":"variable"].assigns(a)},a.prototype.unfoldSoak=function(a){return be(a,this,"variable")},a.prototype.compileNode=function(a){var b,c,d,e,f;if(b=this.variable instanceof U){if(this.variable.isArray()||this.variable.isObject())return this.compilePatternMatch(a);if(this.variable.isSplice())return this.compileSplice(a);if((f=this.context)==="||="||f==="&&="||f==="?=")return this.compileConditional(a)}d=this.variable.compile(a,v),this.value instanceof j&&(c=this.METHOD_DEF.exec(d))&&(this.value.name=c[2],c[1]&&(this.value.klass=c[1])),e=this.value.compile(a,v);if(this.context==="object")return""+d+": "+e;if(!this.variable.isAssignable())throw SyntaxError('"'+this.variable.compile(a)+'" cannot be assigned.');this.context||b&&(this.variable.namespaced||this.variable.hasProperties())||(this.param?a.scope.add(d,"var"):a.scope.find(d)),e=d+(" "+(this.context||"=")+" ")+e;return a.level>v?"("+e+")":e},a.prototype.compilePatternMatch=function(c){var d,e,f,g,h,i,j,k,l,m,n,p,q,r,t,u,x,A,B,C,D,E;r=c.level===y,u=this.value,l=this.variable.base.objects;if(!(m=l.length)){if(r)return!1;f=u.compile(c);return c.level<w?f:"("+f+")"}i=this.variable.isObject();if(r&&m===1&&!((k=l[0])instanceof M)){k instanceof a?(B=k,h=B.variable.base,k=B.value):k.base instanceof F?(C=(new U(k.unwrapAll())).cacheReference(c),k=C[0],h=C[1]):h=i?k["this"]?k.properties[0].name:k:new z(0),d=o.test(h.unwrap().value||0),u=new U(u),u.properties.push(new(d?b:s)(h));return(new a(k,u)).compile(c)}x=u.compile(c,v),e=[],q=!1;if(!o.test(x)||this.variable.assigns(x))e.push(""+(n=c.scope.freeVariable("ref"))+" = "+x),x=n;for(g=0,A=l.length;g<A;g++){k=l[g],h=g,i&&(k instanceof a?(D=k,h=D.variable.base,k=D.value):k.base instanceof F?(E=(new U(k.unwrapAll())).cacheReference(c),k=E[0],h=E[1]):h=k["this"]?k.properties[0].name:k);if(!q&&k instanceof M)t=""+m+" <= "+x+".length ? "+bf("slice")+".call("+x+", "+g,(p=m-g-1)?(j=c.scope.freeVariable("i"),t+=", "+j+" = "+x+".length - "+p+") : ("+j+" = "+g+", [])"):t+=") : []",t=new z(t),q=""+j+"++";else{if(k instanceof M){k=k.name.compile(c);throw SyntaxError("multiple splats are disallowed in an assignment: "+k+" ...")}typeof h==="number"?(h=new z(q||h),d=!1):d=i&&o.test(h.unwrap().value||0),t=new U(new z(x),[new(d?b:s)(h)])}e.push((new a(k,t,null,{param:this.param})).compile(c,y))}r||e.push(x),f=X(e).join(", ");return c.level<v?f:"("+f+")"},a.prototype.compileConditional=function(b){var c,d,e;e=this.variable.cacheReference(b),c=e[0],d=e[1];return(new D(this.context.slice(0,-1),c,new a(d,this.value,"="))).compile(b)},a.prototype.compileSplice=function(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=this.variable.properties.pop().range,d=k.from,h=k.to,c=k.exclusive,g=this.variable.compile(a),l=(d!=null?d.cache(a,w):void 0)||["0","0"],e=l[0],f=l[1],h?(d!=null?d.isSimpleNumber():void 0)&&h.isSimpleNumber()?(h=+h.compile(a)- +f,c||(h+=1)):(h=h.compile(a)+" - "+f,c||(h+=" + 1")):h="9e9",m=this.value.cache(a,v),i=m[0],j=m[1],b="[].splice.apply("+g+", ["+e+", "+h+"].concat("+i+")), "+j;return a.level>y?"("+b+")":b};return a}(),a.Code=j=function(){function a(a,b,c){this.params=a||[],this.body=b||new f,this.bound=c==="boundfunc",this.bound&&(this.context="this")}bi(a,e),a.prototype.children=["params","body"],a.prototype.isStatement=function(){return!!this.ctor},a.prototype.jumps=B,a.prototype.compileNode=function(a){var b,e,f,g,h,i,j,k,l,m,n,o,p,r,s,u,v,w,x,y,A;a.scope=new K(a.scope,this.body,this),a.scope.shared=Y(a,"sharedScope"),a.indent+=O,delete a.bare,delete a.globals,o=[],e=[],x=this.params;for(r=0,u=x.length;r<u;r++){j=x[r];if(j.splat){l=new d(new U(new c(function(){var b,c,d,e;d=this.params,e=[];for(b=0,c=d.length;b<c;b++)i=d[b],e.push(i.asReference(a));return e}.call(this))),new U(new z("arguments")));break}}y=this.params;for(s=0,v=y.length;s<v;s++)j=y[s],j.isComplex()?(n=k=j.asReference(a),j.value&&(n=new D("?",k,j.value)),e.push(new d(new U(j.name),n,"=",{param:!0}))):(k=j,j.value&&(h=new z(k.name.value+" == null"),n=new d(new U(j.name),j.value,"="),e.push(new q(h,n)))),l||o.push(k);p=this.body.isEmpty(),l&&e.unshift(l),e.length&&(A=this.body.expressions).unshift.apply(A,e);if(!l)for(f=0,w=o.length;f<w;f++)m=o[f],a.scope.parameter(o[f]=m.compile(a));!p&&!this.noReturn&&this.body.makeReturn(),g=a.indent,b="function",this.ctor&&(b+=" "+this.name),b+="("+o.join(", ")+") {",this.body.isEmpty()||(b+="\n"+this.body.compileWithDeclarations(a)+"\n"+this.tab),b+="}";if(this.ctor)return this.tab+b;if(this.bound)return bf("bind")+("("+b+", "+this.context+")");return this.front||a.level>=t?"("+b+")":b},a.prototype.traverseChildren=function(b,c){if(b)return a.__super__.traverseChildren.call(this,b,c)};return a}(),a.Param=E=function(){function a(a,b,c){this.name=a,this.value=b,this.splat=c}bi(a,e),a.prototype.children=["name","value"],a.prototype.compile=function(a){return this.name.compile(a,v)},a.prototype.asReference=function(a){var b;if(this.reference)return this.reference;b=this.name,b["this"]?(b=b.properties[0].name,b.value.reserved&&(b=new z("_"+b.value))):b.isComplex()&&(b=new z(a.scope.freeVariable("arg"))),b=new U(b),this.splat&&(b=new M(b));return this.reference=b},a.prototype.isComplex=function(){return this.name.isComplex()};return a}(),a.Splat=M=function(){function a(a){this.name=a.compile?a:new z(a)}bi(a,e),a.prototype.children=["name"],a.prototype.isAssignable=W,a.prototype.assigns=function(a){return this.name.assigns(a)},a.prototype.compile=function(a){return this.index!=null?this.compileParam(a):this.name.compile(a)},a.compileSplattedArray=function(b,c,d){var e,f,g,h,i,j,k;i=-1;while((j=c[++i])&&!(j instanceof a))continue;if(i>=c.length)return"";if(c.length===1){g=c[0].compile(b,v);if(d)return g;return""+bf("slice")+".call("+g+")"}e=c.slice(i);for(h=0,k=e.length;h<k;h++)j=e[h],g=j.compile(b,v),e[h]=j instanceof a?""+bf("slice")+".call("+g+")":"["+g+"]";if(i===0)return e[0]+(".concat("+e.slice(1).join(", ")+")");f=function(){var a,d,e,f;e=c.slice(0,i),f=[];for(a=0,d=e.length;a<d;a++)j=e[a],f.push(j.compile(b,v));return f}();return"["+f.join(", ")+"].concat("+e.join(", ")+")"};return a}(),a.While=V=function(){function a(a,b){this.condition=(b!=null?b.invert:void 0)?a.invert():a,this.guard=b!=null?b.guard:void 0}bi(a,e),a.prototype.children=["condition","guard","body"],a.prototype.isStatement=W,a.prototype.makeReturn=function(){this.returns=!0;return this},a.prototype.addBody=function(a){this.body=a;return this},a.prototype.jumps=function(){var a,b,c,d;a=this.body.expressions;if(!a.length)return!1;for(c=0,d=a.length;c<d;c++){b=a[c];if(b.jumps({loop:!0}))return b}return!1},a.prototype.compileNode=function(a){var b,c,d,e;a.indent+=O,e="",b=this.body;if(b.isEmpty())b="";else{if(a.level>y||this.returns)d=a.scope.freeVariable("results"),e=""+this.tab+d+" = [];\n",b&&(b=G.wrap(d,b));this.guard&&(b=f.wrap([new q(this.guard,b)])),b="\n"+b.compile(a,y)+"\n"+this.tab}c=e+this.tab+("while ("+this.condition.compile(a,x)+") {"+b+"}"),this.returns&&(c+="\n"+this.tab+"return "+d+";");return c};return a}(),a.Op=D=function(){function c(b,c,d,e){if(b==="in")return new r(c,d);if(b==="do")return new g(c,c.params||[]);if(b==="new"){if(c instanceof g)return c.newInstance();c instanceof j&&c.bound&&(c=new F(c))}this.operator=a[b]||b,this.first=c,this.second=d,this.flip=!!e;return this}var a,b;bi(c,e),a={"==":"===","!=":"!==",of:"in"},b={"!==":"===","===":"!=="},c.prototype.children=["first","second"],c.prototype.isSimpleNumber=B,c.prototype.isUnary=function(){return!this.second},c.prototype.isChainable=function(){var a;return(a=this.operator)==="<"||a===">"||a===">="||a==="<="||a==="==="||a==="!=="},c.prototype.invert=function(){var a,d,e,f,g;if(this.isChainable()&&this.first.isChainable()){a=!0,d=this;while(d&&d.operator)a&&(a=d.operator in b),d=d.first;if(!a)return(new F(this)).invert();d=this;while(d&&d.operator)d.invert=!d.invert,d.operator=b[d.operator],d=d.first;return this}if(f=b[this.operator]){this.operator=f,this.first.unwrap()instanceof c&&this.first.invert();return this}return this.second?(new F(this)).invert():this.operator==="!"&&(e=this.first.unwrap())instanceof c&&((g=e.operator)==="!"||g==="in"||g==="instanceof")?e:new c("!",this)},c.prototype.unfoldSoak=function(a){var b;return((b=this.operator)==="++"||b==="--"||b==="delete")&&be(a,this,"first")},c.prototype.compileNode=function(a){var b;if(this.isUnary())return this.compileUnary(a);if(this.isChainable()&&this.first.isChainable())return this.compileChain(a);if(this.operator==="?")return this.compileExistence(a);this.first.front=this.front,b=this.first.compile(a,w)+" "+this.operator+" "+this.second.compile(a,w);return a.level>w?"("+b+")":b},c.prototype.compileChain=function(a){var b,c,d,e;e=this.first.second.cache(a),this.first.second=e[0],d=e[1],c=this.first.compile(a,w),b=""+c+" "+(this.invert?"&&":"||")+" "+d.compile(a)+" "+this.operator+" "+this.second.compile(a,w);return"("+b+")"},c.prototype.compileExistence=function(a){var b,c;this.first.isComplex()?(c=a.scope.freeVariable("ref"),b=new F(new d(new z(c),this.first))):(b=this.first,c=b.compile(a));return(new l(b)).compile(a)+(" ? "+c+" : "+this.second.compile(a,v))},c.prototype.compileUnary=function(a){var b,d;d=[b=this.operator],(b==="new"||b==="typeof"||b==="delete"||(b==="+"||b==="-")&&this.first instanceof c&&this.first.operator===b)&&d.push(" "),d.push(this.first.compile(a,w)),this.flip&&d.reverse();return d.join("")},c.prototype.toString=function(a){return c.__super__.toString.call(this,a,this.constructor.name+" "+this.operator)};return c}(),a.In=r=function(){function a(a,b){this.object=a,this.array=b}bi(a,e),a.prototype.children=["object","array"],a.prototype.invert=A,a.prototype.compileNode=function(a){return this.array instanceof U&&this.array.isArray()?this.compileOrTest(a):this.compileLoopTest(a)},a.prototype.compileOrTest=function(a){var b,c,d,e,f,g,h,i,j;i=this.object.cache(a,w),g=i[0],f=i[1],j=this.negated?[" !== "," && "]:[" === "," || "],b=j[0],c=j[1],h=function(){var c,h,i;h=this.array.base.objects,i=[];for(d=0,c=h.length;d<c;d++)e=h[d],i.push((d?f:g)+b+e.compile(a,w));return i}.call(this),h=h.join(c);return a.level<w?h:"("+h+")"},a.prototype.compileLoopTest=function(a){var b,c,d,e;e=this.object.cache(a,v),d=e[0],c=e[1],b=bf("indexOf")+(".call("+this.array.compile(a,v)+", "+c+") ")+(this.negated?"< 0":">= 0");if(d===c)return b;b=d+", "+b;return a.level<v?b:"("+b+")"},a.prototype.toString=function(b){return a.__super__.toString.call(this,b,this.constructor.name+(this.negated?"!":""))};return a}(),a.Try=S=function(){function a(a,b,c,d){this.attempt=a,this.error=b,this.recovery=c,this.ensure=d}bi(a,e),a.prototype.children=["attempt","recovery","ensure"],a.prototype.isStatement=W,a.prototype.jumps=function(a){var b;return this.attempt.jumps(a)||((b=this.recovery)!=null?b.jumps(a):void 0)},a.prototype.makeReturn=function(){this.attempt&&(this.attempt=this.attempt.makeReturn()),this.recovery&&(this.recovery=this.recovery.makeReturn());return this},a.prototype.compileNode=function(a){var b,c;a.indent+=O,c=this.error?" ("+this.error.compile(a)+") ":" ",b=this.recovery?" catch"+c+"{\n"+this.recovery.compile(a,y)+"\n"+this.tab+"}":!this.ensure&&!this.recovery?" catch (_e) {}":void 0;return""+this.tab+"try {\n"+this.attempt.compile(a,y)+"\n"+this.tab+"}"+(b||"")+(this.ensure?" finally {\n"+this.ensure.compile(a,y)+"\n"+this.tab+"}":"")};return a}(),a.Throw=R=function(){function a(a){this.expression=a}bi(a,e),a.prototype.children=["expression"],a.prototype.isStatement=W,a.prototype.jumps=B,a.prototype.makeReturn=P,a.prototype.compileNode=function(a){return this.tab+("throw "+this.expression.compile(a)+";")};return a}(),a.Existence=l=function(){function a(a){this.expression=a}bi(a,e),a.prototype.children=["expression"],a.prototype.invert=A,a.prototype.compileNode=function(a){var b,c;b=this.expression.compile(a,w),b=o.test(b)&&!a.scope.check(b)?this.negated?"typeof "+b+' == "undefined" || '+b+" === null":"typeof "+b+' != "undefined" && '+b+" !== null":(c=this.negated?"==":"!=",""+b+" "+c+" null");return a.level>u?"("+b+")":b};return a}(),a.Parens=F=function(){function a(a){this.body=a}bi(a,e),a.prototype.children=["body"],a.prototype.unwrap=function(){return this.body},a.prototype.isComplex=function(){return this.body.isComplex()},a.prototype.makeReturn=function(){return this.body.makeReturn()},a.prototype.compileNode=function(a){var b,c,d;d=this.body.unwrap();if(d instanceof U&&d.isAtomic()){d.front=this.front;return d.compile(a)}c=d.compile(a,x),b=a.level<w&&(d instanceof D||d instanceof g||d instanceof n&&d.returns);return b?c:"("+c+")"};return a}(),a.For=n=function(){function a(a,b){var c;this.source=b.source,this.guard=b.guard,this.step=b.step,this.name=b.name,this.index=b.index,this.body=f.wrap([a]),this.own=!!b.own,this.object=!!b.object,this.object&&(c=[this.index,this.name],this.name=c[0],this.index=c[1]);if(this.index instanceof U)throw SyntaxError("index cannot be a pattern matching expression");this.range=this.source instanceof U&&this.source.base instanceof H&&!this.source.properties.length,this.pattern=this.name instanceof U;if(this.range&&this.index)throw SyntaxError("indexes do not apply to range loops");if(this.range&&this.pattern)throw SyntaxError("cannot pattern match over range loops");this.returns=!1}bi(a,e),a.prototype.children=["body","source","guard","step"],a.prototype.isStatement=W,a.prototype.jumps=V.prototype.jumps,a.prototype.makeReturn=function(){this.returns=!0;return this},a.prototype.compileNode=function(a){var b,c,e,g,h,i,j,k,l,m,n,p,r,s,t,u,x,A,B,C,D;b=f.wrap([this.body]),k=(D=ba(b.expressions))!=null?D.jumps():void 0,k&&k instanceof I&&(this.returns=!1),x=this.range?this.source.base:this.source,u=a.scope,m=this.name&&this.name.compile(a,v),i=this.index&&this.index.compile(a,v),m&&!this.pattern&&u.find(m,{immediate:!0}),i&&u.find(i,{immediate:!0}),this.returns&&(t=u.freeVariable("results")),j=(this.range?m:i)||u.freeVariable("i"),this.pattern&&(m=j),C="",g="",c="",h=this.tab+O,this.range?e=x.compile(bb(a,{index:j,step:this.step})):(B=this.source.compile(a,v),(m||this.own)&&!o.test(B)&&(c=""+this.tab+(p=u.freeVariable("ref"))+" = "+B+";\n",B=p),m&&!this.pattern&&(n=""+m+" = "+B+"["+j+"]"),this.object||(l=u.freeVariable("len"),A=this.step?""+j+" += "+this.step.compile(a,w):""+j+"++",e=""+j+" = 0, "+l+" = "+B+".length; "+j+" < "+l+"; "+A)),this.returns&&(r=""+this.tab+t+" = [];\n",s="\n"+this.tab+"return "+t+";",b=G.wrap(t,b)),this.guard&&(b=f.wrap([new q(this.guard,b)])),this.pattern&&b.expressions.unshift(new d(this.name,new z(""+B+"["+j+"]"))),c+=this.pluckDirectCall(a,b),n&&(C="\n"+h+n+";"),this.object&&(e=""+j+" in "+B,this.own&&(g="\n"+h+"if (!"+bf("hasProp")+".call("+B+", "+j+")) continue;")),b=b.compile(bb(a,{indent:h}),y),b&&(b="\n"+b+"\n");return""+c+(r||"")+this.tab+"for ("+e+") {"+g+C+b+this.tab+"}"+(s||"")},a.prototype.pluckDirectCall=function(a,b){var c,e,f,h,i,k,l,m,n,o,p,q,r,s;e="",n=b.expressions;for(i=0,m=n.length;i<m;i++){f=n[i],f=f.unwrapAll();if(!(f instanceof g))continue;l=f.variable.unwrapAll();if(!(l instanceof j||l instanceof U&&((o=l.base)!=null?o.unwrapAll():void 0)instanceof j&&l.properties.length===1&&((p=(q=l.properties[0].name)!=null?q.value:void 0)==="call"||p==="apply")))continue;h=((r=l.base)!=null?r.unwrapAll():void 0)||l,k=new z(a.scope.freeVariable("fn")),c=new U(k),l.base&&(s=[c,l],l.base=s[0],c=s[1],args.unshift(new z("this"))),b.expressions[i]=new g(c,f.args),e+=this.tab+(new d(k,h)).compile(a,y)+";\n"}return e};return a}(),a.Switch=N=function(){function a(a,b,c){this.subject=a,this.cases=b,this.otherwise=c}bi(a,e),a.prototype.children=["subject","cases","otherwise"],a.prototype.isStatement=W,a.prototype.jumps=function(a){var b,c,d,e,f,g,h;a==null&&(a={block:!0}),f=this.cases;for(d=0,e=f.length;d<e;d++){g=f[d],c=g[0],b=g[1];if(b.jumps(a))return b}return(h=this.otherwise)!=null?h.jumps(a):void 0},a.prototype.makeReturn=function(){var a,b,c,d,e;d=this.cases;for(b=0,c=d.length;b<c;b++)a=d[b],a[1].makeReturn();(e=this.otherwise)!=null&&e.makeReturn();return this},a.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;i=a.indent+O,j=a.indent=i+O,d=this.tab+("switch ("+(((n=this.subject)!=null?n.compile(a,x):void 0)||!1)+") {\n"),o=this.cases;for(h=0,l=o.length;h<l;h++){p=o[h],f=p[0],b=p[1],q=_([f]);for(k=0,m=q.length;k<m;k++)e=q[k],this.subject||(e=e.invert()),d+=i+("case "+e.compile(a,x)+":\n");if(c=b.compile(a,y))d+=c+"\n";if(h===this.cases.length-1&&!this.otherwise)break;g=this.lastNonComment(b.expressions);if(g instanceof I||g instanceof z&&g.jumps()&&g.value!=="debugger")continue;d+=j+"break;\n"}this.otherwise&&this.otherwise.expressions.length&&(d+=i+("default:\n"+this.otherwise.compile(a,y)+"\n"));return d+this.tab+"}"};return a}(),a.If=q=function(){function a(a,b,c){this.body=b,c==null&&(c={}),this.condition=c.type==="unless"?a.invert():a,this.elseBody=null,this.isChain=!1,this.soak=c.soak}bi(a,e),a.prototype.children=["condition","body","elseBody"],a.prototype.bodyNode=function(){var a;return(a=this.body)!=null?a.unwrap():void 0},a.prototype.elseBodyNode=function(){var a;return(a=this.elseBody)!=null?a.unwrap():void 0},a.prototype.addElse=function(b){this.isChain?this.elseBodyNode().addElse(b):(this.isChain=b instanceof a,this.elseBody=this.ensureBlock(b));return this},a.prototype.isStatement=function(a){var b;return(a!=null?a.level:void 0)===y||this.bodyNode().isStatement(a)||((b=this.elseBodyNode())!=null?b.isStatement(a):void 0)},a.prototype.jumps=function(a){var b;return this.body.jumps(a)||((b=this.elseBody)!=null?b.jumps(a):void 0)},a.prototype.compileNode=function(a){return this.isStatement(a)?this.compileStatement(a):this.compileExpression(a)},a.prototype.makeReturn=function(){this.body&&(this.body=new f([this.body.makeReturn()])),this.elseBody&&(this.elseBody=new f([this.elseBody.makeReturn()]));return this},a.prototype.ensureBlock=function(a){return a instanceof f?a:new f([a])},a.prototype.compileStatement=function(a){var b,c,d,e;c=Y(a,"chainChild"),d=this.condition.compile(a,x),a.indent+=O,b=this.ensureBlock(this.body).compile(a),b&&(b="\n"+b+"\n"+this.tab),e="if ("+d+") {"+b+"}",c||(e=this.tab+e);if(!this.elseBody)return e;return e+" else "+(this.isChain?(a.indent=this.tab,a.chainChild=!0,this.elseBody.unwrap().compile(a,y)):"{\n"+this.elseBody.compile(a,y)+"\n"+this.tab+"}")},a.prototype.compileExpression=function(a){var b,c,d,e;e=this.condition.compile(a,u),c=this.bodyNode().compile(a,v),b=this.elseBodyNode()?this.elseBodyNode().compile(a,v):"void 0",d=""+e+" ? "+c+" : "+b;return a.level<u?d:"("+d+")"},a.prototype.unfoldSoak=function(){return this.soak&&this};return a}(),G={wrap:function(a,c){if(c.isEmpty()||ba(c.expressions).jumps())return c;return c.push(new g(new U(new z(a),[new b(new z("push"))]),[c.pop()]))}},i={wrap:function(a,c,d){var e,h,i,k,l;if(a.jumps())return a;i=new j([],f.wrap([a])),e=[];if((k=a.contains(this.literalArgs))||a.contains(this.literalThis))l=new z(k?"apply":"call"),e=[new z("this")],k&&e.push(new z("arguments")),i=new U(i,[new b(l)]);i.noReturn=d,h=new g(i,e);return c?f.wrap([h]):h},literalArgs:function(a){return a instanceof z&&a.value==="arguments"&&!a.asKey},literalThis:function(a){return a instanceof z&&a.value==="this"&&!a.asKey||a instanceof j&&a.bound}},be=function(a,b,c){var d;if(d=b[c].unfoldSoak(a)){b[c]=d.body,d.body=new U(b);return d}},T={"extends":"function(child, parent) {\n  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }\n  function ctor() { this.constructor = child; }\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor;\n  child.__super__ = parent.prototype;\n  return child;\n}",bind:"function(fn, me){ return function(){ return fn.apply(me, arguments); }; }",indexOf:"Array.prototype.indexOf || function(item) {\n  for (var i = 0, l = this.length; i < l; i++) {\n    if (this[i] === item) return i;\n  }\n  return -1;\n}",hasProp:"Object.prototype.hasOwnProperty",slice:"Array.prototype.slice"},y=1,x=2,v=3,u=4,w=5,t=6,O="  ",Q=/[ \t]+$/gm,o=/^[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*$/,J=/^[+-]?\d+$/,p=/^['"]/,bf=function(a){var b;b="__"+a,K.root.assign(b,T[a]);return b},bc=function(a,b){return a.replace(/\n/g,"$&"+b)}}).call(this)},require["./coffee-script"]=new function(){var exports=this;(function(){var Lexer,RESERVED,compile,fs,lexer,parser,path,_ref;fs=require("fs"),path=require("path"),_ref=require("./lexer"),Lexer=_ref.Lexer,RESERVED=_ref.RESERVED,parser=require("./parser").parser,require.extensions?require.extensions[".coffee"]=function(a,b){var c;c=compile(fs.readFileSync(b,"utf8"));return a._compile(c,b)}:require.registerExtension&&require.registerExtension(".coffee",function(a){return compile(a)}),exports.VERSION="1.0.1",exports.RESERVED=RESERVED,exports.helpers=require("./helpers"),exports.compile=compile=function(a,b){b==null&&(b={});try{return parser.parse(lexer.tokenize(a)).compile(b)}catch(c){b.filename&&(c.message="In "+b.filename+", "+c.message);throw c}},exports.tokens=function(a,b){return lexer.tokenize(a,b)},exports.nodes=function(a,b){return typeof a==="string"?parser.parse(lexer.tokenize(a,b)):parser.parse(a)},exports.run=function(a,b){var c;c=module;while(c.parent)c=c.parent;c.filename=b.filename?fs.realpathSync(b.filename):".",c.moduleCache&&(c.moduleCache={});return path.extname(c.filename)!==".coffee"||require.extensions?c._compile(compile(a,b),c.filename):c._compile(a,c.filename)},exports.eval=function(code,options){var __dirname,__filename;__filename=module.filename=options.filename,__dirname=path.dirname(__filename);return eval(compile(code,options))},lexer=new Lexer,parser.lexer={lex:function(){var a,b;b=this.tokens[this.pos++]||[""],a=b[0],this.yytext=b[1],this.yylineno=b[2];return a},setInput:function(a){this.tokens=a;return this.pos=0},upcomingInput:function(){return""}},parser.yy=require("./nodes")}).call(this)},require["./browser"]=new function(){var exports=this;(function(){var CoffeeScript,runScripts;CoffeeScript=require("./coffee-script"),CoffeeScript.require=require,CoffeeScript.eval=function(code,options){return eval(CoffeeScript.compile(code,options))},CoffeeScript.run=function(a,b){b==null&&(b={}),b.bare=!0;return Function(CoffeeScript.compile(a,b))()};typeof window!="undefined"&&window!==null&&(CoffeeScript.load=function(a,b){var c;c=new(window.ActiveXObject||XMLHttpRequest)("Microsoft.XMLHTTP"),c.open("GET",a,!0),"overrideMimeType"in c&&c.overrideMimeType("text/plain"),c.onreadystatechange=function(){if(c.readyState===4)return CoffeeScript.run(c.responseText,b)};return c.send(null)},runScripts=function(){var a,b,c,d;d=document.getElementsByTagName("script");for(b=0,c=d.length;b<c;b++)a=d[b],a.type==="text/coffeescript"&&(a.src?CoffeeScript.load(a.src):CoffeeScript.run(a.innerHTML));return null},window.addEventListener?addEventListener("DOMContentLoaded",runScripts,!1):attachEvent("onload",runScripts))}).call(this)};return require["./coffee-script"]}()
;
var __slice = Array.prototype.slice;
(function() {
  var hslParser, hslToRgb, lookup, names, normalizeKey, parseHSL, parseHex, parseRGB, rgbParser, shiftLightness;
  rgbParser = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(\d?\.?\d*)?\)$/;
  hslParser = /^hsla?\((\d{1,3}),\s*(\d?\.?\d*),\s*(\d?\.?\d*),?\s*(\d?\.?\d*)?\)$/;
  parseHex = function(hexString) {
    var _result, i, rgb;
    hexString = hexString.replace(/#/, '');
    switch (hexString.length) {
      case 3:
      case 4:
        rgb = (function() {
          _result = [];
          for (i = 0; i <= 2; i++) {
            _result.push(parseInt(hexString.substr(i, 1), 16) * 0x11);
          }
          return _result;
        })();
        return rgb.concat(hexString.substr(3, 1).length ? (parseInt(hexString.substr(3, 1), 16) * 0x11) / 255.0 : 1.0);
      case 6:
      case 8:
        rgb = (function() {
          _result = [];
          for (i = 0; i <= 2; i++) {
            _result.push(parseInt(hexString.substr(2 * i, 2), 16));
          }
          return _result;
        })();
        return rgb.concat(hexString.substr(6, 2).length ? parseInt(hexString.substr(6, 2), 16) / 255.0 : 1.0);
      default:
        return undefined;
    }
  };
  parseRGB = function(colorString) {
    var _ref, bits, rgbMap;
    if (!(bits = rgbParser.exec(colorString))) {
      return undefined;
    }
    rgbMap = bits.splice(1, 3).map(function(channel) {
      return parseFloat(channel);
    });
    return rgbMap.concat((typeof (_ref = bits[1]) !== "undefined" && _ref !== null) ? parseFloat(bits[1]) : 1.0);
  };
  parseHSL = function(colorString) {
    var _ref, bits, hslMap;
    if (!(bits = hslParser.exec(colorString))) {
      return undefined;
    }
    hslMap = bits.splice(1, 3).map(function(channel) {
      return parseFloat(channel);
    });
    return hslToRgb(hslMap.concat((typeof (_ref = bits[1]) !== "undefined" && _ref !== null) ? parseFloat(bits[1]) : 1.0));
  };
  shiftLightness = function(amount, obj) {
    var hsl;
    hsl = obj.toHsl();
    hsl[2] = hsl[2] + amount;
    return Color(hslToRgb(hsl));
  };
  hslToRgb = function(hsl) {
    var a, b, g, h, hueToRgb, l, p, q, r, rgbMap, s;
    h = hsl[0] / 360.0;
    s = hsl[1];
    l = hsl[2];
    a = (hsl[3] ? parseFloat(hsl[3]) : 1.0);
    r = (g = (b = null));
    hueToRgb = function(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };
    if (s === 0) {
      r = (g = (b = l));
    } else {
      q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
      p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
      rgbMap = [r, g, b].map(function(channel) {
        return channel * 0xFF;
      });
    }
    return rgbMap.concat(a);
  };
  normalizeKey = function(key) {
    return key.toString().toLowerCase().split(' ').join('');
  };
  window.Color = function() {
    var _ref, alpha, args, arr, channels, color, parsedColor, rgbMap, self;
    args = __slice.call(arguments, 0);
    color = args.first();
    if ((typeof color === "undefined" || color === null) ? undefined : color.channels) {
      return Color(color.channels());
    }
    parsedColor = null;
    if (args.length === 0) {
      parsedColor = [0, 0, 0, 1];
    } else if (args.length === 1 && Object.isArray(args.first())) {
      arr = args.first();
      rgbMap = arr.splice(0, 3).map(function(channel) {
        return parseFloat(channel);
      });
      alpha = (typeof (_ref = arr[0]) !== "undefined" && _ref !== null) ? parseFloat(arr[0]) : 1.0;
      parsedColor = rgbMap.concat(alpha);
    } else if (args.length === 2) {
      color = args[0];
      alpha = args[1];
      if (Object.isArray(color)) {
        rgbMap = color.splice(0, 3).map(function(channel) {
          return parseFloat(channel);
        });
        parsedColor = rgbMap.concat(parseFloat(alpha));
      } else {
        parsedColor = lookup[normalizeKey(color)] || parseHex(color) || parseRGB(color) || parseHSL(color);
        parsedColor[3] = alpha;
      }
    } else if (args.length > 2) {
      rgbMap = args.splice(0, 3).map(function(channel) {
        return parseFloat(channel);
      });
      alpha = (typeof (_ref = args.first()) !== "undefined" && _ref !== null) ? args.first() : 1.0;
      parsedColor = rgbMap.concat(parseFloat(alpha));
    } else {
      color = args.first();
      parsedColor = lookup[normalizeKey(color)] || parseHex(color) || parseRGB(color) || parseHSL(color);
    }
    if (!(parsedColor)) {
      throw ("" + (args.join(',')) + " is an unknown color");
    }
    rgbMap = parsedColor.splice(0, 3).map(function(channel) {
      return channel.round();
    });
    alpha = ((typeof (_ref = parsedColor.first()) !== "undefined" && _ref !== null) ? parseFloat(parsedColor.first()) : 1.0);
    channels = rgbMap.concat(alpha);
    self = {
      channels: function() {
        return channels.copy();
      },
      r: function(val) {
        if (typeof val !== "undefined" && val !== null) {
          channels[0] = val;
          return self;
        } else {
          return channels[0];
        }
      },
      g: function(val) {
        if (typeof val !== "undefined" && val !== null) {
          channels[1] = val;
          return self;
        } else {
          return channels[1];
        }
      },
      b: function(val) {
        if (typeof val !== "undefined" && val !== null) {
          channels[2] = val;
          return self;
        } else {
          return channels[2];
        }
      },
      a: function(val) {
        if (typeof val !== "undefined" && val !== null) {
          channels[3] = val;
          return self;
        } else {
          return channels[3];
        }
      },
      equals: function(other) {
        return other.r() === self.r() && other.g() === self.g() && other.b() === self.b() && other.a() === self.a();
      },
      lighten: function(amount) {
        return shiftLightness(amount, self);
      },
      darken: function(amount) {
        return shiftLightness(-amount, self);
      },
      rgba: function() {
        return "rgba(" + (self.r()) + ", " + (self.g()) + ", " + (self.b()) + ", " + (self.a()) + ")";
      },
      desaturate: function(amount) {
        var hsl;
        hsl = self.toHsl();
        hsl[1] -= amount;
        return Color(hslToRgb(hsl));
      },
      saturate: function(amount) {
        var hsl;
        hsl = self.toHsl();
        hsl[1] += amount;
        return Color(hslToRgb(hsl));
      },
      grayscale: function() {
        var g, hsl;
        hsl = self.toHsl();
        g = hsl[2] * 255;
        return Color(g, g, g);
      },
      hue: function(degrees) {
        var hsl;
        hsl = self.toHsl();
        hsl[0] = (hsl[0] + degrees) % 360;
        return Color(hslToRgb(hsl));
      },
      complement: function() {
        var hsl;
        hsl = self.toHsl();
        return self.hue(180);
      },
      toHex: function() {
        var hexFromNumber, hexString, padString;
        hexString = function(number) {
          return number.toString(16);
        };
        padString = function(hexString) {
          var pad;
          if (hexString.length === 1) {
            pad = "0";
          }
          return (pad || "") + hexString;
        };
        hexFromNumber = function(number) {
          return padString(hexString(number));
        };
        return "#" + (hexFromNumber(channels[0])) + (hexFromNumber(channels[1])) + (hexFromNumber(channels[2]));
      },
      toHsl: function() {
        var _ref2, b, delta, g, hue, lightness, max, min, r, saturation;
        _ref2 = channels.map(function(channel) {
          return channel / 255.0;
        });
        r = _ref2[0];
        g = _ref2[1];
        b = _ref2[2];
        min = Math.min(r, g, b);
        max = Math.max(r, g, b);
        hue = (saturation = (lightness = (max + min) / 2.0));
        if (max === min) {
          hue = (saturation = 0);
        } else {
          delta = max - min;
          saturation = (lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min));
          switch (max) {
            case r:
              hue = (g - b) / delta + (g < b ? 6 : 0);
              break;
            case g:
              hue = (b - r) / delta + 2;
              break;
            case b:
              hue = (r - g) / delta + 4;
              break;
          }
          hue *= 60;
        }
        return [hue, saturation, lightness, channels[3]];
      },
      toString: function() {
        return self.rgba();
      }
    };
    return self;
  };
  lookup = {};
  names = [["000000", "Black"], ["000080", "Navy Blue"], ["0000C8", "Dark Blue"], ["0000FF", "Blue"], ["000741", "Stratos"], ["001B1C", "Swamp"], ["002387", "Resolution Blue"], ["002900", "Deep Fir"], ["002E20", "Burnham"], ["002FA7", "International Klein Blue"], ["003153", "Prussian Blue"], ["003366", "Midnight Blue"], ["003399", "Smalt"], ["003532", "Deep Teal"], ["003E40", "Cyprus"], ["004620", "Kaitoke Green"], ["0047AB", "Cobalt"], ["004816", "Crusoe"], ["004950", "Sherpa Blue"], ["0056A7", "Endeavour"], ["00581A", "Camarone"], ["0066CC", "Science Blue"], ["0066FF", "Blue Ribbon"], ["00755E", "Tropical Rain Forest"], ["0076A3", "Allports"], ["007BA7", "Deep Cerulean"], ["007EC7", "Lochmara"], ["007FFF", "Azure Radiance"], ["008080", "Teal"], ["0095B6", "Bondi Blue"], ["009DC4", "Pacific Blue"], ["00A693", "Persian Green"], ["00A86B", "Jade"], ["00CC99", "Caribbean Green"], ["00CCCC", "Robin's Egg Blue"], ["00FF00", "Green"], ["00FF7F", "Spring Green"], ["00FFFF", "Cyan / Aqua"], ["010D1A", "Blue Charcoal"], ["011635", "Midnight"], ["011D13", "Holly"], ["012731", "Daintree"], ["01361C", "Cardin Green"], ["01371A", "County Green"], ["013E62", "Astronaut Blue"], ["013F6A", "Regal Blue"], ["014B43", "Aqua Deep"], ["015E85", "Orient"], ["016162", "Blue Stone"], ["016D39", "Fun Green"], ["01796F", "Pine Green"], ["017987", "Blue Lagoon"], ["01826B", "Deep Sea"], ["01A368", "Green Haze"], ["022D15", "English Holly"], ["02402C", "Sherwood Green"], ["02478E", "Congress Blue"], ["024E46", "Evening Sea"], ["026395", "Bahama Blue"], ["02866F", "Observatory"], ["02A4D3", "Cerulean"], ["03163C", "Tangaroa"], ["032B52", "Green Vogue"], ["036A6E", "Mosque"], ["041004", "Midnight Moss"], ["041322", "Black Pearl"], ["042E4C", "Blue Whale"], ["044022", "Zuccini"], ["044259", "Teal Blue"], ["051040", "Deep Cove"], ["051657", "Gulf Blue"], ["055989", "Venice Blue"], ["056F57", "Watercourse"], ["062A78", "Catalina Blue"], ["063537", "Tiber"], ["069B81", "Gossamer"], ["06A189", "Niagara"], ["073A50", "Tarawera"], ["080110", "Jaguar"], ["081910", "Black Bean"], ["082567", "Deep Sapphire"], ["088370", "Elf Green"], ["08E8DE", "Bright Turquoise"], ["092256", "Downriver"], ["09230F", "Palm Green"], ["09255D", "Madison"], ["093624", "Bottle Green"], ["095859", "Deep Sea Green"], ["097F4B", "Salem"], ["0A001C", "Black Russian"], ["0A480D", "Dark Fern"], ["0A6906", "Japanese Laurel"], ["0A6F75", "Atoll"], ["0B0B0B", "Cod Gray"], ["0B0F08", "Marshland"], ["0B1107", "Gordons Green"], ["0B1304", "Black Forest"], ["0B6207", "San Felix"], ["0BDA51", "Malachite"], ["0C0B1D", "Ebony"], ["0C0D0F", "Woodsmoke"], ["0C1911", "Racing Green"], ["0C7A79", "Surfie Green"], ["0C8990", "Blue Chill"], ["0D0332", "Black Rock"], ["0D1117", "Bunker"], ["0D1C19", "Aztec"], ["0D2E1C", "Bush"], ["0E0E18", "Cinder"], ["0E2A30", "Firefly"], ["0F2D9E", "Torea Bay"], ["10121D", "Vulcan"], ["101405", "Green Waterloo"], ["105852", "Eden"], ["110C6C", "Arapawa"], ["120A8F", "Ultramarine"], ["123447", "Elephant"], ["126B40", "Jewel"], ["130000", "Diesel"], ["130A06", "Asphalt"], ["13264D", "Blue Zodiac"], ["134F19", "Parsley"], ["140600", "Nero"], ["1450AA", "Tory Blue"], ["151F4C", "Bunting"], ["1560BD", "Denim"], ["15736B", "Genoa"], ["161928", "Mirage"], ["161D10", "Hunter Green"], ["162A40", "Big Stone"], ["163222", "Celtic"], ["16322C", "Timber Green"], ["163531", "Gable Green"], ["171F04", "Pine Tree"], ["175579", "Chathams Blue"], ["182D09", "Deep Forest Green"], ["18587A", "Blumine"], ["19330E", "Palm Leaf"], ["193751", "Nile Blue"], ["1959A8", "Fun Blue"], ["1A1A68", "Lucky Point"], ["1AB385", "Mountain Meadow"], ["1B0245", "Tolopea"], ["1B1035", "Haiti"], ["1B127B", "Deep Koamaru"], ["1B1404", "Acadia"], ["1B2F11", "Seaweed"], ["1B3162", "Biscay"], ["1B659D", "Matisse"], ["1C1208", "Crowshead"], ["1C1E13", "Rangoon Green"], ["1C39BB", "Persian Blue"], ["1C402E", "Everglade"], ["1C7C7D", "Elm"], ["1D6142", "Green Pea"], ["1E0F04", "Creole"], ["1E1609", "Karaka"], ["1E1708", "El Paso"], ["1E385B", "Cello"], ["1E433C", "Te Papa Green"], ["1E90FF", "Dodger Blue"], ["1E9AB0", "Eastern Blue"], ["1F120F", "Night Rider"], ["1FC2C2", "Java"], ["20208D", "Jacksons Purple"], ["202E54", "Cloud Burst"], ["204852", "Blue Dianne"], ["211A0E", "Eternity"], ["220878", "Deep Blue"], ["228B22", "Forest Green"], ["233418", "Mallard"], ["240A40", "Violet"], ["240C02", "Kilamanjaro"], ["242A1D", "Log Cabin"], ["242E16", "Black Olive"], ["24500F", "Green House"], ["251607", "Graphite"], ["251706", "Cannon Black"], ["251F4F", "Port Gore"], ["25272C", "Shark"], ["25311C", "Green Kelp"], ["2596D1", "Curious Blue"], ["260368", "Paua"], ["26056A", "Paris M"], ["261105", "Wood Bark"], ["261414", "Gondola"], ["262335", "Steel Gray"], ["26283B", "Ebony Clay"], ["273A81", "Bay of Many"], ["27504B", "Plantation"], ["278A5B", "Eucalyptus"], ["281E15", "Oil"], ["283A77", "Astronaut"], ["286ACD", "Mariner"], ["290C5E", "Violent Violet"], ["292130", "Bastille"], ["292319", "Zeus"], ["292937", "Charade"], ["297B9A", "Jelly Bean"], ["29AB87", "Jungle Green"], ["2A0359", "Cherry Pie"], ["2A140E", "Coffee Bean"], ["2A2630", "Baltic Sea"], ["2A380B", "Turtle Green"], ["2A52BE", "Cerulean Blue"], ["2B0202", "Sepia Black"], ["2B194F", "Valhalla"], ["2B3228", "Heavy Metal"], ["2C0E8C", "Blue Gem"], ["2C1632", "Revolver"], ["2C2133", "Bleached Cedar"], ["2C8C84", "Lochinvar"], ["2D2510", "Mikado"], ["2D383A", "Outer Space"], ["2D569B", "St Tropaz"], ["2E0329", "Jacaranda"], ["2E1905", "Jacko Bean"], ["2E3222", "Rangitoto"], ["2E3F62", "Rhino"], ["2E8B57", "Sea Green"], ["2EBFD4", "Scooter"], ["2F270E", "Onion"], ["2F3CB3", "Governor Bay"], ["2F519E", "Sapphire"], ["2F5A57", "Spectra"], ["2F6168", "Casal"], ["300529", "Melanzane"], ["301F1E", "Cocoa Brown"], ["302A0F", "Woodrush"], ["304B6A", "San Juan"], ["30D5C8", "Turquoise"], ["311C17", "Eclipse"], ["314459", "Pickled Bluewood"], ["315BA1", "Azure"], ["31728D", "Calypso"], ["317D82", "Paradiso"], ["32127A", "Persian Indigo"], ["32293A", "Blackcurrant"], ["323232", "Mine Shaft"], ["325D52", "Stromboli"], ["327C14", "Bilbao"], ["327DA0", "Astral"], ["33036B", "Christalle"], ["33292F", "Thunder"], ["33CC99", "Shamrock"], ["341515", "Tamarind"], ["350036", "Mardi Gras"], ["350E42", "Valentino"], ["350E57", "Jagger"], ["353542", "Tuna"], ["354E8C", "Chambray"], ["363050", "Martinique"], ["363534", "Tuatara"], ["363C0D", "Waiouru"], ["36747D", "Ming"], ["368716", "La Palma"], ["370202", "Chocolate"], ["371D09", "Clinker"], ["37290E", "Brown Tumbleweed"], ["373021", "Birch"], ["377475", "Oracle"], ["380474", "Blue Diamond"], ["381A51", "Grape"], ["383533", "Dune"], ["384555", "Oxford Blue"], ["384910", "Clover"], ["394851", "Limed Spruce"], ["396413", "Dell"], ["3A0020", "Toledo"], ["3A2010", "Sambuca"], ["3A2A6A", "Jacarta"], ["3A686C", "William"], ["3A6A47", "Killarney"], ["3AB09E", "Keppel"], ["3B000B", "Temptress"], ["3B0910", "Aubergine"], ["3B1F1F", "Jon"], ["3B2820", "Treehouse"], ["3B7A57", "Amazon"], ["3B91B4", "Boston Blue"], ["3C0878", "Windsor"], ["3C1206", "Rebel"], ["3C1F76", "Meteorite"], ["3C2005", "Dark Ebony"], ["3C3910", "Camouflage"], ["3C4151", "Bright Gray"], ["3C4443", "Cape Cod"], ["3C493A", "Lunar Green"], ["3D0C02", "Bean  "], ["3D2B1F", "Bistre"], ["3D7D52", "Goblin"], ["3E0480", "Kingfisher Daisy"], ["3E1C14", "Cedar"], ["3E2B23", "English Walnut"], ["3E2C1C", "Black Marlin"], ["3E3A44", "Ship Gray"], ["3EABBF", "Pelorous"], ["3F2109", "Bronze"], ["3F2500", "Cola"], ["3F3002", "Madras"], ["3F307F", "Minsk"], ["3F4C3A", "Cabbage Pont"], ["3F583B", "Tom Thumb"], ["3F5D53", "Mineral Green"], ["3FC1AA", "Puerto Rico"], ["3FFF00", "Harlequin"], ["401801", "Brown Pod"], ["40291D", "Cork"], ["403B38", "Masala"], ["403D19", "Thatch Green"], ["405169", "Fiord"], ["40826D", "Viridian"], ["40A860", "Chateau Green"], ["410056", "Ripe Plum"], ["411F10", "Paco"], ["412010", "Deep Oak"], ["413C37", "Merlin"], ["414257", "Gun Powder"], ["414C7D", "East Bay"], ["4169E1", "Royal Blue"], ["41AA78", "Ocean Green"], ["420303", "Burnt Maroon"], ["423921", "Lisbon Brown"], ["427977", "Faded Jade"], ["431560", "Scarlet Gum"], ["433120", "Iroko"], ["433E37", "Armadillo"], ["434C59", "River Bed"], ["436A0D", "Green Leaf"], ["44012D", "Barossa"], ["441D00", "Morocco Brown"], ["444954", "Mako"], ["454936", "Kelp"], ["456CAC", "San Marino"], ["45B1E8", "Picton Blue"], ["460B41", "Loulou"], ["462425", "Crater Brown"], ["465945", "Gray Asparagus"], ["4682B4", "Steel Blue"], ["480404", "Rustic Red"], ["480607", "Bulgarian Rose"], ["480656", "Clairvoyant"], ["481C1C", "Cocoa Bean"], ["483131", "Woody Brown"], ["483C32", "Taupe"], ["49170C", "Van Cleef"], ["492615", "Brown Derby"], ["49371B", "Metallic Bronze"], ["495400", "Verdun Green"], ["496679", "Blue Bayoux"], ["497183", "Bismark"], ["4A2A04", "Bracken"], ["4A3004", "Deep Bronze"], ["4A3C30", "Mondo"], ["4A4244", "Tundora"], ["4A444B", "Gravel"], ["4A4E5A", "Trout"], ["4B0082", "Pigment Indigo"], ["4B5D52", "Nandor"], ["4C3024", "Saddle"], ["4C4F56", "Abbey"], ["4D0135", "Blackberry"], ["4D0A18", "Cab Sav"], ["4D1E01", "Indian Tan"], ["4D282D", "Cowboy"], ["4D282E", "Livid Brown"], ["4D3833", "Rock"], ["4D3D14", "Punga"], ["4D400F", "Bronzetone"], ["4D5328", "Woodland"], ["4E0606", "Mahogany"], ["4E2A5A", "Bossanova"], ["4E3B41", "Matterhorn"], ["4E420C", "Bronze Olive"], ["4E4562", "Mulled Wine"], ["4E6649", "Axolotl"], ["4E7F9E", "Wedgewood"], ["4EABD1", "Shakespeare"], ["4F1C70", "Honey Flower"], ["4F2398", "Daisy Bush"], ["4F69C6", "Indigo"], ["4F7942", "Fern Green"], ["4F9D5D", "Fruit Salad"], ["4FA83D", "Apple"], ["504351", "Mortar"], ["507096", "Kashmir Blue"], ["507672", "Cutty Sark"], ["50C878", "Emerald"], ["514649", "Emperor"], ["516E3D", "Chalet Green"], ["517C66", "Como"], ["51808F", "Smalt Blue"], ["52001F", "Castro"], ["520C17", "Maroon Oak"], ["523C94", "Gigas"], ["533455", "Voodoo"], ["534491", "Victoria"], ["53824B", "Hippie Green"], ["541012", "Heath"], ["544333", "Judge Gray"], ["54534D", "Fuscous Gray"], ["549019", "Vida Loca"], ["55280C", "Cioccolato"], ["555B10", "Saratoga"], ["556D56", "Finlandia"], ["5590D9", "Havelock Blue"], ["56B4BE", "Fountain Blue"], ["578363", "Spring Leaves"], ["583401", "Saddle Brown"], ["585562", "Scarpa Flow"], ["587156", "Cactus"], ["589AAF", "Hippie Blue"], ["591D35", "Wine Berry"], ["592804", "Brown Bramble"], ["593737", "Congo Brown"], ["594433", "Millbrook"], ["5A6E9C", "Waikawa Gray"], ["5A87A0", "Horizon"], ["5B3013", "Jambalaya"], ["5C0120", "Bordeaux"], ["5C0536", "Mulberry Wood"], ["5C2E01", "Carnaby Tan"], ["5C5D75", "Comet"], ["5D1E0F", "Redwood"], ["5D4C51", "Don Juan"], ["5D5C58", "Chicago"], ["5D5E37", "Verdigris"], ["5D7747", "Dingley"], ["5DA19F", "Breaker Bay"], ["5E483E", "Kabul"], ["5E5D3B", "Hemlock"], ["5F3D26", "Irish Coffee"], ["5F5F6E", "Mid Gray"], ["5F6672", "Shuttle Gray"], ["5FA777", "Aqua Forest"], ["5FB3AC", "Tradewind"], ["604913", "Horses Neck"], ["605B73", "Smoky"], ["606E68", "Corduroy"], ["6093D1", "Danube"], ["612718", "Espresso"], ["614051", "Eggplant"], ["615D30", "Costa Del Sol"], ["61845F", "Glade Green"], ["622F30", "Buccaneer"], ["623F2D", "Quincy"], ["624E9A", "Butterfly Bush"], ["625119", "West Coast"], ["626649", "Finch"], ["639A8F", "Patina"], ["63B76C", "Fern"], ["6456B7", "Blue Violet"], ["646077", "Dolphin"], ["646463", "Storm Dust"], ["646A54", "Siam"], ["646E75", "Nevada"], ["6495ED", "Cornflower Blue"], ["64CCDB", "Viking"], ["65000B", "Rosewood"], ["651A14", "Cherrywood"], ["652DC1", "Purple Heart"], ["657220", "Fern Frond"], ["65745D", "Willow Grove"], ["65869F", "Hoki"], ["660045", "Pompadour"], ["660099", "Purple"], ["66023C", "Tyrian Purple"], ["661010", "Dark Tan"], ["66B58F", "Silver Tree"], ["66FF00", "Bright Green"], ["66FF66", "Screamin' Green"], ["67032D", "Black Rose"], ["675FA6", "Scampi"], ["676662", "Ironside Gray"], ["678975", "Viridian Green"], ["67A712", "Christi"], ["683600", "Nutmeg Wood Finish"], ["685558", "Zambezi"], ["685E6E", "Salt Box"], ["692545", "Tawny Port"], ["692D54", "Finn"], ["695F62", "Scorpion"], ["697E9A", "Lynch"], ["6A442E", "Spice"], ["6A5D1B", "Himalaya"], ["6A6051", "Soya Bean"], ["6B2A14", "Hairy Heath"], ["6B3FA0", "Royal Purple"], ["6B4E31", "Shingle Fawn"], ["6B5755", "Dorado"], ["6B8BA2", "Bermuda Gray"], ["6B8E23", "Olive Drab"], ["6C3082", "Eminence"], ["6CDAE7", "Turquoise Blue"], ["6D0101", "Lonestar"], ["6D5E54", "Pine Cone"], ["6D6C6C", "Dove Gray"], ["6D9292", "Juniper"], ["6D92A1", "Gothic"], ["6E0902", "Red Oxide"], ["6E1D14", "Moccaccino"], ["6E4826", "Pickled Bean"], ["6E4B26", "Dallas"], ["6E6D57", "Kokoda"], ["6E7783", "Pale Sky"], ["6F440C", "Cafe Royale"], ["6F6A61", "Flint"], ["6F8E63", "Highland"], ["6F9D02", "Limeade"], ["6FD0C5", "Downy"], ["701C1C", "Persian Plum"], ["704214", "Sepia"], ["704A07", "Antique Bronze"], ["704F50", "Ferra"], ["706555", "Coffee"], ["708090", "Slate Gray"], ["711A00", "Cedar Wood Finish"], ["71291D", "Metallic Copper"], ["714693", "Affair"], ["714AB2", "Studio"], ["715D47", "Tobacco Brown"], ["716338", "Yellow Metal"], ["716B56", "Peat"], ["716E10", "Olivetone"], ["717486", "Storm Gray"], ["718080", "Sirocco"], ["71D9E2", "Aquamarine Blue"], ["72010F", "Venetian Red"], ["724A2F", "Old Copper"], ["726D4E", "Go Ben"], ["727B89", "Raven"], ["731E8F", "Seance"], ["734A12", "Raw Umber"], ["736C9F", "Kimberly"], ["736D58", "Crocodile"], ["737829", "Crete"], ["738678", "Xanadu"], ["74640D", "Spicy Mustard"], ["747D63", "Limed Ash"], ["747D83", "Rolling Stone"], ["748881", "Blue Smoke"], ["749378", "Laurel"], ["74C365", "Mantis"], ["755A57", "Russett"], ["7563A8", "Deluge"], ["76395D", "Cosmic"], ["7666C6", "Blue Marguerite"], ["76BD17", "Lima"], ["76D7EA", "Sky Blue"], ["770F05", "Dark Burgundy"], ["771F1F", "Crown of Thorns"], ["773F1A", "Walnut"], ["776F61", "Pablo"], ["778120", "Pacifika"], ["779E86", "Oxley"], ["77DD77", "Pastel Green"], ["780109", "Japanese Maple"], ["782D19", "Mocha"], ["782F16", "Peanut"], ["78866B", "Camouflage Green"], ["788A25", "Wasabi"], ["788BBA", "Ship Cove"], ["78A39C", "Sea Nymph"], ["795D4C", "Roman Coffee"], ["796878", "Old Lavender"], ["796989", "Rum"], ["796A78", "Fedora"], ["796D62", "Sandstone"], ["79DEEC", "Spray"], ["7A013A", "Siren"], ["7A58C1", "Fuchsia Blue"], ["7A7A7A", "Boulder"], ["7A89B8", "Wild Blue Yonder"], ["7AC488", "De York"], ["7B3801", "Red Beech"], ["7B3F00", "Cinnamon"], ["7B6608", "Yukon Gold"], ["7B7874", "Tapa"], ["7B7C94", "Waterloo "], ["7B8265", "Flax Smoke"], ["7B9F80", "Amulet"], ["7BA05B", "Asparagus"], ["7C1C05", "Kenyan Copper"], ["7C7631", "Pesto"], ["7C778A", "Topaz"], ["7C7B7A", "Concord"], ["7C7B82", "Jumbo"], ["7C881A", "Trendy Green"], ["7CA1A6", "Gumbo"], ["7CB0A1", "Acapulco"], ["7CB7BB", "Neptune"], ["7D2C14", "Pueblo"], ["7DA98D", "Bay Leaf"], ["7DC8F7", "Malibu"], ["7DD8C6", "Bermuda"], ["7E3A15", "Copper Canyon"], ["7F1734", "Claret"], ["7F3A02", "Peru Tan"], ["7F626D", "Falcon"], ["7F7589", "Mobster"], ["7F76D3", "Moody Blue"], ["7FFF00", "Chartreuse"], ["7FFFD4", "Aquamarine"], ["800000", "Maroon"], ["800B47", "Rose Bud Cherry"], ["801818", "Falu Red"], ["80341F", "Red Robin"], ["803790", "Vivid Violet"], ["80461B", "Russet"], ["807E79", "Friar Gray"], ["808000", "Olive"], ["808080", "Gray"], ["80B3AE", "Gulf Stream"], ["80B3C4", "Glacier"], ["80CCEA", "Seagull"], ["81422C", "Nutmeg"], ["816E71", "Spicy Pink"], ["817377", "Empress"], ["819885", "Spanish Green"], ["826F65", "Sand Dune"], ["828685", "Gunsmoke"], ["828F72", "Battleship Gray"], ["831923", "Merlot"], ["837050", "Shadow"], ["83AA5D", "Chelsea Cucumber"], ["83D0C6", "Monte Carlo"], ["843179", "Plum"], ["84A0A0", "Granny Smith"], ["8581D9", "Chetwode Blue"], ["858470", "Bandicoot"], ["859FAF", "Bali Hai"], ["85C4CC", "Half Baked"], ["860111", "Red Devil"], ["863C3C", "Lotus"], ["86483C", "Ironstone"], ["864D1E", "Bull Shot"], ["86560A", "Rusty Nail"], ["868974", "Bitter"], ["86949F", "Regent Gray"], ["871550", "Disco"], ["87756E", "Americano"], ["877C7B", "Hurricane"], ["878D91", "Oslo Gray"], ["87AB39", "Sushi"], ["885342", "Spicy Mix"], ["886221", "Kumera"], ["888387", "Suva Gray"], ["888D65", "Avocado"], ["893456", "Camelot"], ["893843", "Solid Pink"], ["894367", "Cannon Pink"], ["897D6D", "Makara"], ["8A3324", "Burnt Umber"], ["8A73D6", "True V"], ["8A8360", "Clay Creek"], ["8A8389", "Monsoon"], ["8A8F8A", "Stack"], ["8AB9F1", "Jordy Blue"], ["8B00FF", "Electric Violet"], ["8B0723", "Monarch"], ["8B6B0B", "Corn Harvest"], ["8B8470", "Olive Haze"], ["8B847E", "Schooner"], ["8B8680", "Natural Gray"], ["8B9C90", "Mantle"], ["8B9FEE", "Portage"], ["8BA690", "Envy"], ["8BA9A5", "Cascade"], ["8BE6D8", "Riptide"], ["8C055E", "Cardinal Pink"], ["8C472F", "Mule Fawn"], ["8C5738", "Potters Clay"], ["8C6495", "Trendy Pink"], ["8D0226", "Paprika"], ["8D3D38", "Sanguine Brown"], ["8D3F3F", "Tosca"], ["8D7662", "Cement"], ["8D8974", "Granite Green"], ["8D90A1", "Manatee"], ["8DA8CC", "Polo Blue"], ["8E0000", "Red Berry"], ["8E4D1E", "Rope"], ["8E6F70", "Opium"], ["8E775E", "Domino"], ["8E8190", "Mamba"], ["8EABC1", "Nepal"], ["8F021C", "Pohutukawa"], ["8F3E33", "El Salva"], ["8F4B0E", "Korma"], ["8F8176", "Squirrel"], ["8FD6B4", "Vista Blue"], ["900020", "Burgundy"], ["901E1E", "Old Brick"], ["907874", "Hemp"], ["907B71", "Almond Frost"], ["908D39", "Sycamore"], ["92000A", "Sangria"], ["924321", "Cumin"], ["926F5B", "Beaver"], ["928573", "Stonewall"], ["928590", "Venus"], ["9370DB", "Medium Purple"], ["93CCEA", "Cornflower"], ["93DFB8", "Algae Green"], ["944747", "Copper Rust"], ["948771", "Arrowtown"], ["950015", "Scarlett"], ["956387", "Strikemaster"], ["959396", "Mountain Mist"], ["960018", "Carmine"], ["964B00", "Brown"], ["967059", "Leather"], ["9678B6", "Purple Mountain's Majesty"], ["967BB6", "Lavender Purple"], ["96A8A1", "Pewter"], ["96BBAB", "Summer Green"], ["97605D", "Au Chico"], ["9771B5", "Wisteria"], ["97CD2D", "Atlantis"], ["983D61", "Vin Rouge"], ["9874D3", "Lilac Bush"], ["98777B", "Bazaar"], ["98811B", "Hacienda"], ["988D77", "Pale Oyster"], ["98FF98", "Mint Green"], ["990066", "Fresh Eggplant"], ["991199", "Violet Eggplant"], ["991613", "Tamarillo"], ["991B07", "Totem Pole"], ["996666", "Copper Rose"], ["9966CC", "Amethyst"], ["997A8D", "Mountbatten Pink"], ["9999CC", "Blue Bell"], ["9A3820", "Prairie Sand"], ["9A6E61", "Toast"], ["9A9577", "Gurkha"], ["9AB973", "Olivine"], ["9AC2B8", "Shadow Green"], ["9B4703", "Oregon"], ["9B9E8F", "Lemon Grass"], ["9C3336", "Stiletto"], ["9D5616", "Hawaiian Tan"], ["9DACB7", "Gull Gray"], ["9DC209", "Pistachio"], ["9DE093", "Granny Smith Apple"], ["9DE5FF", "Anakiwa"], ["9E5302", "Chelsea Gem"], ["9E5B40", "Sepia Skin"], ["9EA587", "Sage"], ["9EA91F", "Citron"], ["9EB1CD", "Rock Blue"], ["9EDEE0", "Morning Glory"], ["9F381D", "Cognac"], ["9F821C", "Reef Gold"], ["9F9F9C", "Star Dust"], ["9FA0B1", "Santas Gray"], ["9FD7D3", "Sinbad"], ["9FDD8C", "Feijoa"], ["A02712", "Tabasco"], ["A1750D", "Buttered Rum"], ["A1ADB5", "Hit Gray"], ["A1C50A", "Citrus"], ["A1DAD7", "Aqua Island"], ["A1E9DE", "Water Leaf"], ["A2006D", "Flirt"], ["A23B6C", "Rouge"], ["A26645", "Cape Palliser"], ["A2AAB3", "Gray Chateau"], ["A2AEAB", "Edward"], ["A3807B", "Pharlap"], ["A397B4", "Amethyst Smoke"], ["A3E3ED", "Blizzard Blue"], ["A4A49D", "Delta"], ["A4A6D3", "Wistful"], ["A4AF6E", "Green Smoke"], ["A50B5E", "Jazzberry Jam"], ["A59B91", "Zorba"], ["A5CB0C", "Bahia"], ["A62F20", "Roof Terracotta"], ["A65529", "Paarl"], ["A68B5B", "Barley Corn"], ["A69279", "Donkey Brown"], ["A6A29A", "Dawn"], ["A72525", "Mexican Red"], ["A7882C", "Luxor Gold"], ["A85307", "Rich Gold"], ["A86515", "Reno Sand"], ["A86B6B", "Coral Tree"], ["A8989B", "Dusty Gray"], ["A899E6", "Dull Lavender"], ["A8A589", "Tallow"], ["A8AE9C", "Bud"], ["A8AF8E", "Locust"], ["A8BD9F", "Norway"], ["A8E3BD", "Chinook"], ["A9A491", "Gray Olive"], ["A9ACB6", "Aluminium"], ["A9B2C3", "Cadet Blue"], ["A9B497", "Schist"], ["A9BDBF", "Tower Gray"], ["A9BEF2", "Perano"], ["A9C6C2", "Opal"], ["AA375A", "Night Shadz"], ["AA4203", "Fire"], ["AA8B5B", "Muesli"], ["AA8D6F", "Sandal"], ["AAA5A9", "Shady Lady"], ["AAA9CD", "Logan"], ["AAABB7", "Spun Pearl"], ["AAD6E6", "Regent St Blue"], ["AAF0D1", "Magic Mint"], ["AB0563", "Lipstick"], ["AB3472", "Royal Heath"], ["AB917A", "Sandrift"], ["ABA0D9", "Cold Purple"], ["ABA196", "Bronco"], ["AC8A56", "Limed Oak"], ["AC91CE", "East Side"], ["AC9E22", "Lemon Ginger"], ["ACA494", "Napa"], ["ACA586", "Hillary"], ["ACA59F", "Cloudy"], ["ACACAC", "Silver Chalice"], ["ACB78E", "Swamp Green"], ["ACCBB1", "Spring Rain"], ["ACDD4D", "Conifer"], ["ACE1AF", "Celadon"], ["AD781B", "Mandalay"], ["ADBED1", "Casper"], ["ADDFAD", "Moss Green"], ["ADE6C4", "Padua"], ["ADFF2F", "Green Yellow"], ["AE4560", "Hippie Pink"], ["AE6020", "Desert"], ["AE809E", "Bouquet"], ["AF4035", "Medium Carmine"], ["AF4D43", "Apple Blossom"], ["AF593E", "Brown Rust"], ["AF8751", "Driftwood"], ["AF8F2C", "Alpine"], ["AF9F1C", "Lucky"], ["AFA09E", "Martini"], ["AFB1B8", "Bombay"], ["AFBDD9", "Pigeon Post"], ["B04C6A", "Cadillac"], ["B05D54", "Matrix"], ["B05E81", "Tapestry"], ["B06608", "Mai Tai"], ["B09A95", "Del Rio"], ["B0E0E6", "Powder Blue"], ["B0E313", "Inch Worm"], ["B10000", "Bright Red"], ["B14A0B", "Vesuvius"], ["B1610B", "Pumpkin Skin"], ["B16D52", "Santa Fe"], ["B19461", "Teak"], ["B1E2C1", "Fringy Flower"], ["B1F4E7", "Ice Cold"], ["B20931", "Shiraz"], ["B2A1EA", "Biloba Flower"], ["B32D29", "Tall Poppy"], ["B35213", "Fiery Orange"], ["B38007", "Hot Toddy"], ["B3AF95", "Taupe Gray"], ["B3C110", "La Rioja"], ["B43332", "Well Read"], ["B44668", "Blush"], ["B4CFD3", "Jungle Mist"], ["B57281", "Turkish Rose"], ["B57EDC", "Lavender"], ["B5A27F", "Mongoose"], ["B5B35C", "Olive Green"], ["B5D2CE", "Jet Stream"], ["B5ECDF", "Cruise"], ["B6316C", "Hibiscus"], ["B69D98", "Thatch"], ["B6B095", "Heathered Gray"], ["B6BAA4", "Eagle"], ["B6D1EA", "Spindle"], ["B6D3BF", "Gum Leaf"], ["B7410E", "Rust"], ["B78E5C", "Muddy Waters"], ["B7A214", "Sahara"], ["B7A458", "Husk"], ["B7B1B1", "Nobel"], ["B7C3D0", "Heather"], ["B7F0BE", "Madang"], ["B81104", "Milano Red"], ["B87333", "Copper"], ["B8B56A", "Gimblet"], ["B8C1B1", "Green Spring"], ["B8C25D", "Celery"], ["B8E0F9", "Sail"], ["B94E48", "Chestnut"], ["B95140", "Crail"], ["B98D28", "Marigold"], ["B9C46A", "Wild Willow"], ["B9C8AC", "Rainee"], ["BA0101", "Guardsman Red"], ["BA450C", "Rock Spray"], ["BA6F1E", "Bourbon"], ["BA7F03", "Pirate Gold"], ["BAB1A2", "Nomad"], ["BAC7C9", "Submarine"], ["BAEEF9", "Charlotte"], ["BB3385", "Medium Red Violet"], ["BB8983", "Brandy Rose"], ["BBD009", "Rio Grande"], ["BBD7C1", "Surf"], ["BCC9C2", "Powder Ash"], ["BD5E2E", "Tuscany"], ["BD978E", "Quicksand"], ["BDB1A8", "Silk"], ["BDB2A1", "Malta"], ["BDB3C7", "Chatelle"], ["BDBBD7", "Lavender Gray"], ["BDBDC6", "French Gray"], ["BDC8B3", "Clay Ash"], ["BDC9CE", "Loblolly"], ["BDEDFD", "French Pass"], ["BEA6C3", "London Hue"], ["BEB5B7", "Pink Swan"], ["BEDE0D", "Fuego"], ["BF5500", "Rose of Sharon"], ["BFB8B0", "Tide"], ["BFBED8", "Blue Haze"], ["BFC1C2", "Silver Sand"], ["BFC921", "Key Lime Pie"], ["BFDBE2", "Ziggurat"], ["BFFF00", "Lime"], ["C02B18", "Thunderbird"], ["C04737", "Mojo"], ["C08081", "Old Rose"], ["C0C0C0", "Silver"], ["C0D3B9", "Pale Leaf"], ["C0D8B6", "Pixie Green"], ["C1440E", "Tia Maria"], ["C154C1", "Fuchsia Pink"], ["C1A004", "Buddha Gold"], ["C1B7A4", "Bison Hide"], ["C1BAB0", "Tea"], ["C1BECD", "Gray Suit"], ["C1D7B0", "Sprout"], ["C1F07C", "Sulu"], ["C26B03", "Indochine"], ["C2955D", "Twine"], ["C2BDB6", "Cotton Seed"], ["C2CAC4", "Pumice"], ["C2E8E5", "Jagged Ice"], ["C32148", "Maroon Flush"], ["C3B091", "Indian Khaki"], ["C3BFC1", "Pale Slate"], ["C3C3BD", "Gray Nickel"], ["C3CDE6", "Periwinkle Gray"], ["C3D1D1", "Tiara"], ["C3DDF9", "Tropical Blue"], ["C41E3A", "Cardinal"], ["C45655", "Fuzzy Wuzzy Brown"], ["C45719", "Orange Roughy"], ["C4C4BC", "Mist Gray"], ["C4D0B0", "Coriander"], ["C4F4EB", "Mint Tulip"], ["C54B8C", "Mulberry"], ["C59922", "Nugget"], ["C5994B", "Tussock"], ["C5DBCA", "Sea Mist"], ["C5E17A", "Yellow Green"], ["C62D42", "Brick Red"], ["C6726B", "Contessa"], ["C69191", "Oriental Pink"], ["C6A84B", "Roti"], ["C6C3B5", "Ash"], ["C6C8BD", "Kangaroo"], ["C6E610", "Las Palmas"], ["C7031E", "Monza"], ["C71585", "Red Violet"], ["C7BCA2", "Coral Reef"], ["C7C1FF", "Melrose"], ["C7C4BF", "Cloud"], ["C7C9D5", "Ghost"], ["C7CD90", "Pine Glade"], ["C7DDE5", "Botticelli"], ["C88A65", "Antique Brass"], ["C8A2C8", "Lilac"], ["C8A528", "Hokey Pokey"], ["C8AABF", "Lily"], ["C8B568", "Laser"], ["C8E3D7", "Edgewater"], ["C96323", "Piper"], ["C99415", "Pizza"], ["C9A0DC", "Light Wisteria"], ["C9B29B", "Rodeo Dust"], ["C9B35B", "Sundance"], ["C9B93B", "Earls Green"], ["C9C0BB", "Silver Rust"], ["C9D9D2", "Conch"], ["C9FFA2", "Reef"], ["C9FFE5", "Aero Blue"], ["CA3435", "Flush Mahogany"], ["CABB48", "Turmeric"], ["CADCD4", "Paris White"], ["CAE00D", "Bitter Lemon"], ["CAE6DA", "Skeptic"], ["CB8FA9", "Viola"], ["CBCAB6", "Foggy Gray"], ["CBD3B0", "Green Mist"], ["CBDBD6", "Nebula"], ["CC3333", "Persian Red"], ["CC5500", "Burnt Orange"], ["CC7722", "Ochre"], ["CC8899", "Puce"], ["CCCAA8", "Thistle Green"], ["CCCCFF", "Periwinkle"], ["CCFF00", "Electric Lime"], ["CD5700", "Tenn"], ["CD5C5C", "Chestnut Rose"], ["CD8429", "Brandy Punch"], ["CDF4FF", "Onahau"], ["CEB98F", "Sorrell Brown"], ["CEBABA", "Cold Turkey"], ["CEC291", "Yuma"], ["CEC7A7", "Chino"], ["CFA39D", "Eunry"], ["CFB53B", "Old Gold"], ["CFDCCF", "Tasman"], ["CFE5D2", "Surf Crest"], ["CFF9F3", "Humming Bird"], ["CFFAF4", "Scandal"], ["D05F04", "Red Stage"], ["D06DA1", "Hopbush"], ["D07D12", "Meteor"], ["D0BEF8", "Perfume"], ["D0C0E5", "Prelude"], ["D0F0C0", "Tea Green"], ["D18F1B", "Geebung"], ["D1BEA8", "Vanilla"], ["D1C6B4", "Soft Amber"], ["D1D2CA", "Celeste"], ["D1D2DD", "Mischka"], ["D1E231", "Pear"], ["D2691E", "Hot Cinnamon"], ["D27D46", "Raw Sienna"], ["D29EAA", "Careys Pink"], ["D2B48C", "Tan"], ["D2DA97", "Deco"], ["D2F6DE", "Blue Romance"], ["D2F8B0", "Gossip"], ["D3CBBA", "Sisal"], ["D3CDC5", "Swirl"], ["D47494", "Charm"], ["D4B6AF", "Clam Shell"], ["D4BF8D", "Straw"], ["D4C4A8", "Akaroa"], ["D4CD16", "Bird Flower"], ["D4D7D9", "Iron"], ["D4DFE2", "Geyser"], ["D4E2FC", "Hawkes Blue"], ["D54600", "Grenadier"], ["D591A4", "Can Can"], ["D59A6F", "Whiskey"], ["D5D195", "Winter Hazel"], ["D5F6E3", "Granny Apple"], ["D69188", "My Pink"], ["D6C562", "Tacha"], ["D6CEF6", "Moon Raker"], ["D6D6D1", "Quill Gray"], ["D6FFDB", "Snowy Mint"], ["D7837F", "New York Pink"], ["D7C498", "Pavlova"], ["D7D0FF", "Fog"], ["D84437", "Valencia"], ["D87C63", "Japonica"], ["D8BFD8", "Thistle"], ["D8C2D5", "Maverick"], ["D8FCFA", "Foam"], ["D94972", "Cabaret"], ["D99376", "Burning Sand"], ["D9B99B", "Cameo"], ["D9D6CF", "Timberwolf"], ["D9DCC1", "Tana"], ["D9E4F5", "Link Water"], ["D9F7FF", "Mabel"], ["DA3287", "Cerise"], ["DA5B38", "Flame Pea"], ["DA6304", "Bamboo"], ["DA6A41", "Red Damask"], ["DA70D6", "Orchid"], ["DA8A67", "Copperfield"], ["DAA520", "Golden Grass"], ["DAECD6", "Zanah"], ["DAF4F0", "Iceberg"], ["DAFAFF", "Oyster Bay"], ["DB5079", "Cranberry"], ["DB9690", "Petite Orchid"], ["DB995E", "Di Serria"], ["DBDBDB", "Alto"], ["DBFFF8", "Frosted Mint"], ["DC143C", "Crimson"], ["DC4333", "Punch"], ["DCB20C", "Galliano"], ["DCB4BC", "Blossom"], ["DCD747", "Wattle"], ["DCD9D2", "Westar"], ["DCDDCC", "Moon Mist"], ["DCEDB4", "Caper"], ["DCF0EA", "Swans Down"], ["DDD6D5", "Swiss Coffee"], ["DDF9F1", "White Ice"], ["DE3163", "Cerise Red"], ["DE6360", "Roman"], ["DEA681", "Tumbleweed"], ["DEBA13", "Gold Tips"], ["DEC196", "Brandy"], ["DECBC6", "Wafer"], ["DED4A4", "Sapling"], ["DED717", "Barberry"], ["DEE5C0", "Beryl Green"], ["DEF5FF", "Pattens Blue"], ["DF73FF", "Heliotrope"], ["DFBE6F", "Apache"], ["DFCD6F", "Chenin"], ["DFCFDB", "Lola"], ["DFECDA", "Willow Brook"], ["DFFF00", "Chartreuse Yellow"], ["E0B0FF", "Mauve"], ["E0B646", "Anzac"], ["E0B974", "Harvest Gold"], ["E0C095", "Calico"], ["E0FFFF", "Baby Blue"], ["E16865", "Sunglo"], ["E1BC64", "Equator"], ["E1C0C8", "Pink Flare"], ["E1E6D6", "Periglacial Blue"], ["E1EAD4", "Kidnapper"], ["E1F6E8", "Tara"], ["E25465", "Mandy"], ["E2725B", "Terracotta"], ["E28913", "Golden Bell"], ["E292C0", "Shocking"], ["E29418", "Dixie"], ["E29CD2", "Light Orchid"], ["E2D8ED", "Snuff"], ["E2EBED", "Mystic"], ["E2F3EC", "Apple Green"], ["E30B5C", "Razzmatazz"], ["E32636", "Alizarin Crimson"], ["E34234", "Cinnabar"], ["E3BEBE", "Cavern Pink"], ["E3F5E1", "Peppermint"], ["E3F988", "Mindaro"], ["E47698", "Deep Blush"], ["E49B0F", "Gamboge"], ["E4C2D5", "Melanie"], ["E4CFDE", "Twilight"], ["E4D1C0", "Bone"], ["E4D422", "Sunflower"], ["E4D5B7", "Grain Brown"], ["E4D69B", "Zombie"], ["E4F6E7", "Frostee"], ["E4FFD1", "Snow Flurry"], ["E52B50", "Amaranth"], ["E5841B", "Zest"], ["E5CCC9", "Dust Storm"], ["E5D7BD", "Stark White"], ["E5D8AF", "Hampton"], ["E5E0E1", "Bon Jour"], ["E5E5E5", "Mercury"], ["E5F9F6", "Polar"], ["E64E03", "Trinidad"], ["E6BE8A", "Gold Sand"], ["E6BEA5", "Cashmere"], ["E6D7B9", "Double Spanish White"], ["E6E4D4", "Satin Linen"], ["E6F2EA", "Harp"], ["E6F8F3", "Off Green"], ["E6FFE9", "Hint of Green"], ["E6FFFF", "Tranquil"], ["E77200", "Mango Tango"], ["E7730A", "Christine"], ["E79F8C", "Tonys Pink"], ["E79FC4", "Kobi"], ["E7BCB4", "Rose Fog"], ["E7BF05", "Corn"], ["E7CD8C", "Putty"], ["E7ECE6", "Gray Nurse"], ["E7F8FF", "Lily White"], ["E7FEFF", "Bubbles"], ["E89928", "Fire Bush"], ["E8B9B3", "Shilo"], ["E8E0D5", "Pearl Bush"], ["E8EBE0", "Green White"], ["E8F1D4", "Chrome White"], ["E8F2EB", "Gin"], ["E8F5F2", "Aqua Squeeze"], ["E96E00", "Clementine"], ["E97451", "Burnt Sienna"], ["E97C07", "Tahiti Gold"], ["E9CECD", "Oyster Pink"], ["E9D75A", "Confetti"], ["E9E3E3", "Ebb"], ["E9F8ED", "Ottoman"], ["E9FFFD", "Clear Day"], ["EA88A8", "Carissma"], ["EAAE69", "Porsche"], ["EAB33B", "Tulip Tree"], ["EAC674", "Rob Roy"], ["EADAB8", "Raffia"], ["EAE8D4", "White Rock"], ["EAF6EE", "Panache"], ["EAF6FF", "Solitude"], ["EAF9F5", "Aqua Spring"], ["EAFFFE", "Dew"], ["EB9373", "Apricot"], ["EBC2AF", "Zinnwaldite"], ["ECA927", "Fuel Yellow"], ["ECC54E", "Ronchi"], ["ECC7EE", "French Lilac"], ["ECCDB9", "Just Right"], ["ECE090", "Wild Rice"], ["ECEBBD", "Fall Green"], ["ECEBCE", "Aths Special"], ["ECF245", "Starship"], ["ED0A3F", "Red Ribbon"], ["ED7A1C", "Tango"], ["ED9121", "Carrot Orange"], ["ED989E", "Sea Pink"], ["EDB381", "Tacao"], ["EDC9AF", "Desert Sand"], ["EDCDAB", "Pancho"], ["EDDCB1", "Chamois"], ["EDEA99", "Primrose"], ["EDF5DD", "Frost"], ["EDF5F5", "Aqua Haze"], ["EDF6FF", "Zumthor"], ["EDF9F1", "Narvik"], ["EDFC84", "Honeysuckle"], ["EE82EE", "Lavender Magenta"], ["EEC1BE", "Beauty Bush"], ["EED794", "Chalky"], ["EED9C4", "Almond"], ["EEDC82", "Flax"], ["EEDEDA", "Bizarre"], ["EEE3AD", "Double Colonial White"], ["EEEEE8", "Cararra"], ["EEEF78", "Manz"], ["EEF0C8", "Tahuna Sands"], ["EEF0F3", "Athens Gray"], ["EEF3C3", "Tusk"], ["EEF4DE", "Loafer"], ["EEF6F7", "Catskill White"], ["EEFDFF", "Twilight Blue"], ["EEFF9A", "Jonquil"], ["EEFFE2", "Rice Flower"], ["EF863F", "Jaffa"], ["EFEFEF", "Gallery"], ["EFF2F3", "Porcelain"], ["F091A9", "Mauvelous"], ["F0D52D", "Golden Dream"], ["F0DB7D", "Golden Sand"], ["F0DC82", "Buff"], ["F0E2EC", "Prim"], ["F0E68C", "Khaki"], ["F0EEFD", "Selago"], ["F0EEFF", "Titan White"], ["F0F8FF", "Alice Blue"], ["F0FCEA", "Feta"], ["F18200", "Gold Drop"], ["F19BAB", "Wewak"], ["F1E788", "Sahara Sand"], ["F1E9D2", "Parchment"], ["F1E9FF", "Blue Chalk"], ["F1EEC1", "Mint Julep"], ["F1F1F1", "Seashell"], ["F1F7F2", "Saltpan"], ["F1FFAD", "Tidal"], ["F1FFC8", "Chiffon"], ["F2552A", "Flamingo"], ["F28500", "Tangerine"], ["F2C3B2", "Mandys Pink"], ["F2F2F2", "Concrete"], ["F2FAFA", "Black Squeeze"], ["F34723", "Pomegranate"], ["F3AD16", "Buttercup"], ["F3D69D", "New Orleans"], ["F3D9DF", "Vanilla Ice"], ["F3E7BB", "Sidecar"], ["F3E9E5", "Dawn Pink"], ["F3EDCF", "Wheatfield"], ["F3FB62", "Canary"], ["F3FBD4", "Orinoco"], ["F3FFD8", "Carla"], ["F400A1", "Hollywood Cerise"], ["F4A460", "Sandy brown"], ["F4C430", "Saffron"], ["F4D81C", "Ripe Lemon"], ["F4EBD3", "Janna"], ["F4F2EE", "Pampas"], ["F4F4F4", "Wild Sand"], ["F4F8FF", "Zircon"], ["F57584", "Froly"], ["F5C85C", "Cream Can"], ["F5C999", "Manhattan"], ["F5D5A0", "Maize"], ["F5DEB3", "Wheat"], ["F5E7A2", "Sandwisp"], ["F5E7E2", "Pot Pourri"], ["F5E9D3", "Albescent White"], ["F5EDEF", "Soft Peach"], ["F5F3E5", "Ecru White"], ["F5F5DC", "Beige"], ["F5FB3D", "Golden Fizz"], ["F5FFBE", "Australian Mint"], ["F64A8A", "French Rose"], ["F653A6", "Brilliant Rose"], ["F6A4C9", "Illusion"], ["F6F0E6", "Merino"], ["F6F7F7", "Black Haze"], ["F6FFDC", "Spring Sun"], ["F7468A", "Violet Red"], ["F77703", "Chilean Fire"], ["F77FBE", "Persian Pink"], ["F7B668", "Rajah"], ["F7C8DA", "Azalea"], ["F7DBE6", "We Peep"], ["F7F2E1", "Quarter Spanish White"], ["F7F5FA", "Whisper"], ["F7FAF7", "Snow Drift"], ["F8B853", "Casablanca"], ["F8C3DF", "Chantilly"], ["F8D9E9", "Cherub"], ["F8DB9D", "Marzipan"], ["F8DD5C", "Energy Yellow"], ["F8E4BF", "Givry"], ["F8F0E8", "White Linen"], ["F8F4FF", "Magnolia"], ["F8F6F1", "Spring Wood"], ["F8F7DC", "Coconut Cream"], ["F8F7FC", "White Lilac"], ["F8F8F7", "Desert Storm"], ["F8F99C", "Texas"], ["F8FACD", "Corn Field"], ["F8FDD3", "Mimosa"], ["F95A61", "Carnation"], ["F9BF58", "Saffron Mango"], ["F9E0ED", "Carousel Pink"], ["F9E4BC", "Dairy Cream"], ["F9E663", "Portica"], ["F9E6F4", "Underage Pink"], ["F9EAF3", "Amour"], ["F9F8E4", "Rum Swizzle"], ["F9FF8B", "Dolly"], ["F9FFF6", "Sugar Cane"], ["FA7814", "Ecstasy"], ["FA9D5A", "Tan Hide"], ["FAD3A2", "Corvette"], ["FADFAD", "Peach Yellow"], ["FAE600", "Turbo"], ["FAEAB9", "Astra"], ["FAECCC", "Champagne"], ["FAF0E6", "Linen"], ["FAF3F0", "Fantasy"], ["FAF7D6", "Citrine White"], ["FAFAFA", "Alabaster"], ["FAFDE4", "Hint of Yellow"], ["FAFFA4", "Milan"], ["FB607F", "Brink Pink"], ["FB8989", "Geraldine"], ["FBA0E3", "Lavender Rose"], ["FBA129", "Sea Buckthorn"], ["FBAC13", "Sun"], ["FBAED2", "Lavender Pink"], ["FBB2A3", "Rose Bud"], ["FBBEDA", "Cupid"], ["FBCCE7", "Classic Rose"], ["FBCEB1", "Apricot Peach"], ["FBE7B2", "Banana Mania"], ["FBE870", "Marigold Yellow"], ["FBE96C", "Festival"], ["FBEA8C", "Sweet Corn"], ["FBEC5D", "Candy Corn"], ["FBF9F9", "Hint of Red"], ["FBFFBA", "Shalimar"], ["FC0FC0", "Shocking Pink"], ["FC80A5", "Tickle Me Pink"], ["FC9C1D", "Tree Poppy"], ["FCC01E", "Lightning Yellow"], ["FCD667", "Goldenrod"], ["FCD917", "Candlelight"], ["FCDA98", "Cherokee"], ["FCF4D0", "Double Pearl Lusta"], ["FCF4DC", "Pearl Lusta"], ["FCF8F7", "Vista White"], ["FCFBF3", "Bianca"], ["FCFEDA", "Moon Glow"], ["FCFFE7", "China Ivory"], ["FCFFF9", "Ceramic"], ["FD0E35", "Torch Red"], ["FD5B78", "Wild Watermelon"], ["FD7B33", "Crusta"], ["FD7C07", "Sorbus"], ["FD9FA2", "Sweet Pink"], ["FDD5B1", "Light Apricot"], ["FDD7E4", "Pig Pink"], ["FDE1DC", "Cinderella"], ["FDE295", "Golden Glow"], ["FDE910", "Lemon"], ["FDF5E6", "Old Lace"], ["FDF6D3", "Half Colonial White"], ["FDF7AD", "Drover"], ["FDFEB8", "Pale Prim"], ["FDFFD5", "Cumulus"], ["FE28A2", "Persian Rose"], ["FE4C40", "Sunset Orange"], ["FE6F5E", "Bittersweet"], ["FE9D04", "California"], ["FEA904", "Yellow Sea"], ["FEBAAD", "Melon"], ["FED33C", "Bright Sun"], ["FED85D", "Dandelion"], ["FEDB8D", "Salomie"], ["FEE5AC", "Cape Honey"], ["FEEBF3", "Remy"], ["FEEFCE", "Oasis"], ["FEF0EC", "Bridesmaid"], ["FEF2C7", "Beeswax"], ["FEF3D8", "Bleach White"], ["FEF4CC", "Pipi"], ["FEF4DB", "Half Spanish White"], ["FEF4F8", "Wisp Pink"], ["FEF5F1", "Provincial Pink"], ["FEF7DE", "Half Dutch White"], ["FEF8E2", "Solitaire"], ["FEF8FF", "White Pointer"], ["FEF9E3", "Off Yellow"], ["FEFCED", "Orange White"], ["FF0000", "Red"], ["FF007F", "Rose"], ["FF00CC", "Purple Pizzazz"], ["FF00FF", "Magenta / Fuchsia"], ["FF2400", "Scarlet"], ["FF3399", "Wild Strawberry"], ["FF33CC", "Razzle Dazzle Rose"], ["FF355E", "Radical Red"], ["FF3F34", "Red Orange"], ["FF4040", "Coral Red"], ["FF4D00", "Vermilion"], ["FF4F00", "International Orange"], ["FF6037", "Outrageous Orange"], ["FF6600", "Blaze Orange"], ["FF66FF", "Pink Flamingo"], ["FF681F", "Orange"], ["FF69B4", "Hot Pink"], ["FF6B53", "Persimmon"], ["FF6FFF", "Blush Pink"], ["FF7034", "Burning Orange"], ["FF7518", "Pumpkin"], ["FF7D07", "Flamenco"], ["FF7F00", "Flush Orange"], ["FF7F50", "Coral"], ["FF8C69", "Salmon"], ["FF9000", "Pizazz"], ["FF910F", "West Side"], ["FF91A4", "Pink Salmon"], ["FF9933", "Neon Carrot"], ["FF9966", "Atomic Tangerine"], ["FF9980", "Vivid Tangerine"], ["FF9E2C", "Sunshade"], ["FFA000", "Orange Peel"], ["FFA194", "Mona Lisa"], ["FFA500", "Web Orange"], ["FFA6C9", "Carnation Pink"], ["FFAB81", "Hit Pink"], ["FFAE42", "Yellow Orange"], ["FFB0AC", "Cornflower Lilac"], ["FFB1B3", "Sundown"], ["FFB31F", "My Sin"], ["FFB555", "Texas Rose"], ["FFB7D5", "Cotton Candy"], ["FFB97B", "Macaroni and Cheese"], ["FFBA00", "Selective Yellow"], ["FFBD5F", "Koromiko"], ["FFBF00", "Amber"], ["FFC0A8", "Wax Flower"], ["FFC0CB", "Pink"], ["FFC3C0", "Your Pink"], ["FFC901", "Supernova"], ["FFCBA4", "Flesh"], ["FFCC33", "Sunglow"], ["FFCC5C", "Golden Tainoi"], ["FFCC99", "Peach Orange"], ["FFCD8C", "Chardonnay"], ["FFD1DC", "Pastel Pink"], ["FFD2B7", "Romantic"], ["FFD38C", "Grandis"], ["FFD700", "Gold"], ["FFD800", "School bus Yellow"], ["FFD8D9", "Cosmos"], ["FFDB58", "Mustard"], ["FFDCD6", "Peach Schnapps"], ["FFDDAF", "Caramel"], ["FFDDCD", "Tuft Bush"], ["FFDDCF", "Watusi"], ["FFDDF4", "Pink Lace"], ["FFDEAD", "Navajo White"], ["FFDEB3", "Frangipani"], ["FFE1DF", "Pippin"], ["FFE1F2", "Pale Rose"], ["FFE2C5", "Negroni"], ["FFE5A0", "Cream Brulee"], ["FFE5B4", "Peach"], ["FFE6C7", "Tequila"], ["FFE772", "Kournikova"], ["FFEAC8", "Sandy Beach"], ["FFEAD4", "Karry"], ["FFEC13", "Broom"], ["FFEDBC", "Colonial White"], ["FFEED8", "Derby"], ["FFEFA1", "Vis Vis"], ["FFEFC1", "Egg White"], ["FFEFD5", "Papaya Whip"], ["FFEFEC", "Fair Pink"], ["FFF0DB", "Peach Cream"], ["FFF0F5", "Lavender blush"], ["FFF14F", "Gorse"], ["FFF1B5", "Buttermilk"], ["FFF1D8", "Pink Lady"], ["FFF1EE", "Forget Me Not"], ["FFF1F9", "Tutu"], ["FFF39D", "Picasso"], ["FFF3F1", "Chardon"], ["FFF46E", "Paris Daisy"], ["FFF4CE", "Barley White"], ["FFF4DD", "Egg Sour"], ["FFF4E0", "Sazerac"], ["FFF4E8", "Serenade"], ["FFF4F3", "Chablis"], ["FFF5EE", "Seashell Peach"], ["FFF5F3", "Sauvignon"], ["FFF6D4", "Milk Punch"], ["FFF6DF", "Varden"], ["FFF6F5", "Rose White"], ["FFF8D1", "Baja White"], ["FFF9E2", "Gin Fizz"], ["FFF9E6", "Early Dawn"], ["FFFACD", "Lemon Chiffon"], ["FFFAF4", "Bridal Heath"], ["FFFBDC", "Scotch Mist"], ["FFFBF9", "Soapstone"], ["FFFC99", "Witch Haze"], ["FFFCEA", "Buttery White"], ["FFFCEE", "Island Spice"], ["FFFDD0", "Cream"], ["FFFDE6", "Chilean Heath"], ["FFFDE8", "Travertine"], ["FFFDF3", "Orchid White"], ["FFFDF4", "Quarter Pearl Lusta"], ["FFFEE1", "Half and Half"], ["FFFEEC", "Apricot White"], ["FFFEF0", "Rice Cake"], ["FFFEF6", "Black White"], ["FFFEFD", "Romance"], ["FFFF00", "Yellow"], ["FFFF66", "Laser Lemon"], ["FFFF99", "Pale Canary"], ["FFFFB4", "Portafino"], ["FFFFF0", "Ivory"], ["FFFFFF", "White"], ["acc2d9", "cloudy blue"], ["56ae57", "dark pastel green"], ["b2996e", "dust"], ["a8ff04", "electric lime"], ["69d84f", "fresh green"], ["894585", "light eggplant"], ["70b23f", "nasty green"], ["d4ffff", "really light blue"], ["65ab7c", "tea"], ["952e8f", "warm purple"], ["fcfc81", "yellowish tan"], ["a5a391", "cement"], ["388004", "dark grass green"], ["4c9085", "dusty teal"], ["5e9b8a", "grey teal"], ["efb435", "macaroni and cheese"], ["d99b82", "pinkish tan"], ["0a5f38", "spruce"], ["0c06f7", "strong blue"], ["61de2a", "toxic green"], ["3778bf", "windows blue"], ["2242c7", "blue blue"], ["533cc6", "blue with a hint of purple"], ["9bb53c", "booger"], ["05ffa6", "bright sea green"], ["1f6357", "dark green blue"], ["017374", "deep turquoise"], ["0cb577", "green teal"], ["ff0789", "strong pink"], ["afa88b", "bland"], ["08787f", "deep aqua"], ["dd85d7", "lavender pink"], ["a6c875", "light moss green"], ["a7ffb5", "light seafoam green"], ["c2b709", "olive yellow"], ["e78ea5", "pig pink"], ["966ebd", "deep lilac"], ["ccad60", "desert"], ["ac86a8", "dusty lavender"], ["947e94", "purpley grey"], ["983fb2", "purply"], ["ff63e9", "candy pink"], ["b2fba5", "light pastel green"], ["63b365", "boring green"], ["8ee53f", "kiwi green"], ["b7e1a1", "light grey green"], ["ff6f52", "orange pink"], ["bdf8a3", "tea green"], ["d3b683", "very light brown"], ["fffcc4", "egg shell"], ["430541", "eggplant purple"], ["ffb2d0", "powder pink"], ["997570", "reddish grey"], ["ad900d", "baby shit brown"], ["c48efd", "liliac"], ["507b9c", "stormy blue"], ["7d7103", "ugly brown"], ["fffd78", "custard"], ["da467d", "darkish pink"], ["410200", "deep brown"], ["c9d179", "greenish beige"], ["fffa86", "manilla"], ["5684ae", "off blue"], ["6b7c85", "battleship grey"], ["6f6c0a", "browny green"], ["7e4071", "bruise"], ["009337", "kelley green"], ["d0e429", "sickly yellow"], ["fff917", "sunny yellow"], ["1d5dec", "azul"], ["054907", "darkgreen"], ["b5ce08", "green/yellow"], ["8fb67b", "lichen"], ["c8ffb0", "light light green"], ["fdde6c", "pale gold"], ["ffdf22", "sun yellow"], ["a9be70", "tan green"], ["6832e3", "burple"], ["fdb147", "butterscotch"], ["c7ac7d", "toupe"], ["fff39a", "dark cream"], ["850e04", "indian red"], ["efc0fe", "light lavendar"], ["40fd14", "poison green"], ["b6c406", "baby puke green"], ["9dff00", "bright yellow green"], ["3c4142", "charcoal grey"], ["f2ab15", "squash"], ["ac4f06", "cinnamon"], ["c4fe82", "light pea green"], ["2cfa1f", "radioactive green"], ["9a6200", "raw sienna"], ["ca9bf7", "baby purple"], ["875f42", "cocoa"], ["3a2efe", "light royal blue"], ["fd8d49", "orangeish"], ["8b3103", "rust brown"], ["cba560", "sand brown"], ["698339", "swamp"], ["0cdc73", "tealish green"], ["b75203", "burnt siena"], ["7f8f4e", "camo"], ["26538d", "dusk blue"], ["63a950", "fern"], ["c87f89", "old rose"], ["b1fc99", "pale light green"], ["ff9a8a", "peachy pink"], ["f6688e", "rosy pink"], ["76fda8", "light bluish green"], ["53fe5c", "light bright green"], ["4efd54", "light neon green"], ["a0febf", "light seafoam"], ["7bf2da", "tiffany blue"], ["bcf5a6", "washed out green"], ["ca6b02", "browny orange"], ["107ab0", "nice blue"], ["2138ab", "sapphire"], ["719f91", "greyish teal"], ["fdb915", "orangey yellow"], ["fefcaf", "parchment"], ["fcf679", "straw"], ["1d0200", "very dark brown"], ["cb6843", "terracota"], ["31668a", "ugly blue"], ["247afd", "clear blue"], ["ffffb6", "creme"], ["90fda9", "foam green"], ["86a17d", "grey/green"], ["fddc5c", "light gold"], ["78d1b6", "seafoam blue"], ["13bbaf", "topaz"], ["fb5ffc", "violet pink"], ["20f986", "wintergreen"], ["ffe36e", "yellow tan"], ["9d0759", "dark fuchsia"], ["3a18b1", "indigo blue"], ["c2ff89", "light yellowish green"], ["d767ad", "pale magenta"], ["720058", "rich purple"], ["ffda03", "sunflower yellow"], ["01c08d", "green/blue"], ["ac7434", "leather"], ["014600", "racing green"], ["9900fa", "vivid purple"], ["02066f", "dark royal blue"], ["8e7618", "hazel"], ["d1768f", "muted pink"], ["96b403", "booger green"], ["fdff63", "canary"], ["95a3a6", "cool grey"], ["7f684e", "dark taupe"], ["751973", "darkish purple"], ["089404", "true green"], ["ff6163", "coral pink"], ["598556", "dark sage"], ["214761", "dark slate blue"], ["3c73a8", "flat blue"], ["ba9e88", "mushroom"], ["021bf9", "rich blue"], ["734a65", "dirty purple"], ["23c48b", "greenblue"], ["8fae22", "icky green"], ["e6f2a2", "light khaki"], ["4b57db", "warm blue"], ["d90166", "dark hot pink"], ["015482", "deep sea blue"], ["9d0216", "carmine"], ["728f02", "dark yellow green"], ["ffe5ad", "pale peach"], ["4e0550", "plum purple"], ["f9bc08", "golden rod"], ["ff073a", "neon red"], ["c77986", "old pink"], ["d6fffe", "very pale blue"], ["fe4b03", "blood orange"], ["fd5956", "grapefruit"], ["fce166", "sand yellow"], ["b2713d", "clay brown"], ["1f3b4d", "dark blue grey"], ["699d4c", "flat green"], ["56fca2", "light green blue"], ["fb5581", "warm pink"], ["3e82fc", "dodger blue"], ["a0bf16", "gross green"], ["d6fffa", "ice"], ["4f738e", "metallic blue"], ["ffb19a", "pale salmon"], ["5c8b15", "sap green"], ["54ac68", "algae"], ["89a0b0", "bluey grey"], ["7ea07a", "greeny grey"], ["1bfc06", "highlighter green"], ["cafffb", "light light blue"], ["b6ffbb", "light mint"], ["a75e09", "raw umber"], ["152eff", "vivid blue"], ["8d5eb7", "deep lavender"], ["5f9e8f", "dull teal"], ["63f7b4", "light greenish blue"], ["606602", "mud green"], ["fc86aa", "pinky"], ["8c0034", "red wine"], ["758000", "shit green"], ["ab7e4c", "tan brown"], ["030764", "darkblue"], ["fe86a4", "rosa"], ["d5174e", "lipstick"], ["fed0fc", "pale mauve"], ["680018", "claret"], ["fedf08", "dandelion"], ["fe420f", "orangered"], ["6f7c00", "poop green"], ["ca0147", "ruby"], ["1b2431", "dark"], ["00fbb0", "greenish turquoise"], ["db5856", "pastel red"], ["ddd618", "piss yellow"], ["41fdfe", "bright cyan"], ["cf524e", "dark coral"], ["21c36f", "algae green"], ["a90308", "darkish red"], ["6e1005", "reddy brown"], ["fe828c", "blush pink"], ["4b6113", "camouflage green"], ["4da409", "lawn green"], ["beae8a", "putty"], ["0339f8", "vibrant blue"], ["a88f59", "dark sand"], ["5d21d0", "purple/blue"], ["feb209", "saffron"], ["4e518b", "twilight"], ["964e02", "warm brown"], ["85a3b2", "bluegrey"], ["ff69af", "bubble gum pink"], ["c3fbf4", "duck egg blue"], ["2afeb7", "greenish cyan"], ["005f6a", "petrol"], ["0c1793", "royal"], ["ffff81", "butter"], ["f0833a", "dusty orange"], ["f1f33f", "off yellow"], ["b1d27b", "pale olive green"], ["fc824a", "orangish"], ["71aa34", "leaf"], ["b7c9e2", "light blue grey"], ["4b0101", "dried blood"], ["a552e6", "lightish purple"], ["af2f0d", "rusty red"], ["8b88f8", "lavender blue"], ["9af764", "light grass green"], ["a6fbb2", "light mint green"], ["ffc512", "sunflower"], ["750851", "velvet"], ["c14a09", "brick orange"], ["fe2f4a", "lightish red"], ["0203e2", "pure blue"], ["0a437a", "twilight blue"], ["a50055", "violet red"], ["ae8b0c", "yellowy brown"], ["fd798f", "carnation"], ["bfac05", "muddy yellow"], ["3eaf76", "dark seafoam green"], ["c74767", "deep rose"], ["b9484e", "dusty red"], ["647d8e", "grey/blue"], ["bffe28", "lemon lime"], ["d725de", "purple/pink"], ["b29705", "brown yellow"], ["673a3f", "purple brown"], ["a87dc2", "wisteria"], ["fafe4b", "banana yellow"], ["c0022f", "lipstick red"], ["0e87cc", "water blue"], ["8d8468", "brown grey"], ["ad03de", "vibrant purple"], ["8cff9e", "baby green"], ["94ac02", "barf green"], ["c4fff7", "eggshell blue"], ["fdee73", "sandy yellow"], ["33b864", "cool green"], ["fff9d0", "pale"], ["758da3", "blue/grey"], ["f504c9", "hot magenta"], ["77a1b5", "greyblue"], ["8756e4", "purpley"], ["889717", "baby shit green"], ["c27e79", "brownish pink"], ["017371", "dark aquamarine"], ["9f8303", "diarrhea"], ["f7d560", "light mustard"], ["bdf6fe", "pale sky blue"], ["75b84f", "turtle green"], ["9cbb04", "bright olive"], ["29465b", "dark grey blue"], ["696006", "greeny brown"], ["adf802", "lemon green"], ["c1c6fc", "light periwinkle"], ["35ad6b", "seaweed green"], ["fffd37", "sunshine yellow"], ["a442a0", "ugly purple"], ["f36196", "medium pink"], ["947706", "puke brown"], ["fff4f2", "very light pink"], ["1e9167", "viridian"], ["b5c306", "bile"], ["feff7f", "faded yellow"], ["cffdbc", "very pale green"], ["0add08", "vibrant green"], ["87fd05", "bright lime"], ["1ef876", "spearmint"], ["7bfdc7", "light aquamarine"], ["bcecac", "light sage"], ["bbf90f", "yellowgreen"], ["ab9004", "baby poo"], ["1fb57a", "dark seafoam"], ["00555a", "deep teal"], ["a484ac", "heather"], ["c45508", "rust orange"], ["3f829d", "dirty blue"], ["548d44", "fern green"], ["c95efb", "bright lilac"], ["3ae57f", "weird green"], ["016795", "peacock blue"], ["87a922", "avocado green"], ["f0944d", "faded orange"], ["5d1451", "grape purple"], ["25ff29", "hot green"], ["d0fe1d", "lime yellow"], ["ffa62b", "mango"], ["01b44c", "shamrock"], ["ff6cb5", "bubblegum"], ["6b4247", "purplish brown"], ["c7c10c", "vomit yellow"], ["b7fffa", "pale cyan"], ["aeff6e", "key lime"], ["ec2d01", "tomato red"], ["76ff7b", "lightgreen"], ["730039", "merlot"], ["040348", "night blue"], ["df4ec8", "purpleish pink"], ["6ecb3c", "apple"], ["8f9805", "baby poop green"], ["5edc1f", "green apple"], ["d94ff5", "heliotrope"], ["c8fd3d", "yellow/green"], ["070d0d", "almost black"], ["4984b8", "cool blue"], ["51b73b", "leafy green"], ["ac7e04", "mustard brown"], ["4e5481", "dusk"], ["876e4b", "dull brown"], ["58bc08", "frog green"], ["2fef10", "vivid green"], ["2dfe54", "bright light green"], ["0aff02", "fluro green"], ["9cef43", "kiwi"], ["18d17b", "seaweed"], ["35530a", "navy green"], ["1805db", "ultramarine blue"], ["6258c4", "iris"], ["ff964f", "pastel orange"], ["ffab0f", "yellowish orange"], ["8f8ce7", "perrywinkle"], ["24bca8", "tealish"], ["3f012c", "dark plum"], ["cbf85f", "pear"], ["ff724c", "pinkish orange"], ["280137", "midnight purple"], ["b36ff6", "light urple"], ["48c072", "dark mint"], ["bccb7a", "greenish tan"], ["a8415b", "light burgundy"], ["06b1c4", "turquoise blue"], ["cd7584", "ugly pink"], ["f1da7a", "sandy"], ["ff0490", "electric pink"], ["805b87", "muted purple"], ["50a747", "mid green"], ["a8a495", "greyish"], ["cfff04", "neon yellow"], ["ffff7e", "banana"], ["ff7fa7", "carnation pink"], ["ef4026", "tomato"], ["3c9992", "sea"], ["886806", "muddy brown"], ["04f489", "turquoise green"], ["fef69e", "buff"], ["cfaf7b", "fawn"], ["3b719f", "muted blue"], ["fdc1c5", "pale rose"], ["20c073", "dark mint green"], ["9b5fc0", "amethyst"], ["0f9b8e", "blue/green"], ["742802", "chestnut"], ["9db92c", "sick green"], ["a4bf20", "pea"], ["cd5909", "rusty orange"], ["ada587", "stone"], ["be013c", "rose red"], ["b8ffeb", "pale aqua"], ["dc4d01", "deep orange"], ["a2653e", "earth"], ["638b27", "mossy green"], ["419c03", "grassy green"], ["b1ff65", "pale lime green"], ["9dbcd4", "light grey blue"], ["fdfdfe", "pale grey"], ["77ab56", "asparagus"], ["464196", "blueberry"], ["990147", "purple red"], ["befd73", "pale lime"], ["32bf84", "greenish teal"], ["af6f09", "caramel"], ["a0025c", "deep magenta"], ["ffd8b1", "light peach"], ["7f4e1e", "milk chocolate"], ["bf9b0c", "ocher"], ["6ba353", "off green"], ["f075e6", "purply pink"], ["7bc8f6", "lightblue"], ["475f94", "dusky blue"], ["f5bf03", "golden"], ["fffeb6", "light beige"], ["fffd74", "butter yellow"], ["895b7b", "dusky purple"], ["436bad", "french blue"], ["d0c101", "ugly yellow"], ["c6f808", "greeny yellow"], ["f43605", "orangish red"], ["02c14d", "shamrock green"], ["b25f03", "orangish brown"], ["2a7e19", "tree green"], ["490648", "deep violet"], ["536267", "gunmetal"], ["5a06ef", "blue/purple"], ["cf0234", "cherry"], ["c4a661", "sandy brown"], ["978a84", "warm grey"], ["1f0954", "dark indigo"], ["03012d", "midnight"], ["2bb179", "bluey green"], ["c3909b", "grey pink"], ["a66fb5", "soft purple"], ["770001", "blood"], ["922b05", "brown red"], ["7d7f7c", "medium grey"], ["990f4b", "berry"], ["8f7303", "poo"], ["c83cb9", "purpley pink"], ["fea993", "light salmon"], ["acbb0d", "snot"], ["c071fe", "easter purple"], ["ccfd7f", "light yellow green"], ["00022e", "dark navy blue"], ["828344", "drab"], ["ffc5cb", "light rose"], ["ab1239", "rouge"], ["b0054b", "purplish red"], ["99cc04", "slime green"], ["937c00", "baby poop"], ["019529", "irish green"], ["ef1de7", "pink/purple"], ["000435", "dark navy"], ["42b395", "greeny blue"], ["9d5783", "light plum"], ["c8aca9", "pinkish grey"], ["c87606", "dirty orange"], ["aa2704", "rust red"], ["e4cbff", "pale lilac"], ["fa4224", "orangey red"], ["0804f9", "primary blue"], ["5cb200", "kermit green"], ["76424e", "brownish purple"], ["6c7a0e", "murky green"], ["fbdd7e", "wheat"], ["2a0134", "very dark purple"], ["044a05", "bottle green"], ["fd4659", "watermelon"], ["0d75f8", "deep sky blue"], ["fe0002", "fire engine red"], ["cb9d06", "yellow ochre"], ["fb7d07", "pumpkin orange"], ["b9cc81", "pale olive"], ["edc8ff", "light lilac"], ["61e160", "lightish green"], ["8ab8fe", "carolina blue"], ["920a4e", "mulberry"], ["fe02a2", "shocking pink"], ["9a3001", "auburn"], ["65fe08", "bright lime green"], ["befdb7", "celadon"], ["b17261", "pinkish brown"], ["885f01", "poo brown"], ["02ccfe", "bright sky blue"], ["c1fd95", "celery"], ["836539", "dirt brown"], ["fb2943", "strawberry"], ["84b701", "dark lime"], ["b66325", "copper"], ["7f5112", "medium brown"], ["5fa052", "muted green"], ["6dedfd", "robin's egg"], ["0bf9ea", "bright aqua"], ["c760ff", "bright lavender"], ["ffffcb", "ivory"], ["f6cefc", "very light purple"], ["155084", "light navy"], ["f5054f", "pink red"], ["645403", "olive brown"], ["7a5901", "poop brown"], ["a8b504", "mustard green"], ["3d9973", "ocean green"], ["000133", "very dark blue"], ["76a973", "dusty green"], ["2e5a88", "light navy blue"], ["0bf77d", "minty green"], ["bd6c48", "adobe"], ["ac1db8", "barney"], ["2baf6a", "jade green"], ["26f7fd", "bright light blue"], ["aefd6c", "light lime"], ["9b8f55", "dark khaki"], ["ffad01", "orange yellow"], ["c69c04", "ocre"], ["f4d054", "maize"], ["de9dac", "faded pink"], ["05480d", "british racing green"], ["c9ae74", "sandstone"], ["60460f", "mud brown"], ["98f6b0", "light sea green"], ["8af1fe", "robin egg blue"], ["2ee8bb", "aqua marine"], ["11875d", "dark sea green"], ["fdb0c0", "soft pink"], ["b16002", "orangey brown"], ["f7022a", "cherry red"], ["d5ab09", "burnt yellow"], ["86775f", "brownish grey"], ["c69f59", "camel"], ["7a687f", "purplish grey"], ["042e60", "marine"], ["c88d94", "greyish pink"], ["a5fbd5", "pale turquoise"], ["fffe71", "pastel yellow"], ["6241c7", "bluey purple"], ["fffe40", "canary yellow"], ["d3494e", "faded red"], ["985e2b", "sepia"], ["a6814c", "coffee"], ["ff08e8", "bright magenta"], ["9d7651", "mocha"], ["feffca", "ecru"], ["98568d", "purpleish"], ["9e003a", "cranberry"], ["287c37", "darkish green"], ["b96902", "brown orange"], ["ba6873", "dusky rose"], ["ff7855", "melon"], ["94b21c", "sickly green"], ["c5c9c7", "silver"], ["661aee", "purply blue"], ["6140ef", "purpleish blue"], ["9be5aa", "hospital green"], ["7b5804", "shit brown"], ["276ab3", "mid blue"], ["feb308", "amber"], ["8cfd7e", "easter green"], ["6488ea", "soft blue"], ["056eee", "cerulean blue"], ["b27a01", "golden brown"], ["0ffef9", "bright turquoise"], ["fa2a55", "red pink"], ["820747", "red purple"], ["7a6a4f", "greyish brown"], ["f4320c", "vermillion"], ["a13905", "russet"], ["6f828a", "steel grey"], ["a55af4", "lighter purple"], ["ad0afd", "bright violet"], ["004577", "prussian blue"], ["658d6d", "slate green"], ["ca7b80", "dirty pink"], ["005249", "dark blue green"], ["2b5d34", "pine"], ["bff128", "yellowy green"], ["b59410", "dark gold"], ["2976bb", "bluish"], ["014182", "darkish blue"], ["bb3f3f", "dull red"], ["fc2647", "pinky red"], ["a87900", "bronze"], ["82cbb2", "pale teal"], ["667c3e", "military green"], ["fe46a5", "barbie pink"], ["fe83cc", "bubblegum pink"], ["94a617", "pea soup green"], ["a88905", "dark mustard"], ["7f5f00", "shit"], ["9e43a2", "medium purple"], ["062e03", "very dark green"], ["8a6e45", "dirt"], ["cc7a8b", "dusky pink"], ["9e0168", "red violet"], ["fdff38", "lemon yellow"], ["c0fa8b", "pistachio"], ["eedc5b", "dull yellow"], ["7ebd01", "dark lime green"], ["3b5b92", "denim blue"], ["01889f", "teal blue"], ["3d7afd", "lightish blue"], ["5f34e7", "purpley blue"], ["6d5acf", "light indigo"], ["748500", "swamp green"], ["706c11", "brown green"], ["3c0008", "dark maroon"], ["cb00f5", "hot purple"], ["002d04", "dark forest green"], ["658cbb", "faded blue"], ["749551", "drab green"], ["b9ff66", "light lime green"], ["9dc100", "snot green"], ["faee66", "yellowish"], ["7efbb3", "light blue green"], ["7b002c", "bordeaux"], ["c292a1", "light mauve"], ["017b92", "ocean"], ["fcc006", "marigold"], ["657432", "muddy green"], ["d8863b", "dull orange"], ["738595", "steel"], ["aa23ff", "electric purple"], ["08ff08", "fluorescent green"], ["9b7a01", "yellowish brown"], ["f29e8e", "blush"], ["6fc276", "soft green"], ["ff5b00", "bright orange"], ["fdff52", "lemon"], ["866f85", "purple grey"], ["8ffe09", "acid green"], ["eecffe", "pale lavender"], ["510ac9", "violet blue"], ["4f9153", "light forest green"], ["9f2305", "burnt red"], ["728639", "khaki green"], ["de0c62", "cerise"], ["916e99", "faded purple"], ["ffb16d", "apricot"], ["3c4d03", "dark olive green"], ["7f7053", "grey brown"], ["77926f", "green grey"], ["010fcc", "true blue"], ["ceaefa", "pale violet"], ["8f99fb", "periwinkle blue"], ["c6fcff", "light sky blue"], ["5539cc", "blurple"], ["544e03", "green brown"], ["017a79", "bluegreen"], ["01f9c6", "bright teal"], ["c9b003", "brownish yellow"], ["929901", "pea soup"], ["0b5509", "forest"], ["a00498", "barney purple"], ["2000b1", "ultramarine"], ["94568c", "purplish"], ["c2be0e", "puke yellow"], ["748b97", "bluish grey"], ["665fd1", "dark periwinkle"], ["9c6da5", "dark lilac"], ["c44240", "reddish"], ["a24857", "light maroon"], ["825f87", "dusty purple"], ["c9643b", "terra cotta"], ["90b134", "avocado"], ["01386a", "marine blue"], ["25a36f", "teal green"], ["59656d", "slate grey"], ["75fd63", "lighter green"], ["21fc0d", "electric green"], ["5a86ad", "dusty blue"], ["fec615", "golden yellow"], ["fffd01", "bright yellow"], ["dfc5fe", "light lavender"], ["b26400", "umber"], ["7f5e00", "poop"], ["de7e5d", "dark peach"], ["048243", "jungle green"], ["ffffd4", "eggshell"], ["3b638c", "denim"], ["b79400", "yellow brown"], ["84597e", "dull purple"], ["411900", "chocolate brown"], ["7b0323", "wine red"], ["04d9ff", "neon blue"], ["667e2c", "dirty green"], ["fbeeac", "light tan"], ["d7fffe", "ice blue"], ["4e7496", "cadet blue"], ["874c62", "dark mauve"], ["d5ffff", "very light blue"], ["826d8c", "grey purple"], ["ffbacd", "pastel pink"], ["d1ffbd", "very light green"], ["448ee4", "dark sky blue"], ["05472a", "evergreen"], ["d5869d", "dull pink"], ["3d0734", "aubergine"], ["4a0100", "mahogany"], ["f8481c", "reddish orange"], ["02590f", "deep green"], ["89a203", "vomit green"], ["e03fd8", "purple pink"], ["d58a94", "dusty pink"], ["7bb274", "faded green"], ["526525", "camo green"], ["c94cbe", "pinky purple"], ["db4bda", "pink purple"], ["9e3623", "brownish red"], ["b5485d", "dark rose"], ["735c12", "mud"], ["9c6d57", "brownish"], ["028f1e", "emerald green"], ["b1916e", "pale brown"], ["49759c", "dull blue"], ["a0450e", "burnt umber"], ["39ad48", "medium green"], ["b66a50", "clay"], ["8cffdb", "light aqua"], ["a4be5c", "light olive green"], ["cb7723", "brownish orange"], ["05696b", "dark aqua"], ["ce5dae", "purplish pink"], ["c85a53", "dark salmon"], ["96ae8d", "greenish grey"], ["1fa774", "jade"], ["7a9703", "ugly green"], ["ac9362", "dark beige"], ["01a049", "emerald"], ["d9544d", "pale red"], ["fa5ff7", "light magenta"], ["82cafc", "sky"], ["acfffc", "light cyan"], ["fcb001", "yellow orange"], ["910951", "reddish purple"], ["fe2c54", "reddish pink"], ["c875c4", "orchid"], ["cdc50a", "dirty yellow"], ["fd411e", "orange red"], ["9a0200", "deep red"], ["be6400", "orange brown"], ["030aa7", "cobalt blue"], ["fe019a", "neon pink"], ["f7879a", "rose pink"], ["887191", "greyish purple"], ["b00149", "raspberry"], ["12e193", "aqua green"], ["fe7b7c", "salmon pink"], ["ff9408", "tangerine"], ["6a6e09", "brownish green"], ["8b2e16", "red brown"], ["696112", "greenish brown"], ["e17701", "pumpkin"], ["0a481e", "pine green"], ["343837", "charcoal"], ["ffb7ce", "baby pink"], ["6a79f7", "cornflower"], ["5d06e9", "blue violet"], ["3d1c02", "chocolate"], ["82a67d", "greyish green"], ["be0119", "scarlet"], ["c9ff27", "green yellow"], ["373e02", "dark olive"], ["a9561e", "sienna"], ["caa0ff", "pastel purple"], ["ca6641", "terracotta"], ["02d8e9", "aqua blue"], ["88b378", "sage green"], ["980002", "blood red"], ["cb0162", "deep pink"], ["5cac2d", "grass"], ["769958", "moss"], ["a2bffe", "pastel blue"], ["10a674", "bluish green"], ["06b48b", "green blue"], ["af884a", "dark tan"], ["0b8b87", "greenish blue"], ["ffa756", "pale orange"], ["a2a415", "vomit"], ["154406", "forrest green"], ["856798", "dark lavender"], ["34013f", "dark violet"], ["632de9", "purple blue"], ["0a888a", "dark cyan"], ["6f7632", "olive drab"], ["d46a7e", "pinkish"], ["1e488f", "cobalt"], ["bc13fe", "neon purple"], ["7ef4cc", "light turquoise"], ["76cd26", "apple green"], ["74a662", "dull green"], ["80013f", "wine"], ["b1d1fc", "powder blue"], ["ffffe4", "off white"], ["0652ff", "electric blue"], ["045c5a", "dark turquoise"], ["5729ce", "blue purple"], ["069af3", "azure"], ["ff000d", "bright red"], ["f10c45", "pinkish red"], ["5170d7", "cornflower blue"], ["acbf69", "light olive"], ["6c3461", "grape"], ["5e819d", "greyish blue"], ["601ef9", "purplish blue"], ["b0dd16", "yellowish green"], ["cdfd02", "greenish yellow"], ["2c6fbb", "medium blue"], ["c0737a", "dusty rose"], ["d6b4fc", "light violet"], ["020035", "midnight blue"], ["703be7", "bluish purple"], ["fd3c06", "red orange"], ["960056", "dark magenta"], ["40a368", "greenish"], ["03719c", "ocean blue"], ["fc5a50", "coral"], ["ffffc2", "cream"], ["7f2b0a", "reddish brown"], ["b04e0f", "burnt sienna"], ["a03623", "brick"], ["87ae73", "sage"], ["789b73", "grey green"], ["ffffff", "white"], ["98eff9", "robin's egg blue"], ["658b38", "moss green"], ["5a7d9a", "steel blue"], ["380835", "eggplant"], ["fffe7a", "light yellow"], ["5ca904", "leaf green"], ["d8dcd6", "light grey"], ["a5a502", "puke"], ["d648d7", "pinkish purple"], ["047495", "sea blue"], ["b790d4", "pale purple"], ["5b7c99", "slate blue"], ["607c8e", "blue grey"], ["0b4008", "hunter green"], ["ed0dd9", "fuchsia"], ["8c000f", "crimson"], ["ffff84", "pale yellow"], ["bf9005", "ochre"], ["d2bd0a", "mustard yellow"], ["ff474c", "light red"], ["0485d1", "cerulean"], ["ffcfdc", "pale pink"], ["040273", "deep blue"], ["a83c09", "rust"], ["90e4c1", "light teal"], ["516572", "slate"], ["fac205", "goldenrod"], ["d5b60a", "dark yellow"], ["363737", "dark grey"], ["4b5d16", "army green"], ["6b8ba4", "grey blue"], ["80f9ad", "seafoam"], ["a57e52", "puce"], ["a9f971", "spring green"], ["c65102", "dark orange"], ["e2ca76", "sand"], ["b0ff9d", "pastel green"], ["9ffeb0", "mint"], ["fdaa48", "light orange"], ["fe01b1", "bright pink"], ["c1f80a", "chartreuse"], ["36013f", "deep purple"], ["341c02", "dark brown"], ["b9a281", "taupe"], ["8eab12", "pea green"], ["9aae07", "puke green"], ["02ab2e", "kelly green"], ["7af9ab", "seafoam green"], ["137e6d", "blue green"], ["aaa662", "khaki"], ["610023", "burgundy"], ["014d4e", "dark teal"], ["8f1402", "brick red"], ["4b006e", "royal purple"], ["580f41", "plum"], ["8fff9f", "mint green"], ["dbb40c", "gold"], ["a2cffe", "baby blue"], ["c0fb2d", "yellow green"], ["be03fd", "bright purple"], ["840000", "dark red"], ["d0fefe", "pale blue"], ["3f9b0b", "grass green"], ["01153e", "navy"], ["04d8b2", "aquamarine"], ["c04e01", "burnt orange"], ["0cff0c", "neon green"], ["0165fc", "bright blue"], ["cf6275", "rose"], ["ffd1df", "light pink"], ["ceb301", "mustard"], ["380282", "indigo"], ["aaff32", "lime"], ["53fca1", "sea green"], ["8e82fe", "periwinkle"], ["cb416b", "dark pink"], ["677a04", "olive green"], ["ffb07c", "peach"], ["c7fdb5", "pale green"], ["ad8150", "light brown"], ["ff028d", "hot pink"], ["000000", "black"], ["cea2fd", "lilac"], ["001146", "navy blue"], ["0504aa", "royal blue"], ["e6daa6", "beige"], ["ff796c", "salmon"], ["6e750e", "olive"], ["650021", "maroon"], ["01ff07", "bright green"], ["35063e", "dark purple"], ["ae7181", "mauve"], ["06470c", "forest green"], ["13eac9", "aqua"], ["00ffff", "cyan"], ["d1b26f", "tan"], ["00035b", "dark blue"], ["c79fef", "lavender"], ["06c2ac", "turquoise"], ["033500", "dark green"], ["9a0eea", "violet"], ["bf77f6", "light purple"], ["89fe05", "lime green"], ["929591", "grey"], ["75bbfd", "sky blue"], ["ffff14", "yellow"], ["c20078", "magenta"], ["96f97b", "light green"], ["f97306", "orange"], ["029386", "teal"], ["95d0fc", "light blue"], ["e50000", "red"], ["653700", "brown"], ["ff81c0", "pink"], ["0343df", "blue"], ["15b01a", "green"], ["7e1e9c", "purple"], ["00000000", "transparent"]];
  names.each(function(element) {
    return (lookup[normalizeKey(element[1])] = parseHex(element[0]));
  });
  window.Color.random = function() {
    return Color(rand(256), rand(256), rand(256), 1);
  };
  return (window.Color.mix = function(color1, color2, amount) {
    var new_colors;
    amount || (amount = 0.5);
    new_colors = color1.channels().zip(color2.channels()).map(function(array) {
      return (array[0] * amount) + (array[1] * (1 - amount));
    });
    return Color(new_colors);
  });
})();;
var Core;
var __slice = Array.prototype.slice;
/***
The Core class is used to add extended functionality to objects without
extending the object class directly. Inherit from Core to gain its utility
methods.

@name Core
@constructor

@param {Object} I Instance variables
*/
/***
@name I
@memberOf Core#
*/
Core = function(I) {
  var self;
  I || (I = {});
  return (self = {
    I: I,
    /***
    Generates a public jQuery style getter / setter method for each
    String argument.

    @name attrAccessor
    @methodOf Core#
    */
    attrAccessor: function() {
      var attrNames;
      attrNames = __slice.call(arguments, 0);
      return attrNames.each(function(attrName) {
        return (self[attrName] = function(newValue) {
          if (typeof newValue !== "undefined" && newValue !== null) {
            I[attrName] = newValue;
            return self;
          } else {
            return I[attrName];
          }
        });
      });
    },
    /***
    Generates a public jQuery style getter method for each String argument.

    @name attrReader
    @methodOf Core#
    */
    attrReader: function() {
      var attrNames;
      attrNames = __slice.call(arguments, 0);
      return attrNames.each(function(attrName) {
        return (self[attrName] = function() {
          return I[attrName];
        });
      });
    },
    /***
    Extends this object with methods from the passed in object. `before` and
    `after` are special option names that glue functionality before or after
    existing methods.

    @name extend
    @methodOf Core#
    */
    extend: function(options) {
      var afterMethods, beforeMethods;
      afterMethods = options.after;
      beforeMethods = options.before;
      delete options.after;
      delete options.before;
      $.extend(self, options);
      if (beforeMethods) {
        $.each(beforeMethods, function(name, fn) {
          return (self[name] = self[name].withBefore(fn));
        });
      }
      if (afterMethods) {
        $.each(afterMethods, function(name, fn) {
          return (self[name] = self[name].withAfter(fn));
        });
      }
      return self;
    },
    /***
    Includes a module in this object.

    @name include
    @methodOf Core#

    @param {Module} Module the module to include. A module is a constructor
    that takes two parameters, I and self, and returns an object containing the
    public methods to extend the including object with.
    */
    include: function(Module) {
      return self.extend(Module(I, self));
    }
  });
};;
var DebugConsole;
DebugConsole = function() {
  var REPL, container, input, output, repl, runButton;
  REPL = function(input, output) {
    var print;
    print = function(message) {
      return output.append($("<li />", {
        text: message
      }));
    };
    return {
      run: function() {
        var code, result, source;
        source = input.val();
        try {
          code = CoffeeScript.compile(source, {
            noWrap: true
          });
          result = eval(code);
          print(" => " + (result));
          return input.val('');
        } catch (error) {
          return error.stack ? print(error.stack) : print(error.toString());
        }
      }
    };
  };
  container = $("<div />", {
    "class": "console"
  });
  input = $("<textarea />");
  output = $("<ul />");
  runButton = $("<button />", {
    text: "Run"
  });
  repl = REPL(input, output);
  container.append(output).append(input).append(runButton);
  return $(function() {
    runButton.click(function() {
      return repl.run();
    });
    return $("body").append(container);
  });
};;
Function.prototype.withBefore = function(interception) {
  var method;
  method = this;
  return function() {
    interception.apply(this, arguments);
    return method.apply(this, arguments);
  };
};
Function.prototype.withAfter = function(interception) {
  var method;
  method = this;
  return function() {
    var result;
    result = method.apply(this, arguments);
    interception.apply(this, arguments);
    return result;
  };
};;
/***
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/
(function(jQuery) {
  var keyHandler;
  jQuery.hotkeys = {
    version: "0.8",
    specialKeys: {
      8: "backspace",
      9: "tab",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      224: "meta"
    },
    shiftNums: {
      "`": "~",
      "1": "!",
      "2": "@",
      "3": "#",
      "4": "$",
      "5": "%",
      "6": "^",
      "7": "&",
      "8": "*",
      "9": "(",
      "0": ")",
      "-": "_",
      "=": "+",
      ";": ":",
      "'": "\"",
      ",": "<",
      ".": ">",
      "/": "?",
      "\\": "|"
    }
  };
  keyHandler = function(handleObj) {
    var keys, origHandler;
    if (typeof handleObj.data !== "string") {
      return null;
    }
    origHandler = handleObj.handler;
    keys = handleObj.data.toLowerCase().split(" ");
    return (handleObj.handler = function(event) {
      var _i, _len, _ref, _result, character, key, modif, possible, special;
      if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || event.target.type === "text" || event.target.type === "password")) {
        return null;
      }
      special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which];
      character = String.fromCharCode(event.which).toLowerCase();
      modif = "";
      possible = {};
      if (event.altKey && special !== "alt") {
        modif += "alt+";
      }
      if (event.ctrlKey && special !== "ctrl") {
        modif += "ctrl+";
      }
      if (event.metaKey && !event.ctrlKey && special !== "meta") {
        modif += "meta+";
      }
      if (event.shiftKey && special !== "shift") {
        modif += "shift+";
      }
      if (special) {
        possible[modif + special] = true;
      } else {
        possible[modif + character] = true;
        possible[modif + jQuery.hotkeys.shiftNums[character]] = true;
        if (modif === "shift+") {
          possible[jQuery.hotkeys.shiftNums[character]] = true;
        }
      }
      _result = []; _ref = keys;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        if (possible[key]) {
          return origHandler.apply(this, arguments);
        }
      }
      return _result;
    });
  };
  return jQuery.each(["keydown", "keyup", "keypress"], function() {
    return (jQuery.event.special[this] = {
      add: keyHandler
    });
  });
})(jQuery);;
var __slice = Array.prototype.slice, __hasProp = Object.prototype.hasOwnProperty;
/***
 * Merges properties from objects into target without overiding.
 * First come, first served.
 * @return target
*/
jQuery.extend({
  reverseMerge: function(target) {
    var _i, _j, _len, _ref, _ref2, name, object, objects;
    objects = __slice.call(arguments, 1);
    _ref = objects;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      object = _ref[_i];
      _ref2 = object;
      for (name in _ref2) {
        if (!__hasProp.call(_ref2, name)) continue;
        _j = _ref2[name];
        if (!(target.hasOwnProperty(name))) {
          target[name] = object[name];
        }
      }
    }
    return target;
  }
});;
$(function() {
  var keyName;
  /***
  The global keydown property lets your query the status of keys.

  <pre>
  if keydown.left
    moveLeft()
  </pre>

  @name keydown
  @namespace
  */
  window.keydown = {};
  keyName = function(event) {
    return jQuery.hotkeys.specialKeys[event.which] || String.fromCharCode(event.which).toLowerCase();
  };
  $(document).bind("keydown", function(event) {
    return (keydown[keyName(event)] = true);
  });
  return $(document).bind("keyup", function(event) {
    return (keydown[keyName(event)] = false);
  });
});;
$(function() {
  return ["log", "info", "warn", "error"].each(function(name) {
    return typeof console !== "undefined" ? (window[name] = function(message) {
      return console[name] ? console[name](message) : null;
    }) : (window[name] = $.noop);
  });
});;
/***
* Matrix.js v1.3.0pre
*
* Copyright (c) 2010 STRd6
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
* Loosely based on flash:
* http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/flash/geom/Matrix.html
*/
(function() {
  var Matrix, Point;
  /***
   * Create a new point with given x and y coordinates. If no arguments are given
   * defaults to (0, 0).
   * @name Point
   * @param {Number} [x]
   * @param {Number} [y]
   * @constructor
  */
  Point = function(x, y) {
    return {
      /***
       * The x coordinate of this point.
       * @name x
       * @fieldOf Point#
      */
      x: x || 0,
      /***
       * The y coordinate of this point.
       * @name y
       * @fieldOf Point#
      */
      y: y || 0,
      /***
       * Adds a point to this one and returns the new point.
       * @name add
       * @methodOf Point#
       *
       * @param {Point} other The point to add this point to.
       * @returns A new point, the sum of both.
       * @type Point
      */
      add: function(other) {
        return Point(this.x + other.x, this.y + other.y);
      },
      /***
       * Subtracts a point to this one and returns the new point.
       * @name subtract
       * @methodOf Point#
       *
       * @param {Point} other The point to subtract from this point.
       * @returns A new point, this - other.
       * @type Point
      */
      subtract: function(other) {
        return Point(this.x - other.x, this.y - other.y);
      },
      /***
       * Scale this Point (Vector) by a constant amount.
       * @name scale
       * @methodOf Point#
       *
       * @param {Number} scalar The amount to scale this point by.
       * @returns A new point, this * scalar.
       * @type Point
      */
      scale: function(scalar) {
        return Point(this.x * scalar, this.y * scalar);
      },
      /***
       * Determine whether this point is equal to another point.
       * @name equal
       * @methodOf Point#
       *
       * @param {Point} other The point to check for equality.
       * @returns true if the other point has the same x, y coordinates, false otherwise.
       * @type Boolean
      */
      equal: function(other) {
        return this.x === other.x && this.y === other.y;
      },
      /***
       * Calculate the magnitude of this Point (Vector).
       * @name magnitude
       * @methodOf Point#
       *
       * @returns The magnitude of this point as if it were a vector from (0, 0) -> (x, y).
       * @type Number
      */
      magnitude: function() {
        return Point.distance(Point(0, 0), this);
      },
      /***
       * Calculate the dot product of this point and another point (Vector).
       * @name dot
       * @methodOf Point#
       *
       * @param {Point} other The point to dot with this point.
       * @returns The dot product of this point dot other as a scalar value.
       * @type Number
      */
      dot: function(other) {
        return this.x * other.x + this.y * other.y;
      },
      /***
       * Calculate the cross product of this point and another point (Vector).
       * Usually cross products are thought of as only applying to three dimensional vectors,
       * but z can be treated as zero. The result of this method is interpreted as the magnitude
       * of the vector result of the cross product between [x1, y1, 0] x [x2, y2, 0]
       * perpendicular to the xy plane.
       * @name cross
       * @methodOf Point#
       *
       * @param {Point} other The point to cross with this point.
       * @returns The cross product of this point with the other point as scalar value.
       * @type Number
      */
      cross: function(other) {
        return this.x * other.y - other.x * this.y;
      },
      /***
       * The norm of a vector is the unit vector pointing in the same direction. This method
       * treats the point as though it is a vector from the origin to (x, y).
       * @name norm
       * @methodOf Point#
       *
       * @returns The unit vector pointing in the same direction as this vector.
       * @type Point
      */
      norm: function() {
        return this.scale(1.0 / this.length());
      },
      /***
       * Computed the length of this point as though it were a vector from (0,0) to (x,y)
       * @name length
       * @methodOf Point#
       *
       * @returns The length of the vector from the origin to this point.
       * @type Number
      */
      length: function() {
        return Math.sqrt(this.dot(this));
      },
      /***
       * Computed the Euclidean between this point and another point.
       * @name distance
       * @methodOf Point#
       *
       * @param {Point} other The point to compute the distance to.
       * @returns The distance between this point and another point.
       * @type Number
      */
      distance: function(other) {
        return Point.distance(this, other);
      }
    };
  };
  /***
   * @param {Point} p1
   * @param {Point} p2
   * @type Number
   * @returns The Euclidean distance between two points.
  */
  Point.distance = function(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };
  /***
   * Construct a point on the unit circle for the given angle.
   *
   * @param {Number} angle The angle in radians
   * @type Point
   * @returns The point on the unit circle.
  */
  Point.fromAngle = function(angle) {
    return Point(Math.cos(angle), Math.sin(angle));
  };
  /***
   * If you have two dudes, one standing at point p1, and the other
   * standing at point p2, then this method will return the direction
   * that the dude standing at p1 will need to face to look at p2.
   * @param {Point} p1 The starting point.
   * @param {Point} p2 The ending point.
   * @returns The direction from p1 to p2 in radians.
  */
  Point.direction = function(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  };
  /***
   * <pre>
   *  _        _
   * | a  c tx  |
   * | b  d ty  |
   * |_0  0  1 _|
   * </pre>
   * Creates a matrix for 2d affine transformations.
   *
   * concat, inverse, rotate, scale and translate return new matrices with the
   * transformations applied. The matrix is not modified in place.
   *
   * Returns the identity matrix when called with no arguments.
   * @name Matrix
   * @param {Number} [a]
   * @param {Number} [b]
   * @param {Number} [c]
   * @param {Number} [d]
   * @param {Number} [tx]
   * @param {Number} [ty]
   * @constructor
  */
  Matrix = function(a, b, c, d, tx, ty) {
    a = (typeof a !== "undefined" && a !== null) ? a : 1;
    d = (typeof d !== "undefined" && d !== null) ? d : 1;
    return {
      /***
       * @name a
       * @fieldOf Matrix#
      */
      a: a,
      /***
       * @name b
       * @fieldOf Matrix#
      */
      b: b || 0,
      /***
       * @name c
       * @fieldOf Matrix#
      */
      c: c || 0,
      /***
       * @name d
       * @fieldOf Matrix#
      */
      d: d,
      /***
       * @name tx
       * @fieldOf Matrix#
      */
      tx: tx || 0,
      /***
       * @name ty
       * @fieldOf Matrix#
      */
      ty: ty || 0,
      /***
       * Returns the result of this matrix multiplied by another matrix
       * combining the geometric effects of the two. In mathematical terms,
       * concatenating two matrixes is the same as combining them using matrix multiplication.
       * If this matrix is A and the matrix passed in is B, the resulting matrix is A x B
       * http://mathworld.wolfram.com/MatrixMultiplication.html
       * @name concat
       * @methodOf Matrix#
       *
       * @param {Matrix} matrix The matrix to multiply this matrix by.
       * @returns The result of the matrix multiplication, a new matrix.
       * @type Matrix
      */
      concat: function(matrix) {
        return Matrix(this.a * matrix.a + this.c * matrix.b, this.b * matrix.a + this.d * matrix.b, this.a * matrix.c + this.c * matrix.d, this.b * matrix.c + this.d * matrix.d, this.a * matrix.tx + this.c * matrix.ty + this.tx, this.b * matrix.tx + this.d * matrix.ty + this.ty);
      },
      /***
       * Given a point in the pretransform coordinate space, returns the coordinates of
       * that point after the transformation occurs. Unlike the standard transformation
       * applied using the transformPoint() method, the deltaTransformPoint() method
       * does not consider the translation parameters tx and ty.
       * @name deltaTransformPoint
       * @methodOf Matrix#
       * @see #transformPoint
       *
       * @return A new point transformed by this matrix ignoring tx and ty.
       * @type Point
      */
      deltaTransformPoint: function(point) {
        return Point(this.a * point.x + this.c * point.y, this.b * point.x + this.d * point.y);
      },
      /***
       * Returns the inverse of the matrix.
       * http://mathworld.wolfram.com/MatrixInverse.html
       * @name inverse
       * @methodOf Matrix#
       *
       * @returns A new matrix that is the inverse of this matrix.
       * @type Matrix
      */
      inverse: function() {
        var determinant;
        determinant = this.a * this.d - this.b * this.c;
        return Matrix(this.d / determinant, -this.b / determinant, -this.c / determinant, this.a / determinant, (this.c * this.ty - this.d * this.tx) / determinant, (this.b * this.tx - this.a * this.ty) / determinant);
      },
      /***
       * Returns a new matrix that corresponds this matrix multiplied by a
       * a rotation matrix.
       * @name rotate
       * @methodOf Matrix#
       * @see Matrix.rotation
       *
       * @param {Number} theta Amount to rotate in radians.
       * @param {Point} [aboutPoint] The point about which this rotation occurs. Defaults to (0,0).
       * @returns A new matrix, rotated by the specified amount.
       * @type Matrix
      */
      rotate: function(theta, aboutPoint) {
        return this.concat(Matrix.rotation(theta, aboutPoint));
      },
      /***
       * Returns a new matrix that corresponds this matrix multiplied by a
       * a scaling matrix.
       * @name scale
       * @methodOf Matrix#
       * @see Matrix.scale
       *
       * @param {Number} sx
       * @param {Number} [sy]
       * @param {Point} [aboutPoint] The point that remains fixed during the scaling
       * @type Matrix
      */
      scale: function(sx, sy, aboutPoint) {
        return this.concat(Matrix.scale(sx, sy, aboutPoint));
      },
      /***
       * Returns the result of applying the geometric transformation represented by the
       * Matrix object to the specified point.
       * @name transformPoint
       * @methodOf Matrix#
       * @see #deltaTransformPoint
       *
       * @returns A new point with the transformation applied.
       * @type Point
      */
      transformPoint: function(point) {
        return Point(this.a * point.x + this.c * point.y + this.tx, this.b * point.x + this.d * point.y + this.ty);
      },
      /***
       * Translates the matrix along the x and y axes, as specified by the tx and ty parameters.
       * @name translate
       * @methodOf Matrix#
       * @see Matrix.translation
       *
       * @param {Number} tx The translation along the x axis.
       * @param {Number} ty The translation along the y axis.
       * @returns A new matrix with the translation applied.
       * @type Matrix
      */
      translate: function(tx, ty) {
        return this.concat(Matrix.translation(tx, ty));
      }
    };
  };
  /***
   * Creates a matrix transformation that corresponds to the given rotation,
   * around (0,0) or the specified point.
   * @see Matrix#rotate
   *
   * @param {Number} theta Rotation in radians.
   * @param {Point} [aboutPoint] The point about which this rotation occurs. Defaults to (0,0).
   * @returns
   * @type Matrix
  */
  Matrix.rotation = function(theta, aboutPoint) {
    var rotationMatrix;
    rotationMatrix = Matrix(Math.cos(theta), Math.sin(theta), -Math.sin(theta), Math.cos(theta));
    if (typeof aboutPoint !== "undefined" && aboutPoint !== null) {
      rotationMatrix = Matrix.translation(aboutPoint.x, aboutPoint.y).concat(rotationMatrix).concat(Matrix.translation(-aboutPoint.x, -aboutPoint.y));
    }
    return rotationMatrix;
  };
  /***
   * Returns a matrix that corresponds to scaling by factors of sx, sy along
   * the x and y axis respectively.
   * If only one parameter is given the matrix is scaled uniformly along both axis.
   * If the optional aboutPoint parameter is given the scaling takes place
   * about the given point.
   * @see Matrix#scale
   *
   * @param {Number} sx The amount to scale by along the x axis or uniformly if no sy is given.
   * @param {Number} [sy] The amount to scale by along the y axis.
   * @param {Point} [aboutPoint] The point about which the scaling occurs. Defaults to (0,0).
   * @returns A matrix transformation representing scaling by sx and sy.
   * @type Matrix
  */
  Matrix.scale = function(sx, sy, aboutPoint) {
    var scaleMatrix;
    sy = sy || sx;
    scaleMatrix = Matrix(sx, 0, 0, sy);
    if (aboutPoint) {
      scaleMatrix = Matrix.translation(aboutPoint.x, aboutPoint.y).concat(scaleMatrix).concat(Matrix.translation(-aboutPoint.x, -aboutPoint.y));
    }
    return scaleMatrix;
  };
  /***
   * Returns a matrix that corresponds to a translation of tx, ty.
   * @see Matrix#translate
   *
   * @param {Number} tx The amount to translate in the x direction.
   * @param {Number} ty The amount to translate in the y direction.
   * @return A matrix transformation representing a translation by tx and ty.
   * @type Matrix
  */
  Matrix.translation = function(tx, ty) {
    return Matrix(1, 0, 0, 1, tx, ty);
  };
  /***
   * A constant representing the identity matrix.
   * @name IDENTITY
   * @fieldOf Matrix
  */
  Matrix.IDENTITY = Matrix();
  /***
   * A constant representing the horizontal flip transformation matrix.
   * @name HORIZONTAL_FLIP
   * @fieldOf Matrix
  */
  Matrix.HORIZONTAL_FLIP = Matrix(-1, 0, 0, 1);
  /***
   * A constant representing the vertical flip transformation matrix.
   * @name VERTICAL_FLIP
   * @fieldOf Matrix
  */
  Matrix.VERTICAL_FLIP = Matrix(1, 0, 0, -1);
  window["Point"] = Point;
  return (window["Matrix"] = Matrix);
})();;
window.Mouse = (function() {
  var Mouse, buttons, set_button;
  Mouse = {
    left: false,
    right: false,
    middle: false,
    location: Point(0, 0)
  };
  buttons = [null, "left", "middle", "right"];
  set_button = function(index, state) {
    var button_name;
    button_name = buttons[index];
    return button_name ? (Mouse[button_name] = state) : null;
  };
  $(document).mousedown(function(event) {
    return set_button(event.which, true);
  });
  $(document).mouseup(function(event) {
    return set_button(event.which, false);
  });
  $(document).mousemove(function(event) {
    var x, y;
    x = event.pageX;
    y = event.pageY;
    Mouse.location = Point(x, y);
    Mouse.x = x;
    return (Mouse.y = y);
  });
  return Mouse;
})();;
/***
Returns the absolute value of this number.

@name abs
@methodOf Number#

@type Number
@returns The absolute value of the number.
*/
Number.prototype.abs = function() {
  return Math.abs(this);
};
/***
Returns the mathematical ceiling of this number.

@name ceil
@methodOf Number#

@type Number
@returns The number truncated to the nearest integer of greater than or equal value.

(4.9).ceil() # => 5
(4.2).ceil() # => 5
(-1.2).ceil() # => -1
*/
Number.prototype.ceil = function() {
  return Math.ceil(this);
};
/***
Returns the mathematical floor of this number.

@name floor
@methodOf Number#

@type Number
@returns The number truncated to the nearest integer of less than or equal value.

(4.9).floor() # => 4
(4.2).floor() # => 4
(-1.2).floor() # => -2
*/
Number.prototype.floor = function() {
  return Math.floor(this);
};
/***
Returns this number rounded to the nearest integer.

@name round
@methodOf Number#

@type Number
@returns The number rounded to the nearest integer.

(4.5).round() # => 5
(4.4).round() # => 4
*/
Number.prototype.round = function() {
  return Math.round(this);
};
/***
Returns a number whose value is limited to the given range.

Example: limit the output of this computation to between 0 and 255
<pre>
(x * 255).clamp(0, 255)
</pre>

@name clamp
@methodOf Number#

@param {Number} min The lower boundary of the output range
@param {Number} max The upper boundary of the output range

@returns A number in the range [min, max]
@type Number
*/
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
/***
A mod method useful for array wrapping. The range of the function is
constrained to remain in bounds of array indices.

<pre>
Example:
(-1).mod(5) == 4
</pre>

@name mod
@methodOf Number#

@param {Number} base
@returns An integer between 0 and (base - 1) if base is positive.
@type Number
*/
Number.prototype.mod = function(base) {
  var result;
  result = this % base;
  if (result < 0 && base > 0) {
    result += base;
  }
  return result;
};
/***
Get the sign of this number as an integer (1, -1, or 0).

@name sign
@methodOf Number#

@type Number
@returns The sign of this number, 0 if the number is 0.
*/
Number.prototype.sign = function() {
  if (this > 0) {
    return 1;
  } else if (this < 0) {
    return -1;
  } else {
    return 0;
  }
};
/***
Calls iterator the specified number of times, passing in the number of the
current iteration as a parameter: 0 on first call, 1 on the second call, etc.

@name times
@methodOf Number#

@param {Function} iterator The iterator takes a single parameter, the number
of the current iteration.
@param {Object} [context] The optional context parameter specifies an object
to treat as <code>this</code> in the iterator block.

@returns The number of times the iterator was called.
@type Number
*/
Number.prototype.times = function(iterator, context) {
  var i;
  i = -1;
  while (++i < this) {
    iterator.call(context, i);
  }
  return i;
};
/***
Returns the the nearest grid resolution less than or equal to the number.

  EX:
   (7).snap(8) => 0
   (4).snap(8) => 0
   (12).snap(8) => 8

@name snap
@methodOf Number#

@param {Number} resolution The grid resolution to snap to.
@returns The nearest multiple of resolution lower than the number.
@type Number
*/
Number.prototype.snap = function(resolution) {
  var n;
  n = this / resolution;
  1 / 1;
  return n.floor() * resolution;
};
/***
In number theory, integer factorization or prime factorization is the
breaking down of a composite number into smaller non-trivial divisors,
which when multiplied together equal the original integer.

Floors the number for purposes of factorization.

@name primeFactors
@methodOf Number#

@returns An array containing the factorization of this number.
@type Array
*/
Number.prototype.primeFactors = function() {
  var factors, i, iSquared, n;
  factors = [];
  n = Math.floor(this);
  if (n === 0) {
    return undefined;
  }
  if (n < 0) {
    factors.push(-1);
    n /= -1;
  }
  i = 2;
  iSquared = i * i;
  while (iSquared < n) {
    while ((n % i) === 0) {
      factors.push(i);
      n /= i;
    }
    i += 1;
    iSquared = i * i;
  }
  if (n !== 1) {
    factors.push(n);
  }
  return factors;
};
Number.prototype.toColorPart = function() {
  var s;
  s = parseInt(this.clamp(0, 255), 10).toString(16);
  if (s.length === 1) {
    s = '0' + s;
  }
  return s;
};
Number.prototype.approach = function(target, maxDelta) {
  return (target - this).clamp(-maxDelta, maxDelta) + this;
};
Number.prototype.approachByRatio = function(target, ratio) {
  return this.approach(target, this * ratio);
};
Number.prototype.approachRotation = function(target, maxDelta) {
  while (target > this + Math.PI) {
    target -= Math.TAU;
  }
  while (target < this - Math.PI) {
    target += Math.TAU;
  }
  return (target - this).clamp(-maxDelta, maxDelta) + this;
};
/***
Constrains a rotation to between -PI and PI.

@name constrainRotation
@methodOf Number#

@returns This number constrained between -PI and PI.
@type Number
*/
Number.prototype.constrainRotation = function() {
  var target;
  target = this;
  while (target > Math.PI) {
    target -= Math.TAU;
  }
  while (target < -Math.PI) {
    target += MATH.TAU;
  }
  return target;
};
Number.prototype.d = function(sides) {
  var sum;
  sum = 0;
  this.times(function() {
    return sum += rand(sides) + 1;
  });
  return sum;
};
/***
The mathematical circle constant of 1 turn.

@name TAU
@fieldOf Math
*/
Math.TAU = 2 * Math.PI;;
/***
* Checks whether an object is an array.
*
* @type Object
* @returns A boolean expressing whether the object is an instance of Array
*/
Object.isArray = function(object) {
  return Object.prototype.toString.call(object) === '[object Array]';
};;
var __hasProp = Object.prototype.hasOwnProperty, __slice = Array.prototype.slice;
(function($) {
  return ($.fn.powerCanvas = function(options) {
    var $canvas, canvas, context;
    options || (options = {});
    canvas = this.get(0);
    context = undefined;
    /***
    * PowerCanvas provides a convenient wrapper for working with Context2d.
    * @name PowerCanvas
    * @constructor
    */
    $canvas = $(canvas).extend({
      /***
       * Passes this canvas to the block with the given matrix transformation
       * applied. All drawing methods called within the block will draw
       * into the canvas with the transformation applied. The transformation
       * is removed at the end of the block, even if the block throws an error.
       *
       * @name withTransform
       * @methodOf PowerCanvas#
       *
       * @param {Matrix} matrix
       * @param {Function} block
       * @returns this
      */
      withTransform: function(matrix, block) {
        context.save();
        context.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        try {
          block(this);
        } finally {
          context.restore();
        }
        return this;
      },
      clear: function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        return this;
      },
      clearRect: function(x, y, width, height) {
        context.clearRect(x, y, width, height);
        return this;
      },
      context: function() {
        return context;
      },
      element: function() {
        return canvas;
      },
      globalAlpha: function(newVal) {
        if (typeof newVal !== "undefined" && newVal !== null) {
          context.globalAlpha = newVal;
          return this;
        } else {
          return context.globalAlpha;
        }
      },
      compositeOperation: function(newVal) {
        if (typeof newVal !== "undefined" && newVal !== null) {
          context.globalCompositeOperation = newVal;
          return this;
        } else {
          return context.globalCompositeOperation;
        }
      },
      createLinearGradient: function(x0, y0, x1, y1) {
        return context.createLinearGradient(x0, y0, x1, y1);
      },
      createRadialGradient: function(x0, y0, r0, x1, y1, r1) {
        return context.createRadialGradient(x0, y0, r0, x1, y1, r1);
      },
      buildRadialGradient: function(c1, c2, stops) {
        var _ref, color, gradient, position;
        gradient = context.createRadialGradient(c1.x, c1.y, c1.radius, c2.x, c2.y, c2.radius);
        _ref = stops;
        for (position in _ref) {
          if (!__hasProp.call(_ref, position)) continue;
          color = _ref[position];
          gradient.addColorStop(position, color);
        }
        return gradient;
      },
      createPattern: function(image, repitition) {
        return context.createPattern(image, repitition);
      },
      drawImage: function(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        return this;
      },
      drawLine: function(x1, y1, x2, y2, width) {
        if (arguments.length === 3) {
          width = x2;
          x2 = y1.x;
          y2 = y1.y;
          y1 = x1.y;
          x1 = x1.x;
        }
        width || (width = 3);
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.closePath();
        context.stroke();
        return this;
      },
      fill: function(color) {
        $canvas.fillColor(color);
        context.fillRect(0, 0, canvas.width, canvas.height);
        return this;
      },
      /***
       * Fills a circle at the specified position with the specified
       * radius and color.
       *
       * @name fillCircle
       * @methodOf PowerCanvas#
       *
       * @param {Number} x
       * @param {Number} y
       * @param {Number} radius
       * @param {Number} color
       * @see PowerCanvas#fillColor
       * @returns this
      */
      fillCircle: function(x, y, radius, color) {
        $canvas.fillColor(color);
        context.beginPath();
        context.arc(x, y, radius, 0, Math.TAU, true);
        context.closePath();
        context.fill();
        return this;
      },
      /***
       * Fills a rectangle with the current fillColor
       * at the specified position with the specified
       * width and height

       * @name fillRect
       * @methodOf PowerCanvas#
       *
       * @param {Number} x
       * @param {Number} y
       * @param {Number} width
       * @param {Number} height
       * @see PowerCanvas#fillColor
       * @returns this
      */
      fillRect: function(x, y, width, height) {
        context.fillRect(x, y, width, height);
        return this;
      },
      fillShape: function() {
        var points;
        points = __slice.call(arguments, 0);
        context.beginPath();
        points.each(function(point, i) {
          return i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y);
        });
        context.lineTo(points[0].x, points[0].y);
        return context.fill();
      },
      /***
      * Adapted from http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html
      */
      fillRoundRect: function(x, y, width, height, radius, strokeWidth) {
        radius || (radius = 5);
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
        if (strokeWidth) {
          context.lineWidth = strokeWidth;
          context.stroke();
        }
        context.fill();
        return this;
      },
      fillText: function(text, x, y) {
        context.fillText(text, x, y);
        return this;
      },
      centerText: function(text, y) {
        var textWidth;
        textWidth = $canvas.measureText(text);
        return $canvas.fillText(text, (canvas.width - textWidth) / 2, y);
      },
      fillWrappedText: function(text, x, y, width) {
        var lineHeight, tokens, tokens2;
        tokens = text.split(" ");
        tokens2 = text.split(" ");
        lineHeight = 16;
        if ($canvas.measureText(text) > width) {
          if (tokens.length % 2 === 0) {
            tokens2 = tokens.splice(tokens.length / 2, tokens.length / 2, "");
          } else {
            tokens2 = tokens.splice(tokens.length / 2 + 1, (tokens.length / 2) + 1, "");
          }
          context.fillText(tokens.join(" "), x, y);
          return context.fillText(tokens2.join(" "), x, y + lineHeight);
        } else {
          return context.fillText(tokens.join(" "), x, y + lineHeight);
        }
      },
      fillColor: function(color) {
        if (color) {
          if (color.channels) {
            context.fillStyle = color.toString();
          } else {
            context.fillStyle = color;
          }
          return this;
        } else {
          return context.fillStyle;
        }
      },
      font: function(font) {
        if (typeof font !== "undefined" && font !== null) {
          context.font = font;
          return this;
        } else {
          return context.font;
        }
      },
      measureText: function(text) {
        return context.measureText(text).width;
      },
      putImageData: function(imageData, x, y) {
        context.putImageData(imageData, x, y);
        return this;
      },
      strokeColor: function(color) {
        if (color) {
          if (color.channels) {
            context.strokeStyle = color.toString();
          } else {
            context.strokeStyle = color;
          }
          return this;
        } else {
          return context.strokeStyle;
        }
      },
      strokeRect: function(x, y, width, height) {
        context.strokeRect(x, y, width, height);
        return this;
      },
      textAlign: function(textAlign) {
        context.textAlign = textAlign;
        return this;
      },
      height: function() {
        return canvas.height;
      },
      width: function() {
        return canvas.width;
      }
    });
    if ((typeof canvas === "undefined" || canvas === null) ? undefined : canvas.getContext) {
      context = canvas.getContext('2d');
      if (options.init) {
        options.init($canvas);
      }
      return $canvas;
    }
  });
})(jQuery);;
(function(window) {
  var Node, QuadTree;
  QuadTree = function(I) {
    var root, self;
    I || (I = {});
    $.reverseMerge(I, {
      bounds: {
        x: 0,
        y: 0,
        width: 480,
        height: 320
      },
      maxChildren: 5,
      maxDepth: 4
    });
    root = Node({
      bounds: I.bounds,
      maxDepth: I.maxDepth,
      maxChildren: I.maxChildren
    });
    self = {
      I: I,
      root: function() {
        return root;
      },
      clear: function() {
        return root.clear();
      },
      insert: function(obj) {
        return Object.isArray(obj) ? obj.each(function(item) {
          return root.insert(item);
        }) : root.insert(obj);
      },
      retrieve: function(item) {
        return root.retrieve(item).copy();
      }
    };
    return self;
  };
  Node = function(I) {
    var BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT, findQuadrant, halfHeight, halfWidth, self, subdivide;
    I || (I = {});
    $.reverseMerge(I, {
      bounds: {
        x: 0,
        y: 0,
        width: 120,
        height: 80
      },
      children: [],
      depth: 0,
      maxChildren: 5,
      maxDepth: 4,
      nodes: []
    });
    TOP_LEFT = 0;
    TOP_RIGHT = 1;
    BOTTOM_LEFT = 2;
    BOTTOM_RIGHT = 3;
    findQuadrant = function(item) {
      var bounds, index, left, top, x, x_midpoint, y, y_midpoint;
      bounds = I.bounds;
      x = bounds.x;
      y = bounds.y;
      x_midpoint = x + halfWidth();
      y_midpoint = y + halfHeight();
      left = item.x <= x_midpoint;
      top = item.y <= y_midpoint;
      index = TOP_LEFT;
      if (left) {
        if (!top) {
          index = BOTTOM_LEFT;
        }
      } else {
        if (top) {
          index = TOP_RIGHT;
        } else {
          index = BOTTOM_RIGHT;
        }
      }
      return index;
    };
    halfWidth = function() {
      return (I.bounds.width / 2).floor();
    };
    halfHeight = function() {
      return (I.bounds.height / 2).floor();
    };
    subdivide = function() {
      var half_height, half_width, increased_depth;
      increased_depth = I.depth + 1;
      half_width = halfWidth();
      half_height = halfHeight();
      return (4).times(function(n) {
        return (I.nodes[n] = Node({
          bounds: {
            x: half_width * (n % 2),
            y: half_height * (n < 2 ? 0 : 1),
            width: half_width,
            height: half_height
          },
          depth: increased_depth,
          maxChildren: I.maxChildren,
          maxDepth: I.maxDepth
        }));
      });
    };
    self = {
      I: I,
      clear: function() {
        I.children.clear();
        I.nodes.invoke('clear');
        return I.nodes.clear();
      },
      insert: function(item) {
        var index;
        if (I.nodes.length) {
          index = findQuadrant(item);
          I.nodes[index].insert(item);
          return true;
        }
        I.children.push(item);
        if ((I.depth < I.maxDepth) && (I.children.length > I.maxChildren)) {
          subdivide();
          I.children.each(function(child) {
            return self.insert(child);
          });
          return I.children.clear();
        }
      },
      retrieve: function(item) {
        var index;
        index = findQuadrant(item);
        return (I.nodes[index] == null ? undefined : I.nodes[index].retrieve(item)) || I.children;
      }
    };
    return self;
  };
  return (window.QuadTree = QuadTree);
})(window);;
(function($) {
  window.Random = $.extend(window.Random, {
    angle: function() {
      return rand() * Math.TAU;
    },
    color: function() {
      return Color.random();
    },
    often: function() {
      return rand(3);
    },
    sometimes: function() {
      return !rand(3);
    }
  });
  /***
  Returns random integers from [0, n) if n is given.
  Otherwise returns random float between 0 and 1.

  @param {Number} n
  */
  return (window.rand = function(n) {
    return n ? Math.floor(n * Math.random()) : Math.random();
  });
})(jQuery);;
(function($) {
  var retrieve, store;
  /***
  @name Local
  @namespace
  */
  /***
  Store an object in local storage.

  @name set
  @methodOf Local

  @param {String} key
  @param {Object} value
  @type Object
  @returns value
  */
  store = function(key, value) {
    localStorage[key] = JSON.stringify(value);
    return value;
  };
  /***
  Retrieve an object from local storage.

  @name get
  @methodOf Local

  @param {String} key
  @type Object
  @returns The object that was stored or undefined if no object was stored.
  */
  retrieve = function(key) {
    var value;
    value = localStorage[key];
    return (typeof value !== "undefined" && value !== null) ? JSON.parse(value) : null;
  };
  return (window.Local = $.extend(window.Local, {
    get: retrieve,
    set: store,
    put: store,
    /***
    Access an instance of Local with a specified prefix.

    @name new
    @methodOf Local

    @param {String} prefix
    @type Local
    @returns An interface to local storage with the given prefix applied.
    */
    "new": function(prefix) {
      prefix || (prefix = "");
      return {
        get: function(key) {
          return retrieve("" + (prefix) + "_key");
        },
        set: function(key, value) {
          return store("" + (prefix) + "_key", value);
        },
        put: function(key, value) {
          return store("" + (prefix) + "_key", value);
        }
      };
    }
  }));
})(jQuery);;
/***
Returns true if this string only contains whitespace characters.

@name blank
@methodOf String#

@returns Whether or not this string is blank.
@type Boolean
*/
String.prototype.blank = function() {
  return /^\s*$/.test(this);
};
/***
@name camelize
@methodOf String#
*/
String.prototype.camelize = function() {
  return this.trim().replace(/(\-|_|\s)+(.)?/g, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  });
};
/***
@name capitalize
@methodOf String#
*/
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
};
/***
Return the class or constant named in this string.

@name constantize
@methodOf String#

@returns The class or constant named in this string.
@type Object
*/
String.prototype.constantize = function() {
  if (this.match(/[A-Z][A-Za-z0-9]*/)) {
    eval("var that = " + (this));
    return that;
  } else {
    return undefined;
  }
};
/***
@name humanize
@methodOf String#
*/
String.prototype.humanize = function() {
  return this.replace(/_id$/, "").replace(/_/g, " ").capitalize();
};
/***
Parse this string as though it is JSON and return the object it represents. If it
is not valid JSON returns the string itself.

@name parse
@methodOf String#

@returns Returns an object from the JSON this string contains. If it
is not valid JSON returns the string itself.
@type Object
*/
String.prototype.parse = function() {
  try {
    return JSON.parse(this);
  } catch (e) {
    return this;
  }
};
/***
@name titleize
@methodOf String#
*/
String.prototype.titleize = function() {
  return this.split(/[- ]/).map(function(word) {
    return word.capitalize();
  }).join(' ');
};;
/***
Non-standard



@name toSource
@methodOf Boolean#
*/
/***
Returns a string representing the specified Boolean object.

<code><em>bool</em>.toString()</code>

@name toString
@methodOf Boolean#
*/
/***
Returns the primitive value of a Boolean object.

<code><em>bool</em>.valueOf()</code>

@name valueOf
@methodOf Boolean#
*/
/***
Returns a string representing the Number object in exponential notation

<code><i>number</i>.toExponential( [<em>fractionDigits</em>] )</code>
@param  fractionDigits
An integer specifying the number of digits after the decimal point. Defaults
to as many digits as necessary to specify the number.
@name toExponential
@methodOf Number#
*/
/***
Formats a number using fixed-point notation

<code><i>number</i>.toFixed( [<em>digits</em>] )</code>
@param  digits   The number of digits to appear after the decimal point; this
may be a value between 0 and 20, inclusive, and implementations may optionally
support a larger range of values. If this argument is omitted, it is treated as
0.
@name toFixed
@methodOf Number#
*/
/***
number.toLocaleString();



@name toLocaleString
@methodOf Number#
*/
/***
Returns a string representing the Number object to the specified precision.

<code><em>number</em>.toPrecision( [ <em>precision</em> ] )</code>
@param precision An integer specifying the number of significant digits.
@name toPrecision
@methodOf Number#
*/
/***
Non-standard



@name toSource
@methodOf Number#
*/
/***
Returns a string representing the specified Number object

<code><i>number</i>.toString( [<em>radix</em>] )</code>
@param  radix
An integer between 2 and 36 specifying the base to use for representing
numeric values.
@name toString
@methodOf Number#
*/
/***
Returns the primitive value of a Number object.



@name valueOf
@methodOf Number#
*/
/***
Returns the specified character from a string.

<code><em>string</em>.charAt(<em>index</em>)</code>
@param index  An integer between 0 and 1 less than the length of the string.
@name charAt
@methodOf String#
*/
/***
Returns the numeric Unicode value of the character at the given index (except
for unicode codepoints > 0x10000).


@param index  An integer greater than 0 and less than the length of the string;
if it is not a number, it defaults to 0.
@name charCodeAt
@methodOf String#
*/
/***
Combines the text of two or more strings and returns a new string.

<code><em>string</em>.concat(<em>string2</em>, <em>string3</em>[, ..., <em>stringN</em>])</code>
@param string2...stringN  Strings to concatenate to this string.
@name concat
@methodOf String#
*/
/***
Returns the index within the calling String object of the first occurrence of
the specified value, starting the search at fromIndex,
returns -1 if the value is not found.

<code><em>string</em>.indexOf(<em>searchValue</em>[, <em>fromIndex</em>]</code>
@param searchValue  A string representing the value to search for.
@param fromIndex  The location within the calling string to start the search
from. It can be any integer between 0 and the length of the string. The default
value is 0.
@name indexOf
@methodOf String#
*/
/***
Returns the index within the calling String object of the last occurrence of the
specified value, or -1 if not found. The calling string is searched backward,
starting at fromIndex.

<code><em>string</em>.lastIndexOf(<em>searchValue</em>[, <em>fromIndex</em>])</code>
@param searchValue  A string representing the value to search for.
@param fromIndex  The location within the calling string to start the search
from, indexed from left to right. It can be any integer between 0 and the length
of the string. The default value is the length of the string.
@name lastIndexOf
@methodOf String#
*/
/***
Returns a number indicating whether a reference string comes before or after or
is the same as the given string in sort order.

<code> localeCompare(compareString) </code>

@name localeCompare
@methodOf String#
*/
/***
Used to retrieve the matches when matching a string against a regular
expression.

<code><em>string</em>.match(<em>regexp</em>)</code>
@param regexp A regular expression object. If a non-RegExp object obj is passed,
it is implicitly converted to a RegExp by using new RegExp(obj).
@name match
@methodOf String#
*/
/***
Non-standard



@name quote
@methodOf String#
*/
/***
Returns a new string with some or all matches of a pattern replaced by a
replacement.  The pattern can be a string or a RegExp, and the replacement can
be a string or a function to be called for each match.

<code><em>str</em>.replace(<em>regexp|substr</em>, <em>newSubStr|function[</em>, </code><code><em>flags]</em>);</code>
@param regexp  A RegExp object. The match is replaced by the return value of
parameter #2.
@param substr  A String that is to be replaced by newSubStr.
@param newSubStr  The String that replaces the substring received from parameter
#1. A number of special replacement patterns are supported; see the "Specifying
a string as a parameter" section below.
@param function  A function to be invoked to create the new substring (to put in
place of the substring received from parameter #1). The arguments supplied to
this function are described in the "Specifying a function as a parameter"
section below.
@param flags gimy

Non-standardThe use of the flags parameter in the String.replace method is
non-standard. For cross-browser compatibility, use a RegExp object with
corresponding flags.A string containing any combination of the RegExp flags: g
global match i ignore case m match over multiple lines y Non-standard
sticky global matchignore casematch over multiple linesNon-standard     sticky
@name replace
@methodOf String#
*/
/***
Executes the search for a match between a regular expression and this String
object.

<code><em>string</em>.search(<em>regexp</em>)</code>
@param regexp  A  regular expression object. If a non-RegExp object obj is
passed, it is implicitly converted to a RegExp by using new RegExp(obj).
@name search
@methodOf String#
*/
/***
Extracts a section of a string and returns a new string.

<code><em>string</em>.slice(<em>beginslice</em>[, <em>endSlice</em>])</code>
@param beginSlice  The zero-based index at which to begin extraction.
@param endSlice  The zero-based index at which to end extraction. If omitted,
slice extracts to the end of the string.
@name slice
@methodOf String#
*/
/***
Splits a String object into an array of strings by separating the string into
substrings.

<code><em>string</em>.split([<em>separator</em>][, <em>limit</em>])</code>
@param separator  Specifies the character to use for separating the string. The
separator is treated as a string or a regular expression. If separator is
omitted, the array returned contains one element consisting of the entire
string.
@param limit  Integer specifying a limit on the number of splits to be found.
@name split
@methodOf String#
*/
/***
Returns the characters in a string beginning at the specified location through
the specified number of characters.

<code><em>string</em>.substr(<em>start</em>[, <em>length</em>])</code>
@param start  Location at which to begin extracting characters.
@param length  The number of characters to extract.
@name substr
@methodOf String#
*/
/***
Returns a subset of a string between one index and another, or through the end
of the string.

<code><em>string</em>.substring(<em>indexA</em>[, <em>indexB</em>])</code>
@param indexA  An integer between 0 and one less than the length of the string.
@param indexB  (optional) An integer between 0 and the length of the string.
@name substring
@methodOf String#
*/
/***
Returns the calling string value converted to lower case, according to any
locale-specific case mappings.

<code> toLocaleLowerCase() </code>

@name toLocaleLowerCase
@methodOf String#
*/
/***
Returns the calling string value converted to upper case, according to any
locale-specific case mappings.

<code> toLocaleUpperCase() </code>

@name toLocaleUpperCase
@methodOf String#
*/
/***
Returns the calling string value converted to lowercase.

<code><em>string</em>.toLowerCase()</code>

@name toLowerCase
@methodOf String#
*/
/***
Non-standard



@name toSource
@methodOf String#
*/
/***
Returns a string representing the specified object.

<code><em>string</em>.toString()</code>

@name toString
@methodOf String#
*/
/***
Returns the calling string value converted to uppercase.

<code><em>string</em>.toUpperCase()</code>

@name toUpperCase
@methodOf String#
*/
/***
Removes whitespace from both ends of the string.

<code><em>string</em>.trim()</code>

@name trim
@methodOf String#
*/
/***
Non-standard



@name trimLeft
@methodOf String#
*/
/***
Non-standard



@name trimRight
@methodOf String#
*/
/***
Returns the primitive value of a String object.

<code><em>string</em>.valueOf()</code>

@name valueOf
@methodOf String#
*/
/***
Non-standard



@name anchor
@methodOf String#
*/
/***
Non-standard



@name big
@methodOf String#
*/
/***
Non-standard

<code>BLINK</code>

@name blink
@methodOf String#
*/
/***
Non-standard



@name bold
@methodOf String#
*/
/***
Non-standard



@name fixed
@methodOf String#
*/
/***
Non-standard

<code>&lt;FONT COLOR="<i>color</i>"&gt;</code>

@name fontcolor
@methodOf String#
*/
/***
Non-standard

<code>&lt;FONT SIZE="<i>size</i>"&gt;</code>

@name fontsize
@methodOf String#
*/
/***
Non-standard



@name italics
@methodOf String#
*/
/***
Non-standard



@name link
@methodOf String#
*/
/***
Non-standard



@name small
@methodOf String#
*/
/***
Non-standard



@name strike
@methodOf String#
*/
/***
Non-standard



@name sub
@methodOf String#
*/
/***
Non-standard



@name sup
@methodOf String#
*/
/***
Removes the last element from an array and returns that element.

<code>
<i>array</i>.pop()
</code>

@name pop
@methodOf Array#
*/
/***
Mutates an array by appending the given elements and returning the new length of
the array.

<code><em>array</em>.push(<em>element1</em>, ..., <em>elementN</em>)</code>
@param element1, ..., elementN The elements to add to the end of the array.
@name push
@methodOf Array#
*/
/***
Reverses an array in place.  The first array element becomes the last and the
last becomes the first.

<code><em>array</em>.reverse()</code>

@name reverse
@methodOf Array#
*/
/***
Removes the first element from an array and returns that element. This method
changes the length of the array.

<code><em>array</em>.shift()</code>

@name shift
@methodOf Array#
*/
/***
Sorts the elements of an array in place.

<code><em>array</em>.sort([<em>compareFunction</em>])</code>
@param compareFunction  Specifies a function that defines the sort order. If
omitted, the array is sorted lexicographically (in dictionary order) according
to the string conversion of each element.
@name sort
@methodOf Array#
*/
/***
Changes the content of an array, adding new elements while removing old
elements.

<code><em>array</em>.splice(<em>index</em>, <em>howMany</em>[, <em>element1</em>[, ...[, <em>elementN</em>]]])</code>
@param index  Index at which to start changing the array. If negative, will
begin that many elements from the end.
@param howMany  An integer indicating the number of old array elements to
remove. If howMany is 0, no elements are removed. In this case, you should
specify at least one new element. If no howMany parameter is specified (second
syntax above, which is a SpiderMonkey extension), all elements after index are
removed.
@param element1, ..., elementN  The elements to add to the array. If you don't
specify any elements, splice simply removes elements from the array.
@name splice
@methodOf Array#
*/
/***
Adds one or more elements to the beginning of an array and returns the new
length of the array.

<code><em>arrayName</em>.unshift(<em>element1</em>, ..., <em>elementN</em>) </code>
@param element1, ..., elementN The elements to add to the front of the array.
@name unshift
@methodOf Array#
*/
/***
Returns a new array comprised of this array joined with other array(s) and/or
value(s).

<code><em>array</em>.concat(<em>value1</em>, <em>value2</em>, ..., <em>valueN</em>)</code>
@param valueN  Arrays and/or values to concatenate to the resulting array.
@name concat
@methodOf Array#
*/
/***
Joins all elements of an array into a string.

<code><em>array</em>.join(<em>separator</em>)</code>
@param separator  Specifies a string to separate each element of the array. The
separator is converted to a string if necessary. If omitted, the array elements
are separated with a comma.
@name join
@methodOf Array#
*/
/***
Returns a one-level deep copy of a portion of an array.

<code><em>array</em>.slice(<em>begin</em>[, <em>end</em>])</code>
@param begin  Zero-based index at which to begin extraction.As a negative index,
start indicates an offset from the end of the sequence. slice(-2) extracts the
second-to-last element and the last element in the sequence.
@param end  Zero-based index at which to end extraction. slice extracts up to
but not including end.slice(1,4) extracts the second element through the fourth
element (elements indexed 1, 2, and 3).As a negative index, end indicates an
offset from the end of the sequence. slice(2,-1) extracts the third element
through the second-to-last element in the sequence.If end is omitted, slice
extracts to the end of the sequence.
@name slice
@methodOf Array#
*/
/***
Non-standard



@name toSource
@methodOf Array#
*/
/***
Returns a string representing the specified array and its elements.

<code><em>array</em>.toString()</code>

@name toString
@methodOf Array#
*/
/***
Returns the first index at which a given element can be found in the array, or
-1 if it is not present.

<code><em>array</em>.indexOf(<em>searchElement</em>[, <em>fromIndex</em>])</code>
@param searchElement fromIndex  Element to locate in the array.The index at
which to begin the search. Defaults to 0, i.e. the whole array will be searched.
If the index is greater than or equal to the length of the array, -1 is
returned, i.e. the array will not be searched. If negative, it is taken as the
offset from the end of the array. Note that even when the index is negative, the
array is still searched from front to back. If the calculated index is less than
0, the whole array will be searched.
@name indexOf
@methodOf Array#
*/
/***
Returns the last index at which a given element can be found in the array, or -1
if it is not present. The array is searched backwards, starting at fromIndex.

<code><em>array</em>.lastIndexOf(<em>searchElement</em>[, <em>fromIndex</em>])</code>
@param searchElement fromIndex  Element to locate in the array.The index at
which to start searching backwards. Defaults to the array's length, i.e. the
whole array will be searched. If the index is greater than or equal to the
length of the array, the whole array will be searched. If negative, it is taken
as the offset from the end of the array. Note that even when the index is
negative, the array is still searched from back to front. If the calculated
index is less than 0, -1 is returned, i.e. the array will not be searched.
@name lastIndexOf
@methodOf Array#
*/
/***
Creates a new array with all elements that pass the test implemented by the
provided function.

<code><em>array</em>.filter(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to test each element of the array.Object to
use as this when executing callback.
@name filter
@methodOf Array#
*/
/***
Executes a provided function once per array element.

<code><em>array</em>.forEach(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to execute for each element.Object to use
as this when executing callback.
@name forEach
@methodOf Array#
*/
/***
Tests whether all elements in the array pass the test implemented by the
provided function.

<code><em>array</em>.every(<em>callback</em>[, <em>thisObject</em>])</code>
@param callbackthisObject Function to test for each element.Object to use as
this when executing callback.
@name every
@methodOf Array#
*/
/***
Creates a new array with the results of calling a provided function on every
element in this array.

<code><em>array</em>.map(<em>callback</em>[, <em>thisObject</em>])</code>
@param callbackthisObject Function that produces an element of the new Array
from an element of the current one.Object to use as this when executing
callback.
@name map
@methodOf Array#
*/
/***
Tests whether some element in the array passes the test implemented by the
provided function.

<code><em>array</em>.some(<em>callback</em>[, <em>thisObject</em>])</code>
@param callback thisObject  Function to test for each element.Object to use as
this when executing callback.
@name some
@methodOf Array#
*/
/***
Apply a function against an accumulator and each value of the array (from
left-to-right) as to reduce it to a single value.

<code><em>array</em>.reduce(<em>callback</em>[, <em>initialValue</em>])</code>
@param callbackinitialValue Function to execute on each value in the
array.Object to use as the first argument to the first call of the callback.
@name reduce
@methodOf Array#
*/
/***
Apply a function simultaneously against two values of the array (from
right-to-left) as to reduce it to a single value.

<code><em>array</em>.reduceRight(<em>callback</em>[, <em>initialValue</em>])</code>
@param callback initialValue  Function to execute on each value in the
array.Object to use as the first argument to the first call of the callback.
@name reduceRight
@methodOf Array#
*/
/***
Returns a boolean indicating whether the object has the specified property.

<code><em>obj</em>.hasOwnProperty(<em>prop</em>)</code>
@param prop The name of the property to test.
@name hasOwnProperty
@methodOf Object#
*/
/***
Calls a function with a given this value and arguments provided as an array.

<code><em>fun</em>.apply(<em>thisArg</em>[, <em>argsArray</em>])</code>
@param thisArg  Determines the value of this inside fun. If thisArg is null or
undefined, this will be the global object. Otherwise, this will be equal to
Object(thisArg) (which is thisArg if thisArg is already an object, or a String,
Boolean, or Number if thisArg is a primitive value of the corresponding type).
Therefore, it is always true that typeof this == "object" when the function
executes.
@param argsArray  An argument array for the object, specifying the arguments
with which fun should be called, or null or undefined if no arguments should be
provided to the function.
@name apply
@methodOf Function#
*/
/***
Creates a new function that, when called, itself calls this function in the
context of the provided this value, with a given sequence of arguments preceding
any provided when the new function was called.

<code><em>fun</em>.bind(<em>thisArg</em>[, <em>arg1</em>[, <em>arg2</em>[, ...]]])</code>
@param thisValuearg1, arg2, ... The value to be passed as the this parameter to
the target function when the bound function is called.  The value is ignored if
the bound function is constructed using the new operator.Arguments to prepend to
arguments provided to the bound function when invoking the target function.
@name bind
@methodOf Function#
*/
/***
Calls a function with a given this value and arguments provided individually.

<code><em>fun</em>.call(<em>thisArg</em>[, <em>arg1</em>[, <em>arg2</em>[, ...]]])</code>
@param thisArg  Determines the value of this inside fun. If thisArg is null or
undefined, this will be the global object. Otherwise, this will be equal to
Object(thisArg) (which is thisArg if thisArg is already an object, or a String,
Boolean, or Number if thisArg is a primitive value of the corresponding type).
Therefore, it is always true that typeof this == "object" when the function
executes.
@param arg1, arg2, ...  Arguments for the object.
@name call
@methodOf Function#
*/
/***
Non-standard



@name toSource
@methodOf Function#
*/
/***
Returns a string representing the source code of the function.

<code><em>function</em>.toString(<em>indentation</em>)</code>
@param indentation Non-standard     The amount of spaces to indent the string
representation of the source code. If indentation is less than or equal to -1,
most unnecessary spaces are removed.
@name toString
@methodOf Function#
*/
/***
Executes a search for a match in a specified string. Returns a result array, or
null.


@param regexp  The name of the regular expression. It can be a variable name or
a literal.
@param str  The string against which to match the regular expression.
@name exec
@methodOf RegExp#
*/
/***
Executes the search for a match between a regular expression and a specified
string. Returns true or false.

<code> <em>regexp</em>.test([<em>str</em>]) </code>
@param regexp  The name of the regular expression. It can be a variable name or
a literal.
@param str  The string against which to match the regular expression.
@name test
@methodOf RegExp#
*/
/***
Non-standard



@name toSource
@methodOf RegExp#
*/
/***
Returns a string representing the specified object.

<code><i>regexp</i>.toString()</code>

@name toString
@methodOf RegExp#
*/
/***
Returns a reference to the Date function that created the instance's prototype.
Note that the value of this property is a reference to the function itself, not
a string containing the function's name.



@name constructor
@methodOf Date#
*/
/***
Returns the day of the month for the specified date according to local time.

<code>
getDate()
</code>

@name getDate
@methodOf Date#
*/
/***
Returns the day of the week for the specified date according to local time.

<code>
getDay()
</code>

@name getDay
@methodOf Date#
*/
/***
Returns the year of the specified date according to local time.

<code>
getFullYear()
</code>

@name getFullYear
@methodOf Date#
*/
/***
Returns the hour for the specified date according to local time.

<code>
getHours()
</code>

@name getHours
@methodOf Date#
*/
/***
Returns the milliseconds in the specified date according to local time.

<code>
getMilliseconds()
</code>

@name getMilliseconds
@methodOf Date#
*/
/***
Returns the minutes in the specified date according to local time.

<code>
getMinutes()
</code>

@name getMinutes
@methodOf Date#
*/
/***
Returns the month in the specified date according to local time.

<code>
getMonth()
</code>

@name getMonth
@methodOf Date#
*/
/***
Returns the seconds in the specified date according to local time.

<code>
getSeconds()
</code>

@name getSeconds
@methodOf Date#
*/
/***
Returns the numeric value corresponding to the time for the specified date
according to universal time.

<code> getTime() </code>

@name getTime
@methodOf Date#
*/
/***
Returns the time-zone offset from UTC, in minutes, for the current locale.

<code> getTimezoneOffset() </code>

@name getTimezoneOffset
@methodOf Date#
*/
/***
Returns the day (date) of the month in the specified date according to universal
time.

<code>
getUTCDate()
</code>

@name getUTCDate
@methodOf Date#
*/
/***
Returns the day of the week in the specified date according to universal time.

<code>
getUTCDay()
</code>

@name getUTCDay
@methodOf Date#
*/
/***
Returns the year in the specified date according to universal time.

<code>
getUTCFullYear()
</code>

@name getUTCFullYear
@methodOf Date#
*/
/***
Returns the hours in the specified date according to universal time.

<code>
getUTCHours
</code>

@name getUTCHours
@methodOf Date#
*/
/***
Returns the milliseconds in the specified date according to universal time.

<code>
getUTCMilliseconds()
</code>

@name getUTCMilliseconds
@methodOf Date#
*/
/***
Returns the minutes in the specified date according to universal time.

<code>
getUTCMinutes()
</code>

@name getUTCMinutes
@methodOf Date#
*/
/***
Returns the month of the specified date according to universal time.

<code>
getUTCMonth()
</code>

@name getUTCMonth
@methodOf Date#
*/
/***
Returns the seconds in the specified date according to universal time.

<code>
getUTCSeconds()
</code>

@name getUTCSeconds
@methodOf Date#
*/
/***
Deprecated



@name getYear
@methodOf Date#
*/
/***
Sets the day of the month for a specified date according to local time.

<code> setDate(<em>dayValue</em>) </code>
@param dayValue  An integer from 1 to 31, representing the day of the month.
@name setDate
@methodOf Date#
*/
/***
Sets the full year for a specified date according to local time.

<code>
setFullYear(<i>yearValue</i>[, <i>monthValue</i>[, <em>dayValue</em>]])
</code>
@param  yearValue   An integer specifying the numeric value of the year, for
example, 1995.
@param  monthValue   An integer between 0 and 11 representing the months January
through December.
@param  dayValue   An integer between 1 and 31 representing the day of the
month. If you specify the dayValue parameter, you must also specify the
monthValue.
@name setFullYear
@methodOf Date#
*/
/***
Sets the hours for a specified date according to local time.

<code>
setHours(<i>hoursValue</i>[, <i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]]])
</code>
@param  hoursValue   An integer between 0 and 23, representing the hour.
@param  minutesValue   An integer between 0 and 59, representing the minutes.
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setHours
@methodOf Date#
*/
/***
Sets the milliseconds for a specified date according to local time.

<code>
setMilliseconds(<i>millisecondsValue</i>)
</code>
@param  millisecondsValue   A number between 0 and 999, representing the
milliseconds.
@name setMilliseconds
@methodOf Date#
*/
/***
Sets the minutes for a specified date according to local time.

<code>
setMinutes(<i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]])
</code>
@param  minutesValue   An integer between 0 and 59, representing the minutes.
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setMinutes
@methodOf Date#
*/
/***
Set the month for a specified date according to local time.

<code>
setMonth(<i>monthValue</i>[, <em>dayValue</em>])
</code>
@param  monthValue   An integer between 0 and 11 (representing the months
January through December).
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setMonth
@methodOf Date#
*/
/***
Sets the seconds for a specified date according to local time.

<code>
setSeconds(<i>secondsValue</i>[, <em>msValue</em>])
</code>
@param  secondsValue   An integer between 0 and 59.
@param  msValue   A number between 0 and 999, representing the milliseconds.
@name setSeconds
@methodOf Date#
*/
/***
Sets the Date object to the time represented by a number of milliseconds since
January 1, 1970, 00:00:00 UTC.

<code>
setTime(<i>timeValue</i>)
</code>
@param  timeValue   An integer representing the number of milliseconds since 1
January 1970, 00:00:00 UTC.
@name setTime
@methodOf Date#
*/
/***
Sets the day of the month for a specified date according to universal time.

<code>
setUTCDate(<i>dayValue</i>)
</code>
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setUTCDate
@methodOf Date#
*/
/***
Sets the full year for a specified date according to universal time.

<code>
setUTCFullYear(<i>yearValue</i>[, <i>monthValue</i>[, <em>dayValue</em>]])
</code>
@param  yearValue   An integer specifying the numeric value of the year, for
example, 1995.
@param  monthValue   An integer between 0 and 11 representing the months January
through December.
@param  dayValue   An integer between 1 and 31 representing the day of the
month. If you specify the dayValue parameter, you must also specify the
monthValue.
@name setUTCFullYear
@methodOf Date#
*/
/***
Sets the hour for a specified date according to universal time.

<code>
setUTCHours(<i>hoursValue</i>[, <i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]]])
</code>
@param  hoursValue   An integer between 0 and 23, representing the hour.
@param  minutesValue   An integer between 0 and 59, representing the minutes.
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setUTCHours
@methodOf Date#
*/
/***
Sets the milliseconds for a specified date according to universal time.

<code>
setUTCMilliseconds(<i>millisecondsValue</i>)
</code>
@param  millisecondsValue   A number between 0 and 999, representing the
milliseconds.
@name setUTCMilliseconds
@methodOf Date#
*/
/***
Sets the minutes for a specified date according to universal time.

<code>
setUTCMinutes(<i>minutesValue</i>[, <i>secondsValue</i>[, <em>msValue</em>]])
</code>
@param  minutesValue   An integer between 0 and 59, representing the minutes.
@param  secondsValue   An integer between 0 and 59, representing the seconds. If
you specify the secondsValue parameter, you must also specify the minutesValue.
@param  msValue   A number between 0 and 999, representing the milliseconds. If
you specify the msValue parameter, you must also specify the minutesValue and
secondsValue.
@name setUTCMinutes
@methodOf Date#
*/
/***
Sets the month for a specified date according to universal time.

<code>
setUTCMonth(<i>monthValue</i>[, <em>dayValue</em>])
</code>
@param  monthValue   An integer between 0 and 11, representing the months
January through December.
@param  dayValue   An integer from 1 to 31, representing the day of the month.
@name setUTCMonth
@methodOf Date#
*/
/***
Sets the seconds for a specified date according to universal time.

<code>
setUTCSeconds(<i>secondsValue</i>[, <em>msValue</em>])
</code>
@param  secondsValue   An integer between 0 and 59.
@param  msValue   A number between 0 and 999, representing the milliseconds.
@name setUTCSeconds
@methodOf Date#
*/
/***
Deprecated



@name setYear
@methodOf Date#
*/
/***
Returns the date portion of a Date object in human readable form in American
English.

<code><em>date</em>.toDateString()</code>

@name toDateString
@methodOf Date#
*/
/***
Returns a JSON representation of the Date object.

<code><em>date</em>.prototype.toJSON()</code>

@name toJSON
@methodOf Date#
*/
/***
Deprecated



@name toGMTString
@methodOf Date#
*/
/***
Converts a date to a string, returning the "date" portion using the operating
system's locale's conventions.

<code>
toLocaleDateString()
</code>

@name toLocaleDateString
@methodOf Date#
*/
/***
Non-standard



@name toLocaleFormat
@methodOf Date#
*/
/***
Converts a date to a string, using the operating system's locale's conventions.

<code>
toLocaleString()
</code>

@name toLocaleString
@methodOf Date#
*/
/***
Converts a date to a string, returning the "time" portion using the current
locale's conventions.

<code> toLocaleTimeString() </code>

@name toLocaleTimeString
@methodOf Date#
*/
/***
Non-standard



@name toSource
@methodOf Date#
*/
/***
Returns a string representing the specified Date object.

<code> toString() </code>

@name toString
@methodOf Date#
*/
/***
Returns the time portion of a Date object in human readable form in American
English.

<code><em>date</em>.toTimeString()</code>

@name toTimeString
@methodOf Date#
*/
/***
Converts a date to a string, using the universal time convention.

<code> toUTCString() </code>

@name toUTCString
@methodOf Date#
*/
/***
Returns the primitive value of a Date object.

<code>
valueOf()
</code>

@name valueOf
@methodOf Date#
*/;
;
var Animated;
Animated = function(I, self) {
  var advanceFrame, find;
  I || (I = {});
  $.reverseMerge(I, {
    data: {},
    spriteLookup: {},
    activeAnimation: [],
    currentFrameIndex: 0,
    lastUpdate: new Date().getTime(),
    useTimer: false,
    transform: Matrix.IDENTITY
  });
  I.activeAnimation = I.data.animations.first();
  I.currentFrameIndex = I.activeAnimation.frames.first();
  advanceFrame = function() {
    var frames, nextState;
    frames = I.activeAnimation.frames;
    if (I.currentFrameIndex === frames.last()) {
      self.trigger("Complete");
      nextState = I.activeAnimation.complete;
      if (nextState) {
        I.activeAnimation = find(nextState) || I.activeAnimation;
        I.width = I.spriteLookup[I.activeAnimation.frames.first()].width;
        I.height = I.spriteLookup[I.activeAnimation.frames.first()].height;
      }
    }
    return (I.currentFrameIndex = I.activeAnimation.frames[(frames.indexOf(I.currentFrameIndex) + 1) % frames.length]);
  };
  find = function(name) {
    var result;
    result = null;
    I.data.animations.each(function(animation) {
      if (animation.name.toLowerCase() === name.toLowerCase()) {
        return (result = animation);
      }
    });
    return result;
  };
  I.data.tileset.each(function(spriteData, i) {
    return (I.spriteLookup[i] = Sprite.fromURL(spriteData.src));
  });
  return {
    draw: function(canvas) {
      return canvas.withTransform(self.transform(), function() {
        return I.spriteLookup[I.currentFrameIndex].draw(canvas, I.x, I.y);
      });
    },
    transition: function(newState) {
      var firstFrame, firstSprite, nextState;
      if (newState === I.activeAnimation.name) {
        return null;
      }
      if (!(I.activeAnimation.interruptible)) {
        return null;
      }
      nextState = find(newState);
      if (nextState) {
        I.activeAnimation = nextState;
        firstFrame = I.activeAnimation.frames.first();
        firstSprite = I.spriteLookup[firstFrame];
        I.currentFrameIndex = firstFrame;
        I.width = firstSprite.width;
        return (I.height = firstSprite.height);
      }
    },
    transform: function() {
      return I.transform;
    },
    before: {
      update: function() {
        var time, updateFrame;
        if (I.useTimer) {
          time = new Date().getTime();
          updateFrame = (time - I.lastUpdate) >= I.activeAnimation.speed;
          if (updateFrame) {
            I.lastUpdate = time;
            if (I.activeAnimation.triggers && I.activeAnimation.triggers[I.currentFrameIndex]) {
              I.activeAnimation.triggers[I.currentFrameIndex].each(function(event) {
                return self.trigger(event);
              });
            }
            return advanceFrame();
          }
        } else {
          if (I.activeAnimation.triggers && I.activeAnimation.triggers[I.currentFrameIndex]) {
            I.activeAnimation.triggers[I.currentFrameIndex].each(function(event) {
              return self.trigger(event);
            });
          }
          return advanceFrame();
        }
      }
    }
  };
};;
(function() {
  var Animation, fromPixieId;
  Animation = function(data) {
    var activeAnimation, advanceFrame, currentSprite, spriteLookup;
    spriteLookup = {};
    activeAnimation = data.animations[0];
    currentSprite = data.animations[0].frames[0];
    advanceFrame = function(animation) {
      var frames;
      frames = animation.frames;
      return (currentSprite = frames[(frames.indexOf(currentSprite) + 1) % frames.length]);
    };
    data.tileset.each(function(spriteData, i) {
      return (spriteLookup[i] = Sprite.fromURL(spriteData.src));
    });
    return $.extend(data, {
      currentSprite: function() {
        return currentSprite;
      },
      draw: function(canvas, x, y) {
        return canvas.withTransform(Matrix.translation(x, y), function() {
          return spriteLookup[currentSprite].draw(canvas, 0, 0);
        });
      },
      frames: function() {
        return activeAnimation.frames;
      },
      update: function() {
        return advanceFrame(activeAnimation);
      },
      active: function(name) {
        if (name !== undefined) {
          return data.animations[name] ? (currentSprite = data.animations[name].frames[0]) : null;
        } else {
          return activeAnimation;
        }
      }
    });
  };
  window.Animation = function(name, callback) {
    return fromPixieId(App.Animations[name], callback);
  };
  fromPixieId = function(id, callback) {
    var proxy, url;
    url = ("http://pixie.strd6.com/s3/animations/" + (id) + "/data.json");
    proxy = {
      active: $.noop,
      draw: $.noop
    };
    $.getJSON(url, function(data) {
      $.extend(proxy, Animation(data));
      return (typeof callback === "function" ? callback(proxy) : undefined);
    });
    return proxy;
  };
  return (window.Animation.fromPixieId = fromPixieId);
})();;
var __slice = Array.prototype.slice;
(function($) {
  var Bindable;
  /***
  Bindable module
  @name Bindable
  @module
  @constructor
  */
  Bindable = function() {
    var eventCallbacks;
    eventCallbacks = {};
    return {
      /***
      The bind method adds a function as an event listener.

      @name bind
      @methodOf Bindable#

      @param {String} event The event to listen to.
      @param {Function} callback The function to be called when the specified event
      is triggered.
      */
      bind: function(event, callback) {
        eventCallbacks[event] = eventCallbacks[event] || [];
        return eventCallbacks[event].push(callback);
      },
      /***
      The unbind method removes a specific event listener, or all event listeners if
      no specific listener is given.

      @name unbind
      @methodOf Bindable#

      @param {String} event The event to remove the listener from.
      @param {Function} [callback] The listener to remove.
      */
      unbind: function(event, callback) {
        eventCallbacks[event] = eventCallbacks[event] || [];
        return callback ? eventCallbacks.remove(callback) : (eventCallbacks[event] = []);
      },
      /***
      The trigger method calls all listeners attached to the specified event.

      @name trigger
      @methodOf Bindable#

      @param {String} event The event to trigger.
      @param {Array} [parameters] Additional parameters to pass to the event listener.
      */
      trigger: function(event) {
        var callbacks, parameters, self;
        parameters = __slice.call(arguments, 1);
        callbacks = eventCallbacks[event];
        if (callbacks && callbacks.length) {
          self = this;
          return callbacks.each(function(callback) {
            return callback.apply(self, parameters);
          });
        }
      }
    };
  };
  return (window.Bindable = Bindable);
})(jQuery);;
var Bounded;
/***
The Bounded module is used to provide basic data about the
location and dimensions of the including object

Bounded module
@name Bounded
@module
@constructor

@param {Object} I Instance variables
@param {Object} self Reference to including object
*/
Bounded = function(I, self) {
  I || (I = {});
  $.reverseMerge(I, {
    x: 0,
    y: 0,
    width: 8,
    height: 8,
    collisionMargin: Point(0, 0)
  });
  return {
    /***
    The position of this game object, the top left point in the local transform.

    @returns The position of this object
    @type Point
    */
    position: function() {
      return Point(I.x, I.y);
    },
    collides: function(bounds) {
      return Collision.rectangular(I, bounds);
    },
    /***
    This returns a modified bounds based on the collision margin.
    The area of the bounds is reduced if collision margin is positive
    and increased if collision margin is negative.

    @name collisionBounds
    @methodOf Bounded#

    @param {number} xOffset the amount to shift the x position
    @param {number} yOffset the amount to shift the y position
    */
    collisionBounds: function(xOffset, yOffset) {
      var bounds;
      bounds = self.bounds(xOffset, yOffset);
      bounds.x += I.collisionMargin.x;
      bounds.y += I.collisionMargin.y;
      bounds.width -= 2 * I.collisionMargin.x;
      bounds.height -= 2 * I.collisionMargin.y;
      return bounds;
    },
    /***
    The bounds method returns infomation about the location
    of the object and its dimensions with optional offsets

    @name bounds
    @methodOf Bounded#

    @param {number} xOffset the amount to shift the x position
    @param {number} yOffset the amount to shift the y position
    */
    bounds: function(xOffset, yOffset) {
      return {
        x: I.x + (xOffset || 0),
        y: I.y + (yOffset || 0),
        width: I.width,
        height: I.height
      };
    },
    /***
    The centeredBounds method returns infomation about the center
    of the object along with the midpoint of the width and height

    @name centeredBounds
    @methodOf Bounded#
    */
    centeredBounds: function() {
      return {
        x: I.x + I.width / 2,
        y: I.y + I.height / 2,
        xw: I.width / 2,
        yw: I.height / 2
      };
    },
    /***
    The center method returns the {@link Point} that is
    the center of the object

    @name center
    @methodOf Bounded#
    */
    center: function() {
      return Point(I.x + I.width / 2, I.y + I.height / 2);
    }
  };
};;
var CellularAutomata;
CellularAutomata = function(I) {
  var currentState, get, neighbors, nextState, self;
  I || (I = {});
  $.reverseMerge(I, {
    cellUpdate: function(row, col, value, neighbors) {
      var neighborCounts;
      neighborCounts = neighbors.sum();
      return +((value + neighborCounts) >= 5);
    },
    initializeCell: function(row, col) {
      return rand() < 0.45;
    },
    outsideValue: function(row, col) {
      return 1;
    },
    width: 32,
    height: 32
  });
  currentState = [];
  nextState = [];
  get = function(row, col) {
    if (((0 <= row) && (row < I.height)) && ((0 <= col) && (col < I.width))) {
      return currentState[row][col];
    } else {
      return I.outsideValue(row, col);
    }
  };
  neighbors = function(row, col) {
    return [get(row - 1, col - 1), get(row - 1, col), get(row - 1, col + 1), get(row, col - 1), get(row, col + 1), get(row + 1, col - 1), get(row + 1, col), get(row + 1, col + 1)];
  };
  I.height.times(function(row) {
    currentState[row] = [];
    return I.width.times(function(col) {
      return (currentState[row][col] = I.initializeCell(row, col));
    });
  });
  self = {
    data: function() {
      return currentState;
    },
    get: function(row, col) {
      return currentState[row][col];
    },
    update: function(updateFn) {
      I.height.times(function(row) {
        return (nextState[row] = currentState[row].map(function(value, col) {
          return updateFn ? updateFn(row, col, value, neighbors(row, col)) : I.cellUpdate(row, col, value, neighbors(row, col));
        }));
      });
      currentState = nextState;
      return (nextState = []);
    }
  };
  return self;
};;
var Collidable;
Collidable = function(I) {
  I || (I = {});
  return {
    solid_collision: function(other) {
      if (other.solid && other.bounds) {
        if (Collision.rectangular(self, other)) {
          self.trigger('collision');
          return other.trigger('collision');
        }
      }
    },
    collides_with: function(other) {
      var nearby, quadTree;
      if (other.solid && other.bounds) {
        if (Object.isArray(other)) {
          quadTree = QuadTree();
          other.each(function(collidable) {
            return quadTree.insert(collidable);
          });
          nearby = quadTree.retrieve(self);
          return nearby.each(function(close_collider) {
            return self.solid_collision(close_collider);
          });
        } else {
          return solid_collision(other);
        }
      }
    }
  };
};;
var Collision;
/***
Collision holds many methods useful for checking geometric overlap of various objects.

@name Collision
@namespace
*/
Collision = {
  rectangular: function(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  },
  circular: function(a, b) {
    var dx, dy, r;
    r = a.radius + b.radius;
    dx = b.x - a.x;
    dy = b.y - a.y;
    return r * r >= dx * dx + dy * dy;
  },
  rayCircle: function(source, direction, target) {
    var dt, hit, intersection, intersectionToTarget, intersectionToTargetLength, laserToTarget, projection, projectionLength, radius;
    radius = target.radius();
    target = target.position();
    laserToTarget = target.subtract(source);
    projectionLength = direction.dot(laserToTarget);
    if (projectionLength < 0) {
      return false;
    }
    projection = direction.scale(projectionLength);
    intersection = source.add(projection);
    intersectionToTarget = target.subtract(intersection);
    intersectionToTargetLength = intersectionToTarget.length();
    if (intersectionToTargetLength < radius) {
      hit = true;
    }
    if (hit) {
      dt = Math.sqrt(radius * radius - intersectionToTargetLength * intersectionToTargetLength);
      return (hit = direction.scale(projectionLength - dt).add(source));
    }
  },
  rayRectangle: function(source, direction, target) {
    var areaPQ0, areaPQ1, hit, p0, p1, t, tX, tY, xval, xw, yval, yw;
    xw = target.xw;
    yw = target.yw;
    if (source.x < target.x) {
      xval = target.x - xw;
    } else {
      xval = target.x + xw;
    }
    if (source.y < target.y) {
      yval = target.y - yw;
    } else {
      yval = target.y + yw;
    }
    if (direction.x === 0) {
      p0 = Point(target.x - xw, yval);
      p1 = Point(target.x + xw, yval);
      t = (yval - source.y) / direction.y;
    } else if (direction.y === 0) {
      p0 = Point(xval, target.y - yw);
      p1 = Point(xval, target.y + yw);
      t = (xval - source.x) / direction.x;
    } else {
      tX = (xval - source.x) / direction.x;
      tY = (yval - source.y) / direction.y;
      if ((tX < tY || ((-xw < source.x - target.x) && (source.x - target.x < xw))) && !((-yw < source.y - target.y) && (source.y - target.y < yw))) {
        p0 = Point(target.x - xw, yval);
        p1 = Point(target.x + xw, yval);
        t = tY;
      } else {
        p0 = Point(xval, target.y - yw);
        p1 = Point(xval, target.y + yw);
        t = tX;
      }
    }
    if (t > 0) {
      areaPQ0 = direction.cross(p0.subtract(source));
      areaPQ1 = direction.cross(p1.subtract(source));
      return areaPQ0 * areaPQ1 < 0 ? (hit = direction.scale(t).add(source)) : null;
    }
  }
};;
var DebugConsole;
DebugConsole = function() {
  var REPL, container, input, output, repl, runButton;
  REPL = function(input, output) {
    var print;
    print = function(message) {
      return output.append($("<li />", {
        text: message
      }));
    };
    return {
      run: function() {
        var code, result, source;
        source = input.val();
        try {
          code = CoffeeScript.compile(source, {
            bare: true
          });
          if (code.indexOf("var") === 0) {
            code = code.substring(code.indexOf("\n"));
          }
          result = eval(code);
          print(" => " + (result));
          return input.val('');
        } catch (error) {
          return error.stack ? print(error.stack) : print(error.toString());
        }
      }
    };
  };
  container = $("<div />", {
    "class": "console"
  });
  input = $("<textarea />");
  output = $("<ul />");
  runButton = $("<button />", {
    text: "Run"
  });
  repl = REPL(input, output);
  container.append(output).append(input).append(runButton);
  return $(function() {
    runButton.click(function() {
      return repl.run();
    });
    return $("body").append(container);
  });
};;
function DialogBox(I) {
  I = I || {};
  
  $.reverseMerge(I, {
    backgroundColor: "#000",
    blinkRate: 8,
    cursor: true,
    cursorWidth: 10,
    height: 480,
    lineHeight: 16,
    paddingX: 24,
    paddingY: 24,
    text: "",
    textColor: "#080",
    width: 640,
    x: 0,
    y: 0
  });
  
  I.textWidth = I.width - 2*(I.paddingX);
  I.textHeight = I.height - 2*(I.paddingY);
  
  var blinkCount = 0;
  var cursorOn = true;
  
  var pageOffset = 0;
  var displayChars = 0;
  
  return {
    complete: function() {
      return displayChars >= I.text.length - 1;
    },
    
    draw: function(canvas) {
      //TODO: A lot of the logic in here should be moved into the
      // update method and pre-computed.
      var textStart = Point(I.paddingX, I.paddingY + I.lineHeight);
      
      canvas.withTransform(Matrix.translation(I.x, I.y), function() {
        canvas.fillColor(I.backgroundColor);
        canvas.fillRect(0, 0, I.width, I.height);
        
        canvas.fillColor(I.textColor);
        
        var pageCharCount = 0;
        var displayText = I.text.substr(pageOffset, displayChars);
        
        var piecesRemaining = displayText.split(' ');
        var lineWidth = 0;
        var line = 0;
        
        while(piecesRemaining.length > 0) {
          var currentLine = piecesRemaining.shift();
          
          while((canvas.measureText(currentLine) <= I.textWidth) && (piecesRemaining.length > 0)) {
            var proposedLine = currentLine + " " + piecesRemaining[0];
            
            if(canvas.measureText(proposedLine) <= I.textWidth) {
              piecesRemaining.shift();
              currentLine = proposedLine;
            } else {
              break;
                ;//NOOP
            }
          }
          
          pageCharCount += currentLine.length;
          
          canvas.fillText(currentLine, textStart.x, textStart.y + line * I.lineHeight);
          lineWidth = canvas.measureText(currentLine);
          
          if(line * I.lineHeight < I.textHeight) {
            line += 1;
          } else {
            pageOffset += pageCharCount + line;
            line = 0;
            pageCharCount = 0;
            displayChars = 0;
            break;
              ;
          }
        }
        
        if(cursorOn && I.cursor) {
          canvas.fillRect(textStart.x + lineWidth, textStart.y + (line - 2) *I.lineHeight, I.cursorWidth, I.lineHeight);
        }
      });
      
    },
    
    flush: function() {
      displayChars = I.text.length;
    },
    
    setText: function(text) {
      pageOffset = 0;
      displayChars = 0;
      I.text = text;
    },
    
    update: function() {
      displayChars += 1;
      blinkCount += 1;
      
      if(blinkCount >= I.blinkRate) {
        blinkCount = 0;
        cursorOn = !cursorOn;
      }
    }
  };
};
var Drawable;
/**
The Drawable module is used to provide a simple draw method to the including
object.

Binds a default draw listener to draw a rectangle or a sprite, if one exists.

Binds a step listener to update the transform of the object.

Autoloads the sprite specified in I.spriteName, if any.

@name Drawable
@module
@constructor

@param {Object} I Instance variables
@param {Object} self Reference to including object
*/
Drawable = function(I, self) {
  I || (I = {});
  $.reverseMerge(I, {
    color: "#196",
    spriteName: null
  });
  if (I.spriteName) {
    I.sprite = Sprite(I.spriteName, function(sprite) {
      I.width = sprite.width;
      return (I.height = sprite.height);
    });
  }
  self.bind('step', function() {
    var center;
    center = self.center();
    return I.rotation ? (I.transform = Matrix.translation(center.x, center.y).concat(Matrix.rotation(I.rotation)).concat(Matrix.translation(-I.width / 2, -I.height / 2))) : (I.transform = Matrix.translation(I.x, I.y));
  });
  self.bind('draw', function(canvas) {
    if (I.sprite) {
      return I.sprite.draw(canvas, 0, 0);
    } else {
      canvas.fillColor(I.color);
      return canvas.fillRect(0, 0, I.width, I.height);
    }
  });
  return {};
};;
var Durable;
/***
The Durable module deactives GameObjects after a specified duration.
If a duration is specified the object will update that many times. If -1 is
specified the object will have an unlimited duration.

@name Durable
@module
@constructor

@param {Object} I Instance variables
*/
Durable = function(I) {
  $.reverseMerge(I, {
    duration: -1
  });
  return {
    before: {
      update: function() {
        return I.duration !== -1 && (I.age >= I.duration) ? (I.active = false) : null;
      }
    }
  };
};;
var Emitter;
Emitter = function(I) {
  var self;
  self = GameObject(I);
  return self.include(Emitterable);
};;
var Emitterable;
Emitterable = function(I, self) {
  var n, particles;
  I || (I = {});
  $.reverseMerge(I, {
    batchSize: 1,
    emissionRate: 1,
    color: "blue",
    width: 0,
    height: 0,
    generator: {},
    particleCount: Infinity,
    particleData: {
      acceleration: Point(0, 0.1),
      age: 0,
      color: "blue",
      duration: 30,
      includedModules: ["Movable"],
      height: 2,
      maxSpeed: 2,
      offset: Point(0, 0),
      sprite: false,
      spriteName: false,
      velocity: Point(-0.25, 1),
      width: 2
    }
  });
  particles = [];
  n = 0;
  return {
    before: {
      draw: function(canvas) {
        return particles.invoke("draw", canvas);
      },
      update: function() {
        I.batchSize.times(function() {
          var center, particleProperties;
          if (n < I.particleCount && rand() < I.emissionRate) {
            center = self.center();
            particleProperties = $.reverseMerge({
              x: center.x,
              y: center.y
            }, I.particleData);
            $.each(I.generator, function(key, value) {
              return I.generator[key].call ? (particleProperties[key] = I.generator[key](n, I)) : (particleProperties[key] = I.generator[key]);
            });
            particleProperties.x += particleProperties.offset.x;
            particleProperties.y += particleProperties.offset.y;
            particles.push(GameObject(particleProperties));
            return n += 1;
          }
        });
        particles = particles.select(function(particle) {
          return particle.update();
        });
        return n === I.particleCount && !particles.length ? (I.active = false) : null;
      }
    }
  };
};;
(function($) {
  var defaults;
  defaults = {
    FPS: 30,
    age: 0,
    ambientLight: 1,
    backgroundColor: "#FFFFFF",
    cameraTransform: Matrix.IDENTITY,
    excludedModules: [],
    includedModules: [],
    paused: false,
    showFPS: false
  };
  /***
  The Engine controls the game world and manages game state. Once you
  set it up and let it run it pretty much takes care of itself.

  You can use the engine to add or remove objects from the game world.

  There are several modules that can include to add additional capabilities
  to the engine.

  The engine fires events that you  may bind listeners to. Event listeners
  may be bound with <code>engine.bind(eventName, callback)</code>

  @name Engine
  @constructor
  @param I
  */
  /***
  Observe or modify the
  entity data before it is added to the engine.
  @name beforeAdd
  @methodOf Engine#
  @event

  @param {Object} entityData
  */
  /***
  Observe or configure a <code>gameObject</code> that has been added
  to the engine.
  @name afterAdd
  @methodOf Engine#
  @event

  @param {GameObject} object The object that has just been added to the
  engine.
  */
  /***
  Called when the engine updates all the game objects.

  @name update
  @methodOf Engine#
  @event
  */
  /***
  Called after the engine completes an update. Here it is
  safe to modify the game objects array.

  @name afterUpdate
  @methodOf Engine#
  @event
  */
  /***
  Called before the engine draws the game objects on the canvas.

  The current camera transform <b>is</b> applied.

  @name preDraw
  @methodOf Engine#
  @event
  */
  /***
  Called after the engine draws on the canvas.

  The current camera transform <b>is not</b> applied, you may
  choose to apply it yourself using <code>I.cameraTransform</code>.

  @name draw
  @methodOf Engine#
  @event
  */
  return (window.Engine = function(I) {
    var animLoop, canvas, defaultModules, draw, frameAdvance, lastStepTime, modules, queuedObjects, running, self, startTime, step, update;
    I || (I = {});
    $.reverseMerge(I, {
      objects: []
    }, defaults);
    frameAdvance = false;
    queuedObjects = [];
    running = false;
    startTime = +new Date();
    lastStepTime = -Infinity;
    animLoop = function(timestamp) {
      var delta, msPerFrame, remainder;
      timestamp || (timestamp = (+new Date()));
      msPerFrame = (1000 / I.FPS);
      delta = timestamp - lastStepTime;
      remainder = delta - msPerFrame;
      if (remainder > 0) {
        lastStepTime = timestamp - Math.min(remainder, msPerFrame);
        step();
      }
      return running ? window.requestAnimationFrame(animLoop) : null;
    };
    update = function() {
      var _ref, toRemove;
      self.trigger("update");
      _ref = I.objects.partition(function(object) {
        return object.update();
      });
      I.objects = _ref[0];
      toRemove = _ref[1];
      toRemove.invoke("trigger", "remove");
      I.objects = I.objects.concat(queuedObjects);
      queuedObjects = [];
      return self.trigger("afterUpdate");
    };
    draw = function() {
      canvas.withTransform(I.cameraTransform, function(canvas) {
        if (I.backgroundColor) {
          canvas.fill(I.backgroundColor);
        }
        self.trigger("preDraw", canvas);
        return I.objects.invoke("draw", canvas);
      });
      return self.trigger("draw", canvas);
    };
    step = function() {
      if (!I.paused || frameAdvance) {
        update();
        I.age += 1;
      }
      return draw();
    };
    canvas = I.canvas || $("<canvas />").powerCanvas();
    self = Core(I).extend({
      /***
      The add method creates and adds an object to the game world.

      Events triggered:
      <code>beforeAdd(entityData)</code>
      <code>afterAdd(gameObject)</code>

      @name add
      @methodOf Engine#
      @param entityData The data used to create the game object.
      @type GameObject
      */
      add: function(entityData) {
        var obj;
        self.trigger("beforeAdd", entityData);
        obj = GameObject.construct(entityData);
        self.trigger("afterAdd", obj);
        if (running && !I.paused) {
          queuedObjects.push(obj);
        } else {
          I.objects.push(obj);
        }
        return obj;
      },
      /***
      Returns a reference to the canvas.

      @name canvas
      @methodOf Engine#
      */
      canvas: function() {
        return canvas;
      },
      objects: function() {
        return I.objects;
      },
      objectAt: function(x, y) {
        var bounds, targetObject;
        targetObject = null;
        bounds = {
          x: x,
          y: y,
          width: 1,
          height: 1
        };
        self.eachObject(function(object) {
          if (object.collides(bounds)) {
            return (targetObject = object);
          }
        });
        return targetObject;
      },
      eachObject: function(iterator) {
        return I.objects.each(iterator);
      },
      /***
      Start the game simulation.
      @methodOf Engine#
      @name start
      */
      start: function() {
        if (!(running)) {
          running = true;
          return window.requestAnimationFrame(animLoop);
        }
      },
      /***
      Stop the simulation.
      @methodOf Engine#
      @name stop
      */
      stop: function() {
        return (running = false);
      },
      frameAdvance: function() {
        I.paused = true;
        frameAdvance = true;
        step();
        return (frameAdvance = false);
      },
      play: function() {
        return (I.paused = false);
      },
      /***
      Pause the simulation
      @methodOf Engine#
      @name pause
      */
      pause: function() {
        return (I.paused = true);
      },
      paused: function() {
        return I.paused;
      },
      setFramerate: function(newFPS) {
        I.FPS = newFPS;
        self.stop();
        return self.start();
      }
    });
    self.attrAccessor("ambientLight");
    self.attrAccessor("backgroundColor");
    self.attrAccessor("cameraTransform");
    self.include(Bindable);
    defaultModules = ["Shadows", "HUD", "Developer", "SaveState", "Selector", "Collision", "Tilemap", "FPSCounter"];
    modules = defaultModules.concat(I.includedModules);
    modules = modules.without(I.excludedModules);
    modules.each(function(moduleName) {
      if (!(Engine[moduleName])) {
        throw ("#Engine." + (moduleName) + " is not a valid engine module");
      }
      return self.include(Engine[moduleName]);
    });
    return self;
  });
})(jQuery);;
/***
The <code>Collision</code> module provides some simple collision detection methods to engine.

@name Collision
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Collision = function(I, self) {
  return {
    /***
    Detects collisions between a bounds and the game objects.

    @name collides
    @methodOf Engine.Collision#
    @param bounds The bounds to check collisions with.
    @param [sourceObject] An object to exclude from the results.
    */
    collides: function(bounds, sourceObject) {
      return I.objects.inject(false, function(collided, object) {
        return collided || (object.solid() && (object !== sourceObject) && object.collides(bounds));
      });
    },
    /***
    Detects collisions between a ray and the game objects.

    @name rayCollides
    @methodOf Engine.Collision#
    @param source The origin point
    @param direction A point representing the direction of the ray
    @param [sourceObject] An object to exclude from the results.
    */
    rayCollides: function(source, direction, sourceObject) {
      var hits, nearestDistance, nearestHit;
      hits = I.objects.map(function(object) {
        var hit;
        hit = object.solid() && (object !== sourceObject) && Collision.rayRectangle(source, direction, object.centeredBounds());
        if (hit) {
          hit.object = object;
        }
        return hit;
      });
      nearestDistance = Infinity;
      nearestHit = null;
      hits.each(function(hit) {
        var d;
        if (hit && (d = hit.distance(source)) < nearestDistance) {
          nearestDistance = d;
          return (nearestHit = hit);
        }
      });
      return nearestHit;
    }
  };
};;
var _i, _ref, developerMode, fn, key, objectToUpdate;
var __hasProp = Object.prototype.hasOwnProperty;
/***
The <code>Developer</code> module provides a debug overlay and methods for debugging and live coding.

@name Developer
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Developer = function(I, self) {
  self.bind("draw", function(canvas) {
    if (I.paused) {
      canvas.withTransform(I.cameraTransform, function(canvas) {
        return I.objects.each(function(object) {
          canvas.fillColor('rgba(255, 0, 0, 0.5)');
          return canvas.fillRect(object.bounds().x, object.bounds().y, object.bounds().width, object.bounds().height);
        });
      });
      canvas.fillColor('rgba(0, 0, 0, 0.5)');
      canvas.fillRect(430, 10, 200, 60);
      canvas.fillColor('#fff');
      canvas.fillText("Developer Mode. Press Esc to resume", 440, 25);
      canvas.fillText("Shift+Left click to add boxes", 440, 43);
      return canvas.fillText("Right click red boxes to edit properties", 440, 60);
    }
  });
  return {};
};
developerMode = false;
objectToUpdate = null;
window.updateObjectProperties = function(newProperties) {
  return objectToUpdate ? $.extend(objectToUpdate, GameObject.construct(newProperties)) : null;
};
if (window.developerModeMousedown) {
  $(document).unbind(window.developerModeMousedown);
}
if (window.developerHotkeys) {
  _ref = developerHotkeys;
  for (key in _ref) {
    if (!__hasProp.call(_ref, key)) continue;
    fn = _ref[key];
    $(document).unbind("keydown", key, fn);
  }
}
window.developerModeMousedown = function(event) {
  var object;
  if (developerMode) {
    console.log(event.which);
    if (event.which === 3) {
      if (object = engine.objectAt(event.pageX, event.pageY)) {
        parent.editProperties(object.I);
        objectToUpdate = object;
      }
      return console.log(object);
    } else if (event.which === 2 || keydown.shift) {
      return (typeof window.developerAddObject === "function" ? window.developerAddObject(event) : undefined);
    }
  }
};
$(document).mousedown(window.developerModeMousedown);
window.developerHotkeys = {
  esc: function() {
    developerMode = !developerMode;
    return developerMode ? engine.pause() : engine.play();
  },
  f3: function() {
    return Local.set("level", engine.saveState());
  },
  f4: function() {
    return engine.loadState(Local.get("level"));
  },
  f5: function() {
    return engine.reload();
  }
};
_ref = window.developerHotkeys;
for (_i in _ref) {
  if (!__hasProp.call(_ref, _i)) continue;
  (function() {
    var key = _i;
    var fn = _ref[_i];
    return (window.developerHotkeys[key] = function(event) {
      event.preventDefault();
      return fn();
    });
  })();
}
_ref = window.developerHotkeys;
for (key in _ref) {
  if (!__hasProp.call(_ref, key)) continue;
  fn = _ref[key];
  $(document).bind("keydown", key, fn);
};
/***
The <code>FPSCounter</code> module tracks and displays the framerate.

@name FPSCounter
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.FPSCounter = function(I, self) {
  var framerate;
  $.reverseMerge(I, {
    showFPS: false
  });
  framerate = Framerate({
    noDOM: true
  });
  return self.bind("draw", function(canvas) {
    if (I.showFPS) {
      canvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace");
      canvas.fillColor("#FFF");
      canvas.fillText("fps: " + framerate.fps, 6, 18);
    }
    return framerate.rendered();
  });
};;
/***
The <code>HUD</code> module provides an extra canvas to draw to. GameObjects that respond to the
<code>drawHUD</code> method will draw to the HUD canvas. The HUD canvas is not cleared each frame, it is
the responsibility of the objects drawing on it to manage that themselves.

@name HUD
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.HUD = function(I, self) {
  var hudCanvas;
  hudCanvas = $("<canvas width=640 height=480 />").powerCanvas();
  hudCanvas.font("bold 9pt consolas, 'Courier New', 'andale mono', 'lucida console', monospace");
  self.bind("draw", function(canvas) {
    var hud;
    I.objects.each(function(object) {
      return (typeof object.drawHUD === "function" ? object.drawHUD(hudCanvas) : undefined);
    });
    hud = hudCanvas.element();
    return canvas.drawImage(hud, 0, 0, hud.width, hud.height, 0, 0, hud.width, hud.height);
  });
  return {};
};;
(function($) {
  var _ref, b2DebugDraw, b2World;
  _ref = Box2D.Dynamics;
  b2World = _ref.b2World;
  b2DebugDraw = _ref.b2DebugDraw;
  /***
  (Module) The <code>Box2D</code> module provides physics integration via Box2D.

  @name Box2D
  @fieldOf Engine

  @param {Object} I Instance variables
  @param {Object} self Reference to the engine
  */
  return (Engine.Box2D = function(I, self) {
    var debugCanvas, debugDraw, debugElement, destroyPhysicsBodies, fireCollisionEvents, pendingCollisions, pendingDestructions, world;
    $.reverseMerge(I, {
      scale: 0.1,
      gravity: Point(0, 98),
      PHYSICS_DEBUG_DRAW: false
    });
    world = new b2World(new Box2D.Common.Math.b2Vec2(I.gravity.x, I.gravity.y), true);
    debugDraw = null;
    debugElement = null;
    debugCanvas = null;
    pendingCollisions = [];
    pendingDestructions = [];
    world.SetContactListener({
      BeginContact: function(contact) {
        var a, b;
        a = contact.GetFixtureA().GetBody().GetUserData();
        b = contact.GetFixtureB().GetBody().GetUserData();
        return pendingCollisions.push([a, b, contact]);
      },
      EndContact: function(contact) {},
      PreSolve: function(contact, oldManifold) {},
      PostSolve: function(contact, impulse) {}
    });
    fireCollisionEvents = function() {
      pendingCollisions.each(function(event) {
        var _ref2, a, b, contact;
        _ref2 = event;
        a = _ref2[0];
        b = _ref2[1];
        contact = _ref2[2];
        a.trigger("collision", b, contact);
        return b.trigger("collision", a, contact);
      });
      return (pendingCollisions = []);
    };
    destroyPhysicsBodies = function() {
      pendingDestructions.each(function(body) {
        return world.DestroyBody(body);
      });
      return (pendingDestructions = []);
    };
    self.bind("update", function() {
      world.Step(1 / I.FPS, 10, 10);
      world.ClearForces();
      fireCollisionEvents();
      return destroyPhysicsBodies();
    });
    self.bind("draw", function(canvas) {
      if (I.PHYSICS_DEBUG_DRAW) {
        if (!(debugDraw)) {
          debugElement = $("<canvas width=640 height=480 />").get(0);
          debugCanvas = debugElement.getContext("2d");
          debugDraw = new b2DebugDraw();
          debugDraw.SetSprite(debugCanvas);
          debugDraw.SetDrawScale(10);
          debugDraw.SetFillAlpha(0.3);
          debugDraw.SetLineThickness(1.0);
          debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
          world.SetDebugDraw(debugDraw);
        }
        world.DrawDebugData();
        return canvas.withTransform(I.cameraTransform, function(canvas) {
          return canvas.drawImage(debugElement, 0, 0, debugElement.width, debugElement.height, 0, 0, debugElement.width, debugElement.height);
        });
      }
    });
    self.bind("beforeAdd", function(entityData) {
      return (entityData.world = world);
    });
    self.bind("afterAdd", function(object) {
      return object.bind("remove", function() {
        return pendingDestructions.push(object.body());
      });
    });
    return {};
  });
})(jQuery);;
/***
The <code>SaveState</code> module provides methods to save and restore the current engine state.

@name SaveState
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.SaveState = function(I, self) {
  var savedState;
  savedState = null;
  return {
    rewind: function() {},
    /***
    Save the current game state and returns a JSON object representing that state.

    @name saveState
    @methodOf Engine.SaveState#
    */
    saveState: function() {
      return (savedState = I.objects.map(function(object) {
        return $.extend({}, object.I);
      }));
    },
    /***
    Loads the game state passed in, or the last saved state, if any.

    @name loadState
    @methodOf Engine.SaveState#
    @param [newState] The game state to load.
    */
    loadState: function(newState) {
      if (newState || (newState = savedState)) {
        I.objects.invoke("trigger", "remove");
        I.objects = [];
        return newState.each(function(objectData) {
          return self.add($.extend({}, objectData));
        });
      }
    },
    /***
    Reloads the current engine state, useful for hotswapping code.

    @name reload
    @methodOf Engine.SaveState#
    */
    reload: function() {
      var oldObjects;
      oldObjects = I.objects;
      I.objects = [];
      return oldObjects.each(function(object) {
        object.trigger("remove");
        return self.add(object.I);
      });
    }
  };
};;
/***
The <code>Selector</code> module provides methods to query the engine to find game objects.

@name Selector
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Selector = function(I, self) {
  var instanceMethods;
  instanceMethods = {
    set: function(attr, value) {
      return this.each(function(item) {
        return (item.I[attr] = value);
      });
    }
  };
  return {
    /***
    Get a selection of GameObjects that match the specified selector criteria. The selector language
    can select objects by id, class, or attributes.

    To select an object by id use "#anId"

    To select objects by class use "MyClass"

    To select objects by properties use ".someProperty" or ".someProperty=someValue"

    You may mix and match selectors. "Wall.x=0" to select all objects of class Wall with an x property of 0.

    @name find
    @methodOf Engine#
    @param {String} selector
    @type Array
    */
    find: function(selector) {
      var matcher, results;
      results = [];
      matcher = Engine.Selector.generate(selector);
      I.objects.each(function(object) {
        if (matcher.match(object)) {
          return results.push(object);
        }
      });
      return $.extend(results, instanceMethods);
    }
  };
};
$.extend(Engine.Selector, {
  parse: function(selector) {
    return selector.split(",").invoke("trim");
  },
  process: function(item) {
    var result;
    result = /^(\w+)?#?([\w\-]+)?\.?([\w\-]+)?=?([\w\-]+)?/.exec(item);
    if (result) {
      if (result[4]) {
        result[4] = result[4].parse();
      }
      return result.splice(1);
    } else {
      return [];
    }
  },
  generate: function(selector) {
    var ATTR, ATTR_VALUE, ID, TYPE, components;
    components = Engine.Selector.parse(selector).map(function(piece) {
      return Engine.Selector.process(piece);
    });
    TYPE = 0;
    ID = 1;
    ATTR = 2;
    ATTR_VALUE = 3;
    return {
      match: function(object) {
        var _i, _len, _ref, _ref2, attr, attrMatch, component, idMatch, typeMatch, value;
        _ref = components;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          component = _ref[_i];
          idMatch = (component[ID] === object.I.id) || !component[ID];
          typeMatch = (component[TYPE] === object.I["class"]) || !component[TYPE];
          if (attr = component[ATTR]) {
            if (typeof (_ref2 = (value = component[ATTR_VALUE])) !== "undefined" && _ref2 !== null) {
              attrMatch = (object.I[attr] === value);
            } else {
              attrMatch = object.I[attr];
            }
          } else {
            attrMatch = true;
          }
          if (idMatch && typeMatch && attrMatch) {
            return true;
          }
        }
        return false;
      }
    };
  }
});;
/***
The <code>Shadows</code> module provides a lighting extension to the Engine. Objects that have
an illuminate method will add light to the scene. Objects that have an true opaque attribute will cast
shadows.

@name Shadows
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Shadows = function(I, self) {
  var shadowCanvas;
  shadowCanvas = $("<canvas width=640 height=480 />").powerCanvas();
  self.bind("draw", function(canvas) {
    var shadows;
    if (I.ambientLight < 1) {
      shadowCanvas.compositeOperation("source-over");
      shadowCanvas.clear();
      shadowCanvas.fill("rgba(0, 0, 0, " + (1 - I.ambientLight) + ")");
      shadowCanvas.compositeOperation("destination-out");
      shadowCanvas.withTransform(I.cameraTransform, function(shadowCanvas) {
        return I.objects.each(function(object, i) {
          if (object.illuminate) {
            shadowCanvas.globalAlpha(1);
            return object.illuminate(shadowCanvas);
          }
        });
      });
      shadows = shadowCanvas.element();
      return canvas.drawImage(shadows, 0, 0, shadows.width, shadows.height, 0, 0, shadows.width, shadows.height);
    }
  });
  return {};
};;
/***
The <code>Tilemap</code> module provides a way to load tilemaps in the engine.

@name Tilemap
@fieldOf Engine
@module

@param {Object} I Instance variables
@param {Object} self Reference to the engine
*/
Engine.Tilemap = function(I, self) {
  var map;
  map = null;
  self.bind("preDraw", function(canvas) {
    return (typeof map === "undefined" || map === null) ? undefined : map.draw(canvas);
  });
  return {
    loadMap: function(name, complete) {
      return (map = Tilemap.load({
        name: name,
        complete: complete,
        entity: self.add
      }));
    }
  };
};;
var Framerate;
/***
@name Framerate
@constructor

This object keeps track of framerate and displays it by creating and appending an
html element to the DOM.

Once created you call snapshot at the end of every rendering cycle.
*/
Framerate = function(options) {
  var element, framerateUpdateInterval, framerates, numFramerates, renderTime, self, updateFramerate;
  options || (options = {});
  if (!(options.noDOM)) {
    element = $("<div>", {
      css: {
        color: "#FFF",
        fontFamily: "consolas, 'Courier New', 'andale mono', 'lucida console', monospace",
        fontWeight: "bold",
        paddingLeft: 4,
        position: "fixed",
        top: 0,
        left: 0
      }
    }).appendTo('body').get(0);
  }
  numFramerates = 15;
  framerateUpdateInterval = 250;
  renderTime = -1;
  framerates = [];
  updateFramerate = function() {
    var _i, _len, _ref, framerate, rate, tot;
    tot = 0;
    _ref = framerates;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      rate = _ref[_i];
      tot += rate;
    }
    framerate = (tot / framerates.length).round();
    self.fps = framerate;
    if (element) {
      return (element.innerHTML = "fps: " + framerate);
    }
  };
  setInterval(updateFramerate, framerateUpdateInterval);
  /***
  @name rendered
  @methodOf Framerate#

  Call this method everytime you render.
  */
  return (self = {
    rendered: function() {
      var framerate, newTime, t;
      if (renderTime < 0) {
        return (renderTime = new Date().getTime());
      } else {
        newTime = new Date().getTime();
        t = newTime - renderTime;
        framerate = 1000 / t;
        framerates.push(framerate);
        while ((framerates.length > numFramerates)) {
          framerates.shift();
        }
        return (renderTime = newTime);
      }
    }
  });
};;
var GameObject;
/***
The default base class for all objects you can add to the engine.

GameObjects fire events that you may bind listeners to. Event listeners
may be bound with <code>object.bind(eventName, callback)</code>

@name GameObject
@extends Core
@constructor
@instanceVariables age, active, created, destroyed, solid, includedModules, excludedModules
*/
/***
Triggered when the object is created.
@name create
@methodOf GameObject#
@event
*/
/***
Triggered when object is destroyed. Use
the destroy event to add particle effects, play sounds, etc.

@name destroy
@methodOf GameObject#
@event
*/
/***
Triggered during every update step.

@name step
@methodOf GameObject#
@event
*/
/***
Triggered every update after the `step` event is triggered.

@name update
@methodOf GameObject#
@event
*/
/***
Triggered when the object is removed from
the engine. Use the remove event to handle any clean up.

@name remove
@methodOf GameObject#
@event
*/
GameObject = function(I) {
  var autobindEvents, defaultModules, modules, self;
  I || (I = {});
  /***
  @name I
  @memberOf GameObject#
  */
  $.reverseMerge(I, {
    age: 0,
    active: true,
    created: false,
    destroyed: false,
    solid: false,
    includedModules: [],
    excludedModules: []
  });
  self = Core(I).extend({
    /***
    Update the game object. This is generally called by the engine.

    @name update
    @methodOf GameObject#
    */
    update: function() {
      if (I.active) {
        self.trigger('step');
        self.trigger('update');
        I.age += 1;
      }
      return I.active;
    },
    draw: function(canvas) {
      return I.transform ? canvas.withTransform(I.transform, function(canvas) {
        return self.trigger('draw', canvas);
      }) : canvas.withTransform(Matrix.translation(I.x, I.y), function(canvas) {
        return self.trigger('draw', canvas);
      });
    },
    /***
    Destroys the object and triggers the destroyed callback.

    @name destroy
    @methodOf GameObject#
    */
    destroy: function() {
      if (!(I.destroyed)) {
        self.trigger('destroy');
      }
      I.destroyed = true;
      return (I.active = false);
    }
  });
  defaultModules = [Bindable, Bounded, Drawable, Durable];
  modules = defaultModules.concat(I.includedModules.invoke('constantize'));
  modules = modules.without(I.excludedModules.invoke('constantize'));
  modules.each(function(Module) {
    return self.include(Module);
  });
  self.attrAccessor("solid");
  autobindEvents = ['create', 'destroy', 'step'];
  autobindEvents.each(function(eventName) {
    var event;
    return (event = I[eventName]) ? (typeof event === "function" ? self.bind(eventName, event) : self.bind(eventName, eval("(function() {" + (event) + "})"))) : null;
  });
  if (!(I.created)) {
    self.trigger('create');
  }
  I.created = true;
  return self;
};
/***
Construct an object instance from the given entity data.
@name construct
@memberOf GameObject
@param {Object} entityData
*/
GameObject.construct = function(entityData) {
  return entityData["class"] ? entityData["class"].constantize()(entityData) : GameObject(entityData);
};;
var GameUtil;
GameUtil = {
  readImageData: function(data, callback) {
    var ctx, getPixelColor, img;
    getPixelColor = function(imageData, x, y) {
      var index;
      index = (x + y * imageData.width) * 4;
      return [imageData.data[index + 0], imageData.data[index + 1], imageData.data[index + 2]].invoke("toColorPart").join('');
    };
    ctx = document.createElement('canvas').getContext('2d');
    img = new Image();
    img.onload = function() {
      var colors, imageData;
      ctx.drawImage(img, 0, 0);
      imageData = ctx.getImageData(0, 0, img.width, img.height);
      colors = [];
      img.height.times(function(y) {
        return img.width.times(function(x) {
          return colors.push(getPixelColor(imageData, x, y));
        });
      });
      return callback({
        colors: colors,
        width: img.width,
        height: img.height
      });
    };
    return (img.src = data);
  }
};;
var Heavy;
Heavy = function(I) {
  I || (I = {});
  $.reverseMerge(I, {
    gravity: 0.2,
    maxSpeed: 5
  });
  return {
    before: {
      update: function() {
        return (I.velocity = I.velocity.add(Point(0, I.gravity)));
      }
    }
  };
};;
var Hittable;
Hittable = function(I, self) {
  I || (I = {});
  $.reverseMerge(I, {
    health: 25
  });
  return {
    hit: function() {
      I.health--;
      if (I.health < 0) {
        return self.destroy();
      }
    }
  };
};;
var Movable;
/***
The Movable module automatically updates the position and velocity of
GameObjects based on the velocity and acceleration. It does not check
collisions so is probably best suited to particle effect like things.

@name Movable
@module
@constructor

@param {Object} I Instance variables
*/
Movable = function(I) {
  $.reverseMerge(I, {
    acceleration: Point(0, 0),
    velocity: Point(0, 0)
  });
  I.acceleration = Point(I.acceleration.x, I.acceleration.y);
  I.velocity = Point(I.velocity.x, I.velocity.y);
  return {
    before: {
      update: function() {
        var _ref, currentSpeed;
        I.velocity = I.velocity.add(I.acceleration);
        if (typeof (_ref = I.maxSpeed) !== "undefined" && _ref !== null) {
          currentSpeed = I.velocity.magnitude();
          if (currentSpeed > I.maxSpeed) {
            I.velocity = I.velocity.scale(I.maxSpeed / currentSpeed);
          }
        }
        I.x += I.velocity.x;
        return I.y += I.velocity.y;
      }
    }
  };
};;
(function($) {
  var SCALE, _ref, b2Body, b2BodyDef, b2CircleShape, b2Fixture, b2FixtureDef, b2MassData, b2PolygonShape, b2Vec2, b2World;
  SCALE = 0.1;
  _ref = Box2D.Common.Math;
  b2Vec2 = _ref.b2Vec2;
  _ref = Box2D.Dynamics;
  b2BodyDef = _ref.b2BodyDef;
  b2Body = _ref.b2Body;
  b2FixtureDef = _ref.b2FixtureDef;
  b2Fixture = _ref.b2Fixture;
  b2World = _ref.b2World;
  _ref = Box2D.Collision.Shapes;
  b2PolygonShape = _ref.b2PolygonShape;
  b2CircleShape = _ref.b2CircleShape;
  b2MassData = _ref.b2MassData;
  /***
  The Physical module, when included in a GameObject, gives the object a
  physical presence in the Box2D physics simulation of the engine.

  @name Physical
  @module
  @constructor

  @param {Object} I Instance variables
  @param {Object} self Reference to including object
  */
  return (window.Physical = function(I, self) {
    var body, bodyDef, center, fixDef;
    $.reverseMerge(I, {
      density: 1.0,
      dynamic: false,
      friction: 0.1,
      restitution: 0.5,
      rotatable: false
    });
    fixDef = new b2FixtureDef();
    fixDef.density = I.density;
    fixDef.friction = I.friction;
    fixDef.restitution = I.restitution;
    fixDef.shape = new b2PolygonShape();
    fixDef.shape.SetAsBox(I.width / 2 * SCALE, I.height / 2 * SCALE);
    bodyDef = new b2BodyDef();
    if (I.dynamic) {
      bodyDef.type = b2Body.b2_dynamicBody;
      bodyDef.fixedRotation = !I.rotatable;
    } else {
      bodyDef.type = b2Body.b2_staticBody;
    }
    center = self.center().scale(SCALE);
    bodyDef.position = new b2Vec2(center.x, center.y);
    if (I.rotation) {
      bodyDef.angle = I.rotation;
    }
    body = I.world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);
    body.SetUserData(self);
    self.bind("step", function() {
      I.x = (body.GetPosition().x / SCALE) - (I.width / 2);
      I.y = (body.GetPosition().y / SCALE) - (I.height / 2);
      return (I.rotation = body.GetAngle());
    });
    return {
      applyImpulse: function(vector) {
        return body.ApplyImpulse(new b2Vec2(vector.x, vector.y), body.GetPosition());
      },
      body: function() {
        return body;
      }
    };
  });
})(jQuery);;
var Rotatable;
Rotatable = function(I) {
  I || (I = {});
  $.reverseMerge(I, {
    rotation: 0,
    rotationalVelocity: 0
  });
  return {
    before: {
      update: function() {
        return I.rotation += I.rotationalVelocity;
      }
    }
  };
};;
var SpeechBox;
SpeechBox = function(I) {
  var addLine, chars, counter, grad, line, self, stringLine, text;
  I || (I = {});
  $.reverseMerge(I, {
    backgroundColor: 'rgb(175, 175, 175)',
    strokeColor: '#000',
    strokeWidth: 5,
    textColor: 'rgb(0, 0, 0)',
    textDelay: 1,
    gradient: true,
    height: 50,
    padding: 15,
    width: 400,
    text: "This is a test blah blah blh blah This is a test blah blah blah blah This is a test blah blah blah blah This is a test blah blah blah blah",
    x: 50,
    y: 40
  });
  chars = I.text.split("");
  text = [[]];
  line = 1;
  addLine = function() {
    line++;
    return (text[line - 1] = []);
  };
  stringLine = function(line) {
    return text[line - 1].join("");
  };
  counter = 0;
  if (I.gradient) {
    grad = Game.canvas.createLinearGradient(0, 0, 0, 3 * I.height);
    grad.addColorStop(0, I.backgroundColor);
    grad.addColorStop(1, 'rgb(0, 0, 0)');
  }
  return (self = {
    draw: function(canvas) {
      if (I.gradient) {
        canvas.context().fillStyle = grad;
      } else {
        canvas.fillColor(I.backgroundColor);
      }
      canvas.strokeColor(I.strokeColor);
      canvas.fillRoundRect(I.x + I.strokeWidth / 2, I.y + I.strokeWidth / 2, I.width - I.strokeWidth, I.height, 20, I.strokeWidth);
      canvas.fillColor(I.textColor);
      return (line).times(function(i) {
        return canvas.fillText(stringLine(i + 1), I.x + I.padding, I.y + (15 * (i + 1)));
      });
    },
    update: function() {
      var currentChar;
      counter = (counter + 1) % I.textDelay;
      if (counter <= 0) {
        currentChar = chars.shift();
        text[line - 1].push(currentChar);
        return Game.canvas.measureText(stringLine(line)) > I.width - I.padding * 2 ? addLine() : null;
      }
    }
  });
};;
/***
@name Sprite
@constructor
*/
(function() {
  var LoaderProxy, Sprite, fromPixieId, pixieSpriteImagePath;
  LoaderProxy = function() {
    return {
      draw: $.noop,
      fill: $.noop,
      frame: $.noop,
      update: $.noop,
      width: null,
      height: null
    };
  };
  Sprite = function(image, sourceX, sourceY, width, height) {
    sourceX || (sourceX = 0);
    sourceY || (sourceY = 0);
    width || (width = image.width);
    height || (height = image.height);
    return {
      /***
      Draw this sprite on the given canvas at the given position.

      @name draw
      @methodOf Sprite#

      @param canvas
      @param x
      @param y
      */
      draw: function(canvas, x, y) {
        return canvas.drawImage(image, sourceX, sourceY, width, height, x, y, width, height);
      },
      fill: function(canvas, x, y, width, height, repeat) {
        var pattern;
        repeat || (repeat = "repeat");
        pattern = canvas.createPattern(image, repeat);
        canvas.fillColor(pattern);
        return canvas.fillRect(x, y, width, height);
      },
      width: width,
      height: height
    };
  };
  Sprite.load = function(url, loadedCallback) {
    var img, proxy;
    img = new Image();
    proxy = LoaderProxy();
    img.onload = function() {
      var tile;
      tile = Sprite(this);
      $.extend(proxy, tile);
      return loadedCallback ? loadedCallback(proxy) : null;
    };
    img.src = url;
    return proxy;
  };
  pixieSpriteImagePath = "http://pixieengine.com/s3/sprites/";
  fromPixieId = function(id, callback) {
    return Sprite.load(pixieSpriteImagePath + id + "/original.png", callback);
  };
  window.Sprite = function(name, callback) {
    var id;
    if (App.Sprites) {
      id = App.Sprites[name];
      return id ? fromPixieId(id, callback) : warn("Could not find sprite named: '" + name + "' in App.");
    } else {
      return window.Sprite.fromURL(name, callback);
    }
  };
  /***
  A sprite that draws nothing.

  @name EMPTY
  @fieldOf Sprite
  @constant
  @type Sprite
  */
  /***
  A sprite that draws nothing.

  @name NONE
  @fieldOf Sprite
  @constant
  @type Sprite
  */
  window.Sprite.EMPTY = (window.Sprite.NONE = LoaderProxy());
  /***
  Loads a sprite with the given pixie id.

  @name fromPixieId
  @methodOf Sprite

  @param id
  @param [callback]

  @type Sprite
  */
  window.Sprite.fromPixieId = fromPixieId;
  /***
  Loads a sprite from a given url.

  @name fromURL
  @methodOf Sprite

  @param {String} url
  @param [callback]

  @type Sprite
  */
  window.Sprite.fromURL = Sprite.load;
  /***
  Loads a sprite with the given name.

  @name loadByName
  @methodOf Sprite

  @param {String} name
  @param [callback]

  @type Sprite
  */
  return (window.Sprite.loadByName = function(name, callback) {
    var url;
    url = ("" + (BASE_URL) + "/images/" + (name) + ".png");
    return Sprite.load(url, callback);
  });
})();;
(function() {
  var Map, fromPixieId, loadByName;
  Map = function(data, entityCallback) {
    var loadEntities, spriteLookup, tileHeight, tileWidth;
    tileHeight = data.tileHeight;
    tileWidth = data.tileWidth;
    spriteLookup = {};
    data.tileset.each(function(tileData, i) {
      return (spriteLookup[i] = Sprite.fromURL(tileData.src));
    });
    loadEntities = function() {
      if (!(entityCallback)) {
        return null;
      }
      return data.layers.each(function(layer, layerIndex) {
        var _i, _len, _ref, _ref2, _result, entities, entity, entityData, tileIndex;
        if (!(layer.name.match(/entities/i))) {
          return null;
        }
        layer.tiles == null ? undefined : layer.tiles.each(function(row, y) {
          return row.each(function(tileIndex, x) {
            var entityData;
            if (spriteLookup[tileIndex]) {
              entityData = $.extend({
                layer: layerIndex,
                sprite: spriteLookup[tileIndex],
                tileIndex: tileIndex,
                x: x * tileWidth,
                y: y * tileHeight
              }, data.tileset[tileIndex] == null ? undefined : data.tileset[tileIndex].properties);
              return entityCallback(entityData);
            }
          });
        });
        if (entities = layer.entities) {
          _result = []; _ref = entities;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            entity = _ref[_i];
            _result.push((function() {
              _ref2 = entity;
              tileIndex = _ref2.tileIndex;
              entityData = $.extend({
                layer: layerIndex,
                sprite: spriteLookup[tileIndex],
                x: entity.x,
                y: entity.y
              }, data.tileset[tileIndex] == null ? undefined : data.tileset[tileIndex].properties, entity.properties);
              return entityCallback(entityData);
            })());
          }
          return _result;
        }
      });
    };
    loadEntities();
    return $.extend(data, {
      draw: function(canvas, x, y) {
        return canvas.withTransform(Matrix.translation(x, y), function() {
          return data.layers.each(function(layer) {
            if (layer.name.match(/entities/i)) {
              return null;
            }
            return layer.tiles.each(function(row, y) {
              return row.each(function(tileIndex, x) {
                var sprite;
                return (sprite = spriteLookup[tileIndex]) ? sprite.draw(canvas, x * tileWidth, y * tileHeight) : null;
              });
            });
          });
        });
      }
    });
  };
  window.Tilemap = function(name, callback, entityCallback) {
    return fromPixieId(App.Tilemaps[name], callback, entityCallback);
  };
  fromPixieId = function(id, callback, entityCallback) {
    var proxy, url;
    url = ("http://pixieengine.com/s3/tilemaps/" + (id) + "/data.json");
    proxy = {
      draw: $.noop
    };
    $.getJSON(url, function(data) {
      $.extend(proxy, Map(data, entityCallback));
      return (typeof callback === "function" ? callback(proxy) : undefined);
    });
    return proxy;
  };
  loadByName = function(name, callback, entityCallback) {
    var proxy, url;
    url = ("" + (BASE_URL) + "/data/" + (name) + ".tilemap?" + (new Date().getTime()));
    proxy = {
      draw: $.noop
    };
    $.getJSON(url, function(data) {
      $.extend(proxy, Map(data, entityCallback));
      return (typeof callback === "function" ? callback(proxy) : undefined);
    });
    return proxy;
  };
  window.Tilemap.fromPixieId = fromPixieId;
  return (window.Tilemap.load = function(options) {
    if (options.pixieId) {
      return fromPixieId(options.pixieId, options.complete, options.entity);
    } else if (options.name) {
      return loadByName(options.name, options.complete, options.entity);
    }
  });
})();;
;$(function(){ undefined });