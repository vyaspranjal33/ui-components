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
import cn from './utilities/classnames';
import Styles from './styles/icon.module.scss';
const lightStyle = { color: 'white' };
export const Icon = (_a) => {
    var { type, className, onClick: handleClick, onDark, size } = _a, attributes = __rest(_a, ["type", "className", "onClick", "onDark", "size"]);
    return (React.createElement("i", Object.assign({ className: cn('sg-icon', `sg-icon-${type}`, Styles['sg-icon'], Styles[`sg-icon-${type}`], {
            [className]: !!className,
            [Styles[`is-size-${size}`]]: size,
        }), onClick: handleClick, style: onDark ? lightStyle : null }, attributes)));
};
Icon.defaultProps = {
    className: '',
    onDark: false,
};
export default Icon;
//# sourceMappingURL=icon.js.map