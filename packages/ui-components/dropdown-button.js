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
import Badge from './badge';
import { Button } from './button';
import Icon from './icon';
import btnStyles from './styles/button.module.scss';
import Styles from './styles/dropdown.module.scss';
import cn from './utilities/classnames';
const { map } = React.Children;
export class DropdownButton extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            active: false,
        };
        this.handleClick = () => {
            const { active } = this.state;
            this.setState({ active: !active });
        };
    }
    render() {
        const _a = this.props, { active, badge, children, disabled, gear, group, icon, label, loading, onClick, onDark, small, type, className } = _a, attributes = __rest(_a, ["active", "badge", "children", "disabled", "gear", "group", "icon", "label", "loading", "onClick", "onDark", "small", "type", "className"]);
        const isActive = this.state.active;
        const hasBadge = !!badge || badge === 0;
        const hasIcon = !!icon;
        let buttonType = type;
        if (gear) {
            buttonType = 'secondary';
        }
        if (gear && icon) {
            buttonType = 'group-item';
        }
        const links = map(children, (link) => {
            return React.cloneElement(link, {
                className: `${link.props.className} dropdown-link`,
            });
        });
        return (React.createElement("div", { className: Styles['btn-list'] },
            React.createElement("div", Object.assign({ className: cn(btnStyles.btn, Styles['btn-dropdown'], Styles.dropdown, Styles[`btn-${buttonType}`], {
                    [Styles['btn-dropdown-gear']]: gear && !icon,
                    [Styles['btn-on-dark']]: onDark,
                    [Styles['btn-small']]: small,
                    [Styles['has-badge']]: hasBadge,
                    [Styles['has-icon']]: hasIcon || loading,
                    [Styles['is-active']]: active,
                    [Styles['is-disabled']]: disabled,
                    [Styles['is-loading']]: loading,
                }, className), onClick: this.handleClick }, attributes),
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React.createElement(Icon, { type: icon || 'gear' }) : label,
                React.createElement("ul", { className: Styles['dropdown-menu'] }, links))));
    }
}
DropdownButton.defaultProps = Button.defaultProps;
export default DropdownButton;
//# sourceMappingURL=dropdown-button.js.map