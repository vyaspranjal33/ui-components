import React from 'react';
import Styles from '../styles/switches.module.scss';
import cn from '../utilities/classnames';
export const Switch = ({ className, disabled, id, offText, on, onText, onChange, value, }) => {
    return (React.createElement("div", { className: cn('switch-toggle', Styles['switch-toggle'], className, {
            [Styles['is-disabled']]: disabled,
            'is-disabled': disabled,
        }) },
        React.createElement("input", { checked: on, className: cn('switch-checkbox', Styles['switch-checkbox']), disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: cn('switch-label', Styles['switch-label']), htmlFor: id },
            React.createElement("div", { className: cn('switch-option', Styles['switch-option'], 'switch-option-off', Styles['switch-option-off']) }, offText),
            React.createElement("div", { className: cn('switch-option', Styles['switch-option'], 'switch-option-on', Styles['switch-option-on']) }, onText)),
        React.createElement("div", { className: cn('switch-selector', Styles['switch-selector']) })));
};
Switch.defaultProps = {
    offText: 'off',
    onText: 'on',
    value: '',
};
export default Switch;
//# sourceMappingURL=index.js.map