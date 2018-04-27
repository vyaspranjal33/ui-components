import React from 'react';
import cn from './utilities/classnames';
export const Badge = ({ children, color, content }) => (React.createElement("span", { className: cn('badge', color) }, children || content));
Badge.defaultProps = {
    children: 0,
    color: '',
};
export default Badge;
//# sourceMappingURL=badge.js.map