import React from 'react';
import Icon from './icon';
const evaluateRenderProp = (prop) => {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React.createElement(Icon, { type: prop });
    }
};
export const EmptyState = ({ children, icon, buttons, header, }) => (React.createElement("div", { className: "table-state is-empty" },
    icon && evaluateRenderProp(icon),
    header && React.createElement("h2", null, header),
    children));
export default EmptyState;
//# sourceMappingURL=empty-state.js.map