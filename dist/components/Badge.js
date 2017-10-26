import * as cn from 'classnames';
import * as React from 'react';
export const Badge = ({ children, color, content }) => (React.createElement("span", { className: cn('badge', color) }, children || content));
Badge.defaultProps = {
    children: 0,
    color: '',
};
export default Badge;
//# sourceMappingURL=Badge.js.map