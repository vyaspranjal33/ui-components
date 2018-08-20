import React from 'react';
import cn from '../utilities/classnames';
import Styles from './grid.module.scss';
export const Row = ({ children }) => {
    return React.createElement("div", { className: cn(Styles.row, 'row') }, children);
};
export default Row;
//# sourceMappingURL=row.js.map