var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
export var Slider = function (_a) {
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
export { StatefulSlider };
Slider.defaultProps = {
    label: true,
    value: 0,
};
export default Slider;
//# sourceMappingURL=slider.js.map