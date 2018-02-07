import React from 'react';
import cn from '../../utilities/classnames';

export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableBody: React.SFC<TableBodyProps> = ({
  children,
  className,
}) => {
  return (
    <tbody className={cn(className)}>
      {children}
    </tbody>
  );
};

export default TableBody;
