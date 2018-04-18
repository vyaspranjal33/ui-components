import React from 'react';
import cn from './utilities/classnames';
export var Badge = function (_a) {
    var children = _a.children, color = _a.color, content = _a.content;
    return (React.createElement("span", { className: cn('badge', color) }, children || content));
};
Badge.defaultProps = {
    children: 0,
    color: '',
};
export default Badge;
//# sourceMappingURL=badge.js.map