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
import Styles from './styles/loader.module.scss';
import cn from './utilities/classnames';
export const Loader = (_a) => {
    var { onDark, large, small, centered, className } = _a, attributes = __rest(_a, ["onDark", "large", "small", "centered", "className"]);
    let size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React.createElement("svg", Object.assign({ className: cn('sg-loader', Styles['sg-loader'], className, {
            [Styles['is-centered']]: centered,
            [Styles['is-large']]: large,
            [Styles['is-small']]: small,
            [Styles['loader-on-dark']]: onDark,
        }) }, attributes),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles['bottom-left']), width: size, height: size }),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles['bottom-middle']), width: size, height: size }),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles.middle), width: size, height: size }),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles['top-middle']), width: size, height: size }),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles['top-right']), width: size, height: size }),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles['middle-left']), width: size, height: size }),
        React.createElement("rect", { className: cn(Styles['logo-square'], Styles['middle-right']), width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};
export default Loader;
//# sourceMappingURL=loader.js.map