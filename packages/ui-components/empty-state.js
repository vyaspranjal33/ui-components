import React from 'react';
import Icon from './icon';
import Styles from './styles/tables.module.scss';
const evaluateRenderProp = (prop) => {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React.createElement(Icon, { type: prop });
    }
};
export const EmptyState = ({ children, icon, buttons, header, }) => (React.createElement("div", { className: `${Styles['table-state']} ${Styles['is-empty']}` },
    icon && evaluateRenderProp(icon),
    header && React.createElement("h2", null, header),
    children));
export default EmptyState;
//# sourceMappingURL=empty-state.js.map