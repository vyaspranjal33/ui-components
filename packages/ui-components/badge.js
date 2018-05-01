import React from 'react';
import Styles from './styles/badge.module.scss';
import cn from './utilities/classnames';
export const Badge = ({ children, color, content }) => (React.createElement("span", { className: cn(Styles.badge, color) }, children || content));
Badge.defaultProps = {
    children: 0,
    color: '',
};
export default Badge;
//# sourceMappingURL=badge.js.map