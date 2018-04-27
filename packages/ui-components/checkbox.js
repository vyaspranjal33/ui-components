import React from 'react';
export const Checkbox = ({ checked, disabled, id, label, children, onChange, value, }) => {
    return (React.createElement("div", { className: "input-checkbox-wrap" },
        React.createElement("input", { checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: "input-checkbox-label", htmlFor: id }, children ? children : label)));
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map