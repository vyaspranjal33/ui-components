import React from 'react';
import Icon from './icon';
export var Actions = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "actions" },
        React.createElement(Icon, { type: "ellipsis" }),
        React.createElement("div", { className: "action-icons" }, children)));
};
export var ActionsCell = function (_a) {
    var children = _a.children;
    return (React.createElement("td", { className: "actions" },
        React.createElement(Icon, { type: "ellipsis" }),
        React.createElement("div", { className: "action-icons" }, children)));
};
export var Action = function (_a) {
    var title = _a.title, icon = _a.icon, handleClick = _a.onClick;
    return (React.createElement("span", { "data-tooltip": title, "data-tooltip-pos": "up", onClick: handleClick },
        React.createElement(Icon, { type: icon })));
};
export default Actions;
//# sourceMappingURL=actions.js.map