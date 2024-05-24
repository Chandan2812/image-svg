'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coordinateSystem = require('./coordinate-system');

var _coordinateSystem2 = _interopRequireDefault(_coordinateSystem);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component() {
    _classCallCheck(this, Component);

    this.coordinateSystem = new _coordinateSystem2.default();
    this.style = new _style2.default();

    this.transform = this.transform.bind(this);
    this.translate = this.translate.bind(this);
    this.scale = this.scale.bind(this);
    this.rotate = this.rotate.bind(this);
    this.fill = this.fill.bind(this);
    this.stroke = this.stroke.bind(this);
    this.strokeWidth = this.strokeWidth.bind(this);
    this.toString = this.toString.bind(this);
  }

  _createClass(Component, [{
    key: 'transform',
    value: function transform(matrix) {
      this.coordinateSystem.apply(matrix);
      return this;
    }
  }, {
    key: 'translate',
    value: function translate(xDiff, yDiff) {
      this.transform([[1, 0, xDiff], [0, 1, yDiff], [0, 0, 1]]);
      return this;
    }
  }, {
    key: 'scale',
    value: function scale(xScale, yScale) {
      this.transform([[xScale, 0, 0], [0, yScale, 0], [0, 0, 1]]);
      return this;
    }
  }, {
    key: 'rotate',
    value: function rotate(angle) {
      var centerX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var centerY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.translate(centerX, centerY);
      this.transform([[Math.cos(angle), -Math.sin(angle), 0], [Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]]);
      this.translate(-centerX, -centerY);
      return this;
    }
  }, {
    key: 'fill',
    value: function fill(color) {
      Object.assign(this.style, { 'fill': color });
      return this;
    }
  }, {
    key: 'stroke',
    value: function stroke(color) {
      Object.assign(this.style, { 'stroke': color });
      return this;
    }
  }, {
    key: 'strokeWidth',
    value: function strokeWidth(thickness) {
      Object.assign(this.style, { 'stroke-width': thickness });
      return this;
    }
  }, {
    key: 'toString',
    value: function toString(type, params, options, children) {
      var paramString = '';
      Object.keys(params).forEach(function (key) {
        paramString += key + '="' + params[key] + '" ';
      });

      var result = '<' + type + ' ';
      if (!options || options.transform) {
        result += this.coordinateSystem + ' ';
      }
      if (!options || options.style) {
        result += this.style + ' ';
      }
      result += '' + paramString;

      if (children) {
        result += '>';
        result += this.children.reduce(function (combinedString, child) {
          return combinedString + child.toString();
        }, '');
        result += '</' + type + '>';
        return result;
      } else {
        result += '/>';
        return result;
      }
    }
  }]);

  return Component;
}();

exports.default = Component;