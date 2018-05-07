import React from 'react';
import Styles from './styles/checkbox-radio.module.scss';
export const Checkbox = ({ checked, disabled, id, label, children, onChange, value, }) => {
    return (React.createElement("div", { className: Styles['input-checkbox-wrap'] },
        React.createElement("input", { checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: Styles['input-checkbox-label'], htmlFor: id }, children ? children : label)));
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map