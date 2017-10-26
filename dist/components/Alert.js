import * as cn from 'classnames';
import * as React from 'react';
import Icon from './Icon';
const iconFor = (type) => {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
export const Alert = ({ children, icon, inline, onClick: handleClick, type, }) => {
    return (React.createElement("div", { className: cn('alert', `alert-${type}`, {
            'alert-inline': inline,
        }), role: "alert" },
        React.createElement("p", null,
            React.createElement(Icon, { type: icon || iconFor(type) }),
            children,
            React.createElement(Icon, { type: "x", onClick: handleClick }))));
};
Alert.defaultProps = {
    hidden: false,
    inline: false,
};
export default Alert;
//# sourceMappingURL=Alert.js.map