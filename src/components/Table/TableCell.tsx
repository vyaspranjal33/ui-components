import React from 'react';
import cn from '../../utilities/classnames';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableCell: React.SFC<TableCellProps> = ({
  children,
  className,
}) => {
  return (
    <td className={cn(className)}>
      {children}
    </td>
  );
};

export default TableCell;
