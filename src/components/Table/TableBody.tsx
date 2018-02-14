import React from 'react';

export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableBody: React.SFC<TableBodyProps> = ({
  children,
  className,
}) => {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  );
};

export default TableBody;
