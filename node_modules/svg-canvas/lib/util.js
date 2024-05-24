"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PI = 3.141592653589793;

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    Object.assign(this, { x: x, y: y });

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.scale = this.scale.bind(this);
    this.equal = this.equal.bind(this);
    this.toString = this.toString.bind(this);
  }

  _createClass(Point, [{
    key: "plus",
    value: function plus(p) {
      return point(this.x + p.x, this.y + p.y);
    }
  }, {
    key: "minus",
    value: function minus(p) {
      return this.plus(point(-p.x, -p.y));
    }
  }, {
    key: "scale",
    value: function scale(scaler) {
      return point(this.x * scaler, this.y * scaler);
    }
  }, {
    key: "equal",
    value: function equal(p) {
      return doubleEqual(this.x, p.x) && doubleEqual(this.y, p.y);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "point(" + this.x + ", " + this.y + ")";
    }
  }]);

  return Point;
}();

function point() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Point, [null].concat(params)))();
}

var Angle = function () {
  function Angle(value) {
    _classCallCheck(this, Angle);

    this.value = value;
  }

  _createClass(Angle, [{
    key: "equal",
    value: function equal(a) {
      return doubleEqual((this.value % PI + PI) % PI, (a.value % PI + PI) % PI);
    }
  }, {
    key: "radian",
    get: function get() {
      return this.value;
    }
  }, {
    key: "degree",
    get: function get() {
      return this.value * 180 / PI;
    }
  }, {
    key: "cos",
    get: function get() {
      return Math.cos(this.value);
    }
  }, {
    key: "sin",
    get: function get() {
      return Math.sin(this.value);
    }
  }, {
    key: "tan",
    get: function get() {
      return Math.tan(this.value);
    }
  }]);

  return Angle;
}();

function radian(value) {
  return new Angle(value);
}

function degree(value) {
  return new Angle(value * PI / 180);
}

function doubleEqual(a, b) {
  var diff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0000000001;

  return Math.abs(a - b) < diff;
}

exports.Point = Point;
exports.point = point;
exports.Angle = Angle;
exports.radian = radian;
exports.degree = degree;