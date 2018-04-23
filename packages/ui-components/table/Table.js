import React from 'react';
import cn from '../utilities/classnames';
import TableBody from './table-body';
import TableCell from './table-cell';
import TableHeader from './table-header';
import HeaderCell from './table-header-cell';
import TableRow from './table-row';
export { TableCell, TableRow, TableHeader, TableBody, HeaderCell };
export var Table = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("table", { className: cn('table-wrap', className) }, children));
};
export default Table;
//# sourceMappingURL=table.js.map