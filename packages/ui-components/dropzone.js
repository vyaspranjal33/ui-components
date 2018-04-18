var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import cn from './utilities/classnames';
export var Dropzone = function (_a) {
    var active = _a.active, alert = _a.children, hovered = _a.hovered, large = _a.large;
    return (React.createElement("section", { className: cn('dropzone', {
            'has-inline-alert': !!alert,
            'is-active': active,
            'is-hovered': hovered,
            'is-large': large,
        }), role: "hidden" }, alert &&
        React.cloneElement(alert, __assign({}, alert.props, { inline: true }))));
};
Dropzone.defaultProps = {
    active: false,
    hovered: false,
    large: false,
};
export default Dropzone;
//# sourceMappingURL=dropzone.js.map