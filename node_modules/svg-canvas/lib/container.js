'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

    _this.children = [];

    _this.include = _this.include.bind(_this);
    _this.find = _this.find.bind(_this);
    _this.toString = _this.toString.bind(_this);
    return _this;
  }

  _createClass(Container, [{
    key: 'include',
    value: function include(component) {
      this.children.push(component);
      return this;
    }
  }, {
    key: 'find',
    value: function find(componentClass) {
      var result = [];
      this.children.forEach(function (child) {
        if (child instanceof componentClass) {
          result.push(child);
        }
        if (child instanceof Container) {
          result = result.concat(child.find(componentClass));
        }
      });
      return result;
    }
  }, {
    key: 'toString',
    value: function toString(type, params, options) {
      return _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'toString', this).call(this, type, params, options, this.children);
    }
  }]);

  return Container;
}(_component2.default);

exports.default = Container;