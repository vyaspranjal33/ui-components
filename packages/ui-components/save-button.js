import React from 'react';
import Styles from './styles/save-button.module.scss';
import cn from './utilities/classnames';
import Button from './button';
import Icon from './icon';
import Loader from './loader';
export class SaveButton extends React.Component {
    render() {
        const onDark = this.props.onDark || this.props.type === 'primary';
        const iconType = this.props.hasIcon && !(this.props.saving || this.props.saved)
            ? 'save-draft'
            : null;
        return (React.createElement(Button, Object.assign({}, this.props, { icon: iconType, className: cn({
                'btn-save': true,
                [Styles['btn-save']]: true,
                'is-loading': this.props.saving,
                [Styles['is-loading']]: this.props.saving,
                'is-saved': this.props.saved,
                [Styles['is-saved']]: this.props.saved,
                [this.props.className]: true,
            }) }),
            React.createElement(Loader, { small: true, onDark: onDark }),
            React.createElement(Icon, { type: "check" }),
            React.createElement("div", { className: Styles['btn-text'] }, this.props.children)));
    }
}
export default SaveButton;
//# sourceMappingURL=save-button.js.map