import React from 'react';
import cn from '../utilities/classnames';
export var Switch = function (_a) {
    var className = _a.className, disabled = _a.disabled, id = _a.id, offText = _a.offText, on = _a.on, onText = _a.onText, onChange = _a.onChange, value = _a.value;
    return (React.createElement("div", { className: cn('switch', className, {
            'is-disabled': disabled,
        }) },
        React.createElement("input", { checked: on, className: "switch-checkbox", disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React.createElement("label", { className: "switch-label", htmlFor: id },
            React.createElement("div", { className: "switch-option switch-option-off" }, offText),
            React.createElement("div", { className: "switch-option switch-option-on" }, onText)),
        React.createElement("div", { className: "switch-selector" })));
};
Switch.defaultProps = {
    offText: 'off',
    onText: 'on',
    value: '',
};
export default Switch;
//# sourceMappingURL=index.js.map