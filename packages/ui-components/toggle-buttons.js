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
import Styles from './styles/button.module.scss';
import ToggleAnything from './toggle-anything';
import cn from './utilities/classnames';
export const ToggleButtons = (_a) => {
    var { keys, selectedKey, children, onChange, className, style } = _a, attributes = __rest(_a, ["keys", "selectedKey", "children", "onChange", "className", "style"]);
    return (React.createElement(ToggleAnything, { keys: keys, selectedKey: selectedKey, onChange: onChange }, (...args) => (React.createElement("div", Object.assign({ className: cn(className, Styles['btn-group']), style: style }, attributes), children(...args)))));
};
export default ToggleButtons;
//# sourceMappingURL=toggle-buttons.js.map