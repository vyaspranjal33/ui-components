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
import Styles from './styles/dropzone.module.scss';
import cn from './utilities/classnames';
export const Dropzone = (_a) => {
    var { active, children: alert, hovered, large, className } = _a, attributes = __rest(_a, ["active", "children", "hovered", "large", "className"]);
    return (React.createElement("section", Object.assign({ className: cn(Styles.dropzone, className, {
            [Styles['has-inline-alert']]: !!alert,
            [Styles['is-active']]: active,
            [Styles['is-hovered']]: hovered,
            [Styles['is-large']]: large,
        }), role: "hidden" }, attributes), alert &&
        React.cloneElement(alert, Object.assign({}, alert.props, { inline: true }))));
};
Dropzone.defaultProps = {
    active: false,
    hovered: false,
    large: false,
};
export default Dropzone;
//# sourceMappingURL=dropzone.js.map