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
import Icon from './icon';
import Styles from './styles/alert.module.scss';
import cn from './utilities/classnames';
const iconFor = (type) => {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
export const Alert = (_a) => {
    var { children, dismissable, icon, inline, onClick: handleClick, type, hidden, className } = _a, attributes = __rest(_a, ["children", "dismissable", "icon", "inline", "onClick", "type", "hidden", "className"]);
    return (React.createElement("div", Object.assign({ className: cn('alert', Styles.alert, Styles[`alert-${type}`], {
            [Styles['alert-inline']]: inline,
        }), role: "alert" }, attributes),
        React.createElement("p", null,
            React.createElement(Icon, { type: icon || iconFor(type) }),
            children,
            dismissable && React.createElement(Icon, { type: "x", onClick: handleClick }))));
};
Alert.defaultProps = {
    dismissable: true,
    hidden: false,
    inline: false,
};
export default Alert;
//# sourceMappingURL=alert.js.map