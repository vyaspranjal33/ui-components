import React from 'react';
import Icon from './icon';
import cn from './utilities/classnames';
var iconFor = function (type) {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
export var Alert = function (_a) {
    var children = _a.children, dismissable = _a.dismissable, icon = _a.icon, inline = _a.inline, handleClick = _a.onClick, type = _a.type;
    return (React.createElement("div", { className: cn('alert', "alert-" + type, {
            'alert-inline': inline,
        }), role: "alert" },
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