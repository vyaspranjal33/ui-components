import React from 'react';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableRow: React.SFC<TableRowProps> = ({
  children,
  className,
  ...attributes
}) => {
  return (
    <tr className={className} {...attributes}>
      {children}
    </tr>
  );
};

export default TableRow;
