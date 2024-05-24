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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rect = function (_Component) {
  _inherits(Rect, _Component);

  function Rect() {
    _classCallCheck(this, Rect);

    var _this = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this));

    var basePoint = void 0,
        width = void 0,
        height = void 0;

    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    if (params[0] instanceof _util.Point && typeof params[1] === 'number' && typeof params[2] === 'number' && (!params[3] || params[3] instanceof Array && typeof params[3][0] === 'number' && typeof params[3][1] === 'number' && params[3][0] >= 0 && params[3][0] <= 1 && params[3][1] >= 0 && params[3][1] <= 1)) {
      var origin = params[3] || [0, 0];
      width = params[1];
      height = params[2];
      basePoint = params[0].minus((0, _util.point)(width * origin[0], height * origin[1]));
    } else if (params[0] instanceof _util.Point && params[1] instanceof _util.Point) {
      basePoint = params[0];
      width = params[1].x - basePoint.x;
      height = params[1].y - basePoint.y;
    } else {
      throw new TypeError();
    }

    Object.assign(_this, { basePoint: basePoint, width: width, height: height });

    _this.toString = _this.toString.bind(_this);
    return _this;
  }

  _createClass(Rect, [{
    key: 'toString',
    value: function toString() {
      var _basePoint = this.basePoint,
          x = _basePoint.x,
          y = _basePoint.y;
      var width = this.width,
          height = this.height;

      return _get(Rect.prototype.__proto__ || Object.getPrototypeOf(Rect.prototype), 'toString', this).call(this, 'rect', { x: x, y: y, width: width, height: height });
    }
  }]);

  return Rect;
}(_component2.default);

exports.default = Rect;