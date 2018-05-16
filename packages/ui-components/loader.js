import React from 'react';
import cn from './utilities/classnames';
import Styles from './styles/loader.module.scss';
export const Loader = ({ onDark, large, small, centered }) => {
    let size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React.createElement("svg", { className: cn(Styles['sg-loader'], {
            [Styles['is-centered']]: centered,
            [Styles['is-large']]: large,
            [Styles['is-small']]: small,
            [Styles['loader-on-dark']]: onDark,
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