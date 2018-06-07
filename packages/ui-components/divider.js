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
import Styles from './styles/hr.module.scss';
import cn from './utilities/classnames';
export const Divider = (_a) => {
    var { label, thin, className } = _a, attributes = __rest(_a, ["label", "thin", "className"]);
    return (React.createElement("hr", Object.assign({ className: cn(className, {
            [Styles['has-label']]: !!label,
            [Styles['is-thin']]: thin,
        }), "data-label": label }, attributes)));
};
Divider.defaultProps = {
    label: null,
    thin: false,
};
export default Divider;
//# sourceMappingURL=divider.js.map