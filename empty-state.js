import React from 'react';
import Icon from './icon';
var evaluateRenderProp = function (prop) {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React.createElement(Icon, { type: prop });
    }
};
export var EmptyState = function (_a) {
    var children = _a.children, icon = _a.icon, buttons = _a.buttons, header = _a.header;
    return (React.createElement("div", { className: "table-state is-empty" },
        icon && evaluateRenderProp(icon),
        header && React.createElement("h2", null, header),
        children));
};
export default EmptyState;
//# sourceMappingURL=empty-state.js.map