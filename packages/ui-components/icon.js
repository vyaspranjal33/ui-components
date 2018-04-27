import React from 'react';
import cn from './utilities/classnames';
const lightStyle = { color: 'white' };
export const Icon = ({ type, className, onClick: handleClick, onDark, }) => (React.createElement("i", { className: cn('sg-icon', `sg-icon-${type}`, { [className]: !!className }), onClick: handleClick, style: onDark ? lightStyle : null }));
Icon.defaultProps = {
    className: '',
    onDark: false,
};
export default Icon;
//# sourceMappingURL=icon.js.map