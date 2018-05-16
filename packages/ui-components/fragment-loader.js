import React from 'react';
import cn from './utilities/classnames';
import Styles from './styles/loader.module.scss';
export const FragmentLoader = () => {
    return (React.createElement("svg", { className: Styles['fragment-loader'] },
        React.createElement("rect", { className: cn(Styles['fragment-square'], Styles['left']), width: "10", height: "10" }),
        React.createElement("rect", { className: cn(Styles['fragment-square'], Styles['middle']), width: "10", height: "10" }),
        React.createElement("rect", { className: cn(Styles['fragment-square'], Styles['right']), width: "10", height: "10" })));
};
export default FragmentLoader;
//# sourceMappingURL=fragment-loader.js.map