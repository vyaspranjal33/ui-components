import React from 'react';
import Styles from '../styles/switches.module.scss';
import cn from '../utilities/classnames';
export const Switch = ({ className, disabled, id, offText, on, onText, onChange, value, }) => {
    return (React.createElement("div", { className: cn(Styles['switch-toggle'], className, {
            [Styles['is-disabled']]: disabled,
        }) },
        React.createElement("input", { checked: on, className: Styles['switch-checkbox'], disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: Styles['switch-label'], htmlFor: id },
            React.createElement("div", { className: cn(Styles['switch-option'], Styles['switch-option-off']) }, offText),
            React.createElement("div", { className: cn(Styles['switch-option'], Styles['switch-option-on']) }, onText)),
        React.createElement("div", { className: Styles['switch-selector'] })));
};
Switch.defaultProps = {
    offText: 'off',
    onText: 'on',
    value: '',
};
export default Switch;
//# sourceMappingURL=index.js.map