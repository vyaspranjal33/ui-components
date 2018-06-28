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
import Styles from './styles/meter.module.scss';
import cn from './utilities/classnames';
export const Meter = (_a) => {
    var { title, value, className } = _a, attributes = __rest(_a, ["title", "value", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['meter-container'], className) }, attributes),
        React.createElement("span", { className: Styles['meter-title'] }, title),
        ' ',
        React.createElement("span", { className: Styles['meter-value'] },
            value,
            "%"),
        React.createElement("div", { className: Styles['meter-bar'] },
            React.createElement("div", { className: cn(Styles['meter-bar-fill'], {
                    [Styles['is-above-50']]: value >= 50,
                    [Styles['is-below-25']]: value < 25,
                    [Styles['is-below-50']]: value < 50 && value >= 25,
                }), style: { width: `${value}%` } }))));
};
export default Meter;
//# sourceMappingURL=meter.js.map