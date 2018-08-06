"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Test component */
var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Table);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.getWidthAsPercentOfTotalWidth = function () {
            return parseInt(_this.props.width * (_this.props.percent / 100), 10);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Table, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                width = _props.width,
                height = _props.height;

            return _react2.default.createElement(
                "div",
                { style: { border: 'solid 1px lightgray', width: width } },
                "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
                _react2.default.createElement(
                    "div",
                    { style: {
                            width: this.getWidthAsPercentOfTotalWidth(),
                            height: height
                        } },
                    "Table Example"
                ),
                "\xA0\xA0\xA0\xA0\xA0\xA0"
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

Table.propTypes = {

    /** Bar width */
    width: _propTypes2.default.number.isRequired,

    /** Bar height */
    height: _propTypes2.default.number
};

Table.defaultProps = {
    height: 5
};

exports.default = Table;