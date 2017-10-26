import * as cn from 'classnames';
import * as React from 'react';
import Badge from './Badge';
import Icon from './Icon';
import Loader from './Loader';
export const Button = ({ children, type, badge, disabled, loading, small, onDark, onClick, group, active, icon, }) => {
    const hasBadge = !!badge || badge === 0;
    const hasIcon = !!icon;
    return (React.createElement("button", { className: cn('btn', `btn-${type}`, {
            'btn-on-dark': onDark,
            'btn-small': small,
            'has-badge': hasBadge,
            'has-icon': hasIcon || loading,
            'is-active': active,
            'is-disabled': disabled,
            'is-loading': loading,
        }), onClick: onClick },
        hasBadge && React.createElement(Badge, null, badge),
        hasIcon && React.createElement(Icon, { type: icon }),
        loading && React.createElement(Loader, { small: true, onDark: type === 'primary' }),
        children));
};
Button.defaultProps = {
    active: false,
    badge: null,
    children: '',
    disabled: false,
    group: false,
    icon: null,
    loading: false,
    onClick: () => { },
    onDark: false,
    small: false,
    type: 'secondary',
};
export default Button;
//# sourceMappingURL=Button.js.map