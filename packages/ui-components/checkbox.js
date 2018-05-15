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
import React from 'react';
export var Checkbox = function (_a) {
    var checked = _a.checked, disabled = _a.disabled, id = _a.id, label = _a.label, onChange = _a.onChange, value = _a.value, attributes = __rest(_a, ["checked", "disabled", "id", "label", "onChange", "value"]);
    return (React.createElement("div", { className: "input-checkbox-wrap" },
        React.createElement("input", __assign({ checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }, attributes)),
        React.createElement("label", { className: "input-checkbox-label", htmlFor: id }, label)));
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map