'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_Container) {
  _inherits(SVG, _Container);

  function SVG(width, height) {
    _classCallCheck(this, SVG);

    var _this = _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).call(this));

    Object.assign(_this, { width: width, height: height });

    _this.toString = _this.toString.bind(_this);
    return _this;
  }

  _createClass(SVG, [{
    key: 'toString',
    value: function toString() {
      var width = this.width;
      var height = this.height;
      var viewBox = '0 0 ' + this.width + ' ' + this.height;
      var xmlns = 'http://www.w3.org/2000/svg';
      return _get(SVG.prototype.__proto__ || Object.getPrototypeOf(SVG.prototype), 'toString', this).call(this, 'svg', { width: width, height: height, viewBox: viewBox, xmlns: xmlns }, { transform: false, style: false });
    }
  }]);

  return SVG;
}(_container2.default);

exports.default = SVG;