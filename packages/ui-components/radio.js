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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Fragment } from 'react';
var map = React.Children.map;
var radioGroupMapper = function (props) {
    return map(props.children, function (child) {
        return child && (React.createElement(child.type, __assign({ key: child.props.value, name: props.name, onChange: props.onChange }, child.props)));
    });
};
export var RadioGroup = function (props) { return React.createElement(Fragment, null, radioGroupMapper(props)); };
export var Radio = function (_a) {
    var checked = _a.checked, children = _a.children, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, value = _a.value, attributes = __rest(_a, ["checked", "children", "defaultChecked", "disabled", "id", "label", "name", "onChange", "value"]);
    id = id || "radio-" + value.toLowerCase();
    return (React.createElement("div", { className: "input-radio-wrap" },
        React.createElement("input", __assign({ checked: checked, defaultChecked: defaultChecked, disabled: disabled, id: id, name: name, onChange: onChange, type: "radio", value: value }, attributes)),
        React.createElement("label", { className: "input-radio-label", htmlFor: id }, label)));
};
var StatefulRadio = /** @class */ (function (_super) {
    __extends(StatefulRadio, _super);
    function StatefulRadio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    StatefulRadio.prototype.handleChange = function (event) {
        var _this = this;
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, function () {
            _this.props.onChange(event);
        });
    };
    StatefulRadio.prototype.render = function () {
        return (React.createElement(Radio, __assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    };
    return StatefulRadio;
}(React.Component));
export { StatefulRadio };
export default Radio;
//# sourceMappingURL=radio.js.map