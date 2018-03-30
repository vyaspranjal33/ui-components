(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Radio = {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

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

var map = React__default.Children.map;
var radioGroupMapper = function (props) { return (map(props.children, function (child) { return (child && (React__default.createElement(child.type, __assign({ key: child.props.value, name: props.name, onChange: props.onChange }, child.props)))); })); };
var RadioGroup = function (props) { return (React__default.createElement(React.Fragment, null, radioGroupMapper(props))); };
var Radio = function (_a) {
    var checked = _a.checked, children = _a.children, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, value = _a.value;
    id = id || "radio-" + value.toLowerCase();
    return (React__default.createElement("div", { className: "input-radio-wrap" },
        React__default.createElement("input", { checked: checked, defaultChecked: defaultChecked, disabled: disabled, id: id, name: name, onChange: onChange, type: "radio", value: value }),
        React__default.createElement("label", { className: "input-radio-label", htmlFor: id }, label)));
};
var StatefulRadio = /** @class */ (function (_super) {
    __extends(StatefulRadio, _super);
    function StatefulRadio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked,
        };
        _this.handleChange = _this
            .handleChange
            .bind(_this);
        return _this;
    }
    StatefulRadio.prototype.handleChange = function (event) {
        var _this = this;
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, function () {
            _this
                .props
                .onChange(event);
        });
    };
    StatefulRadio.prototype.render = function () {
        return (React__default.createElement(Radio, __assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    };
    return StatefulRadio;
}(React__default.Component));

exports.RadioGroup = RadioGroup;
exports.Radio = Radio;
exports.default = Radio;
exports.StatefulRadio = StatefulRadio;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=radio.js.map
