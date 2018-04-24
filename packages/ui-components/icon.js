import React from 'react';
import cn from './utilities/classnames';
var lightStyle = { color: 'white' };
export var Icon = function (_a) {
    var type = _a.type, className = _a.className, handleClick = _a.onClick, onDark = _a.onDark;
    return (React.createElement("i", { className: cn('sg-icon', "sg-icon-" + type, (_b = {}, _b[className] = !!className, _b)), onClick: handleClick, style: onDark ? lightStyle : null }));
    var _b;
};
Icon.defaultProps = {
    className: '',
    onDark: false,
};
export default Icon;
//# sourceMappingURL=icon.js.map