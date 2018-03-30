(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Slider = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Slider = function (_a) {
    var value = _a.value, id = _a.id, label = _a.label, handleChange = _a.onChange;
    return (React.createElement("div", { className: "input-range-wrap" },
        React.createElement("input", { id: id, max: "100", min: "0", onChange: handleChange, type: "range", value: value }),
        label && React.createElement("div", { className: "input-range-percent" },
            value,
            "%")));
};
var StatefulSlider = /** @class */ (function (_super) {
    __extends(StatefulSlider, _super);
    function StatefulSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value,
        };
        _this.handleChange = function (event) {
            var value = event.target.value;
            _this.setState({ value: value }, function () {
                _this.props.onChange(event, value);
            });
        };
        return _this;
    }
    StatefulSlider.prototype.render = function () {
        var onChange = this.props.onChange;
        var value = this.state.value;
        return (React.createElement(Slider, __assign({}, this.props, { value: value, onChange: this.handleChange })));
    };
    return StatefulSlider;
}(React.Component));
Slider.defaultProps = {
    label: true,
    value: 0,
};

exports.Slider = Slider;
exports.default = Slider;
exports.StatefulSlider = StatefulSlider;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=slider.js.map
