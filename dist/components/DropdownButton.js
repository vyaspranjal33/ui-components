import * as cn from 'classnames';
import * as React from 'react';
import Badge from './Badge';
import { Button } from './Button';
import Icon from './Icon';
const { map } = React.Children;
export class DropdownButton extends React.Component {
    constructor() {
        super();
        this.defaultProps = Button.defaultProps;
        this.state = {
            active: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { active } = this.state;
        this.setState({ active: !active });
    }
    render() {
        const { children, type, badge, disabled, loading, small, gear, onDark, onClick, group, icon, label, } = this.props;
        const { active } = this.state;
        const hasBadge = !!badge || badge === 0;
        const hasIcon = !!icon;
        const links = map(children, (link) => {
            return React.cloneElement(link, {
                className: `${link.props.className} dropdown-link`,
            });
        });
        return (React.createElement("div", { className: "btn-list" },
            React.createElement("div", { className: cn('btn', 'btn-dropdown', 'dropdown', `btn-${type}`, {
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
                !gear && hasIcon && React.createElement(Icon, { type: icon }),
                gear ? React.createElement(Icon, { type: "gear" }) : label,
                React.createElement("ul", { className: "dropdown-menu" }, links))));
    }
}
export default DropdownButton;
//# sourceMappingURL=DropdownButton.js.map