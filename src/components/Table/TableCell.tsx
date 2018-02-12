import React from 'react';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableCell: React.SFC<TableCellProps> = ({
  children,
  className,
}) => {
  return (
    <td className={className}>
      {children}
    </td>
  );
};

export default TableCell;
