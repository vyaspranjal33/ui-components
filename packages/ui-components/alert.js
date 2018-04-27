import React from 'react';
import Icon from './icon';
import cn from './utilities/classnames';
const iconFor = (type) => {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
export const Alert = ({ children, dismissable, icon, inline, onClick: handleClick, type, }) => {
    return (React.createElement("div", { className: cn('alert', `alert-${type}`, {
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