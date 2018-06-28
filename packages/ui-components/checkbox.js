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
import Styles from './styles/checkbox-radio.module.scss';
export const Checkbox = (_a) => {
    var { checked, disabled, id, label, children, onChange, value } = _a, attributes = __rest(_a, ["checked", "disabled", "id", "label", "children", "onChange", "value"]);
    return (React.createElement("div", { className: Styles['input-checkbox-wrap'] },
        React.createElement("input", Object.assign({ checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }, attributes)),
        React.createElement("label", { className: Styles['input-checkbox-label'], htmlFor: id }, children ? children : label)));
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map