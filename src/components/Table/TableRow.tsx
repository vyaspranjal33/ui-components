import React from 'react';
import cn from '../../utilities/classnames';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableRow: React.SFC<TableRowProps> = ({
  children,
  className,
}) => {
  return (
    <tr className={cn(className)}>
      {children}
    </tr>
  );
};

export default TableRow;
