import React from 'react';
import cn from '../utilities/classnames';
export var Column = function (_a) {
    var children = _a.children, width = _a.width, offset = _a.offset;
    return (React.createElement("div", { className: cn((width > 0 ? 'col-' + width.toString() : ''), (offset > 0 ? 'col-offset-' + offset.toString() : '')) }, children));
};
export default Column;
//# sourceMappingURL=Column.js.map