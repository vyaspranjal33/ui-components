import React from 'react';
import cn from '../utilities/classnames';
import Styles from './grid.module.scss';
export const Column = ({ children, width, offset }) => {
    const colClass = width > 0 ? `col-${width}` : '';
    const offsetClass = offset > 0 ? `col-offset-${offset}` : '';
    return (React.createElement("div", { className: cn({
            [colClass]: width > 0,
            [Styles[colClass]]: width > 0,
            [offsetClass]: offset > 0,
            [Styles[offsetClass]]: offset > 0,
        }) }, children));
};
export default Column;
//# sourceMappingURL=column.js.map