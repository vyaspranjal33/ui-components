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
        return (React.createElement("div", { className: Styles['btn-list'] },
            React.createElement("div", { className: cn(btnStyles.btn, Styles['btn-dropdown'], Styles.dropdown, Styles[`btn-${buttonType}`], {
                    [Styles['btn-dropdown-gear']]: gear,
                    [Styles['btn-on-dark']]: onDark,
                    [Styles['btn-small']]: small,
                    [Styles['has-badge']]: hasBadge,
                    [Styles['has-icon']]: hasIcon || loading,
                    [Styles['is-active']]: active,
                    [Styles['is-disabled']]: disabled,
                    [Styles['is-loading']]: loading,
                }), onClick: this.handleClick },
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React.createElement(Icon, { type: "gear" }) : label,
                React.createElement("ul", { className: Styles['dropdown-menu'] }, links))));
    }
}
DropdownButton.defaultProps = Button.defaultProps;
export default DropdownButton;
//# sourceMappingURL=dropdown-button.js.map