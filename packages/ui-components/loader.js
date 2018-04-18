import React from 'react';
import cn from './utilities/classnames';
export var Loader = function (_a) {
    var onDark = _a.onDark, large = _a.large, small = _a.small, centered = _a.centered;
    var size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React.createElement("svg", { className: cn('sg-loader', {
            'is-centered': centered,
            'is-large': large,
            'is-small': small,
            'loader-on-dark': onDark,
        }) },
        React.createElement("rect", { className: "logo-square bottom-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square bottom-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-right", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-right", width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};
export default Loader;
//# sourceMappingURL=loader.js.map