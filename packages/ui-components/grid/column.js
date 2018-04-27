import React from 'react';
import cn from '../utilities/classnames';
export const Column = ({ children, width, offset, }) => {
    return (React.createElement("div", { className: cn((width > 0 ? 'col-' + width.toString() : ''), (offset > 0 ? 'col-offset-' + offset.toString() : '')) }, children));
};
export default Column;
//# sourceMappingURL=column.js.map