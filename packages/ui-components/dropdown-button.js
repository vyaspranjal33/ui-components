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
            menuOffset: 0,
        };
        this.toggleDropdown = (event) => {
            const { active: isActive } = this.state;
            let menuOffset = 0;
            const minimumDropdownWidth = 180;
            const windowWidth = window.innerWidth;
            const buttonWidth = this.dropdownElement.offsetWidth;
            const bounding = this.dropdownElement.getBoundingClientRect();
            if (bounding.x + minimumDropdownWidth > windowWidth) {
                menuOffset = -(minimumDropdownWidth - buttonWidth);
            }
            return this.setState({ active: !isActive, menuOffset }, () => {
                if (this.state.active) {
                    document.addEventListener('click', this.dismissDropdown, false);
                }
            });
        };
        this.dismissDropdown = () => {
            this.setState({ active: false });
            document.removeEventListener('click', this.dismissDropdown, false);
        };
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.dismissDropdown);
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
                className: cn(link.props.className, Styles['dropdown-link']),
            });
        });
        return (React.createElement("div", { className: btnStyles['btn-list'] },
            React.createElement("div", Object.assign({ className: cn(btnStyles.btn, btnStyles['btn-dropdown'], 'btn-dropdown', Styles.dropdown, btnStyles[`btn-${buttonType}`], {
                    [btnStyles['btn-dropdown-gear']]: gear && !icon,
                    [btnStyles['btn-on-dark']]: onDark,
                    [btnStyles['btn-small']]: small,
                    [Styles['has-badge']]: hasBadge,
                    [Styles['has-icon']]: hasIcon || loading,
                    [Styles['is-active']]: isActive,
                    [btnStyles['has-badge']]: hasBadge,
                    [btnStyles['has-icon']]: hasIcon || loading,
                    [btnStyles['is-active']]: isActive,
                    [btnStyles['is-disabled']]: disabled,
                    [btnStyles['is-loading']]: loading,
                }, className), onClick: this.toggleDropdown, ref: node => (this.dropdownElement = node) }, attributes),
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? (React.createElement(Icon, { className: btnStyles['sg-icon'], type: icon || 'gear' })) : (label),
                React.createElement("ul", { className: Styles['dropdown-menu'], style: { transform: `translate(${this.state.menuOffset}px)` } }, links))));
    }
}
DropdownButton.defaultProps = Button.defaultProps;
export default DropdownButton;
//# sourceMappingURL=dropdown-button.js.map