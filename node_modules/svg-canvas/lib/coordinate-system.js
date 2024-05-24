'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoordinateSystem = function () {
  function CoordinateSystem(matrix) {
    _classCallCheck(this, CoordinateSystem);

    if (matrix) {
      this.matrix = matrix;
    } else {
      this.matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    }

    this.apply = this.apply.bind(this);
    this.toString = this.toString.bind(this);
  }

  _createClass(CoordinateSystem, [{
    key: 'apply',
    value: function apply(matrix) {
      var newMatrix = [[], [], []];

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var newValue = 0;
          for (var k = 0; k < 3; k++) {
            newValue = newValue + matrix[i][k] * this.matrix[k][j];
          }
          newMatrix[i][j] = newValue;
        }
      }

      this.matrix = newMatrix;
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'transform="matrix(' + this.matrix[0][0] + ',' + this.matrix[1][0] + ',' + this.matrix[0][1] + ',' + this.matrix[1][1] + ',' + this.matrix[0][2] + ',' + this.matrix[1][2] + ')"';
    }
  }]);

  return CoordinateSystem;
}();

exports.default = CoordinateSystem;