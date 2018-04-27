import React from 'react';
import Badge from './badge';
import { Button } from './button';
import Icon from './icon';
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
        const { badge, children, disabled, gear, group, icon, label, loading, onClick, onDark, small, type, } = this.props;
        const { active } = this.state;
        const hasBadge = !!badge || badge === 0;
        const hasIcon = !!icon;
        let buttonType = type;
        if (gear) {
            buttonType = 'secondary';
        }
        const links = map(children, (link) => {
            return React.cloneElement(link, {
                className: `${link.props.className} dropdown-link`,
            });
        });
        return (React.createElement("div", { className: "btn-list" },
            React.createElement("div", { className: cn('btn', 'btn-dropdown', 'dropdown', `btn-${buttonType}`, {
                    'btn-dropdown-gear': gear,
                    'btn-on-dark': onDark,
                    'btn-small': small,
                    'has-badge': hasBadge,
                    'has-icon': hasIcon || loading,
                    'is-active': active,
                    'is-disabled': disabled,
                    'is-loading': loading,
                }), onClick: this.handleClick },
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React.createElement(Icon, { type: "gear" }) : label,
                React.createElement("ul", { className: "dropdown-menu" }, links))));
    }
}
DropdownButton.defaultProps = Button.defaultProps;
export default DropdownButton;
//# sourceMappingURL=dropdown-button.js.map