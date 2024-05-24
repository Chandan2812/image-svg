'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_Component) {
  _inherits(Line, _Component);

  function Line() {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

    var startPoint = void 0,
        endPoint = void 0;

    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    if (params[0] instanceof _util.Point && params[1] instanceof _util.Point) {
      startPoint = params[0];
      endPoint = params[1];
    } else if (params[0] instanceof Array && params[1] instanceof Array) {
      var _ref = [_util.point.apply(undefined, _toConsumableArray(params[0])), _util.point.apply(undefined, _toConsumableArray(params[1]))];
      startPoint = _ref[0];
      endPoint = _ref[1];
    } else if (params[0] instanceof _util.Point && params[1] instanceof _util.Angle && typeof params[2] === 'number' && (!params[3] || typeof params[3] === 'number' && params[3] >= 0 && params[3] <= 1)) {
      if (!params[3]) {
        params[3] = 0;
      }
      var dx = params[2] * params[1].cos;
      var dy = params[2] * params[1].sin;
      startPoint = params[0].minus((0, _util.point)(dx, dy).scale(params[3]));
      endPoint = params[0].plus((0, _util.point)(dx, dy).scale(1 - params[3]));
    } else {
      throw new TypeError();
    }

    Object.assign(_this, { startPoint: startPoint, endPoint: endPoint });

    _this.toString = _this.toString.bind(_this);
    return _this;
  }

  _createClass(Line, [{
    key: 'toString',
    value: function toString() {
      var x1 = this.startPoint.x;
      var y1 = this.startPoint.y;
      var x2 = this.endPoint.x;
      var y2 = this.endPoint.y;
      return _get(Line.prototype.__proto__ || Object.getPrototypeOf(Line.prototype), 'toString', this).call(this, 'line', { x1: x1, y1: y1, x2: x2, y2: y2 });
    }
  }]);

  return Line;
}(_component2.default);

exports.default = Line;