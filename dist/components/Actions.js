import * as React from 'react';
import Icon from './Icon';
export const Actions = ({ children }) => {
    return (React.createElement("div", { className: "actions" },
        React.createElement(Icon, { type: "ellipsis" }),
        React.createElement("div", { className: "action-icons" }, children)));
};
export const Action = ({ title, icon, onClick: handleClick, }) => {
    return (React.createElement("span", { "data-tooltip": title, "data-tooltip-pos": "up", onClick: handleClick },
        React.createElement(Icon, { type: icon })));
};
export default Actions;
//# sourceMappingURL=Actions.js.map