(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Checkbox = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var Checkbox = function (_a) {
    var checked = _a.checked, disabled = _a.disabled, id = _a.id, label = _a.label, onChange = _a.onChange, value = _a.value;
    return (React.createElement("div", { className: "input-checkbox-wrap" },
        React.createElement("input", { checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: "input-checkbox-label", htmlFor: id }, label)));
};

exports.Checkbox = Checkbox;
exports.default = Checkbox;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=checkbox.js.map
