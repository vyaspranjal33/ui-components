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
import cn from './utilities/classnames';
const { map } = React.Children;
export const ButtonList = (_a) => {
    var { children, onDark, className } = _a, attributes = __rest(_a, ["children", "onDark", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['btn-list'], className) }, attributes), map(children, (button) => {
        return button && React.cloneElement(button, { onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};
export default ButtonList;
//# sourceMappingURL=button-list.js.map