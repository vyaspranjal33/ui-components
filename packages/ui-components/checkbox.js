(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Checkbox = {}),global.React));
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

var Checkbox = function (_a) {
    var checked = _a.checked, value = _a.children, disabled = _a.disabled, id = _a.id, onChange = _a.onChange;
    id = id || "checkbox-" + value.toLowerCase();
    return (React.createElement("div", { className: "input-checkbox-wrap" },
        React.createElement("input", { defaultChecked: checked, disabled: disabled, id: id, type: "checkbox", value: value, onChange: onChange }),
        React.createElement("label", { className: "input-checkbox-label", htmlFor: id }, value)));
};
var StatefulCheckbox = /** @class */ (function (_super) {
    __extends(StatefulCheckbox, _super);
    function StatefulCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    StatefulCheckbox.prototype.handleChange = function (event) {
        var _this = this;
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, function () {
            _this.props.onChange(event);
        });
    };
    StatefulCheckbox.prototype.render = function () {
        return (React.createElement(Checkbox, __assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    };
    return StatefulCheckbox;
}(React.Component));

exports.Checkbox = Checkbox;
exports.default = Checkbox;
exports.StatefulCheckbox = StatefulCheckbox;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=checkbox.js.map
