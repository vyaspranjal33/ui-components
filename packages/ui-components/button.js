/* tslint:disable:one-variable-per-declaration */
import React from 'react';
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import Styles from './styles/button.module.scss';
import cn from './utilities/classnames';
import withNativeProps from './withNativeProps';
export const Button = (props) => {
    return (React.createElement(Buttonized, Object.assign({}, props),
        React.createElement("button", null, props.children)));
};
export const Buttonized = ({ children, type, badge, disabled, loading, small, onDark, onClick, group, active, icon, id, }) => {
    const hasBadge = !!badge || badge === 0;
    const hasIcon = !!icon;
    const content = [];
    if (hasBadge) {
        content.push(React.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return (React.cloneElement(children, {
        className: cn(Styles.btn, Styles[`btn-${type}`], {
            [Styles['btn-on-dark']]: onDark,
            [Styles['btn-small']]: small,
            [Styles['has-badge']]: hasBadge,
            [Styles['has-icon']]: hasIcon || loading,
            [Styles['is-active']]: active,
            [Styles['is-disabled']]: disabled,
            [Styles['is-loading']]: loading,
        }),
        id,
        onClick,
    }, content));
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
    type: 'primary',
};
export default withNativeProps(Button);
//# sourceMappingURL=button.js.map