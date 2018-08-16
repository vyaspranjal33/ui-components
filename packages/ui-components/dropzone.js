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
const dropzoneStyle = {
    alignItems: 'center',
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'center',
};
export const Dropzone = (_a) => {
    var { active, alert, hovered, invalid, large, children, className, onDragOver, onDragLeave, onDragEnd, onDrop } = _a, attributes = __rest(_a, ["active", "alert", "hovered", "invalid", "large", "children", "className", "onDragOver", "onDragLeave", "onDragEnd", "onDrop"]);
    return (React.createElement("section", Object.assign({ className: cn('dropzone', Styles.dropzone, className, {
            [Styles['has-inline-alert']]: !!alert,
            'has-inline-alert': !!alert,
            [Styles['is-active']]: active,
            'is-active': active,
            [Styles['is-hovered']]: hovered,
            'is-hovered': hovered,
            [Styles['is-invalid']]: invalid,
            'is-invalid': invalid,
            [Styles['is-large']]: large,
            'is-large': large,
        }), role: "hidden", style: dropzoneStyle }, attributes, { onDragOver: onDragOver, onDragLeave: onDragLeave, onDragEnd: onDragEnd, onDrop: onDrop }),
        React.createElement("div", null, children),
        alert &&
            React.cloneElement(alert, Object.assign({}, alert.props, { inline: true }))));
};
Dropzone.defaultProps = {
    active: false,
    hovered: false,
    invalid: false,
    large: false,
};
export default Dropzone;
//# sourceMappingURL=dropzone.js.map