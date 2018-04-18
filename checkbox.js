import React from 'react';
export var Checkbox = function (_a) {
    var checked = _a.checked, disabled = _a.disabled, id = _a.id, label = _a.label, onChange = _a.onChange, value = _a.value;
    return (React.createElement("div", { className: "input-checkbox-wrap" },
        React.createElement("input", { checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: "input-checkbox-label", htmlFor: id }, label)));
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map