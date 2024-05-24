'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function () {
  function Style(style) {
    _classCallCheck(this, Style);

    Object.assign(this, style);

    this.toString = this.toString.bind(this);
  }

  _createClass(Style, [{
    key: 'toString',
    value: function toString() {
      var _this = this;

      var result = 'style="';
      Object.keys(this).forEach(function (key) {
        if (!(_this[key] instanceof Function)) {
          result += key + ':' + _this[key] + ';';
        }
      });
      result += '"';
      return result;
    }
  }]);

  return Style;
}();

exports.default = Style;