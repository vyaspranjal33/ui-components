import * as React from 'react';
import Icon from './Icon';
export const EmptyState = ({ children, icon, buttons, header, }) => (React.createElement("div", { className: "table-state is-empty" },
    icon && React.createElement(Icon, { type: icon }),
    header && React.createElement("h2", null, header),
    children));
export default EmptyState;
//# sourceMappingURL=EmptyState.js.map