import React from 'react';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableRow: React.SFC<TableRowProps> = ({
  children,
  className,
}) => {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
};

export default TableRow;
